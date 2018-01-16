<template>
  <div id="app">
   <router-view></router-view>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="shop" info='5' to='/home'>首页</van-tabbar-item>
        <van-tabbar-item icon="chat" dot to='/mine'>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import router from './router'

export default {
    name: 'App',
    data() {
        return {
            active: 0
        }
    },
    router,
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
