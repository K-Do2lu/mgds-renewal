<script setup>
import { breakpointDocs, paletteGroups, semanticColors } from '@/config/designTokens'

const fontFamily = 'Pretendard, sans-serif'

const fontWeights = [
  { num: 400, name: 'Regular', note: '본문·기본' },
  { num: 500, name: 'Medium', note: '내비 보조·탭·배지' },
  { num: 600, name: 'SemiBold', note: '소제목·카드·강조 라벨' },
  { num: 700, name: 'Bold', note: '섹션 타이틀·표 헤더' },
  { num: 800, name: 'ExtraBold', note: '서브 페이지 일부 강조' },
]

const clampNote =
  '타이포·여백 중 일부는 화면 너비에 따라 최소·최대 사이에서 부드럽게 변합니다. (좁은 화면 ≈ 작은 값, 넓은 화면 ≈ 큰 값)'

const typeRamp = [
  { name: '섹션 타이틀', size: '28px → 44px', lh: '34px → 52px', w: 700 },
  { name: '섹션 리드', size: '15px → 19px', lh: '22px → 30px', w: 400 },
  { name: '서브 라벨(대문자)', size: '12px → 16px', lh: '—', w: 700 },
  { name: '히어로 타이틀', size: '28px → 52px', lh: '약 1.12', w: 600 },
  { name: '상단 메뉴(1depth)', size: '14px → 17px', lh: '본문과 동일', w: 400 },
]

const layoutGrid = [
  { item: '본문 최대 너비', value: '1400px', note: '가운데 정렬 기준' },
  { item: '페이지 좌우 여백', value: '20px ~ 40px', note: '뷰포트에 따라 가변' },
  { item: '섹션 위·아래 간격', value: '80px ~ 140px', note: '블록 사이 세로 리듬' },
  { item: '서브 페이지 상·하 패딩', value: '36px ~ 76px', note: '본문 프레임' },
  { item: '키보드 포커스 링', value: '2px, 바깥 여백 3px', note: '색 #1d4ed8, 모서리 8px 느낌' },
]

const breakpointRows = breakpointDocs.map((bp) => ({
  label: bp.meaning,
  width: bp.width,
}))

const figmaColorNames = [
  { name: 'color/brand/primary', hex: '#1d4ed8', role: '메인 포인트·링크' },
  { name: 'color/brand/primary-strong', hex: '#286CF7', role: '버튼·강조 액션' },
  { name: 'color/text/primary', hex: '#0f172a', role: '본문·제목 기본' },
  { name: 'color/text/secondary', hex: '#475569', role: '보조 설명' },
  { name: 'color/border/default', hex: '#d6e0f0', role: '구분선·필드 테두리 톤' },
  { name: 'color/surface/page-tint', hex: '#eef3ff', role: '페이지 배경 톤' },
]

const formStructureSteps = [
  '한 줄에 건수(총 n건)와 검색 영역을 둔다. 데스크톱에서는 가로로, 모바일에서는 세로로 쌓인다.',
  '검색 영역 안 순서: 왼쪽에 검색 범위(제목/내용 등), 오른쪽에 검색어 입력. 두 필드 사이 간격 10px.',
  '툴바 전체는 연한 회청 배경(#f8fafc), 안쪽 여백 12px, 내부 블록 간 12px.',
  '툴바 바로 아래에 한 줄 도움말을 둘 수 있다. 글자 13px, 보조 색.',
]

const formToolbarSpec = [
  { area: '건수', desc: '총 건수 강조', spec: '보조 색(#475569), 굵게, 14~16px(모바일 13px), 한 줄 유지' },
  { area: '검색 범위(셀렉트)', desc: '드롭다운으로 범위 선택', spec: '치수는 아래 4.3 표 참고' },
  { area: '검색어(입력)', desc: '한 줄 입력, 오른쪽에 검색 아이콘', spec: '치수는 아래 4.3 표 참고' },
  { area: '필드 외곽', desc: '입력·셀렉트 공통', spec: '모서리 10px, 테두리 1px 연한 블루(투명도 16%), 배경 흰색, 그림자 없음' },
  { area: '도움말', desc: '선택', spec: '13px, 보조 색, 여백은 4.3 표' },
]

