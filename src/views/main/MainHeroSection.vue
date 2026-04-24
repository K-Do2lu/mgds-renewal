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

const activeIndex = ref(0)
const activeSlide = computed(() => slides[activeIndex.value])

let intervalId = null

function goTo(idx) {
  activeIndex.value = idx
}

onMounted(() => {
  intervalId = window.setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % slides.length
  }, 5000)
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
          <h2 class="main-hero__title">
            <span v-for="(line, i) in activeSlide.title" :key="i">{{ line }}</span>
          </h2>
          <p class="main-hero__desc">
            <span v-for="(line, i) in activeSlide.desc" :key="i">{{ line }}</span>
          </p>
        </div>
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
  height: 100vh;
  min-height: 100vh;
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
    90deg,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0.15) 35%,
    rgba(0, 0, 0, 0) 70%
  );
}

.main-hero__content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
  padding-inline: clamp(24px, 6vw, 80px);
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
</style>
