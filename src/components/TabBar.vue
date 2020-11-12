<template>
  <van-tabbar v-model="active" class="active_tab" fixed :border='false' active-color="#ffc53d">
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
        name: 'Home',
        title: '首页',
        normal: require('../../static/img/home_active.png'),
        active: require('../../static/img/home_inactive.png')
      },
      {
        name: 'Some',
        title: '随心看',
        normal: require('../../static/img/some_active.png'),
        active: require('../../static/img/some_inactive.png')
      },
      {
        name: 'Lib',
        title: '片库',
        normal: require('../../static/img/lib_active.png'),
        active: require('../../static/img/lib_inactive.png')
      },
      {
        name: 'User',
        title: '我的',
        normal: require('../../static/img/user_active.png'),
        active: require('../../static/img/user_inactive.png')
      },
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
.van-tabbar-item {
  color: #dddddd;
}
.van-tabbar {
  background-color: #333;
}

.active_tab {
  width: 100%;
  padding-bottom: env(safe-area-inset-bottom);
  position: fixed;
  bottom: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}
</style>