const formResponsiveSpec = [
  { when: '모바일 (~767px 이하)', change: '툴바를 세로 스택으로 바꾸고, 건수·검색 블록을 가로로 꽉 채운다.' },
  { when: '동일', change: '검색 범위·검색어 필드 모두 가로 100%, 긴 플레이스홀더는 말줄임 처리한다.' },
]

const formBehaviors = [
  {
    title: '검색 범위',
    body: '「제목」「내용」 중 하나를 고른 뒤 검색어와 함께 쓰는 패턴이다. 옵션 문구는 화면 기획과 맞출 것.',
  },
  {
    title: '패밀리 사이트(푸터 등)',
    body: '목록에서 항목을 고르면 새 브라우저 탭으로 해당 사이트가 연다. 드롭다운은 위쪽으로 펼치는 동작을 쓴다(좁은 하단 영역 대응).',
  },
]

const formStates = [
  { state: '기본', spec: '위 필드 외곽 스펙. 안쪽 글자·플레이스홀더는 라이브러리 기본 톤을 따른다.' },
  { state: '호버', spec: '별도 지정 없음. 라이브러리 기본 호버를 유지한다.' },
  { state: '포커스', spec: '필드 포커스 + 키보드 탭 시 눈에 띄는 포커스 링(파란 2px, 바깥 3px)을 함께 고려한다.' },
  { state: '비활성', spec: '필요 시 입력을 비활성으로 두되, 외곽 스타일은 동일 계열로 맞춘다.' },
  { state: '오류·완료', spec: '필드 전용 빨강·초록 테마는 정의하지 않았다. 폼 검증이 필요하면 라이브러리 기본 패턴을 쓴다.' },
]

const radiusTokens = [
  { name: '히어로 카드', val: '22px' },
  { name: '일반 카드', val: '16px' },
  { name: '비즈니스 카드', val: '44px' },
]

/**
 * Form 치수 표 — 게시판 검색 UI 기준 (공지·자료·입찰).
 * Height에 “라이브러리 기본”은 입력·셀렉트 컨트롤 기본 높이(버전별 약 32px 전후, 시안은 브라우저로 확인).
 */
