import VueRouter from 'vue-router';

import ThePage3 from './components/ThePage3.vue';

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: TheHero
  // },
  {
    path: '/',
    name: 'home',
    component: ThePage3,
    props: { component: 'TheHero3' }
  },
  {
    path: '/story',
    name: 'story',
    component: ThePage3,
    props: { component: 'TheOurStory3' }
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: ThePage3,
    props: { component: 'TheSchedule3' }
  },
  {
    path: '/location',
    name: 'location',
    component: ThePage3,
    props: { component: 'TheLocation3' }
  },
  {
    path: '/party',
    name: 'party',
    component: ThePage3,
    props: { component: 'TheWeddingParty3' }
  },
  {
    path: '/honeymoon',
    name: 'honeymoon',
    component: ThePage3,
    props: { component: 'TheHoneymoonFund3' }
  },
  {
    path: '/slideshow',
    name: 'slideshow',
    component: ThePage3,
    props: { component: 'TheSlideShow3' }
  },
  {
    path: '/rsvp',
    name: 'rsvp',
    component: ThePage3,
    props: { component: 'TheRSVP3' }
  },
  {
    path: '/rsvp/success',
    name: 'success',
    component: ThePage3,
    props: { component: 'TheRSVPSuccess' }
  },
  {
    path: '/rsvp/fail',
    name: 'fail',
    component: ThePage3,
    props: { component: 'TheRSVPFail' }
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
