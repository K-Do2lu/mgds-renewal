<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import mainVideoUrl from '@/assets/img/main_01.mp4'

const slides = [
  {
    title: ['기술로 그리는 내일,', '가치로 만드는 미래'],
    desc: ['MG데이터시스템과 함께', '새로운 가능성을 열어갑니다.'],
  },
  {
    title: ['데이터로 연결하는 혁신,', '서비스로 완성하는 신뢰'],
    desc: ['안정적인 시스템과', '지속 가능한 성장을 지원합니다.'],
  },
  {
    title: ['사람을 중심으로,', '기술을 더 가깝게'],
    desc: ['사용자 경험을 고민하고', '더 나은 내일을 만듭니다.'],
  },
]
const quickLinks = [
  { to: '/business/overview', label: '사업영역' },
  { to: '/notice/board', label: '뉴스룸' },
  { to: '/recruit/talent', label: '채용정보' },
]

const activeIndex = ref(0)
const activeSlide = computed(() => slides[activeIndex.value])

let intervalId = null

function goTo(idx) {
  activeIndex.value = idx
}

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reduceMotion) {
    intervalId = window.setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % slides.length
    }, 5000)
  }
})

onBeforeUnmount(() => {
  if (intervalId) window.clearInterval(intervalId)
})
</script>

<template>
  <section class="main-hero">
    <div class="main-hero__frame">
      <video
        class="main-hero__video"
        :src="mainVideoUrl"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
      />

      <div class="main-hero__overlay" aria-hidden="true" />

      <div class="main-hero__content">
        <div class="main-hero__text" :key="activeIndex">
          <p class="main-hero__eyebrow">MG DATA SYSTEM</p>
          <h2 class="main-hero__title">
            <span v-for="(line, i) in activeSlide.title" :key="i">{{ line }}</span>
          </h2>
          <p class="main-hero__desc">
            <span v-for="(line, i) in activeSlide.desc" :key="i">{{ line }}</span>
          </p>
          <div class="main-hero__cta">
            <RouterLink to="/business/overview" class="main-hero__cta-btn">사업영역 보기</RouterLink>
            <RouterLink to="/recruit/careers" class="main-hero__cta-btn main-hero__cta-btn--ghost">
              인재채용 보기
            </RouterLink>
          </div>
        </div>

        <aside class="main-hero__panel" aria-label="주요 바로가기">
          <h3 class="main-hero__panel-title">Quick Access</h3>
          <ul class="main-hero__panel-list">
            <li v-for="link in quickLinks" :key="link.to">
              <RouterLink :to="link.to">{{ link.label }}</RouterLink>
            </li>
          </ul>
        </aside>
      </div>

      <nav class="main-hero__indicator" aria-label="메인 배너 인디케이터">
        <button
          v-for="(_, i) in slides"
          :key="i"
          type="button"
          class="main-hero__dot"
          :class="{ 'is-active': i === activeIndex }"
          :aria-label="`배너 ${i + 1}번 보기`"
          :aria-current="i === activeIndex ? 'true' : undefined"
          @click="goTo(i)"
        />
      </nav>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/scss/abstract' as *;

.main-hero {
  height: 100dvh;
  min-height: 100dvh;
  padding: 0 $layout-page-padding $layout-page-padding;
  box-sizing: border-box;

  @supports (height: 100svh) {
    height: 100svh;
    min-height: 100svh;
  }
}

.main-hero__frame {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: $radius-hero;
  overflow: hidden;
  transform: translateZ(0);
}

.main-hero__video {
  display: block;
  position: absolute;
  inset: -2px;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  object-fit: cover;
  transform: translateZ(0);
  backface-visibility: hidden;
}

.main-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    98deg,
    rgba(6, 16, 36, 0.58) 0%,
    rgba(6, 16, 36, 0.34) 42%,
    rgba(6, 16, 36, 0.08) 78%
  );
}

