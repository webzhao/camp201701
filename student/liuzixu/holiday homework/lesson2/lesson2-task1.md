### 项目:[echarts](https://github.com/ecomfe/echarts)
***
* 文档结构：
  1.第一层目录下是按照标准的[项目目录结构规范](https://github.com/ecomfe/spec/blob/master/directory.md)。
  - dist存放发布时的代码
  - src存放源代码，内部结构按照功能划分，以功能命名文件夹、文件
  - test存放测试数据
  - theme存放主题数据
  - benchmark存放单元测试用例
***
* 代码书写习惯：
  1. 四个空格/两个tabel键for indentation
  2. Single quotes for strings(except to avoid escaping)
  3. 严格在每一句都以分号结尾
  4. 前半个大括号不另起一行，结尾大括号单独占一行。
  5. Space after keywords(包括运算符也是前后空格)
  6. 使用`===`而不是`==`(除非在判断undefined和null的时候)
  7. Always prefix browser globals with window – except document and navigator are okay
  8. 每个方法声明前后都有一个空行
***
* 变量命名：
  1. 驼峰式命名，除了模板类、构造函数等，首字母大写。
  2. 声明变量时`var`操作符不省略，每一个变量都有。
