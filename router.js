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
    props: { page: 'TheHoneyMoon' }
  },
  {
    path: '/wedding-party',
    name: 'wedding party',
    component: ThePage,
    props: { page: 'TheWeddingParty' }
  },
  {
    path: '/location',
    name: 'location',
    component: ThePage,
    props: { page: 'TheLocation' }
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
