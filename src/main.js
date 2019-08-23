import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import VeeValidate from 'vee-validate'

Vue.use(Vant)
Vue.use(VeeValidate)
// 下载并引入第三方VeeValidate 进行表单校验并在入口文件中进行引入并注册
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
