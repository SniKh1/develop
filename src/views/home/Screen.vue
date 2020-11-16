
<template>
  <div class="screen-container">
    <div class="banner">
      <van-swipe :autoplay="3000" @change="handleChange">
        <van-swipe-item v-for="(item, index) in banner" :key="index" class="swipe_box">
          <img @click="goVideo" class="swipe_item" v-lazy="item.img" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">
            <div class="van-swipe__indicators">
              <i class="van-swipe__indicator" v-for="(item,index) in banner" :class="{ 'van-swipe__indicator--active': index === mySwipeIndex }"></i>
            </div>
          </div>
        </template>
      </van-swipe>
      <template>
        <div class="swipe_info">
          <span class="swipe_title">蜘蛛侠:平行宇宙</span>
          <span class="swipe_score">8.6</span>
        </div>
      </template>
    </div>
    <div class="lately">
      <span class="layout_title">
        最近观看
      </span>
      <div>
        <ul id="list">
          <li class="item" v-for="(image, index) in lately_img" :key="index" :class="index ==0 ? 'underl' : ''">
            <img v-lazy="image" @click="goVideo">
            <div class="lately_info">
              <div class="lately_info_ab">
                <span class="lately_tip">更新至12集</span>
                <span class="lately_score">9.8</span>
              </div>
              <div class="lately_info_bt">
                <span class="lately_name">蜘蛛侠：平行宇宙</span><br />
                <span class="lately_time">已观看
                  <span>23</span>分钟
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="rot">
      <span class="layout_title">
        大家都在追
        <span class="layout_title_span" @click="goMore">更多></span>
      </span>
      <carousel-3d :startIndex="5" :inverseScaling="10" :space="120" :border="0" :perspective="0" :display="5" :animationSpeed="1000" :width="120"
                   :height="160">
        <slide v-for="(item, i) in slides" :index="i" :key="i">
          <template slot-scope=" obj">
            <img :src="item.src" alt="">
            <div class="rot_info_ab">
              <span class="rot_tip">28集全</span>
              <span class="rot_score">9.8</span>
            </div>
          </template>
        </slide>
      </carousel-3d>
      <div class="rot_title_name">蜘蛛侠：平行宇宙</div>
    </div>
    <div class="drama">
      <span class="layout_title">
        口碑大剧等你追
        <span class="layout_title_span" @click="goMore">更多></span>
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
    <div class="tabbar">
      <ul id="list">
        <li class="item" v-for="(image, index) in tabbar_img" :key="index" :class="index ==0 ? 'underl' : ''">
          <img v-lazy="image" @click="goVideo">
        </li>
      </ul>
    </div>
    <div class="special">
      <span class="layout_title">
        专区电影
      </span>
      <div>
        <ul id="list" :style="{backgroundImage:'url('+require('../../../static/img/bg_harry.png')+')'}">
          <li class="item" v-for="(image, index) in special_img" :key="index" :class="index ==0 ? 'underl' : ''">
            <img v-lazy="image" @click="goVideo">
            <div class="special_info">
              <div class="special_info_ab">
                <span class="special_score">9.1</span>
              </div>
              <div class="special_info_bt">
                <span class="special_name">哈利波特与凤凰城哈利波特与凤凰城</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="new">
      <span class="layout_title">
        高能新剧
        <span class="layout_title_span" @click="goMore">更多></span>
      </span>
      <carousel-3d :loop="false" :startIndex="0" :inverseScaling="5" :space="120" :border="0" :perspective="0" :display="18" :animationSpeed="1000"
                   :width="120" :height="160">
        <slide v-for="(item, i) in slides" :index="i" :key="i">
          <template slot-scope=" obj">
            <img :src="item.src" alt="">
            <div class="new_info_ab">
              <span class="new_tip">28集全</span>
              <span class="new_score">9.8</span>
            </div>
          </template>
        </slide>
      </carousel-3d>
      <div class="new_title_name">蜘蛛侠：平行宇宙</div>
    </div>
    <div class="navbar">
      <van-tabs class="" sticky swipeable color="#333" offset-top='66'>
        <van-tab class="" v-for="(bar_title, index) in navbar" :key="index">
          <template #title>
            <div class="tab_bar" :class="index == navbar.length-1 ? 'active_bar' : ''">
              <span class="bar_title_one">{{bar_title}}</span>
              <span class="bar_title_two">给生活加糖</span>
            </div>
            <div class="line">{{index == navbar.length-1 ?  "":"/" }}</div>
          </template>
          <!-- 内容 {{ index }} -->
          <template>
            <div>
              <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <van-cell v-for="item in list" :key="item.title">
                  <img :src="item.src" alt="">
                  <div class="flow_info_ab">
                    <span class="flow_tip">28集全</span>
                    <span class="flow_score">9.8</span>
                  </div>
                  <div class="flow_title_name">
                    {{item.msg}}
                  </div>
                </van-cell>
              </van-list>
            </div>
          </template>
        </van-tab>
      </van-tabs>
    </div>

  </div>