const formDimTables = [
  {
    title: '페이지 · 게시판 블록',
    lead: '폼이 올라가는 바깥 프레임. 02 Layout의 본문 인셋·최대 너비와 같은 규칙이다.',
    rows: [
      {
        part: '페이지 좌우 인셋',
        width: '— (콘텐츠 폭 = 뷰포트 − 인셋)',
        height: '—',
        padding: '—',
        marginGap: '좌·우 각 20px ~ 40px (뷰포트에 따라 clamp)',
        radius: '—',
        mobile: '동일 토큰',
      },
      {
        part: '본문 최대 너비',
        width: '최대 1400px · 가운데 정렬',
        height: '—',
        padding: '—',
        marginGap: '—',
        radius: '—',
        mobile: '—',
      },
      {
        part: '게시판 흰 블록(목록 래퍼)',
        width: '본문 컬럼 100%',
        height: '콘텐츠에 맞춤(auto)',
        padding: '전역 18px ~ 30px (clamp)',
        marginGap: '—',
        radius: '0',
        mobile: '패딩만 clamp로 좁은 쪽에 가깝게',
      },
    ],
  },
  {
    title: '검색 툴바 · 필드',
    lead: '건수 + 검색 행 + 선택적 도움말. 수치는 운영 화면과 동일한 규격이다.',
    rows: [
      {
        part: '툴바 행(회색 배경 블록)',
        width: '블록 안 100%',
        height: '내부 콘텐츠 높이(auto)',
        padding: '12px (상하좌우 동일)',
        marginGap: '아래 바깥 16px ~ 22px (clamp) · 자식 사이 gap 12px',
        radius: '0 · 배경 #f8fafc',
        mobile: '세로 스택 · gap 12px 유지',
      },
      {
        part: '건수(총 n건)',
        width: '콘텐츠 폭 · 한 줄(nowrap)',
        height: '글 줄 높이(타이포에 따름)',
        padding: '—',
        marginGap: '—',
        radius: '—',
        mobile: '글자 13px',
      },
      {
        part: '검색 묶음(셀렉트+입력)',
        width: '데스크톱: 내용 기준 · 모바일: 100%',
        height: '—',
        padding: '—',
        marginGap: '셀렉트 ↔ 입력 gap 10px',
        radius: '—',
        mobile: '세로 스택 · 각 행 width 100%',
      },
      {
        part: '검색 범위(셀렉트)',
        width: '120px 고정',
        height: 'UI 라이브러리 기본(~32px 전후)',
        padding: '라이브러리 내부 패딩',
        marginGap: '—',
        radius: '래퍼 10px · 테두리 1px rgba(29,78,216,0.16)',
        mobile: 'width 100% · max-width 없음',
      },
      {
        part: '검색어(입력)',
        width: 'clamp(220px, 32vw, 360px)',
        height: 'UI 라이브러리 기본(~32px 전후)',
        padding: '라이브러리 내부 패딩',
        marginGap: '—',
        radius: '래퍼 10px · 테두리 동일',
        mobile: 'width 100%',
      },
      {
        part: '도움말 한 줄',
        width: '100%',
        height: '13px 글자 기준 줄 높이',
        padding: '좌우 4px (padding-inline)',
        marginGap: '아래 14px (모바일 10px)',
        radius: '—',
        mobile: '동일 규칙',
      },
      {
        part: '푸터 패밀리 사이트 셀렉트',
        width: '최대 약 180px (데모·가이드 기준)',
        height: 'UI 라이브러리 기본(~32px 전후)',
        padding: '라이브러리 내부',
        marginGap: '—',
        radius: '검색 필드와 동일 계열',
        mobile: '하단 좁은 영역 · 위로 펼침',
      },
    ],
  },
]
</script>

