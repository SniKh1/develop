<template>
  <div class="register-container">
    <van-nav-bar title="手机注册" :border=0 left-arrow @click-left="onClickLeft" />
    <div class="register_main">
      <van-field v-model="tel" :border="false" type="tel" placeholder="请输入手机号" />
      <van-field v-model="password" :border="false" type="tel" placeholder="请输入密码" />
      <van-field v-model="password" :border="false" type="password" center clearable placeholder="请输入验证码">
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
      <van-button type="default" round="ture">注 册</van-button>
      <p>登录</p>
      <van-divider :style="{ color: '##b2afaf', borderColor: '##b2afaf', padding: '50px 16px 10px 16px' }">
        其他登录方式
      </van-divider>
      <div class="icon">
        <span><img src="../../../static/img/qq.png" alt=""></span>
        <span><img src="../../../static/img/wechat.png" alt=""></span>
      </div>
    </div>

  </div>
</template>

<script>
// :oneDirectional="true" 3d空间单向控制 default false

import Vue from 'vue';
import { NavBar } from 'vant';
import { Field } from 'vant';
import { Divider } from 'vant';

Vue.use(Divider);
Vue.use(Field);
Vue.use(NavBar);

export default {
  props: ["data"],
  data() {
    return {
      tel: '',
      password: '',
    };
  },
  created() {
  },
  computed: {},

  mounted() {

  },

  methods: {},
  components: {
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/user/register.scss';
</style>
<!-- 覆盖子组件样式 -->
<style lang="scss" >
.register-container {
  .van-nav-bar {
    background-color: #333;
  }
  .van-nav-bar__title {
    font-size: 16px;
    color: #ffffff;
  }
  .van-icon {
    color: #fff;
  }

  .van-cell {
    background-color: #333;
    border-bottom: solid 1px #ccc;
    color: #fff;
    .van-field__control {
      color: #fff;
    }
    .van-button--primary {
      background-color: #333;
      border: none;
      .van-button__text {
        color: #ffb414;
        font-size: 14px;
      }
    }
  }
  .van-button--default {
    margin-top: 1.4375rem;
    height: 1.125rem;
    width: 100%;
    background-color: #ffb414;
    border: none;
  }
}
</style>
