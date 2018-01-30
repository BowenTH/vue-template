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
    },
    // 项目
    {
      path: '/main',
      name:'main',
      component: require('@/components/Main/Main').default,
      children:[{
        path:'/main/gruid',
        component:require('@/components/test/Home').default
      },{
        path:'/main/components',
        component:require('@/components/test/Mine').default
      },{
        path:'/main/source',
        component:require('@/components/test/Mine').default
      },
      {
        path:'/main/flex',
        component: require('@/components/type/flex').default
      },{
        path:'/main/font',
        component: require('@/components/type/font').default
      },{
        path:'/main/button',
        component:require('@/components/type/myButton').default
      }
    ]
    }
  ]
})
