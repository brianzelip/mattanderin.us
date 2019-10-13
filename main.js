import Vue from 'vue';
import VueRouter from 'vue-router'

import router from './router.js';

import App from './components/App.vue';

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
