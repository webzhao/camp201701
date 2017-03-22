window.onload = function(){
  function Dialog (id) {
    var self = this;
    this.outbox = document.getElementById(id);
    this.container = this.outbox.querySelector('.dialog-white .dialog-white__container');
    var inner = this.container.querySelector('.dialog-white__inner');
    var control = this.outbox.querySelector('.dialog-white .dialog-white__controller');
    var input = control.querySelector('.dialog-white__controller-input');
    var button = control.querySelector('.dialog-white__controller-button');
    button.addEventListener('click',function(){
      self.open();
      inner.innerHTML = input.value;//need to fix
    });
    this.container.addEventListener('click',function(evt){
      if(evt.target.className.indexOf('show') >= 0){
          self.close();
      }
    });
  }
  Dialog.prototype.close = function(){
    this.container.className = this.container.className.split('show');
  }
  Dialog.prototype.open = function(){
    this.container.className += ' show';
  }
  var dialog = new Dialog('my-dialog');
}
