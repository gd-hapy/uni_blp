function header(method="GET") {
	var ref = btoa("Referer")
	return {
		// "authority":"vip.bljiex.com",
		// "method":"GET",//method,
		// "path":"/api.php?out=jsonp&flag=3&id=16041&cb=jQuery182024238878159534272_1693991492853&_=1693991493204",
		// "scheme":"https:",
		// "Accept":"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
		// "Accept-Encoding":"gzip, deflate, br",
		// "Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
		// "Cookie":"list_num=0; live_num=; reload=https://vip.bljiex.com/",
		// "Referer":"https://vip.bljiex.com/",
		// "Sec-Fetch-Dest":"empty",
		// "Sec-Fetch-Mode":"cors",
		// "Sec-Fetch-Site":"same-origin",
		// "User-Agent":"Mozilla/5.0 (X11; Linux aarch64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.188 Safari/537.36 CrKey/1.54.250320",
		// "X-Requested-With":"XMLHttpRequest"
	}
}

function header(requestUrl) {
	debugger
	var ref = btoa("Referer")
	return {
		// "authority":"vip.bljiex.com",
		// "method":"GET",//method,
		// "path":"/api.php?out=jsonp&flag=3&id=16041&cb=jQuery182024238878159534272_1693991492853&_=1693991493204",
		// "scheme":"https:",
		// "Accept":"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
		// "Accept-Encoding":"gzip, deflate, br",
		// "Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
		// "Cookie":"list_num=0; live_num=; reload=https://vip.bljiex.com/",
		// ref: requestUrl,
		Authorization: "Bearer YOUR_ACCESS_TOKEN", // 设置 Authorization

		// "Sec-Fetch-Dest":"empty",
		// "Sec-Fetch-Mode":"cors",
		// "Sec-Fetch-Site":"same-origin",
		// "User-Agent":"Mozilla/5.0 (X11; Linux aarch64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.188 Safari/537.36 CrKey/1.54.250320",
		// "X-Requested-With":"XMLHttpRequest"
	}
}



module.exports = {
	header,
}


// module.exports = {
// 	cusHeader: {
// 		"authority":"vip.bljiex.com",
// 		"method":method,
// 		"path":"/api.php?out=jsonp&flag=3&id=16041&cb=jQuery182024238878159534272_1693991492853&_=1693991493204",
// 		"scheme":"https:",
// 		"Accept":"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01",
// 		"Accept-Encoding":"gzip, deflate, br",
// 		"Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
// 		"Cookie":"list_num=0; live_num=; reload=https://vip.bljiex.com/",
// 		"Referer":"https://vip.bljiex.com/",
// 		"Sec-Fetch-Dest":"empty",
// 		"Sec-Fetch-Mode":"cors",
// 		"Sec-Fetch-Site":"same-origin",
// 		"User-Agent":"Mozilla/5.0 (X11; Linux aarch64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.188 Safari/537.36 CrKey/1.54.250320",
// 		"X-Requested-With":"XMLHttpRequest"
// 	}
// }