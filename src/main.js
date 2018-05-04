// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import axios from 'axios';
import 'vuetify/dist/vuetify.min.css';

window.token = localStorage.getItem('token');
window.axios = axios;
window.axios.defaults.baseURL = 'http://localhost:8000';
window.axios.defaults.params = { api_token: window.token };
Vue.use(Vuetify);
Vue.config.productionTip = false;

window.Event = new Vue();
// window.token = localStorage.getItem('token');
// window.baseApiUrl = "http://localhost:8000/";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
