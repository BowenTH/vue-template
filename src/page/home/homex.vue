<template>
    <div>
        {{title}}
        <router-link :to="'/login/'+id" tag="button" >login</router-link>
        <router-link to="/home/mock" tag="button" >mock</router-link>
        <br>
        <li>this can test less!</li>
        <span v-for="(item,index) in getEmoji" :key="index" style="font-size:40px;">{{item.emoji}}|</span>
        <router-view></router-view>
    </div>
</template>

<script>
import emoji from 'node-emoji';
export default {
    data() {
        return {
            title: 'home title',
            id: 'login-version23'
        }
    },
    computed: {
        getEmoji() {
            let arr = []
            for (let index = 0; index < 1000; index++) {
                // arr.push(emoji.random())
                
            }
            return arr 
        }
    },
}
</script>

<style lang="less" scoped>
@import (less) '../../style/common.less';
li{
    .setLi(yellow;40px;lightgrey);
}
</style>