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

// 새로고침 시 브라우저가 이전 스크롤 위치를 복원하면
// ScrollTrigger/스크롤 기반 UI가 "이미 진행된 상태"로 보일 수 있어 초기 로드에선 복원을 끈다.
try {
  if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
} catch {
  // noop
}

const app = createApp(App)

app.use(router).use(elementPlus)
app.component('Input', Input)
app.component('Select', Select)
app.component('TopBtn', TopBtn)
app.directive('reveal', revealDirective)

// 최초 로드에서 스크롤 위치를 항상 top으로 고정
// (라우터 scrollBehavior는 내비게이션 시점엔 적용되지만, 브라우저의 복원 페인트가 더 빠를 수 있음)
if (typeof window !== 'undefined') {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
}

app.mount('#app')
