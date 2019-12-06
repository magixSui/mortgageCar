<template>
  <div id="app">
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/> -->
    <router-view/>
    <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o">买车</van-tabbar-item>
    <van-tabbar-item icon="balance-o">卖车</van-tabbar-item>
    <van-tabbar-item icon="exchange">代理</van-tabbar-item>
    <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
  </van-tabbar>
  </div> 
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        active: 0
      }
    }
  }
</script>

<style>
  #app {
    height:100vh;
    font-size: initial;
  }
</style>