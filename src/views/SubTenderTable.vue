<script setup>
import Table from '@/components/Table.vue'
import PagingIndicator from '@/components/PagingIndicator.vue'
import { computed } from 'vue'
import { noticeTenderSampleRows } from '@/config/noticeSampleRows.js'
import { useNoticeList } from '@/composables/useNoticeList'
import { withNoticeDetailUrls } from '@/utils/noticePosts'

const { searchField, searchQuery, filtered, page, totalPages, paged } = useNoticeList(noticeTenderSampleRows)

const pagedWithUrls = computed(() => withNoticeDetailUrls('tender', paged.value))
</script>

<template>
  <div class="sub-notice-page">
    <section class="sub-notice-page__block" aria-labelledby="sub-notice-tender-title">
      <div class="sub-notice-page__toolbar" role="group" aria-label="입찰공고 검색">
        <p class="sub-notice-page__count">총 {{ filtered.length }} 건</p>
        <div class="sub-notice-page__search">
          <Select mode="search" v-model="searchField" />
          <Input v-model="searchQuery" placeholder="검색어를 입력하세요." />
        </div>
      </div>
      <p class="sub-notice-page__search-help">진행 중/마감 공고 확인 · 제목/내용 즉시 검색</p>

      <Table :items="pagedWithUrls" />

      <PagingIndicator v-model:page="page" :total-pages="totalPages" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/views/sub-notice-page';
</style>
