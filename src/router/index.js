import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import HomePage from '@/views/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Homepage',
      component: HomePage,
      // children: [
      //   {
      //     path: '/Param',
      //     name: 'Param',
      //     component: () => import('@/components/Param')
      //   }
      // ]
    },
    {
      path: '/DataConfig',
      name: 'DataConfig',
      component: () => import('@/views/DataConfig')
    },
    {
      path: '/ParamConfig',
      name: 'ParamConfig',
      component: () => import('@/views/ParamConfig')
    },
    {
      path: '/MonitorPage',
      name: 'MonitorPage',
      component: () => import('@/views/MonitorPage')
    },
    {
      path: '/QueryPage',
      name: 'QueryPage',
      component: () => import('@/views/QueryPage')
    }

  ]
})
