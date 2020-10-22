
<template>
  <div class="collection-container">
    <template>
      <van-nav-bar title="观看记录"" left-text="" right-text=" 编辑" left-arrow @click-left=" onClickLeft" @click-right=" onClickRight" fixed
                   :border='false' />
    </template>
    <template>
      <div class="collection_box">
        <span class="time_alone">7天内</span>
        <ul>
          <li v-for="(item, i) in list" :key="i">
            <van-swipe-cell>
              <template>
                <div class="item_box">
                  <div class="img_box">
                    <img Lazyload :src="item.img" alt="">
                    <span class="img_info_set">{{item.sets}}</span>
                  </div>
                  <div class="item_info">
                    <span class="span_name">{{item.name}}</span>
                    <span class="span_speed"> 观看至<span>{{item.type}}</span></span>
                  </div>
                </div>
              </template>
              <template #right>
                <van-button square text="删除" type="danger" class="delete-button" />
              </template>
            </van-swipe-cell>
            <!-- <van-checkbox-group v-model="result" ref="checkboxGroup">
              <van-checkbox name="a">复选框 a</van-checkbox>
              <van-checkbox name="b">复选框 b</van-checkbox>
              <van-checkbox name="c">复选框 c</van-checkbox>
            </van-checkbox-group> -->
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
import { SwipeCell } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(SwipeCell);
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
      result: [],
      list: [
        {
          img: require('../../../static/img/lately_img1.png'),
          name: '哈利·波特与魔法石',
          score: '8.6',
          type: '40%',
          sets: '29集',
          desc: '哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁',
          img_coll: require('../../../static/img/coll_f.png')
        },
        {
          img: require('../../../static/img/lately_img1.png'),
          name: '哈利·波特与魔法石',
          score: '8.6',
          type: '40%',
          sets: '29集',
          desc: '哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁',
          img_coll: require('../../../static/img/coll_t.png')
        },
        {
          img: require('../../../static/img/lately_img1.png'),
          name: '哈利·波特与魔法石',
          score: '8.6',
          type: '40%',
          sets: '29集',
          desc: '哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁',
          img_coll: require('../../../static/img/coll_f.png')
        },
        {
          img: require('../../../static/img/lately_img1.png'),
          name: '哈利·波特与魔法石',
          score: '8.6',
          type: '40%',
          sets: '29集',
          desc: '哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁',
          img_coll: require('../../../static/img/coll_f.png')
        },
        {
          img: require('../../../static/img/lately_img1.png'),
          name: '哈利·波特与魔法石',
          score: '8.6',
          type: '40%',
          sets: '29集',
          desc: '哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁',
          img_coll: require('../../../static/img/coll_f.png')
        },
        {
          img: require('../../../static/img/lately_img1.png'),
          name: '哈利·波特与魔法石',
          score: '8.6',
          type: '40%',
          sets: '29集',
          desc: '哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁',
          img_coll: require('../../../static/img/coll_f.png')
        },
        {
          img: require('../../../static/img/lately_img1.png'),
          name: '哈利·波特与魔法石',
          score: '8.6',
          type: '40%',
          sets: '29集',
          desc: '哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁',
          img_coll: require('../../../static/img/coll_f.png')
        },
        {
          img: require('../../../static/img/lately_img1.png'),
          name: '哈利·波特与魔法石',
          score: '8.6',
          type: '40%',
          sets: '29集',
          desc: '哈利波特是一个孤儿，从小寄养在姨妈家， 受尽欺凌但就在哈利11岁',
          img_coll: require('../../../static/img/coll_f.png')
        },
        {
          img: require('../../../static/img/lately_img1.png'),
          name: '哈利·波特与魔法石',
          score: '8.6',
          type: '40%',
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
    onClickRight() {
      this.$router.go(-1)
    },

  },
  components: {
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/user/collection.scss';
</style>
<!-- 覆盖子组件样式 -->
<style lang="scss" >
html {
  * {
    // background-color: #333;
    color: #fff;
  }
  .collection-container {
    .van-nav-bar {
      background-color: #333;
      .van-nav-bar__left {
        .van-icon {
          color: #fff;
          font-size: 0.5405rem;
        }
      }
      .van-nav-bar__right {
        .van-nav-bar__text {
          color: #fff;
          font-size: 0.4324rem;
        }
      }
      .van-nav-bar__title {
        color: #fff;
        font-size: 0.4865rem;
      }
    }
    .van-swipe-cell__right {
      .van-button--square {
        height: 100%;
      }
    }
  }
}
</style>
