function timestamp() {
	var date = String(Date.parse(new Date()))
	return date
}

/* translate: 1->01; */
function digits_2(val) {
	if (val < 10) return val = '0' + val
	return val
}

export function currentTime() {
	return theTime()
}


function theTime() {
	const date = new Date()
	return digits_2(date.getHours()) + ':' + digits_2(date.getMinutes()) + ':' + digits_2(date.getSeconds())
}

export function currentDate(containWeek = true) {
	const weekDays = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
	var date = new Date();
	const dayOfWeek = weekDays[date.getDay()];

	let time = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + (containWeek == true ? (" " + dayOfWeek) : '')
	return time
}

function randomNum(n) {
	var res = "";
	for (var i = 0; i < n; i++) {
		res += Math.floor(Math.random() * 10);
	}
	return res;
}


function randomStr() {
	return randomNum(16)
}


function customParam_CB() {
	// jQuery1820604137838421327_1694427293490
	return "jQuery182" + randomStr() + "_" + timestamp()
}


// module.exports = {
// 	timestamp,
// 	customParam_CB
// }