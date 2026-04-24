<template>
  <section class="main-spotlight" aria-labelledby="main-spotlight-title">
    <div class="main-spotlight__inner">
      <h2 id="main-spotlight-title" class="main-spotlight__title">
        공지 · 소식
      </h2>
      <p class="main-spotlight__lead">
        최근 공지, 보도, 채용 안내 등 하이라이트 블록을 배치하기 좋은 섹션입니다.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/assets/scss/abstract' as *;

.main-spotlight {
  padding-block: clamp(3rem, 8vw, 5rem);
  padding-inline: clamp(20px, 4vw, 40px);
  background: $gray-000;
}

.main-spotlight__inner {
  max-width: $layout-max-width;
  margin-inline: auto;
}

.main-spotlight__title {
  margin: 0;
  font-weight: 600;
  color: $txt-main;
  letter-spacing: -0.02em;
  @include clamp(font-size, 24px, 40px);
}

.main-spotlight__lead {
  margin: 1rem 0 0;
  max-width: 42rem;
  color: $txt-sub;
  line-height: 1.6;
  @include clamp(font-size, 15px, 18px);
}
</style>
