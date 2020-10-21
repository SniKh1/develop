
<template>
  <div class="record-container">
    <template>
      <van-nav-bar title="观看记录"" left-text="" right-text=" 编辑" left-arrow @click-left=" onClickLeft" @click-right=" onClickRight" fixed
                   :border='false' />
    </template>
    <template>
      <div class="record_box">
        <ul>
          <li v-for="(item, i) in list" :key="i">

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
    onClickLeft: function() {
      this.$router.go(-1)
    },
    onClickRight: function() {
      this.$router.go(-1)
    },

  },
  components: {
  },
}
</script>

<style lang="scss" scoped>
@import '~@/styles/user/record.scss';
</style>
<!-- 覆盖子组件样式 -->
<style lang="scss" >
html {
  * {
    // background-color: #333;
    color: #fff;
  }
  .record-container {
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
  }
}
</style>
