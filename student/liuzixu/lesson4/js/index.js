
function pullLeft(href){
  if(href){
    document.getElementsByClassName('flex-box')[0].style.marginLeft="-88%";
    function detailPage(){
      console.log('get href',href);
      window.location.href=href;
    }
    setTimeout(detailPage,1000);
  }
}
