/**
* mixin 混合组件的方法，生命周期及data
*
*/

const myMixin = {
    data() {
        return {
            id: 'myMinxin'
        }
    },
    methods:{
        sayId(){
            console.log(this.id)
        }
    },
    mounted:function(){
        console.log('I am coming from mixin')
    }
}

export default myMixin