<script setup>
import { ref } from 'vue';

const keywords = ref([
  'Professionalism',
  'Trust & Safety',
  'Connectivity',
  'Insight',
]);
</script>
<template>
  <section
    class="page-section page-section--surface-default main-about"
    aria-labelledby="main-about-title"
  >
    <div class="page-section__inner">
      <h2 id="main-about-title" class="page-section__title">MG DATA SYSTEM</h2>
      <p class="page-section__lead">
        더 나은 고객 디지털 금융 IT의 발전으로 새마을 금고와 함께 성장하는 미래를 만들어 갈 것입니다.
      </p>
      <div class="page-section__keywords">
        <span class="page-section__keyword" v-for="(item, index) in keywords" :key="index">{{ item }}</span>
      </div>
      <a class="page-section__detail">자세히 보기</a>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/abstract' as *;

.main-about {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background-attachment: fixed;
}

// 중앙에서 바깥으로 퍼지는 라디얼 그라데이션 인터랙션
.main-about::before {
  content: '';
  position: absolute;
  left: 50%;
  top: clamp(120px, 22vh, 220px);
  width: min(440px, 62vw);
  aspect-ratio: 1 / 1;
  transform: translate(-50%, -50%) scale(0.92);
  border-radius: 999px;
  pointer-events: none;
  z-index: -1;
  opacity: 0.9;
  background: radial-gradient(
    circle at center,
    rgba(40, 108, 247, 0.18) 0%,
    rgba(40, 108, 247, 0.10) 28%,
    rgba(40, 108, 247, 0.06) 44%,
    rgba(40, 108, 247, 0) 68%
  );
  animation: aboutGlowLoop 7.5s cubic-bezier(0.22, 1, 0.36, 1) infinite alternate;
}

@keyframes aboutGlowLoop {
  0% {
    transform: translate(-50%, -50%) scale(0.86);
    opacity: 0.75;
    filter: blur(2px);
  }
  100% {
    transform: translate(-50%, -50%) scale(1.0);
    opacity: 1;
    filter: blur(0px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .main-about::before {
    animation: none;
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    filter: none;
  }
}

// 공통 타이틀 컬러 규칙에 맞춤
.page-section__title {
  color: $point-main;
}

.page-section__keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.page-section__keyword {
  padding-block: 6px;
  @include clamp(padding-inline, 12px, 20px);
  border-radius: 100px;
  border: 1px solid $gray-600;
  @include clamp(font-size, 14px, 16px);
  color: $txt-sub;
}

.page-section__detail {
  position: relative;
  display: inline-block;
  color: $txt-sub;
  &::after{
    position: absolute;
    content: '';
    top: 50%;
    right: 0;
    width: 20px;
    height: 20px;
    background-image: url('@/assets/img/more_arrow.svg');
  }
}
</style>