import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/Home/home'
import about from '@/views/About/About'
import news from '@/views/News/news'
import map from '@/views/Map/map'
import cooperation from '@/views/Cooperation/cooperation'
import oversea from '@/views/Oversea/oversea'

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
  },
  {
    path: '/map',
    name:'map',
    component: map
  },
  {
    path: '/cooperation',
    name:'cooperation',
    component: cooperation
  },
  {
    path: '/oversea',
    name:'oversea',
    component: oversea
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