.main-hero__content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: clamp(24px, 5vw, 60px);
}

.main-hero__text {
  max-width: min(760px, 100%);
}

.main-hero__eyebrow {
  margin: 0 0 14px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.18em;
}

.main-hero__title {
  margin: 0;
  font-weight: 600;
  color: #fff;
  text-shadow: $shadow-text-hero;
  letter-spacing: -0.02em;
  line-height: 1.12;
  @include clamp(font-size, 32px, 60px);

  span {
    display: block;
  }
}

.main-hero__desc {
  margin: 18px 0 0;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: $shadow-text-hero;
  line-height: 1.5;
  @include clamp(font-size, 20px, 32px);

  span {
    display: block;
  }
}

.main-hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
}

.main-hero__cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 10px 16px;
  border-radius: 6px;
  background: $point-main;
  border: 1px solid transparent;
  color: $txt-white;
  font-weight: 600;
  text-decoration: none;

  &:focus-visible {
    @include focus-ring();
  }

  &:hover {
    background: $blue-200;
  }
}

.main-hero__cta-btn--ghost {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.62);
}

.main-hero__panel {
  width: min(320px, 100%);
  padding: 18px;
  border-radius: 14px;
  background: rgba(9, 20, 42, 0.42);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
}

.main-hero__panel-title {
  margin: 0 0 10px;
  color: #fff;
  font-size: 14px;
  letter-spacing: 0.08em;
}

.main-hero__panel-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 8px;

  a {
    min-height: 44px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    color: rgba(255, 255, 255, 0.94);
    text-decoration: none;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.14);

    &:hover,
    &:focus-visible {
      background: rgba(255, 255, 255, 0.14);
      @include focus-ring($gray-000);
    }
  }
}

.main-hero__indicator {
  position: absolute;
  right: 22px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  @include flex(column, center, center, null);
  @include clamp(gap, 12px, 32px);

  @include bp(mo) {
    right: auto;
    top: auto;
    bottom: calc(20px + env(safe-area-inset-bottom));
    left: 50%;
    transform: translateX(-50%);
    flex-direction: row;
  }
}

.main-hero__dot {
  padding: 0;
  display: block;
  box-sizing: border-box;
  line-height: 0;
  font-size: 0;

  @include wh($hero-dot-size, $hero-dot-size, $hero-dot-size, $hero-dot-size, $hero-dot-size, $hero-dot-size);
  border-radius: 50%;
  border: $hero-dot-border;
  background: $hero-dot-bg;
  cursor: pointer;

  &:focus-visible {
    @include focus-ring($gray-000);
  }

  &.is-active {
    @include wh(
      $hero-dot-active-size,
      $hero-dot-active-size,
      $hero-dot-active-size,
      $hero-dot-active-size,
      $hero-dot-active-size,
      $hero-dot-active-size
    );
    border-radius: 50%;
    background: $hero-dot-active-bg;
    border-color: $hero-dot-active-bg;
  }
}

.main-hero__text {
  animation: heroFadeUp 420ms ease both;
}

@include bp(tab) {
  .main-hero__content {
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }

  .main-hero__panel {
    width: 100%;
    max-width: 420px;
  }
}

@include bp(mo) {
  .main-hero {
    height: 100vh;
    min-height: 100vh;
    padding: 0;

    @supports (height: 100svh) {
      height: 100svh;
      min-height: 100svh;
    }
  }

  .main-hero__frame {
    border-radius: 0;
  }

  .main-hero__content {
    padding: clamp(22px, 6vw, 32px);
    justify-content: center;
  }

  .main-hero__title {
    @include clamp(font-size, 30px, 42px);
  }

  .main-hero__desc {
    @include clamp(font-size, 16px, 22px);
  }

  .main-hero__panel {
    display: none;
  }
}

@keyframes heroFadeUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .main-hero__text {
    animation: none;
  }
}
</style>
