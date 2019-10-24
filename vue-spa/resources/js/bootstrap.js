import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import Form from './utils/Form';

window.Vue = Vue;
window.Event = new Vue;
Vue.config.devtools = true;
Vue.use(VueRouter);

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.Form = Form;
