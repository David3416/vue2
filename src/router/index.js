import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/homeView.vue'
import TryPage from '../views/tryPage.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import AdminView from '@/views/AdminView.vue'

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
      path: '/admin',
      component: AdminView,
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

router.beforeEach((to) => {
  if (to.path !== '/admin') {
    return true
  }

  const savedUser = localStorage.getItem('user')

  if (!savedUser) {
    return '/login'
  }

  const user = JSON.parse(savedUser)

  if (user.role !== 'admin') {
    return '/'
  }

  return true
})

export default router
