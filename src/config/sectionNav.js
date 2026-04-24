/** 헤더 1depth */
export const primaryNav = [
  { to: '/company', label: 'COMPANY', sectionKey: 'company' },
  { to: '/business', label: 'BUSINESS', sectionKey: 'business' },
  { to: '/notice', label: 'NOTICE', sectionKey: 'notice' },
  { to: '/recruit', label: 'RECRUIT', sectionKey: 'recruit' },
]

/** URL 첫 세그먼트(company, business, …) 기준 — 섹션 페이지 서브 네비 */
export const subNavBySection = {
  company: [
    { to: '/company/about', label: '회사소개', routeName: 'CompanyAbout' },
    { to: '/company/ceo', label: 'CEO', routeName: 'CompanyCeo' },
    { to: '/company/loc', label: '오시는 길', routeName: 'CompanyLocation' },
  ],
  business: [
    { to: '/business/overview', label: '사업개요', routeName: 'BusinessOverview' },
    { to: '/business/partners', label: '파트너', routeName: 'BusinessPartners' },
  ],
  notice: [
    { to: '/notice/board', label: '공지사항', routeName: 'NoticeBoard' },
    { to: '/notice/archive', label: '자료실', routeName: 'NoticeArchive' },
    { to: '/notice/tender', label: '입찰공고', routeName: 'NoticeTender' },
  ],
  recruit: [
    { to: '/recruit/careers', label: '채용공고', routeName: 'RecruitCareers' },
    { to: '/recruit/talent', label: '인재상', routeName: 'RecruitTalent' },
  ],
}

/** PC 헤더 호버 메가 메뉴 (제목·설명·썸네일) */
export const megaMenuBySection = {
  company: [
    {
      to: '/company/about',
      title: '회사개요',
      lines: ['MG데이터시스템의', '비전과 연혁을 소개합니다.'],
      thumb: new URL('../assets/img/header_item_01.svg', import.meta.url).href,
    },
    {
      to: '/company/ceo',
      title: 'CEO 인사말',
      lines: ['경영 철학과', '고객에 대한 약속을 전합니다.'],
      thumb: new URL('../assets/img/header_item_02.svg', import.meta.url).href,
    },
    {
      to: '/company/loc',
      title: '오시는 길',
      lines: ['본사 위치와', '교통 안내를 안내합니다.'],
      thumb: new URL('../assets/img/header_item_03.svg', import.meta.url).href,
    },
  ],
  business: [
    {
      to: '/business/overview',
      title: '사업영역',
      lines: ['주요 사업 분야와', '서비스를 소개합니다.'],
      thumb: new URL('../assets/img/header_item_04.svg', import.meta.url).href,
    },
  ],
  notice: [
    {
      to: '/notice/board',
      title: '공지사항',
      lines: ['주요 공지와', '뉴스를 확인하세요.'],
      thumb: new URL('../assets/img/header_item_05.svg', import.meta.url).href,
    },
    {
      to: '/notice/tender',
      title: '입찰공고',
      lines: ['입찰 일정과', '관련 안내입니다.'],
      thumb: new URL('../assets/img/header_item_06.svg', import.meta.url).href,
    },
    {
      to: '/notice/archive',
      title: '자료실',
      lines: ['보도자료·자료를', '내려받을 수 있습니다.'],
      thumb: new URL('../assets/img/header_item_10.svg', import.meta.url).href,
    },
  
  ],
  recruit: [
    {
      to: '/recruit/careers',
      title: '채용공고',
      lines: ['MG데이터시스템의 주요 소식과', '공식 안내를 확인하세요.'],
      thumb: new URL('../assets/img/header_item_07.svg', import.meta.url).href,
    },
    {
      to: '/recruit/talent',
      title: ['인재상'],
      lines: ['MG데이터시스템이 추구하는', '인재상을 소개합니다.'],
      thumb: new URL('../assets/img/header_item_08.svg', import.meta.url).href,
    },
  ],
}

export function subNavForSection(sectionKey) {
  return subNavBySection[sectionKey] ?? []
}

export function megaItemsForSection(sectionKey) {
  return megaMenuBySection[sectionKey] ?? []
}