</template>

<script>
// :oneDirectional="true" 3d空间单向控制 default false
import { searchDataAPI, recommendDataAPI } from '@/api/api'

import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { Image as VanImage } from 'vant';
import Carousel3d from 'vue-carousel-3d'
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Carousel3d)
Vue.use(VanImage);
Vue.use(Lazyload);
Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  props: ["data"],
  data() {
    return {
      banner: [
        {
          img: require('../../../static/img/banner_1.png'),
          name: '蜘蛛侠:平行宇宙',
          score: '9.9'
        },
        {
          img: require('../../../static/img/banner_2.png'),
          name: '蜘蛛侠:平行宇宙',
          score: '9.9'
        },
        {
          img: require('../../../static/img/banner_3.png'),
          name: '蜘蛛侠:平行宇宙',
          score: '9.9'
        }
      ],
      lately_img: [
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
      ],
      drama_img: [
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
      ],
      tabbar_img: [
        require('../../../static/img/tabbar_img1.png'),
        require('../../../static/img/tabbar_img2.png'),
        require('../../../static/img/tabbar_img3.png'),
      ],
      special_img: [
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
        require('../../../static/img/drama_img.png'),
      ],
      slides: [
        {
          src: require('../../../static/img/rot_img1.png'),
        },
        {
          src: require('../../../static/img/rot_img1.png'),
        },
        {
          src: require('../../../static/img/rot_img1.png'),
        },
        {
          src: require('../../../static/img/rot_img1.png'),
        },
        {
          src: require('../../../static/img/rot_img1.png'),
        },
        {
          src: require('../../../static/img/rot_img1.png'),
        },
        {
          src: require('../../../static/img/rot_img1.png'),
        },
        {
          src: require('../../../static/img/rot_img1.png'),
        },
        {
          src: require('../../../static/img/rot_img1.png'),
        },
      ],
      navbar: [
        "恋爱剧场",
        "恐怖剧场",
        "恐怖剧场",
        "戏剧剧场",
        "喜剧剧场",
        "我的剧场",
      ],
      mySwipeIndex: 0,
      list: [
        {
          title: 1,
          src: require('../../../static/img/flow_1.png'),
          msg: "小丑"
        },
        {
          title: 2,
          src: require('../../../static/img/flow_2.png'),
          msg: "蜘蛛侠：平行宇宙"
        },
        {
          title: 1,
          src: require('../../../static/img/flow_1.png'),
          msg: "小丑"
        },
        {
          title: 2,
          src: require('../../../static/img/flow_2.png'),
          msg: "蜘蛛侠：平行宇宙"
        },
        {
          title: 1,
          src: require('../../../static/img/flow_1.png'),
          msg: "小丑"
        },
        {
          title: 2,
          src: require('../../../static/img/flow_2.png'),
          msg: "蜘蛛侠：平行宇宙"
        },
        {
          title: 1,
          src: require('../../../static/img/flow_1.png'),
          msg: "小丑"
        },
        {
          title: 2,
          src: require('../../../static/img/flow_2.png'),
          msg: "蜘蛛侠：平行宇宙"
        },
        {
          title: 1,
          src: require('../../../static/img/flow_1.png'),
          msg: "小丑"
        },
        {
          title: 2,
          src: require('../../../static/img/flow_2.png'),
          msg: "蜘蛛侠：平行宇宙"
        },
        {
          title: 1,
          src: require('../../../static/img/flow_1.png'),
          msg: "小丑"
        },
        {
          title: 2,
          src: require('../../../static/img/flow_2.png'),
          msg: "蜘蛛侠：平行宇宙"
        },
        {
          title: 1,
          src: require('../../../static/img/flow_1.png'),
          msg: "小丑"
        },
        {
          title: 2,
          src: require('../../../static/img/flow_2.png'),
          msg: "蜘蛛侠：平行宇宙"
        },
      ],
      loading: false,
      finished: false,
    };
  },
  created() {
  },
  computed: {},

  mounted() {
    this.searchData()
    this.recommendData()
  },

  methods: {
    handleChange(index) {
      console.log(index);
      this.mySwipeIndex = index;
    },
    goMore() {
      this.$router.push("More")
    },
    goVideo() {
      this.$router.push("Video")
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        // for (let i = 0; i < 10; i++) {
        //   this.$data.list.push(this.list.length + 1);
        // }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 2) {
          // 
          console.log(this.list)
          this.finished = true;
        }
      }, 1000);
    },
    //搜索接口调用
    searchData: async function() {
      const searchRes = await searchDataAPI({ searchcontent: "a", page: "1", rows: "5" })
      console.log(searchRes)
    },
    recommendData: async function() {
      const searchRes = await recommendDataAPI({ model: "banner", type: "recommend", page: "1", rows: "5" })
      console.log(searchRes)
    }
  },
  components: {
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/home/screen.scss';
</style>
<!-- 覆盖子组件样式 -->
<style lang="scss" >
html::-webkit-scrollbar,
body::-webkit-scrollbar,
*::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  display: none;
}

