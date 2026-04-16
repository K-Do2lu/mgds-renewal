import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: MainView
    },
]

const router = createrouter({
    history: createWebHistory()
})