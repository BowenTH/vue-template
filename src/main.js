// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import {routerMode} from './config/env'
import axios from 'axios'
import mockServer from './service/mock' //mock数据
import axiosConfig from './config/axios-set' //axios拦截器
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = true

Vue.prototype.$http = axios
axiosConfig()
mockServer.init()

Vue.use(VueRouter)
const router = new VueRouter({
  
	routes,
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production'
})

Vue.use(ElementUI)
console.log(ElementUI)
//TODO hello
/* eslint-disable no-new */
new Vue({
  router,
  store,
  mounted:()=>{ console.log('hello mounted')}
}).$mount('#app')
