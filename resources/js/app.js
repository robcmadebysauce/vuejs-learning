require('./bootstrap');

import Vue from 'vue';
import Vuetify from 'vuetify';
import store from './store';
import router from './routes';

Vue.use(Vuetify);

import '../css/variables.css';

import App from './components/App.vue';
Vue.component('app', App);

const app = new Vue({
    el: 'app',
    router,
    store,
});
