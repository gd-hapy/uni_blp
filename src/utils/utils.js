export function str_to_json(res) {
	debugger
	if (!res || typeof(res) !== 'string') return
	// handle str to json
	let dataStr = "{" + res.split('({')[1].split('})')[0] + "}"
	return result = JSON.parse(dataStr)
}