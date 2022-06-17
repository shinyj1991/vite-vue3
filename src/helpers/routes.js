import Home from '@/pages/home.vue';
import Swiper from '@/pages/swiper.vue';

export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/swiper', component: Swiper, meta: { title: 'Swiper' } },
]