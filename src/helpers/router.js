import { routes } from '@/helpers/routes.js'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_ASSET_BASE),
  routes,
})

router.beforeEach(async (to, from, next) => {
  return next();
});

export default router;