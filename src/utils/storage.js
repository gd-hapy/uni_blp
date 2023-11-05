const kHotSearch_html_key = "__kHotSearch_html_key__"//html key
const kHotSearch_key = "__kHotSearch_key__"//热门搜索 key
const kHotSearch_rank100_key = "__kHotSearch_rank100_key__"//搜索排行榜100 key

/* 保存html文档 */
export function storage_save_html(data) {
	_saveData(kHotSearch_html_key, data)
}

/* 获取html文档 */
export function storage_get_html() {
	_getData(kHotSearch_html_key)
}

/* 保存热门搜索 */
export function storage_save_hotSearch(data) {
	// debugger
	_saveData(kHotSearch_key, data)
}

/* 获取热门搜索 */
export function storage_get_hotSearch() {
	// debugger
	return _getData(kHotSearch_key)
}

/* 保存搜索排行榜100 */
export function storage_save_hotSearch_rank100(data) {
	_saveData(kHotSearch_rank100_key, data)
}

/* 获取搜索排行榜100 */
export function storage_get_hotSearch_rank100() {
	return _getData(kHotSearch_rank100_key)
}

function _saveData(key, data) {
	uni.setStorageSync(key, data)
}

	
function _getData(key) {
	return uni.getStorageSync(key)
}

/* 清空热门搜索 */
function _clear_hotSearch() {
	uni.clearStorageSync()
}
