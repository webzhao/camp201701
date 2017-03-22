[颜色排序](https://leetcode.com/problems/sort-colors/?tab=Description)
***
##### 第一版
```javascript
function sortColor (color) {
  var res0 = [];
  var res1 = [];
  var res2 = [];
  for(var item=0;item<color.length;item++){
  	if(color[item] === 0){
  		res0.push(0);
  	}
  	else if(color[item] === 1){
  		res1.push(1);
  	}
  	else {
  		res2.push(2);
  	}
  }
  var res = res0.concat(res1,res2);
  return res;
}
```
思路就是想把0,1,2分开，装到不同的数组里，最后再拼接。
***
##### 第二版
```javascript
function sortColor (color){
	var res = new Array(color.length);
	for(var i=0;i<res.length;i++){
		res[i] = 1;
	}
	var mark0 = 0,
		mark2 = color.length-1;
	for(var item=0;item<color.length;item++){
  	if(color[item] === 0){
  		res[mark0] = 0;
  		mark0++;
  	}
  	else if(color[item] === 2){
  		res[mark2] = 2;
  		mark2--;
  	}
	}
	return res;
}
```
这一个版本我们用标记来节省空间复杂度，因为第一版用了三个数组。这一次我们的大致思路是，先将数组初始化为1，然后0和2用数组的栈方法依次加进去。
***
##### 第三版
```javascript
function sortColor (color) {
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
}
```
第三版其实是受到了高票答案的启发。
我们可以只在当前数组上做这件事情。这样的话一定会涉及到交换数组项。可是怎么个交换法呢？
其实这个方法运用了一个思想，就是把这个数组的0拿出来换到前面去，2拎出来换到后面，一直换到所有项都被换过一遍。
而且注意这里判断的时候要先判断2，因为先判断0会导致连着两次的交换只交换一次，漏掉一个项。
但是不会有先交换0的情形出现，因为交换0是往前换，前面是不会有2的，前面的数已经处理过了。
