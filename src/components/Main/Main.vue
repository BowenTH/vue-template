<template>
    <div>
        <el-button plain @click="alert">click</el-button>
        <h1>hello element{{title}}</h1>
        <div class="row-test">
            <el-row :gutter="10" type="flex" v-bind:class="{father:true}" justify="space-around" align="middle">
              <el-col v-for="item in [0,1,3]" align='middle' v-bind:class="{fatherCol:true}" :key="item" :span="3">
                    {{title + item}}
              </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import hello from '@/router/test';

export default {
    data() {
        return {
            title: 'Home'
        }
    },
    methods: {
        alert(){
            // this.$alert('content', 'title', {
            //     confirmButtonText: 'confirm',
            //     callback: action => {
            //         console.log('alert')
            //     }
            // });
            // this.$confirm('content', 'title', {
            //     confirmButtonText: 'confirm',
            //     cancelButtonText: 'cancel',
            //     type: 'warning'
            // }).then(() => {
                
            // }).catch(() => {});
            this.$prompt('content', 'title', {
                confirmButtonText: 'confirm',
                cancelButtonText: 'cancel',
                inputPattern: /regExp/,
                inputErrorMessage: 'errormsg'
            }).then(({ value }) => {
                
            }).catch(() => {});
        }
    }
}
</script>

<style lang="less">
@import '../../style/main.less';

</style>
