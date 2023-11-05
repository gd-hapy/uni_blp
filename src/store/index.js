import Vue from 'vue';
import Vuex from 'vuex';
import { kBASE_URL_JX0 } from '../config/url';

Vue.use(Vuex);

const state = {//要设置的全局访问的state对象
	loading: false,// 是否正在刷新
	base_url: kBASE_URL_JX0,// 当前base_url
};

const store = new Vuex.Store({
    state
});

export default store;