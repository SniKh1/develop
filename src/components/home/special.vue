
<template>
  <div class="special-container">
    <template>
      <div class="bc_img_box">
        <img src="../../../static/img/sp_bc.png" alt="">
      </div>
    </template>
    <div class="special_navbar">
      <van-tabs class="" swipeable color="#333" offset-top='44'>
        <van-tab class="" v-for="(bar_title, index) in navbar" :key="index">
          <template #title>
            <div class="tab_bar" :class="index == navbar.length-1 ? 'active_bar' : ''">
              <span class="bar_title_one">{{bar_title}}</span>
            </div>
            <div class="line">{{index == navbar.length-1 ?  "":"/" }}</div>
          </template>
          <!-- 内容 {{ index }} -->
          <template>
            <div class="special_eg_f">
              <ul id="list">
                <li class="item" v-for="(image, index) in lately_img" :key="index" :class="index ==0 ? 'underl' : ''">
                  <img v-lazy="image" @click="goVideo">
                  <div class="lately_info">
                    <div class="lately_info_ab">
                      <span class="lately_tip">第一季</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="person">
              <span class="layout_title">
                相关明星
                <span class="layout_title_span" @click="goMore">更多></span>
              </span>
              <div>
                <ul id="list">
                  <li class="item" v-for="(image, index) in person_img" :key="index" :class="index ==0 ? 'underl' : ''">
                    <img v-lazy="image" @click="goVideo">
                    <div class="person_info">
                      <div class="person_info_ab">
                        <span class="person_tip">艾玛·沃森</span>
                      </div>
                      <div class="person_info_bt">
                        <span class="person_name">Emma Watson</span><br />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="person_new">
              <span class="layout_title">
                高能明星周边
                <span class="layout_title_span" @click="goMore">更多></span>
              </span>
              <carousel-3d :loop="false" :startIndex="0" :inverseScaling="5" :space="120" :border="0" :perspective="0" :display="18"
                           :animationSpeed="1000" :width="120" :height="160">
                <slide v-for="(item, i) in slides" :index="i" :key="i">
                  <template slot-scope=" obj">
                    <img :src="item.src" alt="">
                    <div class="person_new_info_ab">
                      <span class="person_new_tip">28集全</span>
                      <span class="person_new_score">9.8</span>
                    </div>
                  </template>
                </slide>
              </carousel-3d>
              <div class="person_new_title_name">蜘蛛侠：平行宇宙</div>
            </div>

          </template>
        </van-tab>
      </van-tabs>
      <div class="some">
        <span class="layout_title">
          其他推荐
        </span>
        <template>
          <div class="some_box">
            <ul class="some_ul">
              <li v-for="(item, i) in slides2">
                <img :src="item.src" alt="" @click="goVideo">
                <div class="some_info">
                  <div class="some_info_ab">
                    <span class="some_tip">更新至12集</span>
                    <span class="some_score">9.8</span>
                  </div>
                  <div class="some_info_bt">
                    <span class="some_name">毒液</span><br />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
// :oneDirectional="true" 3d空间单向控制 default false

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
      loading: false,
      finished: false,
      lately_img: [
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
        require('../../../static/img/lately_img1.png'),
      ],
      navbar: [
        "第一季",
        "第二季",
        "第三季",
        "第四季",
        "第五季",
        "第六季",
      ],
      list: [
        {
          title: 1,
          src: require('../../../static/img/flow_2.png'),
          msg: "小丑"
        },
        {
          title: 2,
          src: require('../../../static/img/flow_2.png'),
          msg: "蜘蛛侠：平行宇宙"
        },
        {
          title: 1,
          src: require('../../../static/img/flow_2.png'),
          msg: "小丑"
        },
        {
          title: 2,
          src: require('../../../static/img/flow_2.png'),
          msg: "蜘蛛侠：平行宇宙"
        },
        {
          title: 1,
          src: require('../../../static/img/flow_2.png'),
          msg: "小丑"
        },
        {
          title: 2,
          src: require('../../../static/img/flow_2.png'),
          msg: "蜘蛛侠：平行宇宙"
        },
        {
          title: 1,
          src: require('../../../static/img/flow_2.png'),
          msg: "小丑"
        },
        {
          title: 2,
          src: require('../../../static/img/flow_2.png'),
          msg: "蜘蛛侠：平行宇宙"
        },
        {
          title: 1,
          src: require('../../../static/img/flow_2.png'),
          msg: "小丑"
        },
        {
          title: 2,
          src: require('../../../static/img/flow_2.png'),
          msg: "蜘蛛侠：平行宇宙"
        },
        {
          title: 1,
          src: require('../../../static/img/flow_2.png'),
          msg: "小丑"
        },
        {
          title: 2,
          src: require('../../../static/img/flow_2.png'),
          msg: "蜘蛛侠：平行宇宙"
        },
        {
          title: 1,
          src: require('../../../static/img/flow_2.png'),
          msg: "小丑"
        },
        {
          title: 2,
          src: require('../../../static/img/flow_2.png'),
          msg: "蜘蛛侠：平行宇宙"
        },
      ],
      person_img: [
        require('../../../static/img/person_img.png'),
        require('../../../static/img/person_img.png'),
        require('../../../static/img/person_img.png'),
        require('../../../static/img/person_img.png'),
        require('../../../static/img/person_img.png'),
        require('../../../static/img/person_img.png'),
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
      slides2: [
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
    };
  },
  created() {
  },
  computed: {},

  mounted() {

  },

  methods: {
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
    goMore: function() {
      this.$router.push("More")
    },
    goVideo: function() {
      this.$router.push("Video")
    },
  },
  components: {
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/home/special.scss';
</style>
<!-- 覆盖子组件样式 -->
<style lang="scss" >
html {
  .van-tabs__nav {
    .van-tab {
      z-index: 1;
    }
  }
  .special_navbar {
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
      .van-tabs__content {
        .person_new {
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
            color: #fff;
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
              font-size: 0.4324rem;
              color: #fff;
              font-size: 0.4865rem;
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
  }
}
</style>
