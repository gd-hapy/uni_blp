export function str_to_json(res) {
	debugger
	if (!res || typeof(res) !== 'string') return
	// handle str to json
	let dataStr = "{" + res.split('({')[1].split('})')[0] + "}"
	return result = JSON.parse(dataStr)
}

// export function handleLoading(this) {
// 	debugger
// 	this.$store.state.loading = false
// }

export function utils_platform() {
	let native;
	let p = navigator.platform;
	let u = navigator.userAgent;
	let is_android = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
	let is_ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	if (p == "Win32" || p == "Win64" || p == "MacPPC" || p == "MacIntel" || p == "X11" || p == "Linux i686") {//PC调试环境
	    console.log('PC环境--供PC端调试');
	    // native = new EmptyNative();
	}
	else {
	    if (is_android) {//Android终端
	        console.log('Mobile环境--Android移动端');
	        // native = new AndroidNative();
	    }
	    else if (is_ios) {//IOS终端
	        console.log('Mobile环境--IOS移动端');
	        // native = new IOSNative();
	    }
	}
	// export default native;
}

/* 解析 获取热门搜索 */
export function utils_parseHtml_to_hotSearch(html){
	// debugger
	let arrayA = html.match(/<a[^>]*>([\s\S]*?)<\/a>/g);
	let results = [];
	if (arrayA && arrayA.length > 0) {
	    results = arrayA.map(item => {
	        let array = item.match(/<a[^>]*>([\s\S]*?)<\/a>/);
			return array[1]
	    });
	}
	let index_ = results.indexOf('更多...')
	let index = results.indexOf('更多')
	let curIndex = 10
	if (index_ != -1) {
		curIndex = index_ + 1
	} 
	if (index != -1) {
		curIndex = index + 1
	}
	return results.slice(0, curIndex)
}

/* 解析 获取排行榜100 */
export function utils_parseHtml_to_rankList100(html) {
	let arr = html.split('title=\"')
	// debugger
	let that = this
	let result = arr.map(item => {
		let subArr = item.split('\";')
		return subArr[0]
	})
	return result.slice(1)
}
			
/* 判断字符串是否包含中文 */
export function utils_hasChinese(str) {
	return /[\u4E00-\u9FA5]+/g.test(str)
}

/* 判断字符串是否全是中文 */
export function utils_isAllChinese(str) {
	 return /^[\u4E00-\u9FA5]+$/.test(str)
}


export function utils_timestamp() {
	var date = String(Date.parse(new Date()))
	return date
}


function randomNum(n){
  var res = "";
  for(var i=0;i<n;i++){
    res += Math.floor(Math.random()*10);
  }
  return res;
}

 
function randomStr() {
	return randomNum(16)
}


export function utils_customParam_CB() {
	// jQuery1820604137838421327_1694427293490
	return "jQuery182" + randomStr() + "_" + utils_timestamp()
}