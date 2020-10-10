<!-- home -->

<template>
  <div class="index-container">
    <van-tabs line-width="20" line-height="4" color="#ffc53d" title-active-color="#000" background="#333" v-model="active" class="van_tabs"
              @click="tab" @disabled="onClickDisabled" sticky azy-render>
      <van-tab disabled>
      </van-tab>
      <van-tab>
        <template #title>
          <span :style="active===1?'color:#ffc53d;font-size:18px':'color:#999;font-size:16px'">
            放映厅
          </span>
        </template>
        <template>
          <div class="cinema_box">
            <cinema></cinema>
          </div>
        </template>
      </van-tab>
      <van-tab>
        <template #title>
          <span :style="active===2?'color:#ffc53d;font-size:18px':'color:#999;font-size:16px'">
            推荐
          </span>
        </template>
        <template>
          <div class="screen_box">
            <screen></screen>
          </div>
        </template>
      </van-tab>
      <van-tab>
        <template #title>
          <span :style="active===3?'color:#ffc53d;font-size:18px':'color:#999;font-size:16px'">
            专题
          </span>
        </template>
        <template>
          <div class="special_box">
            <special></special>
          </div>
        </template>
      </van-tab>
      <van-tab disabled>
        <template #title>
          <div class="search_icon_box">
            <img src="../../../static/img/search_icon.png" alt="">
          </div>
        </template>
      </van-tab>

    </van-tabs>

  </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'
import { Toast } from 'vant'
import screen from './screen'
import cinema from './cinema'
import special from './special'

Vue.use(Tab)
Vue.use(Tabs)
export default {
  data() {
    return {
      active: 2
    }
  },

  computed: {},

  mounted() { },

  methods: {
    tab(name, title) {
    },
    onClickDisabled(name, title) {
      Toast(name + '已被禁用');
    },
  },
  components: {
    'screen': screen,  //将别名screen变成 组件 screen
    'cinema': cinema,
    'special': special,
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/home/index.scss';
</style>
