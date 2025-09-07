import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleView from '@/views/ArticleView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    { path: '/articles/:slug',
      component: ArticleView 
    },

    /*{
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },*/
  ],
})

export default router
