
<template>
  <div class="user-info-container">
    <template>
      <van-nav-bar :title="title" left-text="" right-text="" left-arrow @click-left=" onClickLeft" fixed :border='false' />
    </template>
    <div class="user_info_box">
      <div class="set_child top">
        <van-cell-group :border="false">
          <van-cell title="头像" @click="showSelectImg = true">
            <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <template #right-icon>
              <div v-for="(image, index) in person_img" class="right">
                <van-image round width="44.76" height="44.76px" lazy-load :src="image" />
              </div>
            </template>
          </van-cell>
          <van-action-sheet v-model="showSelectImg" :actions="actionImg" @select="onSelectImg" cancel-text="取消" close-on-click-action
                            @cancel="onCancel" />
          <van-cell title="昵称" is-link value="julinna" @click="showSelectName = true" />
          <van-action-sheet v-model="showSelectName" class="setName" title="设置名字" cancel-text="确定" close-on-click-action @cancel="onCheckName">
            <van-field v-model="nameValue" label="" placeholder="请输入用户名" />
          </van-action-sheet>
        </van-cell-group>
      </div>
      <div class="set_child center">
        <van-cell-group :border="false">

          <van-cell title="性别" value="完善性别信息" is-link @click="showSelectSex = true" />
          <van-action-sheet v-model="showSelectSex" :actions="actionSex" @select="onSelectSex" cancel-text="取消" close-on-click-action
                            @cancel="onCancel" />
          <van-cell title="出生年月" value="完善生日信息" is-link @click="showSelectBirth = true" />
          <van-action-sheet v-model="showSelectBirth">
            <van-datetime-picker visible-item-count="3" v-model="currentDate" type="date" title="" :min-date="minDate" :max-date="maxDate"
                                 @confirm="checkOut" @cancel="checkOut" />
          </van-action-sheet>
          <van-cell title="个性签名" value="来给你的灵魂一个升华吧~" is-link @click="showSelectSign = true" />
          <van-action-sheet v-model="showSelectSign" class="setName" title="个性签名" cancel-text="确定" close-on-click-action @cancel="onCheckSign">
            <van-field v-model="checkSign" autosize label="" type="textarea" maxlength="100" placeholder="在这里留下点什么...." show-word-limit
                       class="check_sign" />
          </van-action-sheet>
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
import { ActionSheet } from 'vant';
import { Toast } from 'vant';
import { DatetimePicker } from 'vant';
import { Form } from 'vant';
import { Field } from 'vant';

Vue.use(Field);
Vue.use(Form);
Vue.use(DatetimePicker);
Vue.use(Toast);
Vue.use(ActionSheet);
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
      showSelectSex: false,
      showSelectImg: false,
      showSelectBirth: false,
      showSelectSign: false,
      showSelectName: false,
      nameValue: '',
      checkSign: '',
      minDate: new Date(1900, 0, 1),
      maxDate: new Date(2020, 10, 26),
      currentDate: new Date(),
      actionSex: [{ name: '男生' }, { name: '女生' }],
      actionImg: [{ name: '拍照' }, { name: '从相册选择' }],
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
    },
    //修改性别
    onSelectSex(item) {
      this.showSelectSex = false;
      Toast(item.name);
    },
    //修改头像
    onSelectImg(item) {
      this.showSelectImg = false;
      Toast(item.name);
    },
    //取消按钮
    onCancel() {
    },
    //修改昵称
    onCheckName() {

    },
    //修改生日
    checkOut(value) {

      this.showSelectBirth = false;
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
      //动作面板样式
      .van-popup {
        width: 9.7333rem;
        padding: 0 0.1333rem;
        padding-bottom: 10px;
        background-color: rgba(0, 0, 0, 0.7);
        .van-action-sheet__header {
          background-color: #666;
        }
        .van-action-sheet__content:nth-child(2) {
          display: flex;
          justify-content: center;
          background-color: #666;
          border-bottom-right-radius: 0.2667rem;
          border-bottom-left-radius: 0.2667rem;
          .van-cell {
            margin-top: 0.2667rem;
            margin-bottom: 0.5333rem;
            width: 8.9333rem;
            height: 1.0133rem;
            background: #999999;
            opacity: 1;
            line-height: 0;
            border-radius: 0.2667rem;
            textarea {
              line-height: 2;
            }
          }
        }
        .van-action-sheet__content:nth-child(3) {
          display: flex;
          justify-content: center;
          background-color: #666;
          border-bottom-right-radius: 0.2667rem;
          border-bottom-left-radius: 0.2667rem;
          height: 70px;
          .van-cell {
            width: 8.9333rem;
            height: 100px;
            background: #999999;
            opacity: 1;
            line-height: 0;
            border-radius: 0.2667rem;
          }
        }
        .setName {
          background-color: #666;
        }
        .van-action-sheet__cancel {
          width: 100%;
          background-color: #4c4c4e;
          color: #fff;
          border-radius: 0.2667rem;
        }
        .van-action-sheet__item {
          width: 100%;
          background-color: #4c4c4e;
          color: #fff;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }
        .van-action-sheet__item:nth-child(2) {
          width: 100%;
          background-color: #4c4c4e;
          color: #fff;
          border-bottom-right-radius: 0.2667rem;
          border-bottom-left-radius: 0.2667rem;
          border-top-right-radius: 0;
          border-top-left-radius: 0;
          border-top: 1px solid #999;
        }
        div.van-action-sheet__gap {
          width: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          color: #fff;
        }
        .van-action-sheet__content {
          .van-picker {
            background-color: #666;
            border-radius: 0.2667rem;
            .van-picker__mask {
              background-size: 0 !important;
            }
            .van-picker__toolbar {
              color: #ccc;
            }
            .van-picker__confirm {
              color: #fff;
            }
          }
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
