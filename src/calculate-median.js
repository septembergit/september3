function calculate_median(arr) {
	var result=arr.filter(function(item,index,array){
		return index%2===1;
	});
	var total=result.reduce(function(prev,cur){
        return prev+cur;
	});
	var ave=total/result.length;
	return ave;
}
module.exports = calculate_median;
