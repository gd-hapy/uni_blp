import axios from 'axios';
import store from '../store/index.js'

// const {
// 	develop,
// 	release
// } = require('@/config/url.js');

// import cusHeader from '../config/requestConfig.js'


//根据环境变量获取api地址
// https://vip.bljiex.com/api.php?out=jsonp&wd=%E5%85%89%E8%8D%A3%E6%97%B6%E4%BB%A3&cb=jQuery182044584402530265166_1694427316382&_=1694427316386
// let url11 = develop.VIDEO_SEARCH_URL + "%E5%85%89%E8%8D%A3%E6%97%B6%E4%BB%A3" + develop.SUFFIX_URL;
// https://vip.bljiex.com/api.php?out=jsonp&flag=3&id=16041&_=1693991493204


// https://jx.qqwtt.com/api.php?out=jsonp&wd=%E6%96%97%E7%BD%97%E5%A4%A7%E9%99%86&cb=jQuery18208780301663630536_1696307237202&_=1696307237233
//	https://jx.qqwtt.com/
//	https://movie.heheda.top/
// 	https://www.pouyun.com/
let tm = store

let baseURL = tm.state.base_url//'https://movie.heheda.top/'//'api/'///'https://jx.qqwtt.com/'//api/'//https://jx.qqwtt.com/'//process.env.HOST + process.env.PORT && Number(process.env.PORT)// window.location.origin //'http://localhost:8082'
// url: 'xiaomi.php?out=jsonp&wd=%E5%85%89%E8%8D%A3%E6%97%B6%E4%BB%A3',

// axios.defaults.adapter = function(config) {
// 	return new Promise((resolve, reject) => {
// 		var settle = require('../../node_modules/axios/lib/core/settle');
// 		var buildURL = require('../../node_modules/axios/lib/helpers/buildURL');
// 		uni.request({
// 			method: config.method.toUpperCase(),
// 			url: buildURL(config.url, config.params, config.paramsSerializer),
// 			header: config.headers,
// 			data: config.data,
// 			dataType: config.dataType,
// 			responseType: config.responseType,
// 			sslVerify: config.sslVerify,
// 			complete: function complete(response) {
// 				response = {
// 					data: response.data,
// 					status: response.statusCode,
// 					errMsg: response.errMsg,
// 					header: response.header,
// 					config: config
// 				};
// 				settle(resolve, reject, response);
// 			}
// 		})
// 	})
// }
console.log("baseURL:", baseURL, "++++++++++++++++++++++++");
// axios.defaults.adapter = require('axios/lib/adapters/xhr');
class HttpRequest {
	constructor() {
		this.baseURL = baseURL; // 从环境变量中获取api地址
		this.timeout = 300000;
	}
	mergeOptions(options) {
		return {
			baseURL,
			timeout: 300000,
			...options,
		};
	}
	request(options) {
		const instance = axios.create();
		this.setInterceptors(instance);
		const opts = this.mergeOptions(options);
		return instance(opts);
	}
	get(url, data = {}, outHeaders = {}) {
		// console.log(data, "data+++++++++++++");
		// debugger
		// let _url = 'api/' + encodeURI(url)
		// this.baseURL = tm.state.base_url
		let _url = encodeURI(url)
		console.log('axios->requestUrl:', _url, tm.state.base_url)
		return this.request({
			dataType: "json",
			method: "get",
			url: _url,
			params: {
				...data
			}, // get参数可以直接展开
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
				'Access-Control-Allow-Origin':'*'
				// 'Content-Type':'application/x-www-form-urlencoded'
			},
		});
	}
	post(url, data = {}, outHeaders = {}) {
		// 请求体中 {}
		// debugger
		const _url = encodeURI(url)
		return this.request({
			method: "post",
			url: _url,
			data, // post要求必须传入data属性
			headers: {},
		});
	}
	// 设置拦截器
	setInterceptors(instance) {
		// 请求拦截器
		instance.interceptors.request.use((config) => {
			// config.withCredentials = true;
			// uni.showLoading({
			// 	title: '加载中...'
			// })

			config.headers['Access-Control-Allow-Origin'] = '*';
			config.headers = {
				...config.headers,
			};
			return config;
		});
		// 响应拦截器
		instance.interceptors.response.use(
			(res) => {
				// debugger
				// uni.hideLoading();
				let {
					data
				} = res;
				// console.log("请求获取data", data)
				if (data) {
					//console.log('data=============', data)
					return Promise.resolve(data);
				} else {
					Promise.resolve(null)
				}
			},
			(err) => {
				console.error("axios报错", err);
				// debugger
				// uni.hideLoading();
				return Promise.reject(err);
			}
		);
	}
}
export default new HttpRequest();