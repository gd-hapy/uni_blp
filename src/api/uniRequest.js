import {utils_customParam_CB, utils_timestamp} from '../../src/utils/utils.js'
import store from '../../src/store/index.js'


// https://www.pouyun.com/api.php?out=jsonp&wd=%E6%96%97%E7%BD%97%E5%A4%A7%E9%99%86&cb=jQuery18209932111059945175_1696425655406&_=1696425655434
// https://www.pouyun.com/api.php?out=jsonp&flag=5&id=76060&cb=jQuery182006412466474693623_1696425683840&_=1696425684373



// https://jx.qqwtt.com/api.php?out=jsonp&wd=%E6%96%97%E7%BD%97%E5%A4%A7%E9%99%86&cb=jQuery18202740543482104514_1696425761584&_=1696425761613
// https://jx.qqwtt.com/api.php?out=jsonp&flag=7&id=64867&cb=jQuery18204477326097365393_1696425777538&_=1696425777946


// https://movie.heheda.top/api.php?out=jsonp&wd=%E6%96%97%E7%BD%97%E5%A4%A7%E9%99%86&cb=jQuery18208175995271188583_1696425900091&_=1696425900117
// https://movie.heheda.top/api.php?out=jsonp&flag=0&id=75159&cb=jQuery182011813079058883935_1696425847228&_=1696425929604

//'api/'//'https://jx.qqwtt.com/'//tmp.state.base_url//'https://jx.qqwtt.com/'
// const BASE_URL = '/api'//'https://movie.heheda.top/'////'https://jx.qqwtt.com/'//tmp.state.base_url//'https://jx.qqwtt.com/'
export function request(requestUrl, method='GET', data={}){
	let tmp = store
	// debugger
	const BASE_URL = tmp.state.base_url
	let _url = BASE_URL + requestUrl
	if (requestUrl.startsWith('http')) {
		// debugger
		_url = requestUrl;
	}
	// debugger
	let url = encodeURI(_url)
	console.log('request->url:', url)
	tmp.state.loading = true
	// uni.showLoading({
	// 	title:'加载中'
	// })
	console.log('loading:', tmp.state.loading)
	return new Promise((resolve,reject) => {
		uni.request({
			url:url,
			method:method,
			data:data,
			//带token发送请求
			header : {
			// 	'x-token':getLocal('token')
			},
			success:(res) => {
				let {data} = res
				tmp.state.loading = false
				// uni.hideLoading()
				resolve(data)
			},
		    timeout: 50000,
			complete:(res) => {
				// uni.hideLoading()
				tmp.state.loading = false
			},
			fail:(err) => {
				tmp.state.loading = false
				console.log('uni.request:' + err)
				// uni.hideLoading()
				reject(err)
			}
		})
	})
}