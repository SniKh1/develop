<!-- home -->

<template>
  <div class="screen-container">
    <div class="banner">
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
    <div class="lately">
      <span class="layout_title">
        最近观看
      </span>
      <div>
        <ul id="list">
          <li class="item" v-for="(image, index) in lately_img" :key="index" :class="index ==0 ? 'underl' : ''">
            <img v-lazy="image">
            <div class="lately_info">
              <div class="lately_info_ab">
                <span class="lately_tip">更新至12集</span>
                <span class="lately_score">9.8</span>
              </div>
              <div class="lately_info_bt">
                <span class="lately_name">蜘蛛侠：平行宇宙</span><br />
                <span class="lately_time">已观看
                  <span>23</span>分钟
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="rot">
      <span class="layout_title">
        大家都在追
        <span class="layout_title_span">更多></span>
      </span>
      <carousel-3d :startIndex="0" :inverseScaling="10" :border="0" :perspective="0" :display="5" :animationSpeed="1000" :width="120" :height="160">
        <slide v-for="(item, i) in slides" :index="i" :key="i">
          <template slot-scope="obj">
            <img :src="item.src" alt="">
            <div class="rot_info_ab">
              <span class="rot_tip">28集全</span>
              <span class="rot_score">9.8</span>
            </div>
          </template>
        </slide>
      </carousel-3d>
      <div class="rot_title_name">蜘蛛侠：平行宇宙</div>
    </div>
    <div class="drama">
      <span class="layout_title">
        口碑大剧等你追
        <span class="layout_title_span">更多></span>
      </span>
      <div>
        <ul id="list">
          <li class="item" v-for="(image, index) in drama_img" :key="index" :class="index ==0 ? 'underl' : ''">
            <img v-lazy="image">
            <div class="drama_info">
              <div class="drama_info_ab">
                <span class="drama_tip">29集全</span>
                <span class="drama_score">9.1</span>
              </div>
              <div class="drama_info_bt">
                <span class="drama_name">小丑</span><br />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="tabbar">
      <ul id="list">
        <li class="item" v-for="(image, index) in tabbar_img" :key="index" :class="index ==0 ? 'underl' : ''">
          <img v-lazy="image">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// :oneDirectional="true" 3d空间单向控制 default false

import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { Image as VanImage } from 'vant';
import Carousel3d from 'vue-carousel-3d'

Vue.use(Carousel3d)
Vue.use(VanImage);
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  props: ["data"],
  data() {
    return {
      images: [
        require('../../../static/img/banner_1.png'),
        require('../../../static/img/banner_2.png'),
        require('../../../static/img/banner_3.png'),
      ],
      lately_img: [
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
      ],
      drama_img: [
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
      ],
      tabbar_img: [
        require('../../../static/img/tabbar_img1.png'),
        require('../../../static/img/tabbar_img2.png'),
        require('../../../static/img/tabbar_img3.png'),
      ],
      slides: [
        {
          src: require('../../../static/img/rot_img1.png'),
        },
        {
          src: require('../../../static/img/rot_img1.png'),
        },
        {
          src: require('../../../static/img/rot_img1.png'),
        },
        {
          src: require('../../../static/img/rot_img1.png'),
        },
        {
          src: require('../../../static/img/rot_img1.png'),
        },
        {
          src: require('../../../static/img/rot_img1.png'),
        },
        {
          src: require('../../../static/img/rot_img1.png'),
        },
        {
          src: require('../../../static/img/rot_img1.png'),
        },
        {
          src: require('../../../static/img/rot_img1.png'),
        },
      ],
      mySwipeIndex: 0,


    };
  },
  created() {
  },
  computed: {},

  mounted() {

  },

  methods: {
    handleChange(index) {
      console.log(index);

      this.mySwipeIndex = index;
    }
  },
  components: {
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/home/screen.scss';
</style>
