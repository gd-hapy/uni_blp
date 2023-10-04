import util from "./util.js"

module.exports = {
  //开发环境
  develop: {
	VIDEO_SEARCH_URL: "https://vip.bljiex.com/api.php?out=jsonp&wd=",
	SUFFIX_URL: "cb="+util.customParam_CB()+"&_="+util.timestamp(),
	VIDEO_INFO_URL: "https://vip.bljiex.com/api.php?out=jsonp&flag=0&id="
  },
  //线上环境
  release: {
	VIDEO_SEARCH_URL: "https://vip.bljiex.com/api.php?",
	SUFFIX_URL: "cb="+util.customParam_CB()+"&_="+util.timestamp(),
	VIDEO_INFO_URL: "https://vip.bljiex.com/api.php?out=jsonp&flag=0&id="
  }
}


// https://vip.bljiex.com/api.php?out=jsonp&flag=3&id=16041&_=1693991493204

// https://vip.bljiex.com/api.php?out=jsonp&wd=%E5%85%89%E8%8D%A3%E6%97%B6%E4%BB%A3&cb=jQuery182044584402530265166_1694427316382&_=1694427316386


// https://vip.bljiex.com/api.php?out=jsonp&flag=0&id=43084&cb=jQuery1820604137838421327_1694427293490&_=1694427388739



//// new 
// https://vip.bljiex.com/api.php?out=jsonp&wd=%E5%B9%B3%E5%87%A1%E4%B9%8B%E8%B7%AF&cb=jQuery18207311869167954299_1695409634898&_=1695409634901
// 请求方法:
// GET



// https://vip.bljiex.com/api.php?out=jsonp&flag=2&id=50876&cb=jQuery18209472083540549927_1695409634320&_=1695409652972
// 请求方法:
// GET


// https://dm.xbqgx.com/api.php
// 请求方法:
// GET
