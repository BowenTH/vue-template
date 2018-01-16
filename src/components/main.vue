<template>
    <div>
        <router-view></router-view>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="shop" info='5' url='/home'>首页</van-tabbar-item>
            <van-tabbar-item icon="chat" dot url='/mine'>我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import router from '../router'

    export default {
        name: 'Main',
        data() {
            return {
                active: 0
            }
        },
        router,
    }
</script>

<style scoped>

</style>