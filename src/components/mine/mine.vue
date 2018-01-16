<template>
   <div>
     <img src="../../assets/logo.png" alt="logo">
     <van-cell-group>
      <van-cell title="反馈" clickable value="内容" />
      <van-cell title="地址" icon="cash-on-deliver" is-link to="/address"/>
      <van-cell title="地址" icon="cash-on-deliver" is-link to="/address"/>
      <van-cell title="地址" icon="cash-on-deliver" is-link to="/address"/>
      <van-cell title="地址" icon="cash-on-deliver" is-link to="/address"/>
      <van-cell title="地址" icon="cash-on-deliver" is-link to="/address"/>
    </van-cell-group>
   </div>
</template>

<script>
    export default {
       name:'Mine',
        data() {
          return {
            key: 3
          }
        },
    }
</script>

<style scoped>

</style>