<template>
  <section class="guide style-guide">
    <div class="cnt style-guide__hero">
      <h2>UI · UX 스타일 가이드</h2>
      <p class="guide-lead">
        Figma 등으로 보내는 <strong>UI·UX 가이드 산출물</strong>을 웹에 옮긴 문서입니다.
        기획·디자인 검수·캡처·PDF 공유를 기준으로 두었고, <strong>구현 코드나 파일 경로는 넣지 않습니다.</strong>
        세부 스와치·아이콘 목록은 같은 가이드의 <strong>Color</strong> · <strong>Icons</strong> 탭을 보면 됩니다.
      </p>
      <p class="style-guide__meta">{{ clampNote }}</p>
    </div>

    <div class="cnt">
      <h2>01. Typography</h2>
      <p class="guide-lead">서체: <strong>{{ fontFamily }}</strong> · 기울기 없음(업라이트)</p>

      <h3 class="style-guide__h3">굵기(Weight)</h3>
      <table class="style-guide__table">
        <thead>
          <tr>
            <th>수치</th>
            <th>이름</th>
            <th>쓰임</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in fontWeights" :key="row.num">
            <td>{{ row.num }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.note }}</td>
          </tr>
        </tbody>
      </table>

      <h3 class="style-guide__h3">타입 스케일 (대표)</h3>
      <p class="guide-lead">아래는 화면이 좁을 때와 넓을 때의 글자 크기·줄간격 범위이다.</p>
      <table class="style-guide__table">
        <thead>
          <tr>
            <th>역할</th>
            <th>글자 크기</th>
            <th>줄간격</th>
            <th>굵기</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in typeRamp" :key="row.name">
            <td>{{ row.name }}</td>
            <td>{{ row.size }}</td>
            <td>{{ row.lh }}</td>
            <td>{{ row.w }}</td>
          </tr>
        </tbody>
      </table>

      <h3 class="style-guide__h3">타이포 미리보기</h3>
      <div class="style-guide__samples">
        <p class="style-guide__sample style-guide__sample--section-title">섹션 타이틀 예시</p>
        <p class="style-guide__sample style-guide__sample--section-lead">
          섹션을 설명하는 한두 문장입니다. 보조 색과 줄간격은 화면 너비에 맞춰 조금씩 달라집니다.
        </p>
        <p class="style-guide__sample style-guide__sample--eyebrow">SECTION LABEL · 대문자 라벨</p>
        <p class="style-guide__sample style-guide__sample--body">
          본문 16px 전후의 읽기 텍스트입니다. 실제 서비스 화면에서는 블록마다 고정값과 가변값이 섞일 수 있습니다.
        </p>
      </div>
    </div>

    <div class="cnt">
      <h2>02. Layout · Spacing</h2>
      <table class="style-guide__table">
        <thead>
          <tr>
            <th>항목</th>
            <th>값</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in layoutGrid" :key="row.item">
            <td>{{ row.item }}</td>
            <td>{{ row.value }}</td>
            <td>{{ row.note }}</td>
          </tr>
        </tbody>
      </table>

      <h3 class="style-guide__h3">반응 구간 (기획·디자인용)</h3>
      <p class="guide-lead">「이 너비 이하」에서 레이아웃이 바뀌는 기준이다.</p>
      <table class="style-guide__table">
        <thead>
          <tr>
            <th>설명</th>
            <th>뷰포트 너비 (이하)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in breakpointRows" :key="row.width">
            <td>{{ row.label }}</td>
            <td>{{ row.width }}</td>
          </tr>
        </tbody>
      </table>
      <p class="guide-lead">
        상단 내비가 「와이드 메뉴」로 보이는 기준은 화면 너비 <strong>921px 이상</strong>이다. 그 미만에서는 모바일형 메뉴로 전환된다.
      </p>
    </div>

    <div class="cnt">
      <h2>03. Color</h2>
      <p class="guide-lead">
        전체 팔레트·시맨틱 스와치는 <strong>Color</strong> 탭에서 확인한다. 여기서는 Figma 변수 이름과 역할만 요약한다.
      </p>

      <h3 class="style-guide__h3">Figma 변수 예시</h3>
      <table class="style-guide__table">
        <thead>
          <tr>
            <th>이름(예시)</th>
            <th>HEX</th>
            <th>역할</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in figmaColorNames" :key="row.name">
            <td class="style-guide__mono">{{ row.name }}</td>
            <td>{{ row.hex }}</td>
            <td>{{ row.role }}</td>
          </tr>
        </tbody>
      </table>

      <h3 class="style-guide__h3">시맨틱 색 (요약)</h3>
      <ul class="style-guide__semantic-mini">
        <li v-for="s in semanticColors" :key="s.token">
          <span
            class="style-guide__swatch"
            :style="{
              background:
                s.value.startsWith('$') || s.value.includes('rgba')
                  ? s.value.includes('rgba')
                    ? s.value
                    : 'transparent'
                  : s.value,
            }"
          />
          <span class="style-guide__semantic-role">{{ s.note }}</span>
          <span class="style-guide__semantic-val">{{ s.value.startsWith('$') ? '위 팔레트 참조' : s.value }}</span>
        </li>
      </ul>

      <h3 class="style-guide__h3">Gray · Blue 팔레트 (요약)</h3>
      <div class="style-guide__palette-row">
        <div v-for="g in paletteGroups" :key="g.title" class="style-guide__palette-group">
          <p class="style-guide__palette-title">{{ g.title }}</p>
          <div class="style-guide__swatches">
            <div
              v-for="it in g.items"
              :key="it.token"
              class="style-guide__swatch-lg"
              :title="it.value"
              :style="{ background: it.value }"
            />
          </div>
        </div>
      </div>
    </div>

    <div id="style-guide-form" class="cnt">
      <h2>04. Form · 입력·선택</h2>
      <p class="style-guide__callout">
        <strong>적용 화면:</strong> 공지·자료실·입찰 등 게시판 상단의 「건수 + 검색 범위 + 검색어」 패턴을 기준으로 한다.
        디자인 시안·Figma 컴포넌트는 아래 수치·배치와 맞추면 된다.
      </p>

      <h3 class="style-guide__h3">4.1 정보 구조</h3>
      <ol class="style-guide__checklist">
        <li v-for="(step, i) in formStructureSteps" :key="i">{{ step }}</li>
      </ol>

      <h3 class="style-guide__h3">4.2 시각 스펙 (툴바·필드)</h3>
      <table class="style-guide__table style-guide__table--wide">
        <thead>
          <tr>
            <th>영역</th>
            <th>설명</th>
            <th>스펙</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in formToolbarSpec" :key="row.area">
            <td>{{ row.area }}</td>
            <td>{{ row.desc }}</td>
            <td>{{ row.spec }}</td>
          </tr>
        </tbody>
      </table>

      <h3 class="style-guide__h3">4.3 Form 치수 (Width · Height · 여백)</h3>
      <p class="guide-lead">
        아래 표는 <strong>픽셀·clamp·gap</strong>을 한눈에 보게 정리한 것이다. 가로는 <strong>Width</strong>, 세로 리듬은
        <strong>Height</strong>와 <strong>Padding / Margin · Gap</strong> 열을 같이 보면 된다.
      </p>
      <div v-for="tbl in formDimTables" :key="tbl.title" class="style-guide__dim-block">
        <h4 class="style-guide__h4">{{ tbl.title }}</h4>
        <p v-if="tbl.lead" class="guide-lead style-guide__dim-lead">{{ tbl.lead }}</p>
        <table class="style-guide__table style-guide__table--wide style-guide__table--dims">
          <thead>
            <tr>
              <th>구분</th>
              <th>Width</th>
              <th>Height</th>
              <th>Padding</th>
              <th>Margin · Gap</th>
              <th>Radius · 기타</th>
              <th>모바일</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in tbl.rows" :key="tbl.title + row.part">
              <td>{{ row.part }}</td>
              <td>{{ row.width }}</td>
              <td>{{ row.height }}</td>
              <td>{{ row.padding }}</td>
              <td>{{ row.marginGap }}</td>
              <td>{{ row.radius }}</td>
              <td>{{ row.mobile }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="guide-lead">
        <strong>사이드(좌우)</strong>는 필드만이 아니라 본문 전체 인셋이다. 폼·테이블·타이틀은 같은 Width 규칙을 쓰므로
        Figma에서는 페이지 프레임에 한 번만 연결해 두면 된다.
      </p>

      <h3 class="style-guide__h3">4.4 반응형</h3>
      <table class="style-guide__table">
        <thead>
          <tr>
            <th>조건</th>
            <th>레이아웃 변화</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in formResponsiveSpec" :key="i">
            <td>{{ row.when }}</td>
            <td>{{ row.change }}</td>
          </tr>
        </tbody>
      </table>

      <h3 class="style-guide__h3">4.5 동작 (기획 관점)</h3>
      <div class="style-guide__form-behaviors">
        <div v-for="b in formBehaviors" :key="b.title" class="style-guide__behavior-card">
          <p class="style-guide__behavior-title">{{ b.title }}</p>
          <p class="style-guide__behavior-body">{{ b.body }}</p>
        </div>
      </div>

      <h3 class="style-guide__h3">4.6 상태·피드백</h3>
      <table class="style-guide__table">
        <thead>
          <tr>
            <th>상태</th>
            <th>가이드</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in formStates" :key="row.state">
            <td><strong>{{ row.state }}</strong></td>
            <td>{{ row.spec }}</td>
          </tr>
        </tbody>
      </table>

      <h3 class="style-guide__h3">4.7 라이브 미리보기</h3>
      <p class="guide-lead">아래는 실제 컴포넌트·간격이 적용된 예시다. 수치는 위 표와 같다.</p>
      <div class="style-guide__form-demo">
        <div class="style-guide__search-row">
          <Select mode="search" />
          <Input />
        </div>
      </div>

      <h3 class="style-guide__h3">4.8 게시판 툴바 (운영과 동일 레이아웃)</h3>
      <div class="sub-notice-page style-guide__form-prod">
        <div class="sub-notice-page__toolbar" role="group" aria-label="게시판 검색 예시">
          <p class="sub-notice-page__count">총 128건</p>
          <div class="sub-notice-page__search">
            <Select mode="search" />
            <Input placeholder="검색어를 입력하세요." />
          </div>
        </div>
        <p class="sub-notice-page__search-help">한 줄 도움말 예시 · 공지·자료·입찰 목록 상단과 동일한 톤</p>
      </div>

      <h3 class="style-guide__h3">4.9 변형 예시</h3>
      <div class="style-guide__form-states">
        <div class="style-guide__state-block">
          <p class="style-guide__state-label">기본</p>
          <div class="style-guide__search-row">
            <Select mode="search" />
            <Input />
          </div>
        </div>
        <div class="style-guide__state-block">
          <p class="style-guide__state-label">비활성 입력</p>
          <div class="style-guide__search-row">
            <el-input disabled class="style-guide__el-grow" placeholder="입력 비활성 예시" />
          </div>
        </div>
        <div class="style-guide__state-block">
          <p class="style-guide__state-label">다크 배경 위 셀렉트(푸터 패밀리 사이트)</p>
          <div class="style-guide__footer-demo">
            <Select mode="familySite" />
          </div>
        </div>
      </div>
      <p class="guide-lead">푸터에서는 패밀리 사이트 드롭다운 최대 너비를 <strong>180px</strong> 정도로 두는 것을 권장한다.</p>

      <h3 class="style-guide__h3">4.10 기타 모서리 (참고)</h3>
      <table class="style-guide__table">
        <thead>
          <tr>
            <th>용도</th>
            <th>모서리 반경</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in radiusTokens" :key="r.name">
            <td>{{ r.name }}</td>
            <td>{{ r.val }}</td>
          </tr>
        </tbody>
      </table>
      <p class="guide-lead">검색 필드 모서리는 <strong>10px</strong>로 고정한다.</p>
    </div>

    <div class="cnt">
      <h2>05. Iconography · 기타</h2>
      <ul class="style-guide__list">
        <li>아이콘·로고 에셋과 화면에서의 크기 규칙은 <strong>Icons</strong> 탭에서 스크롤 확인한다.</li>
        <li>UI 아이콘을 새로 그릴 때는 <strong>24×24</strong> 기준 그리드를 권장한다.</li>
        <li>키보드 포커스: 링 색 <strong>#1d4ed8</strong>, 두께 2px, 바깥 여백 3px 느낌을 유지한다.</li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.style-guide__hero .guide-lead {
  margin-bottom: 8px;
}

