<script setup>
import BedgeList from '@/components/BedgeList.vue'
import BedgeTraffic from '@/components/BedgeTraffic.vue'
import CodeBlockTabs from '@/views/guide/CodeBlockTabs.vue'
import { guideIconSections } from '@/config/guideIcons.data.js'

const iconsCopyPanels = [
  {
    label: '기획·디자인 전달',
    language: 'plaintext',
    code: `아이콘·로고를 요청하거나 이모티콘 시안을 줄 때 다음을 같이 적어 주세요.

1) 파일명 — 이 페이지에 나온 이름 (예: file.svg, link.svg)
2) 쓰는 화면 — 예: "공지 목록 첨부", "모바일 메뉴"
3) 크기 — 가이드에 적힌 px를 그대로 (개발자가 동일하게 맞춤)

파일이 들어 있는 폴더 (개발자만): src/assets/img/`,
  },
  {
    label: '개발 — import 예',
    language: 'javascript',
    code: `import linkSvg from '@/assets/img/link.svg'
// 템플릿
// <img :src="linkSvg" alt="" width="24" height="24" />`,
  },
]

const bedgeListPanels = [
  {
    label: 'Template',
    language: 'html',
    code: `<BedgeList />`,
  },
  {
    label: 'Script',
    language: 'javascript',
    code: `// no script`,
  },
]

const bedgeTrafficPanels = [
  {
    label: 'Template',
    language: 'html',
    code: `<BedgeTraffic />
<BedgeTraffic :items="busOnlyItems" />`,
  },
  {
    label: 'Script',
    language: 'javascript',
    code: `// items 생략 시 컴포넌트 내 기본 5종(일반·좌석·직행·공항·5호선) 표시
// 오시는 길 등: :items 로 일부만 넘기면 해당 줄만 렌더

const busOnlyItems = [
  { title: '일반버스', number: '601, 605, 654, 661, N26(심야)', bg: '#EEFFE8', border: '#53B332', text: '#53B332' },
  { title: '좌석버스', number: '60, 60-3, 88', bg: '#F8EFFF', border: '#7030A0', text: '#7030A0' },
  { title: '직행', number: '8000', bg: '#FFF1F0', border: '#E61911', text: '#E61911' },
  { title: '공항', number: '6003, 6008', bg: '#F0F9FF', border: '#0068B7', text: '#0068B7' },
]

const subwayOnlyItems = [
  { title: '5호선', number: '마곡역 7번 출구', bg: '#F8EFFF', border: '#7030A0', text: '#7030A0' },
]`,
  },
]

const miscAssetNote = [
  '조직도 org.svg·영상 main_01.mp4 등은 아이콘이 아닌 본문/미디어 에셋입니다.',
  'slide_arrow_right.svg, business_scroll_ico.svg, more_arrow_btn*.svg, business_bg*.svg 등은 현재 라우트에서 미사용일 수 있습니다. 필요 시 디자인 확정 후 연결하거나 정리하세요.',
]
</script>

<template>
  <section class="guide guide-icons">
    <div class="cnt cnt--lead">
      <h2>아이콘 / 로고 규격</h2>
      <p class="guide-icons__lead">
        아래는 실제 컴포넌트·SCSS에 맞춘 <strong>렌더 크기</strong> 미리보기입니다. 파일명 옆 설명을 참고하세요.
        기획·디자인은 「기획·디자인 전달」탭만 복사해 메모/티켓에 넣어도 됩니다.
      </p>
      <CodeBlockTabs :panels="iconsCopyPanels" />
    </div>

    <div v-for="block in guideIconSections" :key="block.title" class="cnt">
      <h2>{{ block.title }}</h2>
      <ul class="guide-icons__grid" role="list">
        <li v-for="(item, idx) in block.items" :key="`${block.title}-${item.file}-${idx}`" class="guide-icons__cell">
          <div class="guide-icons__preview">
            <div
              v-if="item.preview.wrap"
              class="guide-icons__frame"
              :style="item.preview.wrap"
            >
              <img :src="item.src" alt="" class="guide-icons__img" :style="item.preview.img" />
            </div>
            <img
              v-else
              :src="item.src"
              alt=""
              class="guide-icons__img guide-icons__img--plain"
              :style="item.preview.img"
            />
          </div>
          <div class="guide-icons__meta">
            <code class="guide-icons__file">{{ item.file }}</code>
            <p class="guide-icons__note">{{ item.note }}</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="cnt">
      <h2>기타 에셋</h2>
      <ul class="guide-icons__misc">
        <li v-for="(line, i) in miscAssetNote" :key="i">{{ line }}</li>
      </ul>
    </div>

    <div class="cnt">
      <h2>Bedge</h2>
      <div class="itm">
        <BedgeList />
        <BedgeTraffic />
      </div>

      <h3>BedgeList</h3>
      <CodeBlockTabs :panels="bedgeListPanels" />

      <h3>BedgeTraffic</h3>
      <CodeBlockTabs :panels="bedgeTrafficPanels" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.guide-icons__lead {
  margin: 0;
  font-size: 14px;
  color: $txt-sub;
  line-height: 1.55;
}

.cnt--lead {
  padding-bottom: 0;
}

.guide-icons__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px 24px;
}

.guide-icons__cell {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
}

.guide-icons__preview {
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px;
  border-radius: 12px;
  border: 1px dashed $gray-200;
  background: $gray-000;
}

.guide-icons__frame {
  box-sizing: border-box;
}

.guide-icons__img {
  display: block;
  vertical-align: middle;
}

.guide-icons__img--plain {
  max-width: 100%;
}

.guide-icons__meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.guide-icons__file {
  font-size: 12px;
  word-break: break-all;
  color: $gray-700;
}

.guide-icons__note {
  margin: 0;
  font-size: 12px;
  line-height: 1.45;
  color: $txt-sub;
}

.guide-icons__misc {
  margin: 0;
  padding-left: 1.2em;
  font-size: 13px;
  line-height: 1.6;
  color: $txt-sub;
  max-width: 56rem;

  li + li {
    margin-top: 8px;
  }
}
</style>
