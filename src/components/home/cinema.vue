
<template>
  <div class="cinema-container">
    <div class="hot">
      <span class="layout_title">
        <img src="../../../static/img/remen.png" alt="">
        热门放映
        <span class="layout_title_span" @click="goMore">更多></span>
      </span>
      <carousel-3d :startIndex="5" :inverseScaling="10" :space="303" :border="0" :perspective="0" :display="5" :animationSpeed="1000" :width="284"
                   :height="167">
        <slide v-for="(item, i) in slides" :index="i" :key="i">
          <template slot-scope=" obj">
            <img :src="item.src" alt="">
            <div class="hot_info_ab">
              <span class="hot_tip">蜘蛛侠：平行宇宙</span>
              <span class="hot_score">2000人 在看
                <img src="../../../static/img/fre_title.gif" alt="">
              </span>
            </div>
          </template>
        </slide>
      </carousel-3d>
    </div>
    <div class="modules">
      <span class="layout_title">
        <img src="../../../static/img/yanzhi.png" alt="">
        颜值第一
        <span class="layout_title_span" @click="goMore">更多></span>
      </span>
      <template>
        <div class="modules_box">
          <ul class="modules_ul">
            <li v-for="(item, i) in slides3">
              <img :src="item.src" alt="" @click="goVideo">
              <div class="modules_info_ab">
                <span class="modules_score">
                  2000
                  <img src="../../../static/img/fre_title.gif" alt="">
                </span>
              </div>
              <div class="modules_info_bottom modules_tip">
                蜘蛛侠：平行宇宙
              </div>
            </li>
          </ul>
        </div>
      </template>
    </div>
    <div class="modules">
      <span class="layout_title">
        <img src="../../../static/img/koubei.png" alt="">
        口碑大剧
        <span class="layout_title_span" @click="goMore">更多></span>
      </span>
      <template>
        <div class="modules_box">
          <ul class="modules_ul">
            <li v-for="(item, i) in slides2">
              <img :src="item.src" alt="" @click="goVideo">
              <div class="modules_info_ab">
                <span class="modules_score">
                  2000
                  <img src="../../../static/img/fre_title.gif" alt="">

                </span>
              </div>
              <div class="modules_info_bottom">
                <span class="modules_tip">蜘蛛侠：平行宇宙</span>
              </div>
            </li>
          </ul>
        </div>
      </template>
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
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Carousel3d)
Vue.use(VanImage);
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  props: ["data"],
  data() {
    return {
      slides: [
        {
          src: require('../../../static/img/banner_3.png'),
        },
        {
          src: require('../../../static/img/banner_3.png'),
        },
        {
          src: require('../../../static/img/banner_3.png'),
        },
        {
          src: require('../../../static/img/banner_3.png'),
        },
        {
          src: require('../../../static/img/banner_3.png'),
        },
        {
          src: require('../../../static/img/banner_3.png'),
        },
      ],
      slides2: [
        {
          src: require('../../../static/img/banner_2.png'),
        },
        {
          src: require('../../../static/img/banner_2.png'),
        },
        {
          src: require('../../../static/img/banner_2.png'),
        },
        {
          src: require('../../../static/img/banner_3.png'),
        },
        {
          src: require('../../../static/img/banner_3.png'),
        },
        {
          src: require('../../../static/img/banner_3.png'),
        },
      ],
      slides3: [
        {
          src: require('../../../static/img/bg_harry.png'),
        },
        {
          src: require('../../../static/img/bg_harry.png'),
        },
        {
          src: require('../../../static/img/bg_harry.png'),
        },
        {
          src: require('../../../static/img/banner_3.png'),
        },
        {
          src: require('../../../static/img/banner_3.png'),
        },
        {
          src: require('../../../static/img/banner_3.png'),
        },
      ],
    };
  },
  created() {
  },
  computed: {},

  mounted() {

  },

  methods: {
    goMore: function() {
      this.$router.push("More")
    },
    goVideo: function() {
      this.$router.push("Video")
    }
  },
  components: {
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/home/cinema.scss';
</style>
<!-- 覆盖子组件样式 -->
<style lang="scss" >
.cinema-container {
  .hot {
    .carousel-3d-container {
      margin: auto;
    }
  }
}
</style>
