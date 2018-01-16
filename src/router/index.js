import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/home/home').default
    },{
      path: '/home',
      name: 'home',
      component: require('@/components/home/home').default
    },{
      path: '/mine',
      name: 'mine',
      component: require('@/components/mine/mine').default
    },{
      path: '/address',
      name: 'address',
      component: require('@/components/mine/address').default
    }
  ]
})
