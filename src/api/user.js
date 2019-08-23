
import request from '@/utils/request'
export const login = (user) => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: user
  })
}

// 这里是封装了与用户相关接口的模块，以便于后期的维护与管理
// 把函数封装成一个函数在需要发送请求的的时候 进行曲函数的调用即可
