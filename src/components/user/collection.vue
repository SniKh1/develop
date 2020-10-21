
<template>
  <div class="collection-container">
    搜索
  </div>
</template>

<script>

import Vue from 'vue';


export default {
  props: [],
  data() { },
  created() { },
  computed: {},
  mounted() { },
  methods: {},
  onClickLeft: function() {
    this.$router.go(-1)
  },
  components: {},
}
</script>

<style lang="scss" scoped>
@import '~@/styles/user/collection.scss';
</style>
<!-- 覆盖子组件样式 -->
<style lang="scss" >
</style>
