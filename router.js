import VueRouter from 'vue-router';

import ThePage from './components/ThePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: ThePage,
    props: { component: 'TheHero' }
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
    props: { component: 'TheSlideShowOfLove' }
  },
  {
    path: '/rsvp',
    name: 'rsvp',
    component: ThePage,
    props: { component: 'TheRSVP' }
  },
  {
    path: '/comments',
    name: 'comments',
    component: ThePage,
    props: { component: 'TheComments' }
  }
];

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ? savedPosition : { x: 0, y: 0 };
  }
});

export default router;
