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
    </div>
  </section>
</template>
<style lang="scss" scoped>
.section__title{
  color: $;
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
</style>