.new {
  width: 100%;
  .carousel-3d-container {
    width: 95%;
    margin-left: 4%;
    display: block;
    .carousel-3d-slider:last-child {
      margin: 0 !important;
    }
  }
}
.rot {
  .carousel-3d-container {
    margin-top: 0;
    margin-bottom: 0.2703rem;
  }
}
.navbar {
  .van-tabs {
    .van-sticky {
      & {
      }
      height: 1.1351rem;
    }
    .van-sticky--fixed {
      top: 1.1351rem;
      .van-tabs__wrap {
        height: 2.7027rem;
      }
    }
    .van-tabs__wrap {
      .van-tabs__nav {
        padding-top: 0 !important;
      }
    }
  }

  .van-tabs__nav {
    background-color: #333;
    padding-left: 0;

    .van-tab {
      padding: 0;
      width: 30%;

      .van-tab__text {
        width: 100%;
        display: flex;
        align-items: center;

        .line {
          color: #666666;
        }
        .tab_bar {
          width: 100%;
          height: 120%;
          text-align: center;
          display: flex; //给父元素开启flex
          flex-direction: column; //修改主轴方向
          flex-wrap: wrap; //开启自动换行
          align-content: center;

          .bar_title_one {
            color: #fff;
            font-size: 0.4865rem;
            padding-bottom: 5%;
          }
          .bar_title_two {
            font-size: 0.2703rem;
            color: #999999;
          }
        }
      }
    }
    .van-tabs__line {
      display: none;
    }
    .van-tab--active {
      .tab_bar {
        .bar_title_one {
          color: #ffc53d !important;
        }
        .bar_title_two {
          font-size: 0.2703rem;
          color: #ffffff !important;
          background-color: #dd9c54;
          border-radius: 0.5405rem;
        }
      }
    }
  }
  .van-tabs__content {
    .van-list {
      -moz-column-count: 3; /* Firefox */
      -webkit-column-count: 3; /* Safari 和 Chrome */
      column-count: 2;
      -moz-column-gap: 1em;
      -webkit-column-gap: 1em;
      column-gap: 1em;
      padding: 4%;
      .van-cell {
        -moz-page-break-inside: avoid;
        -webkit-column-break-inside: avoid;
        break-inside: avoid;
        background-color: #333;
        padding: 0;
        padding-bottom: 5%;

        .van-cell__title {
          display: none;
        }
        .van-cell__value {
          img {
            width: 100%;
          }
          .flow_info_ab {
            font-size: 0.3243rem;
            width: 100%;
            display: flex;
            position: absolute;
            bottom: 0.8108rem;

            .flow_tip {
              color: #dddddd;
            }
            .flow_score {
              color: #ffc53d;
              margin-left: auto;
            }
          }
          .flow_title_name {
            font-size: 0.3784rem;
            color: #fff;
          }
        }
        &::after {
          display: none;
        }
      }
      .van-list__finished-text {
        display: none;
      }
      .van-list__loading {
        display: none;
      }
    }
  }
}
</style>
