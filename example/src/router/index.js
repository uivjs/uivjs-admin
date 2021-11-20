import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout, { NotFound, router } from '@speedaf-vui/base-layout'
import Authorized from '../components/Authorized.vue'

console.log('router:', router)

const routes = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/', name: 'Root', component: Authorized },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/about/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../pages/login/index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: BaseLayout
  }
]

export default router(routes);
