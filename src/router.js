import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/home',
      component: ()=>import('./views/Home.vue'),
      meta:{keepAlive:true}
    },
    {
      path: '/add',
      component: ()=>import('./views/Add.vue')
    },
    {
      path: '/list',
      component: ()=>import('./views/List.vue')
    },
    {
      path: '/collect',
      component: ()=>import('./views/Collect.vue')
    },
    {
      path: '/detail/:bid',
      component: ()=>import('./views/Detail.vue'),
      name:'detail'
    },
    {
      path:'*',
      redirect:'/home'
    }
  ]
})