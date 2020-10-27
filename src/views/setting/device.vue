
<template>
  <div class="device-container">
    <template>
      <van-nav-bar :title="title" left-text="" right-text="" left-arrow @click-left=" onClickLeft" fixed :border='false' />
    </template>
    <div class="device_box">
      <div class="set_child center">
        <van-cell-group :border="false">
          <van-cell title="手机客户端" value="最近登陆：2020-09-20" is-link />
          <van-cell title="TV端" value="最近登陆：2020-09-20" is-link />
          <van-cell title="Ipad" value="最近登陆：2020-09-20" is-link />
        </van-cell-group>
      </div>
      <div class="tip">
        如果以上设备非您的常用设备，为确保账号安全，请进行删除
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue';
import { Lazyload } from 'vant';
import { Image as VanImage } from 'vant';
import { Tab, Tabs } from 'vant';
import { NavBar } from 'vant';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup)
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(VanImage);
Vue.use(Lazyload);
Vue.use(NavBar);


export default {
  props: ["data"],
  data() {
    return {
      title: "登录设备管理",
      image: require('../../../static/img/touxiang.png'),
      person_img: [
        require('../../../static/img/touxiang.png'),
      ],
    };
  },
  created() {
  },
  computed: {},

  mounted() {

  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  components: {
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/setting/device.scss';
</style>
<!-- 覆盖子组件样式 -->
<style lang="scss" >
html {
  * {
    color: #fff;
  }
  .device-container {
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
  }
  .device_box {
    .van-cell-group {
      background: #4c4c4e;
      .van-cell {
        background: #4c4c4e;
        .van-cell__title {
          display: flex;
          align-items: center;
        }
        .van-cell__value {
          span {
            color: #999999;
            font-size: 12px;
          }
        }
        .van-cell__right-icon {
          color: #fff;
        }
        &::after {
          border-bottom: 0.02667rem solid #666666;
        }
      }
    }
  }
  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
}
</style>
