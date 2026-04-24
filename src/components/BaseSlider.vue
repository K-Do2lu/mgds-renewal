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

const translateX = computed(() => `translateX(${-index.value * stepPx.value}px)`)
const pageCount = computed(() => maxIndex.value + 1)

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
    <div class="base-slider__viewport" ref="viewportEl">
      <div class="base-slider__track" ref="trackEl" :style="{ transform: translateX }">
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
  overflow-x: hidden;
  width: 100%;
}

.base-slider__track {
  display: flex;
  align-items: stretch;
  will-change: transform;
  transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1);
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

