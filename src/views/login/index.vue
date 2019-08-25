<template>
  <div id="app">
    <div>
      <van-nav-bar title="登陆" />
      <van-cell-group>
        <van-field
          v-model="user.mobile"
          required
          clearable
          label="手机"
          placeholder="请输入手机号"
          v-validate="'required'"
          name="mobile"
          :error-message="errors.first('mobile')"
        />
        <!-- 下载并引入第三方 VeeValidate 进行表单验证 并在入口文件main.js中引入并注册-->
        <van-field
          v-model="user.code"
          label="验证码"
          type="password"
          placeholder="请您输入验证码"
          required
          v-validate="'required'"
          name="code"
          center
          :error-message="errors.first('code')"
        >
          <van-button slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
      </van-cell-group>
      <div class="btn">
        <van-button type="info" :loading="isLoginLoding" style="width:100%" @click="onLogin">登陆</van-button>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from 'axios';
// import request from '@/utils/request';
import { login } from '@/api/user'
import { mapMutations } from 'vuex'
// 封装了一个请求模块 并设置了基本路径
// 通过const request=axios.creat（{}）创建出的一个实例
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '13716124663',
        code: '246810'
      },
      isLoginLoding: false
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    //   在输入验证码或者是手机号的时候如果出现错误则程序无法继续向下进行 则是通过在按下的登录按钮发送请求时，
    // 通过try{} catch{} 这个方法来对代码进行包裹 如果正常则进入try中进行页面的跳转，如果是失败 则进入catch 将错误捕获斌给与用户提示
    async onLogin () {
      try {
        // requset 模块的 封装后发送请求
        // eslint-disable-next-line no-unused-vars
        // const { data } = await request({
        //   method: 'POST',
        //   url: '/app/v1_0/authorizations',
        //   data: this.user
        // })
        this.isLoginLoding = true
        // 封装用户相关接口后发送请求
        // eslint-disable-next-line no-unused-vars
        const { data } = await login(this.user)

        this.isLoginLoding = false
        // 登录成功之后将用户的登录状态（token）存储到本地存储中
        this.setUser(data.data)
        //  手机号及验证码输入成功之后 则跳转到首页
        this.$router.push({ name: 'home' })
      } catch (err) {
        // console.dir(err)
        if (err.response && err.response.status === 400) {
          this.$toast.fail('手机号或者验证码错误')
        }
      }
    }
  }
}
</script>
<style lang='less' scoped>
.van-nav-bar {
  background: blue;
}
.van-nav-bar__title {
  color: white;
}
.btn {
  padding: 20px;
}
</style>
