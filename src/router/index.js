import Vue from 'vue';
import Router from 'vue-router';

import Home from '../pages/home_page/home.vue';
import Testing from '../pages/testing_page/testing.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: Home,
    },
    {
      path: '/testing',
      name: 'TestingPage',
      component: Testing,
    },
  ],
  // mode: "history" // Add this mode in prod env
});

export default router;
