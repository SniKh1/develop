<template>
  <div class="video-info-container">
    <template>
      <div class="video_info_box">
        <div class="video_info_header">
          <div class="vip_bt_box">
            <van-button round type="info" @click="childMethod">
              立即开通会员
            </van-button>
          </div>
        </div>
        <div class="video_info_body">
          <div class="top">
            <span class="video_info_name">哈利·波特与魔法石</span>
            <span class="video_info_score">8.6</span>
            <div class="share"><img src="../../../static/img/share_b.png" @click="showShare = true" alt=""><img src="../../../static/img/coll_q.png"
                   alt=""></div>
            <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" />
          </div>
          <div class="content">
            <span class="">类型：<span class="type">奇幻 / 冒险</span></span>
          </div>
          <div class="bottom">
            <van-collapse v-model="activeNames" :border="false">
              <van-collapse-item title="哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁" name="2" :border="false">
                哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁
              </van-collapse-item>
            </van-collapse>
          </div>
        </div>
        <div class="video_info_footer">
          <van-tabs class="" color="#333" offset-top='44'>
            <van-tab class="" v-for="(bar_title, index) in navbar" :key="index">
              <template #title>
                <div class="tab_bar" :class="index == 0 ? 'active_bar' : 'active_bar2'">
                  <span class="bar_title_one">{{bar_title}}</span>
                </div>
                <div class="line">{{index == navbar.length-1 ?  "":"/" }}</div>
              </template>
              <template>
                <div class="drama">
                  <span class="layout_title drama_title">
                    选集
                  </span>
                  <ul id="list">
                    <li class="item" v-for="(item, index) in drama" :key="index" :class="activeClass == index?'active_check':''">
                      <div class="item_box" @click="IsActive(index)"><span>{{item}}</span></div>
                    </li>
                  </ul>
                </div>
                <div class="lately">
                  <span class="layout_title">
                    相关资讯
                  </span>
                  <div>
                    <ul id="list">
                      <li class="item" v-for="(image, index) in lately_img" :key="index" :class="index ==0 ? 'underl' : ''">
                        <img v-lazy="image">
                        <div class="lately_info">
                          <div class="lately_info_ab">
                            <span class="lately_tip">更新至12集</span>
                            <span class="lately_score">9.8</span>
                          </div>
                          <div class="lately_info_bt">
                            <span class="lately_name">蜘蛛侠：平行宇宙</span><br />

                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="person">
                  <span class="layout_title">
                    相关明星
                    <span class="layout_title_span" @click="goMore">更多></span>
                  </span>
                  <div>
                    <ul id="list">
                      <li class="item" v-for="(image, index) in person_img" :key="index" :class="index ==0 ? 'underl' : ''">
                        <img v-lazy="image">
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
              </template>
            </van-tab>
          </van-tabs>

        </div>
        <div class="more_reco">
          <span class="layout_title">
            更多推荐
          </span>
          <template>
            <div class="more_reco_box">
              <ul class="more_reco_ul">
                <li v-for="(item, i) in slides2">
                  <div class="img_box">
                    <img :src="item.src" alt="">
                  </div>
                  <div class="more_reco_info">
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
  </div>
</template>

<script>
import Vue from 'vue'
import { Collapse, CollapseItem } from 'vant';
import { Lazyload } from 'vant';
import { Image as VanImage } from 'vant';
import { Tab, Tabs } from 'vant';
import { ShareSheet } from 'vant';

Vue.use(ShareSheet);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(VanImage);
Vue.use(Lazyload);

Vue.use(Collapse);
Vue.use(CollapseItem);

export default {
  data() {
    return {
      activeClass: 0,
      loading: false,
      finished: false,
      showShare: false,
      activeNames: ['1'],
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
      drama: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
        ],
      ],
    };

  },

  computed: {},

  mounted() { },
  props: {
    checkVideo: {
      type: Function,
      default: null
    }
  },
  methods: {
    //分享面板
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
    //更多
    goMore: function() {
      this.$router.push("More")
    },
    //换集
    IsActive(k) {
      this.activeClass = k;
    },
    //父组件方法调用
    childMethod() {

      if (this.checkVideo) {
        this.checkVideo();
      }
    }
  },

  components: {

  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/video_play/video_info.scss';
</style>
<style lang="scss">
.video-container {
  .video_box {
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
    .video_info_footer {
      .van-tabs {
        .van-sticky {
          height: 1.1351rem;
        }
        .van-sticky--fixed {
          top: 1.1351rem;
          .van-tabs__wrap {
            height: 2.7027rem;
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
              color: #999999;
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
                width: 100%;
                font-size: 0.4324rem;
                color: #999999;
                font-size: 0.4865rem;
              }
              .bar_title_two {
                font-size: 0.2703rem;
                color: #999999;
              }
            }
            .active_bar {
              text-align: left;
            }
            // .bar_title_one:first-child {
            //   text-align: left;
            // }
          }
          &:first-child {
            width: 23%;
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
}
</style>
