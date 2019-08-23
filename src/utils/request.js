import axios from 'axios'
import store from '@/store'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})

// Add a request interceptor
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  // 获取当前登录用户相关信息（token）
  // this.$store
  const { user } = store.state

  if (user) {
    config.headers.Authorization = `Bearer ${user.token}` // 注册 Bearer 后面的空格
  }

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
request.interceptors.response.use(function (response) {
  // Do something with response data
  return response

  // 如果响应结果对象中有 data，则直接返回这个 data 数据
  // 如果响应结果对象中没有 data，则不作任何处理，直接原样返回这个数据
  // return response.data.data || response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default request
