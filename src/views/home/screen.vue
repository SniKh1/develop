<!-- home -->

<template>
  <div class="screen-container">
    <van-swipe :autoplay="3000" @change="handleChange">
      <van-swipe-item v-for="(image, index) in images" :key="index" class="swipe_box">
        <img class="swipe_item" v-lazy="image" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          <div class="van-swipe__indicators">
            <i class="van-swipe__indicator" v-for="(item,index) in images" :class="{ 'van-swipe__indicator--active': index === mySwipeIndex }"></i>
          </div>
        </div>
      </template>
    </van-swipe>
    <template>
      <div class="swipe_info">
        <span class="swipe_title">蜘蛛侠:平行宇宙</span>
        <span class="swipe_score">8.6</span>
      </div>
    </template>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  props: ["data"],
  data() {
    return {
      images: [
        'http://ypyvideo.shigemedia.com/pic/upload/recommend/09606370-62e0-4c35-b322-0fe6d6b7e065.jpg',
        'http://ypyvideo.shigemedia.com/pic/upload/recommend/ee89e3a1-53d5-4eca-b748-060134366c42.jpg',
        'http://ypyvideo.shigemedia.com/pic/upload/recommend/5ad7762c-0124-4abf-b04c-edf868edd8a3.jpg',
      ],
      mySwipeIndex: 0,
    };
  },

  computed: {},

  mounted() { },

  methods: {
    handleChange(index) {
      console.log(index);
      debugger
      this.mySwipeIndex = index;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/home/screen.scss';
</style>
