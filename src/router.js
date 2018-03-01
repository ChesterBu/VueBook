import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/home',
      component: () =>
        import ('./views/Home.vue'),
      meta: {
        keepAlive: true,
        title: 'home'
      }
    },
    {
      path: '/add',
      component: () =>
        import ('./views/Add.vue'),
      meta: {
        title: 'add'
      }
    },
    {
      path: '/list',
      component: () =>
        import ('./views/List.vue'),
      meta: {
        title: 'list'
      }
    },
    {
      path: '/collect',
      component: () =>
        import ('./views/Collect.vue'),
      meta: {
        title: 'collect'
      },
      name:'Collect'
    },
    {
      path: '/detail/:bid',
      component: () =>
        import ('./views/Detail.vue'),
      name: 'detail',

    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})