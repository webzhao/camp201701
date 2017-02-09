function valid_code(code_input) {
    let code_temp;
    // 去掉连字符"-"
    code_temp = code_input.split("-").join("");
    // 变大写
    code_temp = code_temp.toUpperCase();
    // 验证长度
    if (code_temp.length == 20) {
        return code_temp;
    } else {
        console.error("异常：无效得密码格式");
        alert("输入的密码格式出错");
    }
}

function valid_code_ugly(code_input) {
    return code_input.split("-").join("").toUpperCase().length == 20 ?
        code_input.split("-").join("").toUpperCase() : console.error("异常：无效得密码格式");
}