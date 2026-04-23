import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import GuideView from '@/views/guide/GuideView.vue'
import SectionLayout from '@/views/layout/SectionLayout.vue'
import SubCompanyAbout from '@/views/SubCompanyAbout.vue'
import SubBusinessOverview from '@/views/SubBusinessOverview.vue'
import SubBusinessPartners from '@/views/SubBusinessPartners.vue'
import SubNoticeTable from '@/views/SubNoticeTable.vue'
import SubArchiveTable from '@/views/SubArchiveTable.vue'
import SubTenderTable from '@/views/SubTenderTable.vue'
import SubRecruitCareers from '@/views/SubRecruitCareers.vue'
import SubCompanyLoc from '@/views/SubCompanyLoc.vue'

const routes = [
  { path: '/', name: 'Main', component: MainView },
  { path: '/guide', name: 'Guide', component: GuideView },
  {
    path: '/company',
    component: SectionLayout,
    redirect: '/company/about',
    children: [
      { path: 'about', name: 'CompanyAbout', component: SubCompanyAbout },
      { path: 'ceo', name: 'CompanyCeo', component: SubCompanyCeo },
      { path: 'loc', name: 'CompanyLocation', component: SubCompanyLoc },
    ],
  },
  {
    path: '/business',
    component: SectionLayout,
    redirect: '/business/overview',
    children: [
      { path: 'overview', name: 'BusinessOverview', component: SubBusinessOverview },
      { path: 'partners', name: 'BusinessPartners', component: SubBusinessPartners },
    ],
  },
  {
    path: '/notice',
    component: SectionLayout,
    redirect: '/notice/board',
    children: [
      { path: 'board', name: 'NoticeBoard', component: SubNoticeTable },
      { path: 'archive', name: 'NoticeArchive', component: SubArchiveTable },
      { path: 'tender', name: 'NoticeTender', component: SubTenderTable },
    ],
  },
  {
    path: '/recruit',
    component: SectionLayout,
    redirect: '/recruit/careers',
    children: [{ path: 'careers', name: 'RecruitCareers', component: SubRecruitCareers }],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
