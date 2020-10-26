<template>
  <div class="optimization-container">
    <div class="optimization_check">
      <p>请提出您的优化建议</p>
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
      <p>请提出您的优化建议</p>
      <van-field v-model="message" rows="1" autosize label="留言" type="textarea" placeholder="请输入留言" />
    </div>
  </div>
</template>

<script>
// :oneDirectional="true" 3d空间单向控制 default false

import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'vant';
import { Field } from 'vant';

Vue.use(Field);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

export default {
  props: ["data"],
  data() {
    return {
      result: [],
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
@import '~@/styles/user/optimization.scss';
</style>
<!-- 覆盖子组件样式 -->
<style lang="scss" >
.optimization-container {
  .optimization_check {
    p {
      padding-left: 0.24rem;
      font-size: 0.4267rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 0.72rem;
    }
    padding-left: 0.5333rem;
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
    width: 8.9333rem;
    height: 4.5067rem;
    background: #999999;
    opacity: 1;
    border-radius: 20px;
    p {
      padding-left: 0.24rem;
      font-size: 0.4267rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 0.72rem;
    }
    .van-cell {
      .van-cell__title {
        display: none;
      }
    }
  }
}
</style>
