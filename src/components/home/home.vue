<template>
    <div>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img :src="image" />
            </van-swipe-item>
        </van-swipe>
        <van-loading style="margin: 0 auto;" v-if="loading" type="gradient-circle" color="black" />
        <van-cell-group v-else>
            <van-cell v-for="(item, index) in lists" :key="item.title">
                <template slot='title'>
                    <van-card
                    :title="item.title+' '+item.year+ (index+1)"
                    :desc="item.genres[0]"
                    :num="item.collect_count"
                    :price="item.original_title"
                    :thumb="item.images.medium||''"
                    />
                </template>
            </van-cell>
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        name :'Home',
        data() {
            return {
                images: [
                    'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg',
                    'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p511118051.jpg',
                    'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg',
                    'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p511118051.jpg',
                ],
                title: '',
                lists: [],
                loading:true,
            }
        },
        mounted () {
           
            let _this = this
            this.$http.get('https://api.douban.com/v2/movie/top250',
                {
                    params: { id:234 },
                }
            )
            .then(function(res){
                console.log(res.data)
                _this.title = res.data.title+' '+ res.data.total
                _this.lists = res.data.subjects
                _this.$toast('加载完成')
                _this.loading = false
            }).catch(function(e){
                console.log(e)
            })
        }
    }
</script>

<style scoped>
.vant-cell-group,.vant-cell,vant-cell{
    max-width: 400px;
    padding: 5px;
}
</style>