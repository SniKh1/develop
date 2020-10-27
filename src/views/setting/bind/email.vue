<!-- home -->

<template>
  <div class="email-container">
    <van-cell-group :border="false">
      <van-field v-model="email" label="" placeholder="请输入邮箱账号" maxlength="11" type="email" />
      <van-field v-model="sms" center clearable label="" maxlength="6" type="number" placeholder="请输入邮箱验证码">
        <template #button>
          <van-button size="small" type="primary" color="#333">发送邮箱验证码</van-button>
        </template>
      </van-field>
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
      email: '',
      sms: ''
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
</style>
<style lang="scss">
html {
  .email-container {
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
