import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import home from '@/views/home'
import TabBar from '@/views/tabBar'

Vue.use(Router)

export default new Router({
  routes: [
    { name: 'login', path: '/login', component: Login },
    { path: '/',
      component: TabBar,
      children: [
        {
          name: 'home', path: '', component: home
        }

      ]

    }

    // 配置登陆组件的路由规则
  ]
})
