<template>
  <van-tabbar v-model="active" class="active_tab">
    <van-tabbar-item v-for="(item,index) in tabbars" :key="index" @click="tab(index,item.name)">
      <span :class="currIndex == index ? active:''">{{item.title}}</span>
      <template slot="icon" slot-scope="props">
        <img :src="props.active ? item.active : item.normal">
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'Tabbar',
  data() {
    return {
      currIndex: 0,
      active: 0,
      tabbars: [{
        name: 'home',
        title: '首页',
        normal: require('../../static/home_active.png'),
        active: require('../../static/home_inactive.png')
      },
      {
        name: 'Some',
        title: '首页',
        normal: require('../../static/some_active.png'),
        active: require('../../static/some_inactive.png')
      },
      {
        name: 'Lib',
        title: '首页',
        normal: require('../../static/lib_active.png'),
        active: require('../../static/lib_inactive.png')
      },
      {
        name: 'User',
        title: '首页',
        normal: require('../../static/user_active.png'),
        active: require('../../static/user_inactive.png')
      }
      ]
    }
  },
  methods: {
    tab(index, val) {
      this.currIndex = index
      this.$router.push(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.active_tab img {
  width: 26px;
  height: 26px;
}

.van-tabbar-item--active {
  color: #ffc53d;
}
.van-tabbar-item {
  color: #dddddd;
}
.van-tabbar {
  background-color: #333;
}
</style>
