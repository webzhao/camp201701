###找茬

[搜狐新闻](http://news.sohu.com/20161207/n475233676.shtml)

1. 导航
<div id="nav" class="area"></div>

<nav></nav>


2. 新闻主要内容
<div class="content-wrapper grid-675"></div>

<article></article>


3. 主要内容之外的侧边栏 
<div class="rightar-apper grid-300></div>

<aside></aside>

4. 页脚
<div class="content-footer"></div>

<footer></footer>

###表单设计

[中信信用卡在线申请](https://creditcard.ecitic.com/citiccard/cardishop/jsp/userInfo.jsp)

1. 警示标语
<div class="r_d">
        <span class="lll"></span>
        <span class="rrr"></span>
        <p>
            <strong class="orange">尊敬的客户</strong>，为保证您的信用卡申请，请务必严格按照身份证上的资料进行填写，感谢您对我们中信信用卡的支持。
        </p>
</div>
    
<p>
   <strong class="orange">尊敬的客户</strong>，为保证您的信用卡申请，请务必严格按照身份证上的资料进行填写，感谢您对我们中信信用卡的支持。
</p>
    
2. 表单
<dl class="c">
    	<dt><span class="c_p_c_a">中文姓名：</span></dt>
    	<dd id="dd_name"><input type="text" id="name" class="wid_154 txt" maxlength="13" size="22"></dd>					
    	<dt><span class="c_p_c_a">姓名拼音：</span></dt>
    	<dd><input type="text" id="xmpy" class="wid_154 txt" maxlength="30" size="22">请核实您的姓名拼音，如不正确可自行修改</dd> 	
        <dt><span class="c_p_c_a">身份证号码：</span></dt>
        <dd><input type="text" name="mainCard_cetNo" id="idcard" class="wid_154 txt" maxlength="18" size="22" value="" onkeydown="enterEvent(event,init_htmlarray);"></dd>
        <dt><span>身份证签发机关：</span></dt>
        <dd><input type="text" id="depart" class="wid_190 txt" maxlength="29/"></dd>
        <dt><span>身份证有效期限：</span></dt>
        <dd><input id="limitedDate_s" type="text" size="10" onclick="Datepick(this)" readonly="readonly">—<input id="limitedDate_e" type="text" size="10" onclick="Datepick(this)" readonly="readonly"></dd>
        <dt><span class="c_p_c_a">手机号码：</span></dt>
        <dd><input type="text" name="mobilePhone" id="mobilePhone" class="wid_154 txt number" maxlength="11"></dd>
        <dt><span></span></dt>
        <dd><button class="button" title="点击我获取手机验证码" id="btn_getPhoneCode" onclick="getPhoneValidateCode()"><span id="btnValue">点击我获取手机验证码</span></button></dd>
        <dt><span class="c_p_c_a">短信验证码：</span></dt>
        <dd><input type="text" name="check_num" class="wid_154 txt" id="check_num" maxlength="6"></dd>
</dl>
    
<div class="form">
     <p>中文姓名：<input type="text" id="name" class="wid_154 txt" maxlength="13" size="22"></p>
     <p>姓名拼音：<input type="text" id="xmpy" class="wid_154 txt" maxlength="30" size="22">请核实您的姓名拼音，如不正确可自行修改</p>
     <p>身份证号码：<input type="text" name="mainCard_cetNo" id="idcard" class="wid_154 txt" maxlength="18" size="22" value="" ></p>
     <p>身份证签发机关：<input type="text" id="depart" class="wid_190 txt" maxlength="29/">></p>
     <p>身份证有效期限：：<input id="limitedDate_s" type="text" size="10" onclick="Datepick(this)" readonly="readonly">—<input id="limitedDate_e" type="text" size="10" readonly="readonly"></p>
</div>
    
    

