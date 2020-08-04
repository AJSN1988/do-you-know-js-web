import Vue from 'vue';
import Vuex from 'vuex';
import AppState from './app_state/index';

Vue.use(Vuex);

export default function () {
  const Store = new Vuex.Store({
    modules: {
      AppState,
    },
    strict: process.env.DEV,
  });

  return Store;
}
