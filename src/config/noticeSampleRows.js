/** 가이드 Layout.vue Table 예시와 동일한 필드 구조 — 실 API 연동 전 목록용 */
const base = () => ({
  date: '2026-04-21',
  view: 128,
  url: '#',
  file: false,
  hot: false,
  content: '',
})

export const noticeBoardSampleRows = [
  {
    ...base(),
    title: 'MG데이터시스템 홈페이지 리뉴얼 안내',
    content: '새로운 UI/UX로 개선된 홈페이지를 안내드립니다.',
    hot: true,
  },
  {
    ...base(),
    title: '2026년 시스템 정기 점검 일정 안내',
    content: '안정적인 서비스 제공을 위한 정기 점검 일정을 안내드립니다.',
    file: true,
    hot: true,
  },
  { ...base(), title: '개인정보처리방침 개정 안내', content: '개정된 개인정보처리방침 주요 변경 사항을 확인해주세요.' },
  {
    ...base(),
    title: '금융권 보안 정책 변경에 따른 서비스 안내',
    content: '보안 정책 강화에 따른 일부 기능 변경 사항을 안내드립니다.',
    file: true,
  },
  { ...base(), title: '고객센터 운영시간 변경 안내', content: '고객센터 운영시간 변경을 안내드립니다.' },
  { ...base(), title: '서비스 이용 약관 개정 안내', content: '서비스 이용 약관이 일부 개정되어 안내드립니다.' },
  { ...base(), title: '보안 패치 적용 안내', content: '보안 강화를 위해 패치가 적용되었습니다.', file: true },
  { ...base(), title: '장애 예방 점검 결과 안내', content: '최근 예방 점검 결과 및 조치 사항을 공유드립니다.' },
  { ...base(), title: '시스템 성능 개선 작업 안내', content: '성능 개선을 위한 작업 일정 및 영향 범위를 안내드립니다.' },
  { ...base(), title: '고객 문의 채널 안내', content: '문의/제보/제안 채널을 한 곳에서 확인하세요.', hot: true },
]

export const noticeArchiveSampleRows = [
  { ...base(), title: '2025년 사업보고서', content: '연간 실적과 주요 사업 내용을 담은 보고서입니다.', file: true },
  { ...base(), title: 'CI/BI 가이드라인', content: '브랜드 사용 규정을 포함한 가이드라인입니다.', file: true, hot: true },
  { ...base(), title: '보도자료 — 신규 SI 사업 수주', content: '신규 SI 사업 수주 관련 보도자료입니다.' },
  { ...base(), title: '기술 백서 Vol.2', content: '운영 고도화/보안 강화 관련 백서입니다.', file: true },
  { ...base(), title: '미디어 키트', content: '로고/이미지/자료를 포함한 미디어 키트입니다.' },
  { ...base(), title: '회사 소개서(PDF)', content: '회사 및 사업 영역을 소개하는 자료입니다.', file: true },
  { ...base(), title: '브랜드 가이드(이미지)', content: '브랜드 비주얼 가이드 이미지 모음입니다.', file: true },
  { ...base(), title: '홍보 영상 자료', content: '프로모션 영상 및 관련 자료입니다.' },
  { ...base(), title: '보안 운영 가이드', content: '운영 보안 프로세스 가이드입니다.', file: true },
  { ...base(), title: '사업 영역 브로슈어', content: '주요 서비스/솔루션 소개 브로슈어입니다.', file: true },
]

export const noticeTenderSampleRows = [
  { ...base(), title: '금융 IT 인프라 구축 입찰 공고', content: '인프라 구축 관련 입찰 공고입니다.', hot: true },
  { ...base(), title: '네트워크 장비 납품 및 설치 입찰', content: '장비 납품/설치 범위를 확인해주세요.', file: true },
  { ...base(), title: '보안 솔루션 도입 용역 입찰', content: '보안 솔루션 도입 및 구축 용역입니다.' },
  { ...base(), title: '데이터센터 이전 컨설팅 입찰', content: '이전 컨설팅 제안 요청입니다.', file: true },
  { ...base(), title: '유지보수 통합 용역 입찰', content: '통합 유지보수 운영 용역입니다.' },
  { ...base(), title: '백업 시스템 고도화 용역 입찰', content: '백업 시스템 고도화 및 운영 방안 수립.', file: true },
  { ...base(), title: '관제 시스템 운영 용역 입찰', content: '관제 운영/모니터링 체계 운영 용역입니다.' },
  { ...base(), title: '서버 증설 및 설치 입찰', content: '서버 증설 사양 및 설치 범위를 확인해주세요.', file: true },
  { ...base(), title: '보안 장비 유지보수 입찰', content: '보안 장비 유지보수 용역입니다.' },
  { ...base(), title: '애플리케이션 고도화 개발 용역 입찰', content: '업무 고도화 개발 및 테스트 지원.', hot: true },
]
