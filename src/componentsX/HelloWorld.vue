<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button round @click="show = !show">animtion</el-button>
    <transition 
      name="custom-transtion"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight">
      <div class="animation" v-show="show">can you see me!《》</div>      
    </transition>

    <transition name="el-zoom-in-center">
      <div class="animation" v-show="show">can you see me!《》</div>      
    </transition>
    <p>can you show orTaster</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      show: true,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function(){
    this.$message({
      message: 'text',
      type: 'info'
    });
  },
  methods: {
    showToggle() {

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.animation{
  margin: 50px;
  height: 100px;
  width: 150px;
  background-color: #42b983;
  border-radius: 10px;
  text-align: center;
  line-height: 100px;
}
</style>
