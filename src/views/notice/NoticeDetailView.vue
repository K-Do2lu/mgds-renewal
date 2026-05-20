<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { isSupabaseConfigured } from '@/lib/supabase'
import {
  fetchPublishedPostById,
  incrementPostView,
} from '@/services/noticePostService'
import {
  getNoticePostFromRoute,
  parsePostIdFromRoute,
  resolveBoardKeyFromRoute,
} from '@/utils/noticePosts'
import { downloadAttachment } from '@/utils/downloadAttachment'

const route = useRoute()
const post = ref(null)
const loading = ref(true)

const boardKey = computed(() => resolveBoardKeyFromRoute(route))
const listTo = computed(() => `/notice/${boardKey.value}`)

const categoryClass = computed(() =>
  post.value ? `notice-detail__category--${post.value.boardKey}` : '',
)

async function loadPost() {
  loading.value = true
  post.value = null

  const parsed = parsePostIdFromRoute(route)

  if (parsed.kind === 'uuid' && isSupabaseConfigured()) {
    try {
      const fetched = await fetchPublishedPostById(parsed.value)
      post.value = fetched
      if (fetched) {
        await incrementPostView(parsed.value)
        post.value = { ...fetched, view: (fetched.view ?? 0) + 1 }
      }
    } catch {
      post.value = null
    }
  } else {
    post.value = getNoticePostFromRoute(route)
  }

  loading.value = false
}

watch(() => route.fullPath, loadPost, { immediate: true })

function onDownloadFile(file) {
  if (!post.value) return
  downloadAttachment(file, {
    postTitle: post.value.title,
    boardLabel: post.value.boardLabel,
  })
}
</script>

<template>
  <div class="sub-notice-page">
    <section class="sub-notice-page__block notice-detail" aria-labelledby="notice-detail-title">
      <p v-if="loading" class="notice-detail__missing">불러오는 중…</p>
      <template v-else-if="post">
        <p class="notice-detail__category" :class="categoryClass">{{ post.boardLabel }}</p>
        <h2 id="notice-detail-title" class="notice-detail__title">{{ post.title }}</h2>

        <dl class="notice-detail__meta">
          <div>
            <dt>등록일</dt>
            <dd>{{ post.dateLabel }}</dd>
          </div>
          <div>
            <dt>조회수</dt>
            <dd>{{ post.view }}</dd>
          </div>
          <div v-if="post.tenderNo">
            <dt>공고번호</dt>
            <dd>{{ post.tenderNo }}</dd>
          </div>
          <div v-if="post.deadline">
            <dt>입찰 마감</dt>
            <dd>{{ post.deadline }}</dd>
          </div>
        </dl>

        <p v-if="post.content" class="notice-detail__lead">{{ post.content }}</p>

        <div class="notice-detail__body">{{ post.body }}</div>

        <section
          v-if="post.attachments?.length"
          class="notice-detail__attachments"
          aria-label="첨부 파일"
        >
          <h3 class="notice-detail__attachments-title">첨부 파일</h3>
          <ul class="notice-detail__attachments-list">
            <li v-for="(file, i) in post.attachments" :key="file.path ?? i">
              <button
                type="button"
                class="notice-detail__file-btn"
                @click="onDownloadFile(file)"
              >
                <span class="notice-detail__file-name">{{ file.name }}</span>
                <span class="notice-detail__file-size">{{ file.size }}</span>
              </button>
            </li>
          </ul>
        </section>

        <RouterLink class="notice-detail__back" :to="listTo">목록으로</RouterLink>
      </template>
      <template v-else>
        <p class="notice-detail__missing">게시글을 찾을 수 없습니다.</p>
        <RouterLink class="notice-detail__back" :to="listTo">목록으로</RouterLink>
      </template>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/views/sub-notice-page';

.notice-detail__category {
  margin: 0 0 8px;
  display: inline-flex;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(36, 95, 232, 0.1);
  color: $point-main;
  font-size: 13px;
  font-weight: 600;
}

.notice-detail__category--tender {
  background: rgba(255, 232, 192, 0.9);
  color: #c67606;
}

.notice-detail__category--archive {
  background: rgba(255, 211, 241, 0.5);
  color: #c2185b;
}

.notice-detail__title {
  margin: 0;
  font-size: clamp(22px, 3vw, 28px);
  line-height: 1.35;
  color: $txt-main;
}

.notice-detail__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 24px;
  margin: 16px 0 0;
  padding: 14px 0;
  border-top: 1px solid $border-main;
  border-bottom: 1px solid $border-main;
  font-size: 14px;
  color: $txt-sub;

  div {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  dt {
    font-weight: 600;
    color: $gray-700;
  }

  dd {
    margin: 0;
  }
}

.notice-detail__lead {
  margin: 20px 0 0;
  padding: 14px 16px;
  border-radius: 10px;
  background: $bg-submenu;
  font-size: 15px;
  line-height: 1.65;
  color: $gray-700;
  font-weight: 500;
}

.notice-detail__body {
  margin: 20px 0 0;
  font-size: 16px;
  line-height: 1.8;
  color: $txt-main;
  white-space: pre-wrap;
}

.notice-detail__attachments {
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid $border-main;
}

.notice-detail__attachments-title {
  margin: 0 0 12px;
  font-size: 15px;
  font-weight: 600;
  color: $gray-800;
}

.notice-detail__attachments-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.notice-detail__attachments-list li {
  border-radius: 10px;
  border: 1px solid $gray-200;
  background: $gray-000;
  overflow: hidden;
}

.notice-detail__file-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding: 12px 14px;
  border: 0;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;

  &:hover {
    background: rgba(36, 95, 232, 0.06);

    .notice-detail__file-name {
      color: $point-main;
      text-decoration: underline;
      text-underline-offset: 3px;
    }
  }

  &:focus-visible {
    @include focus-ring();
  }
}

.notice-detail__file-name {
  font-size: 14px;
  font-weight: 500;
  color: $txt-main;
}

.notice-detail__file-size {
  flex-shrink: 0;
  font-size: 13px;
  color: $txt-sub;
}

.notice-detail__back {
  display: inline-flex;
  margin-top: 32px;
  min-height: 40px;
  align-items: center;
  padding: 0 16px;
  border-radius: 999px;
  border: 1px solid rgba(36, 95, 232, 0.28);
  color: $point-main;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    background: rgba(36, 95, 232, 0.08);
  }

  &:focus-visible {
    @include focus-ring();
  }
}

.notice-detail__missing {
  margin: 0;
  color: $txt-sub;
}
</style>
