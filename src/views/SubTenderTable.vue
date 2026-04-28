<script setup>
import { computed, ref, watch } from 'vue'
import Table from '@/components/Table.vue'
import PagingIndicator from '@/components/PagingIndicator.vue'
import { noticeTenderSampleRows } from '@/config/noticeSampleRows.js'

const tableData = ref(noticeTenderSampleRows)

const searchField = ref('제목')
const searchQuery = ref('')

const filtered = computed(() => {
  const q = searchQuery.value.trim()
  if (!q) return tableData.value

  if (searchField.value === '내용') {
    return tableData.value.filter((r) => String(r.content ?? '').includes(q))
  }
  return tableData.value.filter((r) => String(r.title ?? '').includes(q))
})

const page = ref(1)
const pageSize = 5
const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / pageSize)))
const paged = computed(() => {
  const p = Math.min(totalPages.value, Math.max(1, page.value))
  const start = (p - 1) * pageSize
  return filtered.value.slice(start, start + pageSize)
})

watch([searchField, searchQuery], () => {
  page.value = 1
})
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

      <div class="sub-notice-page__toolbar" role="group" aria-label="입찰공고 검색">
        <p class="sub-notice-page__count">총 {{ filtered.length }} 건</p>
        <div class="sub-notice-page__search">
          <Select mode="search" v-model="searchField" />
          <Input v-model="searchQuery" placeholder="검색어를 입력하세요." />
        </div>
      </div>

      <Table :items="paged" />

      <PagingIndicator v-model:page="page" :total-pages="totalPages" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/views/sub-notice-page';
</style>
