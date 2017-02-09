// @function  "a,b,c,c,d" => "a,b,c,d"
// @para1 string:string_input
// @return string:String_temp
function kill_repeatter(string_input) {
    let array_temp = string_input.split(",");
    let array_temp2 = [];
    let set_temp = new Set();
    let string_temp;

    // 通过 set 去重
    for (i in array_temp) {
        set_temp.add(array_temp[i]);
    };
    // set to string
    set_temp.forEach((value) => {
        array_temp2.push(value);
    })

    string_temp = array_temp2.join(",");

    return string_temp;
}