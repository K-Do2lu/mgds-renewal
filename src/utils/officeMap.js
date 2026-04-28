/** 오시는 길 — 표기 주소 (표·지도 공통) */
export const OFFICE_ADDRESS = '서울특별시 강서구 공항대로 150, 6층'

/** Photon 실패 시 사용 (공항대로 150 근처, Photon 응답 기준) */
export const OFFICE_MAP_FALLBACK = { lat: 37.5594349, lon: 126.82462 }

/**
 * Photon Komoot (OpenStreetMap 기반) 지오코딩 — 브라우저 CORS 허용
 * @returns {{ lat: number, lon: number }}
 */
export async function geocodeOfficeAddress(address = OFFICE_ADDRESS) {
  const url = new URL('https://photon.komoot.io/api/')
  url.searchParams.set('q', address)
  url.searchParams.set('limit', '1')

  const res = await fetch(url.toString())
  if (!res.ok) throw new Error(`geocode: ${res.status}`)
  const data = await res.json()
  const coords = data.features?.[0]?.geometry?.coordinates
  if (!Array.isArray(coords) || coords.length < 2) throw new Error('geocode: no coordinates')

  const [lon, lat] = coords.map(Number)
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) throw new Error('geocode: invalid coordinates')
  return { lat, lon }
}

/** 위경도 기준 Google Maps 임베드 (API 키 없이 embed) */
export function buildGoogleMapsEmbedUrl(lat, lon, zoom = 17) {
  return `https://www.google.com/maps?q=${lat},${lon}&z=${zoom}&hl=ko&output=embed&iwloc=near`
}
