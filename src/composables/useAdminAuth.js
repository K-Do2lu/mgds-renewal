import { computed, onMounted, ref } from 'vue'
import { getSupabase, isSupabaseConfigured } from '@/lib/supabase'

const session = ref(null)
const ready = ref(false)

let listenerAttached = false

function attachAuthListener() {
  if (listenerAttached) return
  const sb = getSupabase()
  if (!sb) return
  listenerAttached = true
  sb.auth.onAuthStateChange((_event, nextSession) => {
    session.value = nextSession
  })
}

export function useAdminAuth() {
  const isLoggedIn = computed(() => Boolean(session.value?.user))
  const userEmail = computed(() => session.value?.user?.email ?? '')

  async function initSession() {
    ready.value = false
    if (!isSupabaseConfigured()) {
      session.value = null
      ready.value = true
      return
    }
    attachAuthListener()
    const sb = getSupabase()
    const { data } = await sb.auth.getSession()
    session.value = data.session
    ready.value = true
  }

  async function signIn(email, password) {
    const sb = getSupabase()
    if (!sb) throw new Error('Supabase 환경 변수가 없습니다.')
    const { data, error } = await sb.auth.signInWithPassword({ email, password })
    if (error) throw error
    session.value = data.session
    return data.session
  }

  async function signOut() {
    const sb = getSupabase()
    if (!sb) return
    await sb.auth.signOut()
    session.value = null
  }

  onMounted(() => {
    if (!ready.value) initSession()
  })

  return {
    session,
    ready,
    isLoggedIn,
    userEmail,
    initSession,
    signIn,
    signOut,
    isSupabaseConfigured,
  }
}

export async function ensureAdminSession() {
  if (!isSupabaseConfigured()) return false
  attachAuthListener()
  const sb = getSupabase()
  const { data } = await sb.auth.getSession()
  session.value = data.session
  ready.value = true
  return Boolean(data.session)
}
