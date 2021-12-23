import { BaseLayout, NotFound, router } from '@uivjs/admin-base-layout';

const layout = {
  menus: () => (
    <div>
      {' '}
      Slots Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu <br />{' '}
      Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu{' '}
      <br /> Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu <br />{' '}
      Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu <br /> Menu{' '}
      <br /> Menu <br /> Menu <br /> Menu
    </div>
  ),
  header: () => <div>Slots Header</div>,
  footer: () => <div>Slots Footer</div>,
};

const routes = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  // { path: '/', name: 'Root', component: Authorized },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/pages/about'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/pages/login'),
  },
  {
    path: '/',
    component: <BaseLayout title="Vue Admin" v-slots={layout} onCollapsed={() => console.log('goood')} />,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/pages/home'),
        name: 'Home',
        meta: { title: 'home', icon: 'home', affix: true },
      },
    ],
  },
];

export default router(routes);
