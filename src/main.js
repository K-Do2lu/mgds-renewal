import { createApp } from 'vue'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/scss/style.scss'
import App from './App.vue'
import router from './router/router.js'
import Input from '@/components/Input.vue'
import Select from '@/components/Select.vue'
import TopBtn from '@/components/TopBtn.vue'
import revealDirective from '@/directives/reveal.js'
import { initDocumentTitle } from '@/config/site'

// 새로고침 시 브라우저가 이전 스크롤 위치를 복원하면
// ScrollTrigger/스크롤 기반 UI가 "이미 진행된 상태"로 보일 수 있어 초기 로드에선 복원을 끈다.
try {
  if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
} catch {
  // noop
}

initDocumentTitle()

const app = createApp(App)

app.use(router).use(elementPlus)
app.component('Input', Input)
app.component('Select', Select)
app.component('TopBtn', TopBtn)
app.directive('reveal', revealDirective)

// 최초 로드에서 스크롤 위치를 top으로 고정 (해시 앵커 URL은 라우터 scrollBehavior에 맡김)
if (typeof window !== 'undefined' && !window.location.hash) {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}

// 첫 화면 비동기 라우트 청크가 끝날 때까지 index.html의 부트 UI 유지
router.isReady().finally(() => {
  app.mount('#app')
})
