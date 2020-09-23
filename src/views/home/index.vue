<!-- home -->

<template>
  <div class="index-container">
    <van-tabs line-width="20" line-height="4" color="#ffc53d" title-active-color="#000" background="#333" v-model="active" class="van_tabs"
              @click="tab" sticky swipeable azy-render>
      <van-tab>
        <template #title>
          <span :style="active===0?'color:#ffc53d;font-size:18px':'color:#999;font-size:16px'">
            放映厅
          </span>
        </template>
      </van-tab>
      <van-tab>
        <template #title>
          <span :style="active===1?'color:#ffc53d;font-size:18px':'color:#999;font-size:16px'">
            推荐
          </span>
        </template>
      </van-tab>
      <van-tab>
        <template #title>
          <span :style="active===2?'color:#ffc53d;font-size:18px':'color:#999;font-size:16px'">
            专题
          </span>
        </template>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'
import { Toast } from 'vant';
Vue.use(Tab)
Vue.use(Tabs)
export default {
  data() {
    return {
      active: 1
    }
  },

  computed: {},

  mounted() { },

  methods: {
    tab(name, title) {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/home/index.scss';
</style>
