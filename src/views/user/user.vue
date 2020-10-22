<!-- home -->

<template>
  <div class="user-container">
    <div class="user_header">
      <div class="header_top">
        <img class="scan_code_icon" src="../../../static/img/saoma.png" alt="">
        <span>扫一扫</span>
        <img class="set_up_icon" src="../../../static/img/shezhi.png" alt="">
      </div>
      <div class="header_body" v-for="(image, index) in person_img">
        <van-image round width="70" height="70" lazy-load :src="image" />
        <div class="user_info">
          <span class="user_name">juliana<img src="../../../static/img/vip_icon.png" alt=""></span>
          <p>会员到期：<span class="user_vip_date">2020-12-12</span></p>
        </div>
        <div class="exchange_code_box">
          <img src="../../../static/img/duihuanma.png" alt="">
          <span>
            兑换码
          </span>
        </div>
      </div>
      <div class="header_footer" @click="goVip">
        <span>
          <img src="../../../static/img/huiyuan.png" alt="">VIP会员中心
        </span>
        <span>
          <img style="opacity: 0;" src="../../../static/img/huiyuan.png" alt="">会员专属福利
        </span>
      </div>
    </div>
    <div class="user_content">
      <div class="record">
        <span class="layout_title">
          观看记录
          <span class="layout_title_span" @click="goRecord">更多></span>
        </span>
        <div>
          <ul id="list">
            <li class="item" v-for="(image, index) in record_img" :key="index" :class="index ==0 ? 'underl' : ''">
              <img v-lazy="image" @click="goVideo">
              <div class="record_info">
                <div class="record_info_ab">
                  <span class="record_tip">更新至12集</span>
                </div>
                <div class="record_info_bt">
                  <span class="record_name">蜘蛛侠：平行宇宙</span><br />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="collection">
        <span class="layout_title">
          观看记录
          <span class="layout_title_span" @click="goCollection">更多></span>
        </span>
        <div>
          <ul id="list">
            <li class="item" v-for="(image, index) in collection_img" :key="index" :class="index ==0 ? 'underl' : ''">
              <img v-lazy="image" @click="goVideo">
              <div class="collection_info">
                <div class="collection_info_ab">
                  <span class="collection_tip">更新至12集</span>
                </div>
                <div class="collection_info_bt">
                  <span class="collection_name">蜘蛛侠：平行宇宙</span><br />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import Vue from 'vue'
import { Image as VanImage } from 'vant';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
Vue.use(VanImage);
export default {
  data() {
    return {
      person_img: [
        require('../../../static/img/touxiang.png'),
      ],
      record_img: [
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
      ],
      collection_img: [
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
      ],
    }
  },


  mounted() { },
  beforeDestroy() { },

  computed: {
  },
  methods: {
    goRecord() {
      this.$router.push("Record")
    },
    goCollection() {
      this.$router.push("Record")
    },
    goVideo() {
      this.$router.push("Video")
    },
    goVip() {
      this.$router.push("Vip")
    }
  },

  components: {},

}
</script>

<style lang="scss" scoped>
@import '~@/styles/user/user.scss';
</style>
<style lang="scss">
</style>
