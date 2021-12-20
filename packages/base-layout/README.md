@uivjs/admin-base-layout
===

```bash
npm i @uivjs/admin-base-layout
```

## BaseLayout

```js
import { BaseLayout } from '@uivjs/admin-base-layout';

const layout = {
  menus: () => <div>菜单</div>,
  header: () => <div>页脚</div>,
  footer: () => <div>页脚</div>,
}

const Layout = () => (
  <BaseLayout title="Vue Admin" v-slots={layout} />
);
```

组件 `BaseLayout`，你可以进行自定义默认插槽 `slots.default=router-view`。

```jsx
const Layout = () => (
  <BaseLayout {...}>
    <div class="warpper">
      <router-view />
    </div>
  </BaseLayout>
);
```

## NotFound

路由不存在默认页面。

```jsx
import { BaseLayout, NotFound, router } from '@uivjs/admin-base-layout';

const routes = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  // ...
]

export default router(routes);
```

## router

路由定义页面，简化默认配置。

```jsx
import { BaseLayout, NotFound, router } from '@uivjs/admin-base-layout';

const layout = {
  menus: () => <div>Menu</div>,
  header: () => <div>Header</div>,
  footer: () => <div>Footer</div>,
}

const routes = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/pages/login')
  },
  {
    path: '/',
    component: () => (
      <BaseLayout title="Vue Admin" v-slots={layout} />
    ),
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
];
export default router(routes);
```