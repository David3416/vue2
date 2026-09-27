import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../views/LoginPage.vue'
import HomeView from '../views/homeView.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: HomeView,
    },

    {
      path: '/login',
      component: LoginPage,
    },
  ],
})

export default router
