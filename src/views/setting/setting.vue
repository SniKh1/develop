
<template>
  <div class="setting-container">
    <template>
      <van-nav-bar :title="title" left-text="" right-text="" left-arrow @click-left=" onClickLeft" fixed :border='false' />
    </template>
    <div class="setting_box">
      <div class="set_child top">
        <van-cell-group :border="false">
          <van-cell title="个人资料" is-link to="User_info" />
          <van-cell title="账号安全" is-link to="Account" />
        </van-cell-group>
      </div>
      <div class="set_child center">
        <van-cell-group :border="false">
          <van-cell title="默认清晰度" value="1080p" />
          <van-cell title="连续播放" value="开" />
          <van-cell title="青少年播放模式" value="关" />
          <van-cell title="消息推送" value="开" />
        </van-cell-group>
      </div>
      <div class="set_child bottom">
        <van-cell-group :border="false">
          <van-action-sheet v-model="showCache" :actions="actions" @select="onSelect" cancel-text="取消" close-on-click-action @cancel="onCancel" />
          <van-cell title="清除缓存"" value=" 230m" @click="showCache = true" />
          <van-cell title="优化建议" is-link to="optimization" />
          <van-cell title="关于我们" is-link />
        </van-cell-group>
      </div>
      <div class="out">
        <van-cell title="退出登录""/>
      </div>
      <div class=" edition">
          APP版本号：V1.0.0
      </div>
    </div>
  </div>
</template>

<script>

import Vue from 'vue';
import { Lazyload } from 'vant';
import { Image as VanImage } from 'vant';
import { Tab, Tabs } from 'vant';
import { NavBar } from 'vant';
import { Cell, CellGroup } from 'vant';
import { ActionSheet } from 'vant';

Vue.use(ActionSheet);
Vue.use(Cell);
Vue.use(CellGroup)
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(VanImage);
Vue.use(Lazyload);
Vue.use(NavBar);


export default {
  props: ["data"],
  data() {
    return {
      title: "设置",
      showCache: false,
      actions: [{ name: '清除缓存' }],
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
    },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.showCache = false;
      Toast(item.name);
    },
    onCancel() {
    },
  },
  components: {
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/setting/setting.scss';
</style>
<!-- 覆盖子组件样式 -->
<style lang="scss" >
html {
  * {
    color: #fff;
  }
  .setting-container {
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
  }
  .setting_box {
    .van-cell-group {
      background: #4c4c4e;
      .van-cell {
        background: #4c4c4e;
        &::after {
          border-bottom: 0.02667rem solid #666666;
        }
      }
      //动作面板样式
      .van-popup {
        width: 9.7333rem;
        padding: 0 0.1333rem;
        padding-bottom: 10px;
        background-color: rgba(0, 0, 0, 0.7);
        .van-action-sheet__cancel {
          width: 100%;
          background-color: #4c4c4e;
          color: #fff;
          border-radius: 0.2667rem;
        }
        .van-action-sheet__item {
          width: 100%;
          background-color: #4c4c4e;
          color: #fff;
          border-bottom-right-radius: 0.2667rem;
          border-bottom-left-radius: 0.2667rem;
          border-top-right-radius: 0;
          border-top-left-radius: 0;
        }

        div {
          width: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          color: #fff;
        }
      }
    }
    .out {
      .van-cell {
        background: #4c4c4e;
        .van-cell__title {
          text-align: center;
          span {
            color: #999999;
          }
        }
        .van-cell__right-icon {
          color: #fff;
        }
      }
    }
  }
}
</style>
