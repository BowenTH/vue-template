<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/home">首页</router-link>
      <router-link to="/mine">我的</router-link>
      {{sigalPage}}
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters,mapMutations } from 'vuex'
import store from '@/vuex/index'

export default {
  name: 'App',
  store,
   computed:{
        ...mapState([
            'userInfo','login','sigalPage'
        ])
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
