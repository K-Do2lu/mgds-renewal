/**
 * 사이트 메타·외부 URL·공개 정적 경로 헬퍼.
 * SCSS 토큰은 `src/assets/scss/abstract/_variables.scss`, 브레이크포인트는 `_breakpoints.scss`.
 */

export const SITE_BRAND = 'MG데이터시스템'

export const SITE_PUBLIC_URL = 'https://mgdatasystem.co.kr'

export const EXTERNAL_URLS = {
  careers: 'https://career.mgdatasystem.co.kr/',
  mgdshop: 'https://mgdshop.co.kr/main/index.do',
}

/** Vite `base`를 반영한 public 폴더 기준 URL (`public/foo` → `/foo` 또는 서브패스 배포 시 `/app/foo`) */
export function publicAssetUrl(path) {
  const base = String(import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  const rel = String(path).replace(/^\/+/, '')
  return `${base}/${rel}`
}

export function initDocumentTitle() {
  const t = import.meta.env.VITE_APP_TITLE
  if (typeof document !== 'undefined' && t) document.title = t
}
