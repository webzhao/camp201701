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
	* ✅也可以使用`label[for=X]`+`input[id=X]`来“配对”。（我觉得，虽然规范好像没有谈到这点（或则我没看到））
	* ✅`label` 应该包着其对应的`input`/`select` 。
	* 效果：点击`label`中的文字part => focus到`label`的控制（?）part。

2. 对form内部的各个标签进行分组。
	* ✅最常把她们看作段落使用`p`来进行划分。
	* ❌使用`ul>li`来划分。（像我想的）
	* ❌不划分／使用`div.className`来划分。（原页面）


## 笔记

### 当一个`label`里面有两个control时：


```html
<!--@1 裸label-->
<label>手机动态验证码
	<button type="button">获得手机验证码</button>
	<input  type="text" placeholder="输入验证码" maxlength="6" required="required">
</label>

<!--@2 添加 label[for= inputCode] + input[id= inputCode] -->
<!--进行钦定🐸-->
<label for="inputCode">手机动态验证码
	<button type="button">获得手机验证码</button>
	<input id="inputCode" type="text" placeholder="输入验证码" maxlength="6" required="required">
</label>

<!--@3 label[for=''] -->
<!--虽然有点蠢我还是放上来了。-->
<label for="">手机动态验证码
	<button type="button">获得手机验证码</button>
	<input id="inputCode" type="text" placeholder="输入验证码" maxlength="6" required="required">
</label>

```

* `label`不设置`for`属性时：`label`绑定`label`第一个子节点（这里就是`button`啦）。
* `label`设置了`for`属性时，如果找不到🎯“配偶”，她不会“将就”。

### 当`label`内含`label`时：

* 含一个`label`：
	* 能够foucs到最里面的control
* 含多个`label`：
	* focus到子节点最里面的control

	
## 疑惑

1. 最后发现`label`已经分好了。感觉没有必要再包一层`p`了。

2. pattern="^\d{6}$ "代表什么呢？