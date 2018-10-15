import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/index.vue'

Vue.use(Router)

export const routerMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/error/index.vue')
  },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index.vue')
    },
    {
      path: 'statistics',
      component: () => import('@/views/statistics/index.vue')
    },
    {
      path: 'analysis',
      component: () => import('@/views/analysis/index.vue')
    }]
  },
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to,from,savePosition){ // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
    if(savePosition) {
      return savePosition;
    }else{
      return {x:0,y:0}
    }
  },
  routes: routerMap
})
