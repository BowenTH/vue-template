<template>
    <div>
        <el-row justify="space-around" type="flex" align="middle">
          <el-col :span="6" style="background-color:#4093ff!important;"></el-col>
          <el-col :span="6"> <i class="el-icon-upload"></i> </el-col>
          <el-col :span="6"> <el-button type="success" icon="el-icon-search">完成</el-button></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"></el-col>
          <el-col :span="8"></el-col>
          <el-col :span="8"></el-col>
          <el-col :span="8"></el-col>
          <el-col :span="8" :offset="2">offset</el-col>
          <el-col :span="8" :offset="2"></el-col>
        </el-row>

        <el-row :gutter="30">
          <el-col :span="6">12</el-col>
          <el-col :span="6">12</el-col>
          <el-col :span="6">gutter</el-col>
        </el-row>
        
        <el-row type="flex" justify="space-around">
          <el-col :span="6"></el-col>
          <el-col :span="6"></el-col>
          <el-col :span="6"></el-col>
        </el-row>
        <el-row type="flex" justify="center" align="middle" style="height:100px;background-color:#999;">
          <el-col :span="12"></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.el-col{
    margin-top: 5px;
    height: 50px;
    background-color: #888;
    border-radius: 10px;
    /* text-align: center; */
    color: white;
}
</style>