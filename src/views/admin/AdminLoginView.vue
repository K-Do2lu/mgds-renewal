<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useAdminAuth } from '@/composables/useAdminAuth'
import { isSupabaseConfigured } from '@/lib/supabase'

const router = useRouter()
const route = useRoute()
const { signIn } = useAdminAuth()

const email = ref('')
const password = ref('')
const loading = ref(false)

async function onSubmit() {
  if (!isSupabaseConfigured()) {
    ElMessage.error('.env에 Supabase URL·Anon Key를 설정해 주세요.')
    return
  }
  loading.value = true
  try {
    await signIn(email.value.trim(), password.value)
    const redirect = typeof route.query.redirect === 'string' ? route.query.redirect : '/admin/posts'
    router.replace(redirect)
  } catch (err) {
    ElMessage.error(err?.message ?? '로그인에 실패했습니다.')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="admin-login">
    <div class="admin-login__card">
      <h1 class="admin-login__title">게시물 관리 로그인</h1>
      <p v-if="!isSupabaseConfigured()" class="admin-login__warn">
        VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY가 없습니다. `.env`를 설정한 뒤 서버를 재시작하세요.
      </p>
      <el-form label-position="top" @submit.prevent="onSubmit">
        <el-form-item label="이메일">
          <el-input v-model="email" type="email" autocomplete="username" />
        </el-form-item>
        <el-form-item label="비밀번호">
          <el-input
            v-model="password"
            type="password"
            show-password
            autocomplete="current-password"
          />
        </el-form-item>
        <el-button type="primary" native-type="submit" :loading="loading" style="width: 100%">
          로그인
        </el-button>
      </el-form>
      <p class="admin-login__hint">
        Supabase 대시보드 → Authentication → Users에서 관리자 계정을 만든 뒤 로그인하세요.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.admin-login {
  min-height: 100dvh;
  display: grid;
  place-items: center;
  padding: 24px;
  background: #eef2ff;
}

.admin-login__card {
  width: min(420px, 100%);
  padding: 28px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.08);
}

.admin-login__title {
  margin: 0 0 20px;
  font-size: 22px;
}

.admin-login__warn {
  margin: 0 0 16px;
  padding: 10px 12px;
  border-radius: 8px;
  background: #fef3c7;
  color: #92400e;
  font-size: 13px;
}

.admin-login__hint {
  margin: 16px 0 0;
  font-size: 13px;
  color: #64748b;
  line-height: 1.5;
}
</style>
