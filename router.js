import VueRouter from 'vue-router';

import TheHero from './components/TheHero.vue';
import ThePage from './components/ThePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: TheHero
  },
  {
    path: '/honeymoon',
    name: 'honeymoon',
    component: ThePage,
    props: { page: 'TheHoneyMoon'}
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
