<script setup>
import { ref } from 'vue'
import CodeBlockTabs from '@/views/guide/CodeBlockTabs.vue'
import { beginManualLoading, endManualLoading } from '@/composables/useAppLoading'

const demoBusy = ref(false)

function previewLoading() {
  if (demoBusy.value) return
  demoBusy.value = true
  beginManualLoading()
  window.setTimeout(() => {
    endManualLoading()
    demoBusy.value = false
  }, 2000)
}

const overviewPanels = [
  {
    label: '요약',
    language: 'plaintext',
    code: `1) 첫 진입 — index.html 안 #app 부트 UI → router.isReady() 후 마운트되면 제거
2) 라우트 — 지연 import 청크가 160ms 넘게 걸리면 전역 오버레이 (짧은 전환은 생략)
3) API 등 — beginManualLoading / endManualLoading 짝으로 같은 오버레이 사용`,
  },
]

const appPanels = [
  {
    label: 'Template',
    language: 'html',
    code: `<AppLoadingOverlay />`,
  },
  {
    label: 'Script',
    language: 'javascript',
    code: `import AppLoadingOverlay from '@/components/AppLoadingOverlay.vue'
// App.vue 루트 템플릿에 한 번만 두면 됩니다.`,
  },
]

const manualPanels = [
  {
    label: 'Script',
    language: 'javascript',
    code: `import { beginManualLoading, endManualLoading } from '@/composables/useAppLoading'

async function save() {
  beginManualLoading()
  try {
    await fetch('/api/...', { method: 'POST', body: ... })
  } finally {
    endManualLoading()
  }
}`,
  },
]

const routerNotePanels = [
  {
    label: '연동 위치',
    language: 'plaintext',
    code: `src/router/router.js
  • beforeEach → notifyRouteLoadingStart
  • afterEach → notifyRouteLoadingEnd (nextTick)
  • onError → notifyRouteLoadingEnd

라우트 component 는 () => import('...') 동적 import로 청크 분리되어 있습니다.`,
  },
]
</script>

<template>
  <section class="guide loading-guide">
    <div class="cnt">
      <h2>로딩 UI</h2>
      <p class="loading-guide__lead">
        전역 오버레이는 <code>AppLoadingOverlay</code> 한 곳에서 그리며, 라우트 청크·수동 작업이 겹쳐도 한
        화면으로 보입니다. 시각은 작은 구슬 3개가 순서대로 통통 튀는 형태이고, 문구는
        <code>aria-label</code>로만 전달합니다. 스타일은
        <code>AppLoadingOverlay.vue</code>에서 조정하면 됩니다.
      </p>
      <CodeBlockTabs :panels="overviewPanels" />
    </div>

    <div class="cnt">
      <h2>미리보기</h2>
      <p class="loading-guide__lead">
        아래 버튼은 가이드 안에서만 <strong>수동 로딩</strong>(2초)을 걸어 실제 오버레이를 띄웁니다.
      </p>
      <div class="itm">
        <button
          type="button"
          class="loading-guide__demo-btn"
          :disabled="demoBusy"
          @click="previewLoading"
        >
          {{ demoBusy ? '로딩 중…' : '2초간 로딩 보기' }}
        </button>
      </div>
    </div>

    <div class="cnt">
      <h2>앱 루트</h2>
      <CodeBlockTabs :panels="appPanels" />
    </div>

    <div class="cnt">
      <h2>API·비동기 작업</h2>
      <CodeBlockTabs :panels="manualPanels" />
    </div>

    <div class="cnt">
      <h2>라우터</h2>
      <CodeBlockTabs :panels="routerNotePanels" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.loading-guide__lead {
  margin: 0 0 16px;
  font-size: 14px;
  color: $txt-sub;
  line-height: 1.55;

  code {
    font-size: 13px;
    word-break: break-all;
  }
}

.loading-guide__demo-btn {
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  letter-spacing: -0.02em;
  background: $point-main;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: opacity 0.15s ease, transform 0.15s ease;

  &:hover:not(:disabled) {
    opacity: 0.92;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: $focus-ring-width solid $point-main;
    outline-offset: $focus-ring-offset;
  }
}
</style>
