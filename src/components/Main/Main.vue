<template>
    <div style="height:100%">
        <!-- <el-button plain @click="alert">click</el-button>
        <h1>hello element{{title}}</h1>
        <div class="row-test">
            <el-row :gutter="10" type="flex" v-bind:class="{father:true}" justify="space-around" align="middle">
              <el-col v-for="item in [0,1,3]" align='middle' v-bind:class="{fatherCol:true}" :key="item" :span="3">
                    {{title + item}}
              </el-col>
            </el-row>
        </div> -->
        <!-- header -->

        

        <!-- <h1 style="margin-top:150px;">helllo router-view</h1>
        
        <el-row>
          <el-col :span="24"></el-col>
        </el-row> -->


        <el-container style="height:100%" >
            <el-header v-bind:class="{header:true}" height="100px">
                <el-row >
                    <el-col :span="6">
                        <img :src="logo" alt="饿了么" >
                    </el-col>
                    <el-col :span="4" :offset="2">
                        <el-input v-model="inputSearch" placeholder="搜索文档" clearable  prefix-icon="el-icon-search"></el-input>
                    </el-col>
                    <el-col :span="6" :offset="1">
                        <el-row>
                            <el-col v-for="item in navCells" :key="item.text" :span="6" v-bind:class="item.classList">
                                <router-link :to="item.linkTo" tag="li"><a>{{item.text}}</a></router-link>

                            </el-col>
                        </el-row>

                    </el-col>
                </el-row>
            </el-header>

            <el-container style="height:calc(100% - 100px);padding-top:100px;">
                <el-aside width="250px" style="background-color:#545c64;">
                    <el-row class="tac">
                        <el-col :span="24">
                            <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                            <el-submenu index="1">
                                <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                                </template>
                                <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                                </el-menu-item-group>
                                <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                                </el-submenu>
                            </el-submenu>
                            <el-menu-item index="2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">导航二</span>
                            </el-menu-item>
                            <el-menu-item index="3">
                                <i class="el-icon-setting"></i>
                                <span slot="title">导航三</span>
                            </el-menu-item>
                            </el-menu>
                        </el-col>
                    </el-row>
                </el-aside>

                <el-container>
                    <el-main>4
                        <transition name="el-fade-in">
                            <router-view></router-view>
                        </transition>

                        <h1>main</h1>
                    </el-main>
                    <el-footer style="text-align:center" height="20px">
                        <span>&copy;菜花科技提供技术支持</span>
                    </el-footer>
                </el-container>

            </el-container>
        </el-container>   
    </div>
</template>

<script>
import hello from '@/router/test'
import logoUrl from '@/assets/logo.svg'

export default {
    data() {
        return {
            title: 'Home',
            logo : logoUrl,
            navCells:[{
                text:'指南',
                linkTo:'/gruid',
                active:true,
                classList:{ 'navCellText':true,'active':false }
            },{
                text:'组件',
                linkTo:'/components',
                active:false,
                classList:{ 'navCellText':true,'active':false }
            },{
                text:'资源',
                linkTo:'/source',
                active:false,
                classList:{ 'navCellText':true,'active':false }
            }],
            inputSearch:null,
        }
    },
    mounted:function(){
        // this.navCells[0].classList.active = true;
    },
    methods: {
        alert(){
            this.$prompt('content', 'title', {
                confirmButtonText: 'confirm',
                cancelButtonText: 'cancel',
                inputPattern: /regExp/,
                inputErrorMessage: 'errormsg'
            }).then(({ value }) => {
                
            }).catch(() => {});
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang="less">
@import '../../style/main.less';

</style>
