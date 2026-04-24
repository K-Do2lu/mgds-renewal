<template>
  <section class="main-business" aria-labelledby="main-business-title">
    <div class="main-business__inner">
      <h2 id="main-business-title" class="main-business__title">사업 영역</h2>
      <p class="main-business__lead">
        주요 서비스·솔루션 카드나 리스트를 이 섹션에 구성하면 됩니다.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/scss/abstract' as *;

.main-business {
  padding-block: clamp(3rem, 8vw, 5rem);
  padding-inline: clamp(20px, 4vw, 40px);
  background: $bg-main;
}

.main-business__inner {
  max-width: $layout-max-width;
  margin-inline: auto;
}

.main-business__title {
  margin: 0;
  font-weight: 600;
  color: $txt-main;
  letter-spacing: -0.02em;
  @include clamp(font-size, 24px, 40px);
}

.main-business__lead {
  margin: 1rem 0 0;
  max-width: 42rem;
  color: $txt-sub;
  line-height: 1.6;
  @include clamp(font-size, 15px, 18px);
}
</style>
