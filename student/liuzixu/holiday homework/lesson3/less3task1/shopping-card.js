/**
 * [testPassword description]
 * @param  {[string]} password [description]
 * @return {[string]}  result  [description]
 */
function testPassword (password){
	var str = password.split('-');
	var result;
	// result = str.reduce(function(pre,val){return pre+val+'';});
	result = str.join('');
	if(result.length === 20){
		return result.toUpperCase();
	}
	else{
		throw new Error('error!the length of your input is not 20');
	}
}
var a = testPassword('3efu8-rt67f-e42op-8rol');//for test
console.log(a);
