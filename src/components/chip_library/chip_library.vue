<!-- home -->

<template>
  <div class="chip-library-container">
    <div class="header">
      <van-nav-bar title="片库" :border="false" @click-right="goSearch">
        <template #right>
          <img src="../../../static/img/search_icon.png" alt="">
        </template>
      </van-nav-bar>
    </div>
    <div class="label">
      <van-tabs :line-height="0">
        <van-tab v-for="label in lables1" :key="label.name" :title="label.name"></van-tab>
      </van-tabs>
      <van-tabs :line-height="0">
        <van-tab v-for="label in lables2" :key="label.name" :title="label.name"></van-tab>
      </van-tabs>
      <van-tabs :line-height="0">
        <van-tab v-for="label in lables3" :key="label.name" :title="label.name"></van-tab>
      </van-tabs>
      <van-tabs :line-height="0">
        <van-tab v-for="label in lables4" :key="label.name" :title="label.name"></van-tab>
      </van-tabs>
      <van-tabs :line-height="0">
        <van-tab v-for="label in lables5" :key="label.name" :title="label.name"></van-tab>
      </van-tabs>
    </div>
    <div class="library">
      <template>
        <div class="more_reco_box">
          <ul class="more_reco_ul">
            <li v-for="(item, i) in slides2" :class="(1+i) %   3==0  ? 'img_right_box' : 'img_left_box'" @click="goVideo">
              <div class="img_box" :class="(2+i) %   3==0  ? 'img_center' : ''">
                <img :src="item.src" alt="">
                <div class="more_reco_info_ab">
                  <span class="more_reco_tip">更新至12集</span>
                  <span class="more_reco_score">9.8</span>
                </div>
                <div class="more_reco_info_bt">
                  <span class="more_reco_name">毒液</span><br />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </template>
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
        { name: "全部" }, { name: "2020" }, { name: "2019" }, { name: "2018" }, { name: "2017" }, { name: "2016" }, { name: "2015" }, { name: "2014" }, { name: "2013" }
      ]
      ,
      lables5: [
        { name: "全部" }, { name: "付费" }, { name: "免费" }
      ], slides2: [
        {
          src: require('../../../static/img/drama_img.png'),
        },
        {
          src: require('../../../static/img/drama_img.png'),
        },
        {
          src: require('../../../static/img/drama_img.png'),
        },
        {
          src: require('../../../static/img/drama_img.png'),
        },
        {
          src: require('../../../static/img/drama_img.png'),
        },
        {
          src: require('../../../static/img/drama_img.png'),
        },
      ],
    }
  },

  mounted() { },
  beforeDestroy() { },

  computed: {
  },
  methods: {
    goSearch: function() {
      this.$router.push("Search")
    },
    goVideo: function() {
      this.$router.push("Video")
    }
  },

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
        padding: 0;
        background: #333;
        .van-tab {
          color: #fff;
          padding: 0;
          flex: none;
          -webkit-box-flex: none;
          width: 1.5625rem;
        }
        .van-tab--active {
          color: #ffc53d;
        }
      }
    }
  }
}

.library {
  .layout_title {
    padding-top: 0.2703rem;
  }

  .more_reco_box {
    .more_reco_ul {
      text-align: center;

      li {
        width: 32%;
        display: inline-block;
        position: relative;

        .img_box {
          text-align: left;
          padding: 0 0.1757rem;

          img {
            // width : 90%;
            margin: auto;
          }
        }

        .more_reco_info_ab {
          white-space: nowrap;
          display: flex;
          position: absolute;
          bottom: 20%;
          width: 96%;
          padding: 0 0.0811rem;
          line-height: 0;

          .more_reco_tip {
            color: #fff !important;
            font-size: 0.3243rem;
          }

          .more_reco_score {
            padding-right: 12.2%;
            margin-left: auto;
            color: #ffc53d;

            img {
              padding-left: 0.1351rem;
              width: 0.3784rem;
              -webkit-mask-image: none;
              border-radius: 0rem;
            }
          }
        }

        .more_reco_info_bt {
          text-align: left;

          .more_reco_name {
            // font-size   : 0.1622rem;
            font-size: 0.3784rem;
            color: #fff;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }

      .img_left_box {
        .img_box {
          padding-left: 0rem;
        }

        .img_center {
          padding: 0 0.0878rem;
        }
      }

      .img_right_box {
        .img_box {
          padding-right: 0rem;
        }
      }
    }
  }
}
</style>
