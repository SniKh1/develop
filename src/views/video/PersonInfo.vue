<!-- home -->

<template>
  <div class="person-container">
    <template>
      <div class="person_title">
        <van-nav-bar title="资料" left-text="" right-text="" left-arrow @click-left="goVideo" :border="false" :fixed="true" z-index="98"
                     offset-top="211px" />
      </div>
    </template>
    <template>
      <div class="container">
        <template>
          <div class="person_box">
            <img class="person_img" src="../../../static/img/person_img.png">
            <div class="person_info">
              <div class="person_info_ab">
                <span class="person_tip">艾玛·沃森</span>
              </div>
              <div class="person_info_bt">
                <span class="person_name">Emma Watson</span><br />
              </div>
            </div>
          </div>
          <div class="content">
            <span class="">简介</span>
          </div>
          <div class="bottom">
            <van-collapse v-model="activeNames" :border="false">
              <van-collapse-item title="哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁" name="2" :border="false">
                哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁
              </van-collapse-item>
            </van-collapse>
          </div>
        </template>
        <template>
          <div class="movie">
            <span class="layout_title">
              电影作品
            </span>
            <div>
              <ul id="list">
                <li class="item" v-for="(image, index) in movie_img" :key="index" :class="index ==0 ? 'underl' : ''">
                  <img v-lazy="image" @click="goVideoMenu">
                  <div class="movie_info">
                    <div class="movie_info_ab">
                      <span class="movie_tip">29集全</span>
                      <span class="movie_score">9.1</span>
                    </div>
                    <div class="movie_info_bt">
                      <span class="movie_name">小丑</span><br />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="drama">
            <span class="layout_title">
              电视剧作品
            </span>
            <div>
              <ul id="list">
                <li class="item" v-for="(image, index) in drama_img" :key="index" :class="index ==0 ? 'underl' : ''">
                  <img v-lazy="image" @click="goVideo">
                  <div class="drama_info">
                    <div class="drama_info_ab">
                      <span class="drama_tip">29集全</span>
                      <span class="drama_score">9.1</span>
                    </div>
                    <div class="drama_info_bt">
                      <span class="drama_name">小丑</span><br />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>

import Vue from 'vue'
import { Tab, Tabs } from 'vant';
import { NavBar } from 'vant';
import { Collapse, CollapseItem } from 'vant';

Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(NavBar)
Vue.use(Tab);
Vue.use(Tabs);

export default {
  data() {
    return {
      active: 2,
      activeNames: ['1'],
      drama_img: [
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
      ],
      movie_img: [
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
      ],
    }
  },

  props: {
    //父组件切换明星详情方法 注册
    menuChange: {
      type,
      default: null
    }
  },
  mounted() {

  },
  beforeDestroy() {

  },

  computed: {
  },
  methods: {
    //跳转视频页父组件方法调用
    goVideo() {
      if (this.menuChange) {
        this.menuChange("video_box");
      }
    },
    goVideoMenu() {
      this.$router.push("Video")
    },
  },

  components: {
  },

}
</script>

<style lang="scss" scoped>
@import '~@/styles/video/person-info.scss';
</style>
<style lang="scss">
.person-container {
  .person_title {
    .van-nav-bar {
      top: 211px;
      background-color: #333;
      color: #fff;
      .van-nav-bar__left {
        .van-icon-arrow-left {
          color: #999;
        }
      }
      .van-nav-bar__right {
        .van-nav-bar__text {
          color: #999;
          font-size: 0.7568rem;
        }
      }
      .van-nav-bar__title {
        color: #fff;
      }
    }
  }
  .container {
    .bottom {
      padding-top: 0.1892rem;
      * {
        background-color: #333;
      }

      .van-collapse {
        .van-collapse-item {
          .van-cell {
            background-color: #333;
            padding: 0;
            color: #999999;
            span {
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              white-space: normal;
            }
          }
          .van-collapse-item__wrapper {
            .van-collapse-item__content {
              padding: 0;
            }
          }
        }
      }
    }
    .content {
      padding-top: 0.3243rem;
      color: #999;
    }
  }
}
</style>
