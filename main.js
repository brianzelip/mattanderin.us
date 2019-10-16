import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';

import router from './router.js';
import App from './components/App.vue';

Vue.use(VueRouter);
Vue.use(VueMeta);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
