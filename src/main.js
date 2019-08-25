import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import VeeValidate, { Validator } from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN'
//  上述代码是加载验证插件中的语言包

Vue.use(Vant)
Vue.use(VeeValidate)
// 在验证插件 的注册于引用时 一定要注意书写顺序 语言包要放到验证插件之下 厚泽是不生效的
Validator.localize('zh_CN', zhCN)
// 下载并引入第三方VeeValidate 进行表单校验并在入口文件中进行引入并注册
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
