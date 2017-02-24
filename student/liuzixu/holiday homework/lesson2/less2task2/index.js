/**
 * [convertUrlToObj description]
 * @param  {string} url
 * @return {object} obj the model likes:{query:... , hash:...}
 */
function convertUrlToObj(url){
	var url1 = decodeURIComponent(url);
	var url2;
	var obj = {
		query:{}
	};
	var indexofQuery = url1.indexOf('?');
	var indexofHash = url1.indexOf('#');
	if(indexofQuery !== -1){
		url1 = url1.substring(indexofQuery+1);
		if(indexofHash !== -1){
			url2 = url1.split('#')[1];
			obj.hash = url2;
			url1 = url1.split('#')[0];
			url1.split('&').forEach(function(item){
				var arr = item.split('=');
				var arr0 = arr[0]+'';
				(obj.query)[arr0] = arr[1] || '';
			});
      // [url1,url2] = url1.split('#');
		}
	}
	else if(indexofHash !== -1){
		url1 = url1.substring(indexofHash+1);
	}
  // if(result = (indexofQuery >= 0 ? indexofQuery : indexofHash)){
  //   url1 = url1.substring(result + 1);
  // }
	return obj;
}

// convertUrlToObj('http://www.baidu.com?a=b&c=d#start');//for test
exports.convertUrlToObj = convertUrlToObj;
