import VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: TheHero
  },
  {
    path: '/add',
    name: 'add',
    component: TheItemForm
  },
  {
    path: '/edit/:_id',
    name: 'edit',
    component: TheItemForm
  },
  {
    path: '/submit',
    name: 'submit',
    component: TheSubmittedList
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
