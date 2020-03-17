import Vue from 'vue';
import Vuex from 'vuex';
import food from './modules/food';
import health from './modules/health';
import auth from './modules/auth';
import errors from './modules/errors'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    food,
    health,
    auth,
    errors
  }
})