import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import Toasted from 'vue-toasted';
import VueScrollTo from 'vue-scrollto';

import router from './router.js';
import App from './components/App.vue';

Vue.use(VueRouter);
Vue.use(VueMeta);
Vue.use(Toasted);
Vue.use(VueScrollTo);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
