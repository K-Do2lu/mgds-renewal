import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import GuideView from '@/views/guide/GuideView.vue'
import CompanySection from '@/views/company/CompanySection.vue'
import BusinessSection from '@/views/business/BusinessSection.vue'
import NoticeSection from '@/views/notice/NoticeSection.vue'
import RecruitSection from '@/views/recruit/RecruitSection.vue'
import SubCompanyAbout from '@/views/SubCompanyAbout.vue'
import SubBusinessOverview from '@/views/SubBusinessOverview.vue'
import SubBusinessPartners from '@/views/SubBusinessPartners.vue'
import SubNoticeTable from '@/views/SubNoticeTable.vue'
import SubArchiveTable from '@/views/SubArchiveTable.vue'
import SubTenderTable from '@/views/SubTenderTable.vue'
import SubRecruitTalent from '@/views/SubRecruitTalent.vue'
import SubCompanyLoc from '@/views/SubCompanyLoc.vue'
import SubCompanyCeo from '@/views/SubCompanyCeo.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import TermsOfService from '@/views/TermsOfService.vue'
import NoEmailCollect from '@/views/NoEmailCollect.vue'

const routes = [
  { path: '/', name: 'Main', component: MainView },
  { path: '/guide', name: 'Guide', component: GuideView },
  { path: '/privacy', name: 'PrivacyPolicy', component: PrivacyPolicy },
  { path: '/terms', name: 'TermsOfService', component: TermsOfService },
  { path: '/email', name: 'NoEmailCollect', component: NoEmailCollect },
  {
    path: '/company',
    meta: { sectionKey: 'company' },
    component: CompanySection,
    redirect: '/company/about',
    children: [
      { path: 'about', name: 'CompanyAbout', component: SubCompanyAbout },
      { path: 'ceo', name: 'CompanyCeo', component: SubCompanyCeo },
      { path: 'loc', name: 'CompanyLocation', component: SubCompanyLoc },
    ],
  },
  {
    path: '/business',
    meta: { sectionKey: 'business' },
    component: BusinessSection,
    redirect: '/business/overview',
    children: [
      { path: 'overview', name: 'BusinessOverview', component: SubBusinessOverview },
      { path: 'partners', name: 'BusinessPartners', component: SubBusinessPartners },
    ],
  },
  {
    path: '/notice',
    meta: { sectionKey: 'notice' },
    component: NoticeSection,
    redirect: '/notice/board',
    children: [
      { path: 'board', name: 'NoticeBoard', component: SubNoticeTable },
      { path: 'archive', name: 'NoticeArchive', component: SubArchiveTable },
      { path: 'tender', name: 'NoticeTender', component: SubTenderTable },
    ],
  },
  {
    path: '/recruit',
    meta: { sectionKey: 'recruit' },
    component: RecruitSection,
    redirect: '/recruit/talent',
    children: [
      { path: 'careers', redirect: '/recruit/talent' },
      { path: 'talent', name: 'RecruitTalent', component: SubRecruitTalent },
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

export default router
