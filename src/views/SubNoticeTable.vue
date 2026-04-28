<script setup>
import { ref } from 'vue'
import Table from '@/components/Table.vue'
import { noticeBoardSampleRows } from '@/config/noticeSampleRows.js'

const tableData = ref(noticeBoardSampleRows)
</script>

<template>
  <div class="sub-notice-page">
    <section class="sub-notice-page__block" aria-labelledby="sub-notice-board-title">
      <div class="sub-notice-page__intro">
        <div class="sec-title">
          <span class="sec-title__sub">Notice</span>
          <h2 id="sub-notice-board-title" class="sec-title__title">공지사항</h2>
        </div>
      </div>
      <Table :items="tableData" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/views/sub-notice-page';
</style>
