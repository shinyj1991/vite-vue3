import { routes } from '@/helpers/routes.js'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  // createWebHistory : URL에 #없음, 새로고침 시 404에러가 뜨지 않기 위해선 서버(nginx, node)에서 별도 작업 필요
  // createWebHashHistory : #있음, 404에러 없음, 서버에서 별도 작업 필요X, github pages에서 유용
  // https://router.vuejs.org/guide/essentials/history-mode.html
  history: createWebHashHistory(import.meta.env.VITE_BASE_ROOT), // root 경로 설정
  routes,
})

router.beforeEach(async (to, from, next) => {
  return next();
});

export default router;