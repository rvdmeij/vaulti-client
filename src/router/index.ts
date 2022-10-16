import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MainView from '../views/MainView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/res/dashboard',
    name: 'Dashboard',
  },
  {
    name: 'Login',
    path: '/res/login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    name: 'Register',
    path: '/res/register',
    component: () => import('@/views/RegisterView.vue')
  },
  {
    path: '/res/',
    component: MainView,
    children: [
      {
        path: '',
        redirect: '/res/dashboard'
      },
      {
        path: 'dashboard',
        component: () => import('@/views/DashboardView.vue')
      },
      {
        path: 'vault',
        component: () => import('@/views/VaultView.vue')
      },
      {
        path: 'settings',
        component: () => import('@/views/SettingsView.vue')
      },
      {
        path: 'logout',
        component: () => import('@/views/LogoutView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
