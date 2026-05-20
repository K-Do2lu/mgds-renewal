/** 목록·상세 공통 필드 — API 연동 전 임시 데이터 */

let _seq = 0

function base(overrides = {}) {
  _seq += 1
  const day = String(Math.max(1, 28 - (_seq % 20))).padStart(2, '0')
  return {
    date: `2026-04-${day}`,
    view: 72 + _seq * 11,
    file: false,
    hot: false,
    attachments: [],
    ...overrides,
  }
}

function defaultAttachments(title) {
  return [{ name: `${title.replace(/[\\/:*?"<>|]/g, '')}.pdf`, size: '1.4MB' }]
}

/** 상세 본문 (공통 틀 + 게시판 유형별 문단) */
function buildDetailBody(boardKey, title, summary, extra = {}) {
  const boardLabel =
    boardKey === 'tender' ? '입찰공고' : boardKey === 'archive' ? '자료실' : '공지사항'

  const lines = [
    '안녕하세요. MG데이터시스템입니다.',
    '',
    `「${title}」 ${boardLabel} 내용을 아래와 같이 안내드립니다.`,
    '',
    summary,
    '',
  ]

  if (boardKey === 'board') {
    lines.push(
      '■ 안내 사항',
      '• 본 내용은 홈페이지 리뉴얼 과정에서 사용하는 임시 게시물입니다.',
      '• 실제 운영 시에는 담당 부서 검수 후 게시됩니다.',
      '• 문의 사항은 고객센터 또는 담당 부서로 연락해 주시기 바랍니다.',
      '',
      '■ 문의',
      '• 담당: 홍보·고객지원팀',
      '• 운영 시간: 평일 09:00 ~ 18:00',
      '',
      '감사합니다.',
    )
  } else if (boardKey === 'archive') {
    lines.push(
      '■ 자료 안내',
      '• 첨부 파일은 상세 페이지 하단에서 확인할 수 있습니다.',
      '• 자료는 내부 검토·홍보 목적으로 제공되며, 무단 배포를 금합니다.',
      '• 인쇄·편집 시 CI/BI 가이드라인을 준수해 주세요.',
      '',
      '■ 이용 문의',
      '• 자료 요청·고해상도 원본: 홍보팀',
      '',
      '많은 이용 부탁드립니다.',
    )
  } else {
    lines.push(
      '■ 입찰 개요',
      `• 공고번호: ${extra.tenderNo ?? 'MGDS-2026-00' + String(_seq).padStart(2, '0')}`,
      `• 입찰 마감: ${extra.deadline ?? '2026. 05. 30 17:00'}`,
      '• 제출 방법: 홈페이지 안내에 따른 전자 제출',
      '',
      '■ 유의 사항',
      '• 입찰 참가 자격 및 제출 서류는 공고문 전문을 확인해 주세요.',
      '• 본 공고는 임시 샘플이며, 실제 입찰 일정과는 무관합니다.',
      '',
      '■ 문의처',
      '• 구매·계약 담당',
      '',
      '많은 관심과 참여 부탁드립니다.',
    )
  }

  return lines.join('\n')
}

function makeRow(boardKey, opts) {
  const {
    title,
    summary,
    file = false,
    hot = false,
    date,
    view,
    body,
    deadline,
    tenderNo,
    attachments,
  } = opts

  const row = {
    ...base({ file, hot, date, view }),
    title,
    content: summary,
    body: body ?? buildDetailBody(boardKey, title, summary, { deadline, tenderNo }),
  }

  if (file) {
    row.attachments = attachments ?? defaultAttachments(title)
  }

  if (boardKey === 'tender') {
    row.deadline = deadline ?? '2026. 05. 30 17:00'
    row.tenderNo = tenderNo ?? `MGDS-T-${String(_seq).padStart(4, '0')}`
  }

  return row
}

/** 목록·상세 URL용 고정 인덱스 (검색/정렬 후에도 동일) */
function stampBoardRows(boardKey, rows) {
  rows.forEach((row, sourceIndex) => {
    row.boardKey = boardKey
    row.sourceIndex = sourceIndex
  })
  return rows
}

