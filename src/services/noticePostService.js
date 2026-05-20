import { getSupabase, isSupabaseConfigured } from '@/lib/supabase'
import {
  BOARD_KEYS,
  formatNoticeDate,
  getSampleRowsForBoard,
  noticeDetailPath,
} from '@/utils/noticePosts'

const TABLE = 'notice_posts'
const BUCKET = 'notice-attachments'

function supabaseOrThrow() {
  const sb = getSupabase()
  if (!sb) throw new Error('Supabase가 설정되지 않았습니다.')
  return sb
}

export function mapDbRowToListRow(row) {
  const attachments = Array.isArray(row.attachments) ? row.attachments : []
  const dateIso = row.published_at ?? row.publishedAt
  return {
    id: row.id,
    boardKey: row.board_key,
    title: row.title,
    content: row.content ?? '',
    date: formatNoticeDate(dateIso),
    dateIso,
    view: row.view_count ?? 0,
    file: attachments.length > 0,
    hot: Boolean(row.is_hot),
    url: noticeDetailPath(row.board_key, row.id),
  }
}

export function mapDbRowToPost(row) {
  const boardKey = row.board_key
  const boardLabel =
    boardKey === 'tender' ? '입찰공고' : boardKey === 'archive' ? '자료실' : '공지사항'
  const dateIso = row.published_at ?? row.publishedAt
  const attachments = Array.isArray(row.attachments) ? row.attachments : []

  return {
    id: row.id,
    boardKey,
    boardLabel,
    title: row.title,
    content: row.content ?? '',
    body: row.body ?? row.content ?? '',
    date: dateIso,
    dateLabel: formatNoticeDate(dateIso),
    view: row.view_count ?? 0,
    file: attachments.length > 0,
    hot: Boolean(row.is_hot),
    attachments,
    deadline: row.deadline ?? null,
    tenderNo: row.tender_no ?? null,
    isPublished: row.is_published !== false,
    to: noticeDetailPath(boardKey, row.id),
  }
}

function mapFormToDbPayload(form) {
  return {
    board_key: form.boardKey,
    title: form.title.trim(),
    content: form.content?.trim() ?? '',
    body: form.body?.trim() ?? '',
    published_at: form.publishedAt,
    is_hot: Boolean(form.isHot),
    is_published: Boolean(form.isPublished),
    tender_no: form.boardKey === 'tender' ? form.tenderNo?.trim() || null : null,
    deadline: form.boardKey === 'tender' ? form.deadline?.trim() || null : null,
    attachments: form.attachments ?? [],
  }
}

export async function fetchPublishedPosts(boardKey) {
  if (!BOARD_KEYS.has(boardKey)) return []
  const sb = supabaseOrThrow()
  const { data, error } = await sb
    .from(TABLE)
    .select('*')
    .eq('board_key', boardKey)
    .eq('is_published', true)
    .order('is_hot', { ascending: false })
    .order('published_at', { ascending: false })

  if (error) throw error
  return (data ?? []).map(mapDbRowToListRow)
}

export async function fetchPublishedPostById(id) {
  const sb = supabaseOrThrow()
  const { data, error } = await sb
    .from(TABLE)
    .select('*')
    .eq('id', id)
    .eq('is_published', true)
    .maybeSingle()

  if (error) throw error
  return data ? mapDbRowToPost(data) : null
}

export async function incrementPostView(id) {
  if (!isSupabaseConfigured()) return
  const sb = getSupabase()
  await sb.rpc('increment_notice_view', { post_id: id })
}

export async function fetchSpotlightPosts(limit = 6) {
  const sb = supabaseOrThrow()
  const { data, error } = await sb
    .from(TABLE)
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false })
    .limit(Math.max(limit * 3, 12))

  if (error) throw error
  const posts = (data ?? []).map(mapDbRowToPost)
  return shuffleArray(posts).slice(0, limit)
}

