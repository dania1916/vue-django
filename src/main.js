/*!

=========================================================
* Vue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //add this
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import VueAxios from 'vue-axios'
import axios from 'axios'
import VeeValidate from 'vee-validate' // add this
import VueSuggestion from 'vue-suggestion'
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;

Vue.use(Vuelidate);


Vue.prototype.$http = axios;
const token = localStorage.getItem('token')
if (token) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.use(VueAxios, axios)
Vue.use(VeeValidate); //add this

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(ModalPlugin)
Vue.config.productionTip = false

Vue.use(ArgonDashboard)

new Vue({
    router,
    store, //add this
    render: h => h(App)
}).$mount('#app')

Vue.use(VueSuggestion)