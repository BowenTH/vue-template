<template>
  <div>
    <!-- <h1>App.vue</h1>
    <span>{{userInfo}}</span>
    <router-link to="/login" tag="button">login</router-link>
    <router-link to="/home" tag="button">home</router-link> -->
    <transition name="router-fade" mode="out-in">
			<router-view ></router-view>
		</transition>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters,mapMutations } from 'vuex'

export default {
   computed:{
        ...mapState([
            'userInfo'
        ])
    },
  mounted: function(){
    this.waitAsync()
  },
  methods: {
    testAsync(){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve('hello get')
        },4000)
      })
    },
    async waitAsync(){
      const v1 = await this.testAsync()
      console.log(v1)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>
