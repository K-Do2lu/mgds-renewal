import { createApp } from 'vue'
import elementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/scss/style.scss'
import App from './App.vue'
import router from './router/router.js'

createApp(App).use(router).mount('#app')
