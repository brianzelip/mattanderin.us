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
    props: { component: 'TheOurStory' }
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: ThePage,
    props: { component: 'TheSchedule' }
  },
  {
    path: '/location',
    name: 'location',
    component: ThePage,
    props: { component: 'TheLocation' }
  },
  {
    path: '/party',
    name: 'party',
    component: ThePage,
    props: { component: 'TheWeddingParty' }
  },
  {
    path: '/honeymoon',
    name: 'honeymoon',
    component: ThePage,
    props: { component: 'TheHoneymoonFund' }
  },
  {
    path: '/slideshow',
    name: 'slideshow',
    component: ThePage,
    props: { component: 'TheSlideShow' }
  },
  {
    path: '/rsvp',
    name: 'rsvp',
    component: ThePage,
    props: { component: 'TheRSVP' }
  },
  {
    path: '/rsvp/success',
    name: 'success',
    component: ThePage,
    props: { component: 'TheRSVPSuccess' }
  },
  {
    path: '/rsvp/fail',
    name: 'fail',
    component: ThePage,
    props: { component: 'TheRSVPFail' }
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
