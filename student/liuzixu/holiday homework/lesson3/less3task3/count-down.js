/**
 * [countDown description]
 * @param  {[string]} month [description]
 * @param  {[string]} day   [description]
 * @param  {[string]} date  the date of start
 * @return {[array]}       return an array of object:{date: '2017/2/1',daysBefore: 40}
 */
function countDown (month , day , date) {
	var res = [];
  //循环处理日期，是周三则push，计算距离今天的日期
	var date1 = new Date(date);
	for(; date1.getMonth() < month ; ){
		if(date1.getDay() === 3){
			res.push({
				date:date1.getFullYear() + '/' + (date1.getMonth()+1) + '/' + date1.getDate(),
				daysBefore:(date1 - date)/1000/60/60/24
			});
			date1.setDate(date1.getDate()+7);
			continue;
		}
		else{
			date1.setDate(date1.getDate()+1);
			continue;
		}
	}
	return res;
}
var date = new Date('2017-2-7');//for test
var arr = countDown(2,3,date);
console.log(arr);
