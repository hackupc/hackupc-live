import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Rules from '../views/Rules.vue';
import FAQ from '../views/FAQ.vue';

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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
