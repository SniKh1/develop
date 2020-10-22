
<template>
  <div class="more-container">
    <template>
      <van-nav-bar title="热门放映"" left-text="" right-text="" left-arrow @click-left=" onClickLeft" fixed :border='false' />
    </template>
    <template>
      <div class="more_box">
        <ul>
          <li v-for="(item, i) in list" :key="i">
            <div class="video_box">
              <div class="poster_box">
                <img :src="item.img" alt="" @click="goVideo">
              </div>
              <div class="video_info_box">
                <div class="video_info_name">{{item.name}}<span class="video_info_score">{{item.score}}</span>
                  <img class="coll_img" :src="item.img_coll" alt="">
                </div>
                <div class="video_info_center">类型：<span class="video_info_type">{{item.type}}</span><span class="video_info_sets">{{item.sets}}</span>
                </div>
                <div class="video_info_bt"><span class="video_info_desc">{{item.desc}}</span></div>
              </div>
            </div>
          </li>

        </ul>
      </div>
    </template>
  </div>
</template>

<script>
// :oneDirectional="true" 3d空间单向控制 default false

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
      list: [
        {
          img: require('../../../static/img/flow_1.png'),
          name: '哈利·波特与魔法石',
          score: '8.6',
          type: '奇幻 / 冒险',
          sets: '29集',
          desc: '哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁',
          img_coll: require('../../../static/img/coll_f.png')
        },
        {
          img: require('../../../static/img/flow_1.png'),
          name: '哈利·波特与魔法石',
          score: '8.6',
          type: '奇幻 / 冒险',
          sets: '29集',
          desc: '哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁',
          img_coll: require('../../../static/img/coll_t.png')
        },
        {
          img: require('../../../static/img/flow_1.png'),
          name: '哈利·波特与魔法石',
          score: '8.6',
          type: '奇幻 / 冒险',
          sets: '29集',
          desc: '哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁',
          img_coll: require('../../../static/img/coll_f.png')
        },
        {
          img: require('../../../static/img/flow_1.png'),
          name: '哈利·波特与魔法石',
          score: '8.6',
          type: '奇幻 / 冒险',
          sets: '29集',
          desc: '哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁',
          img_coll: require('../../../static/img/coll_f.png')
        },
        {
          img: require('../../../static/img/flow_1.png'),
          name: '哈利·波特与魔法石',
          score: '8.6',
          type: '奇幻 / 冒险',
          sets: '29集',
          desc: '哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁',
          img_coll: require('../../../static/img/coll_f.png')
        },
        {
          img: require('../../../static/img/flow_1.png'),
          name: '哈利·波特与魔法石',
          score: '8.6',
          type: '奇幻 / 冒险',
          sets: '29集',
          desc: '哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁',
          img_coll: require('../../../static/img/coll_f.png')
        },
        {
          img: require('../../../static/img/flow_1.png'),
          name: '哈利·波特与魔法石',
          score: '8.6',
          type: '奇幻 / 冒险',
          sets: '29集',
          desc: '哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁',
          img_coll: require('../../../static/img/coll_f.png')
        },
        {
          img: require('../../../static/img/flow_1.png'),
          name: '哈利·波特与魔法石',
          score: '8.6',
          type: '奇幻 / 冒险',
          sets: '29集',
          desc: '哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁',
          img_coll: require('../../../static/img/coll_f.png')
        },
        {
          img: require('../../../static/img/flow_1.png'),
          name: '哈利·波特与魔法石',
          score: '8.6',
          type: '奇幻 / 冒险',
          sets: '29集',
          desc: '哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁',
          img_coll: require('../../../static/img/coll_f.png')
        }
      ]
    };
  },
  created() {
  },
  computed: {},

  mounted() {

  },

  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    goVideo() {
      this.$router.push("Video")
    },
  },
  components: {
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/other/more.scss';
</style>
<!-- 覆盖子组件样式 -->
<style lang="scss" >
html {
  * {
    // background-color: #333;
    color: #fff;
  }
  .more-container {
    .van-nav-bar {
      background-color: #333;
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
}
</style>
