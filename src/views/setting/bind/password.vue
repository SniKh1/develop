<!-- home -->

<template>
  <div class="password-container">
    <van-cell-group :border="false">
      <van-field v-model="password_old" label="旧密码" placeholder="请输入旧密码" maxlength="20" />
      <van-field v-model="password_new" label="新密码" placeholder="请输入新密码" maxlength="20" />
      <div class="tip">由8-20位字母、数字组成</div>
      <div class="button_box">
        <van-button round type="info" size="large">确定</van-button>
      </div>
    </van-cell-group>
  </div>
</template>

<script>


import Vue from 'vue'
import { Field } from 'vant';
import { Button } from 'vant';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup)
Vue.use(Button);
Vue.use(Field);

export default {
  data() {
    return {
      password_old: '',
      password_new: '',
      sms: ''
    }
  },


  mounted() { },
  beforeDestroy() { },

  computed: {
  },
  methods: {
    formatter(value) {
      // 过滤输入的数字
      return value.replace(/\d/g, '');
    },
  },

  components: {},

}
</script>

<style lang="scss" scoped>
</style>
<style lang="scss">
html {
  .password-container {
    margin-top: 1.2267rem;
    padding: 0 0.5867rem;
    .van-cell {
      background-color: #333;
      .van-field__control {
        color: #fff;
      }
      .van-button {
        color: #ffb414 !important;
      }
    }
    .tip {
      background-color: #333;
      color: #646566;
      text-align: center;
      padding-left: 0.9067rem;
    }
    .button_box {
      display: flex;
      justify-content: center;
      background-color: #333;
      .van-button {
        margin: 0 auto;
        margin-top: 0.96rem;
        width: 8rem;
        height: 0.96rem;
        background: #ffb414;
        border: none;
      }
    }
  }
}
</style>
