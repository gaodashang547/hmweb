// 这里是有关于频道列表的封装的相关模块

import request from '@/utils/request'
export const getUserChannle = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/channels'
  })
}
