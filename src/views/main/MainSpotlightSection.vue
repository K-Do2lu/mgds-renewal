<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const items = ref(
  Array.from({ length: 5 }).map((_, i) => ({
    id: i + 1,
    type: '채용공고',
    title: '정규직(일반직) 및 계약직 상시 채용',
    date: '0000. 00. 00',
  })),
)

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

  const firstCard = track.querySelector('.main-spotlight_card')
  if (!firstCard) return

  const viewportWidth = viewport.clientWidth
  const cardWidth = firstCard.getBoundingClientRect().width
  const styles = window.getComputedStyle(track)
  const gap =
    Number.parseFloat(styles.gap || styles.columnGap || '0') ||
    0

  const step = cardWidth + gap
  stepPx.value = step

  const visibleCount = Math.max(1, Math.floor((viewportWidth + gap) / step))
  maxIndex.value = Math.max(0, items.value.length - visibleCount)
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
  <section
    class="page-section page-section--surface-default main-spotlight"
    aria-labelledby="main-spotlight-title"
  >
    <div class="page-section__inner">
      <div class="main-spotlight__head">
        <h2 id="main-spotlight-title" class="page-section__title">
          <span class="point">MG데이터시스템</span>의<br />
          소식을 전해 드립니다.
        </h2>
      </div>

      <div class="main-spotlight__slider" aria-label="메인 소식 슬라이더">
        <div ref="viewportEl" class="main-spotlight__viewport">
          <div
            ref="trackEl"
            class="main-spotlight__track"
            :style="{ transform: translateX }"
          >
            <article class="main-spotlight_card" v-for="item in items" :key="item.id">
              <p class="main-spotlight_card-type">{{ item.type }}</p>
              <p class="main-spotlight_card-title">{{ item.title }}</p>
              <p class="main-spotlight_card-date">{{ item.date }}</p>
            </article>
          </div>
        </div>

        <div class="main-spotlight__controls" aria-label="슬라이더 컨트롤">
          <button
            type="button"
            class="main-spotlight__nav"
            :disabled="index === 0"
            aria-label="이전"
            @click="prev"
          >
            ‹
          </button>
          <div class="main-spotlight__dots" role="tablist" aria-label="슬라이더 페이지">
            <button
              v-for="p in pageCount"
              :key="p"
              type="button"
              class="main-spotlight__dot"
              :class="{ 'is-active': p - 1 === index }"
              :aria-label="`페이지 ${p}`"
              :aria-current="p - 1 === index ? 'true' : undefined"
              @click="index = p - 1"
            />
          </div>
          <button
            type="button"
            class="main-spotlight__nav"
            :disabled="index === maxIndex"
            aria-label="다음"
            @click="next"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/abstract' as *;

.page-section__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @include clamp(gap, 40px, 60px);
}

.main-spotlight__slider {
  width: 100%;
  overflow: hidden;
}

.main-spotlight__viewport {
  overflow-x: hidden;
  width: 100%;
}

.main-spotlight__track {
  display: flex;
  align-items: stretch;
  @include clamp(gap, 12px, 20px);
  will-change: transform;
  transition: transform 0.42s cubic-bezier(0.22, 1, 0.36, 1);
}

.main-spotlight_card {
  flex: 0 0 auto;
  width: min(clamp(264px, 40vw, 426px), 100%);
  @include flex(column, null, null, null);
  @include clamp(gap, 12px, 20px);
  @include clamp(padding, 20px, 30px);
  @include clamp(border-radius, 20px, 40px);
  border: 1px solid $border-main;
  background: $gray-000;
  text-align: left;
}

.main-spotlight_card-type {
  margin: 0;
  color: $txt-sub;
  font-size: 16px;
}

.main-spotlight_card-title {
  margin: 0;
  font-weight: 600;
  color: $txt-main;
  @include clamp(font-size, 14px, 18px);
}

@include bp(tab) {
  .main-spotlight__track {
    gap: 0;
  }

  // 태블릿에서도 한 장씩 보여서 넘침 방지
  .main-spotlight_card {
    width: 100%;
    max-width: 100%;
  }
}

@include bp(mo) {
  .main-spotlight__track {
    gap: 0;
  }

  // 모바일에서는 한 장이 뷰포트에 딱 맞게 (잘림/넘침 방지)
  .main-spotlight_card {
    width: 100%;
    max-width: 100%;
  }

  .main-spotlight_card-type {
    font-size: 14px;
  }

  .main-spotlight_card-title {
    font-size: 16px;
  }
}

.main-spotlight_card-date {
  margin: 0;
  color: $txt-sub;
  @include clamp(font-size, 12px, 14px);
}

.main-spotlight__controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 18px;
}

.main-spotlight__nav {
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

.main-spotlight__dots {
  display: flex;
  align-items: center;
  gap: 8px;
}

.main-spotlight__dot {
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
