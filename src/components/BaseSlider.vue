<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  itemCount: { type: Number, required: true },
  ariaLabel: { type: String, default: '슬라이더' },
  // 트랙 내부 첫 아이템을 찾기 위한 셀렉터 (width 측정용)
  itemSelector: { type: String, default: '[data-slider-item]' },
})

const viewportEl = ref(null)
const trackEl = ref(null)

const index = ref(0)
const maxIndex = ref(0)
const stepPx = ref(0)

const isDragging = ref(false)
const dragOffsetPx = ref(0)
const dragStartX = ref(0)
const dragStartY = ref(0)
const dragPointerId = ref(null)
const didDrag = ref(false)

let ro = null

function clampIndex(v) {
  if (v < 0) return 0
  if (v > maxIndex.value) return maxIndex.value
  return v
}

function sync() {
  const viewport = viewportEl.value
  const track = trackEl.value
  if (!viewport || !track) return

  const firstItem = track.querySelector(props.itemSelector)
  if (!firstItem) return

  const viewportWidth = viewport.clientWidth
  const itemWidth = firstItem.getBoundingClientRect().width
  const styles = window.getComputedStyle(track)
  const gap = Number.parseFloat(styles.gap || styles.columnGap || '0') || 0

  const step = itemWidth + gap
  stepPx.value = step

  const visibleCount = Math.max(1, Math.floor((viewportWidth + gap) / step))
  maxIndex.value = Math.max(0, props.itemCount - visibleCount)
  index.value = clampIndex(index.value)
}

function prev() {
  index.value = clampIndex(index.value - 1)
}

function next() {
  index.value = clampIndex(index.value + 1)
}

const translateX = computed(() => `translateX(${-index.value * stepPx.value + dragOffsetPx.value}px)`)
const pageCount = computed(() => maxIndex.value + 1)

defineExpose({
  prev,
  next,
  index,
  maxIndex,
})

function onPointerDown(e) {
  if (e.button != null && e.button !== 0) return
  if (!viewportEl.value) return
  if (stepPx.value <= 0) return

  isDragging.value = true
  didDrag.value = false
  dragOffsetPx.value = 0
  dragStartX.value = e.clientX
  dragStartY.value = e.clientY
  dragPointerId.value = e.pointerId

  viewportEl.value.setPointerCapture?.(e.pointerId)
}

function onPointerMove(e) {
  if (!isDragging.value) return
  if (dragPointerId.value != null && e.pointerId !== dragPointerId.value) return

  const dx = e.clientX - dragStartX.value
  const dy = e.clientY - dragStartY.value

  if (!didDrag.value) {
    if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return
    if (Math.abs(dy) > Math.abs(dx)) {
      onPointerUp(e)
      return
    }
    didDrag.value = true
  }

  const maxLeft = 0
  const maxRight = -maxIndex.value * stepPx.value
  const current = -index.value * stepPx.value + dx
  const rubber = 0.35
  let offset = dx

  if (current > maxLeft) offset = dx * rubber
  if (current < maxRight) offset = dx * rubber

  dragOffsetPx.value = offset
}

function finishDrag(dx) {
  if (stepPx.value <= 0) return
  const rawSteps = -dx / stepPx.value
  const moved = Math.round(rawSteps)
  const minMovePx = Math.max(24, stepPx.value * 0.18)

  if (Math.abs(dx) < minMovePx) {
    dragOffsetPx.value = 0
    return
  }

  index.value = clampIndex(index.value + moved)
  dragOffsetPx.value = 0
}

function onPointerUp(e) {
  if (!isDragging.value) return
  if (dragPointerId.value != null && e.pointerId !== dragPointerId.value) return

  const dx = e.clientX - dragStartX.value
  const wasDrag = didDrag.value

  isDragging.value = false
  didDrag.value = false
  dragPointerId.value = null

  if (wasDrag) finishDrag(dx)
  else dragOffsetPx.value = 0
}

onMounted(() => {
  sync()
  window.addEventListener('resize', sync)
  if (viewportEl.value && typeof ResizeObserver !== 'undefined') {
    ro = new ResizeObserver(sync)
    ro.observe(viewportEl.value)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', sync)
  ro?.disconnect()
})
</script>

<template>
  <div class="base-slider" :aria-label="ariaLabel">
    <div
      class="base-slider__viewport"
      ref="viewportEl"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      @pointercancel="onPointerUp"
    >
      <div
        class="base-slider__track"
        ref="trackEl"
        :class="{ 'is-dragging': isDragging }"
        :style="{ transform: translateX }"
      >
        <slot />
      </div>
    </div>

    <div class="base-slider__controls" aria-label="슬라이더 컨트롤">
      <button
        type="button"
        class="base-slider__nav"
        :disabled="index === 0"
        aria-label="이전"
        @click="prev"
      >
        ‹
      </button>
      <div class="base-slider__dots" role="tablist" aria-label="슬라이더 페이지">
        <button
          v-for="p in pageCount"
          :key="p"
          type="button"
          class="base-slider__dot"
          :class="{ 'is-active': p - 1 === index }"
          :aria-label="`페이지 ${p}`"
          :aria-current="p - 1 === index ? 'true' : undefined"
          @click="index = p - 1"
        />
      </div>
      <button
        type="button"
        class="base-slider__nav"
        :disabled="index === maxIndex"
        aria-label="다음"
        @click="next"
      >
        ›
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/abstract' as *;

.base-slider {
  width: 100%;
  overflow: hidden;
}

.base-slider__viewport {
  /* 수평 슬라이드 + reveal용 translateY 등에서 세로로 비치는 overflow 방지 */
  overflow: hidden;
  width: 100%;
  touch-action: pan-y;
  cursor: grab;
  user-select: none;
}

.base-slider__track {
  display: flex;
  align-items: stretch;
  will-change: transform;
  transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1);
}

.base-slider__track.is-dragging {
  transition: none;
}

.base-slider__viewport:active {
  cursor: grabbing;
}

.base-slider__controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 18px;
}

.base-slider__nav {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid $border-main;
  background: $gray-000;
  color: $txt-main;
  cursor: pointer;

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
}

.base-slider__dots {
  display: flex;
  align-items: center;
  gap: 8px;
}

.base-slider__dot {
  width: 20px;
  height: 4px;
  border-radius: 999px;
  border: 0;
  background: $gray-200;
  cursor: pointer;

  &.is-active {
    background: $point-main;
  }
}
</style>

