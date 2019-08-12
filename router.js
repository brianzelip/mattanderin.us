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
    path: '/story',
    name: 'story',
    component: ThePage,
    props: { page: 'TheOurStory' }
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: ThePage,
    props: { page: 'TheSchedule' }
  },
  {
    path: '/location',
    name: 'location',
    component: ThePage,
    props: { page: 'TheLocation' }
  },
  {
    path: '/party',
    name: 'party',
    component: ThePage,
    props: { page: 'TheWeddingParty' }
  },
  {
    path: '/honeymoon',
    name: 'honeymoon',
    component: ThePage,
    props: { page: 'TheHoneymoonFund' }
  },
  {
    path: '/slideshow',
    name: 'slideshow',
    component: ThePage,
    props: { page: 'TheSlideShow' }
  },
  {
    path: '/rsvp',
    name: 'rsvp',
    component: ThePage,
    props: { page: 'TheRSVP' }
  },
  {
    path: '/rsvp/success',
    name: 'success',
    component: ThePage,
    props: { page: 'TheRSVPSuccess' }
  },
  {
    path: '/rsvp/fail',
    name: 'fail',
    component: ThePage,
    props: { page: 'TheRSVPFail' }
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
