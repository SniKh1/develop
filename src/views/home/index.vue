<!-- home -->

<template>
  <div class="index-container">
    <van-tabs line-width="20" line-height="4" color="#ffc53d" background="#333" v-model="active" class="van_tabs" sticky swipeable>
      <van-tab title-style="font:16px;color:#999" title="放映厅">放映厅111</van-tab>
      <van-tab title-style="font:16px;color:#999" title="推荐">推荐</van-tab>
      <van-tab title-style="font:16px;color:#999" title="专题">专题</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'

Vue.use(Tab)
Vue.use(Tabs)
export default {
  data() {
    return {
      active: 0
    }
  },

  computed: {},

  mounted() { },

  methods: {}
}
</script>

<style lang="scss" scoped>
@import '../../styles/home/index.scss';
</style>
