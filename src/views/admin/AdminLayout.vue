<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useAdminAuth } from '@/composables/useAdminAuth'
import logoSvg from '@/assets/img/logo.svg'

const router = useRouter()
const { userEmail, signOut } = useAdminAuth()

async function onLogout() {
  await signOut()
  router.push({ name: 'AdminLogin' })
}
</script>

<template>
  <div class="admin-layout">
    <header class="admin-layout__header">
      <div class="admin-layout__brand">
        <RouterLink to="/admin/posts" class="admin-layout__logo-link">
          <img :src="logoSvg" alt="MG데이터시스템" class="admin-layout__logo" width="180" height="40" />
        </RouterLink>
      </div>
      <div class="admin-layout__actions">
        <span class="admin-layout__email">{{ userEmail }}</span>
        <button type="button" class="admin-layout__logout" @click="onLogout">로그아웃</button>
      </div>
    </header>
    <nav class="admin-layout__nav" aria-label="관리 메뉴">
      <RouterLink to="/admin/posts">게시물 목록</RouterLink>
      <RouterLink to="/admin/posts/new">새 글 작성</RouterLink>
      <a href="/" target="_blank" rel="noopener noreferrer">사이트 보기</a>
    </nav>
    <main class="admin-layout__main">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.admin-layout {
  min-height: 100dvh;
  background: #f4f6fb;
  color: #1a1f36;
}

.admin-layout__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 24px;
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
}

.admin-layout__logo-link {
  display: inline-flex;
  line-height: 0;
  text-decoration: none;

  &:focus-visible {
    outline: 2px solid #245fe8;
    outline-offset: 4px;
    border-radius: 4px;
  }
}

.admin-layout__logo {
  display: block;
  width: clamp(140px, 18vw, 180px);
  height: auto;
}

.admin-layout__actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.admin-layout__email {
  font-size: 14px;
  color: #64748b;
}

.admin-layout__logout {
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 6px 12px;
  background: #fff;
  cursor: pointer;
  font: inherit;

  &:hover {
    background: #f8fafc;
  }
}

.admin-layout__nav {
  display: flex;
  gap: 8px;
  padding: 12px 24px;
  background: #fff;
  border-bottom: 1px solid #e2e8f0;

  a {
    padding: 8px 12px;
    border-radius: 8px;
    text-decoration: none;
    color: #334155;
    font-size: 14px;
    font-weight: 500;

    &.router-link-active {
      background: rgba(36, 95, 232, 0.1);
      color: #245fe8;
    }
  }
}

.admin-layout__main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
}
</style>
