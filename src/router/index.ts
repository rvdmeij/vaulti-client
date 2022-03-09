import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Main from '../views/Main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/res/dashboard',
    name: 'Dashboard',
  },
  {
    name: 'Login',
    path: '/res/login',
    component: () => import('@/views/Login.vue')
  },
  {
    name: 'Register',
    path: '/res/register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/res/',
    component: Main,
    children: [
      {
        path: '',
        redirect: '/res/dashboard'
      },
      {
        path: 'dashboard',
        component: () => import('@/views/Dashboard.vue')
      },
      {
        path: 'vault',
        component: () => import('@/views/Vault.vue')
      },
      {
        path: 'settings',
        component: () => import('@/views/Settings.vue')
      },
      {
        path: 'logout',
        component: () => import('@/views/Logout.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
