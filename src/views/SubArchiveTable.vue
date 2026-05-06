<script setup>
import Table from '@/components/Table.vue'
import PagingIndicator from '@/components/PagingIndicator.vue'
import { noticeArchiveSampleRows } from '@/config/noticeSampleRows.js'
import { useNoticeList } from '@/composables/useNoticeList'

const { searchField, searchQuery, filtered, page, totalPages, paged } = useNoticeList(noticeArchiveSampleRows)
</script>

<template>
  <div class="sub-notice-page">
    <section class="sub-notice-page__block" aria-labelledby="sub-notice-archive-title">
      <div class="sub-notice-page__toolbar" role="group" aria-label="자료실 검색">
        <p class="sub-notice-page__count">총 {{ filtered.length }} 건</p>
        <div class="sub-notice-page__search">
          <Select mode="search" v-model="searchField" />
          <Input v-model="searchQuery" placeholder="검색어를 입력하세요." />
        </div>
      </div>
      <p class="sub-notice-page__search-help">실무 문서 중심 · 제목/내용 즉시 검색</p>

      <Table :items="paged" />

      <PagingIndicator v-model:page="page" :total-pages="totalPages" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/views/sub-notice-page';
</style>
