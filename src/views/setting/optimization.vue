<template>
  <div class="optimization-container">
    <template>
      <van-nav-bar :title="title" left-text="" right-text="" left-arrow @click-left=" onClickLeft" fixed :border='false' />
    </template>
    <div class="optimization_check">
      <p class="title">请提出您的优化建议</p>
      <van-checkbox-group v-model="result" direction="horizontal">
        <van-checkbox name="a">内容太少</van-checkbox>
        <van-checkbox name="b">经常卡顿或黑屏</van-checkbox>
        <van-checkbox name="c">声画不同步</van-checkbox>
        <van-checkbox name="d">全屏模式下不能播放</van-checkbox>
        <van-checkbox name="e">会员购买后不能用</van-checkbox>
        <van-checkbox name="f">手机号无法登录</van-checkbox>
      </van-checkbox-group>
    </div>

    <div class="optimization_text">
      <p class="title">其他建议,请详细描述您的建议内容</p>
      <van-field v-model="message" rows="2" autosize label="留言" type="textarea" maxlength="50" placeholder="描述您的建议详情，有助于我们持续优化产品。" show-word-limit />
    </div>
    <div class="optimization_bt">
      <van-button round color="#FFB414" type="info">圆形按钮</van-button>
    </div>
  </div>
</template>

<script>
// :oneDirectional="true" 3d空间单向控制 default false

import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'vant';
import { NavBar } from 'vant';
import { Field } from 'vant';

Vue.use(NavBar);
Vue.use(Field);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

export default {
  props: ["data"],
  data() {
    return {
      title: "优化建议",
      result: [],
      message: ""
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
@import '~@/styles/setting/optimization.scss';
</style>
<!-- 覆盖子组件样式 -->
<style lang="scss" >
.optimization-container {
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
  .optimization_check {
    .van-checkbox {
      width: 4.32rem;
      height: 46px;
      background: #666666;
      border-radius: 10px;
      margin-bottom: 0.32rem;
      .van-checkbox__icon {
        display: none;
      }
      .van-checkbox__label {
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 0.4267rem;

        font-family: Source Han Sans CN;
        margin-left: 0px;
      }
      .van-checkbox__icon--checked + .van-checkbox__label {
        color: #ffb414;
      }
    }
  }
  .optimization_text {
    .van-cell {
      width: 100%;
      background: #999999;
      opacity: 1;
      border-radius: 0.2667rem;
      .van-cell__title {
        display: none;
      }
    }
  }
  .optimization_bt {
    .van-button {
      width: 100%;
      height: 0.96rem;
      background: #ffb414;
      opacity: 1;
      border-radius: 0.48rem;
    }
  }
}
</style>
