<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
      <div class="layout-footer">
        <TabBar :data="tabbars" @change="handleChange" />
      </div>
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [{
        title: '首页',
        to: {
          name: 'Home'
        },
        icon: 'home-o'
      },
      {
        title: '随心看',
        to: {
          name: 'Some'
        },
        icon: 'user-o'
      },
      {
        title: '片库',
        to: {
          name: 'Lib'
        },
        icon: 'user-o'
      },
      {
        title: '我的',
        to: {
          name: 'User'
        },
        icon: 'user-o'
      }
      ]
    }
  },
  components: {
    TabBar
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      console.log(to, from)

      // 如果to索引大于from索引, 判断为前进状态, 反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = 'slide-left';
      } else {
        this.transitionName = 'slide-right';
      }
    },

  },
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
    }
  }
}
</script>
