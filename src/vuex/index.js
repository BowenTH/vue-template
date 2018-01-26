import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    userInfo : { name: 'bowen',age: 16 },
    login: false,
    sigalPage:false, //全屏
}

export default new Vuex.Store({
    state,
    // getters,
    // actions,
    // mutations,
})