.style-guide__meta {
  margin: 0;
  font-size: 13px;
  color: $txt-sub;
  line-height: 1.5;
}

.style-guide__h3 {
  margin: 20px 0 10px;
  font-size: 15px;
  font-weight: 600;
  color: $gray-700;
}

.style-guide__table {
  width: 100%;
  max-width: 900px;
  border-collapse: collapse;
  font-size: 14px;

  th,
  td {
    border: 1px solid $gray-200;
    padding: 8px 12px;
    text-align: left;
    vertical-align: top;
  }

  th {
    background: $gray-100;
    color: $gray-700;
  }
}

.style-guide__mono {
  font-family: ui-monospace, monospace;
  font-size: 13px;
  color: $gray-700;
}

.guide-lead {
  margin: 0 0 12px;
  font-size: 14px;
  color: $txt-sub;
  line-height: 1.5;
}

.style-guide__samples {
  padding: 20px;
  border-radius: 12px;
  border: 1px solid $border-main;
  background: $gray-000;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.style-guide__sample {
  margin: 0;
}

.style-guide__sample--section-title {
  font-weight: 700;
  color: $txt-main;
  letter-spacing: -0.02em;
  @include clamp(font-size, 28px, 44px);
  @include clamp(line-height, 34px, 52px);
}

.style-guide__sample--section-lead {
  color: $txt-sub;
  @include clamp(font-size, 15px, 19px);
  @include clamp(line-height, 22px, 30px);
}

.style-guide__sample--eyebrow {
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: $point-main;
  @include clamp(font-size, 12px, 16px);
}

.style-guide__sample--body {
  font-size: 16px;
  line-height: 1.5;
  color: $txt-main;
}

.style-guide__semantic-mini {
  list-style: none;
  margin: 0 0 16px;
  padding: 0;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.style-guide__semantic-mini li {
  display: grid;
  grid-template-columns: 28px 1fr 1fr;
  gap: 12px;
  align-items: center;
  font-size: 14px;
  color: $gray-700;
}

.style-guide__semantic-role {
  font-weight: 600;
  color: $gray-800;
}

.style-guide__semantic-val {
  color: $txt-sub;
  font-size: 13px;
}

.style-guide__swatch {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  border: 1px solid $border-main;
}

.style-guide__palette-row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.style-guide__palette-group {
  min-width: 200px;
}

.style-guide__palette-title {
  margin: 0 0 8px;
  font-size: 13px;
  font-weight: 600;
  color: $gray-700;
}

.style-guide__swatches {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.style-guide__swatch-lg {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid $border-main;
}

.style-guide__form-demo {
  max-width: 640px;
}

.style-guide__search-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: $bg-submenu;
  border: 1px solid $gray-200;

  :deep(.el-select) {
    width: 120px;
  }

  :deep(.el-input) {
    width: min(360px, 100%);
    min-width: 0;
  }

  :deep(.el-input__wrapper),
  :deep(.el-select__wrapper) {
    border-radius: 10px;
    box-shadow: none;
    border: 1px solid rgba(29, 78, 216, 0.16);
    background: #fff;
  }
}

.style-guide__list {
  margin: 0;
  padding-left: 1.2em;
  max-width: 720px;
  font-size: 14px;
  line-height: 1.6;
  color: $txt-sub;

  li + li {
    margin-top: 8px;
  }

  strong {
    color: $gray-700;
  }
}

.style-guide__callout {
  margin: 0 0 16px;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid rgba(29, 78, 216, 0.22);
  background: rgba(230, 240, 255, 0.55);
  font-size: 14px;
  line-height: 1.55;
  color: $gray-700;
}

.style-guide__checklist {
  margin: 0 0 16px;
  padding-left: 1.25em;
  max-width: 820px;
  font-size: 14px;
  line-height: 1.65;
  color: $txt-sub;

  li + li {
    margin-top: 8px;
  }
}

.style-guide__table--wide {
  max-width: 960px;
}

.style-guide__h4 {
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 600;
  color: $gray-700;
}

.style-guide__dim-block + .style-guide__dim-block {
  margin-top: 22px;
}

.style-guide__dim-lead {
  margin-top: 0;
}

.style-guide__table--dims {
  max-width: 1100px;
  font-size: 13px;

  th,
  td {
    vertical-align: top;
  }

  th:first-child,
  td:first-child {
    min-width: 9em;
    font-weight: 600;
    color: $gray-800;
  }
}

.style-guide__form-prod {
  max-width: 720px;
  margin-bottom: 8px;
}

.style-guide__form-behaviors {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 720px;
  margin-bottom: 8px;
}

.style-guide__behavior-card {
  padding: 14px 16px;
  border-radius: 10px;
  border: 1px solid $gray-200;
  background: $gray-000;
}

.style-guide__behavior-title {
  margin: 0 0 6px;
  font-size: 14px;
  font-weight: 600;
  color: $gray-800;
}

.style-guide__behavior-body {
  margin: 0;
  font-size: 14px;
  line-height: 1.55;
  color: $txt-sub;
}

.style-guide__form-states {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 720px;
}

.style-guide__state-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.style-guide__state-label {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: $gray-700;
}

.style-guide__footer-demo {
  padding: 16px;
  border-radius: 10px;
  background: linear-gradient(180deg, #0f1b33 0%, #0c162b 100%);
  max-width: 280px;

  :deep(.el-select) {
    width: 100%;
    max-width: 180px;
  }
}

.style-guide__el-grow {
  width: 100%;
  max-width: 360px;
}

@media print {
  .style-guide .cnt {
    break-inside: avoid;
  }
}
</style>

<style lang="scss">
@use '@/assets/scss/views/sub-notice-page';
</style>
