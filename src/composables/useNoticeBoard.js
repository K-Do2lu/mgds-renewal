import { onMounted, ref } from 'vue'
import { isSupabaseConfigured } from '@/lib/supabase'
import {
  fetchPublishedPosts,
  getSampleListRows,
} from '@/services/noticePostService'

export function useNoticeBoard(boardKey, options = {}) {
  const tableData = ref([])
  const loading = ref(true)
  const loadError = ref(null)
  const usingSample = ref(false)

  async function reload() {
    loading.value = true
    loadError.value = null

    if (isSupabaseConfigured()) {
      try {
        tableData.value = await fetchPublishedPosts(boardKey)
        usingSample.value = false
      } catch (err) {
        loadError.value = err
        tableData.value = getSampleListRows(boardKey)
        usingSample.value = true
      }
    } else {
      tableData.value = getSampleListRows(boardKey)
      usingSample.value = true
    }

    loading.value = false
    options.onLoaded?.()
  }

  onMounted(reload)

  return {
    tableData,
    loading,
    loadError,
    usingSample,
    reload,
  }
}
