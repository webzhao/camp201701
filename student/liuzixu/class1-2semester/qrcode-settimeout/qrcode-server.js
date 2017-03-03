
const express = require('express');
const app = express();

function generateCode(){
  var code = ('' + Math.random()).slice(-8);
  return code;
}

var code = generateCode();//生成二维码
var previousCode = code;

setInterval(() => {
  code = generateCode();
  //延迟2秒更新，防止网络延迟，在2秒内新旧两个code都可用
  setTimeout(() => previousCode = code, 2000);
}, 10000);

app.get('/qrcode', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  //下面这句是新加的哦！！！
  res.send({code,time:5000});
});

app.get('/check/:code', function(req, res) {
  var checkCode = req.params.code;
  var msg = '验证不通过';
  if(checkCode === code || checkCode === previousCode)
    msg = '验证通过';
  res.send(msg);
});

app.listen(9999);
