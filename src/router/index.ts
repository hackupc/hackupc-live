import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/talks',
    name: 'talks',
    component: () => import('@/views/Talks.vue'),
  },
  {
    path: '/challenges',
    name: 'challenges',
    component: () => import('@/views/Challenges.vue'),
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: () => import('@/views/Schedule.vue'),
  },
  {
    path: '/map/:mapId?',
    name: 'map',
    component: () => import('@/views/Map.vue'),
  },
  {
    path: '/mission',
    name: 'mission',
    component: () => import('@/views/Mission.vue'),
  },
  {
    path: '/activities',
    name: 'activities',
    component: () => import('@/views/Activities.vue'),
  },
  {
    path: '/live',
    name: 'live',
    component: () => import('@/components/LiveView.vue'),
  },
  {
    path: '/fullscreen',
    name: 'fullScreen',
    component: () => import('@/views/FullScreen.vue'),
  },
  {
    path: '/rules',
    name: 'rules',
    component: () => import('@/views/Rules.vue'),
  },
  {
    path: '/challenges',
    name: 'challenges',
    component: () => import('@/views/Challenges.vue'),
  },
  {
    path: '/faq',
    name: 'faqs',
    component: () => import('@/views/FAQs.vue'),
  },
  {
    path: '/hardware',
    name: 'hardware',
    component: () => import('@/views/Hardware.vue'),
  },
  {
    path: '/meals',
    name: 'meals',
    component: () => import('@/views/Meals.vue'),
  },
  {
    path: '/travel',
    name: 'travel',
    component: () => import('@/views/Travel.vue'),
  },
  {
    path: '/mentors',
    name: 'mentors',
    component: () => import('@/views/Mentors.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
