import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import Talks from '@/views/Talks.vue'
import Challenges from '@/views/Challenges.vue'
import Schedule from '@/views/Schedule.vue'
import Live from '@/views/Live.vue'
import Rules from '@/views/Rules.vue'
import FullScreen from '@/views/FullScreen.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
