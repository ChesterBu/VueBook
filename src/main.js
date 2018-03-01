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
  error: 'http://img1.imgtn.bdimg.com/it/u=3779605030,1222595953&fm=27&gp=0.jpg',
  loading: 'http://img.lanrentuku.com/img/allimg/1212/5-121204193R0-50.gif',
  attempt: 1
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
