export const subPageHeadingsByRouteName = {
  // COMPANY
  CompanyAbout: {
    id: 'sub-company-about-title',
    sub: 'About',
    title: 'MG데이터시스템',
  },
  CompanyCeo: {
    id: 'sub-company-ceo-title',
    sub: 'CEO',
    title: 'CEO 인사말',
  },
  CompanyLocation: {
    id: 'sub-company-loc-title',
    sub: 'Directions',
    title: '오시는 길',
  },

  // BUSINESS
  BusinessOverview: {
    id: 'sub-business-overview-title',
    sub: 'Business',
    title: '사업영역',
    lead:
      'MG데이터시스템은 금융 IT를 중심으로 시스템 구축·운영·유지보수까지 전 과정을 아우르는 통합 역량을 바탕으로, 고객의 디지털 전환과 업무 효율 향상을 함께합니다. 새마을금고 및 금융권 환경에 최적화된 서비스 모델을 지속적으로 고도화하며, 안정성과 혁신이 공존하는 IT 파트너로 성장해 나가겠습니다.',
  },
  BusinessPartners: {
    id: 'sub-business-partners-title',
    sub: 'Partners',
    title: '협력사 소개',
  },

  // NOTICE
  NoticeBoard: {
    id: 'sub-notice-board-title',
    sub: 'Notice',
    title: '공지사항',
  },
  NoticeArchive: {
    id: 'sub-notice-archive-title',
    sub: 'Archive',
    title: '자료실',
  },
  NoticeTender: {
    id: 'sub-notice-tender-title',
    sub: 'Tender',
    title: '입찰공고',
  },
  NoticeBoardDetail: {
    id: 'sub-notice-board-title',
    sub: 'Notice',
    title: '공지사항',
  },
  NoticeArchiveDetail: {
    id: 'sub-notice-archive-title',
    sub: 'Archive',
    title: '자료실',
  },
  NoticeTenderDetail: {
    id: 'sub-notice-tender-title',
    sub: 'Tender',
    title: '입찰공고',
  },

  // RECRUIT
  RecruitTalent: {
    id: 'recruit-talent-title',
    sub: 'Talent',
    title: 'MG데이터시스템이 바라는 인재상',
    lead: '기술 전문성과 협업 역량을 바탕으로, 금융 IT의 안정성과 혁신을 함께 만드는 인재를 찾습니다.',
  },
}

export function getSubPageHeadingByRouteName(routeName) {
  if (!routeName) return null
  return subPageHeadingsByRouteName[routeName] ?? null
}

