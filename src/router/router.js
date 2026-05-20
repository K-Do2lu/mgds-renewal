import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import {
  notifyRouteLoadingEnd,
  notifyRouteLoadingStart,
} from '@/composables/useAppLoading'
import { ensureAdminSession } from '@/composables/useAdminAuth'
import { isSupabaseConfigured } from '@/lib/supabase'

const routes = [
  { path: '/', name: 'Main', component: () => import('@/views/MainView.vue') },
  { path: '/guide', name: 'Guide', component: () => import('@/views/guide/GuideView.vue') },
  {
    path: '/privacy',
    name: 'PrivacyPolicy',
    component: () => import('@/views/PrivacyPolicy.vue'),
  },
  {
    path: '/terms',
    name: 'TermsOfService',
    component: () => import('@/views/TermsOfService.vue'),
  },
  {
    path: '/email',
    name: 'NoEmailCollect',
    component: () => import('@/views/NoEmailCollect.vue'),
  },
  {
    path: '/company',
    meta: { sectionKey: 'company' },
    component: () => import('@/views/company/CompanySection.vue'),
    redirect: '/company/about',
    children: [
      { path: 'about', name: 'CompanyAbout', component: () => import('@/views/SubCompanyAbout.vue') },
      { path: 'ceo', name: 'CompanyCeo', component: () => import('@/views/SubCompanyCeo.vue') },
      {
        path: 'loc',
        name: 'CompanyLocation',
        component: () => import('@/views/SubCompanyLoc.vue'),
      },
    ],
  },
  {
    path: '/business',
    meta: { sectionKey: 'business' },
    component: () => import('@/views/business/BusinessSection.vue'),
    redirect: '/business/overview',
    children: [
      {
        path: 'overview',
        name: 'BusinessOverview',
        component: () => import('@/views/SubBusinessOverview.vue'),
      },
      {
        path: 'partners',
        name: 'BusinessPartners',
        component: () => import('@/views/SubBusinessPartners.vue'),
      },
    ],
  },
  {
    path: '/notice',
    meta: { sectionKey: 'notice' },
    component: () => import('@/views/notice/NoticeSection.vue'),
    redirect: '/notice/board',
    children: [
      {
        path: 'board/:id',
        name: 'NoticeBoardDetail',
        component: () => import('@/views/notice/NoticeDetailView.vue'),
        meta: { parentRouteName: 'NoticeBoard', noticeBoard: 'board' },
      },
      { path: 'board', name: 'NoticeBoard', component: () => import('@/views/SubNoticeTable.vue') },
      {
        path: 'archive/:id',
        name: 'NoticeArchiveDetail',
        component: () => import('@/views/notice/NoticeDetailView.vue'),
        meta: { parentRouteName: 'NoticeArchive', noticeBoard: 'archive' },
      },
      {
        path: 'archive',
        name: 'NoticeArchive',
        component: () => import('@/views/SubArchiveTable.vue'),
      },
      {
        path: 'tender/:id',
        name: 'NoticeTenderDetail',
        component: () => import('@/views/notice/NoticeDetailView.vue'),
        meta: { parentRouteName: 'NoticeTender', noticeBoard: 'tender' },
      },
      {
        path: 'tender',
        name: 'NoticeTender',
        component: () => import('@/views/SubTenderTable.vue'),
      },
    ],
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: () => import('@/views/admin/AdminLoginView.vue'),
    meta: { layout: 'admin', adminGuest: true },
  },
  {
    path: '/admin',
    component: () => import('@/views/admin/AdminLayout.vue'),
    meta: { layout: 'admin', requiresAdmin: true },
    redirect: '/admin/posts',
    children: [
      {
        path: 'posts',
        name: 'AdminPosts',
        component: () => import('@/views/admin/AdminPostListView.vue'),
      },
      {
        path: 'posts/new',
        name: 'AdminPostNew',
        component: () => import('@/views/admin/AdminPostEditView.vue'),
      },
      {
        path: 'posts/:id/edit',
        name: 'AdminPostEdit',
        component: () => import('@/views/admin/AdminPostEditView.vue'),
      },
    ],
  },
  {
    path: '/recruit',
    meta: { sectionKey: 'recruit' },
    component: () => import('@/views/recruit/RecruitSection.vue'),
    redirect: '/recruit/talent',
    children: [
      { path: 'careers', redirect: '/recruit/talent' },
      {
        path: 'talent',
        name: 'RecruitTalent',
        component: () => import('@/views/SubRecruitTalent.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      // Vue Router는 el만 주면 CSS scroll-margin을 반영하지 않음.
      // 공식 문서: getComputedStyle(el).scrollMarginTop을 top으로 전달 (고정 헤더 오프셋)
      return new Promise((resolve) => {
        nextTick(() => {
          try {
            const id = to.hash.startsWith('#') ? to.hash.slice(1) : to.hash
            const el = document.getElementById(id)
            let top = 128
            if (el) {
              const mt = parseFloat(getComputedStyle(el).scrollMarginTop)
              if (!Number.isNaN(mt) && mt > 0) top = mt
            }
            resolve({
              el: to.hash,
              behavior: 'smooth',
              top,
            })
          } catch {
            resolve({ el: to.hash, behavior: 'smooth', top: 128 })
          }
        })
      })
    }
    return { top: 0, left: 0 }
  },
})

router.beforeEach(async (to, _from, next) => {
  notifyRouteLoadingStart()

  const needsAdmin = to.matched.some((r) => r.meta.requiresAdmin)
  const isGuestAdmin = Boolean(to.meta.adminGuest)

  if (needsAdmin || isGuestAdmin) {
    if (!isSupabaseConfigured()) {
      if (needsAdmin) {
        next({ name: 'AdminLogin', query: { redirect: to.fullPath } })
        return
      }
      next()
      return
    }

    const loggedIn = await ensureAdminSession()
    if (needsAdmin && !loggedIn) {
      next({ name: 'AdminLogin', query: { redirect: to.fullPath } })
      return
    }
    if (isGuestAdmin && loggedIn) {
      next({ name: 'AdminPosts' })
      return
    }
  }

  next()
})

router.afterEach(() => {
  nextTick(() => {
    notifyRouteLoadingEnd()
  })
})

router.onError(() => {
  notifyRouteLoadingEnd()
})

export default router
