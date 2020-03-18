import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Rules from '@/views/Rules.vue';
import FAQ from '@/views/FAQ.vue';
import Challenges from '@/views/Challenges.vue';
import Streaming from '@/views/Streaming.vue';
import Schedule from '@/views/Schedule.vue';
import MapView from '@/views/Map.vue';
import Mentors from '@/views/Mentors.vue';
import Live from '@/views/Live.vue';
import FullScreen from '@/views/FullScreen.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/rules',
    name: 'Rules',
    component: Rules,
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ,
  },
  {
    path: '/challenges',
    name: 'Challenges',
    component: Challenges,
  },
  {
    path: '/streaming',
    name: 'Streaming',
    component: Streaming,
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule,
  },
  {
    path: '/map',
    name: 'Map',
    component: MapView,
  },
  {
    path: '/map/:location',
    name: 'MapLocated',
    component: MapView,
  },
  {
    path: '/mentors',
    name: 'Mentors',
    component: Mentors,
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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
