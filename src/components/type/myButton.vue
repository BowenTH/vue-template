<template>
    <div>
        <el-button>default</el-button>
        <el-button type="primary">primary</el-button>
        <el-button type="success">success</el-button>
        <el-button type="info" disabled>info</el-button>
        <el-button type="danger" plain>danger</el-button>
        <el-button type="warning" round>warning</el-button>
        <el-button type="text">text</el-button>
        <hr />
        <el-button-group>
            <el-button type="primary" icon="el-icon-arrow-left"></el-button>
            <el-button type="primary" icon="el-icon-arrow-right"></el-button>
        </el-button-group>
        <hr>
        <el-button type="success" loading size="medium"></el-button>
        <el-button type="success" loading size="small"></el-button>
        <el-button type="success" loading size="mini"></el-button>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                key: 'value'
            }
        },
    }
</script>

<style scoped>
.el-button{
    margin: 10px 5px;
}
</style>