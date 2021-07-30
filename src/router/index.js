import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/Home/home'
import about from '@/views/About/About'

const routes = [
  {
    path: '/',
    name:'home',
    component: home
  },
  {
    path: '/about',
    name:'about',
    component: about
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
