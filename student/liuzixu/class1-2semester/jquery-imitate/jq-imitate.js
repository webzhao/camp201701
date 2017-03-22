 window.onload = function (){
  const btn = $('.btn');
  const list = $('.colored-list li');
  Object.prototype.addClass1 = function(val){
    if(jQuery.isFunction(val)){
      this.each(function(eleIndex){
        this.addClass1(val.call(null,eleIndex,this.className));
        //注意上面一行那里，不能用apply，因为后面的不是数组或者类数组。
        //要用call，是一个一个参数列出来的
      });
    }
    if(val && (typeof val === 'string')){
      this.each
      ? this.each(() => {this.className  = this.className.concat(''+val);}) 
      : this.className  = this.className.concat(''+val);
    }
    return this;
  }
  btn.click(function(evt){
      list.addClass1(function(index,curClass){
        return 'colored-list_item--red colored-list_item--fontBig';
      });
  });
}
