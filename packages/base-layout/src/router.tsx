import { createRouter, createWebHistory } from 'vue-router';
import { getToken } from './auth';

type RouterOptions = {
  whiteList?: string[];
}

export const router = (routes = [], options: RouterOptions = {}) => {
  const { whiteList = ['/login', '/auth-redirect'] } = options;
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  });
  
  router.beforeEach(async (to, from, next) => {
    // determine whether the user has logged in
    const hasToken = getToken();
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