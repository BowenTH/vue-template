<template>
    <div>
        <el-radio-group v-model="key">
          <el-radio label="x"></el-radio>
          <el-radio label="y"></el-radio>
        </el-radio-group>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="x"></el-checkbox>
          <el-checkbox label="y" border></el-checkbox>
        </el-checkbox-group>
        <el-row>
          <el-col :span="8">
            <el-input v-model="inputText" placeholder="input" clearable prefix-icon="el-icon-search"></el-input>
          </el-col>
          <el-col :span="8">
            <el-input v-model="inputText" placeholder="input" clearable suffix-icon="el-icon-upload"></el-input>
          </el-col>
          <el-col :span="6">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容"
                v-model="textarea3">
                </el-input>
          </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                key: 'y',
                checkList:['x','y'],
                inputText:'',
            }
        },
    }
</script>

<style scoped>

</style>