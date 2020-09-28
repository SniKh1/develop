<template>

  <!--具体参数的配置请仔细查看文档-->

  <carousel-3d :perspective="0" :display="5" :animationSpeed="1000" :width="120" :height="160">
    <slide v-for="(item, i) in slides" :index="i" :key="i">
      <template slot-scope="obj">
        <img :src="item.src" alt="">
      </template>
    </slide>
  </carousel-3d>
</template>



<script>
import Vue from 'vue';
import Carousel3d from 'vue-carousel-3d'
Vue.use(Carousel3d)

export default {
  data() {
    return {
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
      ]
    }
  }
}
</script>

<style scoped>
</style>
