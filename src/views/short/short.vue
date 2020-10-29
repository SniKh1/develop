<!-- home -->

<template>
  <div class="short-container">
    <template>
      <div>
        <van-tabs v-model="active" swipeable background="#333" color="#ffc53d" line-width="20px" line-height="4px" :before-change="beforeChange">
          <van-tab v-for="code in item" :title=" code.name" :key="code.id">
            <video_box></video_box>
          </van-tab>
        </van-tabs>
      </div>
    </template>
  </div>
</template>

<script>

import video_box from './short_video'
import Vue from 'vue'
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);



export default {
  data() {
    return {
      active: 0,
      item: [
        {
          id: 1,
          name: '热血'
        },
        {
          id: 2,
          name: '枪战'
        },
        {
          id: 3,
          name: '奇幻'
        },
        {
          id: 4,
          name: '喜剧'
        },
        {
          id: 5,
          name: '惊悚'
        },
        {
          id: 6,
          name: '热血'
        },
        {
          id: 7,
          name: '枪战'
        },
        {
          id: 8,
          name: '奇幻'
        },
        {
          id: 9,
          name: '喜剧'
        },
        {
          id: 10,
          name: '惊悚'
        },
      ]
    }
  },


  mounted() {

  },
  beforeDestroy() {

  },

  computed: {
  },
  methods: {
    beforeChange(index) {

      // 返回 false 表示阻止此次切换
      if (index === 1) {

        return false;
      }

      // 返回 Promise 来执行异步逻辑
      return new Promise((resolve) => {

        // 在 resolve 函数中返回 true 或 false
        resolve(index !== 3);
      });
    },

  },

  components: {
    'video_box': video_box,
  },

}
</script>

<style lang="scss" scoped>
</style>
<style lang="scss">
html {
  .short-container {
    .van-tabs {
      .van-tabs__wrap {
        padding-bottom: 0.2667rem;
        .van-tab {
          .van-tab__text {
            font-size: 0.4267rem;
            color: #999;
          }
        }

        .van-tab--active {
          .van-tab__text {
            font-size: 0.4267rem;
            color: #ffc53d;
          }
        }
        .van-tabs__line {
          border-radius: 0.32rem;
        }
      }
    }
  }
}
</style>
