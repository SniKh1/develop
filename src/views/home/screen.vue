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
    <div>
      <section class="swiper">
        <swiper :options="swiperOption">
          <swiper-slide class="swp-silde" v-for="(item, index) in swiperList" :key="index" data-id="item.id">
            <img class="swp-img" :src="item.imgUrl" alt="" style="width:100%">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

      </section>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { Image as VanImage } from 'vant';
import '../../../static/lib/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

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
      mySwipeIndex: 0,
      swiperOption: {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 2,
        coverflowEffect: {
          rotate: 0, // 旋转的角度
          stretch: 30, // 拉伸   图片间左右的间距和密集度
          depth: 40, // 深度   切换图片间上下的间距和密集度
          modifier: 3, // 修正值 该值越大前面的效果越明显
          slideShadows: false // 页面阴影效果
        }
      },
      swiperList: [{
        "id": "0001",
        "imgUrl": require('../../../static/img/rot_img1.png'),
      }, {
        "id": "0002",
        "imgUrl": require('../../../static/img/rot_img1.png'),
      }, {
        "id": "0003",
        "imgUrl": require('../../../static/img/rot_img1.png'),
      }, {
        "id": "0004",
        "imgUrl": require('../../../static/img/rot_img1.png'),
      }, {
        "id": "0005",
        "imgUrl": require('../../../static/img/rot_img1.png'),
      }],
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
    swiper,
    swiperSlide
  },
}
</script>

<style lang="scss" scoped>
@import '../../styles/home/screen.scss';
</style>
