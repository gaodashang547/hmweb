<template>
  <div id="app">
    <div>
      <van-nav-bar title="登陆" />
      <van-cell-group>
        <van-field v-model="user.mobile" required clearable label="手机" placeholder="请输入手机号" />

        <van-field v-model="user.code" label="验证码" placeholder="请您输入验证码" required />
      </van-cell-group>
      <div class="btn">
        <van-button type="info" style="width:100%">登陆</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
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
