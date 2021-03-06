import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/home',
      name: 'home',
      component: require('@/components/test/Home').default
    },{
      path: '/mine',
      name: 'mine',
      component: require('@/components/test/Mine').default
    }
  ]
})
