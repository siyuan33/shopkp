import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from "./utils/network.js"
import mainApi from '@/utils/api.js';

Vue.use(http)
Vue.prototype.$mainApi = mainApi //api 接口

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
