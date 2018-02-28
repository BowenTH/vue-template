<template>
    <div>
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="1" :offset="18">
                        <router-link to="/home">首页</router-link>
                    </el-col>
                    <el-col :span="1">
                        <router-link to="/home/mock" exact>文档</router-link>
                    </el-col>
                    <el-col :span="1">
                        <router-link to="/home/example" exact>事例</router-link>
                    </el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside>                    
                    <el-scrollbar>
                        <div style="height: calc(100vh - 83px);">
                            <div class="aside-cell">aside</div>
                            <div class="aside-cell">aside</div>
                            <div class="aside-cell">aside</div>
                        </div>
                    </el-scrollbar>
                </el-aside>
                <el-container>
                    <el-main>
                        <el-scrollbar>
                            <div style="height: calc(100vh - 153px);">
                                <router-view></router-view>
                                <h1>main</h1>
                            </div>
                        </el-scrollbar>
                    </el-main>
                    <el-footer>
                        <h1>footer</h1>
                    </el-footer>
                </el-container>
            </el-container>            
        </el-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="less">
@import "../../style/common.less";
.router-link-active{
    color: red;
}

</style>