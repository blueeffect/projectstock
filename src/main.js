import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})
new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: h => h(App)
})
