import VueRouter from 'vue-router';

import TheHero from './components/TheHero.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: TheHero
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
