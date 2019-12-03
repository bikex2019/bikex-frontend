import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueResource from 'vue-resource';
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'
import VueCarousel from 'vue-carousel';
import VueSweetalert2 from 'vue-sweetalert2';
 
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
 
Vue.use(VueSweetalert2);
Vue.use(VueCarousel);
Vue.use(Autocomplete)

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource)

const router = new VueRouter({
  routes:Routes,
  mode: "history"
})

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
