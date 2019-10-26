import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/index-page'
        },
        {
            path: '/shopcart',
            component: () => import('@/components/Shopcart')
        },
        {
            path: '/index-page',
            component: () => import('@/components/IndexPage')
        },
        {
            path: '/add-new',
            component: () => import('@/components/AddNew')
        }
    ]
})

export default router