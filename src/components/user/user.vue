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
      <div class="header_footer">
        <span>
          <img src="../../../static/img/huiyuan.png" alt="">VIP会员中心
        </span>
        <span>
          <img style="opacity: 0;" src="../../../static/img/huiyuan.png" alt="">会员专属福利
        </span>
      </div>
    </div>
    <div class="user_content"></div>
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
    }
  },


  mounted() { },
  beforeDestroy() { },

  computed: {
  },
  methods: {},

  components: {},

}
</script>

<style lang="scss" scoped>
@import '~@/styles/user/user.scss';
</style>
<style lang="scss">
</style>
