<template>
  <div id="app">
    <h1>父标题：我的第一个vue-cli构建的程序</h1>
    <tab-bar></tab-bar>
    <router-view :title="title"></router-view>
  </div>
</template>

<script>
import Shopcart from './components/Shopcart.vue'
import TabBar from './components/TabBar.vue'

export default {
  name: 'app',
  data() {
    return {
      title: '子标题：我的第一个vue-cli构建的程序'
    }
  },
  components: {
    Shopcart,
    TabBar
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
