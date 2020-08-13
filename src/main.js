import Vue from 'vue';
import App from './app/main/App.vue';
import router from './router';
import i18n from './i18n/index';
import Store from './store/index';

const store = Store();

new Vue({
  el: '#app',
  store,
  i18n,
  router,
  render: (h) => h(App),
});
