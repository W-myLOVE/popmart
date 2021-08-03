import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/Home/home'
import about from '@/views/About/About'
import news from '@/views/News/news'

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
  },
  {
    path: '/news',
    name:'news',
    component: news
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
