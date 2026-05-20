import { computed, isRef, ref, unref, watch } from 'vue'

export function useNoticeList(sourceRows, pageSize = 5, options = {}) {
  const tableData = isRef(sourceRows) ? sourceRows : ref(sourceRows)
  const searchField = ref('제목')
  const searchQuery = ref('')
  const page = ref(1)

  const hotFirst = Boolean(options.hotFirst)

  const filtered = computed(() => {
    const q = searchQuery.value.trim()
    const rows = unref(tableData) ?? []

    const searched = (() => {
      if (!q) return rows
      if (searchField.value === '내용') {
        return rows.filter((r) => String(r.content ?? '').includes(q))
      }
      return rows.filter((r) => String(r.title ?? '').includes(q))
    })()

    if (!hotFirst) return searched
    const hot = []
    const normal = []
    for (const r of searched) (r?.hot ? hot : normal).push(r)
    return hot.concat(normal)
  })

  const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / pageSize)))
  const paged = computed(() => {
    const p = Math.min(totalPages.value, Math.max(1, page.value))
    const start = (p - 1) * pageSize
    return filtered.value.slice(start, start + pageSize)
  })

  watch([searchField, searchQuery], () => {
    page.value = 1
  })

  return {
    tableData,
    searchField,
    searchQuery,
    filtered,
    page,
    totalPages,
    paged,
  }
}
