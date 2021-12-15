import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import localCache from '@/utils/cache';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  },
  // 如果没有找到，那么就进入到这
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/notFound/NotFound.vue')
  }
];
const router = createRouter({
  routes,
  history: createWebHashHistory()
});
router.beforeEach((to) => {
  // console.log(to.path);
  if (to.path !== '/login') {
    const token = localCache.getCache('token');
    if (!token) {
      return '/login';
    }
  }
});
export default router;