function shuffleArray(arr) {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export async function fetchAllPostsForAdmin(boardKey = null) {
  const sb = supabaseOrThrow()
  let query = sb.from(TABLE).select('*').order('published_at', { ascending: false })
  if (boardKey) query = query.eq('board_key', boardKey)
  const { data, error } = await query
  if (error) throw error
  return data ?? []
}

export async function fetchPostByIdForAdmin(id) {
  const sb = supabaseOrThrow()
  const { data, error } = await sb.from(TABLE).select('*').eq('id', id).maybeSingle()
  if (error) throw error
  return data
}

export async function createPost(form) {
  const sb = supabaseOrThrow()
  const { data, error } = await sb
    .from(TABLE)
    .insert(mapFormToDbPayload(form))
    .select('*')
    .single()
  if (error) throw error
  return data
}

export async function updatePost(id, form) {
  const sb = supabaseOrThrow()
  const { data, error } = await sb
    .from(TABLE)
    .update(mapFormToDbPayload(form))
    .eq('id', id)
    .select('*')
    .single()
  if (error) throw error
  return data
}

export async function deletePost(id) {
  const sb = supabaseOrThrow()
  const { error } = await sb.from(TABLE).delete().eq('id', id)
  if (error) throw error
}

export function formatFileSizeLabel(byteSize) {
  const sizeMb = byteSize / (1024 * 1024)
  return sizeMb >= 1
    ? `${sizeMb.toFixed(1)}MB`
    : `${Math.max(1, Math.round(byteSize / 1024))}KB`
}

export async function uploadAttachments(files, postId) {
  const list = [...files]
  const uploaded = []
  for (const file of list) {
    uploaded.push(await uploadAttachment(file, postId))
  }
  return uploaded
}

export async function uploadAttachment(file, postId) {
  const sb = supabaseOrThrow()
  const safeName = file.name.replace(/[^\w.\-가-힣]/g, '_')
  const path = `${postId}/${Date.now()}-${safeName}`
  const { error: uploadError } = await sb.storage.from(BUCKET).upload(path, file, {
    cacheControl: '3600',
    upsert: false,
  })
  if (uploadError) throw uploadError

  const { data } = sb.storage.from(BUCKET).getPublicUrl(path)
  return {
    name: file.name,
    size: formatFileSizeLabel(file.size),
    url: data.publicUrl,
    path,
  }
}

export async function removeAttachmentFromStorage(path) {
  if (!path) return
  const sb = supabaseOrThrow()
  await sb.storage.from(BUCKET).remove([path])
}

export function emptyPostForm(boardKey = 'board') {
  const today = new Date().toISOString().slice(0, 10)
  return {
    boardKey,
    title: '',
    content: '',
    body: '',
    publishedAt: today,
    isHot: false,
    isPublished: true,
    tenderNo: '',
    deadline: '',
    attachments: [],
  }
}

export function dbRowToForm(row) {
  if (!row) return emptyPostForm()
  return {
    boardKey: row.board_key,
    title: row.title ?? '',
    content: row.content ?? '',
    body: row.body ?? '',
    publishedAt: row.published_at ?? new Date().toISOString().slice(0, 10),
    isHot: Boolean(row.is_hot),
    isPublished: row.is_published !== false,
    tenderNo: row.tender_no ?? '',
    deadline: row.deadline ?? '',
    attachments: Array.isArray(row.attachments) ? [...row.attachments] : [],
  }
}

export function getSampleListRows(boardKey) {
  return getSampleRowsForBoard(boardKey).map((row, index) => {
    const attachments = row.attachments ?? []
    return {
      ...row,
      id: `${boardKey}-sample-${index}`,
      boardKey,
      sourceIndex: index,
      date: formatNoticeDate(row.date),
      dateIso: row.date,
      url: noticeDetailPath(boardKey, index),
      file: row.file || attachments.length > 0,
    }
  })
}
