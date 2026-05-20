import {
  noticeArchiveSampleRows,
  noticeBoardSampleRows,
  noticeTenderSampleRows,
} from '@/config/noticeSampleRows.js'

export const BOARD_KEYS = new Set(['board', 'archive', 'tender'])

export const NOTICE_BOARDS = [
  { key: 'board', label: '공지사항', rows: noticeBoardSampleRows },
  { key: 'archive', label: '자료실', rows: noticeArchiveSampleRows },
  { key: 'tender', label: '입찰공고', rows: noticeTenderSampleRows },
]

const ROUTE_BOARD_BY_NAME = {
  NoticeBoard: 'board',
  NoticeBoardDetail: 'board',
  NoticeArchive: 'archive',
  NoticeArchiveDetail: 'archive',
  NoticeTender: 'tender',
  NoticeTenderDetail: 'tender',
}

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

export function isPostUuid(value) {
  return UUID_RE.test(String(value ?? ''))
}

export function formatNoticeDate(iso) {
  if (!iso) return ''
  const parts = String(iso).split('-')
  if (parts.length < 3) return iso
  const [y, m, d] = parts
  return `${y}. ${m}. ${d}`
}

export function noticeDetailPath(boardKey, idOrIndex) {
  if (!BOARD_KEYS.has(boardKey)) return `/notice/board/0`
  return `/notice/${boardKey}/${idOrIndex}`
}

export function getSampleRowsForBoard(boardKey) {
  const board = NOTICE_BOARDS.find((b) => b.key === boardKey)
  return board?.rows ?? []
}

export function buildNoticePost(boardKey, index, row) {
  const board = NOTICE_BOARDS.find((b) => b.key === boardKey)
  return {
    id: `${boardKey}-${index}`,
    boardKey,
    boardLabel: board?.label ?? boardKey,
    index,
    title: row.title,
    content: row.content ?? '',
    body: row.body ?? row.content ?? '',
    date: row.date,
    dateLabel: formatNoticeDate(row.date),
    view: row.view,
    file: row.file,
    hot: row.hot,
    attachments: row.attachments ?? [],
    deadline: row.deadline ?? null,
    tenderNo: row.tenderNo ?? null,
    to: noticeDetailPath(boardKey, index),
  }
}

export function getAllNoticePosts() {
  return NOTICE_BOARDS.flatMap(({ key, rows }) =>
    rows.map((row, index) => buildNoticePost(key, index, row)),
  )
}

export function resolveBoardKeyFromRoute(route) {
  if (!route) return 'board'

  for (let i = route.matched.length - 1; i >= 0; i -= 1) {
    const key = route.matched[i].meta?.noticeBoard
    if (BOARD_KEYS.has(key)) return key
  }

  const fromName = ROUTE_BOARD_BY_NAME[route.name]
  if (fromName) return fromName

  const fromPath = String(route.path ?? '').match(/\/notice\/(board|archive|tender)(?:\/|$)/)
  if (fromPath?.[1]) return fromPath[1]

  return 'board'
}

export function parsePostIdFromRoute(route) {
  const raw = String(route?.params?.id ?? '').trim()
  if (!raw) return { kind: 'index', value: -1 }

  if (isPostUuid(raw)) return { kind: 'uuid', value: raw }

  const n = parseInt(raw, 10)
  return { kind: 'index', value: Number.isNaN(n) ? -1 : n }
}

/** @deprecated 샘플 데이터용 — parsePostIdFromRoute 사용 */
export function parsePostIndexFromRoute(route) {
  const parsed = parsePostIdFromRoute(route)
  return parsed.kind === 'index' ? parsed.value : -1
}

export function getNoticePost(boardKey, index) {
  if (!BOARD_KEYS.has(boardKey)) return null

  const i = Number(index)
  if (!Number.isFinite(i) || i < 0) return null

  const board = NOTICE_BOARDS.find((b) => b.key === boardKey)
  if (!board?.rows?.length) return null

  const safeIndex = Math.min(i, board.rows.length - 1)
  const row = board.rows[safeIndex]
  if (!row) return null

  return buildNoticePost(boardKey, safeIndex, row)
}

export function getNoticePostFromRoute(route) {
  const boardKey = resolveBoardKeyFromRoute(route)
  const parsed = parsePostIdFromRoute(route)
  if (parsed.kind === 'uuid') return null
  return getNoticePost(boardKey, parsed.value)
}

export function shuffleArray(arr) {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export function pickRandomSpotlightPosts(count = 6) {
  const pool = getAllNoticePosts()
  if (pool.length <= count) return shuffleArray(pool)
  return shuffleArray(pool).slice(0, count)
}

export function withNoticeDetailUrls(boardKey, rows) {
  return rows.map((row) => {
    const key = row.boardKey ?? boardKey
    const idOrIndex =
      row.id ??
      (typeof row.sourceIndex === 'number' && row.sourceIndex >= 0
        ? row.sourceIndex
        : (NOTICE_BOARDS.find((b) => b.key === key)?.rows.indexOf(row) ?? 0))

    return {
      ...row,
      url: noticeDetailPath(key, idOrIndex),
    }
  })
}
