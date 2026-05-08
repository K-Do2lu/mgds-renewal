<script setup>
import { ref, watch, onMounted } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

const props = defineProps({
  /** 원본 코드 문자열 (< > 그대로 넣으면 됨) */
  code: {
    type: String,
    required: true,
  },
  /**
   * 표시/클래스용 언어 이름. highlight.js 내부 id와 다를 수 있어 resolveLanguage에서 매핑함.
   * 예: html, css, javascript, scss, vue
   */
  language: {
    type: String,
    default: 'html',
  },
})

const codeEl = ref(null)
const copied = ref(false)
let copyTimer = null

async function copyCode() {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    if (copyTimer) window.clearTimeout(copyTimer)
    copyTimer = window.setTimeout(() => {
      copied.value = false
      copyTimer = null
    }, 2000)
  } catch {
    copied.value = false
  }
}

/** props.language → highlight.js 등록 언어 id */
function resolveHljsLanguage() {
  const map = {
    html: 'xml',
    vue: 'xml',
    plaintext: 'plaintext',
    text: 'plaintext',
  }
  return map[props.language] ?? props.language
}

function applyHighlight() {
  const el = codeEl.value
  if (!el) return

  const lang = resolveHljsLanguage()
  if (!hljs.getLanguage(lang)) {
    el.textContent = props.code
    el.className = 'hljs'
    return
  }

  try {
    const { value } = hljs.highlight(props.code, { language: lang })
    el.innerHTML = value
    el.className = `hljs language-${props.language}`
  } catch {
    el.textContent = props.code
    el.className = 'hljs'
  }
}

onMounted(applyHighlight)
watch(() => [props.code, props.language], applyHighlight)
</script>

<template>
  <div class="code-block-root">
    <div class="code-block__toolbar">
      <button type="button" class="code-block__copy" @click="copyCode">
        {{ copied ? '복사됨' : '전체 복사' }}
      </button>
    </div>
    <pre class="code-block"><code ref="codeEl" /></pre>
  </div>
</template>

<style scoped>
.code-block-root {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.code-block__toolbar {
  display: flex;
  justify-content: flex-end;
  padding: 6px 8px;
  background: #1e1e1e;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.code-block__copy {
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
  color: #e2e8f0;
  cursor: pointer;
}

.code-block__copy:hover {
  background: rgba(255, 255, 255, 0.14);
}

.code-block {
  margin: 0;
  padding: 1rem;
  overflow: auto;
}
</style>
