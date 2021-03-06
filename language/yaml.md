# YAML

## 简介

- 使用'#'注释
- 大小写敏感
- 使用空格缩进，不允许使用Tab键
- 使用yml或者yaml作为文件后缀，建议使用yml，这样可以少打一个字母
- 支持的数据结构：对象、数组、纯量

## 对象

- 冒号分割的键值对，或者使用大括号将键值对写成一个行内对象

## 数组

- 一组连词线开头的行

## 纯量

- 数值：字面量
- 布尔值：使用`true`或者`false`
- null：使用`~`
- 时间：使用ISO8601格式
- 日期：使用ISO8601的年月日表示
- 强制类型转换：使用两个`!!`

### 字符串

- 默认不使用引号
- 包含空格或特殊字符，需要放在引号之中
- 单引号和双引号都可以使用，使用`\`转译时有区别
- 多行字符串：
  - 换行缩进，换行合并成一个空格
  - 使用`|`保留换行符
  - 使用`>`折叠换行
  - 使用`+`保留字符串末尾的换行
  - 使用`-`删除字符串末尾的换行
  - 字符串之中可以插入HTML标记

### 引用

- 锚点`&`和别名`*`，可以用来引用
- 使用`<<`表示合并到当前数据
