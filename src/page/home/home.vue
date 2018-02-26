<template>
    <div>
        {{title}}
        <router-link :to="'/login/'+id" tag="button" >login</router-link>
        <br>
        <li>this can test less!</li>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'home title',
                id: 'login-version23'
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