/**
 * 스타일 가이드용 — `src/assets/scss/abstract/_variables.scss` 와 동일 값 유지.
 * 토큰 변경 시 SCSS와 이 파일을 함께 수정하세요.
 */

export const paletteGroups = [
  {
    title: 'Gray',
    items: [
      { token: '$gray-000', value: '#ffffff' },
      { token: '$gray-100', value: '#f2f6ff' },
      { token: '$gray-200', value: '#d9e3f5' },
      { token: '$gray-300', value: '#CCCCCC' },
      { token: '$gray-400', value: '#BDBDBD' },
      { token: '$gray-500', value: '#888888' },
      { token: '$gray-600', value: '#6B7280' },
      { token: '$gray-700', value: '#1A1A1B' },
      { token: '$gray-800', value: '#1A1A1A' },
    ],
  },
  {
    title: 'Blue',
    items: [
      { token: '$blue-000', value: '#E6F0FF' },
      { token: '$blue-100', value: '#286CF7' },
      { token: '$blue-200', value: '#004595' },
      { token: '$blue-300', value: '#00316B' },
      { token: '$blue-400', value: '#6366F1' },
    ],
  },
  {
    title: 'Business card / Etc',
    items: [
      { token: '$business-card-bg-03', value: '#E9F4FB' },
      { token: '$business-card-bg-05', value: '#E9E9FF' },
      { token: '$etc-000', value: '#909399' },
      { token: '$etc-100', value: '#F56C6C' },
      { token: '$etc-200', value: '#E6A23C' },
      { token: '$etc-300', value: '#67C23A' },
    ],
  },
]

export const semanticColors = [
  { token: '$txt-main', value: '#0f172a', note: '본문 강조' },
  { token: '$txt-sub', value: '#475569', note: '보조 텍스트' },
  { token: '$txt-white', value: '$gray-000', note: '밝은 배경용' },
  { token: '$point-main', value: '#1d4ed8', note: '포인트' },
  { token: '$point-sub', value: '$blue-400', note: '포인트 보조' },
  { token: '$bg-main', value: '#eef3ff', note: '페이지 배경' },
  { token: '$bg-submenu', value: '#F8FAFC', note: '서브 영역' },
  { token: '$border-main', value: '#d6e0f0', note: '경계선' },
  { token: '$ico-color', value: '$gray-600', note: '아이콘 기본' },
  { token: '$header-bg', value: 'rgba(255,255,255,0.95)', note: '헤더 배경' },
]

export const breakpointDocs = [
  { variable: '$bp-pc', width: '1400px', mixin: 'bp(pc)', meaning: 'max-width 1400px 이하' },
  { variable: '$bp-tab', width: '920px', mixin: 'bp(tab)', meaning: 'max-width 920px 이하' },
  { variable: '$bp-mo', width: '767px', mixin: 'bp(mo)', meaning: 'max-width 767px 이하' },
  { variable: '$bp-mo-s', width: '360px', mixin: 'bp(mos)', meaning: 'max-width 360px 이하' },
]
