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
    <div class="page-section__inner" v-reveal>
      <div class="main-about__head">
        <h2 id="main-about-title" class="page-section__title point">MG DATA SYSTEM</h2>
        <p class="page-section__lead">
          더 나은 고객 디지털 금융 IT의 발전으로 새마을 금고와 함께 성장하는 미래를 만들어 갈 것입니다.
        </p>
      </div>
      <div class="page-section__keywords">
        <span class="page-section__keyword" v-for="(item, index) in keywords" :key="index">{{ item }}</span>
      </div>
      <router-link to="/company/about" class="page-section__detail">
        자세히 보기
      </router-link>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/abstract' as *;

.main-about {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.page-section__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 40px;
}

.main-about__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

// 중앙에서 바깥으로 퍼지는 라디얼 그라데이션 인터랙션
.main-about::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: min(520px, 70vw);
  aspect-ratio: 1 / 1;
  transform: translate(-50%, -50%) scale(0.92);
  border-radius: 999px;
  pointer-events: none;
  z-index: -1;
  opacity: 1;
  background:
    radial-gradient(
      circle at center,
      rgba(40, 108, 247, 0.34) 0%,
      rgba(40, 108, 247, 0.22) 22%,
      rgba(40, 108, 247, 0.12) 44%,
      rgba(40, 108, 247, 0) 72%
    ),
    radial-gradient(
      circle at center,
      rgba(99, 102, 241, 0.14) 0%,
      rgba(99, 102, 241, 0) 64%
    );
  animation: aboutGlowLoop 6.5s ease-in-out infinite alternate;
}

@keyframes aboutGlowLoop {
  0% {
    transform: translate(-50%, -50%) scale(0.86);
    opacity: 0.65;
    filter: blur(8px);
  }
  100% {
    transform: translate(-50%, -50%) scale(1.03);
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
  color: $txt-main;
}

.page-section__keywords {
  display: flex;
  justify-content: center;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: fit-content;
  margin-top: 12px;
  align-self: flex-end;
  color: $txt-sub;
  text-decoration: none;
  cursor: pointer;

  &::after {
    content: '';
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    background: url('@/assets/img/more_arrow_btn.svg') no-repeat center / contain;
    transform: translate(0, 0);
    transition: transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover::after {
    background-image: url('@/assets/img/more_arrow_btn_hover.svg');
    transform: translate(2px, -2px);
  }

  &:hover {
    color: $point-main;
  }
}
</style>