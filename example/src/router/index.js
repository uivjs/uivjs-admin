import { BaseLayout, NotFound, router } from '@uiv-admin/base-layout'
// import Authorized from '../components/Authorized.vue'
// import SLogin from '@uiv-admin/login';

const routes = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  // { path: '/', name: 'Root', component: Authorized },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/pages/about')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/pages/login')
  },
  {
    path: '/',
    component: BaseLayout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/pages/home'),
        name: 'Home',
        meta: { title: 'home', icon: 'home', affix: true }
      }
    ]
  },
]

export default router(routes);
