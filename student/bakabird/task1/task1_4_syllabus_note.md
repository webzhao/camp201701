# syllabus笔记

[作业](/Users/yangdawei2gwy/learning/360Front/camp201701-master/student/bakabird/task1_4_syllabus.html)

## br	

 使用区域：
 
* 单元格中的内容
* `<td><p>!😷!</p></td>`

笔记：
 
* 勘误：不像之前想的那样属于应该减少使用的标签。（涉及了页面表现部分）
* 新知：
	* <q>W3C: 提示：请使用 <br /> 标签来输入空行，而不是分隔段落。</q>
	* 比如说一首诗词、歌词。


## 表格制作

* 临摹：
	* 自上而下一行一行来
	* 以最小单位的单元格为基准来定出基本的行数、列数。》
	* 》有被合并的单元格省略掉**不用写**
* 制作：直接使用HTML制作表格比较麻烦，特别是使用了合并单元格的话。
	* 可以先使用其他软件将表格绘制出来，然后在按照绘制出来的成果临摹到html上。
	* 应该会有比较方便的工具帮助我们制作表格吧？

## border-spacing

使用区域：

* `<table>`

笔记：

* default: border-spacing : 2px;
* before:![](/Users/yangdawei2gwy/Desktop/屏幕快照 2016-12-08 下午6.39.08.png)
* after:![](/Users/yangdawei2gwy/Desktop/屏幕快照 2016-12-08 下午6.39.20.png)


## 疑惑

1. 【js】为什么获取了 time元素 之后，它的nodeValue为空呢？
2. 【js】都有什么方法能够剔除掉数组中的重复项？
	*  【已用】使用`{}`，在添加的时候判断 以该值为key的数据存不存在。 `if(obj[data]){}` 
	*  ...

## 更新

* 12.11:
	* 添加了各种考试时间
		* 【生】疑惑
	* 添加分列区别
	* 给考试时间添加了`<time>`