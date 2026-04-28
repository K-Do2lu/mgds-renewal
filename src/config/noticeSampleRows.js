/** 가이드 Layout.vue Table 예시와 동일한 필드 구조 — 실 API 연동 전 목록용 */
const base = () => ({
  date: '2026-04-21',
  view: 128,
  url: '#',
  file: false,
  hot: false,
})

export const noticeBoardSampleRows = [
  { ...base(), title: 'MG데이터시스템 홈페이지 리뉴얼 안내', hot: true },
  { ...base(), title: '2026년 시스템 정기 점검 일정 안내', file: true, hot: true },
  { ...base(), title: '개인정보처리방침 개정 안내' },
  { ...base(), title: '금융권 보안 정책 변경에 따른 서비스 안내', file: true },
  { ...base(), title: '고객센터 운영시간 변경 안내' },
]

export const noticeArchiveSampleRows = [
  { ...base(), title: '2025년 사업보고서', file: true },
  { ...base(), title: 'CI/BI 가이드라인', file: true, hot: true },
  { ...base(), title: '보도자료 — 신규 SI 사업 수주' },
  { ...base(), title: '기술 백서 Vol.2', file: true },
  { ...base(), title: '미디어 키트' },
]

export const noticeTenderSampleRows = [
  { ...base(), title: '금융 IT 인프라 구축 입찰 공고', hot: true },
  { ...base(), title: '네트워크 장비 납품 및 설치 입찰', file: true },
  { ...base(), title: '보안 솔루션 도입 용역 입찰' },
  { ...base(), title: '데이터센터 이전 컨설팅 입찰', file: true },
  { ...base(), title: '유지보수 통합 용역 입찰' },
]
