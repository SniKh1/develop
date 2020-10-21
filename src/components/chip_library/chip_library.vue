<!-- home -->

<template>
  <div class="chip-library-container">
    <div class="header">
      <van-nav-bar title="片库" :border="false">
        <template #right>
          <img src="../../../static/img/search_icon.png" alt="">
        </template>
      </van-nav-bar>
    </div>
    <div class="label">
      <van-tabs :line-height="0">
        <van-tab v-for="label in lables1" :title="label.name"></van-tab>
      </van-tabs>
      <van-tabs :line-height="0">
        <van-tab v-for="label in lables2" :title="label.name"></van-tab>
      </van-tabs>
      <van-tabs :line-height="0">
        <van-tab v-for="label in lables3" :title="label.name"></van-tab>
      </van-tabs>
      <van-tabs :line-height="0">
        <van-tab v-for="label in lables4" :title="label.name"></van-tab>
      </van-tabs>
      <van-tabs :line-height="0">
        <van-tab v-for="label in lables5" :title="label.name"></van-tab>
      </van-tabs>
    </div>
  </div>
  </div>
</template>

<script>


import Vue from 'vue'
import { NavBar } from 'vant';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar);

export default {
  data() {
    return {
      lables1: [
        { name: "最新" }, { name: "最热" }
      ],
      lables2: [
        { name: "全部" }, { name: "美剧" }, { name: "韩剧" }, { name: "日剧" }, { name: "其他" }
      ]
      ,
      lables3: [
        { name: "全部" }, { name: "剧情" }, { name: "奇幻" }, { name: "动作" }, { name: "冒险" }, { name: "喜剧" }
      ]
      ,
      lables4: [
        { name: "全部" }, { name: "2020" }, { name: "2019" }, { name: "2018" }, { name: "2017" }, { name: "2016" }, { name: "2016" }, { name: "2016" }, { name: "2016" }
      ]
      ,
      lables5: [
        { name: "全部" }, { name: "付费" }, { name: "免费" }
      ]
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
@import '~@/styles/chip_library/chip_library.scss';
</style>
<style lang="scss">
.header {
  .van-nav-bar {
    background-color: #333;
    height: 1.375rem;

    .van-nav-bar__title {
      color: #fff;
    }
    .van-nav-bar__right {
      img {
        width: 0.5625rem;
        height: 0.5625rem;
      }
    }
  }
}

.label {
  .van-tabs {
    height: 1.125rem;
    .van-tabs__wrap {
      .van-tabs__nav {
        background: #333;
        .van-tab {
          color: #fff;
        }
        .van-tab--active {
          color: #ffc53d;
        }
      }
    }
  }
}
</style>
