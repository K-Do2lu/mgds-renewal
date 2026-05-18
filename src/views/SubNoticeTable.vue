<script setup>
import Table from '@/components/Table.vue'
import PagingIndicator from '@/components/PagingIndicator.vue'
import { computed } from 'vue'
import { noticeBoardSampleRows } from '@/config/noticeSampleRows.js'
import { useNoticeList } from '@/composables/useNoticeList'
import { withNoticeDetailUrls } from '@/utils/noticePosts'

const { searchField, searchQuery, filtered, page, totalPages, paged } = useNoticeList(noticeBoardSampleRows, 5, {
  hotFirst: true,
})

const pagedWithUrls = computed(() => withNoticeDetailUrls('board', paged.value))
</script>

<template>
  <div class="sub-notice-page">
    <section class="sub-notice-page__block" aria-labelledby="sub-notice-board-title">
      <div class="sub-notice-page__toolbar" role="group" aria-label="공지사항 검색">
        <p class="sub-notice-page__count">총 {{ filtered.length }} 건</p>
        <div class="sub-notice-page__search">
          <Select mode="search" v-model="searchField" />
          <Input v-model="searchQuery" placeholder="검색어를 입력하세요." />
        </div>
      </div>
      <p class="sub-notice-page__search-help">최신 공지 우선 정렬 · 제목/내용 즉시 검색</p>

      <Table :items="pagedWithUrls" />

      <PagingIndicator v-model:page="page" :total-pages="totalPages" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/views/sub-notice-page';
</style>
