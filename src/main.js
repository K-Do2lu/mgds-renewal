import { createApp } from 'vue'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/scss/style.scss'
import App from './App.vue'
import router from './router/router.js'
import Input from '@/components/Input.vue'
import Select from '@/components/Select.vue'
import TopBtn from '@/components/TopBtn.vue'

const app = createApp(App)

app.use(router).use(elementPlus)
app.component('Input', Input)
app.component('Select', Select)
app.component('TopBtn', TopBtn)

app.mount('#app')
