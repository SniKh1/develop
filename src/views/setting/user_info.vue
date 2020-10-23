
<template>
  <div class="user-info-container">
    <template>
      <van-nav-bar :title="title" left-text="" right-text="" left-arrow @click-left=" onClickLeft" fixed :border='false' />
    </template>
    <div class="user_info_box">
      <div class="set_child top">
        <van-cell-group :border="false">
          <van-cell title="昵称">
            <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <template #right-icon>
              <div v-for="(image, index) in person_img" class="right">
                <van-image round width="44.76" height="44.76px" lazy-load :src="image" />
              </div>
            </template>
          </van-cell>
          <van-cell title="头像" is-link value="julinna" />
        </van-cell-group>
      </div>
      <div class="set_child center">
        <van-cell-group :border="false">
          <van-cell title="性别" value="完善性别信息" is-link />
          <van-cell title="出生年月" value="完善生日信息" is-link />
          <van-cell title="个性签名" value="来给你的灵魂一个升华吧~" is-link />
        </van-cell-group>
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
      title: "个人资料",
      image: require('../../../static/img/touxiang.png'),
      person_img: [
        require('../../../static/img/touxiang.png'),
      ],
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
    }
  },
  components: {
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/setting/user_info.scss';
</style>
<!-- 覆盖子组件样式 -->
<style lang="scss" >
html {
  * {
    color: #fff;
  }
  .user-info-container {
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
  .user_info_box {
    .van-cell-group {
      background: #4c4c4e;
      .van-cell {
        background: #4c4c4e;
        .van-cell__title {
          display: flex;
          align-items: center;
        }
        .van-cell__value {
          span {
            color: #999999;
            font-size: 12px;
          }
        }
        .van-cell__right-icon {
          color: #fff;
        }
        &::after {
          border-bottom: 0.02667rem solid #666666;
        }
      }
    }
  }
  .search-icon {
    font-size: 16px;
    line-height: inherit;
  }
}
</style>
