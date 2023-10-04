import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//	https://jx.qqwtt.com/
//	https://movie.heheda.top/
// 	https://www.pouyun.com/
const state = {//要设置的全局访问的state对象
	loading: false,// 是否正在刷新
	base_url: '',// 当前base_url
};

const store = new Vuex.Store({
    state
});

export default store;