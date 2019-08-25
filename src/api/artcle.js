
//  这里是文章相关的请求

import request from '@/utils/request'

export const getArtcle = (data) => {
  return request({
    method: 'GET',
    url: '/app/v1_1/articles',
    params: {
      // 频道ID
      channel_id: data.channel_id,

      timestamp: Date.now(),
      // 时间戳请求新的推荐数据传当前的事件戳，请求历史推荐传
      // 指定的时间戳
      with_top: 1
      // 是否包含置顶，进入页面第一次请求时要包含置顶文件，1-包含置顶 0-不包含

    }
  })
}
// query 查询参数  写在query 中
// body参数 写在data 中
