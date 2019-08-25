<template>
<div>
    <van-nav-bar title="首页"/>
    <van-tabs v-model="active" sticky>
         <van-tab :title="channel.name" v-for="channel in channels" :key='channel.id'>
         <!-- 这是下拉刷新组件 -->
     <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
       <!-- 列表组件自带上拉加载功能 -->
        <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
             >
              <van-cell
                v-for="article in artcles"
                :key="article.art_id"
                :title="article.title"
              />
         </van-list>
        </van-pull-refresh>

         </van-tab>

   </van-tabs>
</div>

</template>
<script>
import { getUserChannle } from '@/api/channle'
import { getArtcle } from '@/api/artcle'
export default {
  name: 'HomeIndex',
  data () {
    return {
      active: 0,
      artcles: [],
      loading: false,
      finished: false,
      isLoading: false,
      channels: [],
      timestamp: Date.now()
    }
  },
  created () {
    //   在生命周期函数created中 渲染列表
    // eslint-disable-next-line no-unused-expressions
    this.getChannle()
    // this.getArtcle()
  },
  methods: {
    //   这是获取文章列表
    // async getArtcle () {
    //   const { data } = await getArtcle()
    //   console.log(data)
    // },
    //  这是获取频道列表
    async  getChannle () {
      const { data } = await getUserChannle()
      //   console.log(data)
      this.channels = data.data.channels
    },
    //  下拉刷新是触发的onRfresh事件
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 500)
    },
    async  onLoad () {
      // 在onload事件中来获取文章列表
      const { data } = await getArtcle({
        timestamp: this.timestamp,
        channel_id: 0
      })
      this.artcles.push(...data.data.results)
      //  判断如果在请求中没有pre_timestamp 则设置加载结束否则将其保存起来
      // 作为下一次请求的时间戳
      if (!data.data.pre_timestamp) {
        this.finished = true
      } else {
        this.timestamp = data.data.pre_timestamp
      }

      this.loading = false
    }
    // onLoad () {
    // // 上拉加载
    // // 异步更新数据
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1)
    //     }
    //     // 加载状态结束
    //     this.loading = false

    //     // 数据全部加载完成
    //     if (this.list.length >= 40) {
    //       this.finished = true
    //     }
    //   }, 500)
    // }
  }
}
</script>
<style lang="less" scoped>
 .van-nav-bar {
     background: blue !important;
 }
 .van-nav-bar__title {
  color: white;
}
</style>
