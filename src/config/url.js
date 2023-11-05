import util from "./util.js"
import {utils_customParam_CB, utils_timestamp} from '../utils/utils.js'
import store from '../store/index.js'

// module.exports = {
//   //开发环境
//   develop: {
// 	VIDEO_SEARCH_URL: "https://vip.bljiex.com/api.php?out=jsonp&wd=",
// 	SUFFIX_URL: "cb="+util.customParam_CB()+"&_="+util.timestamp(),
// 	VIDEO_INFO_URL: "https://vip.bljiex.com/api.php?out=jsonp&flag=0&id="
//   },
//   //线上环境
//   release: {
// 	VIDEO_SEARCH_URL: "https://vip.bljiex.com/api.php?",
// 	SUFFIX_URL: "cb="+util.customParam_CB()+"&_="+util.timestamp(),
// 	VIDEO_INFO_URL: "https://vip.bljiex.com/api.php?out=jsonp&flag=0&id="
//   }
// }

//	https://jx.qqwtt.com/
//	https://movie.heheda.top/
// 	https://www.pouyun.com/
// 	https://vip.bljiex.com/   需要Referer
// 	http://vip.momobiji.com/
// 	https://parse.kbcms.net/
/* 解析url */
export const kBASE_URL_JX0 = 'https://jx.qqwtt.com/'
export const kBASE_URL_JX1 = 'https://movie.heheda.top/'
export const kBASE_URL_JX2 = 'https://www.pouyun.com/'
export const kBASE_URL_JX3 = 'https://parse.kbcms.net/'
export const kBASE_URL_JX4 = 'http://vip.momobiji.com/'


/* 视频播放解析url */
const _url_video_parse_url = 'https://json.vipjx.cnow.eu.org/?url='
const _url_video_parse_url_back = 'https://json.2s0.cn:5678/home/api?type=ys&uid=1359749&key=hinotvxHIKMNSXY034&url='

function _customParam() {
	return '&cb=' + utils_customParam_CB() + '&_=' + utils_timestamp()
}

/* 切换 */
export function url_change_baseUrl() {
	let arr = [kBASE_URL_JX0, kBASE_URL_JX1, kBASE_URL_JX2, kBASE_URL_JX3, kBASE_URL_JX4]
	let tm = store
	let base_url = store.state.base_url
	let index = arr.indexOf(base_url)
	let cc = (index += 1)%arr.length
	tm.state.base_url = arr[cc]
	console.log('切换到：'+tm.state.base_url)
}

export function url_base_url() {
	let tm = store
	return tm.state.base_url
}

export function url_home_url() {
	// url_change_baseUrl()
	// return 'so.php'
	return 'https://vip.bljiex.com/so.php'
}

export function url_searchResults_url(keyWords) {
	return 'api.php?out=jsonp&wd='+ keyWords + _customParam()
}

export function url_videoPlayer_url(flag, id) {	
	return 'api.php?out=jsonp&flag=' + flag + '&id=' + id + _customParam()
}

export function url_video_parse_url(url) {
	return _url_video_parse_url + url;
}

export function url_video_parse_url_back(url) {
	return _url_video_parse_url_back + url
}