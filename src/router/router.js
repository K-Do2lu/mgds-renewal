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
import SubRecruitCareers from '@/views/SubRecruitCareers.vue'
import SubRecruitTalent from '@/views/SubRecruitTalent.vue'
import SubCompanyLoc from '@/views/SubCompanyLoc.vue'
import SubCompanyCeo from '@/views/SubCompanyCeo.vue'

const routes = [
  { path: '/', name: 'Main', component: MainView },
  { path: '/guide', name: 'Guide', component: GuideView },
  {
    path: '/company',
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
    component: BusinessSection,
    redirect: '/business/overview',
    children: [
      { path: 'overview', name: 'BusinessOverview', component: SubBusinessOverview },
      { path: 'partners', name: 'BusinessPartners', component: SubBusinessPartners },
    ],
  },
  {
    path: '/notice',
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
    component: RecruitSection,
    redirect: '/recruit/careers',
    children: [
      { path: 'careers', name: 'RecruitCareers', component: SubRecruitCareers },
      { path: 'talent', name: 'RecruitTalent', component: SubRecruitTalent },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, left: 0 }
  },
})

export default router
