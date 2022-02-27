import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Talks from '@/views/Talks.vue'
import Challenges from '@/views/Challenges.vue'
import Schedule from '@/views/Schedule.vue'
import Activities from '@/views/Activities.vue'
import Live from '@/views/Live.vue'
import Rules from '@/views/Rules.vue'
import FullScreen from '@/views/FullScreen.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/talks',
    name: 'Talks',
    component: Talks,
  },
  {
    path: '/challenges',
    name: 'challenges',
    component: Challenges,
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule,
  },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities,
  },
  {
    path: '/live',
    name: 'Live',
    component: Live,
  },
  {
    path: '/fullscreen',
    name: 'FullScreen',
    component: FullScreen,
  },
  {
    path: '/rules',
    name: 'Rules',
    component: Rules,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
