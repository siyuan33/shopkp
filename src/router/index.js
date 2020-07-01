import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../views/Home.vue"
import classify from "../views/Classify.vue"
import cart from "../views/Cart.vue"
import mine from "../views/Mine.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home ',
    component: home,
  },
  {
    path: '/classify',
    name: 'classify ',
    component: classify,
  },
  {
    path: '/cart',
    name: 'cart ',
    component: cart,
  },
  {
    path: '/mine',
    name: 'mine ',
    component: mine,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