export const noticeBoardSampleRows = stampBoardRows('board', [
  makeRow('board', {
    title: 'MG데이터시스템 홈페이지 리뉴얼 안내',
    summary:
      '새로운 UI/UX로 개선된 홈페이지를 오픈합니다. 주요 메뉴 구조와 디자인이 변경되었으니 이용에 참고해 주세요.',
    hot: true,
  }),
  makeRow('board', {
    title: '2026년 시스템 정기 점검 일정 안내',
    summary:
      '안정적인 서비스 제공을 위해 정기 점검을 실시합니다. 점검 시간 동안 일부 서비스 이용이 제한될 수 있습니다.',
    file: true,
    hot: true,
  }),
  makeRow('board', {
    title: '개인정보처리방침 개정 안내',
    summary: '개정된 개인정보처리방침 주요 변경 사항과 시행일을 안내드립니다.',
  }),
  makeRow('board', {
    title: '금융권 보안 정책 변경에 따른 서비스 안내',
    summary: '보안 정책 강화에 따라 인증·접속 정책이 일부 변경됩니다.',
    file: true,
  }),
  makeRow('board', {
    title: '고객센터 운영시간 변경 안내',
    summary: '고객센터 평일·주말 운영 시간이 아래와 같이 조정됩니다.',
  }),
  makeRow('board', {
    title: '서비스 이용 약관 개정 안내',
    summary: '서비스 이용 약관 일부 조항이 개정되어 2026년 5월 1일부터 적용됩니다.',
  }),
  makeRow('board', {
    title: '보안 패치 적용 안내',
    summary: '시스템 보안 강화를 위한 패치가 적용되었습니다. 재로그인이 필요할 수 있습니다.',
    file: true,
  }),
  makeRow('board', {
    title: '장애 예방 점검 결과 안내',
    summary: '최근 실시한 예방 점검 결과와 후속 조치 계획을 공유합니다.',
  }),
  makeRow('board', {
    title: '시스템 성능 개선 작업 안내',
    summary: '응답 속도 개선을 위한 인프라·애플리케이션 튜닝 작업 일정을 안내합니다.',
  }),
  makeRow('board', {
    title: '고객 문의 채널 안내',
    summary: '문의·제보·제안 채널을 통합 안내합니다. 빠른 응대를 위해 채널별 이용 방법을 확인해 주세요.',
    hot: true,
  }),
])

export const noticeArchiveSampleRows = stampBoardRows('archive', [
  makeRow('archive', {
    title: '2025년 사업보고서',
    summary: '2025년 연간 실적, 주요 사업 성과, 재무 하이라이트를 담은 사업보고서입니다.',
    file: true,
  }),
  makeRow('archive', {
    title: 'CI/BI 가이드라인',
    summary: '로고, 컬러, 서체 등 브랜드 사용 규정을 정리한 가이드라인입니다.',
    file: true,
    hot: true,
  }),
  makeRow('archive', {
    title: '보도자료 — 신규 SI 사업 수주',
    summary: '금융권 SI 사업 수주 관련 보도자료 원문 및 요약 자료입니다.',
  }),
  makeRow('archive', {
    title: '기술 백서 Vol.2',
    summary: '운영 고도화·보안 강화·클라우드 전환 사례를 담은 기술 백서 2호입니다.',
    file: true,
  }),
  makeRow('archive', {
    title: '미디어 키트',
    summary: '언론·홍보용 로고, 대표 이미지, 회사 소개 요약이 포함된 미디어 키트입니다.',
  }),
  makeRow('archive', {
    title: '회사 소개서(PDF)',
    summary: 'MG데이터시스템 사업 영역·조직·주요 레퍼런스를 소개하는 회사 소개서입니다.',
    file: true,
  }),
  makeRow('archive', {
    title: '브랜드 가이드(이미지)',
    summary: '온·오프라인 채널별 브랜드 비주얼 적용 예시 이미지 모음입니다.',
    file: true,
  }),
  makeRow('archive', {
    title: '홍보 영상 자료',
    summary: '기업 홍보 영상 및 쇼트 클립, 활용 가이드가 포함된 패키지입니다.',
  }),
  makeRow('archive', {
    title: '보안 운영 가이드',
    summary: '보안 운영 프로세스, 장애 대응, 접근 통제 정책 요약 문서입니다.',
    file: true,
  }),
  makeRow('archive', {
    title: '사업 영역 브로슈어',
    summary: '주요 솔루션·서비스 라인업을 한눈에 볼 수 있는 브로슈어입니다.',
    file: true,
  }),
])

