<!-- home -->

<template>
  <div class="bind-container">
    <template>
      <van-nav-bar :title='title' left-text="" right-text="" left-arrow @click-left=" onClickLeft" fixed :border='false' />
    </template>
    <div class="component">
      <component :is="activeItem" />
    </div>
  </div>
</template>

<script>

import phone from './bind/phone'
import check_phone from './bind/check_phone'
import email from './bind/email'
import password from './bind/password'

import Vue from 'vue'
import { NavBar } from 'vant';

Vue.use(NavBar);
export default {
  data() {
    return {
      title: '',
      activeItem: 'password'
    }
  },
  created() {
    this.title = this.$route.params.title;
    this.activeItem = this.$route.params.activeItem;
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      console.log(to, from)
      if (to.path == "/bind") {

        this.title = this.$route.params.title;
        this.activeItem = this.$route.params.activeItem;
      }
      // 如果to索引大于from索引, 判断为前进状态, 反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = 'slide-left';
      } else {
        this.transitionName = 'slide-right';
      }
    },

  },

  mounted() { },
  beforeDestroy() { },

  computed: {
  },
  methods: {
    onClickLeft() {
      this.$router.push("Account");
    }
  },

  components: {
    'phone': phone,
    'check_phone': check_phone,
    'password': password,
    'email': email,
  },

}
</script>

<style lang="scss" scoped>
@import '~@/styles/setting/bind.scss';
</style>
<style lang="scss">
html {
  .bind-container {
    .van-nav-bar {
      background-color: #4c4c4e;
      .van-nav-bar__left {
        .van-icon {
          color: #fff;
          font-size: 0.5405rem;
        }
      }
      .van-nav-bar__title {
        color: #fff;
        font-size: 0.4865rem;
      }
    }
    .component {
      padding-top: 46px;
    }
  }
}
</style>
