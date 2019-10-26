<template>
  <div id="tabbar">
      <router-link class="tabbar_item" v-for="(item,index) in tabList" :key="index" :to="item.href" exact-active-class="active">{{item.name}}</router-link>
  </div>
</template>

<script>
export default {
    name: 'TabBar',
    data() {
        return {
            tabList: [
                {
                    name: '主页',
                    href: '/index-page'
                },
                {
                    name: '购物车',
                    href: '/shopcart'
                },
                {
                    name: '新增品种',
                    href: '/add-new'
                }        
            ]
        }
    }
}
</script>

<style>
#tabbar {
    width: 100%;
    height: 60px;
    display: flex;
}

.tabbar_item {
    flex: 1;
    display: block;
    text-align: center;
    line-height: 60px;
    background: skyblue;
    border-right: 2px solid white;
    text-decoration: none;
    color: white;
}

.tabbar_item:nth-last-of-type() {
    border: none;
}

.active {
    background: purple;
}
</style>