function timestamp() {
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


function customParam_CB() {
	// jQuery1820604137838421327_1694427293490
	return "jQuery182" + randomStr() + "_" + timestamp()
}


module.exports = {
	timestamp,
	customParam_CB
}

