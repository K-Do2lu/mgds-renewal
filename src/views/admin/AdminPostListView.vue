<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { isSupabaseConfigured } from '@/lib/supabase'
import {
  deletePost,
  fetchAllPostsForAdmin,
} from '@/services/noticePostService'
import { NOTICE_BOARDS } from '@/utils/noticePosts'

const router = useRouter()
const rows = ref([])
const loading = ref(true)
const boardFilter = ref('all')

const boardLabels = Object.fromEntries(NOTICE_BOARDS.map((b) => [b.key, b.label]))

const boardFilterOptions = [
  { value: 'all', label: '전체' },
  ...NOTICE_BOARDS.map((b) => ({ value: b.key, label: b.label })),
]

const filteredRows = computed(() => {
  if (boardFilter.value === 'all') return rows.value
  return rows.value.filter((r) => r.board_key === boardFilter.value)
})

const resultCountLabel = computed(() => {
  const total = rows.value.length
  const shown = filteredRows.value.length
  if (boardFilter.value === 'all') return `총 ${total}건`
  return `${boardLabels[boardFilter.value] ?? ''} ${shown}건 · 전체 ${total}건`
})

async function load() {
  if (!isSupabaseConfigured()) {
    loading.value = false
    return
  }
  loading.value = true
  try {
    rows.value = await fetchAllPostsForAdmin()
  } catch (err) {
    ElMessage.error(err?.message ?? '목록을 불러오지 못했습니다.')
  } finally {
    loading.value = false
  }
}

function goNew() {
  const query = boardFilter.value !== 'all' ? { board: boardFilter.value } : undefined
  router.push({ name: 'AdminPostNew', query })
}

function goEdit(id) {
  router.push({ name: 'AdminPostEdit', params: { id } })
}

function filterBoard(value, row) {
  if (!value || value === 'all') return true
  return row.board_key === value
}

async function onDelete(row) {
  try {
    await ElMessageBox.confirm(`「${row.title}」을(를) 삭제할까요?`, '삭제 확인', {
      type: 'warning',
      confirmButtonText: '삭제',
      cancelButtonText: '취소',
    })
    await deletePost(row.id)
    ElMessage.success('삭제했습니다.')
    await load()
  } catch (err) {
    if (err === 'cancel' || err === 'close') return
    ElMessage.error(err?.message ?? '삭제에 실패했습니다.')
  }
}

onMounted(load)
</script>

<template>
  <div class="admin-posts">
    <div class="admin-posts__toolbar">
      <h1>게시물 목록</h1>
      <el-button type="primary" @click="goNew">새 글 작성</el-button>
    </div>

    <p v-if="!isSupabaseConfigured()" class="admin-posts__warn">
      Supabase가 연결되지 않았습니다. 환경 변수 설정 후 `supabase/schema.sql`을 실행하세요.
    </p>

    <div class="admin-posts__filter" role="search" aria-label="게시판 필터">
      <span class="admin-posts__filter-label">게시판</span>
      <el-radio-group v-model="boardFilter" class="admin-posts__filter-group">
        <el-radio-button
          v-for="opt in boardFilterOptions"
          :key="opt.value"
          :label="opt.value"
        >
          {{ opt.label }}
        </el-radio-button>
      </el-radio-group>
      <span class="admin-posts__filter-count">{{ resultCountLabel }}</span>
    </div>

    <el-table v-loading="loading" :data="filteredRows" stripe style="width: 100%">
      <el-table-column
        label="게시판"
        width="110"
        column-key="board_key"
        :filters="boardFilterOptions.filter((o) => o.value !== 'all').map((o) => ({ text: o.label, value: o.value }))"
        :filter-method="filterBoard"
      >
        <template #default="{ row }">{{ boardLabels[row.board_key] ?? row.board_key }}</template>
      </el-table-column>
      <el-table-column prop="title" label="제목" min-width="220" show-overflow-tooltip />
      <el-table-column prop="published_at" label="등록일" width="120" />
      <el-table-column label="상태" width="90">
        <template #default="{ row }">
          <el-tag :type="row.is_published ? 'success' : 'info'" size="small">
            {{ row.is_published ? '공개' : '비공개' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="HOT" width="70" align="center">
        <template #default="{ row }">{{ row.is_hot ? 'Y' : '-' }}</template>
      </el-table-column>
      <el-table-column label="관리" width="160" fixed="right">
        <template #default="{ row }">
          <el-button link type="primary" @click="goEdit(row.id)">수정</el-button>
          <el-button link type="danger" @click="onDelete(row)">삭제</el-button>
        </template>
      </el-table-column>
      <template #empty>
        <p class="admin-posts__empty">
          {{ boardFilter === 'all' ? '등록된 게시물이 없습니다.' : '해당 게시판에 게시물이 없습니다.' }}
        </p>
      </template>
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
.admin-posts__toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;

  h1 {
    margin: 0;
    font-size: 22px;
  }
}

.admin-posts__filter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 16px;
  margin-bottom: 16px;
  padding: 14px 16px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid #e2e8f0;
}

.admin-posts__filter-label {
  font-size: 14px;
  font-weight: 600;
  color: #334155;
  flex-shrink: 0;
}

.admin-posts__filter-group {
  flex-wrap: wrap;
}

.admin-posts__filter-count {
  margin-left: auto;
  font-size: 13px;
  color: #64748b;
}

.admin-posts__warn {
  margin: 0 0 12px;
  color: #b45309;
  font-size: 14px;
}

.admin-posts__empty {
  margin: 0;
  padding: 24px;
  color: #64748b;
  text-align: center;
}

@media (max-width: 640px) {
  .admin-posts__filter-count {
    margin-left: 0;
    width: 100%;
  }
}
</style>
