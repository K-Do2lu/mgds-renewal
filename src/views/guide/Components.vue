<script setup>
import CodeBlockTabs from '@/views/guide/CodeBlockTabs.vue'

/**
 * Form 탭과 동일한 "한 줄" 예시 — 디렉터리만 빠르게 복사할 때 사용.
 */
const quickPanels = [
  {
    label: 'Input',
    language: 'html',
    code: `<Input />`,
  },
  {
    label: 'Select 검색',
    language: 'html',
    code: `<Select mode="search" />`,
  },
  {
    label: 'Select 패밀리',
    language: 'html',
    code: `<Select mode="familySite" />`,
  },
  {
    label: 'TopBtn',
    language: 'html',
    code: '<TopBtn />',
  },
]

const noteScript = `// 위 컴포넌트는 main.js 에서 전역 등록됨.
// 별도 import 없이 템플릿에만 넣으면 됩니다.`

const scriptPanels = [
  {
    label: '전역 등록 안내',
    language: 'javascript',
    code: noteScript,
  },
]
</script>

<template>
  <section class="guide components-guide">
    <div class="cnt">
      <h2>이 탭은 빠른 복사용</h2>
      <p class="lead">
        자세한 설명·데모는 <strong>Form</strong> 탭을 보세요. 아래는 자주 쓰는 마크업만 모았습니다. 블록마다
        <strong>전체 복사</strong>를 누르면 됩니다.
      </p>
      <CodeBlockTabs :panels="quickPanels" />
      <h3 class="sub">스크립트 (한 번만 확인)</h3>
      <CodeBlockTabs :panels="scriptPanels" />
    </div>

    <div class="cnt">
      <h2>맵</h2>
      <ul>
        <li>
          <strong>Input</strong>
          <span class="path">src/components/Input.vue</span>
          <span class="note">— 검색·입력</span>
        </li>
        <li>
          <strong>Select</strong>
          <span class="path">src/components/Select.vue</span>
          <span class="note">— mode=&quot;search&quot; | &quot;familySite&quot;</span>
        </li>
        <li>
          <strong>TopBtn</strong>
          <span class="path">src/components/TopBtn.vue</span>
          <span class="note">— 상단 이동</span>
        </li>
      </ul>
    </div>

    <div class="cnt">
      <h2>그 외 컴포넌트</h2>
      <p class="lead">
        Tab·Table·페이징 등은 <strong>Layout</strong>, 아이콘·뱃지는 <strong>Icons</strong> 탭의 복사 블록을
        사용하세요. 전역 로딩 오버레이는 <strong>Loading</strong> 탭
        (<span class="path">src/components/AppLoadingOverlay.vue</span>)을 참고하세요.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.components-guide {
  .lead {
    margin: 0 0 16px;
    font-size: 14px;
    color: $txt-sub;
    line-height: 1.5;

    code {
      font-size: 13px;
    }
  }

  .sub {
    margin: 20px 0 10px;
    font-size: 15px;
    font-weight: 600;
    color: $gray-700;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 10px;
    max-width: 720px;
  }

  li {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: baseline;
    font-size: 14px;
    color: $gray-700;
  }

  .path {
    font-family: ui-monospace, monospace;
    font-size: 13px;
    color: $gray-600;
  }

  .note {
    color: $txt-sub;
  }
}
</style>
