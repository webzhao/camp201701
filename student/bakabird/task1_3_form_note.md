# 表单设计

[针对的原页面](https://apply.mcard.boc.cn/apply/pc/mainAppi/showIdentity)

[RDD的作业](/Users/yangdawei2gwy/learning/360Front/camp201701-master/student/bakabird/task1_3_form.html)

## 原页面存在的问题

> 根据 [https://developers.whatwg.org/forms.html#forms](https://developers.whatwg.org/forms.html#forms)有:
> 
> ...
> The `label` text and the control itself go inside the `label` element.
> Each part of a form is considered a paragraph, and is typically separated from other parts using `p` elements. Putting this together, here is how one might ask for the customer's name:
> ...
> 
> ```html
<form>
<p><label>Customer name: <input></label></p>
</form>
```

1. label 与 对应的 input  的位置放置关系。
	* ✅`label` 应该包着其对应的`input`/`select` 。
	* ❌`label`和`input`分开，是相邻的兄弟节点。（原页面）

2. 对form内部的各个标签进行分组。
	* ✅最常把她们看作段落使用`p`来进行划分。
	* ❌使用`ul>li`来划分。（像我想的）
	* ❌不划分／使用`div.className`来划分。（原页面）

