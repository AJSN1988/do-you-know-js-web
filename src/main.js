import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Store from './store/index';

const store = Store();

new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App),
});
