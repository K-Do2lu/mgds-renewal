const fs = require('fs')
const path = require('path')

const enc = {
  title: '\uC81C\uBAA9', // 제목
  body: '\uB0B4\uC6A9', // 내용
  notice: '\uACF5\uC9C0\uC0AC\uD56D', // 공지사항
  tender: '\uC785\uCC30\uACF5\uACE0', // 입찰공고
  archive: '\uC790\uB8CC\uC2E4', // 자료실
  search: '\uAC80\uC0C9', // 검색
  total: '\uCD1D', // 총
  count: '\uAC74', // 건
  placeholder: '\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694.', // 검색어를 입력하세요.
}

function makePage({ importName, id, subEn, titleKo }) {
  const aria = `${titleKo} ${enc.search}`
  return `<script setup>
import { computed, ref, watch } from 'vue'
import Table from '@/components/Table.vue'
import PagingIndicator from '@/components/PagingIndicator.vue'
import { ${importName} } from '@/config/noticeSampleRows.js'

const tableData = ref(${importName})

const searchField = ref('${enc.title}')
const searchQuery = ref('')

const filtered = computed(() => {
  const q = searchQuery.value.trim()
  if (!q) return tableData.value

  if (searchField.value === '${enc.body}') {
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
    <section class="sub-notice-page__block" aria-labelledby="${id}">
      <div class="sub-notice-page__intro">
        <div class="sec-title">
          <span class="sec-title__sub">${subEn}</span>
          <h2 id="${id}" class="sec-title__title">${titleKo}</h2>
        </div>
      </div>

      <div class="sub-notice-page__toolbar" role="group" aria-label="${aria}">
        <p class="sub-notice-page__count">${enc.total} {{ filtered.length }} ${enc.count}</p>
        <div class="sub-notice-page__search">
          <Select mode="search" v-model="searchField" />
          <Input v-model="searchQuery" placeholder="${enc.placeholder}" />
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
`
}

const targets = [
  {
    file: 'src/views/SubNoticeTable.vue',
    importName: 'noticeBoardSampleRows',
    id: 'sub-notice-board-title',
    subEn: 'Notice',
    titleKo: enc.notice,
  },
  {
    file: 'src/views/SubTenderTable.vue',
    importName: 'noticeTenderSampleRows',
    id: 'sub-notice-tender-title',
    subEn: 'Tender',
    titleKo: enc.tender,
  },
  {
    file: 'src/views/SubArchiveTable.vue',
    importName: 'noticeArchiveSampleRows',
    id: 'sub-notice-archive-title',
    subEn: 'Archive',
    titleKo: enc.archive,
  },
]

for (const t of targets) {
  const out = makePage(t)
  fs.writeFileSync(path.resolve(process.cwd(), t.file), out, { encoding: 'utf8' })
}

console.log('rewrote:', targets.map((t) => t.file).join(', '))

