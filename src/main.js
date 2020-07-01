import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from "./utils/network.js"
import mainApi from '@/utils/api.js';
import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI); // element ui

Vue.use(http)
Vue.prototype.$mainApi = mainApi //api 接口

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
