<template>
    <div>
        <span id="note">{{ data }} {{userInfo.age}}</span>
        <router-link to="/Main">
            <el-button type="primary" plain @click="setSigalPage(true)">去首页</el-button>
        </router-link>
        <router-view class="main"></router-view>
    </div>
</template>

<script>
    import { mapState, mapActions, mapGetters,mapMutations } from 'vuex'
    import store from '@/vuex/index'
    
    export default {
        data() {
            return {
                data: 'this is home page'
            }
        },
        store,
        mounted: function(){
            let _this = this
            this.$http.get('https://api.douban.com/v2/book/1220562',
                {
                    params: { id:234 },
                }
            )
            .then(function(res){
                _this.data += JSON.stringify(res.data)
            }).catch(function(e){
                console.log(e)
            })
        },
        computed:{
            ...mapState([
                'userInfo','login'
            ])
        },
        methods:{
            ...mapMutations([ 'setSigalPage'])
        }
        // 另一种引入方式
        // mapState({
        //     login: 'login'
        // })
    }
</script>

<style lang="less" scoped>
div{
    #note{
        color: rgb(7, 233, 158);
    }
}

.main{
    background-color: #888;
    height: 100%;width: 100%;
}
</style>