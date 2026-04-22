import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Login from './Login.vue'
import PainelNoivos from './PainelNoivos.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/painel-noivos',
    component: PainelNoivos
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
