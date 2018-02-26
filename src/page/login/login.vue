<template>
    <div>
        <h1>{{type}} {{getVersion}}</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                type: 'login'
            }
        },
        computed: {
            getVersion() {
                console.log(this.$route)
                return this.$route.params.id 
            }
        },
    }
</script>

<style scoped>

</style>