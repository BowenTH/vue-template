<template>
    <div>
        <span id="note">{{ data }} {{id}}</span>
    </div>
</template>

<script>
    import myMixin from '@/mixin/index';
    export default {
        data() {
            return {
                data: 'this is mine page'
            }
        },
        mixins: [myMixin]
    }
</script>

<style lang="less" scoped>
div{
    #note{
        color: rgb(2, 20, 14);
    }
}
</style>