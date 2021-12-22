import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import { getToken } from './auth';

type RouterOptions = {
  whiteList?: string[];
  /** Hash Mode */
  hashRoute?: boolean;
}

export const router = (routes = [], options: RouterOptions = {}) => {
  const { whiteList = ['/login', '/auth-redirect'], hashRoute = true } = options;
  const router = createRouter({
    history: hashRoute ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
    routes
  });
  
  router.beforeEach(async (to, from, next) => {
    // determine whether the user has logged in
    const hasToken = getToken() as unknown as string;
    if (hasToken) {
      next();
    } else {
      next();
      /* has no token*/
      // if (whiteList && whiteList.includes(to.path)) {
      //   console.log(to.path)
      //   next();
      // } else {
      //   next(`/login?redirect=${to.path}`);
      // }
    }
  });
  
  router.afterEach(() => {
    // finish progress bar
  });
  return router
}