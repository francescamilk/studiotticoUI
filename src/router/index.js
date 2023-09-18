import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import GlassesIndexView from '@/views/GlassesIndexView'


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/glasses',
        name: 'glasses#index',
        component: GlassesIndexView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
