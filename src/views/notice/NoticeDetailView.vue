<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getNoticePost } from '@/utils/noticePosts'

const route = useRoute()

const boardKey = computed(() => route.meta.noticeBoard ?? 'board')
const postIndex = computed(() => {
  const n = Number(route.params.id)
  return Number.isFinite(n) ? n : -1
})

const post = computed(() => getNoticePost(boardKey.value, postIndex.value))
const listTo = computed(() => `/notice/${boardKey.value}`)
</script>

<template>
  <div class="sub-notice-page">
    <section class="sub-notice-page__block notice-detail" aria-labelledby="notice-detail-title">
      <template v-if="post">
        <p class="notice-detail__category">{{ post.boardLabel }}</p>
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
        </dl>
        <p class="notice-detail__body">{{ post.content }}</p>
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

.notice-detail__body {
  margin: 24px 0 0;
  font-size: 16px;
  line-height: 1.75;
  color: $txt-main;
  white-space: pre-wrap;
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
