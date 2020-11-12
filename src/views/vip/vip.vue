<!-- home -->

<template>
  <div class="vip-container">
    <div>
      <div>
        <template>
          <van-nav-bar title="" left-text="" right-text=" " left-arrow @click-left=" onClickLeft" fixed :border='false' />
        </template>
        <template>
          <div class="vip_box">
            <div class="vip_header" v-for="(image, index) in person_img">
              <van-image round width="70" height="70" lazy-load :src="image" />
              <div class="user_info">
                <span class="user_name">juliana</span>
                <!-- <p>会员到期：<span class="user_vip_date">2020-12-12</span></p> -->
                <p>未开通会员</p>
              </div>
            </div>
            <div class="vip_body">
              <div class="vip_body_top">
                <div class="price_box left">
                  <div class="left_title"><span>新用户专享</span></div>
                  <span class="price_span">9.9￥</span>
                  <span class="price_month">
                    包月
                  </span>
                </div>
                <div class="price_box center">
                  <div class="left_title"><span>折扣</span></div>
                  <span class="price_span">66￥</span>
                  <span class="price_month">3个月</span>
                </div>
                <div class="price_box right">
                  <div class="left_title"><span>推荐</span></div>
                  <span class="price_span">300￥</span>
                  <span class="price_month">12个月</span>
                </div>
              </div>
              <div class="vip_body_center">APP+TV双平台通用</div>
              <div class="vip_body_center">
                <van-button round type="info"></van-button>
              </div>
            </div>
          </div>
          <div class="vip_bg"><img src="../../../static/img/vip_bg_box.png" alt=""></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>


import Vue from 'vue';
import { NavBar } from 'vant';
import { Image as VanImage } from 'vant';
import { Lazyload } from 'vant';
import { Button } from 'vant';
import { Popup } from 'vant';

Vue.use(Popup);
Vue.use(Button);
Vue.use(Lazyload);
Vue.use(VanImage);
Vue.use(NavBar);
export default {
  data() {
    return {
      person_img: [
        require('../../../static/img/touxiang.png'),
      ],
    }
  },


  mounted() { },
  beforeDestroy() { },

  computed: {
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
  },

  components: {},

}
</script>

<style lang="scss" scoped>
@import '~@/styles/vip/vip.scss';
</style>
<style lang="scss">
html {
  * {
    // background-color: #333;
    color: #fff;
  }
  .vip-container {
    .van-nav-bar {
      background-color: #333;
      .van-nav-bar__left {
        .van-icon {
          color: #999;
          font-size: 0.5405rem;
        }
      }
      .van-nav-bar__right {
        .van-nav-bar__text {
          color: #fff;
          font-size: 0.4324rem;
        }
      }
      .van-nav-bar__title {
        color: #fff;
        font-size: 0.4865rem;
      }
    }
    .van-swipe-cell__right {
      .van-button--square {
        height: 100%;
      }
    }
    .vip_body_center {
      .van-button--info {
        color: #000;
        background: url('../../../static/img/vip_bt.png') no-repeat;
        background-size: 100%;
        width: 165px;
        height: 34px;
        border: none;
      }
    }
  }
}
</style>
