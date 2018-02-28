<template>
  <div>
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

  },
  methods: {
    
  }
}
</script>

<style scoped lang="less">
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
