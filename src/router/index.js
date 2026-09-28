import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../views/LoginPage.vue'
import HomeView from '../views/homeView.vue'
import TryPage from '../views/tryPage.vue'

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
    {
      path: '/try',
      component: TryPage,
    },
  ],
})

export default router
