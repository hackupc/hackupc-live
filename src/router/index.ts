import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import FAQ from '@/views/FAQ.vue'
import Activities from '@/views/Activities.vue'
import Challenges from '@/views/Challenges.vue'
import Discord from '@/views/Discord.vue'
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
    path: '/faq',
    name: 'FAQ',
    component: FAQ,
  },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities,
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
    path: '/discord',
    name: 'Discord',
    component: Discord,
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
