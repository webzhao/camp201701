/**
 * [noRepeat description]
 * @param  {[string]} str [description]
 * @return {[string]} res [description]
 */
function noRepeat (str){
	var arr = str.split(',');
	var arr1 = [];
	var cur = '';
	// for(var i = 0;i < arr.length-1 ; i++){
	// 	for(var j = i+1;j < arr.length ; j++){
	// 		if(arr[i] === arr[j]){
  //       //从数组中删除该项
	// 			arr.splice(j,1);
	// 			j--;
	// 		}
	// 	}
	// }
	arr.sort();
	arr.forEach(function(item){
		if(item === cur){
			// arr.splice(arr.indexOf(item),1);
			return;
		}
		else{
			arr1.push(item);
			cur = item;
		}
	});
	return arr1.join(',');
}
var str = noRepeat('游泳,跳舞,唱歌,游泳,唱歌,游泳'); //for test
console.log(str);
