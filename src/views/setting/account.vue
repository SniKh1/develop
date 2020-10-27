
<template>
  <div class="account-container">
    <template>
      <van-nav-bar :title="title" left-text="" right-text="" left-arrow @click-left=" onClickLeft" fixed :border='false' />
    </template>
    <div class="account_box">
      <div class="set_child center">
        <van-cell-group :border="false">
          <van-cell title="手机" value="未绑定" is-link @click="goPhone" />
          <van-cell title="微信" value="未绑定" is-link @click="goCheckPhone" />
          <van-cell title="邮箱" value="未绑定" is-link @click="goEmail" />
          <van-cell title="登录密码" is-link @click="goPassword" />
          <van-cell title="登录设备管理" is-link to="Device" />
        </van-cell-group>
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
      title: "账号安全",
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
      this.$router.push('Setting');
    },
    goPhone() {
      this.$router.push('Bind');
      this.$router.push({
        name: 'Bind',
        params: {
          title: '输入新绑定手机号',
          activeItem: 'phone',
        }
      });
    },
    goEmail() {
      this.$router.push('Bind');
      this.$router.push({
        name: 'Bind',
        params: {
          title: '绑定邮箱',
          activeItem: 'email',
        }
      });
    },
    goCheckPhone() {
      this.$router.push('Bind');
      this.$router.push({
        name: 'Bind',
        params: {
          title: '更改手机号',
          activeItem: 'check_phone',
        }
      });
    },
    goPassword() {
      this.$router.push('Bind');
      this.$router.push({
        name: 'Bind',
        params: {
          title: '更改登录密码',
          activeItem: 'password',
        }
      });
    }
  },
  components: {
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/setting/account.scss';
</style>
<!-- 覆盖子组件样式 -->
<style lang="scss" >
html {
  * {
    color: #fff;
  }
  .account-container {
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
  .account_box {
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
