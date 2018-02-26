import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
	userInfo: {name:'你的名字',age:'23岁'}, //用户信息
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})