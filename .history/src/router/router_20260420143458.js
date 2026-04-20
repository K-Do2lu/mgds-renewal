import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import GuideView from '@/views/GuideView.vue'

const routes = [
    { path: '/', name: 'Main', component: MainView},
    { path: '/guide', name: 'Guide', component: GuideView},
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router