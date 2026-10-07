import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/homeView.vue'
import TryPage from '../views/tryPage.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/login',
      component: LoginView,
    },
    {
      path: '/register',
      component: RegisterView,
    },
    {
      path: '/try',
      component: TryPage,
    },
  ],
})

export default router
