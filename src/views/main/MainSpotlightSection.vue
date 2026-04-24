<script setup>
import { ref } from 'vue'
import BaseSlider from '@/components/BaseSlider.vue'

const items = ref(
  Array.from({ length: 5 }).map((_, i) => ({
    id: i + 1,
    type: '채용공고',
    title: '정규직(일반직) 및 계약직 상시 채용',
    date: '0000. 00. 00',
  })),
)

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

      <BaseSlider
        class="main-spotlight__slider"
        aria-label="메인 소식 슬라이더"
        :item-count="items.length"
        item-selector=".main-spotlight_card"
      >
        <article
          class="main-spotlight_card"
          data-slider-item
          v-for="item in items"
          :key="item.id"
        >
          <p class="main-spotlight_card-type">{{ item.type }}</p>
          <p class="main-spotlight_card-title">{{ item.title }}</p>
          <p class="main-spotlight_card-date">{{ item.date }}</p>
        </article>
      </BaseSlider>
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

.main-spotlight__slider :deep(.base-slider__track) {
  @include clamp(gap, 12px, 20px);
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
  .main-spotlight__slider :deep(.base-slider__track) {
    gap: 0;
  }

  // 태블릿에서도 한 장씩 보여서 넘침 방지
  .main-spotlight_card {
    width: 100%;
    max-width: 100%;
  }
}

@include bp(mo) {
  .main-spotlight__slider :deep(.base-slider__track) {
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

</style>
