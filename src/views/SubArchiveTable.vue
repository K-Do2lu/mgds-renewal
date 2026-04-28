<script setup>
import { ref } from 'vue'
import Table from '@/components/Table.vue'
import { noticeArchiveSampleRows } from '@/config/noticeSampleRows.js'

const tableData = ref(noticeArchiveSampleRows)
</script>

<template>
  <div class="sub-notice-page">
    <section class="sub-notice-page__block" aria-labelledby="sub-notice-archive-title">
      <div class="sub-notice-page__intro">
        <div class="sec-title">
          <span class="sec-title__sub">Archive</span>
          <h2 id="sub-notice-archive-title" class="sec-title__title">자료실</h2>
        </div>
      </div>
      <Table :items="tableData" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/views/sub-notice-page';
</style>
