/*
* addEventListener批量处理API 高阶函数__multi__
*
*/

// function __multi__ (fn) {
//   return function(eventName,callback){
//
//   }
// }
// var addEventListener = __multi__(Element.addEventListener);

window.onload = function(){

function User (name,age) {
    this.name = name;
    this.age = age;
}

User.prototype.bind = function(view){
  //初始化
  view.nameEle.value = this.name;
  view.ageEle.value = this.age;
  //
  Object.defineProperty(user,'name',{
    set:function(val){
      view.nameEle.value = val;
    },
    get:function(){
      return view.nameEle.value;
    }
});
Object.defineProperty(user,'age',{
    set:function(val){
      //这里应该加一个判断
      view.ageEle.value = val;
    },
    get:function(){
      return view.ageEle.value;
    }
});
view.ageEle.addEventListener('change',(evt) => {
  this.age = evt.target.value;
});
view.nameEle.addEventListener('change',(evt) => {
  this.name = evt.target.value;
});
  view.btn.addEventListener('click',(evt) => {
  console.log('姓名是'+view.nameEle.value+'，年龄是'+view.ageEle.value);
  console.log('user姓名是'+this.name+'，user年龄是'+this.age);
  evt.preventDefault();
});
};

var view = {
  nameEle : document.getElementById('name'),
   ageEle : document.getElementById('age'),
      btn : document.getElementById('confirm')
};
var user = new User('123','90后');
user.bind(view);

}
