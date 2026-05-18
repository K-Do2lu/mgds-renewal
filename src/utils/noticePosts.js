import {
  noticeArchiveSampleRows,
  noticeBoardSampleRows,
  noticeTenderSampleRows,
} from '@/config/noticeSampleRows.js'

export const NOTICE_BOARDS = [
  { key: 'board', label: '공지사항', rows: noticeBoardSampleRows },
  { key: 'archive', label: '자료실', rows: noticeArchiveSampleRows },
  { key: 'tender', label: '입찰공고', rows: noticeTenderSampleRows },
]

export function formatNoticeDate(iso) {
  if (!iso) return ''
  const parts = String(iso).split('-')
  if (parts.length < 3) return iso
  const [y, m, d] = parts
  return `${y}. ${m}. ${d}`
}

export function noticeDetailPath(boardKey, index) {
  return `/notice/${boardKey}/${index}`
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
    date: row.date,
    dateLabel: formatNoticeDate(row.date),
    view: row.view,
    file: row.file,
    hot: row.hot,
    to: noticeDetailPath(boardKey, index),
  }
}

export function getAllNoticePosts() {
  return NOTICE_BOARDS.flatMap(({ key, rows }) =>
    rows.map((row, index) => buildNoticePost(key, index, row)),
  )
}

export function getNoticePost(boardKey, index) {
  const board = NOTICE_BOARDS.find((b) => b.key === boardKey)
  if (!board || !Number.isInteger(index) || index < 0) return null
  const row = board.rows[index]
  if (!row) return null
  return buildNoticePost(boardKey, index, row)
}

export function shuffleArray(arr) {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

/** 메인 최신 소식: 전체 게시판에서 섞어 N건 */
export function pickRandomSpotlightPosts(count = 6) {
  const pool = getAllNoticePosts()
  if (pool.length <= count) return shuffleArray(pool)
  return shuffleArray(pool).slice(0, count)
}

export function withNoticeDetailUrls(boardKey, rows) {
  const source = NOTICE_BOARDS.find((b) => b.key === boardKey)?.rows ?? rows
  return rows.map((row) => ({
    ...row,
    url: noticeDetailPath(boardKey, source.indexOf(row)),
  }))
}
