/**   75
 * [sortColor description]
 * @param  {[type]} color [description]
 * @return {[type]}       [description]
 */
function sortColor (color) {
	// var second=A.length-1, zero=0;
	// for (var i=0; i<=second; i++) {
	// 	while (A[i]==2 && i<second) {
	// 		var temp = A[i];
	// 		A[i] = A[second];
	// 		A[second--] = temp;
	// 	}
	// 	while (A[i]==0 && i>zero) {
	// 		var temp1 = A[i];
	// 		A[i] = A[zero];
	// 		A[zero++] = temp1;
	// 	}
	// }
	// return A;
  //level 1
	// var res0 = [];
	// var res1 = [];
	// var res2 = [];
	// for(var item=0;item<color.length;item++){
	// 	if(color[item] === 0){
	// 		res0.push(0);
	// 	}
	// 	else if(color[item] === 1){
	// 		res1.push(1);
	// 	}
	// 	else {
	// 		res2.push(2);
	// 	}
	// }
	// var res = res0.concat(res1,res2);
	// return res;

  // level2 上面用了三个数组，空间复杂度提升。我们可以尝试用标记位来节省
	// var res = new Array(color.length);
	// for(var i=0;i<res.length;i++){
	// 	res[i] = 1;
	// }
	// var mark0 = 0,
	// 	mark2 = color.length-1;
	// for(var item=0;item<color.length;item++){
  // 	if(color[item] === 0){
  // 		res[mark0] = 0;
  // 		mark0++;
  // 	}
  // 	else if(color[item] === 2){
  // 		res[mark2] = 2;
  // 		mark2--;
  // 	}
	// }
	// return res;

	// level3 上面一个办法还是新建了一个数组，能不能在本数组上完成呢？意味着只能交换位置来实现
	//实际上就是模拟把0取出往前扔，把2取出往后扔。同样需要两个标志位
	var mark0 = 0,
		mark2 = color.length-1;
	for(var item = 0;item<=mark2;item++){//因为只有可能把2换到0的位置，没有把0换到2的可能性 所以 先比较2
		while(color[item] === 2 && item<mark2){
      // [color[item],color[mark2]] = [color[mark2],color[item]];
			var temp1 = color[item];
			color[item] = color[mark2];
			color[mark2] = temp1;
			mark2--;
		}
		while(color[item] === 0 && item>mark0){
			// [color[item],color[mark0]] = [color[mark0],color[item]];
			var temp = color[item];
			color[item] = color[mark0];
			color[mark0] = temp;
			mark0++;
		}
	}
	return color;
}
var arr = sortColor([1,1,1,0,2,0]);
console.log(arr);
