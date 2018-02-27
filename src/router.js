import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import Detail from './views/Detail.vue'
import Collect from './views/Collect.vue'
import Add from './views/Add.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/home',
      component: Home
    },
    {
      path: '/add',
      component: Add
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/collect',
      component: Collect
    },
    {
      path: '/detail/:bid',
      component: Detail,
      name:'detail'
    },
    {
      path:'*',
      redirect:'/home'
    }
  ]
})