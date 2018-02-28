<template>
    <div>
        <li v-for="book in data" :key="book.uid">
            {{book.id}} {{book.uid}} {{book.name}} {{book.email}}
            <img :src="book.image" :alt="book.id">
        </li>
    </div>
</template>

<script>
import  Mock from 'mockjs'
export default {
    data() {
        return {
            data: 'mock'
        }
    },
    created(){
        this.$http.get('/book')
        .then(res=>{
            this.data = res.data.books
        }) 
    },
    methods:{

    }
}
</script>

<style scoped>

</style>