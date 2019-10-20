<template>
  <div id="app">
    <h1>父标题：我的第一个vue-cli构建的程序</h1>
    <shopcart :title="title" ></shopcart>
  </div>
</template>

<script>
import Shopcart from './components/Shopcart.vue'

export default {
  name: 'app',
  data() {
    return {
      title: '子标题：我的第一个vue-cli构建的程序'
    }
  },
  components: {
    Shopcart
  },
  mounted() {
        console.log(this.title);
    }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
