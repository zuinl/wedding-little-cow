import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import PainelNoivos from '@/pages/PainelNoivos.vue'
import { Routes } from '@/types/routes.ts'

const routes = [
  {
    path: Routes.HOME,
    component: Home
  },
  {
    path: Routes.LOGIN,
    component: Login
  },
  {
    path: Routes.PAINEL_NOIVOS,
    component: PainelNoivos
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
