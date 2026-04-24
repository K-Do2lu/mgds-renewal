<template>
  <section
    class="page-section page-section--surface-default main-spotlight"
    aria-labelledby="main-spotlight-title"
  >
    <div class="page-section__inner">
      <h2 id="main-spotlight-title" class="page-section__title"><span class="point">MG데이터시스템</span>의<br>
        소식을 전해 드립니다.</h2>

        <div class="main-spotlight_cards">
          <div class="main-spotlight_card" v-for="item in 5" :key="item">
            <p class="main-spotlight_card-type">채용공고</p>
            <p class="main-spotlight_card-title">정규직(일반직) 및 계약직 상시 채용</p>
            <p class="main-spotlight_card-date">0000. 00. 00</p>
          </div>
        </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@use '@/assets/scss/abstract' as *;

.main-spotlight_cards {
  @include grid()
  @include clamp(gap, 12px, 20px);
  overflow-x: hidden;

  .main-spotlight_card {
    @include flex(column, null, null, null);
    @include clamp(gap, 12px, 20px);
    @include clamp(padding, 20px, 30px);
    @include clamp(border-radius, 20px, 40px);
    border: 1px solid $border-main;
  }
}
</style>
