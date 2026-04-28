<script setup>
import { ref } from 'vue'
import Table from '@/components/Table.vue'
import { noticeTenderSampleRows } from '@/config/noticeSampleRows.js'

const tableData = ref(noticeTenderSampleRows)
</script>

<template>
  <div class="sub-notice-page">
    <section class="sub-notice-page__block" aria-labelledby="sub-notice-tender-title">
      <div class="sub-notice-page__intro">
        <div class="sec-title">
          <span class="sec-title__sub">Tender</span>
          <h2 id="sub-notice-tender-title" class="sec-title__title">입찰공고</h2>
        </div>
      </div>
      <Table :items="tableData" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/views/sub-notice-page';
</style>