export const noticeTenderSampleRows = stampBoardRows('tender', [
  makeRow('tender', {
    title: '금융 IT 인프라 구축 입찰 공고',
    summary: '금융권 통합 인프라 구축·전환 사업에 대한 제안 공고입니다.',
    hot: true,
    deadline: '2026. 05. 28 17:00',
    tenderNo: 'MGDS-T-2026-0101',
    file: true,
  }),
  makeRow('tender', {
    title: '네트워크 장비 납품 및 설치 입찰',
    summary: '백본·액세스 스위치 납품 및 설치·초기 구성 용역 입찰입니다.',
    file: true,
    deadline: '2026. 05. 22 17:00',
    tenderNo: 'MGDS-T-2026-0102',
  }),
  makeRow('tender', {
    title: '보안 솔루션 도입 용역 입찰',
    summary: '통합 보안 관제·취약점 점검 솔루션 도입 및 구축 용역입니다.',
    deadline: '2026. 05. 25 17:00',
    tenderNo: 'MGDS-T-2026-0103',
  }),
  makeRow('tender', {
    title: '데이터센터 이전 컨설팅 입찰',
    summary: 'DC 이전 타당성 검토, 일정·리스크 분석 컨설팅 제안을 요청합니다.',
    file: true,
    deadline: '2026. 06. 02 17:00',
    tenderNo: 'MGDS-T-2026-0104',
  }),
  makeRow('tender', {
    title: '유지보수 통합 용역 입찰',
    summary: '서버·스토리지·네트워크 통합 유지보수 운영 용역 입찰 공고입니다.',
    deadline: '2026. 05. 20 17:00',
    tenderNo: 'MGDS-T-2026-0105',
  }),
  makeRow('tender', {
    title: '백업 시스템 고도화 용역 입찰',
    summary: '백업 정책 재설계, 복구 시나리오 검증, 모니터링 고도화 용역입니다.',
    file: true,
    deadline: '2026. 06. 05 17:00',
    tenderNo: 'MGDS-T-2026-0106',
  }),
  makeRow('tender', {
    title: '관제 시스템 운영 용역 입찰',
    summary: '24×7 인프라·애플리케이션 관제 및 장애 대응 운영 용역입니다.',
    deadline: '2026. 05. 27 17:00',
    tenderNo: 'MGDS-T-2026-0107',
  }),
  makeRow('tender', {
    title: '서버 증설 및 설치 입찰',
    summary: '가상화·물리 서버 증설, 랙 마운트, OS 표준 이미지 적용 공고입니다.',
    file: true,
    deadline: '2026. 05. 24 17:00',
    tenderNo: 'MGDS-T-2026-0108',
  }),
  makeRow('tender', {
    title: '보안 장비 유지보수 입찰',
    summary: '방화벽·IPS 등 보안 장비 유지보수 및 정기 점검 용역입니다.',
    deadline: '2026. 05. 21 17:00',
    tenderNo: 'MGDS-T-2026-0109',
  }),
  makeRow('tender', {
    title: '애플리케이션 고도화 개발 용역 입찰',
    summary: '핵심 업무 시스템 UI/UX 개선 및 성능 최적화 개발 용역 제안을 받습니다.',
    hot: true,
    deadline: '2026. 06. 10 17:00',
    tenderNo: 'MGDS-T-2026-0110',
    file: true,
  }),
])
