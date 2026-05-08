<script setup>
import { computed } from 'vue'
import CodeBlockTabs from '@/views/guide/CodeBlockTabs.vue'
import { breakpointDocs, paletteGroups, semanticColors } from '@/config/designTokens'

/** 피그마·문서용: HEX ↔ 변수명 한 번에 복사 */
const designerPaletteList = computed(() => {
  const lines = [
    '# MGDS 색상 — 피그마/시안에 붙여넣기 (탭 앞: HEX, 뒤: 개발자가 쓰는 토큰명)',
    '',
  ]
  for (const g of paletteGroups) {
    lines.push(`— ${g.title} —`)
    for (const it of g.items) {
      lines.push(`${it.value}\t${it.token}`)
    }
    lines.push('')
  }
  lines.push('— 시맨틱 (텍스트/배경 등) —')
  for (const s of semanticColors) {
    const hexOrRef = s.value.startsWith('$') ? `(참조 ${s.value})` : s.value
    lines.push(`${hexOrRef}\t${s.token}\t(${s.note})`)
  }
  return lines.join('\n')
})

const scssUsageSample = `@use '@/assets/scss/abstract' as *;

.my-block {
  color: $txt-main;
  background: $bg-main;
  border: 1px solid $border-main;
}

@include bp(tab) {
  .my-block {
    padding: 16px;
  }
}`

const breakpointSnippet = computed(() =>
  [
    '// _breakpoints.scss — 화면 "이하" 구간 (max-width)',
    '',
    ...breakpointDocs.map(
      (bp) => `// ${bp.width} 이하 — ${bp.meaning}\n@include ${bp.mixin} {\n  /* 예: 모바일 전용 스타일 */\n}`,
    ),
  ].join('\n\n'),
)

const colorCopyPanels = computed(() => [
  { label: '디자인용 목록', code: designerPaletteList.value, language: 'plaintext' },
  { label: 'SCSS 예시', code: scssUsageSample, language: 'scss' },
  { label: '반응형 mixin', code: breakpointSnippet.value, language: 'scss' },
])
</script>

<template>
  <section class="guide">
    <div class="cnt">
      <h2>복사용 코드</h2>
      <p class="guide-lead">
        <strong>디자인</strong>은 「디자인용 목록」에서 HEX·이름을 통째로 복사하고,
        <strong>개발</strong>은 「SCSS 예시」「반응형 mixin」을 복사하면 됩니다. 각 블록 우측 상단 <strong>전체 복사</strong> 버튼을 사용하세요.
      </p>
      <CodeBlockTabs :panels="colorCopyPanels" />
    </div>

    <div v-for="group in paletteGroups" :key="group.title" class="cnt">
      <h2>{{ group.title }}</h2>
      <div class="itm">
        <div class="color">
          <div class="color-palette">
            <div
              v-for="swatch in group.items"
              :key="swatch.token"
              class="color-item"
              :style="{ background: swatch.value }"
            />
          </div>
          <div class="color-name">
            <div v-for="swatch in group.items" :key="swatch.token" class="color-name__row">
              <span class="color-name__token">{{ swatch.token }}</span>
              <span class="color-name__hex">{{ swatch.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="cnt">
      <h2>Semantic</h2>
      <p class="guide-lead">
        의미 토큰은 주로 다른 팔레트 변수를 참조합니다. SCSS:
        <code>_variables.scss</code>
      </p>
      <ul class="semantic-list">
        <li v-for="row in semanticColors" :key="row.token">
          <span
            class="semantic-swatch"
            :style="{
              background:
                row.value.startsWith('$') || row.value.includes('rgba')
                  ? row.value.includes('rgba')
                    ? row.value
                    : 'transparent'
                  : row.value,
            }"
          />
          <span class="semantic-token">{{ row.token }}</span>
          <span class="semantic-val">{{ row.value }}</span>
          <span class="semantic-note">{{ row.note }}</span>
        </li>
      </ul>
    </div>

    <div class="cnt">
      <h2>Breakpoints</h2>
      <p class="guide-lead">
        mixin <code>@include bp(tab) { }</code> 는 <code>max-width</code> 기준입니다.
        헤더 네비는 JS에서 <code>min-width: 921px</code> 일 때 와이드(
        <code>layoutConstants.js</code> 의 <code>NAV_WIDE_MIN_WIDTH_PX</code>
        )입니다.
      </p>
      <table class="bp-table">
        <thead>
          <tr>
            <th>변수</th>
            <th>너비</th>
            <th>mixin</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="bp in breakpointDocs" :key="bp.variable">
            <td><code>{{ bp.variable }}</code></td>
            <td>{{ bp.width }}</td>
            <td><code>@include {{ bp.mixin }}</code></td>
            <td>{{ bp.meaning }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.color {
  .color-palette {
    @include grid(80px, repeat(auto-fit, minmax(80px, 1fr)), null);
  }

  .color-item {
    min-height: 56px;
    border-radius: 8px;
    border: 1px solid $border-main;
  }

  .color-name {
    margin-top: 12px;
    display: grid;
    gap: 6px 16px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    color: $gray-600;
    font-size: 13px;
  }

  .color-name__row {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .color-name__token {
    font-family: ui-monospace, monospace;
    color: $gray-700;
  }
}

.guide-lead {
  margin: 0 0 12px;
  font-size: 14px;
  color: $txt-sub;
  line-height: 1.5;

  code {
    font-size: 13px;
  }
}

.semantic-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;
  max-width: 720px;
}

.semantic-list li {
  display: grid;
  grid-template-columns: 32px 1fr 1fr 1.2fr;
  gap: 12px;
  align-items: center;
  font-size: 13px;
  color: $gray-700;
}

.semantic-swatch {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid $border-main;
}

.semantic-token {
  font-family: ui-monospace, monospace;
}

.semantic-val {
  color: $gray-600;
  font-family: ui-monospace, monospace;
}

.semantic-note {
  color: $txt-sub;
}

.bp-table {
  width: 100%;
  max-width: 900px;
  border-collapse: collapse;
  font-size: 14px;

  th,
  td {
    border: 1px solid $gray-200;
    padding: 8px 12px;
    text-align: left;
  }

  th {
    background: $gray-100;
    color: $gray-700;
  }

  code {
    font-size: 12px;
  }
}
</style>
