import Vue from 'vue'
import Vuex from 'vuex'

// 在'@/utils/user'中封装了一些列关于本地存储的函数
// 在这里进行加载所有成员
import * as user from '@/utils/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 从本地存储中取出数据 要利用JSON.parse 对其进行转换将json字符串的形式转换成json对象的形式
    // user: JSON.parse(window.localStorage.getItem('user'))
    user: user.getUser()
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      //  为了刷新保持数据状态，所以吧数据同时也存放到本地存储、
      // 将数据存储到本地存储中的时候 要对数据利用json.stringify 对数据进行格式的转换从对象的形式转化成
      // json字符串的形式进行存储进去
      window.localStorage.setItem('user', JSON.stringify(state.user))
      // 将数据存储到本地存储中的目的是为了持久化 保持页面刷新是数据的状态 以不至于丢失数据
      // user.saveUser(state.user)
    }
  },
  actions: {

  }
})
// vuex容器中的数据只是为了方便在其他任何地方能够方便获取登录状态数据，但是页面属性还是会丢失数据状态，
// 所以我们还要把数据进行持久化 （将数据存储到本地存储中），以防止页面刷新丢失状态的问题
