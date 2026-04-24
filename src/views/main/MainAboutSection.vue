<template>
  <section class="main-about" aria-labelledby="main-about-title">
    <div class="main-about__inner">
      <h2 id="main-about-title" class="main-about__title">MG데이터시스템</h2>
      <p class="main-about__lead">
        이 영역에 회사 소개·비전 등 메인 전용 카피를 넣을 수 있습니다.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/scss/abstract' as *;

.main-about {
  padding-block: clamp(3rem, 8vw, 5rem);
  padding-inline: clamp(20px, 4vw, 40px);
  background: $gray-000;
}

.main-about__inner {
  max-width: $layout-max-width;
  margin-inline: auto;
}

.main-about__title {
  margin: 0;
  font-weight: 600;
  color: $txt-main;
  letter-spacing: -0.02em;
  @include clamp(font-size, 24px, 40px);
}

.main-about__lead {
  margin: 1rem 0 0;
  max-width: 42rem;
  color: $txt-sub;
  line-height: 1.6;
  @include clamp(font-size, 15px, 18px);
}
</style>
