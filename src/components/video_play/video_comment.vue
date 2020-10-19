<!-- home -->

<template>
  <div class="video-comment-container">
    <template>
      <div class="comment_box">
        <span class="title">热门评论</span>
        <ul>
          <li v-for="item in list" :key="item.title">
            <div class="comment_header">
              <img class="user_img" :src="item.src" alt="">
              <div class="user_info">
                <span class="user_name">{{item.name}}</span>
                <div class="time_box"><span class="date">{{item.date}}</span><span class="time">{{item.time}}</span></div>
              </div>
              <div class="commend_box">
                <div class="commend_false"><img src="../../../static/img/z_f.png" alt=""><span class="commend_false_span">{{item.commend_f}}</span>
                </div>
                <div class="commend_true"><img src="../../../static/img/z_t.png" alt=""><span class="commend_true_span">{{item.commend_t}}</span>
                </div>
              </div>
            </div>
            <div class="comment_footer">
              <div class="van-multi-ellipsis--l3">
                {{item.com}}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>


import Vue from 'vue'
import { Collapse, CollapseItem } from 'vant';

Vue.use(Collapse);
Vue.use(CollapseItem);

export default {
  data() {
    return {
      list: [
        {
          src: require('../../../static/img/person_img.png'),
          name: "Diamond",
          date: "昨天",
          time: "12:32",
          commend_f: "123",
          commend_t: "4567",
          com: "还是第一部最可爱了，正太是正太萝莉是萝莉的还是第一部最可爱了，正太是正太萝莉是萝莉的还是第一部最可爱了，正太是正太萝莉是萝莉的"
        }, {
          src: require('../../../static/img/person_img.png'),
          name: "Diamond",
          date: "昨天",
          time: "12:32",
          commend_f: "123",
          commend_t: "4567",
          com: "还是第一部最可爱了，正太是正太萝莉是萝莉的还是第一部最可爱了，正太是正太萝莉是萝莉的还是第一部最可爱了，正太是正太萝莉是萝莉的"
        }, {
          src: require('../../../static/img/person_img.png'),
          name: "Diamond",
          date: "昨天",
          time: "12:32",
          commend_f: "123",
          commend_t: "4567",
          com: "还是第一部最可爱了，正太是正太萝莉是萝莉的还是第一部最可爱了，正太是正太萝莉是萝莉的还是第一部最可爱了，正太是正太萝莉是萝莉的"
        }, {
          src: require('../../../static/img/person_img.png'),
          name: "Diamond",
          date: "昨天",
          time: "12:32",
          commend_f: "123",
          commend_t: "4567",
          com: "还是第一部最可爱了，正太是正太萝莉是萝莉的还是第一部最可爱了，正太是正太萝莉是萝莉的还是第一部最可爱了，正太是正太萝莉是萝莉的"
        }, {
          src: require('../../../static/img/person_img.png'),
          name: "Diamond",
          date: "昨天",
          time: "12:32",
          commend_f: "123",
          commend_t: "4567",
          com: "还是第一部最可爱了，正太是正太萝莉是萝莉的还是第一部最可爱了，正太是正太萝莉是萝莉的还是第一部最可爱了，正太是正太萝莉是萝莉的"
        },

      ]
    }
  },


  mounted() { },
  beforeDestroy() { },

  computed: {
  },
  methods: {},

  components: {

  },

}
</script>

<style lang="scss" scoped>
@import '~@/styles/video_play/video_comment.scss';
</style>
<style lang="scss">
</style>
