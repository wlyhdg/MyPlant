import Vue from 'vue';
import App from './App.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import InitialPage from './components/InitialPage.vue';
import Dashboard from './components/Dashboard.vue';
import store from './store'

import VueRouter from 'vue-router';
import Vuex from 'vuex';
import vuetify from '../src/plugins/vuetify';
import Toasted from 'vue-toasted';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faUserSecret)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Toasted, {iconPack: 'custom-class'});

const routes = [
  { path: '/login', name: 'login', component: Login},
  { path: '/register', name: 'register', component: Register},
  { path: '/', name: 'InitialPage', component: InitialPage},
  { path: '/dashboard', name: 'dashboard', component: Dashboard}
]

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  store,
  router,
  vuetify,
  created() {
    let user = localStorage.getItem('user')
    if(user) {
      // eslint-disable-next-line no-console
      this.$store.commit('setUserData', JSON.parse(user))
    }
  },
  render: h => h(App)
}).$mount('#app')

export default router;