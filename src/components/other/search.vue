<template>
  <div class="search-container">
    <div class="search_box">
      <form action="/">
        <van-search v-model="value" show-action placeholder="搜索" maxlength=20 shape="round" @search="onSearch" @cancel="onCancel" />
      </form>
    </div>
    <div class="search_history">
      <p>搜索历史</p>
      <van-button v-for="btn in btns" :key="btn.sort" size="small" type="default">{{btn.title}}</van-button>
    </div>
    <div class="search_recommend">
      <p>推荐搜索</p>
      <van-button v-for="btn in btns2" :key="btn.sort" size="small" type="default">{{btn.title}}</van-button>
    </div>
    <div class="search_hot">
      <p>热搜</p>
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
      ],
      btns: [
        { sort: 1, title: "哈利波特哈利波特哈利波特哈利波特哈哈利波特" }, { sort: 2, title: "哈利哈利波特波特哈利波特" }, { sort: 3, title: "哈利波特" }, { sort: 4, title: "哈利哈利波特波特" }, { sort: 5, title: "哈利波特" }, { sort: 6, title: "哈利波特" }, { sort: 7, title: "哈利波特" }, { sort: 8, title: "哈利波特" }
      ],
      btns2: [
        { sort: 1, title: "哈利波特" }, { sort: 2, title: "哈利波特哈利波特哈利波特哈利波特" }, { sort: 3, title: "哈利波特哈利波特" }, { sort: 4, title: "哈利波特哈利波特" }, { sort: 4, title: "哈利波特" }, { sort: 5, title: "哈利波特" }, { sort: 6, title: "哈利波特" }, { sort: 7, title: "哈利波特" }, { sort: 8, title: "哈利波特" }
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
      this.$router.go(-1)
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
.search-container {
  //搜索框
  .search_box {
    .van-search {
      background: #333;

      .van-search__content--round {
        background-color: #666;

        .van-field__control {
          color: #fff;
        }
      }
    }
  }

  //搜索历史
  .search_history {
    padding: 0.25rem 0 0 0.5rem;

    p {
      margin: 0px;
      padding-bottom: 0.25rem;
      font-size: 16px;
    }

    .van-button--default {
      margin-right: 10px;
      margin-bottom: 10px;
      background-color: #666666;
      border-radius: 10px 0 10px 0;
      border: none;
      color: #eeeeee;
      line-height: 19px;
    }
  }

  //推荐搜索
  .search_recommend {
    padding: 0.25rem 0 0 0.5rem;

    p {
      margin: 0px;
      padding-bottom: 0.25rem;
      font-size: 16px;
    }

    .van-button--default {
      margin-right: 10px;
      margin-bottom: 10px;
      background-color: #666666;
      border-radius: 10px 0 10px 0;
      border: none;
      color: #eeeeee;
      line-height: 19px;
    }
  }
}
</style>
