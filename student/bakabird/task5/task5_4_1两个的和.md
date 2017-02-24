# [两个的和](https://leetcode.com/problems/two-sum/?tab=Description)


从一组整数中，返回能够构成目标数的两个整数。

1. 输入的整数仅有唯一解法。
2. 不重复使用同一个数。

**例子：**

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

## 思路

类似*背包问题*

* 背包的容量 = 目标数
* 要装的东西 = 一组整数

**不同：**

因为已经确定是两个整数的和。即背包最多装两个东西

=》

* 一次循环负责第一个数
* 嵌套一次循环负责另一个数

**实现：**

```javascript
var twoSum = function(nums, target) {
    var ret = [0,0];
    for(var i=0;i<nums.length - 1;i++){ // i -> 从 第一个 到 倒数第二个
        for(var j=i+1;j<nums.length;j++){ // j  -> 从 第i个 到 最后一个
            if(nums[i]+nums[j] == target){
                return [i,j];
            }       
        }
    }
};
```

**分析：**

最差情况循环次数：(n * (n - 1)) / 2

**继续优化：**

暂时没有思路。



