import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    { name: 'login', path: '/login', component: Login }
    // 配置登陆组件的路由规则
  ]
})
