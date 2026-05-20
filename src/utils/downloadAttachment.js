/**
 * 임시 첨부 파일 다운로드 (샘플 데이터용).
 * API 연동 시 url 필드가 있으면 해당 URL로 대체할 수 있다.
 */
export function downloadAttachment(file, context = {}) {
  if (!file?.name) return

  if (file.url) {
    const a = document.createElement('a')
    a.href = file.url
    a.download = file.name
    a.rel = 'noopener noreferrer'
    if (file.url.startsWith('http')) {
      a.target = '_blank'
    }
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    return
  }

  const { postTitle = '', boardLabel = '' } = context
  const body = [
    'MG데이터시스템',
    '',
    boardLabel ? `게시판: ${boardLabel}` : '',
    postTitle ? `게시물: ${postTitle}` : '',
    `첨부 파일: ${file.name}`,
    file.size ? `용량(표시): ${file.size}` : '',
    '',
    '※ 홈페이지 샘플용 임시 첨부 파일입니다.',
    '실서비스 연동 시 실제 파일이 제공됩니다.',
  ]
    .filter(Boolean)
    .join('\r\n')

  const blob = new Blob(['\uFEFF', body], { type: 'application/octet-stream' })
  const objectUrl = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = objectUrl
  anchor.download = file.name
  anchor.rel = 'noopener'
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
  URL.revokeObjectURL(objectUrl)
}
