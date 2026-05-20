<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import {
  createPost,
  dbRowToForm,
  emptyPostForm,
  fetchPostByIdForAdmin,
  formatFileSizeLabel,
  removeAttachmentFromStorage,
  updatePost,
  uploadAttachments,
} from '@/services/noticePostService'
import { NOTICE_BOARDS } from '@/utils/noticePosts'

const route = useRoute()
const router = useRouter()

const isNew = computed(() => route.name === 'AdminPostNew')
const postId = computed(() => route.params.id)
const saving = ref(false)
const uploadingFiles = ref(false)
const loading = ref(!isNew.value)
const form = ref(emptyPostForm())
/** 새 글 작성 시 등록 전까지 보관 (등록 시 업로드) */
const pendingFiles = ref([])

const showTenderFields = computed(() => form.value.boardKey === 'tender')

async function load() {
  if (isNew.value) {
    const q = route.query.board
    if (q === 'board' || q === 'archive' || q === 'tender') {
      form.value = emptyPostForm(q)
    }
    pendingFiles.value = []
    loading.value = false
    return
  }
  loading.value = true
  try {
    const row = await fetchPostByIdForAdmin(postId.value)
    if (!row) {
      ElMessage.error('게시물을 찾을 수 없습니다.')
      router.replace({ name: 'AdminPosts' })
      return
    }
    form.value = dbRowToForm(row)
    pendingFiles.value = []
  } catch (err) {
    ElMessage.error(err?.message ?? '불러오기 실패')
  } finally {
    loading.value = false
  }
}

async function onPickFile(event) {
  const picked = [...(event.target.files ?? [])]
  event.target.value = ''
  if (!picked.length) return

  if (isNew.value) {
    pendingFiles.value.push(...picked)
    return
  }

  uploadingFiles.value = true
  try {
    const uploaded = await uploadAttachments(picked, postId.value)
    form.value.attachments = [...form.value.attachments, ...uploaded]
    await updatePost(postId.value, form.value)
    ElMessage.success(
      uploaded.length > 1 ? `${uploaded.length}개 첨부를 추가했습니다.` : '첨부 파일을 추가했습니다.',
    )
  } catch (err) {
    ElMessage.error(err?.message ?? '업로드 실패')
  } finally {
    uploadingFiles.value = false
  }
}

function removePending(index) {
  pendingFiles.value.splice(index, 1)
}

async function removeAttachment(file, index) {
  try {
    if (file.path) await removeAttachmentFromStorage(file.path)
    form.value.attachments = form.value.attachments.filter((_, i) => i !== index)
    if (!isNew.value) {
      await updatePost(postId.value, form.value)
    }
    ElMessage.success('첨부를 제거했습니다.')
  } catch (err) {
    ElMessage.error(err?.message ?? '제거 실패')
  }
}

async function onSubmit() {
  if (!form.value.title.trim()) {
    ElMessage.warning('제목을 입력하세요.')
    return
  }
  saving.value = true
  try {
    if (isNew.value) {
      const created = await createPost(form.value)
      let attachments = [...(form.value.attachments ?? [])]

      if (pendingFiles.value.length) {
        uploadingFiles.value = true
        const uploaded = await uploadAttachments(pendingFiles.value, created.id)
        attachments = attachments.concat(uploaded)
        await updatePost(created.id, { ...form.value, attachments })
        pendingFiles.value = []
      }

      ElMessage.success('등록했습니다.')
      router.push({ name: 'AdminPosts' })
    } else {
      await updatePost(postId.value, form.value)
      ElMessage.success('저장했습니다.')
    }
  } catch (err) {
    ElMessage.error(err?.message ?? '저장 실패')
  } finally {
    saving.value = false
    uploadingFiles.value = false
  }
}

onMounted(load)
</script>

<template>
  <div v-loading="loading" class="admin-edit">
    <div class="admin-edit__head">
      <h1>{{ isNew ? '새 글 작성' : '글 수정' }}</h1>
      <el-button @click="router.push({ name: 'AdminPosts' })">목록</el-button>
    </div>

    <el-form label-position="top" class="admin-edit__form" @submit.prevent="onSubmit">
      <el-form-item label="게시판">
        <el-select v-model="form.boardKey" style="width: 200px">
          <el-option
            v-for="b in NOTICE_BOARDS"
            :key="b.key"
            :label="b.label"
            :value="b.key"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="제목" required>
        <el-input v-model="form.title" maxlength="200" show-word-limit />
      </el-form-item>

      <el-form-item label="등록일">
        <el-date-picker
          v-model="form.publishedAt"
          type="date"
          value-format="YYYY-MM-DD"
          format="YYYY-MM-DD"
        />
      </el-form-item>

      <el-form-item label="요약 (목록·상단 노출)">
        <el-input v-model="form.content" type="textarea" :rows="3" />
      </el-form-item>

      <el-form-item label="본문">
        <el-input v-model="form.body" type="textarea" :rows="12" />
      </el-form-item>

      <template v-if="showTenderFields">
        <el-form-item label="공고번호">
          <el-input v-model="form.tenderNo" />
        </el-form-item>
        <el-form-item label="입찰 마감">
          <el-input v-model="form.deadline" placeholder="예: 2026. 05. 30 17:00" />
        </el-form-item>
      </template>

      <el-form-item label="옵션">
        <el-checkbox v-model="form.isHot">중요 공지 (HOT)</el-checkbox>
        <el-checkbox v-model="form.isPublished" style="margin-left: 16px">공개</el-checkbox>
      </el-form-item>

      <el-form-item label="첨부 파일">
        <ul v-if="form.attachments.length || pendingFiles.length" class="admin-edit__files">
          <li v-for="(file, i) in form.attachments" :key="file.path ?? `saved-${i}`">
            <span>{{ file.name }} ({{ file.size }})</span>
            <el-button link type="danger" @click="removeAttachment(file, i)">삭제</el-button>
          </li>
          <li
            v-for="(file, i) in pendingFiles"
            :key="`pending-${file.name}-${file.size}-${i}`"
            class="admin-edit__files-pending"
          >
            <span>{{ file.name }} ({{ formatFileSizeLabel(file.size) }}) · 등록 시 업로드</span>
            <el-button link type="danger" @click="removePending(i)">삭제</el-button>
          </li>
        </ul>
        <input
          type="file"
          multiple
          :disabled="uploadingFiles"
          @change="onPickFile"
        />
        <p class="admin-edit__file-hint">여러 파일을 선택할 수 있습니다. 새 글은 등록 시 함께 업로드됩니다.</p>
      </el-form-item>

      <el-button
        type="primary"
        native-type="submit"
        :loading="saving || uploadingFiles"
      >
        {{ isNew ? '등록' : '저장' }}
      </el-button>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.admin-edit__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h1 {
    margin: 0;
    font-size: 22px;
  }
}

.admin-edit__form {
  max-width: 720px;
  padding: 20px;
  border-radius: 12px;
  background: #fff;
}

.admin-edit__files {
  list-style: none;
  margin: 0 0 12px;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 8px 0;
    border-bottom: 1px solid #e2e8f0;
  }
}

.admin-edit__files-pending span {
  color: #64748b;
}

.admin-edit__file-hint {
  margin: 8px 0 0;
  font-size: 13px;
  color: #64748b;
}
</style>
