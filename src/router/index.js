import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        component: () => import('@/views/common/Index/index.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('@/views/home/index.vue')
            },
            {
                path: '/mine',
                component: () => import('@/views/mine/index.vue')
            },
            {
                path: '/list',
                component: () => import('@/views/list/index.vue')
            }
        ]
    }, {
        path: '/about',
        component: () => import('@/views/common/Index/index.vue')
    }]
})

export default router