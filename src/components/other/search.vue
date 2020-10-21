<template>
  <div class="search-container">
    <div class="search_box">
      <form action="/">
        <van-search v-model="value" show-action placeholder="搜索" shape="round" @search="onSearch" @cancel="onCancel" />
      </form>
    </div>
    <div class="search_history">
      <div>
        <span>搜索历史</span>
      </div>
    </div>
    <div class="search_recommend">
      <div>
        <span>推荐搜索</span>
      </div>
    </div>
    <div class="search_hot">
      <div>
        <span>热搜</span>
      </div>
      <ul>
        <li v-for="li in list">
          <span>{{li.sort}}</span>
          <span>{{li.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import Vue from 'vue';
import { Search } from 'vant';
import { Toast } from 'vant';
import { Button } from 'vant';

Vue.use(Button);
Vue.use(Search);


export default {
  props: [],
  data() {
    return {
      value: '',
      list: [
        { sort: 1, title: "哈利波特" }, { sort: 2, title: "哈利波特" }, { sort: 3, title: "哈利波特" }, { sort: 4, title: "哈利波特" }, { sort: 5, title: "哈利波特" }, { sort: 6, title: "哈利波特" }, { sort: 7, title: "哈利波特" }, { sort: 8, title: "哈利波特" }
      ]
    };
  },
  created() { },
  computed: {},
  mounted() { },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
    },
  },
  components: {},
}
</script>

<style lang="scss" scoped>
@import '~@/styles/other/search.scss';
</style>
<!-- 覆盖子组件样式 -->
<style lang="scss" >
</style>
