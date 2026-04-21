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

/** props.language → highlight.js 등록 언어 id */
function resolveHljsLanguage() {
  const map = {
    html: 'xml',
    vue: 'xml',
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
  <pre class="code-block"><code ref="codeEl" /></pre>
</template>

<style scoped>
.code-block {
  margin: 0;
  padding: 1rem;
  border-radius: 8px;
  overflow: auto;
}
</style>
