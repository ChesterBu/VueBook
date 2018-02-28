import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

// require styles
import 'swiper/dist/css/swiper.css'


Vue.use(VueAwesomeSwiper,)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'assets/logo.png',
  loading: 'assets/loading.gif',
  attempt: 1
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
