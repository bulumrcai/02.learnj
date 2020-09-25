<style>
 table {
   border-collapse: collapse;
 }
 tr, td{
   border: 1px solid #000000;
 }
</style>

# 零 基础知识
## 1. 单词
<table>
  <tr>
    <td>abort</td>
    <td>终止</td>
  </tr>
  <tr>
    <td>interceptor</td>
    <td>拦截器</td>
  </tr>
  <tr>
      <td>pending</td>
      <td>未确定的</td>
  </tr>
  <tr>
      <td>resolved</td>
      <td>已解决的</td>
  </tr>
  <tr>
      <td>rejected</td>
      <td>拒绝的</td>
  </tr>
  <tr>
      <td>iterable</td>
      <td>可迭代的</td>
  </tr>
  <tr>
    <td>parse</td>
    <td>解析</td>
  </tr>
  <tr>
    <td>radix</td>
    <td>基数</td>
  </tr>
  <tr>
    <td>r</td>
    <td>radius 半径</td>
  </tr>
  <tr>
    <td>invoke</td>
    <td>调用</td>
  </tr>
  <tr>
    <td>orient</td>
    <td>朝向</td>
  </tr>
  <tr>
    <td>extend</td>
    <td>延伸，扩展</td>
  </tr>
  <tr>
    <td>derive</td>
    <td>源于，派生</td>
  </tr>
  <tr>
    <td>closure</td>
    <td>闭包</td>
  </tr>
  <tr>
    <td>Regular Expression</td>
    <td>正则表达式</td>
  </tr>
  <tr>
    <td>sibling</td>
    <td>兄弟姐妹</td>
  </tr>
  <tr>
    <td>previous</td>
    <td>以前的</td>
  </tr>
  <tr>
    <td>interval</td>
    <td>间隔</td>
  </tr>
  <tr>
    <td>navigator</td>
    <td>导航员(浏览器类型)</td>
  </tr>
  <tr>
      <td>property</td>
      <td>特性</td>
  </tr>
  <tr>
      <td>extension</td>
      <td>扩展</td>
  </tr>
  <tr>
      <td>configurable</td>
      <td>可配置的</td>
  </tr>
  <tr>
      <td>writable</td>
      <td>可写的</td>
  </tr>
  <tr>
      <td>enumrable</td>
      <td>可枚举的</td>
  </tr>
  <tr>
      <td>seal</td>
      <td>密封</td>
  </tr>
  <tr>
      <td>exponent</td>
      <td>指数</td>
  </tr>
   <tr>
      <td>fraction</td>
      <td>小数</td>
  </tr>
  <tr>
      <td>epsilon</td>
      <td>希腊字母中表示极小值的那个</td>
  </tr>
  <tr>
      <td>slide</td>
      <td>滑动</td>
  </tr>
  <tr>
      <td>fadein</td>
      <td>淡入</td>
  </tr>
  <tr>
      <td>fadeout</td>
      <td>淡出</td>
  </tr>
  <tr>
      <td>propagation</td>
      <td>传播</td>
  </tr>
  <tr>
      <td>splice</td>
      <td>拼接</td>
  </tr>
  <tr>
      <td>ceil</td>
      <td>天花板</td>
  </tr>
  <tr>
      <td>exponential</td>
      <td>指数的</td>
  </tr>
  <tr>
      <td>precision</td>
      <td>精确</td>
  </tr>
  <tr>
      <td>stringify</td>
      <td>转化成JSON类型</td>
  </tr>
  <tr>
      <td>credential</td>
      <td>凭证/证明</td>
  </tr>
  <tr>
      <td>separator</td>
      <td>分隔符</td>
  </tr>
  <tr>
      <td>delegate</td>
      <td>委派</td>
  </tr>
  <tr>
      <td>time stamp</td>
      <td>事件戳（从1970年1月到现在的毫秒数）</td>
  </tr>
</table>

## 2. 常见的语法名称的术语
### 1.2.1. Numeric Literals（数值语法）
- <span id="numeraic-literal">了解什么形式的才是js中的数值语法</span>
- ![形式](img/numerical_iteral.JPG)
- 注意事项
  - DecimalIntegerLiteral
    - 0
    - 第一位非0的整数
  - DecimalDights
    - 由整数构成（没要求第一位非0）
  - DecimalDight
    - 差一个s
    - 0~9任意一个
  - ExpontPart
    - 指数部分
    - 科学计数法
### 1.2.2. 重点掌握十进制的语法
- ![十进制](./img/decimal.jpg)
### 1.2.3. StringNumericLiteral
- strnumberliteral
- <span id="str_literal">了解什么是字符型的数值语法</span>
- ![字符型的数值语法](./img/str_iteral.jpg)
- 注意事项（与正常的数值语法相比）
  - 左右可以包含任意数量的空格或者换行符，但转化的时候可以被忽略
  - 整数的左侧可以有任意数量的0，转化时会被忽略
  - 可以用\+、\-号表示符号
  - 若字符串为空或者只有空格，则会返回+0
  - 字符串型有Infinity和-Infinity，<a href="#numeraic-literal">Numeric Literals</a>

## 3. 用于调试的一些函数
### 3.4.1. console.log()与console.dir()
- console.log()会在浏览器控制台打印出信息
- console.dir()可以显示一个对象的所有属性和方法
## 4 浮点数双精度的科学计数法
- 浮点数是用二进制的科学计数法来表示，由于js采用的是双精度的浮点数，以下就以双精度浮点数及64位二进制数来说明
- <font color=red>双精度浮点数的10进制的精确有效位</font>
    - 所以只能保证前15位是精确数字，第16位只是部分精确。
        - 大于等于5：不精确，会被舍弃掉
        - 小于5：精确，保留
- ![ex3.jpeg](./img/ex3.jpeg)
- sign(63): 符号位
- exponent(52~62): 指数位
    - 取值范围
        - 原本表示的区间为[0, 2047]
        - 计算最后结果时结果的区间[0-1023, 2047 - 1023]
            - 去掉c = 0且c为最大值: [-1022, 1023]
    - 为什么要计算最后结果时减去指数偏移量
        - 为了使得改指数形式可以表示出负数
    - 为什么减去的偏移量为1023
        - 使得最高为可以类似表示为符号位
- fraction(0~51):小数点后的尾数
    - 由于是小数部分，所以2的平方根
    - 取值范围:
        - 原本表示的区间：
            - $$ [ 0, 1- 2^{-52} ]$$
        - 计算结果表示的范围
            - $$ [ 1, 2- 2^{-52} ]$$
    - 为什么在计算最后的小数部分的时候结果要加1
        - 在使用二进制科学计算法表示该数时，要保证二进制形式的小数的整数部分为1，所以实际上fraction表示的只是尾数部分
- 表示正数最大值：
    - $$ exponent=2046，fraction=1 - 2^{-52} $$ 
    - 用10进制表示约为
        - $$ 2 \times 10^{308} $$
- 表示正数最小值
    - $$ exponent=1，fraction= 0$$
    - 用10进制表示约为
        - $$ 2 \times 10^{-308} $$ 
- 当exponent=0和exponent=2047的特殊含义
<table>
    <thead>
        <tr>
            <th>exponent</th>
            <th>fraction</th>
            <th>result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>=0</td>
            <td>=0</td>
            <td>(+/-)0</td>
        </tr>
        <tr>
            <td>=0</td>
            <td>!=0</td>
            <td>denormalized number 非规格化数</td>
        </tr>
        <tr>
            <td>=2047</td>
            <td>=0</td>
            <td>(+/-)无穷</td>
        </tr>
        <tr>
            <td>=2047</td>
            <td>!=0</td>
            <td>NAN</td>
        </tr>
    <tbody>
</table> 

### 4.1 将浮点数转化为二进制科学计数法遇到的问题
- 一些小数的尾数部分无法使用有限的二进制形式进行表示，只能近似的进行表示
- 规格化成浮点数的步骤：
    - 将整数部分和小数部分分别格式化成二进制数
    - 整数部分只保留1
    - 根据计算公式求得对应的exponent和fraction
```javascript   
    类型1：
    10.25
    第一步：用二进制形式表示
    // 小数部分可以用有限的二进制数表示
    1010.01
    第二步：整数部分只保留1
    1.01001 * 2 ^ 3;
    第三步：根据公式计算
    exponent = 3 + 1023 = 1026
    fraction = 01001

    类型2：
    10.4
    第一步：用二进制形式表示
    // 小数部分无法使用有限的二进制数表示，则要用近似的表示方法，二进制至少要保留52位
    1010.01100 01100 ...(保留52位)
    第二步：整数部分只保留1
    1.010 01100 01100 ...(保留52位) * 2 ^ 3
    第三步：根据公式计算
    exponent = 3 + 1023 = 1026
    fraction = 010 01100 01100 ...(保留52位)
```
- 由于有些小数并不能用一一对应的二进制形式表示，所以会导致这些小数在表达式的计算中会出现误差，该误差的数量级为
    - $$ 2^{-52} = 2.2 \times 10^{-16}$$
    - 导致10进制小数只能保证15位有效数字，第16位就开使为部分精确
### 4.2 常见的解释原因问题
```javascript
例1：
>>> 1.4 - 1.1
0.2999999999999998
为什么不是0.3？
/*
1.4和1.1两个数都不能被精确表示，用[4]的链接可以将浮点数字面量转换成真实存储的值，可以看到1.4被近似成了1.399999999999999，1.1被近似成了1.10000000000000008所以两数相减得到的不是0.3而是0.2999999999999998。
*/
例2：
4.0 + 1e+16 - 1e+16
>>> 4.0
没错。
5.0 + 1e+16 - 1e+16
>>> 4.0
为什么5变成了4？
/*
所以在例2中 ，恰巧第16位有效数字是部分精确的，4可以被精确表示，因为最后一位并不能表示5，所以出现了浮点数误差。
*/
4.0 + 1e+17 - 1e+17
>>> 0.0
为什么结果是0.0？ 4去哪了？
/*
4已经在第17位，超出了双精度浮点数的最大有效位数，就被忽略了，所以有[公式] 。
*/
```
## 5 一些js的简单表示
- Object.prototype.func ==> Object#func
## 6 区别实例对象与函数对象
- 实例对象（简称xx对象）：通过new创建一个新的实例对象
- 函数对象：将函数当作一个对象使用（函数既可以当作一个函数使用，也可以看作一个对象使用）
- 如何分析一个语句角度
  - 从语法：判断是函数还是对象
  - 从功能
```javascript
    function Fn() {

    }
    const fn = new Fn() 
    // 构造函数的确定，是由后面调用决定的，即后面有没有new
    console.log(Fn.prototype)
    // 从这可以将Fn理解为一个对象
    // 如何看出它的对象特点
    // 该函数有属性和方法时，可以看作为对象
    Fn.bind({})
    // 所有的函数当时Function的实例，所以对应有bind方法
    $("#test")
    // 此时$是一个函数
    $.get("/test")
    // 此时$是一个对象
```
## 7 看懂数据类型
```javascript
    a.b.c()
    // 括号前面的必然是函数即a.b.c为函数
    // 其中a,b为对象
```
## 8 两种类型的回调函数
- 特征
  - 自己拟定
  - 没有调用但是会执行
### 2.1 同步回调函数
- 程序会按照顺序来调用
```javascript
    const arr = [1, 2, 3];
    arr.forEach(item => {
        console.log(item)
    })
    console.log(arr)
    // 先输出item，在输出arr
```
### 2.2 异步回调函数
- 会根据代码启动异步，将回调函数放入队列之中
  - 等触发了异步后再调用
```javascript
    setTimeout(() => {
        ...
    }, 0)
    // 执行完后面的函数再执行该异步
```
## 9 js常见的内置类型之Error
```javascript
    new Error(content)
    // 显示content的错误
```
### 14.1 Error的类型
#### 14.1.1 ReferenceError
- 引用变量不存在
#### 14.1.2 TypeError
- 数据类型不正确的错误
#### 14.1.3 RangeError
- 数据值不再所允许的范围内
#### 14.1.4 SyntaxError
- 语法错误
### 14.2 错误处理
#### 14.2.1 try{执行代码}catch(error){错误处理}
- 捕获错误,即被动进行错误处理
```javascript
try {
    let d;
    console.log(d.xxx)
}
catch(error) {
    console.log(error.message);
    // console.log(error.stack)
}
console.log("hello_world");
// 仍能正常的运行

```
#### 14.2.2 throw error
- 抛出错误, 主动进行错误处理,并显示自己的语段
```javascript
    if(Date.now() % 2 === 0) 
        alert("执行完毕")
    else{
       throw new Error("不能执行")
    }
```
### 14.3 错误对象的属性
#### 14.3.1 message
- 错误相关的信息
#### 14.3.2 stack
- 函数调用栈的记录信息
## 10 伪数组的特征
- 具有length属性
- 按照索引的方式进行存储的
- 它没有真正数组的一些方法 pop() push()等等
### 10.1 真(伪）数组转化为伪数组
- 原理：push的原函数的执行类似于以下的步骤
  - 所以，当this指向obj，即实现了伪数组的转化
```javascript
  Array.prototype.push(...args) {
    for(let i = 0;i < args.length;i ++) {
      this[i] = args[i];
    }
  }
```
```javascript
  [].push.apply(obj, arraylike)
```
### 10.2 伪数组转化为真数组
- 原理：slice函数的执行类似于以下的步骤
  - 将this指向传入的arraylike，即可以实现伪数组转化为真数组
```javascript
  Array.prototype.slice(start, end) {
    let arr = []
    if(!start && !end) {
      for(let i = 0;i < this.length;i ++) {
        arr.push(this[i]);
      } 
    }
    // ...
    return arr;
  }
```
```javascript
  [].slice.call(arraylike)
```
## 11 跨域
### 11.1 基本定义
- 指浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器对JavaScript实施的安全限制 
  - 即浏览器允许发送跨域的http请求报文，但是浏览器拒绝接受http响应报文
### 11.2 跨域的情况
- 同源： 协议，域名，端口号均是相同的，因此跨域的情况如下：
```
1. 不同域名属于跨域，如：www.a.com 和www.b.com，另外www.a.com 和www.a.com.cn也属于不同域名。
2. 主域名和子域名（二级域名、三级域名等）跨域，如：www.a.com 和 bbs.a.com 跨域。
3. 不同协议属于跨域，如：http://www.a.com 和 https://www.a.com。
4. Ip和域名属于跨域，如：123.23.23.12 和 www.a.com。 
```
### 11.3 跨域的解决方法
#### 11.3.1 使用jsonp跨域
- 原理：跨域只存在于javascript中，在html页面中通过相应的标签（&lt;script src /&gt;等）从不同域名下加载静态资源文件是被浏览器允许的，jsonp就是利用这个漏洞来实现跨域
- 缺点：只能实现get请求
```javascript
  //原生的实现方式
  let script = document.createElement('script');

  script.src = 'http://www.nealyang.cn/login?username=Nealyang&callback=callback';

  document.body.appendChild(script);

  function callback(res) {
    console.log(res);
  }

// 使用jquery的实现方法
  $.ajax({
    url:'http://www.nealyang.cn/login',
    type:'GET',
    dataType:'jsonp',//请求方式为jsonp
    jsonpCallback:'callback',
    data:{
        "username":"Nealyang"
    }
})
```
#### 11.3.2 利用iframe的src能够实现跨域请求
##### 11.3.2.1 document.domain + iframe跨域
- 原理：利用iframe加载其他域下的文件(http://b.geekjc.com/1.html)，同时document.domain设置为geekjc.com，当iframe加载完毕后，就可以获取geekjc.com域下的全局对象，此时
- 缺点：只能用于主域名相同
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>html</title>
    <script type="text/javascript" src = "jquery-1.12.1.js"></script>
</head>
<body>
    <div>A页面</div>
    <iframe 
      style = "display : none" 
      name = "iframe1" 
      id = "iframe" 
      src="http://b.geekjc.com/1.html" frameborder="0">
    </iframe>
    <script type="text/javascript">
        $(function(){
            try{
                document.domain = "geekjc.com"
            }
            catch(e){}
            $("#iframe").load(function() {
                var jq = document.getElementById('iframe').contentWindow.$
                jq.get("http://geekjc.com/test.json",function(data){
                    console.log(data);
                });
            })
    })
    </script>
</body>
</html>
```
##### 11.3.2.2 window.name + iframe跨域
- 原理
  - window.name属性可以设置或返回存放窗口名称的一个字符串。name值在不同页面或者不同域下加载后仍然存在，没有修改就不会发生变化，并且可以存储非常长的name
  - 利用iframe
##### 11.3.2.3 location + iframe跨域
#### 11.3.3 postMessage跨域
#### 11.3.4 跨域资源共享CORS
- 目前主流的跨域解决方案
##### 11.3.4.1 作用：
- 允许浏览器向跨源服务其发出XMLHttpRequest请求，克服了AJAX只能同源使用的限制
  - 所有浏览器都支持该功能，IE浏览器不能低于IE10。IE8+：IE8/9需要使用XDomainRequest对象来支持CORS
##### 11.3.4.2 对于客户端开发者和服务器端开发需要做的事情
###### 11.3.4.2.1 客户端开发者
  - 请求代码和同源AJAX通信是相同的
###### 11.3.4.2.2 服务端的开发者
- 需要在该请求的端口设置以下的中间组件，用于给检查是否允许该请求跨域
  - 若允许，服务器自动在相应的响应报文头添加Access-Control-Allow-Origin属性后在发出响应报文
  - 若不允许，则直接发出响应报文
```javascript
require express from "express";

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});
```
##### 11.3.4.3 浏览器的自动处理过程
- 浏览器将ajax请求分成两类，一类是简单请求，一类是非简单请求
###### 11.3.4.3.1 简单请求
- 符合以下条件则为简单请求：
```javascript
请求方式使用下列方法之一：
  GET
  HEAD
  POST
 
Content-Type 的值仅限于下列三者之一：
  text/plain
  multipart/form-data
  application/x-www-form-urlencoded
```
- 浏览器行为
  - 第一步：浏览器在请求报文的请求头中自动增加origin: 当前URI
    - origin: 用于说明本次请求来自哪个源（协议 + 域名 + 端口）
  - 第二步：浏览器在接受到响应报文后，检查响应报文的响应头中是否包含Access-Control-Allow-Origin字段
    - 若存在，则浏览器接受该响应报文，即ajax请求成功
    - 若不存在，响应状态码仍然是200，但是会抛出XMLHttpRequest错误
- 简单请求中响应报文Access-Control-Allow-Origin字段
<table>
  <thead>
    <tr>
      <th>Access-Control-Allow字段</th>
      <th>描述信息</th>
      <th>取值要求</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Access-Control-Allow-Origin</td>
      <td>表示让浏览器接收该跨域响应信息</td>
      <td>* / 请求时Origin字段的值<br/>
          必须</td>
    </tr>
    <tr>
      <td>Access-Control-Expose-Headers</td>
      <td>表示服务器端在响应报文中增加的属性</td>
      <td>除了这6个基本字段：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，想要自行增加属性，则将属性的名称添加到该字段之中<br/>
          可选</td>
    </tr>
    <tr>
      <td>Access-Control-Allow-Credentials</td>
      <td>指定了当浏览器的credentials设置为true时是否允许浏览器读取response的内容。当用在对preflight预检测请求的响应中时，它指定了实际的请求是否可以使用credentials。</td>
      <td>true / false<br/>
          可选</td>
    </tr>
  </tbody>
</table>

###### 11.3.4.3.2 非简单请求
- 符合以下条件则为非简单请求：
```javascript
使用了下面任一 HTTP 方法：
  PUT
  DELETE
  CONNECT
  OPTIONS
  TRACE
  PATCH
 
Content-Type 的值不属于下列之一:
  application/x-www-form-urlencoded
  multipart/form-data
```
- 浏览器行为
- 重要区别：浏览器多了一步预检请求的过程
  - 第一步：浏览器会自动先发送一个options请求(预检请求）
    - 浏览器会在预检请求的请求头中自动添加以下属性
      - Access-Control-Request-Method：表示客户端将要发送的请求包含什么类型的请求方法
      - Access-Control-Request-Headers：表示由客户端自行增加的请求头属性
  - 第二步：浏览器接收到了响应报文后，检查响应报文的请求头是否包含Access-Control-Allow-Origin字段
    - 若存在，浏览器自动将响应报文中的Access-Control-Allow-Origin字段增加到请求报文的请求头中，然会发出ajax请求
    - 第三步：浏览器接收到响应报文，响应报文头中有Access-Control-Allow-Origin字段，接收该响应报文，ajax请求成功
    - 若不存在，响应状态码仍然是200，但是会抛出XMLHttpRequest错误

- 非简单请求中预检验响应报文Access-Control-Allow字段
<table>
  <thead>
    <tr>
      <th>Access-Control-Allow字段</th>
      <th>描述信息</th>
      <th>取值要求</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Access-Control-Allow-Origin</td>
      <td>表示让浏览器接收该跨域响应信息</td>
      <td>* / 请求时Origin字段的值<br/>
          必须</td>
    </tr>
    <tr>
      <td>Access-Control-Expose-Headers</td>
      <td>表示服务器端在响应报文中增加的属性</td>
      <td>除了这6个基本字段：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，想要自行增加属性，则将属性的名称添加到该字段之中<br/>
          可选</td>
    </tr>
    <tr>
      <td>Access-Control-Max-Age: &lt;delta-seconds&gt;</td>
      <td>指定了preflight（预检验）请求的结果能够被缓存多久</td>
      <td>delta-seconds 参数表示preflight请求的结果在多少秒内有效。<br/>
          可选</td>
    </tr>
    <tr>
      <td>Access-Control-Allow-Credentials</td>
      <td>指定了当浏览器的credentials设置为true时是否允许浏览器读取response的内容。当用在对preflight预检测请求的响应中时，它指定了实际的请求是否可以使用credentials。</td>
      <td>true / false<br/>
          可选</td>
    </tr>
    <tr>
      <td>Access-Control-Allow-Methods: &lt;method&gt;[, &lt;method&gt;]*</td>
      <td>用于预检请求的响应。其指明了实际请求所允许使用的 HTTP 方法。</td>
      <td>post, get, delete...<br/>
          必须</td>
    </tr>
    <tr>
      <td>Access-Control-Allow-Headers: &lt;field-name&gt;[, &lt;field-name&gt;]*</td>
      <td>用于预检请求的响应。其指明了实际请求中允许携带的首部字段。</td>
      <td>即预检验后发送的http的头部的属性<br/>
          可选</td>
    </tr>
  </tbody>
</table>

- 非简单请求中响应报文的Access-Control-Allow字段
  - 和简单请求的响应报文类似
###### 11.3.4.3.3 附带身份凭证的请求
- 一般而言，对于跨域 XMLHttpRequest 或 Fetch 请求，浏览器不会发送身份凭证信息。如果要发送凭证信息，需要设置 XMLHttpRequest 的某个特殊标志位。
```javascript
  var invocation = new XMLHttpRequest();
  var url = 'http://bar.other/resources/credentialed-content/';
      
  function callOtherDomain(){
    if(invocation) {
      invocation.open('GET', url, true);
      invocation.withCredentials = true;
      invocation.onreadystatechange = handler;
      invocation.send(); 
    }
  }
```

- 该请求中响应报文Access-Control-Allow-Origin字段
<table>
  <thead>
    <tr>
      <th>Access-Control-Allow字段</th>
      <th>描述信息</th>
      <th>取值要求</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Access-Control-Allow-Origin</td>
      <td>表示让浏览器接收该跨域响应信息</td>
      <td>* / 请求时Origin字段的值<br/>
          必须</td>
    </tr>
    <tr>
      <td>Access-Control-Expose-Headers</td>
      <td>表示服务器端在响应报文中增加的属性</td>
      <td>除了这6个基本字段：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，想要自行增加属性，则将属性的名称添加到该字段之中<br/>
          可选</td>
    </tr>
    <tr>
      <td>Access-Control-Allow-Credentials</td>
      <td>指定了当浏览器的credentials设置为true时是否允许浏览器读取response的内容。当用在对preflight预检测请求的响应中时，它指定了实际的请求是否可以使用credentials。</td>
      <td>true / false<br/>
          可选</td>
    </tr>
  </tbody>
</table>




#### 11.3.5 WebSocket协议跨域
- WebSocket protocol是HTML5一种新的协议。它实现了浏览器与服务器全双工通信，同时允许跨域通讯，是server push技术的一种很好的实现。
- Socket.io将WebSocket、AJAX和其它的通信方式全部封装成了统一的通信接口
#### 11.3.6 node代理跨域
- 原理
  - node中间件实现跨域代理，是通过启一个代理服务器，实现数据的转发，也可以通过设置cookieDomainRewrite参数修改响应头中cookie中域名，实现当前域的cookie写入，方便接口登录认证。
```javascript
  // 客户端
  var xhr = new XMLHttpRequest();

  // 前端开关：浏览器是否读写cookie
  xhr.withCredentials = true;

  // 访问http-proxy-middleware代理服务器
  xhr.open('get', 'http://www.domain1.com:3000/login?user=admin', true);
  xhr.send();
```
```javascript
  // 服务器端
  var express = require('express');
  var proxy = require('http-proxy-middleware');
  var app = express();

  app.use('/', proxy({
      // 代理跨域目标接口
      target: 'http://www.domain2.com:8080',
      changeOrigin: true,

      // 修改响应头信息，实现跨域并允许带cookie
      onProxyRes: function(proxyRes, req, res) {
          res.header('Access-Control-Allow-Origin', 'http://www.domain1.com');
          res.header('Access-Control-Allow-Credentials', 'true');
      },

      // 修改响应信息中的cookie域名
      cookieDomainRewrite: 'www.domain1.com'  // 可以为false，表示不修改
  }));

  app.listen(3000);
  console.log('Proxy server is listen at port 3000...');
```


# 一 javascript的基础认识
## 1. 解释型语言
- 编译型语言
  - C语言->编译成2进制代码（与操作系统有关）-> 执行
- 解释型语言
  - 一行一行读取，一行一行执行
  - 特性
    - 非独立
      - 需要依赖于解释器（浏览器或者node）
    - 效率低
      - 每执行依次都要重新翻译一次
## 2. 动态类型语言
- 动态类型的语言
  - 不能确定一个变量的类型，所以可以在代码执行的过程中动态修改
- 静态类型的语言
  - 在代码执行之前可以确定一个变量（标识符）准确的类型，并且不能修改
## 3. 应用场景
- 网页的交互
- 服务器开发(node.js)
- 命令行工具(node.js)
- 桌面程序，VSCode使用TypeScript开发
- App(React Native)
- 游戏开发(cocos2d-js)
- 小程序开发
## 4. 编写位置
### 4.1. 在HTML元素中属性直接执行js代码（不建议）
- 事件触发属性的双引号内
  - 里面的表达式表示在触发某些事件之后执行里面的js表达式
```html
  <a href="" onclick="alert('hello_world')>我是a元素</a>
```
- 非事件触发属性(需要指明javascript)
```html
 <a href="javascript: alert('hello_world')" >我是a元素</a>
```
### 4.2. 书写到script标签中
- 一般位于body的最下面
### 4.3. 从外部引入js文件
- 引入方法（仍放在body的最后面）
```html
  <script src="..."><script>
```
### 4.4. 注意事项
- 在外联js文件时，script标签中不能有js代码，且不用写type类型(text/javascript)
- 由于html文档加载顺序的原因，推荐将js代码放在body子元素的最后一行
  - html元素加载后才能够与js代码进行关联
- js代码严格区分大小写
  - 但HTML和CSS代码不区分大小写
## 5. js代码的注释
- 单行注释
```javascript
 //hello_world
```
- 多行注释
```javascript
 /*
 hello_world
 */
```
- 文档注释
```javascript
  /*
  * test 函数
  */
```
## 6. js的内置数据类型数据类型
- <font color="red">JS严格区分大小写</font>
- 基本数据类型(原始数据类型，简单数据类型)
  - number
  - string
  - boolean
  - undefined
  - null
  - symbol
- 复合数据类型
  - object
## 7. 变量存储的本质
### 7.1 内存的分类
- 栈空间
- 堆空间
- ![storage](./img/storage.jpg)
### 7.2 代码运行时，各部分存储的位置
- 代码存储到硬盘中
- 代码运行时，其中定义的变量是存储在内存中
- 基本数据类型的变量所对应的值是直接存储在内存栈空间中，当变量的值改变时，是直接修改栈空间中对应位置的变量的值
- 复合数据类型的变量所对应的值是存储在内存栈空间中，但是存储的变量的值是所在堆空间的地址
    - 变量的获取实际上是通过栈空间中存储的对应堆空间的内存地址来找到相应的存储位置
## 8 js的变量垃圾回收规则
### 8.1 不被回收的变量特征
- 全局变量不会被回收
- 只要变量被另外一个作用域所引用就不会被回收
  - 如闭包作用域内的变量
### 8.2 被回收的变量特征
- 局部变量一旦用完就会被回收
  - 例如函数一旦运行完，函数内部的变量就会被回收（除了上面的特殊情况）
### 8.3 练习
```javascript
  var i = 1;
  var i = 2; // 重复声明时，后声明会被忽略
  var add = (function() {
    var i = 0;
    return function() {
      i ++;
      console.log(i)
    }
  })()
  add();

  /*
  *   有三个变量不会被回收
  *   1. 全局变量i不会被回收
  *   2. 全局变量add不会被回收
  *   3. 闭包引用的局部变量i不会被回收
  */
```
## 9 html中确定某个元素的位置的相对量
- 相对于窗口的偏移量  -- offset
- 相对于定位元素的偏移量 --
- 有滑动框的偏移量  -- scroll
# 二 js内置数据类型与语法解析
## 1 js的内置类型
- 一般认为有七种内置类型
    - null, undefined, boolean, number, string, symbol(符号类型，ES6新增的), object, 
### 1.1 使用typeof来分辨不同的内置类型
- typeof的实质
    - <font color="red">得到的不是变量的类型，而是变量所持值的类型</font>
    - js的变量是没有类型的
- 结果：返回一个string数据的值
```javascript
    typeof undefined === "undefined"; // true
    typeof true === "boolean"; // true
    typeof 42 === "number"; // true
    typeof "42" === "string"; // true
    typeof { life: 42 } === "object"; // true
    // ES6中新加入的类型
    typeof Symbol() === "symbol"; // true

    // 特殊
    function foo() {
        // ...
    }
    typeof foo === "function" // true
    // null比较特殊
    typeof null === "object"  //true
    // typeof对于只声明而没有赋值的变量返回undefined，对于没有声明的变量也是返回undefined且不报错
    var a;
    typeof a === "undefined"  //true
    typeof b === "undefined" //true
```
- 注意
    - typeof还可以用于分辨function，虽然只是object的子类型
    - null比较特殊，由于历史遗留的原因被typeof认为是object，应该使用以下的方法来判断一个值是否是null
```javascript
    !a && typeof a === "object" 
    // 若a=null, 返回true
```
### 1.2 基本类型的理解
#### 1.2.1 undefined
- 已在作用域中声明但没有赋值的变量，值是undefined
#### 1.2.1.1 undefined和undeclared的区别
- undeclared是连声明都没有的变量,js错误描述是
```javacript
     ReferenceError: b is not defined
```
### 1.3 总结
- JavaScript 有 七 种 内 置 类 型：null、undefined、boolean、number、string、object 和symbol，可以使用 typeof 运算符来查看。
- 变量没有类型，但它们持有的值有类型。类型定义了值的行为特征。
- undefined 是值的一种。undeclared 则表示变量还没有被声明过。
- JavaScript 却将它们混为一谈，在我们试图访问 "undeclared" 变量时这样报错：ReferenceError: a is not defined，并且 typeof 对 undefined 和 undeclared 变量都返回"undefined"。

## 2 js的内置值类型
### 2.1 js的数组类型(Array)
- 实质上也是一种对象，只是键值为十进制数字类型而已
    - 如果一个[]类型变量的键值能转化为十进制，则其会被视为数组
- 在 JavaScript 中，数组可以容纳任何类型的值，可以是字符串、数字、对象（object），甚至是其他数组
- 对数组声明后即可向其中加入值，<font color="red">不需要预先设定大小</font>
- “稀疏”数组的空白部分
    - 区别于空白部分被赋值为undefined
    - 对象执行Get操作时没有从中找到对应的属性，因此返回一个undefined，而并不是空白部分被赋值为undefined
```javascript
    var a = [];
    a[1] = 2;
    a[4] = 4;
    console.log( a[2] ) // undefined
```
#### 2.1.1 类数组转化为数组类型
- 类数组
    - 有length属性
    - 一组通过数字索引的值
    - 例子
        - <font color="red">一些 DOM 查询操作会返回 DOM 元素列表</font>
        - 通过 arguments 对象（类数组）将函数的参数当作列表来访问（ES6废除）
#### 2.1.1.1 Array#slice.call(arrayLike)
- 将类数组强制转化为数组类型，并将数组作为返回值
#### 2.1.1.2 [].slice.call(arrayLike)
- 将类数组强制转化为数组类型,并将数组作为返回值
```javascript
    function foo() {
        var arr = Array.prototype.slice.call(arguments);
        console.log(arr);
        console.log(arr instanceof Array)
    }
    foo("a", "b", "c");
    // ["a", "b", "c"]
    // true
```
#### 2.1.1.3 Array.from(arrayLike[,func]);
- 将类数组强制转化为数组类型,并将数组作为返回值
- ES6新增的方法
```javascript
    function foo() {
        var arr = Array.from(arguments);
        console.log(arr);
        console.log(arr instanceof Array)
    }
    foo("a", "b", "c");
    // ["a", "b", "c"]
    // true
```
### 2.2 字符串类型(string)
- string类型的数值在调用String的方法时，会先自动被初始化String对象，再调用对应的函数
- string类型使用String对象进行包装
#### 2.2.1 区分字符串和字符数组
- 都具有length属性, indexOf和concat方法
```javascript
   var a = "hello";
   var b = ["h", "e", "l", "l", "o"];

   console.log(a.length);   // 5
   console.log(b.length);   // 5

   console.log(a.indexOf("o")); // 4
   console.log(b.indexOf("o")); //4

   a = a.concat(" world");
   b = b.concat([" ", "w", "o", "r", "l", "d"]);

   console.log(a)   // "hello world"
   console.log(b)
```
- 但是区别
    - 以前访问对应的字符应该使用charAt(index)来进行访问
    - <font color="red">js中字符串中的值是不可变的</font>
        - 字符串无法通过下标的形式来修改字符串内的内容，但是可以通过内置函数来进行修改。
    - 字符数组中的值是可变的
```javascript
    var a = "hello"
    var b = ["h", "e", "l", "l", "o"];

    a[0] = "H";
    b[0] = "H"

    console.log(a)  //"hello"
    console.log(b)  //["H", "e", "l", "l", "o"]
```
#### 2.2.2 字符串借用数组类型的函数来实现功能
- 各个字母中间插进其他字符
#### 2.2.2.1 Array#join.call(string, 中间插入的值)
- 返回一个中间加入值的新的字符串
##### 2.2.2.2 Array#map.call(string, func).join("")
- 返回一个中间加入值的新的字符串
```javascript
    var c = Array.prototype.join.call( a, "-" );
    var d = Array.prototype.map.call( a, function(v){
    return v.toUpperCase() + ".";
    } ).join( "" );
    c; // "f-o-o"
    d; // "F.O.O."
```
- 实现字符串的reserve
    - reverve函数是将本身颠倒，而不仅仅是返回一个颠倒的字符串
    - 字符串中没有reserve函数
    - 数组的reserver函数是将本身颠倒，当使用call让字符串调用时，由于字符串本身的值时不变的，所以不能这种方法
- 可以使用以下步骤
    - 将字符串转化称字符数组
    - 将字符数组颠倒
    - 再转化为字符串
```javascript
    var a = a.split("")
             .reserve()
             .join("")
    // 但对简单的字符串却完全适用
```
### 2.3 数字类型(number)
- js只有一个数字类型number
    - js没有真正意义上的整数，实际上是没有小数点的小数
    - <font color="red">使用双精度的格式来表示number</font>
        - 以10进制的形式
            - 前15位为精确位
            - 第16位为部分精确位
- number类型的数值在调用Number的方法时，会先自动被初始化Number对象，再调用对应的函数
- 常见的数字表示法
    - 科学计数法: 1.23e-10
    - 二进制: 0b
    - 八进制: 0o
    - 十六进制：0x
#### 2.3.1 数字类型的较小值问题
```javascript
    console.log( 0.1 + 0.2 === 0.3) // false
    // 原因：0.1和0.2都无法规范为有限的浮点数形式
    // 前15位为精确的，第16位部分精确
```
- 使表达式与实际数值相等的判断方法
##### 2.3.1.1 二进制的误差
- $$ 2^{-52} = 2.2 \times 10^{-16} $$
```javascript
    var a = 0.1 + 0.2;
    var b = 0.3;
    console.log(Math.abs(b - a) < Math.pow(2, -52))
```
#### 2.3.1.2 Number.EPSILON
- ES6将上述误差值保存在Number.EPSILON
- 应用：判断是数值和表达式之间的大小
```javascript
    var a = 0.1 + 0.2;
    var b = 0.3;
    console.log(Math.abs(b - a) < Number.EPSLION)
```
#### 2.3.2 Number常用的属性和方法
##### 2.3.2.1 Number.EPSILON
- 表达式和实际数之间的最大误差
##### 2.3.2.2 Number.MAX_SAFE_INTEGER
- 被安全呈现的最大整数(正)
##### 2.3.2.3 Number.MIN_SAFE_INTEGER
- 被安全呈现的最小整数（负）
- 与上面一起构成了整数的安全范围
##### 2.3.2.4 Number#toExponential()
- 返回对应数值的科学计数法的表示
##### 2.3.2.5 Number#toFixed(num)
- 返回保留num位小数的值
##### 2.3.2.6 Number#toPrecision(num)
- 返回保留num位有效数字的值
##### 2.3.2.6 Number.isInteger(num)
- 判断某个数是不是整数
##### 2.3.2.7 Number.isSafeInteger(num)
- 判断某个数是不是在安全的整数
#### 2.3.3 实现32为有符号整数
```javascrit
    number | 0
```
- 因为位运算符只适用于32位数
#### 2.3.4 特殊数字(number)
##### 2.3.4.1 不是数字的数字(NaN)
- NaN是指“不是一个数字”，但是仍是一种number类型
- 实质上是一个警戒值，用于指出数字类型中的错误
    - 无效数值
    - 失败数值
    - 坏数值
###### 2.3.4.1.1 NaN与==、===
- <font color="red">数值NaN是唯一一个非自反</font>
    - x === x不成立
```javascript
    console.log(NaN == NaN) //false
    console.log(NaN === NaN) //false
```
###### 2.3.4.1.2 判断一个值是不是NaN的方法 -- Number.isNaN
- 运用isNaN，舍弃
- 只适用于ES6
```javascript
    var a = NaN;
    console.log(Number.isNaN(a))
```
- 内部实现的步骤（利用自反的性质）
```javascript
    if(!Number.isNaN) {
        Number.isNaN = function(n) {
            return n !== n
        }
    }
```
##### 2.3.4.2 无穷数
- Infinity -Infinity
- js中有固定的属性进行定义
    - Number.INFINITY
    - Number.NAGATIVE_INFINITY
###### 2.3.4.2.1 js中除以0为无穷值
```javascript
    console.log(1 / 0) // Infinity
    console.log(-1 / 0) // -Infinity
```
- 可以用于分辨(+/-)0
###### 2.3.4.2.2 js中当所表示的值超过Number.MAX_VALUE时，为无穷值
###### 2.3.4.2.3 js中无穷除以无穷为NaN
##### 2.3.4.3 零值(+/-)
- 包含+0和-0
###### 2.3.4.3.1 -0出现的场合
- 自己赋值
- 在一些运算中 0 * 负数  | 0 / 负数
    - 加减法不会得到-0
###### 2.3.4.3.2 常见函数对-0的处理
- -0转化为字符串(不保留符号)
```javascript   
    var a = -0;
    a.toString(); // "0"
    a + ""; // "0"
    String( a ); // "0"

    JSON.stringify( a ); // "0"
```
- 字符串-0转化为数值
```javascript
    +"-0"; // -0
    Number( "-0" ); // -0
    JSON.parse( "-0" ); // -0
```
###### 2.3.4.3.3 -0与0之间的大小关系
- ==、===结果都返回true
###### 2.3.4.3.4 如何判断数值是-0
- 法一：构建函数
    - 利用-0与-Inifity的关系
```javascript
    function isNegZero(n) {
        n = Number(n);
        return n === 0 && 1 / n === -Inifity
    }
```
##### 2.3.4.4 特殊等式Object.is(v1, v2)
- 经常用于判断-0以及NaN，其他一般用==或者===
- 源码
```javascript
    if (!Object.is) {
        Object.is = function(v1, v2) {
            // 判断是否是-0
            if (v1 === 0 && v2 === 0) {
                return 1 / v1 === 1 / v2;
                }
            // 判断是否是NaN
            if (v1 !== v1) {
                return v2 !== v2;
            }
            // 其他情况
            return v1 === v2;
        };
    }
```
### 2.4 不是值的值(undefined,null)
#### 2.4.1 undefined和null的异同
- 相同
    - undefined和null：类型只有一个值，即是undefined/null,既是类型也是值
- 不同
    - null表示空值(empty value)，undefined表示没有值（missing value）
        - 空值表示赋过值，但此时值为空
        - 没有值表示没有赋过值
    - null是一个特殊的关键字，不能进行赋值,<font color="red">undefined可以作为标识符，当作变量来使用和赋值</font>
#### 2.4.2 作为标识符和变量的undefined
- 在非严格模式下可以把undefined作为标识符进行赋值，而严格模式下会报TypeError的错误
- 在非严格和严格模式下可以声明一个局部变量undefined,用它进行计算
- <font color="red">虽然undefined可以作为标识符或者变量，但是永远不要重新定义undefined</font>
```javascript
    function foo() {
        undefined = 2; 
        console.log(undefined)
    }
    foo();
    // 2
    function foo() {
        "use strict";
        undefined = 2; // TypeError!
    }
    foo();
    function foo() {
        "use strict";
        var undefined = 2;
        console.log( undefined ); // 2
    }
    foo();
```
- 与undefined相关的运算符--void
##### 2.4.1 void运算符可以得到undefined标识符的返回值
- void + 表达式
    - 返回值为内置undefined的值即undefined
      - 作用：使得表达式的返回值为undefined
```javascript
    var a = 42;
    console.log( void a, a ); // undefined 42
```
- 注意，void()则为语法错误(SyntaxError)
```javascript
  void();
```

## 3 数据类型和赋值，引用
- 变量的赋值和参数的传递两种形式
    - 值赋值
        - 重新申请一块存储区域，并将值变为和赋的值相同
    - 引用复制
        - 只将存储值的地址赋给变量
- 规则
    - 简单值（即标量基本类型值，scalar primitive）总是通过值复制的方式来赋值 / 传递，包括null、undefined、string、number、boolean和 ES6 中的 symbol。
    - 复合值（compound value）——对象（包括数组和封装对象）和函数，则总是通过引用复制的方式来赋值 / 传递。
- 存在赋值的地方：
  - = 
  - return
  - 函数参数的传递
### 3.1 函数的参数的值传递方式
- 函数参数的传递方式仍然符合上面的规则，但是有要注意的地方
- <font color="red">对引用复制的参数执行赋值操作</font>
    - 函数内的参数由于赋值之后指向其他存储地址，但是原来的参数指向的地址并没有改变
    - ![ex4.jpeg](./img/ex4.jpeg)
    - 若想要让函数参数指向的是相应的地址，<font color="red">在函数操作的时候不能对传入的参数执行赋值操作</font>
```javascript
    function foo(x) {
        x.push( 4 );
        x; // [1,2,3,4]
        // 然后
        x = [4,5,6];
        x.push( 7 );
        x; // [4,5,6,7]
    }
    var a = [1,2,3];
    foo( a );
    a; // 是[1,2,3,4]，不是[4,5,6,7]
```
- 数组可以采用arr.slice()使得传递的是另一个地址，从而不改变原地址的数组
    - 即可以通过传递副本的方法使得不改变原本的值
### 3.2 函数的参数的传递封装对象（对基本类型进行封装）
- 进行表达式的运算时，结果会返回对应的封装对象而不是基本类型
- 同样不能进行赋值操作，否则会指向新的内存地址
```javascript
    function foo(x) {
        x = x + 1;
        x; // 3
    }
    var a = 2;
    var b = new Number( a ); // Object(a)也一样
    // b是引用传递传递给x，x进行了赋值，所以此时x不是指向b的地址，所以x为3，b为2
    foo( b );
    console.log( b ); // 是2，不是3
```
### 3.3 总结
- JavaScript 中的数组是通过数字索引的一组任意类型的值。字符串和数组类似，但是它们的行为特征不同，在将字符作为数组来处理时需要特别小心。
- JavaScript 中的数字包括“整数”和“浮点型”。
- null 类型只有一个值 null，undefined 类型也只有一个值 undefined。所有变量在赋值之前默认值都是 undefined。void 运算符返回 undefined。
- 数 字 类 型 有 几 个 特 殊 值， 包 括 NaN（ 意 指“not a number”， 更 确 切 地 说 是“invalid number”）、+Infinity、-Infinity 和 -0。
- 简单标量基本类型值（字符串和数字等）通过值复制来赋值 / 传递，而复合值（对象等）通过引用复制来赋值 / 传递。
- JavaScript 中的引用和其他语言中的引用 / 指针不同，它们不能指向别的变量 / 引用，只能指向值。

## 4 原生函数
- 常见的原生函数 --- 用于构造封装对象
    - String()
    - Number()
    - Boolean()
    - Array()
    - Object()
    - Function()
    - RegExp()
    - Date()
    - Error()
    - Symbol()——ES6 中新加入的！
### 4.1 基本类型的封装对象
- 我们可以先对基本类型封装成对象以来调用对应的方法，但是js并不这样建议，直接使用封装对象来“提前优化”代码反而会降低执行效率。因为返回值都是基本类型，你这样又要进行封装
- 基本类型在调用相应的函数时，
    - js会自动对基本数据类型进行封装后再调用相应的函数
- 基本类型和封装对象的区别
  - 封装对象本质上还是一个对象
  - typeof
    - 基本类型输出对应的值
    - 封装对象返回object
  - 参数传递
    - 基本数据类型使用赋值
    - 封装对象运用了引用赋值
### 4.2 拆封基本类型的封装对象
- obj.valueOf()
    - 返回相应的基本类型
- 隐式拆封
    - 在表达式中，有时候需要进行隐式拆分
### 4.3 原生函数作为构造函数构建对象进行封装
- 一般情况下，我们采用的是字面量对数据类型进行定义（包括复杂基本类型）
- 利用new 原生函数构建的是一个对象而不是对应的值
#### 4.3.1 Array作为构造函数
- <font color="red">不要只用一个数字最为Array的构造参数</font>
- Array可以带不带new都可以
```javascript
    var a = new Array( 1, 2, 3 );
    // 参数列表， arr
    a; // [1, 2, 3]
    var b = [1, 2, 3];
    b; // [1, 2, 3]
```
##### 4.3.1.1 为什么不能只用一个数字作为Array的构造参数
- 该参数会作为该Array的预设长度
    - 创建出的数组是空数组，但是有长度
- 如若一个数组没有任何单元，但它的 length 属性中却显示有单元数量，这样奇特的数据结构会导致一些怪异的行为, 可以用以下的方法来解决这种行为
```javascript
    var a = Array.apply( null, { length: 3 } );
    // 通过该方法来构建长度为3的参数
    // 相当于Array(undefined, undefined, undefined)
```
#### 4.3.2 RegExp作为构造函数的情况
- 强烈建议使用常量形式（如 /^a*b+/g）来定义正则表达式
- 但是定义动态正则表达式时
    - RegExp("pattern","flags")
      - pattern可以是string，reg类型
      - flags
        - g: 全局匹配
        - i：忽略大小写
```javascript
    var name = "Kyle";
    var namePattern = new RegExp( "\\b(?:" + name + ")+\\b", "ig" );
    var matches = someText.match( namePattern );
```
#### 4.3.3 Date和Error作为构造函数
- 由于没有对应的常量形式作为体代，所以经常作为构造函数。
- 创建日期对象必须使用 new Date()。Date(..) 可以带参数，用来指定日期和时间.
##### 4.3.3.1 Date用于根据时间创建随机数
- Date获取从1970年到现在的毫秒数
    - Date.now()
    - new Date() .getTime()
```javascript
    console.log(Date.now)

    if(!Date.now) {
        Date.now = function() {
            return new Date().getTime();
        }
    }
```
##### 4.3.3.2 Error作为构造函数
- 带不带new都可以
- 创建错误对象（error object）主要是为了获得当前运行栈的上下文
    - 栈上下文信息包括函数调用栈信息和产生错误的代码行号，以便于调试（debug）。
#### 4.3.4 Symbol作为构造函数
- 可以自定义Symbol
    - 在自定义Symbol属性时，<font color="red">千万不要用new符号</font>
- 可以使用一些已经预定好的symbol
    - Symbol.create
    - Symbol.iterator
- ES6 中新加入了一个基本数据类型 ——符号（Symbol）。
- 作用
    - 符号是具有唯一性的特殊值（并非绝对），用它来命名对象属性不容易导致重名。
##### 4.3.4.1 Symbol类型作为属性名
- 符号可以用作属性名，但无论是在代码还是开发控制台中都无法查看和访问它的值，只会显示为诸如 Symbol(Symbol.create) 这样的值。它却主要用于私有或特殊属性。<font color="red">属于无法枚举的属性</font>
    - 无法通过Object.keys()获得对应的属性
- 自定义
    - 虽然然符号实际上并非私有属性（通过 Object.getOwnPropertySymbols(..) 便可以公开获得对象中的所有符号）
```javascript
    var mysym = Symbol( "my own symbol" );
    mysym; // Symbol(my own symbol)
    mysym.toString(); // "Symbol(my own symbol)"
    typeof mysym; // "symbol"
```
- 使用已经定义好的Symbol
```javascript
    obj[Symbol.iterator] = function(){ /*..*/ };
```
###### 4.3.4.1.1 访问对象的Symbol属性
- 无法使用Object.keys()得到Symbol属性值，但可以用
    - 通过 Object.getOwnPropertySymbols(..) 便可以公开获得对象中的所有符号
- 访问属性值只能用[]的形式
```javascript
    var mysym = Symbol( "my own symbol" );
    mysym; // Symbol(my own symbol)
    mysym.toString(); // "Symbol(my own symbol)"
    typeof mysym; // "symbol"

    var a = { };
    a[mysym] = "foobar";
    Object.getOwnPropertySymbols( a );
    // [ Symbol(my own symbol) ]
```
### 4.4 Object#toString.call(obj)
- 所有 typeof 返回值为 "object" 的对象（如数组）都包含一个内部属性 [[Class]]（我们可以把它看作一个内部的分类，而非传统的面向对象意义上的类）。  
- 返回值为字符串[object, 构造函数名称]
  - 注意对应的构造函数的名称要大写
- obj为基本类型
    - null和undefined
        - 虽然没有对应的内部类，但仍然会返回[object, null] [object, undefined]
    - 其他基本类型
        - 得到一个对象的内部属性[object [ Class ]]
            - 即会先将用new进行自动封装
- obj为符合类型
    - 得到一个对象的内部属性[object [ Class ]]
    - Class: 构造函数的名称
```javascript
    // 1. undefined和null
    Object.prototype.toString.call( null );
    // "[object Null]"
    Object.prototype.toString.call( undefined );
    // "[object Undefined]"
    // 2. 基本类型
    Object.prototype.toString.call( "abc" );
    // "[object String]"
    Object.prototype.toString.call( 42 );
    // "[object Number]"
    Object.prototype.toString.call( true );
    // "[object Boolean]"

    // 3. 复合类型
    Object.prototype.toString.call( [1,2,3] );
    // "[object Array]"
    Object.prototype.toString.call( /regex-literal/i );
    // "[object RegExp]"
```
### 4.5 原生函数的原型
- 原生构造函数有自己的 .prototype 对象，如 Array.prototype、String.prototype
    - 字符串值封装为字符串对象之后，就能访问 String.prototype 中定义的方法
- 所有的函数都可以调用 Function.prototype 中的 apply(..)、call(..) 和 bind(..),来时实现对具体的对象调用对应的方法
- 原生函数的原型对象只能由其实例来进行调用
```javascript    
    String#indexOf(..)
    在字符串中找到指定子字符串的位置。
    String#charAt(..)
    获得字符串指定位置上的字符。
    String#substr(..)、String#substring(..) 和 String#slice(..)
    获得字符串的指定部分。
    String#toUpperCase() 和 String#toLowerCase()
    将字符串转换为大写或小写。
    String#trim()
    去掉字符串前后的空格，返回新的字符串。

    // 以上方法并不改变原字符串的值，而是返回一个新字符串
```
#### 4.5.1 有些原型对象并不一定是对象
- 对应类型的空值
    - Function.prototype
        - 函数类型，且为空函数
    - Array.prototype
        - Array类型，且为空数组
    - RegExp.prototype
        - RegExp类型，且为空正则表达式
- 可以用于作为默认值
    - 从 ES6 开始，我们不再需要使用 vals = vals || .. 这样的方式来设置默认
值（参见第 4 章），因为默认值可以通过函数声明中的内置语法来设置
```javascript
    var vals = Array.prototype;
    var fn = Function.prototype;
    var rx = RegExp.prototype;
```
### 4.6 总结
- JavaScript 为基本数据类型值提供了封装对象，称为原生函数（如 String、Number、Boolean等）。它们为基本数据类型值提供了该子类型所特有的方法和属性（如：String#trim() 和Array#concat(..)）
- 对于简单标量基本类型值，比如 "abc"，如果要访问它的 length 属性或 String.prototype
方法，JavaScript 引擎会自动对该值进行封装（即用相应类型的封装对象来包装它）来实现对这些属性和方法的访问。

## 5 类型转换
- JavaScript 中的强制类型转换总是返回标量基本类型值
### 5.1 类型转换和强制类型转换
- 类型转换
    - 显示类型转换
    - 发生在静态类型语言的编译阶段
- 强制类型转换
    - 隐式类型转换
    - 动态类型语言的运行时
### 5.2 数值，字符串，布尔值之间的类型转化规则
#### 5.2.1 ToString规则
- 非字符串到字符串的类型转换
- ![规则](./img/toString_rule.jpeg)
- 规则：
    - 基本数据类型：
        - null, undefined
            - null --> "null"，undefined --> "undefined"
        - boolean
            - true --> "true", false --> "false"
        - number
            - n --> "n"
            - NaN --> "NaN"
            - 极大数和极小数-->转化为科学计数法
        - symbol    
            - sym --> "Symbol(sym)"
    - 对象
        - 调用抽象函数ToPrimitive()，是否有valueOf()
            - 有valueOf（封装对象）：放回对应的valueOf的值，然后按照基本数据类型的规则进行转化
            - 没有valueOf（非封装对象），是否有toString函数
                - 返回toString的值
                - 若没有toString函数，则默认调用有Object.prototype.toString.call(obj), 返回"[ object, [[ Class ]]]"
```javascript
    var a = {};
    console.log(String(a));
        // [object Object]
    var b = {
        c: 2,
        d: 3,
        toString() {
            var str = "";
            Object.keys(this).forEach(key => {
                if(typeof this[key] !== "function")
                    str = str + key + ": " + this[key] + " ";
            })
            return str;
        }
    }
    console.log(String(b));
        // c: 2 d: 3 
```
##### 5.2.1.1 toString一些易错点
- 复杂数据类型
    - <font color="red">数组</font>
        - [null] --> ""(空数组)
        - [undefined] --> ""（空数组)
        - [NaN] --> NaN
        - 其他为对应的��符串形式
    - 其他仍然遵照ToString类型

##### 5.2.1.1 JSON.stringify(obj)
- 不属于强制转换类型，但是结果是返回一个string类型  
- (1) string，number，null，boolean的 JSON.stringify(..) 规则与 ToString 基本相同。
- (2) 若要转化的是对象时
  - 判断是否有toJSON函数，调用toJSON函数得到结果
```javascript
    JSON.stringify( 42 ); // "42"
    JSON.stringify( "42" ); // ""42"" （含有双引号的字符串）
    JSON.stringify( null ); // "null"
    JSON.stringify( true ); // "true"
```
- 不安全的JSON值
    - undefined、function、symbol（ES6+）和包含循环引用（对象之间相互引用，形成一个无限循环）的对象都不符合 JSON结构标准
        - 在对象中遇到 undefined、function 和 symbol 时会自动将其忽略
        - 在数组中遇到 undefined、function 和 symbol 时则会返回 null
```javascript
    JSON.stringify( undefined ); // undefined
    JSON.stringify( function(){} ); // undefined
    JSON.stringify(
        [1,undefined,function(){},4]
    ); // "[1,null,null,4]"
    JSON.stringify(
        { a:2, b:function(){} }
    ); // "{"a":2}"
```
##### 5.2.1.1.1 JSON.stringify(obj)针对于对象
- 自定义JSON的输出
    - 条件
        - 如果要对含有非法 JSON 值的对象做字符串化，或者对象中的某些值无法被序列化时，就需要定义 toJSON() 方法来返回一个安全的 JSON 值(不会报错)
        - 某些属性不想被JSON化
- 定义obj.toJSON()函数
    - 返回一个能够被字符串化的安全的 JSON 值，再由 JSON.stringify(..) 对其进行字符串化
        - 返回的可以是安全的JSON值，即任何类型
```javascript
    var a = {
        b: 5,
        c: 4
    }
    // 只JSON化对象和对应的b属性
    a.toJSON = function() {
        return {
            b: this.b
        }
    }
    console.log(JSON.stringify(a))
    // 

```
- 使用JSON.stringify(obj[, replacer[, space]])
    - 参数replacer
        - 如果 replacer 是一个数组，那么它必须是一个字符串数组，其中包含序列化要处理的对象的属性名称，除此之外其他的属性则被忽略。
        - 如果 replacer 是一个函数，它会对对象本身调用一次，然后对对象中的每个属性各调用一次，每次传递两个参数，键和值
    - 参数space(string/number)
        - 键值前面个的空格的值
```javascript
    var a = {
        b: 42,
        c: "42",
        d: [1,2,3]
    };
    JSON.stringify( a, ["b","c"] ); // "{"b":42,"c":"42"}"
    JSON.stringify( a, function(k,v){
        if (k !== "c") return v;
    } );
    // "{"b":42,"d":[1,2,3]}"
```
```javascript
    var a = {
        b: 42,
        c: "42",
        d: [1,2,3]
    };
    JSON.stringify( a, null, "-----" );
    // "{
    // -----"b": 42,
    // -----"c": "42",
    // -----"d": [
    // ----------1,
    // ----------2,
    // ----------3
    // -----]
    // }"
```
#### 5.2.2 ToNumber规则
- 非数字类型到数字类型的转化
- ![toNumber_rule](./img/toNumber_rule.jpeg);
- 规则
    - 基本数据类型
      - undefined
        - undefined --> NaN
      - null
        - null --> 0 
      - boolean
        - true --> 1, false --> 0
      - true 转换为 1，false 转换为 0。
      - string
        - "n" --> n 符合Number规则
        - "" --> 0
        - 不符合语法规则 --> NaN
    - 对象
        - 调用抽象操作 ToPrimitive, 检查是否有valueOf()
            - 封装对象(有valueOf函数)
                - 被转换为相应的基本类型值，如果返回的是非数字的基本类型值，遵循基本数据类型转化
            - 非封装对象（无valueOf函数），检查是否有toString()函数
                - 如果有，返回toString函数的值，然后根据基本数据类型的规则来得到结果
                - 如果没有，则返回TypeError
```javascript
    var a = [1, 3, 4]
    console.log(Number(a)) // NaN
    /**
    *   无valueOf函数
    *   有toString函数："1,3,4"
    *   string不符合Number语法：返回NaN
    */
    var b = {a: 1, b: 2}   // NaN
    /**
    *   无valueOf函数
    *   有toString函数:Object#toString.call(a) [object, object]
    *   string不符合Number语法：返回NaN
    */
    var c = "134"
    console.log(console.log(c)) // 134

    var d = []
    /**
    *   无valueOf函数
    *   有toString函数：""
    *   string为空，返回0
    */
```
#### 5.2.3 ToBoolean规则
- ![规则](./img/ex6.jpeg)
```javascript
    var a = new Boolean(false);
    console.log(Boolean(a));
    // true
    var b = [];
    console.log(Boolean(b))
    // true
```
##### 4.2.3.1 假值
- 假值对象（对以下的情况进行封装的对象）
- undefined
- null
- false
- +0、-0 和 NaN
- ""
### 5.3 显式强制类型转换
#### 5.3.1 其他类型转换为字符串
##### 4.3.1.1 String(obj)
- 运用了ToString规则进行转换为string
##### 4.3.1.2 obj.toString()
- 若obj本身有toString函数，则可以用这种形式，返回相应的string
- 若没有，则采用Object#toString.call(obj)，结果返回\[object, \[\[Class\]\]\]
#### 5.3.2 其他类型转换为数值
##### 5.3.2.1 Number(obj)
- 运用了ToNumber规则进行转换为number
##### 5.3.2.2 obj.toNumber()
- 若obj本身有toString函数，则可以用这种形式，返回相应的string
##### 5.3.2.3 parseInt(obj, radix), parseFloat(obj)
- 注意ES5以前要注意写radix
- 和Number以及obj.toNumber要区别开来
- 其他过程和toNumber规则类似
- 区别在于对于string基本类型的处理
    - 解析允许字符串中含有非数字字符，解析按从左到右的顺序，如果遇到非数字字符就停止。而转换不允许出现非数字字符，否则会失败并返回 NaN
```javascript
    var a = [1,4,5]
    console.log(Number(a));
    // NaN
    console.log(parseInt(a));
    // 1
```
- 特殊例子
```javascript
    parseInt( 0.000008 ); // 0 ("0" 来自于 "0.000008")
    parseInt( 0.0000008 ); // 8 ("8" 来自于 "8e-7")
    parseInt( false, 16 ); // 250 ("fa" 来自于 "false")
    parseInt( parseInt, 16 ); // 15 ("f" 来自于 "function..")
    parseInt( "0x10" ); // 16
    parseInt( "103", 2 ); // 2
```
#### 5.3.3 其他类型转换为布尔类型
##### 5.3.3.1 Boolean()
- 运用ToBoolean规则(不常用)
##### 5.3.3.2 !!
- 运用ToBoolean规则，将其他类型转化为boolean，实际上已经是隐式转化了
#### 5.3.4 特殊符号的类型转化
##### 5.3.4.1 +
- 若+的左右运算数中都是number类型，则正常进行加法运算
- 若+的左右运算数中存在string类型，则非string类型会进行隐式转化，再进行拼接
- 若+的左右运算数中除了上述的两种情况，则两个运算数都会隐式转化为string类型，再进行拼接。
```javascript
  console.log(typeof 123 + '')
  // string
```
###### 5.3.4.1.1 若+号只有一个操作数
- 将相应的操作数转化为Number类型
```javascript
  +"fjioej" // NaN
  +"2232"   // 2232
```
##### 5.3.4.2 ~ + 整数
- ~符号的隐含操作（补码）
    - 转换为32为有符号的整数
    - -(x + 1)
- 应用，在查找是否有对应的index过程中, 可以将这样形式的判断转化为真假值的判断
    - 如果有，则返回相应的index
    - 没有，则返回-1
```javascript
    function foo(a, value) {
        if(~a.indexOf(value)) {
            console.log(value + " in a");
        }
        else {
            console.log("Not in");
        }
    }  
    var a = [1,3,4]

    foo(a, 3);
    foo(a, 5);
    // 3 in a
    // Not in

```
### 5.4 隐式强制类型转换
#### 5.4.1 常见的隐式转化
##### 5.4.1.1 在有运算符+
- 隐式和显示是相对的，不是绝对的
- +的操作符有一个是字符串类型
    - 其他类型会先运用toString规则隐式转化为对应的string类型，再进行拼接
```javascript
    var a = []
    console.log([] + "")
    // ""
    var b = {};
    console.log(b + "")
    // [object, Object]
```
##### 5.4.1.2 在有运算符-
- -的操作符有一个是Number类型
    - 其他类型会先运用toNumber规则隐式转化为对应的number，再进行计算
```javascript
  console.log(100 - "95");
  // 5
  console.log(100 - 'abc');
  // NaN
```
##### 5.4.1.3 隐式转化为Boolean类型
- <font color="red">转化的实质是判断false是否在false的取值中</font>
- (1) if (..) 语句中的条件判断表达式。
- (2) for ( .. ; .. ; .. ) 语句中的条件判断表达式（第二个）。
- (3) while (..) 和 do..while(..) 循环中的条件判断表达式。
- (4) ? : 中的条件判断表达式。
- (5) 逻辑运算符 ||（逻辑或）和 &&（逻辑与）左边的操作数（作为条件判断表达式）。
- (6) ||
    - 注意不是返回true或者false，而是true变量的返回值
    - 短路操作
    - 返回值是第一个true的对应的值
        - 即先转化为boolean类型判断真假，再返回相应的值
- && 
    - 短路操作
    - 常用于判断是否存在某个属性，从而能执行相应的函数
##### 5.4.1.4 符号类型的隐式转化
- 不符合规范
```javascript
    var a = Symbol("hello")
    console.log(String(a))
    // "Symbol(hello)"
    console.log(a + "") 
    // TypeError
```
### 5.5 宽松相等和严格相等与隐式转化
- 区别
    - == 允许在相等比较中进行强制类型转换，而 === 不允许
#### 5.5.1 ==隐式类型转化的一般规则
- 方法（判断两侧的数据类型）
  - 第一步：左右两侧都是对象类型，则判断对象 === 对象
  - 第二步（以下方法存在优先级）
    - 1. 存在对象类型，调用toString(obj)
    - 2. 存在字符串类型，调用toNumebr(str)
    - 3. 存在布尔类型，调用toNumber(boolean)
  - 第三步
    - 若左右两侧的基本类型相同，则判断左 === 右
    - 若存在undefine，null，NaN则根据特殊规则进行判断（其中有undefined == null)         
  - 第四步：循环步骤第二步，第三步知道左右两端的类型相同为止
  - 采用查表的方式
    - ![比较表格](./img/equal.JPG)
```javascript   
    2 == [2]; // true
    /**
    * 数值 == 对象
    * 2 == ToString([2]) --> "2"
    * 数值 == 字符串
    * 2 == ToNumber("2") --> 2
    *    true
    */
    "" == [null]; // true
    /**
    * 字符串 == 对象
    * "" == ToString([null]) --> ""
    *    true
    */

    42 == "43"; // false
    /**
    * 数值 == 字符串
    * 42 == ToNumber("43") --> 43s
    *    false
    */
    42 == "foo"; // false
    /**
    * 数值 == 字符串
    * 42 == ToNumber("foo") --> NaN
    *    false
    */
    "true" == true; // false
    /**
    *  字符串 == 布尔值
    * ToNumber("true") --> NaN == ToNumber(true) --> 1
    *    false
    */
    "foo" == [ "foo" ]; // true
    /**
    *  字符串 == 对象
    * "foo" == ToString(["foo"]) --> "foo"
    *    true
    */
    
```
##### 4.5.1.1 字符串和数字的宽松相等
(1) 如果 Type(x) 是数字，Type(y) 是字符串，则返回 x == ToNumber(y) 的结果。
(2) 如果 Type(x) 是字符串，Type(y) 是数字，则返回 ToNumber(x) == y 的结果。
- 利用ToNumber规则将字符串转化为数字进行判断相等
##### 4.5.1.2 其他类型和布尔类型
(1) 如果 Type(x) 是布尔类型，则返回 ToNumber(x) == y 的结果；
(2) 如果 Type(y) 是布尔类型，则返回 x == ToNumber(y) 的结果。
- 利用ToNumber将布尔类型转化为数字进行判断（可能还需要再接着转化）
- 千万不要出现a == true, b == false的形式，而是
```javascript
    // 这样的显式用法没问题：
    if (a) {
    // ..
    }
    // 这样的显式用法更好：
    if (!!a) {
    // ..
    }
    // 这样的显式用法也很好：
    if (Boolean( a )) {
    // ..
    }
```
##### 4.5.1.3 null和undefined的比较
(1) 如果 x 为 null，y 为 undefined，则结果为 true。
(2) 如果 x 为 undefined，y 为 null，则结果为 true。
- 条件判断 a == null 仅在 doSomething() 返回非 null 和 undefined 时才成立
```javascript
    var a = doSomething();
    if (a == null) {
    // ..
    }
    // 相当于
    var a = doSomething();
    if (a === undefined || a === null) {
        // ..
    }
```
##### 4.5.1.4 对象和非对象的比较
(1) 如果 Type(x) 是字符串或数字，Type(y) 是对象，则返回 x == ToPrimitive(y) 的结果；
(2) 如果 Type(x) 是对象，Type(y) 是字符串或数字，则返回 ToPromitive(x) == y 的结果。
- 即将对象转化为基本类型再进行比较
##### 4.5.1.5 特殊情况
```javascript
    "0" == null; // false
    /**
    *   字符串 == null
    *   ToNumber("0")--> 0 == null
    *   false
    */
    "0" == undefined; // false
    /**
    *   字符串 == undefined
    *   ToNumber("0")--> 0 == undefined
    *   false
    */
    "0" == false; // true -- 晕！
    /**
    *   字符串 == 布尔
    *   "0" == ToNumber(false) -> 0
    *   字符串 == 数值
    *   ToNumber("0")--> 0 == 0
    *   True
    */
    "0" == NaN; // false
    /**
    *   字符串 == NaN
    *   ToNumber("0")--> 0 == NaN
    *   false
    */
    "0" == 0; // true
    /**
    *   字符串 ==数值
    *   ToNumber("0")--> 0 == 0
    *   true
    */
    "0" == ""; // false
    /**
    *   字符串 == 字符串
    *   false
    */

    false == null; // false
    /**
    *   布尔值 == null
    *   ToNumber(false)--> 0 == null
    *   false
    */
    false == undefined; // false
    /**
    *   布尔值 == undefined
    *   ToNumber(false)--> 0 == undefined
    *   false
    */
    false == NaN; // false
    /**
    *   布尔值 == NaN
    *   ToNumber(false)--> 0 == NaN
    *   false
    */
    false == 0; // true -- 晕！
    /**
    *   布尔值 == 数值
    *   ToNumber(false)--> 0 == 0
    *   true
    */
    false == ""; // true -- 晕！
    /**
    *   布尔值 == 字符串
    *   ToNumber(false)--> 0 == ""
    *   数值 == 字符串
    *   0 == ToNumber("") --> 0
    *   true
    */
    false == []; // true -- 晕！
    /**
    *   布尔值 == 对象
    *   ToNumber(false)--> 0 == []
    *   数值 == 字符串
    *   0 == ToNumber([]) --> 0
    *   true
    */
    false == {}; // false
    /**
    *   布尔值 == 对象
    *   ToNumber(false)--> 0 == {}
    *   数值 == 字符串
    *   0 == ToNumber([]) --> [object, Object] --> NaN
    *   false
    */

    "" == null; // false
    "" == undefined; // false
    "" == NaN; // false
    "" == 0; // true -- 晕！
    // toNumber("") -> 0
    "" == []; // true -- 晕！
    // toNumber("") -> 0 toNumber([]) == 0
    "" == {}; // false
    // toNumber("") -> 0 toNumber([])

    0 == null; // false
    0 == undefined; // false
    0 == NaN; // false
    0 == []; // true -- 晕！
    /**
    *   数值 == 对象
    *   0 == ToNumber([]) --> 0
    *   true
    */
    0 == {}; // false
    /**
    *   数值 == 对象
    *   0 == ToNumber({}) --> [object, Object] --> NaN
    *   false
    */

    [] == ![] // true
    // !先执行，将其转化为对应的相反的布尔值：false, [] == false
    // 都ToNumber([]) --> 0 == ToNumber(false) == 0

```
#### 5.5.2 抽象关系比较
- === 是没有对应的抽象关系比较的
- a </> b额隐式强制转化
    - 比较双方都是字符串类型
        - 如果比较双方都是字符串，则按字母顺序来进行比较
    - 其他情况
        - 双方首先调用 ToPrimitive，如果结果出现非字符串，就根据 ToNumber 规则将双方强制类型转换为数字来进行比较
- />=, <=的在js中的处理方式
- a >= b 的result为 !(a < b)
- a <= b 的result为 !(a > b)
```javascript
    var a = { b: 42 };
    var b = { b: 43 };

    a < b; // false
    a == b; // false
    a > b; // false

    a <= b; // true
    /*
    *  因为a>b为false，所以取反为true
    */
    a >= b; // true
```
#### 5.5.3 == 使用的注意事项
- 如果两边的值中有true或false，千万不要使用==
- 如果两边的值中有[],""或者0, 尽量不要使用==
### 5.6 总结
- 强制类型转换：包括显式和隐式
- 显式强制类型转换明确告诉我们哪里发生了类型转换，有助于提高代码可读性和可维护性。
- 隐式强制类型转换则没有那么明显，是其他操作的副作用。感觉上好像是显式强制类型转换的反面，实际上隐式强制类型转换也有助于提高代码的可读性。


# 三 js的基础语法
## 1. 数组
- 在js获取一个不存在的索引值，不会保存，结果为undefined
### 1.1. 创建数组的两种方法
- 方法1 new Array(obj) / Array(obj)
  - obj
    - 参数列表
      - 不推荐只有一个参数,因为该参数是长度，不符合规则
    - array
- 方法2 Array.of(obj) --- ES6
  - obj
    - 参数列表
    - 只有一个参数，该参数指的是第一个元素
  - array
- 方法3：字面量
```javascript
  let arr1 = new Array(1, 2, 3);
  let arr2 = Array.of(3);
  let arr3 = [1, 2, 4];

  console.log(arr1);
  console.log(arr2);
  console.log(arr3);

  // [1, 2, 3]
  // [3]
  // [1, 2, 4]
```

### 1.2 数组元素的增删改查
#### 1.2.1 数组元素的添加
#### 1.2.1.1 利用索引直接添加
- js数组可以直接通过索引添加数组，其他没有被添加的数组则默认为undefined
#### 1.2.1.2 Array#push(...val)
- 向数组的后面添加val元素，返回undefined
#### 1.2.1.3 Array#unshift(...val)
- 向数组的前面添加val元素，返回undefined
#### 1.2.1.4 Array#fill(val[start[, end]]);
- 填充[start, end)的元素为val
  - 若没有start，则填充全部
  - 若没有end，则从start开始填充到最后
#### 1.2.2 数组元素的删除
#### 1.2.1.2 Array#pop()
- 删除数组的最后一个元素，返回该元素，若数组为空，则返回undefined
#### 1.2.1.3 Array#unshift()
- 删除数组的最前面一个元素，返回该元素，若数组为空，则返回undefined
#### 1.2.3 数组元素的修改
#### 1.2.4 数组元素的访问
##### 1.2.4.1 [index]
- 通过索引访问第index元素
##### 1.2.4.2 Array#indexOf（val)
- 返回值为val的元素的序列
  - 若不存在，则返回-1




### 1.3 数组的常用函数
#### 1.3.1 Array.length
- 返回数组当前的长度
#### 1.3.2 Array#join([separator])
- 参数
  - sparator: 指定一个字符串来分隔数组的每个元素
    - 默认值为','
- 返回用其分割的字符串
#### 1.3.3 Array#toString()
- 返回以逗号分割的字符串
#### 1.3.4 Array#slice([begin, [end]])
- 参数
  - 没有begin：截取整一个数组
  - begin: 从begin开始截取该数组
    - 若没有end
      - begin为正数，从begin开始到最后
      - begin为负数，从倒数第i个到最后一个
  - end
    - 到end结束，不包括end
- 返回[start,end)截取的数组
###### 1.3.4.1 使用Array#slice将类数组转化为数组
```javascript
  function list() {
    return Array.prototype.slice.call(arguments);
    // return [].slice.call(arguments)
  }

  var list1 = list(1, 2, 3); // [1, 2, 3]
```
#### 1.3.5 Array#splice(start[, deleteCount[, item1[, item2[, ...]]]])
- 通过删除或替换现有元素或者原地添加新的元素来修改数组
- 返回
  - 数组形式返回原数组中被修改的内容。
- 参数
  - start：开始的index
  - deletCounet：删除的数量
  - item[1-n]:添入的元素
##### 1.3.5.1 Array#splice的应用
```javascript
  // 1. 用于替换数组中的第index元素
  // Array#splice(index, 1, replacement)
  let arr = [1, 2, 4];
  console.log("arr: ", arr);
  arr.splice(1, 1, 3);
  console.log("arr: ", arr);
// [1, 2, 4]  [1, 3, 4]

  // 2. 用于向index插入元素
  // Array#splice(index, 0, addition)
  let arr1 = [1, 2, 4];
  console.log("arr1: ", arr1);
  arr1.splice(1, 0, 3);
  console.log("arr1: ", arr1);
// [1, 2, 4]  [1, 5]

  // 3. 删除index之后(包含index）的元素
  // Array#splice(index, Array.lenght - index)
  let arr2 = [1, 2, 4];
  console.log("arr2: ", arr2);
  arr2.splice(1, arr2.lenght - 1);
  console.log("arr2: ", arr2);
// [1, 2, 4]  [1]

```
#### 1.3.6 Array#sort([func])
- 排序后的数组。请注意，数组已原地排序，并且不进行复制。
- func(ele1, ele2)  
  - 按照func函数进行排列
    - return 1 -- ele1,ele2的位置需要改变
    - return -1 -- ele1,ele2的位置是不需要改变
```javascript
  class Foo {
    constructor(value) {
      this.value = value;
    }
  }
  const arr = [new Foo(3), new Foo(5), new Foo(4)];
  /*无法进行排序
  arr.sort();
  console.log(arr);
  */
  arr.sort((ele1, ele2) => {
    if(ele1.value < ele2.value)
      return -1;
    else
      return 1;
  });
  console.log(arr);

  // 3，4，5
```
#### 1.3.7 Array#reverse()
- 返回颠倒后的数组
#### 1.3.8 Array#concat(value1[, value2[, ...[, valueN]]])
- 参数
  - value[1-n]: 值或者数组
- 返回连接后的数组
  - 使用的是浅拷贝
### 1.4 数组的函数编程
#### 1.4.1 Array#forEach(callback(currentValue [, index [, array]])[, thisArg])
- 遍历数组对象
- 返回undefined
  - 里面的修改会影响原arr
- 参数
  - callback
    - 遍历的回调函数
    - 注意三者的顺序
  - thisArg
    - 回调函数中this的指向

#### 1.4.2 Array#map(callback(currentValue [, index [, array]])[, thisArg])
- 遍历数组对象并返回经过回调函数筛选（即结果为true）的数组
  - 里面的修改不会影响原arr
- 参数
  - callback
    - 遍历的回调函数
    - 注意三者的顺序
  - thisArg
    - 回调函数中this的指向
#### 1.4.3 Array#filter(callback(currentValue [, index [, array]])[, thisArg])
- 遍历数组对象并返回经过回调函数筛选后的数组
  - 里面的修改不会影响原arr
- 参数
  - callback
    - 遍历的回调函数，必须返回布尔值
    - 注意三者的顺序
  - thisArg
    - 回调函数中this的指向

#### 1.4.4 Array#some(callback(element[, index[, array]])[, thisArg])
- 遍历数组对象并返回经过回调函数后的布尔值
  - 若里面每一个都满足回调函数的条件，则返回true
  - 里面的修改不会影响原arr
- 参数
  - callback
    - 遍历的回调函数，必须返回布尔值
    - 注意三者的顺序
  - thisArg
    - 回调函数中this的指向
#### 1.4.5 Array#every(callback(element[, index[, array]])[, thisArg])
- 遍历数组对象并返回经过回调函数后的布尔值
  - 若里面存在满足回调函数的条件，则返回true
  - 里面的修改不会影响原arr
- 参数
  - callback
    - 遍历的回调函数，必须返回布尔值
    - 注意三者的顺序
  - thisArg
    - 回调函数中this的指向
#### 1.4.6 Array#reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
- 遍历数组对象并归约数组，并返回最后的结果
  - 里面的修改不会影响原arr
- 参数
  - callback
    - 遍历的回调函数，必须返回布尔值
    - 第一个参数为preValue
  - initialValue
    - 初始值，默认为0
```javascript
  function sum(...argv) {
    return argv.reduce((preValue, currentValue) => preValue + currentValue, 0);
  }

  function mul(...argv) {
    return argv.reduce((preValue, currentValue) => preValue * currentValue, 1);
  }
  const arr = [1, 2, 3, 4, 5];
  console.log(sum(...arr));
  console.log(mul(...arr));
  //   15 120
```
### 1.5. 遍历数组
- 方法1：
  - Array#forEach((value, index) => {...})
- 方法2：
  - for...in...
    - 遍历index
- 方法3：
  - for...of...
    - 遍历value
- 方法4
  - for(let i = 0;i < arr.length;i ++)


### 1.6. 注意事项
#### 1.6.1. 数组名的赋值
- 不要直接给数组名赋值，否则数组指向的堆的内存会被垃圾处理代码清空

## 2. 对象
### 2.1. 面向对象的编程
#### 2.1.1 面向过程的编程(POP)(Process-oriented programming)
- 分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候在一个一个依次调用即可
#### 2.1.2. 面向对象编程(OOP)(Oject-oriented programming)
- 把事务分解成一个个对象，然后对象之间分工与合作
- 特点  
  - 封装性
  - 继承性
  - 多态性
### 2.2. 面向对象编程的思维特点
- 抽取（抽象）对象共用的属性和行为组成（封装）成一个类（模板）
- 对类进行实例化，获取类的对象
### 2.3. 对象的基本组成
#### 2.3.1. 属性
事物的特征，在对象中用属性来表示
#### 2.3.2. 方法
对象的行为，在对象中用方法来表示
### 2.4 对象
#### 2.4.1 对象的定义形式
- 声明/文字形式
    - 添加多个键值对
- 构造形式
    - 逐个添加属性
```javascript
    // 文字形式
    var obj = {
        // ...
    }
    // 构造形式
    var obj = new Object();
    myObj.key = value;
```
#### 2.4.2 对象的分类
- 根据对象的定义形式，可以分为两类
##### 2.4.2.1 普通对象
- 方法1：直接通过字面量进行定义
- 方法2：通过new Object()来进行定义
  - 实际上也可以成为Object的实例对象，但这里暂且不这么认为
```javascript
  let obj = {
    a: 4;
  }

  let obj1 = new Object();
```
##### 2.4.2.2 类的实例对象
- 方法1：通过new和构造函数创建对象
- 方法2：对象委派
  - Object.create(o)
```javascript
  let obj = new Foo();

  let obj = Object.create(Foo.prototype)
  // 实例对象的__proto__指向类的原型对象
```
#### 2.4.3 对象的属性访问和修改
- 在对象中，<font color="red">属性名永远都是字符串</font>。如果你使用 string（字面量）以外的其他值作为属性名，那<font color="red">它首先会被转换为一个字符串</font>,即使是数字也不例外
##### 2.4.3.1 属性访问
- 只能使用对应的属性值才能进行访问
- 若不是访问而是赋值
    - 可以用于添加新的属性和值（必须有两者）
```javascript
    var myObject - {
        a: 2
    }
    console.log(myObject.a)
```
##### 2.4.3.2 键值访问
- 要求键值的规范
    - 而 [".."] 语法可以接受任意 UTF-8/Unicode 字符串作为属性名
    - 可以使用字符串的变量来进行访问
    - ES6增加了可计算属性名，即可以使用表达式来作为[]内的字符串
- 若不是访问而是赋值
    - 可以用于添加新的属性和值（必须有两者）
```javascript
    var myObject - {
        a: 2
    }
    console.log(myObject["a"])
```
#### 2.4.4 理解对象属性访问的默认操作
##### 2.4.4.1 [[ Get ]](用于属性的访问)
- myObject.a 在 myObject 上实际上是实现了 [[ Get ]] 操作
    - 对象默认的内置 [[ Get ]] 操作首先在当前对象中查找是否有名称相同的属性，如果找到就会返回这个属性的值。
    - 如果没有找到遍历可能存在的 [[ Prototype ]] 链，也就是原型链
    - 还是没有找到，放回undefined
- 这种方法和访问变量时是不一样的。如果你引用了一个当前词法作用域中不存在的变量，并不会像对象属性一样返回 undefined，而是会抛出一个 ReferenceError 异常：
##### 2.4.4.2 [[ Put ]]（用于属性的新增和修改）
- [[Put]] 算法大致会检查下面这些内容。
  - 1. 属性是否是访问描述符？如果是并且存在 setter 就调用 setter。
  - 2. 属性的数据描述符中 writable 是否是 false ？如果是，在非严格模式下静默失败，在严格模式下抛出 TypeError 异常。
  - 3. 如果都不是，将该值设置为属性的值。
##### 2.4.4.3 如何判断是否具有某个属性
- 方法一：使用属性访问，若<font color="red">实例对象和原型链中</font>没有该属性，则返回undefined
```javascript
    obj.a //返回undefined
```
- 使用
- 方法二：使用in，若<font color="red">实例对象和原型链中</font>没有该属性，则返回false
```javascript
    prop in obj
```
- 方法3 若<font color="red">实例对象中</font>没有该属性，则返回false
  - 注意不检查原型链
  - Object.prototype.hasOwnProperty.call(obj, prop) 或者
  - obj.hasOwnProperty(prop)
```javascript   
    obj.hasOwnProperty(prop)
```
#### 2.4.5 对象的复制
- 对象的存储
    - obj[key]即对应的value
        - 基本类型：存储该值
        - 复杂类型：存储该复杂类型数据所在堆中的地址
##### 2.4.5.1 浅复制
- 基本数据类型有进行复制
    - Object.assign(target, ...sources)
- 复杂数据类型只是指向对应的堆的地址，没有对其进行赋值
##### 2.4.5.2 深复制
```javascript
    const newObj = {}
    function deepCopy(oldObj, newObj) {
        Object.keys(oldObj).forEach((key, index) => {
            let value = oldObj[key];
            if(value instanceof Array) {
                newObject[key] = [];
                deepCopy(value, newObject[key]);
            }
            else if(value instanceof Object) {
                newObject[key] = {};
                deepCopy(value, newObject[key]);
            }
            else {
                newObject[key] = value;
            }
        })
    }
```
#### 2.4.6 对象的属性描述符
- 对象属性对应的值实际上是一个对象
    - value
        - 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。
        - 默认为undefined
    - 后面三个对应了该属性的一些特性（即属性描述符）
        - writable
            - 当且仅当该属性的 writable 键值为 true 时，属性的值，也就是上面的 value，才能被赋值运算符改变。
            - 默认值为false
        - configurable
            - 当且仅当该属性的 configurable 键值为 true 时，该属性的描述符才能够被改变，同时该属性也能从对应的对象上被删除。
            - 默认值为false
        - enumerable
            - 当且仅当该属性的 enumerable 键值为 true 时，该属性才会出现在对象的枚举属性中。
            - 默认值为false
        - get
            - 属性的 getter 函数。当访问该属性时，会调用此函数。执行时不传入任何参数，但是会传入 this 对象（由于继承关系，这里的this并不一定是定义该属性的对象）。该函数的返回值会被用作属性的值。
            - 默认为undefined
        - set 
            - 属性的 setter 函数。当属性值被修改时，会调用此函数。该方法接受一个参数（也就是被赋予的新值），会传入赋值时的 this 对象。
            - 默认为undefined
- 若在不允许的情况下对相应的属性描述符或者属性值进行修改，则会返回TypeError
```javascript
    {
        value: 2,
        writable: true/false;
        configurable: true/false;
        enumerable: true/false;
        // 在访问该属性时调用
        get() {
            // ...
            return 
        }
        // 在修改该属性时调用
        set() {
            // ...
        }
    }
```
##### 2.4.6.1 对对象属性特性的操作
###### 2.4.6.1.1 Object.defineProperty()
- 给obj添加/修改一个普通的属性并显式指定/修改了一些特性
```javascript
    Object.defineProperty(obj, prop, descriptor)
```
- 参数
    - obj：要定义属性的对象
    - prop: 要定义或修改的属性的名称或 Symbol
    - descriptor: 要定义或修改的属性描述符。(使用对象)
- 返回值
    - 被传递给函数的对象。
```javascript
    var obj = {};
    Object.definePropety(obj, "a", {
        value: 2,
        writable: false,
        configurable: true,
        enumerable: true
    })
```
##### 2.4.6.2 对象属性的不变性
###### 2.4.6.2.1 对象常量
- 将对象属性特性
    - writable: false
    - configurable: false
##### 2.4.6.3 对象的不变性
###### 2.4.6.3.1 Object.preventExtensions(obj)
- 禁止对一个对象增添新的属性并且保存已有的属性
    - Object.preventExtensions()仅阻止添加自身的属性。但其对象类型的原型依然可以添加新的属性。
```javascript
    Object.preventExtensions(obj);
    Object.isExtensions(obj)
    // 判断一个对象是否是不可扩展的对象
```
- 参数
    - obj：将要变得不可扩展的对象。
- 返回值
    - 已经不可扩展的对象。
###### 2.4.6.3.2 Object.seal(obj)
- __proto__属性的值也会不能修改。
- Object.preventExtensions(obj) + configurable: false
```javascript
    Object.seal(obj);
```
- 参数
    - obj：将要变得不可扩展的对象。
- 返回值
    - 已经不可扩展的对象。
###### 2.4.6.3.3 Object.freeze(obj)
- __proto__ (  ) 属性的值也会不能修改。
- Object.seal(obj) + wriable: false
```javascript
    Object.freeze(obj);
```
- 参数
    - obj：将要变得不可扩展的对象。
- 返回值
    - 已经不可扩展的对象。
##### 2.4.6.4 不可枚举属性的问题
- 常见的不可枚举的属性
  - symbol属性
  - constructor属性
  - __proto__, prototype
  - 可枚举属性值为false
###### 2.4.6.4.1 obj.propertyIsEnumerable(prop)
- 会检查给定的属性名是否直接存在于对象中
```javascript
    obj.propertyIsEnumerable(prop);
```
###### 2.4.6.4.2 Object.getPropertySymbols(obj)
- 以数组形式返回对象中的symbol属性
```javascript
    Object.getPropertySymbols(obj)
```
#### 2.4.7 对象的遍历
- 利用枚举函数
##### 2.4.7.1 Object.keys(obj)
- 会返回一个数组，包含所有可枚举属性
- 属性只是当前对象的属性，不包含原型链
##### 2.4.7.2 Object.getOwnPropertyNames(obj)
- 会查找对象直接包含的属性(包括不可枚举类型)
- 属性只是当前对象的属性，不包含原型链
##### 2.4.7.3 for...in...(key)
- 可以用来遍历对象的可枚举属性列表（包括 [[Prototype]] 链）
##### 2.4.7.4 for...of...(value)
- 遍历属性的值
- 本质
    - 循环首先会向被访问对象请求一个迭代器对象，然后通过调用迭代器对象的next() 方法来遍历所有返回值
#### 2.4.8 总结
- JavaScript 中的对象有字面形式（比如 var a = { .. }）和构造形式（比如 var a = new Array(..)）。字面形式更常用
- 对象是 6 个（或者是 7 个，取决于你的观点）基础类型之一。对象有包括 function 在内的子类型，不同子类型具有不同的行为，比如内部标签 [object Array] 表示这是对象的子类型数组。
- 对象就是键 / 值对的集合。可以通过 .propName 或者 ["propName"] 语法来获取属性值。访问属性时，引擎实际上会调用内部的默认 [[sGet]] 操作（在设置属性值时是 [[Put]]），[[Get]] 操作会检查对象本身是否包含这个属性，如果没找到的话还会查找 [[Prototype]]链
- 属性的特性可以通过属性描述符来控制，比如 writable 和 configurable。此外，可以使用Object.preventExtensions(..)、Object.seal(..) 和 Object.freeze(..) 来设置对象（及其属性）的不可变性级别。
- 属性不一定包含值——它们可能是具备 getter/setter 的“访问描述符”。此外，属性可以是可枚举或者不可枚举的，这决定了它们是否会出现在 for..in 循环中。
- 你可以使用 ES6 的 for..of 语法来遍历数据结构（数组、对象，等等）中的值，for..of会寻找内置或者自定义的 @@iterator 对象并调用它的 next() 方法来遍历数据值。

### 2.5 类
#### 2.5.1. 类的构造
##### 2.5.1.1 通过函数构造类（构造函数）
- 对象属性
  - 定义
    - this.attrName = ...
    - 子类会创建一个新的内存空间来存储这些属性 
- 类的原型对象方法
  - 定义：
    className.prototype.funcName = function(argv) {...}
  - 置于原型链之中, 在定义时，可以通过this调用其他函数
  - 通过实例对象才能调用的方法（实际上是通过原型链进行调用）
    - classObj.funcName(argv)
- 类方法
  - 定义：
    - className.funcName = function(argv) {...}
  - 通过类名能够调用的方法, 不能被实例对象所调用
    - className.funcName(argv)
```javascript
  function Foo(name) {
      this.name = name;  
  }
  Foo.sayKeyWord = function() {
    console.log("hello world");
  }
  Foo.prototype.sayName = function() {
    console.log(this.name)
  }

  const obj = new Foo("bulumrcai");
  obj.sayName();
  Foo.sayKeyWord();

  console.log("sayKeyWord can be excuted by obj :", obj.sayKeyWord);
  console.log("sayName can be excuted by Foo :", Foo.sayName);
  /*
  bulumrcai
  hello world
  sayKeyWord can be excuted by obj : undefined
  sayName can be excuted by Foo : undefined
  */
```
##### 2.5.1.2 通过class构造类
- 对象属性（在构造函数constructor中定义）
  - 定义
    - this.attrName = ...
    - 子类会创建一个新的内存空间来存储这些属性 
- 类的原型对象方法
  - 直接在class内部定义：
    - funcName(argv) {...}
  - 置于原型链之中, 在定义时，可以通过this调用其他函数
  - 通过实例对象才能调用的方法（实际上是通过原型链进行调用）
    - classObj.funcName(argv)
- 类方法
  - 定义(通过static进行定义）：
    - static funcName(argv) {...}
  - 通过类名能够调用的方法, 不能被实例对象所调用
    - className.funcName(argv)
```javascript
  function Foo {
    constructor() {
      this.name = name; 
    }
    static sayKeyWord() {
      console.log("hello world");
    }
    sayName() {
      console.log(this.name);
    }
  }

  const obj = new Foo("bulumrcai");
  obj.sayName();
  Foo.sayKeyWord();

  console.log("sayKeyWord can be excuted by obj :", obj.sayKeyWord);
  console.log("sayName can be excuted by Foo :", Foo.sayName);
  /*
  bulumrcai
  hello world
  sayKeyWord can be excuted by obj : undefined
  sayName can be excuted by Foo : undefined
  */
```
#### 2.5.2 类的实例对象（通过new构造的对象）
- 通过new + 构造函数（class）创建原型对象
  - new使构造函数中会做的四件事情：
    - 创建一个新的空的对象
    - 这个新对象会执行原型链接
      - obj._/_proto__ = Object.create(funcName.prototype)
    - 这个新的对象会绑定到函数调用的this
      - 由于函数的调用，会生成新的作用域，所以不同实例this指向的函数内部的变量并不是同一个
    - 如果函数没有返回其他对象，那么表达式中的函数调用会自动返回这个新的对象
##### 2.5.2.1. 类的实例对象的成员类型(实例成员，静态成员)
- 构造函数中的属性和方法被称为成员
- 实例成员
  - 构造函数内部通过this添加的成员（this.sayName = functino(){})或这通过原型对象添加的成员
    - 通过this创建的成员在新的实例对象创建时会再存储一次
    - 通过原型对象添加的成员只需存储一次，可以通过原型链进行访问
  - <font color='red'>实例成员只能通过实例化的对象来访问，不可以通过函数来访问实例成员</font>
- 静态成员
  - 在构造函数本身上添加成员
  - <font color='red'>静态成员只能通过函数来访问，不能通过对象实例来访问</font>
#### 2.5.3 类的实例对象的实质
- 创建新的存储空间来存储构造函数中的this指向的成员
- 将实例对象的__proto__对象指向构造函数的prototype构成原型链
#### 2.5.4. 类的实例对象的方法查询规则
- 在实例对象查找对应的方法
- 若没有找到，通过原型链查找对应的方法
#### 2.5.5 类的继承
- 类的继承的实质
  - 子类构造函数继承了父类构造函数的this指向的静态成员
  - 子类构造函数的prototype对象的__proto__指向父类构造函数的prototype
- 创建的子类实例对象的特点
  - 子类实例对象会为构造函数中的this分配新的存储空间以及赋相应的值
  - 子类实例对象的__proto__会指向Son.prototype,其中Son.prototype的__proto__属性则会指向Father.prototype（父类的原型对象）以及Son.prototype的新增的原型对象的方法
##### 2.5.5.1. 原型链
- 所有普通的原型链最终都会指向内置的 Object.prototype
- 每个对象都有__proto__属性
- 当对象是通过构造函数的形式来进行构建的时候，实质上构建的过程包括将对象的__proto__指向构造函数的原型对象（funcName.prototype)
- 构造函数和构造函数之间的继承关系
  - 作为子类的构造函数的原型对象的__proto__属性会指向作为父类的构造函数的原型对象，一般通过以下的方法进行构建
```javascript
  Son.prototype = Object.create(Father.prototype);
  Son.constructor = Son;
```
- 访问某个对象的原型链中的第一个，即__proto__属性的方法
- 方法1：
```javascript
  Object.getPrototypeOf(obj);
  // 在任何浏览器上都可以使用
```
- 方法2
```javascript
  obj.__proto__
  // 在某些浏览器上无法使用
```
###### 2.5.5.1.1 原型链的查询过程
- 从实例对象开始的__proto__指向的原型对象
- 第一类：实例对象
  - 实例对象的__proto__属性指向构造函数的原型对象
```javascript
实例对象
  {
    // ...其他成员
    __proto__: { //构造函数的原型对象
      __proto__: 父类原型对象，
      constructor: 构造函数的名字,
      ...
      // ......该构造函数原型的方法
    }
  }
  
```
- 第二类：构造函数的原型对象
  - 构造函数的原型对象的__proto__属性指向父类的原型对象
- 第三类：父类的原型对象
  - 父类原型对象的__proto__属性指向其父类的原型对象
```javascript
// 父类原型对象
  {
    __proto__: 父类原型对象，
    constructor: 构造函数的名字,
      ...
    // ......该构造函数原型的方法
  }
```
- 后面的都是第三类的循环
- 2.7.1.1.2 实例对象的原型链查询 
- 第一步：实例对象会先在属性__proto__对象中寻找相应的方法
- 第二步：若没有找到相应的方法，则会寻找该__proto__对象中属性__proto__所指向的另一个对象中寻找方法
- 第三步：循环第二步直至找到为止
- 这一个过程即形成了原型链查询
- ![原型链](./img/ex7.jpg)
##### 2.5.5.2 对象属性的访问和设置
###### 2.5.5.2.1 访问对象属性(prop)的过程
- 第一步：查看当前的对象属性中有没有所需要的属性
  - 若有，则返回属性值
  - 若没有，则执行第二步
- 第二步：按照先后顺序遍历原型链查看原型链中有没有所需要的属性
  - 若有，则返回属性值
  - 若没有，则返回ReferenceError
- <font color='red'>属性屏蔽</font>
  - 当前对象和原型链中存在相同的属性时，由于访问的先后关系，会造成无法访问到后出现的属性的值，此时把最开始出现的属性称为屏蔽属性，这种属性屏蔽的现象在继承中被称之为<font color='red'>多态</font>
###### 2.5.5.2.2 设置对象属性(prop)的过程
- 查看当前对象的有没有所需要的属性
  - 若存在所需要的属性，则直接修改该属性的值
  - 若不存在所需要的属性
    - 遍历原型链
      - 若<font color="blue">原型链上不存在该属性</font>或者<font color="red">存在该属性但不是只读的类型</font>则直接在该对象上建立该属性，并赋值
      - 若存在该属性而且是只读的类型，则返回TypeError
      - 如果在原型链上存在该属性并且它是一个 setter，则不会有任何操作
- 若设置属性值的时候原型链中存在同样的属性，此时就会造成<font color="red">隐式屏蔽</font>
###### 2.5.5.2.3 隐式屏蔽
- 通过对象委派建立的继承关系，则存在隐式屏蔽的问题
  - 若设置属性值的时候原型链中存在同样的属性，此时就会造成<font color="red">隐式屏蔽</font>
- 在通过new创建的对象，由于构造函数中的this会指向当前的对象，相当于相应构造函数中的属性都成了当前对象的属性，存在隐式屏蔽的问题
```javascript
    var father = {
        a: 2
    }
    var son = Object.create(father);
    console.log(son.a);
    // 2
    son.a ++;

    console.log(son.a);
    console.log(father.a);
    // 3 2
    console.dir(son);
    // 见下图
```
- ![result](./img/hidden_attribute.jpg)
- 若想要使obj的2增加，必须使用obj.a++
##### 2.5.5.3 通过构造函数实现类的继承
- 称为组合继承
- 类的继承的实质
  - 子类构造函数继承了父类构造函数的this指向的静态成员，<font color="red">借用call来实现显示地改变函数中this指向的对象</font>
  - 子类构造函数的prototype对象的__proto__指向父类构造函数的prototype，<font color="red">通过Object.create(Father.prototype)来构建__proto__属性指向Father.prototype的对象</font>
```javascript
  function Father(name) {
    this.name = name;
  }
  Father.welcome = function() {
    console.log("welcome");
  }
  Father.prototype.sayName = function() {
    console.log(this.name);
  }

  function Son(name, label) {
    Father.call(this, name);
    this.label = label;
  }
  Son.prototype = Object.create(Father.prototype);
  // Object.create(Father.prototype)
  // 创建了一个对象，该对象的__proto__属性指向Father.prototype
  Son.prototype.constructor = Son;

  Son.prototype.sayLabel = function() {
    console.log(this.label);
  }
  console.dir(Son);

  const son = new Son("bulumrcai", "hello world");
  console.dir(son);
  son.sayLabel();
  son.sayName();
  // Son.welcome(); // TypeError
  // 若要正常使用静态成员，则需要加上
  Son.prototype.constructor.__proto__ = Father;
  Son.welcome();
```
- ![result](./img/function_inherit.jpg);
###### 2.5.5.2.1 为什么不能使用以下方法来实现原型链的继承
```javascript
  Son.prototype.__proto__  = Father.prototype
```
###### 2.5.5.2.2 为什么不能使用Son.prototype = new Father()
- new Father()会创建一个Father的实例对象
```javascript
  {
    // ...Father中this指向的属性
    __proto__: Father.prototype
  }
```
- 会发现该对象的__proto__确是指向Father.prototype,但是会引入Father的其他一些属性，可能会造成意想不到的错误
###### 2.5.5.2.3 为什么不能使用Son.prototype = Father
- Father是一个函数而不是一个对象
- Father中的__proto__属性指向的是Object.prototype而不是Father.prototype
###### 2.5.5.2.4 如何实现父类静态成员的继承？
- 为什么通过原型链不能继承
  - 静态成员并不位于原型对象之中，因此不能使用原型链继承
- 经过研究，我发现该静态成员实际上位于构造函数原型对象的constructor的__proto__属性之中，因此用一下的方法来时实现静态成员的继承
```javascript
   Son.prototype.constructor.__proto__ = Father;
```
##### 2.5.5.4 通过class中的extends实现继承
```javascript
  class Father {
    constructor(name) {
      this.name = name;
    }
    sayName() {
      console.log(this.name);
    }
    static welcome() {
      console.log("welcome");
    }
  }

  class Son extends Father {
    constructor(name, label) {
      super(name);
      this.label = label;
    }
    sayLabel() {
      console.log(this.label);
    }
  }
  console.dir(Son);

  const son = new Son("bulumrcai", "hello world");
  console.dir(son);
  son.sayLabel();
  son.sayName();
  Son.welcome(); // 能够正常的使用
```
- ![result](./img/class_inherit.jpg);
###### 2.5.5.3.1 class中的super对象
- 在子类的构造函数中，super指的是父类的constuctor函数
  - 调用的时候必须在前面，通过super()进行调用
- 在子类的其他函数中，super指的是原型链上的对象
  - 通过super.funcName()进行调用
###### 2.5.5.3.2 class中的static函数
- 即静态成员，只能通过函数名进行调用，且不位于原型链之中。
- 实际上是位于constructor的__proto__属性之中
#### 2.5.6 类的基本认识
- JavaScript 中实际上没有类，由于类是一种设计模式，所以你可以用一些方法（本章之后会介绍）近似实现类的功能。
- 构造函数
    - 类实例是由一个特殊的类方法构造的，这个方法名通常和类名相同，被称为构造函数
    - 类构造函数属于类，而且通常和类同名，构造函数大多需要用 new 来调
- 类的继承
    - 父类
    - 子类
    - 父母的基因特性会被复制给孩子
    - 子类会包含父类行为的原始副本，但是也可以重写所有继承的行为甚至定义新行为。
- 多态
    - 子类可以重写父类中名字相同的方法，且可以进行调用
    - 在继承链的不同层次中一个方法名可以被多次定义，当调用方法时会自动选择合适的定义
        - 会使用实例化对象的方法
- 混入
#### 2.5.7 类的易混点
- js中并没有所谓的类，只有对象，而是一种类似类的形式
- 所有的函数都会有一个名为prototype的公有并且不可枚举的属性，该属性的值是一个对象，该对象的__proto__属性的值会指向另一个对象
- 所有的对象都具有一个名为__proto__的不可枚举的属性，且该属性指向另一个对象
##### 2.5.7.1 类的实例对象和类的关系
###### 2.5.7.1.1 类的实例的本质
- 若根据类的构造函数创建一个实例时,该实例对象的__proto__会指向该构造函数的prototype
```javascript
    function Foo() {
        // ...
    }

    var obj = new Foo();

    console.log(obj.__proto__ === Foo.prototype)
    console.log(Object.getPrototypeOf(obj) === Foo.prototype)
    // true true
```
###### 2.5.7.1.2 原型继承
- <font color="red">该实例对象的__proto__会指向该构造函数的prototype，这即是原型继承</font>
- 对于js中的类的实例，只是通过原型相互关联，而形成了该类的实例，但本质上是一个对象
###### 2.5.7.1.3 类的实例对象的不可枚举属性constructor本质
- 在类/构造函数进行声明的时候，就会有默认的.prototype.constructor的不可枚举属性，该属性指向本身
```javascript
    function Foo() {
        // ...
    }
    console.log(Foo === Foo.prototype.constructor)
    // true
```
- 在通过new创建实例时，由于原型继承，所以实例中的不可枚举属性constructor实际上就是通过Get方法寻找的原型链上的constructor
```javascript
    function Foo() {
        // ...
    }
    Foo.prototype.constructor = {};
    var obj = new Foo();
    console.log(obj.constructor === Foo)
    // false
```
##### 2.5.7.2 构造函数的本质
- js中的构造函数实质上是带有new的函数调用，即原本的函数不是构造函数，当且仅当使用new时，函数调用才会变成构造函数的调用
- 调用的时候函数才能称为构造函数

##### 2.5.7.3 instanceof判断的实质（对象与函数）
- 实际上判断的是对象的原型链中是不是有指向函数的原型对象的对象，而不能判断对象与对象之间的关联
```javascript 
    console.log(obj instanceof Father)
    // obj的原型链中是否有指向Fahter.prototype
```
##### 2.5.7.4 判断某个对象是否出现在另一个对象的原型链之中
```javascript
    c.isPrototypeOf(b)
    // c对象是否出现在b对象的原型链中

    var obj = {};
    var newObj = Object.create(obj);
    /*
        {
            __proto__: obj
        }
    */
    console.log(obj.isPrototypeOf(newObj))
    // true
```

##### 2.5.7.5 总结
- 如果要访问对象中并不存在的一个属性，[[Get]] 操作（参见第 3 章）就会查找对象内部原型链关联的对象
- 关联两个对象最常用的方法是使用 new 关键词进行函数调用，即使类和实例的关系
#### 2.5.8 注意
- 在生成实例时，new不能够省略，后面的类名一定要加上小括号
- ES6类没有变量提升，必须先定义类，才能通过类实例化对象
- 对象的属性和value的访问方法：
  - 已知具体的属性key
    - obj.key
  - 属性attr是一个变量：一般是用keys进行遍历的时候
    - obj[key]


## 3 函数
### 3.1. 函数的定义
#### 3.1.1. 函数的命名写法（命名函数）
```javascript
  function 函数名() {
    函数封装的代码
    ...
  }

  函数名()
```
#### 3.1.2. 函数的表达式写法（匿名函数）
- 命名函数表达式
```javascript
  const foo = function 函数名() {
    函数封装代码
    ...
  }

  foo();
```
- 匿名函数表达式（没有函数名）
```javascript
  const foo = function() {
    函数封装代码
    ...
  }

  foo();
```
### 3.2. 函数的参数传递
#### 3.2.1. 形参
  - 定义函数时，小括号中的参数，是用来接收参数用的，在函数的内部作为变量
#### 3.2.2. 实参
  - 调用函数时，小括号中的参数，是用来把数据传递到函数的内部用的
#### 3.2.3. 形参变量个数和实参变量个数的关系
- 形参变量个数>实参变量个数 没赋值的默认为undefined
- 形参变量个数<实参变量个数 用arguments对象进行处理
##### 3.2.3.1. arguments对象(现在很少用了)
###### 3.2.3.1.1. 特点1
- 是一个object类型，而不是一个数组(Array类型)，但是和数组的用法类似
###### 3.2.3.1.2. 特点2
- 是所有非箭头函数中都可用的局部变量 
###### 3.2.3.1.3. 特点3
- 存放着所有的调用者传递的参数，从0位置开始，依次存放
  - 如果调用者传入的参数多余函数接收的参数，可以通过arguments去获取所有的传入的参数
```javascript
  function print(val) {
    console.log(val);
    console.log(arguments)
  }

  print("hello", "world")
```
- ![结果验证](./img/res2.jpg)
- 实现多个数的相加
```javascript
  fuction sum() {
    arguments.reduce((prevalue, value) => prevalue + value, 0)
  }
```
#### 3.2.4. 函数参数的值传递和引用传递
- 参数传递的本质
  - 实参将栈中的值赋给了函数中对应的形参，形参在函数的栈中开辟新的空间来存储该值
##### 3.2.4.1. 值传递
- 适用：
  - 基本数据类型
- 特点：
  - 形参改变值不能使得实参的值改变
- 原因：基本类型的数值存储在栈中，开辟新空间来存储该值实际上就是就是对应的数值，所以值改变并不会导致对应的实参的值改变
- ![理解](./img/ex2.jpg)
##### 3.2.4.2. 引用传递
- 适用
  - 复合数据类型(object)
- 特点：
  - 形参改变值的内容会使得实参的值改变
- 原因：复合数据类型存储在栈中的值是对应存储内容的堆的地址（即指针），参数传递实际上传的是地址，所以一旦形参改变了内容，则会导致实参指向的内容改变
- ![理解](./img/ex1.jpg)
### 3.3. 函数的调用形式
- 函数的调用栈
  - 函数的调用过程是一个压栈的过程
  - ![function_use](./img/function_use.jpg)
  - 在开发中尽量避免使用递归
    - 递归如果没有写好约束条件，意味着会无限调用
    - 递归调用非常占用栈空间的内存
#### 3.3.1. 普通函数的调用
- funcName();
- funcName.call();
#### 3.3.2 函数的特殊的调用形式
- <a href='#template-call' >标签模板字面量的调用</a>
#### 3.3.3 采用通过立即调用函数进行调（IIFE）
- 函数定义的同时立即实行函数
- 作用
  - 创建一个独立的执行上下文环境，<font color="red">可以避免外界的访问修改内部的变量，即实现了一个块级作用域的作用</font>
##### 3.3.4.1. 函数声明的立即调用函数规范
- 可以使用立即调用函数，只是需要在定义加上一个小括号后在加上参数列表
- 立即调用函数的写法1：
```javascript
  (function (arg1...) {
    函数封装代码
    ...
  } )(arg1...)
```
- 立即调用函数的写法2
```javascript
  (function (arg1...) {
    函数封装代码
    ...
  }(arg1...) )
```
###### 3.2.5.4.2. 函数的表达式写法可以在后面增加参数列表从而实现函数的立即实行
- 返回的是函数执行的最终结果
```javascript
   const foo = function 函数名(arg1...) {
    函数封装代码
    ...
  }(arg1...)

   const foo = function (arg1...) {
    函数封装代码
    ...
  }(arg1...)
```
- <font color="red">foo的结果不是一个函数，而是函数的返回值</font>
### 3.4. 函数的返回值
- 如果函数中没有使用return语句，那么函数有默认返回值undefined


# 四 JS的知识补充
## 1 作用域
### 1.1 理解作用域
#### 1.1.1 认识三个对话的部分
- 引擎
    - 从头到尾负责整个js程序的编译及执行过程
- 编译器
    - 负责语法分析即代码生成等等
- 作用域
    - 负责收集并维护所有声明的表示符组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限
#### 1.1.2 对话的过程
- var a = 2的三个部分的对话
  - 第一步：编译器查看当前作用域中是否有声明a
    - 若有声明，则忽略声明变量过程
    - 若没有声明，在当前作用域下声明该变量
  - 第二步：编译器生成相应的赋值代码，JS引擎执行赋值代码给a赋值
#### 1.1.3 js引擎查询变量的方法
- LHS查询
    - 查询变量是否已经声明后并给它赋值
- ![LHS](./img/LHS.jpeg)
- RHS查询
    - 变量已经赋值，查询变量的值
- ![RHS](./img/RHS.jpeg)
```javascript 
    function foo(a) {
        console.log(a)
    }

    foo(2);
    // a = 2 为LHS查询，参数的传递
    // console.log(a) 为RHS查询
```

- 练习
``` javascript
    function foo(a) {
      var b = a;
      return a + b;
    }
    var c = foo(2)
    /**
    * 三次LHS查询
    *   1 调用函数时，a需要进行LHS引用
    *   2 b需要进行LHS引用
    *   3 c需要进行LHS引用
    * 四次RHS查询
    *   1 调用foo函数：js引擎询问在该作用域当中有没有foo函数
    *   2 赋值b时，js询问a的值
    *   3 在return时，询问a,b的值
    *   4 赋值c时，js询问函数的返回值
    */
```

- 认清语法LHS和RHS的重要性
```javascript
    function foo(a) {
        console.log(a + b);
        b = a;
    }

    foo(2)
    /*
    *b是一个未声明的变量，所以进行RHS查询时无法找到，是一个undefined类型，抛出ReferenceError
    *若RHS查询对变量进行不符合规范的引用，如变量不是函数全被调用成函数, 抛出TypeError
    * 对b进行LHS查询，由于b没有声明，若在非严格模式下，js引擎会自动帮你创建一个全局变量
    *若严格模式下, js引擎会抛出ReferenceError
    */
```
#### 1.1.4 理解变量的访问
- 要分清楚是LHS还是RHS从而确认变量的访问作用域
### 1.2 作用域嵌套
- 当一个块或函数嵌套在另一个块或函数中时，就发生了作用域的嵌套。
    - 以{}符号作为一个块
- 遍历作用域链的过程
    - 在当前作用域中无法找到某个变量时，引擎就会在外层嵌套的作用域中继续查找，直到找到该变量，或抵达最外层的作用域（也就是全局作用域）为止
- 注意：
  - var的特殊特性；非块级作用域
    - 对于var而言，只有函数的嵌套才存在错用于的嵌套
  - 内部的作用域能够访问外部作用域变量，而外部作用域不能访问内部作用域的变量
### 1.3 总结
- 作用域是一套规则，用于确定在何处以及如何查找变量（标识符）
- 如果查找的目的是对变量进行赋值，那么就会使用 LHS 查询；如果目的是获取变量的值，就会使用 RHS 查询。
- JavaScript 引擎首先会在代码执行前对其进行编译，在这个过程中，像 var a = 2 这样的声明会被分解成两个独立的步骤：
    - 首先，var a 在其作用域中声明新变量。这会在最开始的阶段，也就是代码执行前进行。
    - 接下来，a = 2 会查询（LHS 查询）变量 a 并对其进行赋值。
- 遍历作用域链
    - LHS 和 RHS 查询都会在当前执行作用域中开始，如果有需要（也就是说它们没有找到所需的标识符），就会向上级作用域继续查找目标标识符，这样每次上升一级作用域（一层楼），最后抵达全局作用域（顶层），无论找到或没找到都将停止。
- 异常抛出
    - 不成功的 RHS 引用会导致抛出 ReferenceError 异常。（没有进行声明）
    - 不成功的 LHS 引用会导致自动隐式地创建一个全局变量（非严格模式下），该变量使用 LHS 引用的目标作为标识符，或者抛出 ReferenceError 异常（严格模式下）。
### 1.4 词法作用域
- 词法作用域是一种静态作用域，即某个变量在声明的时候就已经确定了其作用域范围，该变量的作用域即是该变量的词法作用域
#### 1.4.1 欺骗词法
##### 1.4.1.1 eval()
```javascript
    function foo(str, a) {
        eval(str); // 欺骗
        console.log(a, b);
    }
    var b = 2;
    foo("var b = 3;", 1) // 1, 3
    // 当 console.log(..) 被执行时，会在 foo(..) 的内部同时找到 a 和 b，但是永远也无法找到外部的 b
```
- 默认情况下，如果 eval(..) 中所执行的代码包含有一个或多个声明（无论是变量还是函数），就会对 eval(..) 所处的词法作用域进行修改。
- 严格模式下,eval(..) 在运行时有其自己的词法作用域，意味着其中的声明无法修改所在的作用域。
```javascript
    function foo(str) {
        "use strict"
        eval(str)
        console.log(a);
    }
    foo("var a = 2");
    // ReferenceError: a is not defined
```
#### 1.4.2 总结
- 词法作用域意味着作用域是由书写代码时函数声明的位置来决定的。编译的词法分析阶段基本能够知道全部标识符在哪里以及是如何声明的，从而能够预测在执行过程中如何对它们进行查找。
### 1.5 函数作用域
- 函数作用域的含义是指，属于这个函数的全部变量都可以在整个函数范围内使用及复用
- 气泡：在某个作用域下的所有变量
```javascript
    function foo(a) {
        var b = 2;

        function bar() {
            // ...
        }
        var c = 3;
    }
    // 全局作用域气泡：foo
    // foo函数作用域气泡：a, b, bar, c
    // 所以全局无法访问a, b, bar, c
```
#### 1.5.1 作用1：隐藏内部实现
```javascript
    function doSomething(a) {
        b = a + doSomethingElse(a * 2);
        console.log(b * 3);
    }
    function doSomethingElse(a) { 
        return a - 1;
    }

    var b;
    doSomething(2);
    // 在这个代码片段中，变量 b 和函数 doSomethingElse(..) 应该是 doSomething(..) 内部具体实现的“私有”内容
    // 由于b在外部没有用到，所以最好是作为函数作用域内的变量，而不是放在外面
```
#### 1.5.2 作用2：规避冲突
```javascript
    function foo() {
        function bar(a) {
            i = 3;
            console.log(a + i);
        }

        for(var i = 0;i < 10;i ++) {
            bar(i * 2);
        }
    }
    // 会陷入无限的循环
    // bar(..) 内部的赋值表达式 i = 3 意外地覆盖了声明在 foo(..) 内部 for 循环中的 i
    // 解决方法：在bar函数内部内部声明一个i变量或者其他变量
    // 内部作用域的声明的变量由于嵌套的访问的原因会被优先采用，且不会影响外部同名变量的值
```
#### 1.5.3 作用3：全局命名空间
- 声明一个对象，在对象内部声明变量和函数，该对象就被称为命名空间
#### 1.5.4 函数声明和函数表达式
- 区分函数表达式和函数声明
    - 函数的声明必须用具名函数
    - 有LRS的引用就可以称之为函数表达式，此时可以用匿名函数或者具名函数
```javascript
    // 赋值表达式
    const a = function() {
        // ...
    }
    // 函数的参数
    function foo(def) {
        def();
    }
    foo(function() {
        // ...
    })
    // 立即执行函数��达式
    (function(args){
        // ...
    })(args)
    (function(args) {
        // ...
    }(args))
```

### 1.6 块作用域
- <font color="red">不要在一个块内用声明的方式定义一个函数，若想要定义一个函数，则使用函数表达式的形式</font>
#### 1.6.1 var声明的变量不具有块级作用域
- 在用var声明变量的时候，var并不具有块级作用域
```javascript
    {
        var a = 10;
    }
    console.log(a);
    // 10
    // 函数及作用域
    function foo() {
        var a = 10;
    }
    console.log(a);
    // undefined referenceError
```
#### 1.6.2 try...catch的err具有块级作用域
```javascript
    try{
        // ...
    }
    catch(err) {
        console.log(err)
    }
    console.log(err);
    // undefined referenceError
```
#### 1.6.3 let/const声明的变量具有块级作用域
- let/const具有块级作用域
- 使用 let 进行的声明不会在块作用域中进行提升。声明的代码被运行之前，声明并不“存在”
##### 1.6.3.1 在if语句中
```javascript
    var foo = true;
    if(foo) {
        let bar = foo * 2;
        console.log(bar);
    }
    console.log(bar);
    // 2
    // undefined referenceError
```
##### 1.6.3.2 垃圾回收中
(看书补充)
##### 1.6.3.3 let循环
- for 循环头部的 let 不仅将 i 绑定到了 for 循环的块中，事实上它将其重新绑定到了循环的每一个迭代中，确保使用上一个循环迭代结束时的值重新进行赋值。
```javascript
    for(let i = 0;i < 10;i ++) {
        console.log(i);
    }
    console.log(i) 
    // undefined referenceError
```
- for循环的转化理解
```javascript
    {
        let j;
        for(j = 0;j < 10;j ++) {
            let i = j;
            console.log(i);
        }
    }
```
#### 1.6.4 总结
- 函数是 JavaScript 中最常见的作用域单元。本质上，声明在一个函数内部的变量或函数会在所处的作用域中“隐藏”起来，这是有意为之的良好软件的设计原则。
- 块作用域指的是变量和函数不仅可以属于所处的作用域，也可以属于某个代码块（通常指 { .. } 内部）。
-  ES3 开始，try/catch 结构在 catch 分句中具有块作用域。
- 在 ES6 中引入了 let 关键字（var 关键字的表亲），用来在任意代码块中声明变量。if(..) { let a = 2; } 会声明一个劫持了 if 的 { .. } 块的变量，并且将变量添加到这个块中。
### 1.7 声明的提升
- 任何声明在某个作用域内的变量，都将附属于这个作用域。
- <font color="red">包括变量和函数在内的所有声明都会在任何代码被执行前</font>首先被处理。
#### 1.7.1 编译器对代码的处理
- 声明和代码执行的先后关系
```javascript
    var a = 2;
    // 实际上执行的过程
    var a; // 声明阶段
    a = 2; // 执行阶段
```
- 练习
```javascript
// 练习一
    a = 2;
    var a;
    console.log(a);

    // 等价于:
    var a;
    a = 2;
    console.log(a);
    // 2
```
```javascript
// 练习二
    console.log(a);
    var a = 2;
    // 等价于
    var a;
    console.log(a);
    a = 2;
    // undefine;
    // 2
``` 
#### 1.7.2 提升
- <font color="red">当执行的变量在代码执行的时候还没有被声明时,要想到变量提升</font>
- 无论作用域中的声明出现在什么地方，都将在代码本身被执行前首先进行处理。
- 将这个过程形象地想象成所有的声明（变量和函数）都会被“移动”到各自作用域的最顶端，这个过程被称为提升
```javascript
    foo();
    function foo() {
        console.log( a );
        var a = 2;
    }
    // 等价于
    function foo() {
        var a;
        console.log( a );
        a = 2;
    }
    foo();
    // undefined;
```
- 注意
    - 只有声明本身会被提升，而赋值或其他运行逻辑会留在原地。
    - 只有函数声明会被提升,<font color="red">函数表达式无法进行提升, 包含具名表达式也无法进行提升</font>
```javascript
    foo();
    var foo = function() {
        // ...
    }
    // TypeError 
    // 等价于
    var foo;
    foo();
    foo = function() {
        // ...
    }
```
```javascript
    foo();
    bar(); 
    var foo = function bar() {
        // ...
    }
    // TypeError 
    // ReferenceError 没有声明bar()
```
#### 1.7.3 函数声明和变量声明的优先级
- 变量和函数声明同时提升时, 函数声明优先级比较高。
```javascript
    foo();
    var foo = 2;
    function foo() {
        console.log(1);
    }
// 1
```
- 函数声明和函数表达式
  - 函数声明存在提升
  - 函数表达式不存在提升，它相当于赋值操作，只在当前位置执行
```javascript
  var foo = function(x, y) {
    return x - y;
  }
  // 函数声明因为提升会被提到前面
  function foo(x, y) {
    return x + y;
  }

  console.log(foo(3, 4))
  // -1
```
#### 1.7.4 函数声明不具有块级作用域
- 一个普通块内部的函数声明通常会被提升到所在作用域的顶部
  - 函数的声明并不具有块级作用域的作用
```javascript
    foo();
    var a = true;
    if(a) {
        function foo() {
            console.log( "a" );
        }
    }
    else{
        function foo() {
            console.log( "b" );
        }
    }
    // b
```
#### 1.7.5 总结
- 我们习惯将 var a = 2; 看作一个声明，而实际上 JavaScript 引擎并不这么认为。它将 var a和 a = 2 当作两个单独的声明，第一个是编译阶段的任务，而第二个则是执行阶段的任务。
- 无论作用域中的声明出现在什么地方，都将在代码本身被执行前首先进行处理。可以将这个过程形象地想象成所有的声明（变量和函数）都会被“移动”到各自作用域的最顶端，这个过程被称为提升。
- 声明本身会被提升，而包括函数表达式的赋值在内的赋值操作并不会提升
- 要注意避免重复声明，特别是当普通的 var 声明和函数声明混合在一起的时候，否则会引起很多危险的问题！
### 1.8 作用域的闭包
- 某个函数在其他作用域(不是本身的词法作用域)被调用时,仍然可以访问其词法作用域内的变量(相应变量的值被缓存了下来),即仍然可以引用其所在的词法作用域,该词法作用域就称为闭包.
#### 1.8.1 理解闭包
- 非闭包
```javascript
    function foo() {
        var a = 2;
        function bar() {
            console.log( a );
        }
        bar();
    }

    foo();
```
- 由于bar在foo作用域中被执行,不存在闭包的效果
```javascript
    function foo() {
        var a = 2;
        function bar() {
            console.log( a );
        }
        return bar;
    }

    var baz = foo();
    baz(); // 根据调用的位置，该baz应该访问的是baz内部定义的变量，但是它仍可以访问foo内部的变量
```
- 由于bar在foo中定义,即bar是foo的作用域气泡,即bar正常情况下只能在foo的作用域范围内被执行
- 但是,在该例子中bar在自己定义的词法作用域以外的地方执行。
    - 原因: 由于闭包的原因,bar仍然可以访问它定义时的作用域
#### 1.8.2 闭包的实质
-  foo() 执行后，通常会期待 foo() 的整个内部作用域都被销毁, 但闭包阻止了该内部作用域被销毁, 即该作用域仍然被bar所使用, 即bar() 依然持有对该作用域的引用，而这个引用就叫作闭包。
- 某个函数被执行的时候，本来只能访问该函数本身的作用域内部的声明的变量或者全部变量，但是实质上，其可以访问声明位置的作用域内部的变量（声明位置的作用域会被缓存起来）
- 闭包起效果的条件是，该函数声明位置的函数又被执行
#### 1.8.3 闭包的通常形式
- 通过return返回对应的函数
```javascript
    function foo() {
        var a = 2;
        function bar() {
            console.log( a );
        }
        return bar;
    }

    var baz = foo();
    baz();    
    // 2
```
- 通过参数传递的形式
```javascript
function foo() {
    var a = 2;
    function bar() {
        console.log( a );
    }
    baz(bar);
}
function baz(fn) {
    fn();
}
foo();
// 2
// bar在baz函数作用域执行,仍然调用其词法作用域的内容
function wait(args) {
    setTimeout(function timer() {
    // ...有用到args
    }, 1000)
}
// 在其他作用域调用了timer函数,但仍然可以访问到args
```
- 通过外部变量传递
```javascript
var baz;
function foo() {
    var a = 2;
    function bar() {
        console.log( a );
    }
    baz = bar;
}
foo();
baz();
// 2
// bar在全局作用域执行,仍然调用其词法作用域的内容
```
#### 1.8.4 闭包的运用
##### 1.8.4.1 循环和闭包
```javascript
    for(var i = 0;i <= 5;i ++) {
        setTimeout(function() {
            console.log(i);
        }, 1000)
    }
//  6 6 6 6 6 6
```
- 原因:在执行完同步代码之后,此时的i为6,而异步执行的setTimeout的回调函数满足条件后被调用时,显然是输出6
- 解决方法
    - 法1: 运用立即函数作用域的闭包给每个循环创建一个新的作用域
    - 法2: 利用块级作用域
```javascript
    for(var i = 0;i <= 5;i ++) {
        (function() {
            var j = i;
            setTimeout(function() {
            console.log(j);
            }, 1000)
        })()
    }
```
```javascript
    for(var i = 0;i <= 5;i ++) {
        (function(j) {
            setTimeout(function() {
            console.log(j);
            }, 1000)
        })(i)
    }
``` 
```javascript
    for(let i = 0;i <= 5;i ++) {
        setTimeout(function() {
            console.log(i);
        }, 1000)
    }
```
##### 1.8.4.2 实现模块
- 必须有<font color="red">外部的封闭函数</font>，该函数必须至少被调用一次（每次调用都会建一个新的模块实例）。
- 封闭函数必须返回至少一个内部函数，这样内部函数才能在私有作用域中形成闭包，并且可以访问或者修改私有的状态。
- 模块的基本形式
```javascript   
    function foo() {
        var something = "cool";
        var another = [1, 2, 3];
        function doSomething() {
            console.log(something);
        }
        function doAnother() {
            console.log(another);
        }
        return {
            doSomething: doSomething,
            doAnother: doAnother
        }
    }

    var CoolModule = foo();
    CoolModule.doSomething();
    CoolModule.doAnther();
```
- doSomething() 和 doAnother() 函数具有涵盖模块实例内部作用域的闭包
- IIFE模块
```javascript
    var args = undefined;
    var module1 = (function(args) {
        var something = "cool";
        var another = [1, 2, 3];
        function doSomething() {
            console.log(something);
        }
        function doAnother() {
            console.log(another);
        }
        return {
            doSomething: doSomething,
            doAnother: doAnother
        }
    })(args)
    module1.doSomething();
    module1.doAnother();
```
#### 1.8.5 闭包的易错点
##### 1.8.5.1 闭包和赋值传参
```javascript
  function test() {
      var n = 4399;
      function add() {
          n ++;
          console.log(n);
      }
      return {n, add};
  }
  result1 = test();
  result2 = test();
  // 两个函数的执行分别返回了一个对象
  // {n: 4399, add}
  // 函数执行会创建一个新的堆空间，所以两个对象中add的闭包作用域是是位于不同（即n不同存储位置的）
  // 对象中的n是一个基本数据类型，采用的是赋值传参，所以此时的n与add闭包作用域中的n是没有关系的
  result1.add();
  result1.add();
  console.log(result1.n);
  // 4400 4401 4399
  result2.add();
  console.log(result2.n);
  // 4400 4399
```
##### 1.8.5.2 闭包和引用传参
```javascript
  function test() {
      var arr = [1, 3]
      function add() {
          arr.push(3)
          console.log(arr);
      }
      return {arr, add};
  }
  result1 = test();
  result2 = test();
  // 两个函数的执行分别返回了一个对象
  // {n: 4399, add}
  // 函数执行会创建一个新的作用域，所以两个对象中add的闭包作用域是是位于不同（即n不同存储位置的）
  // 对象中的n是一个基本数据类型，采用的是赋值传参，所以此时的n与add闭包作用域中的n是没有关系的
  result1.add();
  result1.add();
  console.log(result1.arr);
  // [1, 3, 3] [1, 3, 3, 3] [1, 3, 3, 3]
  result2.add();
  console.log(result2.arr);
  // [1, 3, 3] [1, 3, 3]
```
#### 1.8.6 总结
- 当函数可以记住并访问所在的词法作用域，即使函数是在当前词法作用域之外执行，这时就产生了闭包。
- 模块有两个主要特征：
    - （1）为创建内部作用域而调用了一个包装函数；
    - （2）包装函数的返回值必须至少包括一个对内部函数的引用，这样就会创建涵盖整个包装函数内部作用域的闭包。

## 2 this的理解
- this是在<font color="red">运行时进行绑定,而不是编写时绑定</font>,它的上下文取决于函数调用时的各种条件.
- this的绑定和函数声明的位置没有任何关系,只取决于函数的调用方式
- this 是函数运行时自动生成的一个内部对象，只能在函数内部使用
### 2.1 this的实质
- 当一个函数被调用时,会创建一个活动记录(有时候被称为执行上下文).这个记录会包含在调用栈中,函数调用栈中有函数的调用方法,传入的参数等信息.this就是记录其中一个属性,会在函数执行的过程中用到.
### 2.2 确定函数调用时this所指的对象的方法
#### 2.2.1 第一步：寻找调用位置
- 调用位置:函数在代码中被调用的位置
```javascript
  var obj = {
      foo(fn) {
          console.log(this)   //obj
      //1. fn函数的调用位置
          fn();               //window
      }
  }
  function baz() {
      console.log(this);
  }
  // 2. foo函数的调用位置
  obj.foo(baz);
```

#### 2.2.2 第二步：根据this的绑定规则来确定绑定的对象
- <font color="red">this的绑定规则</font>
  - 函数是否在 new 中调用（new 绑定）？如果是的话 this 绑定的是新创建的对象。
      - var bar = new foo()
  - 函数是否通过 call、apply（显式绑定）或者硬绑定调用？如果是的话，this 绑定的是指定的对象。
      - var bar = foo.call(obj2)
  - 函数是否在某个上下文对象中调用（隐式绑定）？如果是的话，this 绑定的是那个上下文对象。
      - var bar = obj1.foo()
  - 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到 undefined，否则绑定到全局对象。
      - var bar = foo()
- ![this_bind](./img/this_bind.jpeg)
##### 2.2.2.1 默认绑定
- 默认this指向全局对象(window)
- 常见于独立函数的调用
    - 直接使用不带任何修饰的函数引用进行调用的，因此只能使用默认绑定
```javascript
    function foo() {
        console.log(this.a);
    }
    var a = 2;
    foo();

    // 2
```
- 注意
    - <font color="red">在严格模式下,this是没有指向全局对象的,而是绑定到undefined</font>
```javascript
    function foo() {
        "use strict";
        console.log(this.a);
    }
    var a = 2;
    foo();
    // TypeError: this is undefined
```
##### 2.2.2.2 隐式绑定
- 是<font color="red">调用位置</font>是否有上下文对象，或者说是否被某个对象拥有或者包含，隐式绑定规则会把函数调用中的 this 绑定到这个上下文对象
- 指向调用的对象
```javascript
    function foo() {
        console.log(this.a);
    }
    var obj2 = {
        a: 42,
        foo: foo
    }
    var obj1 = {
        a:2,
        obj2:obj2
    }
    obj1.obj2.foo() 
    // 42
```
###### 2.2.2.2.1 隐式丢失
- 实际上就是<a href="#indirect_reference">间接引用</a>造成的问题
- <font color="red">使用函数别名进行调用</font>
    - 虽然 bar 是 obj.foo 的一个引用，但是实际上，它引用的是 foo 函数本身，因此此时的bar() 其实是一个不带任何修饰的函数调用，因此应用了默认绑定。
```javascript
// 相当于这种形式
    function foo() {
        console.log(this === window);
        console.log(this.a);
    }
    var obj1 = {
        a: 2,
        foo: foo
    }
    var a = "hello world"
    var bar = obj1.foo;
    bar();
    //true "hello world"
```
```javascript
    var obj1 = {
        a: 2,
        foo: function() {
            console.log(this === window);
            console.log(this.a);
        }
    }
    var a = "hello world"
    var bar = obj1.foo;
    bar();
    //true "hello world"
```
- 传入回调函数的参数
    - 参数传递其实就是一种隐式赋值，因此我们传入函数时也会被隐式赋值，与上面的结果一样
```javascript
    function foo() {
        console.log(this === window);
        console.log(this.a);
    }
    var obj1 = {
        a: 2,
        foo: foo
    }
    function doFunc(fn) {
        fn();
    }
    var a = "hello world"
    doFunc(obj1.foo);
    //true "hello world"
    // setTimeout的回调函数也有类似的作用
```
##### 2.2.2.3 显示绑定
- 方法1：使用call, apply进行显示调用
- 方法2：<font color="red">使用bind进行硬绑定</font>
    - 使得obj1中的this指向foo的this,
        - 若foo中有this的属性,方法,则都变成了obj1的方法
        - foo的this是obj1的this
    - 解决使用函数别名进行调用
- 方法3：API调用的上下文
    - 第三方库的许多函数，以及 JavaScript 语言和宿主环境中许多新的内置函数，都提供了一个可选的参数，通常被称为“上下文”（context），其作用和 bind(..) 一样，确保你的回调函数使用指定的 this
```javascript
    function foo() {
        console.log(this === window);
        console.log(this.a);
    }
    var obj1 = {
        a: 2,
        foo: foo
    }
    var a = "hello world"
    var bar = foo.bind(obj1);
    bar();
    // false 2
```

```javascript
    var obj = {
        id: "awesome"
    };
    [1, 2, 3].forEach( function(el) {
        console.log( el, this.id );
    }, obj );
    /*
    1 awesome
    2 awesome
    3 awesome
    */
```

###### 2.2.2.3.1 func.apply(thisArg, [args])
- 将func中this所指的属性和方法添加到thisArg的this所指的属性和方法之中，并执行func
  - 注意：此时的func所用的this就是thisArg的this即可以理解为thisArg在运行func的内容
```javascript
function fn1() {
  this.name = "hello"
}

function fn2() {
  this.word = "world";
}
fn2Object = new fn2();
fn1.apply(fn2Object)
// 执行fn1的代码，并将fn1的this所指的属性和方法加入到fn2Object
// 
console.dir(fn2Object)
console.dir(fn2)
```
###### 2.2.2.3.2 bind(func1, func2)
- 返回值是一个函数wrap
- 源码的理解
```javascript
// bind函数的理解
// 语法上：返回一个函数wrap
// 功能上：若是调用warp函数并传入参数
//         fn根据传递的参数执行并且thisArg将继承fn的属性和方法
//         之后返回值：undefine
function bind(fn, thisArg) {
  return function wrap() {
    //根据传入的参数来调用fn
    var args = new Array(arguments.length);
    console.log(args);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    //用apply来实现绑定
    return fn.apply(thisArg, args);
  };
};

function fn1(name) {
  this.name = name
}

function fn2() {
  this.word = "world";
}
fn2Object = new fn2();
console.log(bind(fn1, fn2Object)("hello"))
console.dir(fn2)
/*
undefined
fn2
 name: "hello"word: "world" 
*/
```
##### 2.2.2.4 new绑定
- 四步走
    - 创建一个新的空的对象
    - 这个新对象会执行原型链接
      - obj.__proto__ = Object.create(funcName.prototype)
    - 这个新的对象会绑定到函数调用的this
    - 如果函数没有返回其他对象，那么表达式中的函数调用会自动返回这个新的对象
### 2.3 this的绑定例外
#### 2.3.1 被忽略的this
- 如果你把 null 或者 undefined 作为 this 的绑定对象传入 call、apply 或者 bind，这些值在调用时会被忽略，实际应用的是默认绑定规则
- 在使用call,apply,bind有时候只需要运用传输参数,此时的this应该指向一个空的对象,使用以下的方法更加安全
    - 创建一个“DMZ”（demilitarized-zone，非军事区）对象——它就是一个空的非委托的对象
```javascript
    function foo(a,b) {
        console.log( "a:" + a + ", b:" + b );
    }
    var ø = Object.create(null);
    // 把数组展开成参数
    foo.apply( ø, [2, 3] ); // a:2, b:3
    // 使用 bind(..) 进行柯里化
    var bar = foo.bind( ø, 2 );
    ar( 3 );   
```
#### 2.3.2 对象函数的间接引用(包括函数参数的传递)
- <span id="#indirect_reference">间接引用造成问题的本质<span>:
  - 由于this的绑定是在函数执行的时候，所以赋值的过程实质上也会影响到函数执行是this绑定的对象。
- <font color="red">创建一个函数的“间接引用”，在这种情况下，调用这个函数会应用默认绑定规则。</font>
```javascript
    function foo() {
        console.log(this.a);
    }
    var a = 2;
    var o = {
        a: 3,
        foo: foo
    }
    var p = {
        a: 4
    }
    o.foo()
    (p.foo = o.foo) ()
    // 间接引用是默认绑定
    // 3
    // 2
```
```javascript
  const obj = {
    foo() {
      console.log(this);
    }
  }
  function baz(func){
    func();
  }
  obj.foo();
  baz(obj.foo);
  // obj
  // window
```
- 解决方法
  - 运用硬绑定
  - 运用软绑定
#### 2.3.3 软绑定(obj.softBind(..))
- 硬绑定会大大降低函数的灵活性，使用硬绑定之后就无法使用隐式绑定或者显式绑定来修改 this
- 可以给默认绑定指定一个全局对象和 undefined 以外的值，那就可以实现和硬绑定相同的效果，同时保留隐式绑定或者显式绑定修改 this 的能力。
- obj.softBind(..) 
    - 会对指定的函数进行封装，首先检查调用时的 this，<font color="red">如果 this 绑定到全局对象或者 undefined，那就把指定的默认对象 obj 绑定到 this，否则不会修改 this</font>。
```javascript
    function foo() {
        console.log("name: " + this.name);
    }
    var obj = { name: "obj" },
    obj2 = { name: "obj2" },
    obj3 = { name: "obj3" };
    var fooOBJ = foo.softBind( obj );
    fooOBJ(); // name: obj
    obj2.foo = foo.softBind(obj);
    // 此时为默认绑定
    obj2.foo(); // name: obj2 <---- 看！！！
    fooOBJ.call( obj3 ); // name: obj3 <---- 看！
    setTimeout( obj2.foo, 10 );
    // name: obj <---- 应用了软绑定
```
#### 2.3.4 箭头函数
- 箭头函数会继承外层函数调用的 this 绑定（无论 this 绑定到什么）
  - 查看调用栈中的this
### 2.4 总结
- 如果要判断一个运行中函数的 this 绑定，就需要找到这个函数的直接调用位置,然后再运用规则
- this的规则
1. 由 new 调用？绑定到新创建的对象。
2. 由 call 或者 apply（或者 bind）调用？绑定到指定的对象。
3. 由上下文对象调用？绑定到那个上下文对象。
4. 默认：在严格模式下绑定到 undefined，否则绑定到全局对象。
- 一定要注意，有些调用可能在无意中使用默认绑定规则。如果想“更安全”地忽略 this 绑定，你可以使用一个 DMZ 对象，比如 ø = Object.create(null)，以保护全局对象。
- ES6 中的箭头函数并不会使用四条标准的绑定规则，而是根据当前的词法作用域来决定this，具体来说，箭头函数会继承外层函数调用的 this 绑定（无论 this 绑定到什么）

## 3 面向对象编程的重要概念
### 3.1 有关类的不同模拟方法
#### 3.1.1 使用工厂的方法模拟类
- 定义一个函数，在函数内部创建一个空对象，并且对它进行一些类实例的完善
  - 无需使用new来创建一个新的实例对象
```javascript
  function Foo(name, age, height) {
    var obj = {}
    obj.name = name;
    obj.age = age;
    obj.height = height;
    obj.getName = function() {
      return this.name;
    }
    obj.getAge = function() {
      return this.age;
    }
    obj.getHeight= function() {
      return this.height;
    }
    return obj;
  }

  var foo = Foo("bulumrcai", 23, 1.76);
  console.log(foo.getName(), foo.getAge(), foo.getHeight());
    //  bulumrcai 23 1.76
```
#### 3.1.2 使用构造函数模拟一个类
```javascript
  function Foo(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
  Foo.prototype.getName = function() {
    return this.name;
  }
  Foo.prototype.getAge = function() {
    return this.age;
  }
  Foo.prototype.getHeight = function() {
    return this.height;
  }
  var foo = new Foo("bulumrcai", 23, 1.76);
  console.log(foo.getName(), foo.getAge(), foo.getHeight());
    //  bulumrcai 23 1.76
```
#### 3.1.3 使用Object.create的方法模拟类
- 弊端：在构造实例对象的时候没办法传入参数，必须在构造对象之后单独进行值的设置
  - <font color="red">重新设置值时会存在属性的屏蔽</font>
```javascript
  var Foo = {
    name: "bulumrcai",
    age: 23,
    height: 1.76,
    getName() {
      return this.name;
    },
    getAge() {
      return this.age;
    },
    getHeight() {
      return this.height;
    }
  }

  var foo = Object.create(Foo);
  console.log(foo.getName(), foo.getAge(), foo.getHeight());
```
#### 3.1.4 使用封装法来模拟类
- 和工厂方法类似，只是换成一个对象
```javascript
  var Foo = {
    init(name, age, height) {
      var obj = {}
      obj.name = name;
      obj.age = age;
      obj.height = height;
      obj.getName = function() {
        return this.name;
      }
      obj.getAge = function() {
        return this.age;
      }
      obj.getHeight= function() {
        return this.height;
      }
      return obj;
    }
  }
  var foo = Foo.init("bulumrcai", 23, 1.76);
  console.log(foo.getName(), foo.getAge(), foo.getHeight());
   //  bulumrcai 23 1.76
```
#### 3.1.5 ES6的class
```javascript
  class Foo {
      constructor(name, age, height) {
          this.name = name;
          this.age = age;
          this.height = height;
      }
      getName() {
          return this.name;
      }
      getAge() {
          return this.age;
      }
      getHeight() {
          return this.height;
      }
  }
  var foo = new Foo("bulumrcai", 23, 1.76);
  console.log(foo.getName(), foo.getAge(), foo.getHeight());
  //  bulumrcai 23 1.76
```
### 3.2 有关类的继承不同的模拟方式
#### 3.2.1 使用构造函数的模式
- 混合的模式
```javascript
    function Father(name) {
        this.name = name;
    }
    Father.prototype.getName = function() {
        return this.name;
    }

    // 继承
    function Son(name, label) {
        this.label = label;
        Father.call(this, name);
    }
    Son.prototype = Object.create(Father.prototype);
    Son.prototype.getLabel = function() {
        return this.label;
    }
    Son.prototype.printAll = function() {
        console.log(this.getName(), this.label)
    }

    var son = new Son("hello world", 2);
    son.printAll();
    console.log(son.getName());
    console.dir(son);
```
#### 3.2.2 使用class模式
```javascript
    class Father {
        constructor(name) {
            this.name = name;
        }
        getName() {
            return this.name;
        }
    }
    class Son extends Father {
        constructor(name, label) {
        	super(name);
        	// super指的是同名的父类函数
            this.label = label;
        }
        getLabel() {
            return this.label;
        }
        printAll() {
            console.log(this.getName(), this.label)
        }
    }
    var son = new Son("hello world", 2);
    son.printAll();
    console.log(son.getName());
    console.dir(son)
```
#### 3.2.3 使用事件委派的模式

```javascript
    var Father = {
        fatherInit(name) {
            this.name = name;
        },
        getName() {
            return this.name;
        }
    }
    var Son = Object.create(Father);
    Son.sonInit = function(name, label) {
        this.label = label;
        this.fatherInit(name);
    }
    Son.getLabel = function() {
        return this.label;
    }
    Son.printAll = function() {
        console.log(this.getName(), this.label);
    }
    var son = Object.create(Son);
    son.sonInit("hello world", 2)
    son.printAll();
    console.log(son.getName());
```
```javascript
    var Father = {
        fatherInit(name) {
            this.name = name;
        },
        getName() {
            return this.name;
        }
    }
    var Son = {
        sonInit(name, label) {
            this.label = label;
            this.fatherInit(name);
        },
        getLabel() {
            return this.label;
        },
        printAll() {
            console.log(this.getName(), this.label);
        }
    }
    Object.setPrototypeOf(Son, Father)
    var son = Object.create(Son);
    son.sonInit("hello world", 2)
    son.printAll();
    console.log(son.getName());
```
```javascript
    	// new创建实例的本质
    	function fun(name) {
    		this.name = name;
    	}
    	// 第一步：创建一个原型指向构造函数原型对象的对象
    	var obj = Object.create(fun.prototype);
    	// 第二步：将构造函数的this指向该原型对象
    				// 由于此时执行了一次构造函数，所以会创建一个新的作用域，该作用域中的this指向该原型对象
 		fun.call(obj, "hello");
 		// 第三步：
 		console.log(obj)

 		var newObj = new fun("hello");
 		console.log(newObj)
 		// 继承 
 		function Father(name) {
 			this.name = name;
 		}
 		function Son(name, label) {
 			this.label = label;
 			Father.call(this, name);
 			// 继承Father的this指向的属性
 		} 
 		// 子类的原型对象是指的原型是指向父类原型的对象
 		Son.prototype = Object.create(Father.prototype)
```
## 4 语法
### 4.1 语句和表达式
- “句子”（sentence）是完整表达某个意思的一组词，由一个或多个“短语”（phrase）组成，
它们之间由标点符号或连接词（and 和 or 等）连接起来。短语可以由更小的短语组成。有
些短语是不完整的，不能独立表达意思；有些短语则相对完整，并且能够独立表达某个意
思。
    - 语句相当于句子，表达式相当于短语，运算符则相当于标点符号和连接词。
```javascript
    var a = 3 * 6;
    var b = a;
    b;
    /*
    *  这三行代码都是包含表达式的语句。var a = 3 * 6 和 var b = a 称为“声明语句”
（declaration statement），因为它们声明了变量（还可以为其赋值）。
    *   a = 3 * 6 和 b = a（不带 var）叫作“赋值表达式”。
    *   b既是语句有时表达式，称为表达式语句
    */
```
#### 4.1.1 语句的结果值的隐式返回
- 每一个语句都默认有返回值，一般为undefine
    - 赋值语句(赋值表达式）的返回值为被赋值的数的值
- 对于代码块，也默认有返回值
    - 最后一个执行语句的返回值
    - 但是由于语法规则规定不允许我们获得语句的结果值并将其赋值给另一个变量
    -  ES7规定可以使用do关键词实现
```javascript
    var a;
    console.log(a = 42);
    // 42

    console.log(var b = 42);
    // undefined

    var c = do {
        if(false) {
            var d;
            d = 100;
        }
    }
    console.log(c)
```
## 5 正则表达式
### 5.1. 正则表达式的定义
- 用于匹配字符串中字符组合的模式
  - 在js中，是对象
- 在正则表达式之中，除了特殊的字符，其他都是一个字符就表示相应的匹配，且不能够随意添加空格
- 在正则表达式中，括号表示将括号内的部分视为一个整体
- 在正则表达式中，若出现/，则表示后面一位为转义字符
### 5.2. 正则表达式的作用
- 实现匹配字符串
- 实现字符串的过滤（替换）
- 实现字符串的提取
### 5.3. 正则表达式的特殊字符
- 特殊字符又称为元字符
  - 在正则表达式中具有特殊意义的专用符号
#### 5.3.1. 边界字符 ^ $
<table>
  <tr>
    <td>^</td>
    <td>表示匹配行首字母</td>
  </tr>
  <tr>
    <td>$</td>
    <td>表示匹配行尾字母</td>
  </tr>
</table>

作用：<font color="red">^和$在一起表示精确匹配</font>
```javascript
  const reg = /abc/
  // 只需要包含abc就是返回true
```
```javascript
  const reg = /^abc/
  // 必须以abc开头
```
```javascript
  const reg = /abc$/
  // 必须以abc结尾
```
```javascript
  const reg = /^abc$/
  // 精确匹配，要求必须是abc字符才符合规范
```

#### 5.3.2 字符类 []
<table>
  <tr>
    <td>[]</td>
    <td>表示可选内容</td>
  </tr>
  <tr>
    <td>[a-b]</td>
    <td>[a,b]的可选范围</td>
  </tr>
  <tr>
    <td>[a-bc-d]</td>
    <td>字符组合，表示[a,b],[c,d]都是可选范围</td>
  </tr>
  <tr>
    <td>[^]</td>
    <td>表示可选内容取反，注意和边界符区分开来</td>
  </tr>
</table>

- 字符组合类似于并集表达式
```javascript
  const reg = /[abc]/
  // 只要包含有a,包含有b,包含有c都返回true
```
```javascript
  const reg = /^[abc]$/
  // 只要是a或者b或者c都返回true
```


```javascript
  const reg = /^[a-z]$/
  // 只有是小写的英文字母才返回true
```

```javascript
  const reg = /^[a-zA-Z0-9]$/
  // 表示只有是26个字母以及数字才返回true
```

#### 5.3.3. 量词符
- 量词符若没有括号，只是指前面的一位字符的重复
<table>
  <tr>
    <td>a*</td>
    <td>前面的字符a可以出现0次或者无数次</td>
  </tr>
  <tr>
    <td>a+</td>
    <td>前面的字符a可以出现1次或者无数次</td>
  </tr>
  <tr>
    <td>a?</td>
    <td>前面的字符a可以出现0次或者1次</td>
  </tr>
  <tr>
    <td>a{n}</td>
    <td>前面的a一定要出现n次</td>
  </tr>
  <tr>
    <td>{m, n}</td>
    <td>前面的内容一定要出现[m,n]次</td>
  </tr>
</table>

#### 5.3.4. 预定义类
- 某些常见模式的简写方式

<table>
  <tr>
    <td>\d</td>
    <td>匹配0-9之间的任意数字，相当于[0-9]</td>
  </tr>
  <tr>
    <td>\D</td>
    <td>匹配0-9以外的字母，相当于[^0-9]</td>
  </tr>
  <tr>
    <td>\w</td>
    <td>匹配任意字母，数字和下划线，相当于[a-zA-Z0-9_]</td>
  </tr>
  <tr>
    <td>\W</td>
    <td>匹配任意字母，数字和下划线以外的字母，相当于[^a-zA-Z0-9_]</td>
  </tr>
  <tr>
    <td>\s</td>
    <td>匹配空格（包括换行符，制表符和空格符等），相当于[\r\t\n\v\f]</td>
  </tr>
  <tr>
    <td>\S</td>
    <td>匹配非空字符，相当于[\r\t\n\v\f]</td>
  </tr>
</table>

- 座机号码的验证
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 
        座机号码:
        两种格式
            010-12345678
            0537-1234567
     -->
     <script>
        //  正则符号的或者 |
        const reg1 = /^\d{3}-\d{8}$ | ^\d{4}-\d{7}$/;
        
     </script>
</body>
</html>
```
### 5.4. 正则表达式的创建
#### 5.4.1. 通过字面量创建(/reg/[flags])
- 参数
  - reg：是一个js的表达式
  - flags:正则表达式标志
```javascript
  const reg = /js表达式/gi
```
#### 5.4.2. 通过构造函数创建(new RegExp(reg[, flags]))
- <font color="red">new可以省略</font>
- 参数
  - reg
    - string
    - reg的字面量
  - flags: 正则表达式标识
#### 5.4.3 正则表达式标识
<table>
  <thead>
    <tr>
      <th>标志</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>g</td>
      <td>全局搜索(若没有该标志，正则表达式只是匹配一次)</td>
    </tr>
    <tr>
      <td>i</td>
      <td>不区分大小写搜索</td>
    </tr>
    <tr>
      <td>m</td>
      <td>多行搜索</td>
    </tr>
    <tr>
      <td>s</td>
      <td>允许.匹配换行符</td>
    </tr>
    <tr>
      <td>u</td>
      <td>使用unicode码的匹配模式</td>
    </tr>
    <tr>
      <td>y</td>
      <td>执行"粘性"搜索，匹配从目标字符串的当前位置开始</td>
    </tr>
  </tbody>
</table>

### 5.5. 正则表达式的属性和方法
#### 5.5.1 RegExp#dotAll(只读)
- 表明正则表达式是否使用"s"修饰符
#### 5.5.2 RegExp#global(只读)
- 表明正则表达式是否使用了 "g" 标志
#### 5.5.3 RegExp#ignoreCase(只读)
- 表明正则表达式是否使用了 "i" 标志
#### 5.5.4 RegExp#multiline(只读)
- 表明正则表达式是否使用了 "m" 标志
#### 5.5.5 RegExp#unicode(只读)
- 表明正则表达式是否使用了 "u" 标志
#### 5.5.6 RegExp#source(只读)
- 返回一个值为当前正则表达式对象的模式文本的字符串
```javascript
  var regex = /fooBar/ig;
  console.log(regex.source); // "fooBar"，不包含 /.../ 和 "ig"。
```
#### 5.5.7 RegExp#flags(只读)
- 返回正则表达式标志字符串
  - 以字典序排序（从左到右，即"gimuy"）。
#### 5.5.8 RegExp#lastIndex
- 表示实例对象的状态，意思是下一次字符串匹配exec的起始位置（即匹配字符的下一位）
- 用于全局匹配和exec函数中
  - 当lastIndex的值等于字符串的长度时，表示匹配已经结束
```javascript
  var re = /hi/g;
  console.log(re.exec("hi ejijfihi")[0]);
  console.log(re.lastIndex);
  // hi 2
  console.log(re.exec("hi ejijfhihi")[0]);
  console.log(re.lastIndex);
  // hi 10
```
#### 5.5.9 RegExp#exec(str)
- 在一个指定字符串中执行一个搜索匹配(即只执行一次匹配而不是多次)
- 返回一个结果数组(类似于对象）或 null
- 参数
  - str: 要匹配正则表达式的字符串。
##### 5.5.9.1 结果数组(result)
- result[0]: 返回匹配的字符串
- result[1~n]: 括号中的分组捕获
- result.input: 返回要匹配的字符串
- result.index: 返回匹配字符串的起始下标
##### 5.5.9.2 注意事项
- 在设置了 global 或 sticky 标志位的情况下（如 /foo/g or /foo/y），对应的实例对象是有状态的
  - 会将上次成功匹配后的位置记录在 lastIndex 属性中
    - 可用来对单个字符串中的多次匹配结果进行逐条的遍历（包括捕获到的匹配）
##### 5.5.9.3 全局匹配与exec和lastIndex
- lastIndex表示在全局匹配中执行一次exec函数时实例对象的状态
  - 表示实例对象的状态，意思是下一次字符串匹配exec的起始位置（即匹配字符的下一位）
```javascript
  const regex1 = RegExp('foo*', 'g');
  const str1 = 'table football, foosball';
  let array1;

  while ((array1 = regex1.exec(str1)) !== null) {
    console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
  }
  // expected output: "Found foo. Next starts at 9."
  // expected output: "Found foo. Next starts at 19."
```

#### 5.5.10 RegExp#test(str)
- boolean，如果正则表达式与指定的字符匹配，则返回true
- 参数
  - str：用来与正则表达式匹配的字符
#### 5.5.12 RegExp#toString()
- 返回一个表示该正则表达式的字符串
  - 覆盖了Object的方法，并不是继承
### 5.6. 常用的正则表达式
#### 5.6.1. 用户名验证
```javascript
  const reg = /^[a-zA-Z0-9-_]${6,16}/
```
- 规定用户只能输入6到16位大小写字母数字-以及下划线
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 
        用户名输入合法，则后面提示信息为：用户名合法，并且颜色为绿色
        不合法，则后面提示信息为用户名不和法，并且显示为红色
     -->
     <div class="account">
        <label for="user">用户名:</label>
        <input type="text" id="user">
        <span>请输入用户名</span>
     </div>
     
</body>
<script>
    const reg = /^[a-zA-Z0-9_-]{6,16}$/;
    
    let userSpan = document.querySelector('.account span')
    let userInput = document.querySelector('.account #user');
    userInput.onfocus = function() {
        userSpan.innerHTML = "请输入用户名";
        userSpan.style.color = "#000000";
    }
    userInput.onblur = function() {
        // 注意获取输入框获取value的位置 
        let userName = userInput.value;
        console.log(userName)
        if(reg.test(userName)){
            userSpan.innerHTML = "用户名输入正确";
            userSpan.style.color = "#00ff00";
        }
        else{
            userSpan.innerHTML = "用户名格式错误";
            userSpan.style.color = "#ff0000";
        }
    }

</script>
</html>
```

## 6 switch的易错点
### 6.1 switch的基本格式
```javascript
  switch (a) {
    case 2:
    // 执行一些代码
    break;
    case 42:
    // 执行另外一些代码
    break;
    default:
    // 执行缺省代码
  }
```
- <font color="red">a 和 case 表达式的匹配算法与 ===</font>
### 6.2 switch使用==
- switch默认使用===来进行匹配
- 若想要判断等号时使用隐形类型转化，则可以使用下面的方法
```javascript
  switch (true) {
    case a == 10:
      console.log( "10 or '10'" );
      break;
    case a == 42;
      console.log( "42 or '42'" );
      break;
    default:
 // 永远执行不到这里
}
```
- 采取这种方法的时候，必须保证case后面表达式的值是严格的真值，因为<font color="red">实际上的判断是true === true</font>
## 7 javascript与JSON
### 7.1 javascript的数据格式和JSON数据格式的区别
<table>
  <thead>
    <tr>
      <th>Javacript</th>
      <th>JSON</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>对象和数组</td>
      <td>属性名称必须是双引号括起来的字符串且<font color="red">最后一个属性后面不能有逗号</font></td>
    </tr>
    <tr>
      <td>数值</td>
      <td>禁止出现前导零；如果有小数点，则后面至少跟着一位数字</td>
    </tr>
    <tr>
      <td>字符串</td>
      <td>只有有限的一些字符可能会被转义；禁止某些控制字符； Unicode 行分隔符 （U+2028）和段分隔符 （U+2029）被允许 ; 字符串必须用双引号括起来</td>
    </tr>
  </tbody>
</table>
 
### 7.2 JSON.parse(text[, reviver])
- 返回Object类型的javascript类型的值，对应给定JSON文本的对象/值
- 参数
  - text: 要被解析的JSON型字符串
  - reviver：函数，可以用来修改解析生成的原始值
```javascript
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
```
### 7.3 JSON.stringify(value[, replacer[, space]])
- 返回一个表示给定值的JSON字符串（值转换为相应的JSON格式)。
- 参数
  - value: 将要序列化成 一个 JSON的 字符串的值。
  - replacer
    - 如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；如果该参数为 null 或者未提供，则对象所有的属性都会被序列化。
  - space:
    - 指定缩进用的空白字符串，用于美化输出（pretty-print）；如果参数是个数字，它代表有多少的空格；上限为10。该值若小于1，则意味着没有空格；如果该参数为字符串（当字符串长度超过10个字母，取其前10个字母），该字符串将被作为空格；如果该参数没有提供（或者为 null），将没有空格
#### 7.3.1 针对不同类型的转化问题
- 基本数据类型
  - number
    - n --> n
    - NaN --> null
    - inifity --> null
  - boolean
    - true --> true
    - false --> false
  - string
    - str --> str
  - undefined
    - 忽略
  - null
    - null --> null
  - symbol
    - 忽略
- 复杂数据类型
  - object
    - 调用toJSON的方法
      - array --> array
        - undefined, null, 函数,symbol --> null
      - obj 
        - undefined, null, 函数, symbol 忽略
```javascript
JSON.stringify({});                        // '{}'
JSON.stringify(true);                      // 'true'
JSON.stringify("foo");                     // '"foo"'
JSON.stringify([1, "false", false]);       // '[1,"false",false]'
JSON.stringify({ x: 5 });                  // '{"x":5}'

JSON.stringify({x: 5, y: 6});              
// "{"x":5,"y":6}"

JSON.stringify([new Number(1), new String("false"), new Boolean(false)]); 
// '[1,"false",false]'

JSON.stringify({x: undefined, y: Object, z: Symbol("")}); 
// '{}'

JSON.stringify([undefined, Object, Symbol("")]);          
// '[null,null,null]' 

JSON.stringify({[Symbol("foo")]: "foo"});                 
// '{}'

JSON.stringify({[Symbol.for("foo")]: "foo"}, [Symbol.for("foo")]);
// '{}'

JSON.stringify(
    {[Symbol.for("foo")]: "foo"}, 
    function (k, v) {
        if (typeof k === "symbol"){
            return "a symbol";
        }
    }
);


// undefined 

// 不可枚举的属性默认会被忽略：
JSON.stringify( 
    Object.create(
        null, 
        { 
            x: { value: 'x', enumerable: false }, 
            y: { value: 'y', enumerable: true } 
        }
    )
);

// "{"y":"y"}"
```
## 8  js中的关键词in
### 8.1 in iterator
- 判断当前值是否在iterator的下标中
 - array: 数组
 - object：key
  - 包含原型链中的key
```javascript
  console.log(1 in [1]); //false
  console.log(key in obj) //判断key是不是obj的属性，包含原型链的寻找
```
### 8.2 for...in...
- 用于变量当前iterator的下标
  - array: 数组
  - object：key
    - 包含原型链中的key
## 9 js中的全局变量和函数
### 9.1 js中的全局变量
- ![tatal_val.jpg](./img/tatal_val.jpg)
### 9.2 js中的全局函数
- ![total_func.jpg](./img/total_func.jpg)

# 五 js的DOM操作
## 1. DOM(document Object Model)
- 文档对象模型(DOM树)
- document
  - 表示整个html网页文档
- object
  - 表示将文档的每一个部分转化为一个对象
- model
  - 使用模型来表示对象之间的关系，以方便获取对象
    - 使用的是树的模型
### 1.2. DOM树
- DOM把一个文档表示为一棵家谱树，树是由节点构成的
### 1.3. 节点(node)
- 构成网页的基本元素
#### 1.3.1. 节点的分类
##### 1.3.1.1. 文档节点(document)
- 浏览器已经为我们提供了文档节点，可以在页面中直接使用
- 文档节点代表的是整个网页
##### 1.3.1.2. 元素节点
- 元素标签
##### 1.3.1.3. 属性节点
- 元素的属性 
##### 1.3.1.4. 文本节点
- 标签内部的文本内容
#### 1.3.2. 节点的属性
- ![了解](./img/ex15.jpg)
- DOM定义了node的接口以及许多中节点类型来表示XML几点的多个方面
- ![理解](./img/ex14.jpg)
## 2 DOM方法
### 2.1 DOM document属性和方法
#### 2.1.1 document获取元素对象的方法
##### 2.1.1.1 document.getElementById(id)(特有)
- 返回一个id的元素对象
- 参数
  - id：id名，是一个字符串
##### 2.1.1.2 document.getElementsByClassName(names)
- 返回类名names元素对象的类数组
- 参数
  - names：类名，是一个字符串
- ie8及以下不支持
##### 2.1.1.3 document.getElementsByTagName(tagNames)
- 返回类名tagNames元素对象的类数组
- 参数
  - tagNames：标签名，是一个字符串
##### 2.1.1.4 document.getElementsByName(names)
- 返回属性name值为names元素对象的类数组
- 参数
  - names：name属性的值，是一个字符串
##### 2.1.1.5 document.querySelector(cssSelector)
- 返回与指定的选择器组匹配的元素的后代的第一个元素对象。
##### 2.1.1.6 document.querySelectorAll(cssSelector)
- 返回与指定的选择器组匹配的元素的后代的所有元素对象组成的类数组。

#### 2.1.2 document常用的属性
##### 2.1.2.1 document.body
- 返回标签名为body的元素对象
##### 2.1.2.2 document.all
- 以类数组的形式返回整个文档的元素对象
##### 2.1.2.3 document.doucumentElement
- 返回标签名为html的元素对象
#### 2.1.3 doucment与增加元素对象相关的属性
##### 2.1.3.1 document.createElement(tagName)
- 创建一个标签名为tagName的元素对象
#### 2.1.4 document其他的一些操作
##### 2.1.4.1 document.open()
- 打开一个要写入的文档
  - 此时已注册到文档、文档中的节点或文档的window的所有事件监听器会被清除。
  - 文档中的所有节点会被清除。
##### 2.1.4.2 document.write(markup)
- 将markup的内容写入到文档之中
  - 若第一次写入没有调用document.open(),则第一次调用的时候会自动调用document.open()清空当前的文档
- 参数
  - markup：字符串类型
    - 若markup为非字符串类型，则会<font color="red">调用toString进行隐式转化</font>
```javascript
  var str1 = new RegExp("e");
  document.write(str1.exec("hello"));
  // 在当前页面输出e
```
### 2.2 DOM Element方法
#### 2.2.1 element获取元素对象的方法
##### 2.2.1.1 element.getElementsByClassName(names)
- 返回类名names元素对象的类数组
- 参数
  - names：类名，是一个字符串
##### 2.2.1.2 element.getElementsByTagName(tagNames)
- 返回类名tagNames元素对象的类数组
- 参数
  - tagNames：标签名，是一个字符串
##### 2.1.1.3 element.querySelector(cssSelector)
- 返回与指定的选择器组匹配的元素的后代的第一个元素对象。
- IE8及以下浏览器不支持
##### 2.1.1.4 element.matches(cssSelector)
- 判断当前元素对象是否与cssSelector匹配
##### 2.1.1.4 element.querySelectorAll(cssSelector)
- 返回与指定的选择器组匹配的元素的后代的所有元素对象组成的类数组。
- IE8及以下浏览器不支持
#### 2.2.2 element与父元素对象，子元素对象，兄弟元素对象有关的属性和方法
##### 2.2.2.1 element.parentNode
###### 2.2.2.1.1 parentNode.childElementCount
- 返回一个当前 ParentNode 所含有的后代数量。
###### 2.2.2.1.2 parentNode.children
- 返回一个包含 ParentNode 所有后代元素对象的类数组，忽略所有非元素子节点。
###### 2.2.2.1.3 parentNode.firstElementChild
- 返回第一个后代元素对象
- IE8及以下浏览器不支持
###### 2.2.2.1.4 parentNode.lastElementChild
- 返回最后一个后代元素对象
- IE8及以下浏览器不支持
###### 2.2.2.1.5 parentNode.append(...node)
- 在子元素对象的最后插入一个节点
- 参数
  - node 
    - 元素对象
###### 2.2.2.1.5 parentNode.prepend(node)
- 在子元素对象的最钱买你插入一个节点
- 参数
  - node 
    - 元素对象
##### 2.2.2.2 element.offsetParent（只读属性）
- 获取当前元素的定位父元素对象
  - 获取到的离当前元素最近的非static祖先元素
- 若没有，则默认为body。
##### 2.2.2.3 element.childNode
###### 2.2.2.2.1 childNode.remove()
- 删除当前元素对象
##### 2.2.2.4 element.previousElementSibling（只读）
- 该元素的上一个兄弟元素对象，若返回null，则说明不存在
##### 2.2.2.5 element.nextElementSibling（只读）
- 该元素的下一个兄弟元素对象，若返回null，则说明不存在
##### 2.2.2.6 element.closest(cssSelector)
- 获取离当前元素对象最近的具有能够匹配selectors的祖先元素
##### 2.2.2.7 元素对象的增删
###### 2.2.2.6.1 元素对象的增加
- 创建子元素对象
- 给子元素对象赋值
- 添加到父元素对象中
```javascript
  let childElement = createElement('div');
  childElement.innerHTML = 'hello_world' //一般是比较固定的格式
  fatherElement.appendChild(childElement);
```
###### 2.2.2.6.2 元素对象的删除
```javascript
  // 方法1：直接本身删除
  elementObject.remove();
  // 方法2：利用父节点删除
  elementObject.parentNode.removeChild(elementObject)
```
#### 2.2.3 element与增加元素对象相关的属性和方法
##### 2.2.3.1 parentNode.append(...node)
- 在子元素对象的最后插入一个节点
- 参数
  - node 
    - 元素对象
##### 2.2.3.2 parentNode.prepend(node)
- 在子元素对象的最前面插入一个节点
- 参数
  - node 
    - 元素对象
##### 2.2.3.3 parentNode.replaceChildren(newChild, oldChild)
- 用新的子类对象来代替旧的子类对象
##### 2.2.3.4 childNode.replaceWith(...node)
- 用node来代替当前的childNode
##### 2.2.3.5 childNode.remove()
- 删除当前的childNode元素对象
##### 2.2.3.6 element.insertAdjacentElement(position, newElement)
- 将newElement插入相当于当前元素对象某个位置
- 参数
  - position（理解：begin可以看成当前元素对象的开始标签，end可以看成当前元素对戏那的结束标签）
    - "beforebegin": 在当前元素对象本身的前面
    - "afterbegin": 在当前元素对象中，第一个子元素对象的前面
    - "beforeend": 在当前元素对象中，最后一个子元素对象的后面
    - "afterend": 在当前元素对象本身的后面
  - newElement
    - 新插入的元素
##### 2.2.3.6 element.insertAdjacentHTML(position, text)
- 将text解析成一个新的元素对象，将该对象插入相当于当前元素对象某个位置
- 参数
  - position（理解：begin可以看成当前元素对象的开始标签，end可以看成当前元素对戏那的结束标签）
    - "beforebegin": 在当前元素对象本身的前面
    - "afterbegin": 在当前元素对象中，第一个子元素对象的前面
    - "beforeend": 在当前元素对象中，最后一个子元素对象的后面
    - "afterend": 在当前元素对象本身的后面
  - text
    - 以字符串形式表示的HTML
#### 2.2.4 element与元素属性相关的属性及方法
##### 2.2.4.1 element.nodeName/tagName
- 以字符串形式返回当前元素对象的标签名
##### 2.2.4.2 element.id
- 以字符串返回当前元素对象的id值
##### 2.2.4.3 element.innerHTML
- 仅获取元素内容的HTML表示形式或替换元素的内容
##### 2.2.4.4 element.outerHTML
- 获取描述元素（包括其后代）的序列化HTML片段。（包括自身的标签）
###### 2.2.4.1.1 用于替换当前的元素对象
##### 2.2.4.5 element.innerText
- 返回当前元素及其后代的“渲染”文本内容
  - 显示最终渲染完的内容，display:none无法获取
##### 2.2.4.6 element.className
- 以字符串的形式返回元素对象的类值，以空格的形式分开
##### 2.2.4.7 element.classList（只读）
- 相比将 element.className 作为以空格分隔的字符串来使用，classList 是一种更方便的访问元素的类列表的方法。
- 虽然是只读属性，但是可以使用以下的方法来进行修改
###### 2.2.4.3.1 classList.add(...classValue)
- 类值增加
###### 2.2.4.3.2 classList.remove(...classValue)
- 类值删除
###### 2.2.4.3.3 classList.toggle(classValue)
- 类值的切换
  - 有则删去
  - 没有则添加

##### 2.2.4.8 element.attributes（只读）
- 返回一个与该元素相关的所有属性的类数组

##### 2.2.4.9 element.getAttribute(attrName:string)（只读）
- 返回当前元素指定属性名的值
##### 2.2.4.10 element.getAttributeNames()
- <font color="red">以数组的形式</font>返回所有具有的属性名称
- 将 getAttributeNames() 与 getAttribute() 组合使用， 是一种有效替代 Element.attributes 的使用方法.
```javascript
  // 遍历elements的元素
  for(let name of element.getAttributeNames())
  {
    let value = element.getAttribute(name);
    console.log(name, value);
  }
```
##### 2.2.4.11 element.hasAttribute(attrName:string)
- 判断是否具有attrName属性，返回一个布尔值
##### 2.2.4.11 element.removeAttribute(attrName:string)
- 删去attrName属性，不存在也不会报错
##### 2.2.4.12 element.setAttribute(attrName:string, attrValue:string)
- 设置当前属性的值
##### 2.2.4.13 element.toggleAttribute(attrName[, force])
- 存在某个属性则增加，不存在则删除

#### 2.2.5 element与样式相关的属性和方法
##### 2.2.5.1 element.client[Height, Width]（只读）
- 该元素对象的宽度/高度，返回的是<font color="red">number类型</font>
- ![clientWidth-Top.jpg](./img/clientWidth-Top.jpg)
  - 组成包括content和padding
##### 2.2.5.2 element.client[Left, Top]（只读）
- element为非静态元素对象，获取其Left和Top的偏移量
  - 子: 以border为边界
  - 父: 以content为边界
##### 2.2.5.3 element.scroll[Height, Width]（只读）
- 一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。
  - 若没有滚动条，则值与element.client[Height, Width]相同
- 包括content, padding, ::before, ::after
##### 2.2.5.4 element.scroll[Left, Top]
- <font color="red">读取或设置</font>当前元素滚动条到元素左边/上边的距离
  - 如果元素不能滚动（比如：元素没有溢出），那么scroll[Left, Top] 的值是0。
  - 如果给scroll[Left, Top] 设置的值小于0，那么scroll[Left, Top] 的值将变为0。
  - 如果给scroll[Left, Top] 设置的值大于元素内容最大宽度，那么scroll[Left, Top]的值将被设为元素最大宽度。
##### 2.2.5.5 element.offset[Width, Height](只读)
- 返回元素对象的整个宽度和整个高度
  - 即包括content + padding + border
  - 由于计算来的，所以readonly
- 只是返回相应的数字
##### 2.2.5.6 element.offset[Left,right], element.offset[Top,buttom]
- 当前元素相对于其定位元素(offsetParent(非static))的水平偏移量/垂直偏移量
  - 包含父元素的padding+top/left
##### 2.2.5.7 element.[attName] （获取内联样式属性）
- 以字符串的形式返回attrName的属性值
  - 导致相应的单位也会返回
###### 2.2.5.5.1 element.value
- 一般用于获取或设置input的value
##### 2.2.5.8 element.style.[attrName]
- <font color="red">用于设置内联样式的style属性</font>
  - 若在样式表中有以-连接，则应该<font color="red">采取驼峰的形式</font>
  - 注意是有单位的字符串
- 该样式的设置优先级为内联样式的优先级
###### 2.2.5.6.1 element.style.backgroundColor
- 用于设置背景的颜色
##### 2.2.5.9 实现判断滚动条是否到底
```javascript
  // 当垂直滚动条滚动到底的时候有
  element.clientHeight === element.scrollHeight - element.scrollTop
```  

## 3 DOM事件
- 文档或浏览器窗口中发生的一些特定交互的瞬间
### 3.0 事件的一些基本常识
#### 3.0.1 事件的公共属性和方法
##### 3.0.1.1 event.target
- event.target返回的是一个元素对象
  - 若该事件不是冒泡事件，则event.target会捕获到当前绑定的元素对象
  - 若该事件是冒泡事件，则event.target会捕获到最底层的触发该事件的元素对象
##### 3.0.1.2 event.currentTarget
- 与是不是冒泡事件无关，只是返回当前触发的元素
##### 3.0.1.3 event.bubbles
- 表明当前事件是否会向DOM树上层元素冒泡
  - event.stopPropagation()
##### 3.0.1.4 event.cancelable
- 表明该事件是否可以被取消
  - event.preventDefault()
##### 3.0.1.5 event.type
##### 3.0.1.6 event.stopPropagation()
- 以前是用event.cancelBubble = true,现在用这个进行代替
- 阻止捕获和冒泡阶段中在该元素的当前事件中的进一步传播。
##### 3.0.1.7 event.preventDefault()
- 取消当前元素触发事件的默认行为
  - <font color="red">在on[ eventName ]的表达式形式定义的回调函数中，可以使用return false来取消事件的默认行为</font>
```javascript
  elementObject.onclick = function() {
    ...
    return false;
  }
```
#### 3.0.2 事件与元素的绑定和取消的方法方法
##### 3.0.2.0 在内联样式中增加属性on[eventName] = "callback()" 
##### 3.0.2.1 element.on[eventName] = function() {}
- 表达式的形式的事件绑定
- 缺点：
  - 只能同时为一个元素的一个事件绑定一个响应函数
  - 不能绑定多个，若绑定了多个，则后面的会覆盖前面的
##### 3.0.2.2 element.on[eventName] = null
- 表达式形式的事件取消绑定
##### 3.0.2.3 element.addEventListener(eventName:string, func, [true || false])
- 参数
  - 事件的字符串，不要on
  - 回调函数，当事件触发
  - <a href="#addEventListener">是否在捕获阶段触发事件</a>，需要一个布尔值，默认是false
- 优点
  - 可以同时为一个元素对象的同一个事件绑定多个响应函数
    - 当事件被触发时，响应函数会按照绑定的顺序进行响应
- 缺点
  - 这种方法不支持ie8及以下
##### 3.0.2.4 element.removeEventListener(eventName:string, func, [true || false])
- 删除使用element.addEventListen()方法添加的事件
- 所有的参数值必须与对应的element.addEventListen()的参数值相同才能进行删除
##### 3.0.2.5 element.attachEvent(on[eventName]:string, func)
- 适用于ie8及以下浏览器
- 参数
  - 事件的字符串，要on
  - 回调函数，当事件触发
- 优点
  - 可以同时为一个元素对象的同一个事件绑定多个响应函数
    - 当事件被触发时，响应函数会按照绑定的顺序的倒序进行响应（后绑定先执行）
##### 3.0.2.5 通用的事件绑定函数
```javascript
  /*
  * 参数
  * 1. obj 要绑定的事件对象
  * 2. eventName：事件名称
  * 3. callback: 回调函数
  */
  // addEventListener()中的callback函数中的this，是绑定事件对象
  // attachEvent()中的allback函数中的this是window， 所以需要修改callback的this对象
  function bind(obj, eventName, callback){
    if(obj.addEventListener)
      obj.addEventListener( eventName, callback, false);
    else
      obj.attachEvent('on' + eventName,function() {
      callback.call(obj); //将call的this指向obj
    });
  }
  // callback.bind(obj)
```
#### 3.0.3 事件的传播
- 事件的传播途径有两种
  - 以非冒泡的形式实现事件的传播
  - 以冒泡的形式实现事件的传播
##### 3.0.3.1 非冒泡事件
- 假设当前绑定事件的元素有子元素，且此时事件触发
- 非冒泡事件执行
  - 并不会向其子元素传播触发的事件
  - 该元素触发了事件
##### 3.0.3.2 冒泡事件
- 假设当前绑定事件的元素有子元素，且子元素也有绑定相同的事件
- 事件由父元素触发
  - 父元素检查是否触发了该事件，并将事件传递给子元素，同样，子元素也会检查是否触发该事件
  - 直到子元素到底或者后面的子元素没办法触发该事件，最底层的子元素会首先调用事件的回调函数，然会其上一层再调用其触发事件，直至到达最上层的父元素
- 事件由子元素触发
 - 由于子元素也包含在父元素之中，实际上相当于触发了父元素，同样会发生冒泡
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="btn1">
        按钮1
        <div id="btn2">按钮2</div>
    </div>
    <script type="text/javascript">
        let btn1 = document.getElementById("btn1");
        let btn2 = document.getElementById("btn2");
        btn1.addEventListener("click", function(event) {
            console.log("按钮1");
        })
        btn2.addEventListener("click", function(event) {
            console.log("按钮2");
        })
	</script> 
</body>
</html>
```
- btn2和btn1的区域重合
- 点击按钮1，由于click是冒泡事件，所以事件会向下传播，由于冒泡的原因，所以会输出
  - 按钮2，按钮2
- 点击按钮2，实际上相当于点击了按钮1，结果是相同的
- 若在按钮2的触发函数中增加event.stopPropogation()则会阻止两次事件的冒泡，所以会输出
  - 按钮2
###### 3.0.3.2.1 冒泡事件的传播
- ie8及以���没有捕获阶段
- 将冒泡事件分成三个阶段
  - 捕获阶段
    - 在捕获阶段时，从外层的祖先元素，向目标元素进行事件捕获，但是默认此时不会触发事件
  - 目标阶段
    - 捕获到目标元素，捕获结束，开始在目标元素上触发事件
  - 冒泡阶段
    - 事件从目标元素向它的祖先元素传递，只会触发一次相应的事件
- ![事件理解](./img/ex16.jpg)
- <span id="addEventListener">addEventListener的第三个参数</span>
  - 默认值为false 
    - 即事件的回调函数在冒泡阶段才会被触发，即子元素触发优先于祖先元素触发
  - 若设置为true
    - 即事件的回调函数在捕获阶段被触发，即祖先元素触发优先于子元素的触发
###### 3.0.3.2.2 event.stopPropagation()的应用
- 阻止捕获和冒泡阶段中在该元素的当前事件中的进一步传播。
- 解释
  - 在子元素中调用该函数，会阻止其上元素调用回调函数，即阻止了该事件后的事件的冒泡
- 使用event.stopPropagation()实现冒泡事件click父元素后不向子元素传播
- <a href="#stopPropagation">例子见下面</a>
### 3.1 剪贴版事件（ClipboardEvent）
<table>
  <thead>
    <tr>
      <th>事件名称</th>
      <th>事件基本信息</th>
      <th>事件触发条件</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>copy</td>
      <td>
        Bubbles: Yes <br/>
        Cancelable: Yes <br/>
        Target: 获得焦点的元素（即是能够编辑内容的元素)<br/>
        返回的接口类型(eventType):keyboardEvent 
      </td>
      <td>当用户通过浏览器UI（例如，使用 Ctrl/⌘+C  键盘快捷方式或从菜单中选择“复制”）</td>
    </tr>
    <tr>
      <td>cut</td>
      <td>
        Bubbles: Yes <br/>
        Cancelable: Yes <br/>
        Target: element <br/>
        返回的接口类型(eventType):keyboardEvent 
      </td>
      <td>在将选中内容从文档中删除并将其添加到剪贴板后触发。</td>
    </tr>
    <tr>
      <td>paste</td>
      <td>
        Bubbles: Yes <br/>
        Cancelable: Yes <br/>
        Target: element <br/>
        返回的接口类型(eventType):keyboardEvent 
      </td>
      <td>当用户在浏览器用户界面发起“粘贴”操作时，会触发paste事件。</td>
    </tr>
  </tbody>
</table>

#### 3.1.1 剪贴板事件的属性和方法(ClipboardEvent)
<table>
  <thead>
    <tr>
      <th>事件属性</th>
      <th>属性的功能</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ClipboardEvent.clipboardData</td>
      <td>是一个 DataTransfer 对象，它包含了由用户发起的 cut  、 copy  和 paste  操作影响的数据,可以通过.getData(fomat)方法得到数据(fomat: "text/plain"，text/"uri-list")</td>
    </tr>
  </tbody>
</table>

### 3.2 焦点事件(FocusEvent)
- 你点击某个input的时候,页面中的输入框就会变成可以输入的样子,这就叫做获取焦点
<table>
  <thead>
    <tr>
      <th>事件名称</th>
      <th>事件基本信息</th>
      <th>事件触发条件</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>blur</td>
      <td>
        Bubbles: No <br/>
        Cancelable: No <br/>
        Target: element<br/>
        返回的接口类型(eventType):FocusEvent 
      </td>
      <td>当一个元素失去焦点的时候 blur 事件被触发</td>
    </tr>
    <tr>
      <td>focus</td>
      <td>
        Bubbles: No <br/>
        Cancelable: No <br/>
        Target: element <br/>
        返回的接口类型(eventType):FocusEvent 
      </td>
      <td>focus事件在元素获取焦点时触发</td>
    </tr>
    <tr>
      <td>focusout</td>
      <td>
        Bubbles: Yes <br/>
        Cancelable: No <br/>
        Target: element <br/>
        返回的接口类型(eventType):FocusEvent  
      </td>
      <td>当元素即将失去焦点时，focusout 事件被触发</td>
    </tr>
    <tr>
      <td>focusin</td>
      <td>
        Bubbles: Yes <br/>
        Cancelable: No <br/>
        Target: element <br/>
        返回的接口类型(eventType):FocusEvent 
      </td>
      <td>focusin事件在元素获取焦点时触发</td>
    </tr>
  </tbody>
</table>

#### 3.2.1 焦点事件的属性和方法(FocusEvent)
<table>
  <thead>
    <tr>
      <th>事件属性</th>
      <th>属性的功能</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>FocusEvent.relatedTarget</td>
      <td>补充</td>
    </tr>
  </tbody>
</table>

- focus/blur 和 focusin/focusout区别
  - 前两个不触发冒泡事件，而后两个触发冒泡事件

### 3.3 键盘事件
<table>
  <thead>
    <tr>
      <th>事件名称</th>
      <th>事件基本信息</th>
      <th>事件触发条件</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>keyup</td>
      <td>
        Bubbles: Yes <br/>
        Cancelable: Yes <br/>
        Target: 键盘 <br/>
        返回的接口类型(eventType):KeyboardEvent </br> 
      </td>
      <td>当一个按钮按下后被释放时触发</td>
    </tr>
    <tr>
      <td>keydown</td>
      <td>
        Bubbles: Yes <br/>
        Cancelable: Yes <br/>
        Target: 元素 <br/>
        返回的接口类型(eventType):KeyboardEvent 
      </td>
      <td>当一个按钮被按下时触发</td>
    </tr>
  </tbody>
</table>

#### 3.3.1 键盘事件的属性和方法(KeyboardEvent)
<table>
  <thead>
    <tr>
      <th>事件属性</th>
      <th>属性的功能</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>KeyboardEvent.ctrlKey（只读）</td>
      <td>返回一个Boolean, 如果按键事件ctrl被按下，则为true</td>
    </tr>
    <tr>
      <td>KeyboardEvent.ctrlKey（只读）</td>
      <td>返回一个Boolean, 如果按键事件产生ctrl被按下，则为true</td>
    </tr>
    <tr>
      <td>KeyboardEvent.AltKey（只读）</td>
      <td>返回一个Boolean, 如果按键事件产生Alt被按下，则为true</td>
    </tr>
    <tr>
      <td>KeyboardEvent.shiftKey（只读）</td>
      <td>返回一个Boolean, 如果按键事件产生shift被按下，则为true</td>
    </tr>
    <tr>
      <td>KeyboardEvent.metaKey（只读）</td>
      <td>返回一个Boolean, 如果按键事件产生窗口按钮被按下，则为true</td>
    </tr>
    <tr>
      <td>KeyboardEvent.code（只读）</td>
      <td>返回一个DOMString, code代表事件触发的物理按键</td>
    </tr>
    <tr>
      <td>KeyboardEvent.repeat（只读）</td>
      <td>返回一个Boolean, 如果按键一直被按住，则返回true</td>
    </tr>
  </tbody>
</table>

### 3.4 鼠标事件
<table>
  <thead>
    <tr>
      <th>事件名称</th>
      <th>事件基本信息</th>
      <th>事件触发条件</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>click</td>
      <td>
        Bubbles: Yes <br/>
        Cancelable: Yes <br/>
        Target: Element <br/>
        返回的接口类型(eventType):MouseEvent </br> 
      </td>
      <td>当定点设备的按钮在一个元素对象上按下和放开时触发</td>
    </tr>
    <tr>
      <td>dblclick</td>
      <td>
        Bubbles: Yes <br/>
        Cancelable: Yes <br/>
        Target: Element <br/>
        返回的接口类型(eventType):MouseEvent </br> 
      </td>
      <td>当定点设备的按钮在一个元素对象上短时间内两次按下和放开时触发</td>
    </tr>
    <tr>
      <td>mousedown</td>
      <td>
        Bubbles: Yes <br/>
        Cancelable: Yes <br/>
        Target: Element <br/>
        返回的接口类型(eventType):MouseEvent </br> 
      </td>
      <td>当定点设备的按钮在一个元素对象上被（连续）按下时触发</td>
    </tr>
    <tr>
      <td>mouseup</td>
      <td>
        Bubbles: Yes <br/>
        Cancelable: Yes <br/>
        Target: Element <br/>
        返回的接口类型(eventType):MouseEvent </br> 
      </td>
      <td>当定点设备的按钮在一个元素对象上被松开时触发</td>
    </tr>
    <tr>
      <td>mouseenter</td>
      <td>
        Bubbles: No <br/>
        Cancelable: Yes <br/>
        Target: Element <br/>
        返回的接口类型(eventType):MouseEvent </br> 
      </td>
      <td>当定点设备的按钮进入一个元素对象的区域时触发</td>
    </tr>
    <tr>
      <td>mouseleave</td>
      <td>
        Bubbles: No <br/>
        Cancelable: Yes <br/>
        Target: Element <br/>
        返回的接口类型(eventType):MouseEvent </br> 
      </td>
      <td>当定点设备的按钮离开一个元素对象的区域时触发</td>
    </tr>
    <tr>
      <td>mouseover</td>
      <td>
        Bubbles: Yes <br/>
        Cancelable: Yes <br/>
        Target: Element <br/>
        返回的接口类型(eventType):MouseEvent </br> 
      </td>
      <td>当定点设备的按钮进入一个元素对象的区域时触发</td>
    </tr>
    <tr>
      <td>mouseout</td>
      <td>
        Bubbles: Yes <br/>
        Cancelable: Yes <br/>
        Target: Element <br/>
        返回的接口类型(eventType):MouseEvent </br> 
      </td>
      <td>当定点设备的按钮离开一个元素对象的区域时触发</td>
    </tr>
    <tr>
      <td>mousemove</td>
      <td>
        Bubbles: Yes <br/>
        Cancelable: Yes <br/>
        Target: Element <br/>
        返回的接口类型(eventType):MouseEvent </br> 
      </td>
      <td>当定点设备的按钮在一个元素对象上移动时触发</td>
    </tr>
  </tbody>
</table>

- mouseenter和mouseover的区别
  - mouseenter不能产生冒泡事件
  - mouseover有冒泡事件
#### 3.4.1 鼠标事件的属性和方法(MouseEvent)
- <span id="MouseEvent">鼠标事件</span>
<table>
  <thead>
    <tr>
      <th>事件属性</th>
      <th>属性的功能</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MouseEvent.ctrlKey（只读）</td>
      <td>返回一个Boolean, 如果鼠标事件ctrl被按下，则为true</td>
    </tr>
    <tr>
      <td>MouseEvent.ctrlKey（只读）</td>
      <td>返回一个Boolean, 如果鼠标事件产生ctrl被按下，则为true</td>
    </tr>
    <tr>
      <td>MouseEvent.AltKey（只读）</td>
      <td>返回一个Boolean, 如果鼠标事件产生Alt被按下，则为true</td>
    </tr>
    <tr>
      <td>MouseEvent.shiftKey（只读）</td>
      <td>返回一个Boolean, 如果鼠标事件产生shift被按下，则为true</td>
    </tr>
    <tr>
      <td>MouseEvent.metaKey（只读）</td>
      <td>返回一个Boolean, 如果鼠标事件产生窗口按钮被按下，则为true</td>
    </tr>
    <tr>
      <td>MouseEvent.detail（只读）</td>
      <td>返回在短时间内元素对象被连续点击的次数（long)</td>
    </tr>
    <tr>
      <td>MouseEvent.screenX（只读）</td>
      <td>返回点击位置对应屏幕的x轴坐标</td>
    </tr>
    <tr>
      <td>MouseEvent.screenY（只读）</td>
      <td>返回点击位置对应屏幕的y轴坐标</td>
    </tr>
    <tr>
      <td>MouseEvent.clientX（只读）</td>
      <td>返回点击位置对应浏览器窗口的x轴坐标，当存在滚动条时，只表示在当前窗口的位置</td>
    </tr>
    <tr>
      <td>MouseEvent.clientY（只读）</td>
      <td>返回点击位置对应浏览器窗口的y轴坐标，当存在滚动条时，只表示在当前窗口的位置</td>
    </tr>
    <tr>
      <td>MouseEvent.movementX（只读）</td>
      <td>它提供了当前事件和上一个mousemove事件之间鼠标在水平方向上的移动值。相当于currentEvent.movementX = currentEvent.screenX - previousEvent.screenX</td>
    </tr>
    <tr>
      <td>MouseEvent.movementY（只读）</td>
      <td>它提供了当前事件和上一个mousemove事件之间鼠标在垂直方向上的移动值。相当于currentEvent.movementY = currentEvent.screenY - previousEvent.screenY</td>
    </tr>
    <tr>
      <td>MouseEvent.pageX（只读）</td>
      <td>返回的相对于整个文档的x（水平）坐标，要和clientX区分开来，当具有滚动条时，表示的是整个页面的鼠标位置，对于ie8及以下不兼容</td>
    </tr>
    <tr>
      <td>MouseEvent.pageY（只读）</td>
      <td>返回的相对于整个文档的y（水平）坐标，要和clientY区分开来，当具有滚动条时，表示的是整个页面的鼠标位置，对于ie8及以下不兼容</td>
    </tr>
    <tr>
      <td>MouseEvent.button（只读）</td>
      <td>返回点击按钮(long)，0为鼠标左键，1为鼠标中间的按钮，2为鼠标右键</td>
    </tr>
    <tr>
      <td>MouseEvent.buttons（只读）</td>
      <td>返回多个点击按钮,通过加号进行计算（long），1为鼠标的左键，2为鼠标的右键，4为鼠标的滚轮，8为浏览器的后退按钮，16为浏览器的前进按钮</td>
    </tr>
  </tbody>
</table>



### 3.5 触摸事件
<table>
  <thead>
    <tr>
      <th>事件名称</th>
      <th>事件基本信息</th>
      <th>事件触发条件</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>touchcancel</td>
      <td>
        Bubbles: Yes <br/>
        Cancelable: No <br/>
        Target: Element <br/>
        返回的接口类型(eventType):TouchEvent </br> 
      </td>
      <td>当触摸点被中断时会触发 touchcancel 事件，中断方式基于特定实现而有所不同（例如， 创建了太多的触摸点）</td>
    </tr>
    <tr>
      <td>touchstart</td>
      <td>
        Bubbles: Yes <br/>
        Cancelable: Yes<br/>
        Target: Element <br/>
        返回的接口类型(eventType):TouchEvent </br> 
      </td>
      <td>当一个或多个触摸点与触控设备表面接触时触发touchstart 事件</td>
    </tr>
    <tr>
      <td>touchmove</td>
      <td>
        Bubbles: Yes <br/>
        Cancelable: Yes<br/>
        Target: Element <br/>
        返回的接口类型(eventType):TouchEvent </br> 
      </td>
      <td>当一个或多个触摸点在触控设备表面移动时触发touchstart 事件</td>
    </tr>
    <tr>
      <td>touchend</td>
      <td>
        Bubbles: Yes <br/>
        Cancelable: Yes<br/>
        Target: Element <br/>
        返回的接口类型(eventType):TouchEvent </br> 
      </td>
      <td>当一个或多个触摸点与触控设备表面离开时触发touchstart 事件</td>
    </tr>
  </tbody>
</table>

#### 3.4.0 触摸事件的类型
- 触摸事件可以分为三类，可以用TouchEvent.type来查看当前的触摸事件的类型
  - touchstart
    - 当用户在触摸平面上放置了一个触点时触发
  - touchmove
    - 当用户在触摸平面上移动触点时触发
  - touchend
    - 当一个触点被用户从触摸平面上移除（即用户的一个手指或手写笔离开触摸平面）时触发。当触点移出触摸平面的边界时也将触发
  - touchcancel
    - 当触点由于某些原因被中断时触发。有几种可能的原因如下（具体的原因根据不同的设备和浏览器有所不同）：
      - 由于某个事件出现而取消了触摸：例如触摸过程被弹窗打断。
      - 触点离开了文档窗口，而进入了浏览器的界面元素、插件或者其他外部内容区域。
      - 当用户产生的触点个数超过了设备支持的个数，从而导致 TouchList 中最早的 Touch 对象被取消。
#### 3.4.1 触摸事件的属性和方法(TouchEvent)
<table>
  <thead>
    <tr>
      <th>事件属性</th>
      <th>属性的功能</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>TouchEvent.ctrlKey（只读）</td>
      <td>返回一个Boolean, 如果触摸事件ctrl被按下，则为true</td>
    </tr>
    <tr>
      <td>TouchEvent.ctrlKey（只读）</td>
      <td>返回一个Boolean, 如果触摸事件产生ctrl被按下，则为true</td>
    </tr>
    <tr>
      <td>TouchEvent.AltKey（只读）</td>
      <td>返回一个Boolean, 如果触摸事件产生Alt被按下，则为true</td>
    </tr>
    <tr>
      <td>TouchEvent.shiftKey（只读）</td>
      <td>返回一个Boolean, 如果触摸事件产生shift被按下，则为true</td>
    </tr>
    <tr>
      <td>TouchEvent.metaKey（只读）</td>
      <td>返回一个Boolean, 如果触摸事件产生窗口按钮被按下，则为true</td>
    </tr>
    <tr>
      <td>TouchEvent.changedTouches（只读）</td>
      <td>返回一个发生改变的元素对象的类数组, 包含所有被触发的对象（因为可以多只手指来触发）</td>
    </tr>
    <tr>
      <td>TouchEvent.targetTouches（只读）</td>
      <td>返回一个包含所有触点的底层的元素对象的类数组, 包含所有被触发的对象（因为可以多只手指来触发）</td>
    </tr>
    <tr>
      <td>TouchEvent.touches（只读）</td>
      <td>返回一个触点的元素对象的类数组, 包含所有被触发的对象（因为可以多只手指来触发）</td>
    </tr>
  </tbody>
</table>

#### 3.4.2 触摸事件的注意事项
- 触摸事件和鼠标事件会同时被触发（目的是让没有对触摸设备优化的代码仍然可以在触摸设备上正常工作）。如果你使用了触摸事件，可以调用 event.preventDefault() 来阻止鼠标事件被触发
### 3.6 滚轮事件（WheelEvent)
<table>
  <thead>
    <tr>
      <th>事件名称</th>
      <th>事件基本信息</th>
      <th>事件触发条件</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>wheel</td>
      <td>
        Bubbles: Yes <br/>
        Cancelable: Yes <br/>
        Target: Element <br/>
        返回的接口类型(eventType):WheelEvent </br> 
      </td>
      <td>当鼠标的滚轮被滑动时触发</td>
    </tr>
  </tbody>
</table>

#### 3.6.1 滚轮事件的属性和方法(WheelEvent)
- <a href="#MouseEvent">继承了鼠标事件的属性和方法</a>
<table>
  <thead>
    <tr>
      <th>事件属性</th>
      <th>属性的功能</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>deltaX</td>
      <td>水平滚动量以WheelEvent.deltaMode 为单位</td>
    </tr>
    <tr>
      <td>deltaY</td>
      <td>垂直滚动量以WheelEvent.deltaMode 为单位</td>
    </tr>
    <tr>
      <td>deltaZ</td>
      <td>Z轴滚动量以WheelEvent.deltaMode 为单位</td>
    </tr>
  </tbody>
</table>

#### 3.6.2 wheel的历史
- 在之前，该事件是以onmousewheel来触发的
- 有一个.wheelDelta事件属性的注意事项
- 获取事件中滚轮滚动的方向
  - 正值：向上，与数值无关
  - 负值：向下,与数值无关
- 属性中火狐不支持
  - 使用event.detail
    - 正值，向下
    - 负值，向上
- 实现兼容判断方向
```javascript
  if(event.wheelDelta > 0 || event.detail < 0){
    ... //向上
  }
  else{
    向下
  }
```
### 3.7 一些特殊元素标签才有的事件
#### 3.7.1 change事件
<table>
  <thead>
    <tr>
      <th>事件名称</th>
      <th>事件基本信息</th>
      <th>事件触发条件</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>change</td>
      <td>
        Bubbles: Yes <br/>
        Cancelable: No <br/>
        Target: Element <br/>
        返回的接口类型(eventType):Event </br> 
      </td>
      <td>当用户更改&lt;input&gt;、&lt;select&gt;和&lt;textarea&gt; 元素的值并提交这个更改时，change 事件在这些元素上触发。</td>
    </tr>
  </tbody>
</table>

- 基于表单元素的类型和用户对标签的操作的不同，change 事件触发的时机也不同：
  - 当元素是 :checked改变时状态时（通过点击或者使用键盘），见于 &lt;input type="radio"&gt; 和 &lt;input type="checkbox"&gt;；
  - 当用户显式提交改变时（例如：点击了 &lt;select&gt;中的一个选项，从 &lt;input type="date"&gt; 标签选择了一个日期，通过 &lt;input type="file"&gt; 标签上传了一个文件等）；
  - 当标签的值被修改并且失去焦点后，但未提交时（例如：对&lt;textarea&gt; 或者 &lt;input type="text"&gt;的值进行编辑后）
#### 3.7.2 input事件
<table>
  <thead>
    <tr>
      <th>事件名称</th>
      <th>事件基本信息</th>
      <th>事件触发条件</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>input</td>
      <td>
        Bubbles: Yes <br/>
        Cancelable: No <br/>
        Target: Element <br/>
        返回的接口类型(eventType):InputEvent</br> 
      </td>
      <td>当&lt;input&gt;、&lt;select&gt;和&lt;textarea&gt; 的value值被修改时</td>
    </tr>
  </tbody>
</table>

##### 3.7.2.1 input事件的特有的属性(InputEvent)
<table>
  <thead>
    <tr>
      <th>事件属性</th>
      <th>属性的功能</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>InputEvent.data</td>
      <td>返回当前输入的字符串，如果是删除操作，则该值为空字符串。</td>
    </tr>
    <tr>
      <td>InputEvent.isComposing</td>
      <td>返回一个布尔值，表明该事件是在触发 compositionstart 事件之后且触发 compositionend 事件之前触发的，也就是表明当前输入的字符是输入法的中途输入</td>
    </tr>
  </tbody>
</table>

### 3.7 事件的一些要学会的应用
#### 3.7.1 冒泡事件实现子盒和父盒的颜色变化
- 实现功能
  - 点击子盒：盒子颜色变成蓝色
  - 点击父盒：盒子颜色变成黑色
##### 3.7.1.1 利用event.stopPropagation()
- <span id="stopPropagation">关键点：</span>
  - 在子盒的触发事件中增加阻止冒泡的作用
    - 当父盒的事件触发且可以满足子盒往下传播的条件时，会被阻止冒泡所阻止，从而导致父盒的回调函数不能被触发
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      .container {
        width: 500px;
        height: 500px;
        background-color: #ff0000;
      }
      .inner {
        width: 100px;
        height: 100px;
        background-color: #00ff00;
      }
    </style>
</head>
<body>
  <!-- 
    当鼠标进入.inner时，inner变成2s时间蓝色，而container不变色
    当鼠标进入.container时，container变成黑色
   -->
      <div class="container">
        <div class="inner"></div>
      </div>
    <script type="text/javascript">
      window.onload = function() {
        function changeColor(event, color) {
          alert(event.target.className);
          event.target.style.backgroundColor = color;
        }
        let inner = document.querySelector(".inner");
        let container = document.querySelector(".container");
        inner.addEventListener("click", function(event) {
          event = event || window.event;
          event.stopPropagation();
          changeColor(event, "#0000ff");
        })
        // 使用mouseenter绑定inner -- 非冒泡，且event.target为绑定的事件
        container.addEventListener("click", function(event) {
          event = event || window.event;
          changeColor(event, "#000000");
        })
        
      }
	  </script>
</body>
</html>
```
##### 3.7.1.2 利用冒泡事件的出发元素的不同（即event.target的不同）
- 在冒泡事件中
  - event.target所得到的元素对象为触发该事件回调函数的事件
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      .container {
        width: 500px;
        height: 500px;
        background-color: #ff0000;
      }
      .inner {
        width: 100px;
        height: 100px;
        background-color: #00ff00;
      }
    </style>
</head>
<body>
  <!-- 
    当鼠标进入.inner时，inner变成2s时间蓝色，而container不变色
    当鼠标进入.container时，container变成黑色
   -->
      <div class="container">
        <div class="inner"></div>
      </div>
    <script type="text/javascript">
      window.onload = function() {
        function changeColor(event, color) {
          alert(event.target.className);
          event.target.style.backgroundColor = color;
        }
        let container = document.querySelector(".container");
        container.addEventListener("click", function(event) {
          event = event || window.event;
          if(event.target === container)
            changeColor(event, "#000000");
          else
            changeColor(event, "#0000ff");
        })
        
      }
	  </script>
</body>
</html>
```
#### 3.7.2 实现全选框
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="option">
        <form action="https://www.baidu.com/s?" method="get" target="_blank">
            <span>你的爱好运动是?</span>
                <input type="checkbox" id="all-select"><label for="all-select">全选/全不选</label>
            <div class="hobbies">
                <input type="checkbox" id="football" name="wd" value="football"><label for="football">足球</label>
                <input type="checkbox" id="basketball" name="wd" value="basketball"><label for="basketball">篮球</label>
                <input type="checkbox" id="badminton" name="wd" value="badminton"><label for="badminton">羽毛球</label>
                <input type="checkbox" id="ping-pong" name="wd" value="ping-pong"><label for="ping-pong">乒乓球</label>
            </div>
            <div class="buttons">
                <button id="btnSelectAll" type="button">全选</button>
                <button id="btnSelectNone" type="button">全不选</button>
                <button id="btnSelectNot" type="button">反选</button>
                <button type="submit">提交</button>
            </div>
        </form>
    </div>
    <script>
        const btnSelectAll = document.querySelector('#option .buttons #btnSelectAll');
        const btnSelectNone = document.querySelector('#option .buttons #btnSelectNone');
        const btnSelectNot = document.querySelector('#option .buttons #btnSelectNot');
        const selectAll = document.querySelector('#option #all-select');
        const inputsHobbies = document.querySelectorAll('#option .hobbies input');
        // 思路
        /*
            1. 将各个按钮的功能和input选择框单项联系起来
            2. input选择框单项和各个按钮的功能联系起来
            3. 总结和提取相应的函数以简化代码
        */
        /*
        *给某一个按钮绑定一个点击事件，用于操作所有的选择框
        *button: 绑定的按钮
        *func： 操作选择框内容的函数
        */ 
        function btnClick(button, func) {
            button.onclick = function() {
                // 对input框进行操作
                inputsHobbies.forEach(func);
                // 判断上面的全选框的结果
                // flag用于判断是不是全选
                let flag = true;
                inputsHobbies.forEach(btn => flag = btn.checked && flag);
                selectAll.checked = flag;
            }
        }
        /*绑定三个按钮以及全选择框以及4个input*/
        btnClick(btnSelectAll, inputHobbies => inputHobbies.checked = true)
        btnClick(btnSelectNone, inputHobbies => inputHobbies.checked = false)
        btnClick(btnSelectNot, inputHobbies => inputHobbies.checked = !inputHobbies.checked)
        btnClick(selectAll, inputHobbies => inputHobbies.checked = selectAll.checked)

        /*由于不需要对每个input执行函数，所以使用了空的函数*/
        inputsHobbies.forEach(inputHobbies => btnClick(inputHobbies, ()=>{}))
        // 箭头函数的this是在定义外函数
    </script>
</body>
</html>
```
#### 3.7.3 实现元素的拖拽
- 当鼠标在该拖拽元素按下时，开始拖拽(onmousedown)
- 当鼠标移动时，被拖拽元素(onmousemove)
- 当鼠标松开时，拖拽元素固定在当前位置(onmouseup)
##### 3.7.3.1 拖拽时鼠标位于左上角
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box1 {
            width: 100px;
            height: 100px;
            background-color: #ff0000;
            position: absolute;
        }
        .box2 {
            width: 100px;
            height: 100px;
            background-color: #00ff00;
            position: absolute;
            left: 200px;
            top: 200px;
        }
    </style>
</head>
<body>
    <div class="box1"></div>
    <div class="box2"></div>
    <!-- 相同的absolute的层叠现象，后面的覆盖先前的 -->
    <script>
        window.onload = function() {
            let box1 = document.querySelector('.box1');
            box1.onmousedown = function() {
                // alert('开始拖拽')
                // 不能给box1绑定，因为鼠标会脱离对应的边缘
                document.onmousemove = function(event) {
                    event = event || window.event;
                    const x = event.clientX
                    const y = event.clientY;
                    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                    box1.style.left = x + 'px';
                    box1.style.top = y + scrollTop + 'px';
                }
                // box1.onmouseup
                document.onmouseup = function() {
                   document.onmousemove = null;
                   document.onmoveup = null;
                } 
            }
        }
        /* 问题：
            1. 当拖拽元素移动到第二个非拖拽元素的位置时，由于层叠的原因会被覆盖。此时松开鼠标，并没有实现元素的位置固定
             原因：鼠标绑定的是box1，当移动到第二个元素时，松开时触发的是第二个元素mouseup的事件而不是box1，所以无效
             改box1 -> document
            2. 改成document要注意取消该事件。(没有存在意义的事件要取消)

*/
    </script>
</body>
</html>
```
- 注意
  - 在绑定onmousemove时，应该绑定的是整个document对象而不是本身的对象，因为若只是绑定当前的对象，由于元素的移动是之后计算得到的，会有延迟，此时鼠标已经在元素的外面了，无法触发该该事件了。
##### 3.7.3.2 拖拽位置位于鼠标位置刚开始点击的位置

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box1 {
            width: 100px;
            height: 100px;
            background-color: #ff0000;
            position: absolute;
            /* 相对于body进行定位 */
        }
        .box2 {
            width: 100px;
            height: 100px;
            background-color: #00ff00;
            position: absolute;
            left: 200px;
            top: 200px;
        }
    </style>
</head>
<body>
    <div class="box1"></div>
    <div class="box2"></div>
    <!-- 相同的absolute的层叠现象，后面的覆盖先前的 -->
    <script>
        window.onload = function() {
            let box1 = document.querySelector('.box1');
            box1.onmousedown = function(event) {
                // alert('开始拖拽')
                // 不能给box1绑定，因为鼠标会脱离对应的边缘
                // offsetX， offsetY为元素和鼠标之间的相对距离
                // offsetLeft为定位元素相对于祖先非static的left，且返回一个数值
                // .style是用于设置元素的位置，进行计算时记得使用元素对象的属性而不是style的属性
                let offsetX = event.clientX - this.offsetLeft;
                let offsetY = event.clientY - this.offsetTop;

                document.onmousemove = function(event) {
                    event = event || window.event;
                    let x = event.clientX
                    let y = event.clientY;
                    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                    box1.style.left = x - offsetX + 'px';
                    box1.style.top = y + scrollTop - offsetY + 'px';
                }
                // box1.onmouseup
                document.onmouseup = function() {
                   document.onmousemove = null;
                   document.onmouseup = null;
                } 
            }
        }
    </script>
</body>
</html>
```

##### 3.7.3.3 取消浏览器的默认行为造成拖拽的bug
- 当我们拖拽一个网页的内容时，浏览器会默认去搜索引擎中搜索内容，这时回导致出现拖拽的bug
- 方法1: 利用return false取消浏览器的默认行为
  - 该方法对ie8及以下没有作用
```javascript
  box.onmousedown = function() {
    ...
    return false;
  }
```
- 方法2：利用elementObject.setCapture()和elementObject.releaseCapture();
- 当一个元素设置了setCapture(),这个元素会把下一次全部相同的事件捕获到自己的身上
- 当mousedown的时候设置，当mouseup时释放
```javascript
  box.onmousedown = function() {
    elementObject.setCapture && elementObject.setCapture();
    ...
    ...
    box.onmouseup = function() {
      ...
      elementObject.releaseCapture && elementObject.releaseCapture();
    }
  }
```
- 方法3： 兼容性写法(利用短路)
```javascript
  box.onmousedown = function() {
    elementObject.setCapture();
    ...
    ...
    box.onmouseup = function() {
      ...
      elementObject.releaseCapture();
    }
    return false;
  }
```
##### 3.7.3.4 总结一个拖拽函数
```javascript
function drag(obj) {
  obj.onmousedown = function(event) {
      // 解决浏览器默认搜索的bug
  obj.setCapture && obj.setCapture();
      // 实现浏览器兼容
  event = event || window.event;
      // 得到相对位置，注意在计算过程中是不用style中的值
  let offsetX = event.clientX - this.offsetLeft;
  let offsetY = event.clientY - this.offsetTop;
  document.onmousemove = function(event) {
      let mouseX = event.clientX;
      let mouseY = event.clientY;
      // 解决下方出现滚动条的问题
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      obj.style.left = mouseX - offsetX + 'px';
      obj.style.top = mouseY + scrollTop - offsetY + 'px';
  }
  // document防止延迟时鼠标脱离范围导致无法触发
  document.onmouseup = function() {
      // 对于document的方法，在结束触发时要记得消除；
      document.onmousemove = null;
      obj.releaseCapture && obj.releaseCapture();
      document.onmouseup = null;
  }
  // 同样是取消浏览器的默认行为
  return false;
}
}
```
#### 3.7.4 滚轮事件的运用
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            min-height: 50px;
            height: 100px;
            width: 100px;
            background-color: #ff0000;
        }
    </style>
</head>
<body>
    <!-- 鼠标向下滚动时，div高变大，向上滚动时变小 -->
    <div class="box"></div>
    <script>
        const box = document.querySelector('.box');
        
        function bind(obj, eventName, callback) {
            if(obj.addEventListener) {
                obj.addEventListener(obj, eventName, callback);
            }
            else {
                obj.attachEvent(eventName, function() {
                    callback.call(obj);
                })
            }
        }
        // onmousewheel中火狐并不支持，只能使用addEventListener进行绑定，且对应的事件名称为'DOMMouseScroll'
        box.onmousewheel = function (event) {
            // 火狐中并没有event.wheelDelta属性，只有event.detail；
            if(event.wheelDelta > 0 || event.detail < 0){
                box.style.height = box.clientHeight - 10 + 'px';
            }
            else {
                box.style.height = box.clientHeight + 10 + 'px';
            }
            // 当触发该响应函数时，取消滑动鼠标滚轮时浏览器滚动条的默认行为
            event.preventDefault && event.preventDefault();
            // ie浏览器并不支持这种方式来取消浏览器的默行为
            return false;
        }
        
        bind(box,'DOMMouseScroll', box.onmousewheel);
        
    </script>
</body>
</html>
```
- 注意
  - 取消浏览器的默认行为的两种方法
  - onmousewheel在两种浏览器的不同写法，以及共用写法。
#### 3.7.5 键盘事件的运用
- 利用event.keyCode获得对应键盘的编码
##### 3.7.5.1 实现两个按键的判断
```javascript
// ctrl+y的判断
  document.onkeydown = function(event) {
    if(event.ctrlKey && event.keyCode === 17) {
      ...
    }
  }
```
##### 3.6.7.2 限制input框的输入内容
```javascript
// 当input被取消浏览器的默认行为时，则输入的内容不会出现在文本框之中
  input.onkeydown = function(event) {
    ...
    return false;
  }
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <input type="text">
    </div>
    <script>
        // 禁止input框输入数字
        let inputElement = document.querySelector('input');
        inputElement.onkeydown = function(event) {
            event = event || window.event;
            // 利用return false取消默认行为的方法
            if(event.keyCode >= 48 && event.keyCode <= 57)
                return false;
        }
    </script>
</body>
</html>
```
##### 3.6.7.3 div元素的移动
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            width: 50px;
            height: 50px;
            background-color: #ff0000;
            position: absolute;
        }
    </style>
</head>
<body>
    <div class="box"></div>
    <script>
        let step = 5;
        window.onload = function() {
            const dir = {
                38: [0, -1],
                39: [1, 0],
                40: [0, 1],
                37: [-1, 0]
            }
            let box = document.querySelector('.box');
            document.onkeydown = function(event) {
                if (event.shiftKey && event.keyCode === 38) {
                    step += 5;
                    return;
                }
                if (event.shiftKey && event.keyCode === 40) {
                    step = step >= 10 ? step - 5 : 5;
                    return;
                }
                event = event || window.event;
                // 上：38 右：39 下：40 左：37
                console.log(box.offsetLeft)
                box.style.left = box.offsetLeft + step*dir[event.keyCode][0] + 'px';
                box.style.top = box.offsetTop + step*dir[event.keyCode][1] + 'px';
            }
        }
    </script>
</body>
</html>
```

### 3.8 常用的的兼容性问题
#### 3.8.1 获取样式表中属性值的兼容性问题
- 要和设置区分开来
##### 3.8.1.1 window.getComputedStyle(element, pseudoElements)
- pseudoElements 伪元素
  - 返回了存储elementObject伪元素当前的样式的对象(默认值为null)
- 不兼容ie
##### 3.8.1.2 objectElement.currentStyle.样式名
- 获取当前元素对象显示的样式而不仅仅是内联或样式
  - 只能ie
- 区别：ie返回的auto，则上面一个放回的是具体的数值
- 兼容ie8
```javascript
  function getStyle(obj, name) {
  // 判断浏览器版本太麻烦，用什么进行判断？
  // 正常浏览器
    if(window.getComputedStyle)
      return getComputedStyle(obj, null)[name];
    else
      return obj.currentStyle[name];
  // ie8浏览器Style
}
```
#### 3.8.2 event参数的传递
- 为了解决兼容性的问题，事件在事件函数中传递event常用以下形式
  - ie8以下不传递该参数
```javascript
  elenmentObject.onevent = function(event) {
    const event = event || window.event
  }
```
#### 3.8.3 绑定事件的兼容性写法
```javascript
/*
* 参数
* 1. obj 要绑定的事件对象
* 2. eventName：事件名称
* 3. callback: 回调函数
*/
// addEventListener()中的callback函数中的this，是绑定事件对象
// attachEvent()中的allback函数中的this是window， 所以需要修改callback的this对象
  function bind(obj, eventName, callback){
    if(obj.addEventListener)
      obj.addEventListener( eventName, callback, false);
    else
      obj.attachEvent('on' + eventName,function() {
        callback.call(obj); //将call的this指向obj
      });
  }
// callback.bind(obj)

```


### 3.8. 文档的加载
#### 3.8.1 浏览器加载页面的顺序
- 浏览器加载页面时，是按照自上向下的顺序加载的，读取到一行就运行一行
  - js代码写到页面下面的原因就是为了可以在页面加载完毕以后再执行js代码
#### 3.8.2 onload事件
- 一张图片或页面加载完成之后才执行
- window.onload = function() {...}
  - 页面加载完成之后才会执行对应的函数
```javascript
  window.onload = function() {
    btn.onclick = () => alert("点击了一下");
  }
```
 
# 六 js的BOM操作
## 6.1. BOM(brower Object Model)
- 浏览器对象模型
  - BOM可以使我们通过js来操作浏览器
## 6.2. BOM的对象
- 在浏览器当中都是作为window的对象的属性保存的，可以直接使用window对象来使用，也可以直接使用
### 6.2.1. Window
- 代表的是整个浏览器的窗口，同时window也是网页的全局对象
#### 6.2.1.1. Window方法
##### 6.2.1.1.1. alert(str)
- 弹出对话框，提示str内容</td>
##### 6.2.1.1.2. prompt(str)
- 弹出对话框，提示str内容要求输入，并返回输入值
##### 6.2.1.1.3. comfirm(str)
- 弹出对话框，显示str内容，并有确认和取消按钮，返回布尔值
##### 6.2.1.1.4. setInterval(callback, time)
- 定时函数
- 将一个函数每隔一段时间调用一次,time单位是毫秒（多次）
- 返回一个Number数据定时器id，这个数字作为定时器的唯一标识（id）
##### 6.2.1.1.5. clearInterval(intervalId)
- 用来关闭intervalId的定时器
- 内部可以添加任何类型的值，若所添加的不是intervalId则什么也不做
##### 6.2.1.1.6. setTimeout(callback, time)
- 延时调用一个函数不马上执行而是隔一段时间再执行，只能实行一次
##### 6.2.1.1.7. clearTimeout(timeoutId)
- 关闭一个演延时调用函数
##### 6.2.1.1.8. 延时调用和定时调用的关系
- 延时调用和定时调用之间是可以相互替代的
### 6.2.2. Navigator
- 代表的当前浏览器的信息，通过该对象可以用来识别不同的浏览器
#### 6.2.2.1. Navigator的属性
- 由于历史原因，Navigator对象中的大部分属性都已经不能帮助我们识别浏览器
##### 6.2.2.1.1. navigator.userAgent
- 一般我们只会使用userAgent用来判断浏览器的信息
- 返回的是一个字符串，这个字符串中包含有用来秒速浏览器信息的内容，不同浏览器会有不同的userAgent
```javascript
// 适用于判断大部分浏览器名称
  const ua = navigator.userAgent;
  // i正则表达式忽略大小写
  if(/firefox/i.test(ua)) 
      alert("我是火狐");
  else if(/chrome/i.test(ua))
      alert("我是chrome")
  else if(/msie/i.test(ua))
      alert("我是ie10及以下")
  else if("ActiveXObject" in window) 
      console.log("你是ie11")

  // 如果无法通过UserAgent不能判断，可以通过一些浏览器中特有的对象来识别
  // 不如ActiveXobject
  if("ActiveXObject" in window) 
      console.log("你是ie")
  else
      console.log("你不是ie")
```
### 6.2.3. Location
- 代表当前浏览器的地址栏信息，通过locatino可以获取地址按信息或者操作浏览器跳转页面
#### 6.2.3.1. localtion
- 可以得到当前页面的完成路径
  - 给location赋值，则可以实现跳转
##### 7.2.3.1.1. location实现元素对象的类似a标签的属性
- 若给location赋值一个完整路径或者相对路径，则页面会自动跳转到该路径，并且生成了相应的历史记录
#### 6.2.3.2. location的属性
- ![属性](./img/location_attr.jpg);
#### 6.2.3.3. Location的方法
##### 6.2.3.3.1. location.assign(URL);
- 跳转到URL，和直接赋值的作用相同
##### 6.2.3.3.2. location.reload();
- 刷新页面，和刷新页面的按钮作用相同，不清空缓存
- location.reload(true)
  - 强制清空缓存并刷新页面
##### 6.2.3.3.3. location.replace(URL)
- 跳转到URL。且不留下历史记录
### 6.2.4. History
- 代表浏览器的立是记录，可以通过该对象来操作浏览器的历史记录，由于隐私原因，只能操作浏览器向前或向后跳转，而且该操作只在当次访问时有效。
- 可以用来进行浏览器的向前向后翻页
#### 6.2.4.1. History的属性
##### 6.2.4.1.1. history.length
- 获取到当次访问页面的数量（关闭窗口就重新计数）
#### 6.2.4.2. History的方法
##### 6.2.4.2.1. history.back()
- 可以用来回退到上一个页面，作用和浏览器的回退效果一样
##### 6.2.4.2.2. history.forward()
- 可以用来前进到上一个页面，作用和浏览器的回退效果一样
##### 6.2.4.2.3. history.go(n)
- 可以用来跳转到指定的页面
  - n为正数，向前前进n个页面
  - n为负数，向后回退n个页面
### 6.2.5. Screen
- 代表用户的屏幕的信息，通过该对象可以获取到用户的显示器相关的信息
### 6.2.6. Bom的应用
#### 6.2.6.1. 图片切换
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            text-align: center;
        }
        .box {
            width: 500px;
            height: 500px;
            padding: 20px;
            background: #eaeaea;
            margin: 0 auto;
        }
        .box img{
            width: 500px;
            height: 500px;

        }
    </style>
</head>
<body>
    <div class="box">
        <img src="../img/ex1.JPG" alt="图片">
    </div>
    <button class="begin">开始图片的切换</button>
    <button class="end">终止图片的切换</button>
    <script>
        window.onload = function() {
            const imgUrl = [
                '../img/ex1.JPG',
                '../img/ex2.JPG',
                '../img/ex3.JPG',
                '../img/ex4.JPG',
                '../img/ex5.JPG',
                '../img/ex6.JPG',
                '../img/ex7.JPG',
                '../img/ex8.JPG'
            ]
            let index = 0;
            function imgChange(img, imgUrl) {
                img.src = imgUrl[index];
                index = (index + 1) % imgUrl.length;
            }
            const img = document.querySelector('.box img')
            let id;
            const btn1 = document.querySelector('button.begin');
            btn1.onclick = function() {
                clearInterval(id);
                id = setInterval(() => {
                    imgChange(img, imgUrl);
                }, 1000);
                // 点击多次之后会越来越快的原因：
                /*每点击一个按钮，就会添加一个定时器，所以会开很多个定时器，所以切换速度变快了*/
                // 无法停下来的原因：只能清除最后一个定时器
                // 解决方案：在同一个元素对象开启一个定时器之前先清除先前的定时器。
            }
            const btn2 = document.querySelector('button.end');
            btn2.onclick = function() {
                clearInterval(id);
            }
        }
    </script>
</body>
</html>
```
#### 6.2.6.2. 解决div移动第一个键和第二个键之间的延迟问题（防误触）
- 触发机制使用一个定时器函数用于减少按键的间隔
- 方向由事件决定，速度由定时器决定
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            width: 50px;
            height: 50px;
            background-color: #ff0000;
            position: absolute;
        }
    </style>
</head>
<body>
    <div class="box"></div>
    <script>
        let curValue = 0;
        let step = 5;
        let box = document.querySelector('.box');
        const dir = {
                38: [0, -1],
                39: [1, 0],
                40: [0, 1],
                37: [-1, 0]
            }
        window.onload = function() {
            function Operation(curValue) {
                if(!dir[curValue])
                    return;
                // 上：38 右：39 下：40 左：37
                box.style.left = box.offsetLeft + step*dir[curValue][0] + 'px';
                box.style.top = box.offsetTop + step*dir[curValue][1] + 'px';
                // return 0;
            }
            // 触发机制使用一个定时器函数用于减少按键的间隔
            // 方向由事件决定，速度由定时器决定
            setInterval(function(){
                Operation(curValue)
             }, 30)
            // 不能用清除interval，再重新建立一个interval会造成延迟的过程
            document.onkeydown = function(event) {
                event = event || window.event
                if (event.shiftKey && event.keyCode === 38) {
                    step += 5;
                    return;
                }
                if (event.shiftKey && event.keyCode === 40) {
                    step = step >= 10 ? step - 5 : 5;
                    return;
                }  
                curValue = event.keyCode;
            }
            document.onkeyup = function() {
                curValue = 0;
            }
        }
    </script>
</body>
</html>
```
#### 6.2.6.3. 构造一个简单的动画函数
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box1 {
            position: absolute;
            width: 100px;
            height: 100px;
            background-color: #ff0000;
            left: 0px;
            top: 40px;
        }
    </style>
</head>
<body>
    <button class="btn1">点击往右走</button>
    <button class="btn2">点击往左走</button>
    <button class="btn3">点击往上走</button>
    <button class="btn4">点击往下走</button>
    <button class="btn5">增加宽度</button>
    <button class="btn6">增加高度</button>
    <button class="stop">暂停</button>
    <div class="box1"></div>
    <script>
        window.onload = function() {
            /*
            * 作用：以字符串的形式返回元素对象对应的cssStyle
            * 参数：
            *       obj:元素对象
            *       cssStyle:string 要取得的样式
            * 返回：对象元素样式的字符串表示(:string)
            * 注意：对应的属性一定要进行初始化，不然会返回auto
            */
            function getStyle(obj, cssStyle) {
                if(window.getComputedStyle)
                    return getComputedStyle(obj, null)[cssStyle];
                else //IE8及以下没有getComputedStyle方法
                    return obj.currentStyle[cssStyle];
            }
            function clearObjectInterval(obj) {
                clearInterval(obj.intervalId);
                obj.intervalId = undefined;
            }
            let box1 = document.querySelector('.box1');
            let btn1 = document.querySelector('.btn1');
            let btn2 = document.querySelector('.btn2');
            let btn3= document.querySelector('.btn3');
            let btn4 = document.querySelector('.btn4');
            let btn5 = document.querySelector('.btn5');
            let btn6 = document.querySelector('.btn6')
            let btnStop = document.querySelector('.stop');

            // let intervalId;
            // 利用在对象中单独定义一个intervalId，从而绑定对象的intervalId,从而可以进行复用
            // let speed = 10;
            /*
            *  可以执行简单动画的函数
            *  参数：
            *       obj: 要执行动画的对象
            *       speed: 运动的速度
            *       target:运动的终止目标   
            *       attr: 要执行运动的属性
            *       callback:动画执行完后调用的函数，可以利用该性质实现自动旋转等功能
            */
            function autoMove(obj, speed, target, attr, callback=function(){}) {
                // 清除定时器
                clearInterval(obj.intervalId)

                if(attr === 'left' || attr === 'right') {
                    if(attr === 'left') 
                        speed = -speed;
                    attr = 'left';
                }
                if(attr === 'top' || attr === 'buttom') {
                    if(attr === 'top') 
                        speed = -speed;
                    attr = 'top';
                }
                // 定义定时器
                obj.intervalId = setInterval(function() {
                    let currentPositon = parseInt(getStyle(obj, attr));
                    let nextPosition = currentPositon + speed;
                    obj.style[attr] = speed < 0 ? nextPosition < target ? target + 'px': nextPosition + 'px'
                                                         : nextPosition > target ? target + 'px': nextPosition + 'px';
                    if(nextPosition === target) {
                        clearObjectInterval(obj)
                        callback();
                    }
                }, 30)
                
                
            }
            btn1.onclick = function() {
                autoMove(box1, 10, 800, 'right',function(){alert("到底了")});
            }
            btn2.onclick = function() {
                autoMove(box1, 10, 0, 'left');
            }
            btn3.onclick = function() {
                autoMove(box1, 10, 40, 'top');
            }
            btn4.onclick = function() {
                autoMove(box1, 10, 800, 'buttom');
            }
            btn5.onclick = function() {
                autoMove(box1, 10, 800, 'width');
            }
            btn6.onclick = function() {
                autoMove(box1, 10, 800, 'height');
            }
            
            btnStop.onclick = function() {
                clearObjectInterval(box1);
            }
            
            // btn1.onclick = function() {
            //     // 关闭先前的定时器
            //     clearInterval(intervalId);
            //     // 打开新的定时器
            //     intervalId =  setInterval(function() {
            //         // 若直接使用offsetLeft, offsetTop无法和所要接收的style形成一一对应的关系，所以可以使用getStlye()的方法得到对应的样式
            //         let currentPosition = parseInt(getStyle(box1, 'left'));
            //         let nextPosition = currentPosition + speed;
            //         // box终止的位置
            //         if(nextPosition > 800)
            //             nextPosition = 800;
            //         box1.style.left = nextPosition + 'px';
            //     }, 30)
            // }
            // btn2.onclick = function() {
            //      // 关闭先前的定时器
            //     clearInterval(intervalId);
            //     // 打开新的定时器
            //     intervalId = setInterval(function() {
            //         // 若直接使用offsetLeft, offsetTop无法和所要接收的style形成一一对应的关系，所以可以使用getStlye()的方法得到对应的样式
            //         let currentPosition = parseInt(getStyle(box1, 'left'));
            //         let nextPosition = currentPosition +(-speed) ;
            //         // box终止的位置
            //         if(nextPosition < 0)
            //             nextPosition = 0;
            //         box1.style.left = nextPosition + 'px';
            //     }, 30)
            // }
            // 重复的部分有点多，可以提取成一个对象或者函数，注意到函数的共用变量intervalId，可以作为返回值
            
        }
    </script>
</body>
</html>
```
#### 6.2.6.4. 轮播图效果的实现
- 原理
  - ![原理](./img/ex17.jpg)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            margin: 0;
            padding: 0;
        }
        ul, li {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .container ul li img {
            vertical-align: center;
            width: 500px;
            height: 500px;
            z-index: 0;
        }
        .container {
            margin: 0 auto;
            width: 500px;
            height: 500px;
            padding: 20px;
            background-color: #eaeaea;
            /* 裁剪溢出的部分 */
            overflow: hidden;
            position: relative;
        }
        .container ul {
            /* width: 2600px; */
            position: absolute;
            left: 0px;
            top: 20px;
            z-index: 2;
        }
        .container ul::after {
            content: "";
            display: block;
            clear: both;
        }
        .container ul li {
            float: left;
            margin-left: 20px;
            width: 500px;
            height: 500px;
        }
        .container .nav {
            position: absolute;
            bottom: 30px;
            /* absolute的居中 */
            left: 50%;
            transform: translate(-50%);
            /* 也可以用js来计算居中 */
            z-index: 100;
            /* background-color: #ff0000; */
        }
        /* 触发了BFC，父元素不会崩塌 */
        /* .container .nav::after {
            content: "";
            display: block;
            clear: both;
        } */
        .container .nav a{
            float: left;
            margin-left: -20px;
        }
        .container .nav a img:hover {
            content: url("../img/point_active.svg");
            opacity: 0.5;
            fill: alpha(opacity=50);
        }
        .container .nav a img {
            content: url("../img/point.svg");
            opacity: 0.5;
            /* 兼容ie8的透明 */
            fill: alpha(opacity=50);
        }
        .container .nav .active img {
            content: url("../img/point_active.svg");
            opacity: 0.5;
            fill: alpha(opacity=50);
        }
    </style>
</head>
<body>
    <div class="container">
        <ul>
            <li><img src="" alt=""></li>
            <li><img src="" alt=""></li>
            <li><img src="" alt=""></li>
            <li><img src="" alt=""></li>
            <li><img src="" alt=""></li>
            <li><img src="" alt=""></li>
        </ul>
        <!-- 导航按钮 -->
        <div class="nav">
            <!-- 要定位且位于上面，想到使用z-index -->
            <a class="active" href="javascript:;"><img alt="" width="50px" height="50px"></a>
            <a href="javascript:;"><img alt="" width="50px" height="50px"></a>
            <a href="javascript:;"><img alt="" width="50px" height="50px"></a>
            <a href="javascript:;"><img alt="" width="50px" height="50px"></a>
            <a href="javascript:;"><img alt="" width="50px" height="50px"></a>
        </div>
    </div>

    <script>
        window.onload = function() {
            const imgUrl = [
                '../img/ex1.JPG',
                '../img/ex2.JPG',
                '../img/ex3.JPG',
                '../img/ex4.JPG',
                '../img/ex5.JPG',
                '../img/ex1.JPG'
            ]
            // 插入图片
            
            let imgs = document.querySelectorAll('.container ul li img')
            imgs.forEach((img, index) => img.src = imgUrl[index]);
            
            // 调整ul的大小，是对应的li元素能够容纳
            const length = imgs.length;
            let ulObject = document.querySelector('.container ul');
            let imgWidth = imgs[0].offsetWidth;
            ulObject.style.width = (imgWidth + 20) * length + 'px';

            // 点击a实现切换图片
            let timer; //轮播图的定时器
            let aObjects = document.querySelectorAll('.container .nav a');      
            // 要实现点击对应的点变色步骤
            //      - 清空所有的点的颜色
            //      - 使对应的点变色
            aObjects.forEach((aObject, index) => {
                aObject.onclick = function() {
                    // 去除轮播图的定时器
                    clearInterval(timer)
                    aObjects.forEach(item => item.className = '');
                    this.className = 'active';
                    autoMove(ulObject, 60, -index * 520, 'left',()=>{
                        changeIndex = index + 1;
                        autoChange();
                    });
                }
            })
            let changeIndex = 1;
            // 实现轮播,即将轮播过程分为多次调用move，每次调用回调函数修改对应的changeIndex即可
            autoChange();
            function autoChange() {
                timer = setInterval(() => {
                    autoMove(ulObject, 30, -changeIndex * 520, 'left',function() {
                        aObjects.forEach(item => item.className = '');
                        if(changeIndex >= length - 1) {
                            changeIndex = 0;
                            ulObject.style.left = 0;
                        }
                        aObjects[changeIndex].className = 'active';
                        changeIndex = changeIndex + 1
                    } )
                }, 3000)
            }
            function getStyle(obj, cssStyle) {
                if(window.getComputedStyle)
                    return getComputedStyle(obj, null)[cssStyle];
                else //IE8及以下没有getComputedStyle方法
                    return obj.currentStyle[cssStyle];
            }

            function autoMove(obj, speed, target, attr, callback=function(){}) {
                // 清除定时器
                clearInterval(obj.intervalId)
                // 定义定时器
                obj.intervalId = setInterval(function() {
                    let flag = 1;
                    // console.log(parseInt(getStyle(obj, attr)) > target)
                    if(parseInt(getStyle(obj, attr)) > target)
                        flag = -1;
                    let currentPosition = parseInt(getStyle(obj, attr));
                    let nextPosition = currentPosition + flag * speed;
                    if(flag === 1) 
                        nextPosition = nextPosition > target ? target : nextPosition;
                    else
                        nextPosition = nextPosition < target ? target : nextPosition;
                       
                    obj.style[attr] = nextPosition + 'px';
                    if(nextPosition === target) {
                        clearInterval(obj.intervalId);
                        obj.intervalId = undefined;
                        callback();
                    }
                
                }, 30)     
            }

        }
    </script>
    
</body>
</html>
```


# 七 js的迭代器（Iterator)
## 1 迭代器的创建
### 1.1 通过Iterator(object[, keyOnly])来构建
- 参数
  - object
    - 对象
    - 生成器实例
    - 迭代器实例
### 1.2 通过生成器来构建
#### 1.2.1 利用内置函数自身的生成器(Symbol.iterator)
- Array, String, Object
```javascript
  var a = [1,3,5,7,9];
  var it = a[Symbol.iterator]();
  it.next().value; // 1
  it.next().value; // 3
  it.next().value; // 5 
```
### 1.3 自定义构建迭代器
```javascript
var something = (function(){
 var nextVal;
 return {
      // for..of循环需要
    [Symbol.iterator]: function(){ return this; },
 // 标准迭代器接口方法
 next: function(){
    if (nextVal === undefined) {
        nextVal = 1;
    }
    else {
      nextVal = (3 * nextVal) + 6;
    }
    return { done:false, value:nextVal };
  }
 };
})(); 
```
## 2 迭代器的属性和方法
### 2.1 Iterator#next()
- 返回一个对象，且迭代器本身相后进行一步
#### 2.1.1 返回对象的属性
- value：存储上一次暂停的返回值
- done: 标识迭代器的完成状态
  - 当done为true时，表示迭代器已经完成了，无法继续调用next函数
  - 当done为false时，表示迭代器还没有完成，可以继续调用next函数
### 2.2 for...of...与迭代器
- for..of 循环在每次迭代中自动调用 next()
  - 它不会向 next() 传入任何值
  - 并且会在接收到 done:true 之后自动停止。
#### 2.2.1 与for...of等价的代码
```javascript
  for (
    var ret;
    (ret = something.next()) && !ret.done;
  )  {
    console.log( ret.value );
 // 不要死循环！
    if (ret.value > 500) {
      break;
 }
}
```
## 3 iterable
- iterable 必须支持一个函数，其名称是专门的 ES6 符号值 Symbol.iterator。
  - 调用这个函数时，它会返回一个迭代器。通常每次调用会返回一个全新的迭代器
```javascript
  [Symbol.iterator]: function(){ return this; } 
```
```javascript
  var a = [1,3,5,7,9];
  var it = a[Symbol.iterator](); 
```
# 八 生成器(Generator)
## 1 生成器的实质
- 是ES6引入的一种特殊的函数
- 执行该函数之后，返回一个迭代器
## 2 生成器的关键词
### 2.1 function *funcName() {}
- 用于生成器函数的构建
### 2.2 yield关键词
#### 2.2.1 yield关键词的作用
##### 2.2.1.1 使生成器函数在yield所在语句暂停运行
- 当迭代器调用next函数时，生成器的代码会在yield所在的语句执行
##### 2.2.1.2 给迭代器返回对象的value赋值为yield后面表达式的返回值
- 若yield后面有表达式，给迭代器返回对象的value赋值为yield后面表达式的返回值
- 若没有表达式，则赋值为undefined
##### 2.2.1.3 接收next函数传入的参数
- 当迭代器调用next函数时，会将next函数传入的参数赋值给上一个yield
### 2.3 try...finally
- 当生成器返回的迭代器被终止时，会调用finally块内的代码
## 3 生成器返回的迭代器返回对象的value赋值
- yield后面表达式的返回值
- return后面的表达式返回值
## 4 生成器函数的参数
### 4.1 通过函数的参数进行传递
- 像普通函数那样的传递
### 4.2 通过next对参数进行传递
- next传递的参数会赋值给上一个yield
  - 可以将第一个next看作启动器
## 5 生成器的构造
- 当通过生成器构造返回多个迭代器时，这些迭代器之间是独立的
### 4.1 通过生成器函数构造
```javascript
  function *foo() {
    // yield
  }
```
### 4.2 通过生成器表达式构造(匿名)
```javascript
  var foo = function *() {
    // yield
  }
```
### 4.3 在对象中构造(简便写法)
```javascript
  var obj = {
    *foo {
      // yield
    }
  }
```
### 4.4 例子
```javascript
  function *foo() {
    var x = yield 2;
    z++;
    var y = yield (x * z);
    console.log( x, y, z );
  }
  var z = 1;
  var it1 = foo();                      // 返回一个迭代器
  var val1 = it1.next().value;          // 遇到yield终止，并且将yield后面的表达式返回结果赋值迭代器返回对象的value即2
                                        // val1 = 2
  val1 = it1.next(20).value;            // val1 = 40
  /*
  *   运行的过程：
  *   将next中传递的参数传递给上一个yield(x = 20)，继续执行代码,遇到yield终止，并且将yield后面的表达式返回结果赋值给迭代器返回对象的value即x * z = 20 * 2 = 40
  */
  it1.next( 80 );                       // 20 2 80
  /*
  *   运行的过程：
  *   将next中传递的参数传递给上一个yield(y = 80)，继续执行代码,到最后函数终止
  */   
```
```javascript
  function *foo() {
    let i = 0;
    while(true) {
      yield i;
      i += 1;
    }
  }

  let iterator = foo();
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  // 0 1 
```

## 6 终止无限循环迭代器
### 6.1 无限循环迭代器
- 当生成器函数返回的迭代器可以无数次调用next函数时，会变成无限循环
```javascript
  function *foo() {
    let i = 1;
    while(true ) {
        yield i;
        i += 10;
    }
  }
  // 该函数可以无数调用
```
### 6.2 终止无限循迭代器的方法
#### 6.2.1 在for...of中调用break
- 该迭代器会被终止且调用finally块中的代码
#### 6.2.2 iterator.return([str])函数的调用
- 该迭代器会被终止且调用finally块中的代码，同时将传入的参数传递给该迭代器返回对象的value
 
## 7 生成器函数的应用
- 理解多个生成器如何在共享的作用域上并发运行
### 7.1 异步迭代生成器
- yield表达式为异步的函数操作
### 7.2 生成器 + Promise
- 实现用同步代码的写法来实现异步代码
#### 7.2.1 run函数
- <font color="red">返回一个Promise，该Promise的value为生成器函数中最后一个yield运行的返回值</font>
- 接收一个生成器函数以及传入该生成器函数的参数作为参数
- 要求
  - 生成器函数中yield的表达式返回一个Promise类型(异步操作)
- 实现功能的流程
  - 利用生成器函数返回一个已经初始化的迭代器it
  - 返回一个完成状态的Promise类型
    - onResolved函数(handleNext(next))
      - 若next = it.next(next)返回对象的done为true，则迭代器完成，返回next.value
      - 若next = it.next(next)返回对象的done为false,则迭代器还没有完成，再次执行handleNext(next)函数
```javascript
  function run(gen) {
    var args = [].slice.call( arguments, 1), it;
    // 1. 在当前上下文中初始化生成器
    it = gen.apply( this, args );
    // 2. 返回一个promise用于生成器完成
    return Promise.resolve().then( function handleNext(value){
        // 对下一个yield出的值运行
      var next = it.next( value );
      return (function handleResult(next){
        // 生成器运行完毕了吗？
        if (next.done) {
          return next.value;
        }
        // 否则继续运行
        else {
          return Promise.resolve( next.value ).then(
        // 成功就恢复异步循环，把决议的值发回生成器
          handleNext,
        // 如果value是被拒绝的 promise，
        // 就把错误传回生成器进行出错处理
          function handleErr(err) {
            return Promise.resolve( it.throw( err ) ).then( 
              handleResult );
            }
          );
        }
      })(next);
  } );
} 
```
#### 7.2.2 例子
- 见7.3
#### 7.2.3 async和await运用的是这种原理
### 7.3 生成器中的 Promise 并发
- 以下代码中r1和r2是依次执行的，但是因为r1和r2并没有实际上的关系，所以可以使用并行
```javascript
  function *foo() {
    var r1 = yield request( "http://some.url.1" );
    var r2 = yield request( "http://some.url.2" );
    var r3 = yield request(
      "http://some.url.3/?v=" + r1 + "," + r2
  );
  console.log( r3 );
  }
// 使用前面定义的工具run(..)
  run( foo ); 
```
- 可以使用以下的方法继续并行
```javascript
  function *foo() {
 // 让两个请求"并行"
  var p1 = request( "http://some.url.1" );
  var p2 = request( "http://some.url.2" );
  // 等待两个promise都决议
  var r1 = yield p1;
  var r2 = yield p2;
  var r3 = yield request(
  "http://some.url.3/?v=" + r1 + "," + r2
  );
  console.log( r3 );
} 
```
- 使用Promise.all([])实现两个异步的并行
```javascript
  function *foo() {
  // 让两个请求"并行"，并等待两个promise都决议
  var results = yield Promise.all( [
  request( "http://some.url.1" ),
  request( "http://some.url.2" )
  ] );
  var r1 = results[0];
  var r2 = results[1];
  var r3 = yield request(
  "http://some.url.3/?v=" + r1 + "," + r2
  );
  console.log( r3 );
  }
  // 使用前面定义的工具run(..)
  run( foo ); 
```
### 7.4 生成器委托(后面再进行补充)
# 九 Promise
## 1 Promise的基本理解
### 1.1 promise的理解
- 通常情况下, 要实现异步调用的返回, 必须判断异步调用有没有执行结束, 然后通过callback函数来获取数据
- 抽象表达
  - Promise是js中进行异步调用的解决办法
- 具体表达
  - 从语法上来说:Promise是一个构造函数
  - 从功能上来说:Promse对象用于封装一个异步操作的方法并可以获取其结果
### 1.2 promise的状态
- pending
  - 未确定状态
- fulfilled
  - 完成状态
    - 当调用了resolved函数, 就会从pending -> fulfilled转化
- rejected
  - 拒绝状态
    - 当调用了rejected函数, 就会从pending-> rejected转化
### 1.3. promise的基本使用流程
- ![理解](./img/ex1_promise.jpg)
### 1.4. 为什么使用promise
#### 1.4.1 指定回调函数的方式更加灵活
- 传统的回调函数的定义必须在异步任务之前
- promise回调函数的定义可以在程序的任意位置
  - promise => 启动异步而任务, 返回promise对象 => 给promise对象绑定回调函数
  - 甚至在异步任务完成之后的任意时刻都进行回调.
#### 1.4.2 支持链式调用,可以解决回调地狱的问题
##### 1.4.2.1 回调地狱
- 回调函数的嵌套调用,外部回调函数异步执行的结果是嵌套的回调函数的前提
  - 难以阅读而且很难找到错误
```javascript
// 涉及到多个异步操作, 而且异步操作是串联执行
// 串联执行: 下一个异步任务是以前面的异步任务的结果作为条件调用的
    doFirstSomething(function(firstResult, failCallBack) {
        doSecondSomething(function(secondResult, failCallBack){
            doThirdSomething(function(thirdResult, failCallBack) {
                console.log(thirdResult)
            })
        })
    })
```
##### 1.4.2.2 利用Promise的链式调用解决回调地狱的问题
```javascript
    doFirstSomething().then(function(firstResult) {
        return doSecondSomething()
        // 必须返回一个promise类型
    })
    .then(function(secondResult) {
        return doThirdSomething()
    })
    .then(function(thirdResult) {
        console.log(thirdResult);
    })
    .catch(failCallBack)
```
##### 1.4.2.3 解决回调地狱的最终方案
- 使用async和await
```javascript
    async function request() {
        try {
            const firstResult = await doFirstSomething();
            const secondResult = await doSecondSomething(firstResult);
            const thirdResult = await doThirdSomething(secondResult);
            console.log(thirdResult);
        }
        catch {
            failCallBack();
        }

    }
```
### 1.5 promise的API
- 语法和前后端交互的方法
- (prototype)函数原型对象上的方法只能由实例对象进行调用
  - 因为有原型链
#### 1.5.1 基本语法
```javascript
    new Promise(function(resolve, reject) {...}/*executor*/)
```
- executor是带有 resolve 和 reject 两个参数的函数 
- Promise构造函数执行时立即调用executor 函数， resolve 和 reject 两个函数作为参数传递给executor
- executor函数在<font color='red'>Promise构造函数返回所建promise实例对象前</font>被调用
#### 1.5.2 函数对象的方法
##### 5.2.1 Promise.all(iterable))
- 作用: 用于将多个pending状态的promise实例对象的结果统一起来
- 返回一个Promise实例
  - 如果传入的参数是一个空的可迭代对象，则返回一个已完成（already resolved）状态的Promise
  - 如果传入的参数不包含任何 promise，则返回一个异步完成（asynchronously resolved）
  - 如果有一个promise的运行最终状态是非fullfilled, 则会回调reject的结果
- 参数
  - iterable
    - 以数组的形式, items为一般为多个处于pending状态的promise的实例对象
```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]
```
##### 5.2.2 Promise.race(iterable)
- 作用: 用于将多个pending状态promise实例进行竞争,只是取第一个执行成功的值
- 返回一个promise对象
- 参数
  - iterable
    - 以数组的形式, items为一般为多个处于pending状态的promise的实例对象
##### 5.2.3 Promise.resolve(value)
- 作用:产生一个成功值为value的promise
- 返回一个以给定值解析后的Promise实例对象
- 参数
  - value
  - 将被Promise对象解析的参数也
    - 可以是一个Promise对象
    - 是一个thenable。
      - 即将被传入then方法中的参数
```javascript
    // 产生一个成功值为2的promise
    const p1 = new Promise((resolve, reject) => {
        resolve(2)
    })
    // 实际上可以看作是语法糖
    const p1 = Promise.resolve(2)
```
##### 5.2.4 Promise.reject(reason)
- 返回一个失败的promise的实例对象
#### 1.5.3 实例对象的方法
- 函数原型对象的方法只能由实例对象进行调用
##### 1.5.3.1 Promise.prototype.then(onFulfilled[, onRejected])
- 作用: 当函数处于fulfilled状态时调用的函数, 指定一个异步调用的回调函数
- 
- 返回一个新的promise
- 参数
  - onResolved函数: 成功的回调函数 (value) => {}
  - onRejected函数: 失败的回调函数 (reason) => {}
```javascript
primiseObject.then(value => {
  // fulfillment
}, reason => {
  // rejection
});
```
##### 1.5.3.2 Promise.prototype.catch(onRejected)
- 相当于then的语法糖, 相当于then(undefined, onRejected)
- 返回一个新的promise对象
- 参数
  - onRejected函数: 失败的回调函数 (reason) => {}
### 1.6 promise的几个关键问题
#### 1.6.1 如何改变promise的状态
- resolve(value): 如果当前是pending状态=>fulfilled状态
- reject(reason): 如果当前是pending状态=>rejected状态
- 抛出异常: 如果当前是pending状态=>rejected状态
```javascript
    const p = new Promise((resolve, rejected) =>{
        //resolve(1) //promise变为fulfilled状态
        //reject(2) // promise变为rejected的状态
        throw new Error("出错了") //promise变为rejected的状态, reason为Error
    })
```
#### 1.6.2 什么时候可以得到数据?
- 指定回调函数且promise的状态为fulfilled时,会异步调用回调函数
- 一般情况
  - 先指定回调函数, 再改变状态
- 特殊情况
  - 先改变状态,再指定回调函数
```javascript
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 1000)
    })
    setTimeout(() => {
        p.then((value) => {
            console.log(value);
        })
    }, 2000)
```
#### 1.6.3 理解promise中的同步异步
```javascript
// 同步: new Promise内部的函数, setTimeout函数, then函数
// 异步: setTimeout的回调函数, then的回调函数
// 异步是要放入一个队列待执行的
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 1000)
    }).then(value => {
        console.log(value);
    })
```
#### 1.6.4 promise.then()返回新的promise的结果状态由什么决定的
- 由then指定的回调函数的返回结果决定
  - 如果抛出异常,新promise会变为rejected, reason为抛出的异常
  - 如果返回的是非promise的任意值, 新的promise变为resolved, value为返回的值(包括没有返回值的undefined)
  - 如果返回的是另一个新的promise, 此promise的状态结果即为返回的状态
```javascript
    new Promise((resolve, reject) => {
        resolve(2);
    })
    .then(value => {
        // return 2;                   //fulfilled
        // return Promise.resolve(3);  //fulfilled
        // return Promise.reject(2)    //rejected
        // throw 5  //rejected
    })
    .then(value => {
        console.log(value)
    })
```
#### 1.6.5 promise如何串联多个异步任务
- promise的then()返回一个新的promise, 可以看成then()的链式调用
- 通过then的链式调用串联多个同步/异步任务
#### 1.6.6 promise的异常穿透
- 当使用promise的链式调用时,可以在最后指定失败的回调
- 前面任何操作出了异常,都会传到最后是吧的回调中进行处理
  - 实际上.catch管理的并不是new的对象,而是通过then创建的一个个新对象,所以有穿透的概念
- 定义方法:
  - 所有的OnRejected的回调函数都是throw reason
```javascript
     new Promise((resolve, reject) => {
        resolve(2);
    })
    .then(value => {
        // return 2;                   //fulfilled
        // return Promise.resolve(3);  //fulfilled
        // return Promise.reject(2)    //rejected
        // throw 5  //rejected
    }, reason => throw reason)
    .then(value => {
        console.log(value)
    }, reason => throw reason)
    .catch(reason => {
        console.log(reason)
    })
```
#### 1.6.7 中断promise链
- 当使用promise的链式调用时, 在中间中断,不再调用后面的回调函数
- 办法: 在回调函数的后面返回一个pending状态的promise对象
  - return new Promise((resolve, reject) => {})
## 2 手写promise
### 2.1 定义整体结构
- 要注意哪些是Promise的函数，哪些是Promise.prototype函数
### 2.2. 定义构造函数
- Promise构造函数的基本变量
  - this.status
    - 表示promise状态
    - 默认值是"pending"
  - this.data
    - undefined
    - 存储resolve， reject传进来的数据
  - this.callbacks
    - 存储异步调用时的回调函数
    - item是object
- 返回新promise的过程
```javascript
  const p = new Promise((resolve, reject) => {
    ...
  })
```
- excutor为在类的构造中需要调用的函数，所以在构造函数中需要执行excutor
  - 由传入的参数知，其接收两个函数形式的参数
- 这两个函数形式的参数的实参为Promise中已经定义好的函数
  - 两个函数在类内部定义，在类外部被调用
- resolve/reject执行的过程
  - 改变promise的状态
  - 将data赋给类中的data
  - 异步执行指定的回调函数
    - 由于是异步执行，肯定会在同步执行后再执行
  - 注意
    - 在类中定义这两个函数式this的指向
      - 因为是在外部调用的
```javascript
// ES5中定义模块
(function(window) {
    function MyPromise(excutor) {
        const that = this;
        this.status = 'pending';
        this.data = undefined;
        this.callbacks = [];
        // 由于resolve是在外调用的,所以this对象是window
        // 利用一个that来使其指向对象
        function resolve(value) {
            // 如果当前状态不是pending, 直接结束
            if(that.status !== 'pending') 
                return;   
            // 将状态改为resolved
            that.status = 'fulfilled'
            // 保存value数据
            that.data = value;
            // 如果有待执行callback函数, 立即异步执行回调函数'
            // 为了放入异步执行的队列,使用setTimeout
            setTimeout(() => {
                if(that.callbacks.length > 0) {
                    that.callbacks.forEach(callbackObj => {
                        callbackObj.onResolved(that.data);
                    })
                }
                    
            }) 
        }
        function reject(reason) {
             // 如果当前状态不是pending, 直接结束
            if(that.status !== 'pending')
                return;
            that.status = 'rejected';

            that.data = reason;

            setTimeout(() => {
                that.callbacks.forEach(callbackObj => {
                    callbackObj.onRejected(that.data);
                })
            }) 
        }
        // 立即执行excutor
        // 抛出异常,利用catch捕获异常
        // 由于传进来的excutor是一个函数, 所以直接调用即可
        try {
            excutor(resolve, reject);
        }
        catch(error) {
            reject(error)
        }
        

    }

    // 返回一个成功的指定结果promise 
    MyPromise.resolve = function(value) {
        return new MyPromise((resolve, reject) => {
            if(value instanceof MyPromise) {
                // 当是MyPromsie的类型时，根据promise的结果来确定当前新的promise的状态
                value.then(resolve, reject);
            }
            else {
                resolve(value)
            }
        })
    }
    // 返回一个失败的指定结果promise
    MyPromise.reject = function(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason)
        })
    }
    // 只有当所有的promise都成功时才成功
    MyPromise.all = function(promises) {
        const values = []; //用于存放成功的value值
        let resolveCount = 0;  //用于判断成功异步调用resolve的次数，当次数达到和promises相同时，就是全部成功
        return new MyPromise((resolve, reject) => {
            promises.forEach((promise, index) => {
                // 将非promise的转化为promise
                MyPromise.resolve(promise).then(
                    value => {
                        resolveCount ++;
                        values[index] = value;
                        if(resolveCount == promises.length)
                            resolve(values);
                    },
                    reason => {
                        reject(reason);
                        // reject可以被调用多次，但是前面在reject中不是pending直接结束
                        // 所以只是第一次调用
                    }
                )
            })
        })
    };
    // 由第一个promise完成时决定
    MyPromise.race = function(promises) {
        return new MyPromise((resolve, reject) => {
            promises.forEach((promise, index) => {
                MyPromise.resolve(promise).then(
                    value => {
                        resolve(value);
                    },
                    reason => {
                            reject(reason);
                    }
                )
            })
        })
    };

    // Promise原型对象的then()
    // 指定成功和失败的回调函数, 返回一个新的promise对象
    MyPromise.prototype.then = function(onResolved, onRejected) {
        const that = this;
        if(!typeof onResolved === "function")
            onResolved = value => value;
        // 解决异常穿透的问题
        if(!typeof onRejected === "function")
            onRejected = reason => {throw reason}
        // 返回一个新的promise且promise由回调函数的执行结果确定
        return new Promise((resolve, reject) => {
            function handler(callback) {
                try {
                    const result = callback(that.data);
                    if(result instanceof MyPromise) {
                        // 实际上是直接执行了return的promise的值传递给新的promise的reject和resolve
                        result.then(
                            value => resolve(value),
                            reason => reject(reason)
                        )
                        // result.then(resolve, reject)
                        // 可以写成简洁版的原因，resolve在内部调用，传入的只是该函数的定义，而该函数就是promise内部已经定义的函数
                        // 里面的that指向的是当前的promise
                        
                    }
                    // 利用.then取出其结果
                    else {
                        resolve(result)
                    }
                }
                catch(error) {
                    reject(error)
                }
            }
            // 假设当前状态还是pending状态,则加入回调函数
            if(that.status === "pending") {
                that.callbacks.push({
                    onResolved(value) {
                        handler(onResolved)
                    },
                    onRejected(value) {
                        handler(onRejected)
                    }
                })
            }
            // 假设当前状态是"fulfilled", 则异步执行回调函数
            else if(that.status === "fulfilled") {  
                setTimeout(() => {
                     // 决定返回promise的状态
                    //  1 onResolved抛出错误：
                    //  2 onResolved返回一个非promise的值
                    //  3 onResolved返回一个promise对象
                    //         - 需要promise异步调用完后再得到相应的结果
                    handler(onResolved)
                })
            }
            else {
                setTimeout(() => {
                    handler(onRejected);
                })
            }
        })
        
        
    };

    // Promise原型对象的catch()
    // 指定失败的回调函数, 返回一个新的promise对象
    MyPromise.prototype.catch = function(onRejected) {
        return this.then(undefined, onRejected)
    };


    // 向外暴露Promise函数
    window.MyPromise = MyPromise;
})(window)

```
## 3 async和await使用
### 3.1 async 函数
- async函数的返回值是一个新的promise对象
- async函数返回的promise的结果由函数执行的结果决定
```javascript
async function fn() {
    return 1;
  }
async function fn2() {
    throw 2;
  }
async function fn3() {
    return Promise.reject(3)
}
fn().then(
    value => console.log("onResolved1: " + value),
    reason => console.log("onRejected1: " + reason)
)
fn2().then(
    value => console.log("onResolved2: " + value),
    reason => console.log("onRejected2: " + reason)
)
fn3().then(
    value => console.log("onResolved3: " + value),
    reason => console.log("onRejected3: " + reason)
)
/*
  输出结果
  onResolved1: 1
  onRejected2: 2
  onRejected3: 3
*/
```
### 3.2 await 表达式
- 表达式
  - 若是promise
    - 取得promise对象的value值(即成功的结果)
    - 若想得到失败的结果,只能使用try, catch
  - 若不是promise 
    - 则取得表达式中本身的值
```javascript
  async function test() {
    try {
      const value = fn3()
    }
    catch(error) {
      console.log("发生异常:" + error)
    }
  }
test();
// 发生异常:3
```
### 3.3 注意
- await必须写在async函数中,但async函数中可以没有awit
- 如果await的promise失败,会抛出异常,需要通过try...catch进行捕获

## 4 宏队列和微队列
### 4.1 原理图
- ![图](./img/ex2_promise.jpg)
- JS中用来存储待执行的回调函数的队列包裹2个不同特定的队列
  - 宏队列
    - 用来保存代执行的宏任务
      - 定时器回调函数, DOM事件的回调函数
  - 微队列
    - 用来保存待执行的微任务
      - promise的回调函数/MutationObserver回调函数
### 4.2 js的异步任务的触发函数什么时候放入了对应的异步执行队列？
- 当异步调用触发时，会交给相应的线程单独去维护异步任务，等待某个时机（计时器结束、网络请求成功、用户点击DOM）完成时，然后事件触发线程将异步对应的回调函数 加入到消息队列中，回调函数在响应的消息队列中的等待被执行。
### 4.3 js的异步执行流程
- JS引擎首先必须先执行所有的初始化同步任务代码
- 每次准备取出第一个宏任务前,都要将所有的微任务一个一个取出执行
```javascript
setTimeout(() => {     //会放入宏队列
    console.log("timeout callback1()");
    Promise.resolve(3).then(    //会放入微队列
        value => {
            console.log("Promise onResolved3() " + value);
        }
    )
}, 0)
 
setTimeout(() => { //会放入宏队列
    console.log("timeout callback2()");
}, 0)

Promise.resolve(1).then( //会放入微队列
    value => {
        console.log("Promise onResolved1() " + value);
    }
)

Promise.resolve(2).then( //会放入微队列
    value => {
        console.log("Promise onResolved2() " + value);
    }
)

/** 输出结果
 * Promise onResolved1() 1
 * Promise onResolved2() 2
 * timeout callback1()
 * Promise onResolved3() 3
 * timeout callback2()
 * /
```

## 5 常见面试题
### 5.1 认清楚哪些是异步回调函数,哪些是同步代码
```javascript
  new Promise((resolve, reject) => {
    console.log(2); //同步代码
    resolve()
  }).then(
    value => {
      console.log(1); //异步回调函数,且插入微队列
    }
  )
```
```javascript
async function async1() {        
  console.log('async1 start');
  await async2(); 
  /*
  相当于
  async2().then(
    value => {
      console.log(async1 end)
    }
  )
  */
  console.log('async1 end');
}
async function async2() {
  console.log('async2'); 
}

console.log('script start'); 
setTimeout(function() {
    console.log('setTimeout');
}, 0);  
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
  }).then(function() {
    console.log('promise2');
});
console.log('script end');

/**
  [setTimeout]
  [promise2]
  script start
  async1 start
  async2
  async1 end
  promise1
  script end 
  promise2
  setTimeout
*/
```


# 十 axios
## 1 http的理解
### 1.1 http请求交互的基本过程
- ![理解](./img/axios_ex1.jpg)
### 1.2 http请求报文
- ![请求报文](./img/http_request.jpg)
#### 1.2.1 请求报文的组成
##### 1.2.1.1 请求行
- 以以下的格式在浏览器中显示
```
  method URL 协议版本
```
###### 1.1.1.1.1 method(请求方法)
- 控制服务器端的增删改查
  - GET: 请求指定的页面信息，并返回实体主题 --服务端数据查询
  - POST: 向指定资源提交数据进行处理请求（例如提交表单或者上传文件）。数据被包含在请求体中。POST请求可能会导致新的资源的建立和/或已有资源的修改 --服务端数据的修改/增加
  - DELETE：请求服务器删除Request-URL所标识的资源 --服务端数据的删除
  - PUT：向指定资源位置上传其最新内容 --服务端数据的增加
- 其他
  - HEAD: 向服务器索与GET请求相一致的响应，只不过响应体将不会被返回
  - TRACE: 回显服务器收到的请求，主要用于测试或诊断
  - CONNECT：HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。
###### 1.1.1.1.2 URL
- 不包含host和query字段
###### 1.1.1.1.3 协议版本
- http的版本类型
##### 1.2.1.2 请求头(headers)
- 请求头部由关键字/值对组成，每行一对，关键字和值用英文冒号":"分隔
###### 1.2.1.2.1 Accept
- 客户端可接受的响应数据类型
- text/plain: 可以为一个或多个MIME类型的值
###### 1.2.1.2.2 Referer
- 请求的URL来源
  - 假如你通过google搜索出一个商家的广告页面，你对这个广告页面感兴趣，鼠标一点发送一个请求报文到商家的网站，这个请求报文的Referer报文头属性值就是http://www.google.com。
###### 1.2.1.2.3 Accept-Language
- 客户端可接收的响应数据语言类型
###### 1.2.1.2.4 User-Agent
- 客户端浏览器的版本号
###### 1.2.1.2.5 Content-Type
- 请求包体中数据的格式
###### 1.2.1.2.6 Host
- 目标主机和端口号
###### 1.2.1.2.7 Content-Length
- 请求包体中数据的长度
###### 1.2.1.2.8 Accept-Encoding
- 客户端可接受的编码压缩格式
  - 例如：Accept-Encoding:gzip, deflate
###### 1.2.1.2.10 Accept-Charset
- 客户端可接受的应答的字符集
###### 1.2.1.2.11 Connection
- 服务器端和客户端的连接关系
- 连接方式
  - close
  - keepalive
###### 1.2.1.2.12 Cache-Control
- 对缓存的控制
  - 如一个请求希望响应返回的内容在客户端要被缓存一年，或不希望被缓存就可以通过这个报文头达到目的。
###### 1.2.1.2.13 Cookie
- 用于识别用户
###### 1.2.1.2.14 Date
- 客户端请求服务器端的时间


##### 1.2.1.3 空行
- 最后一个请求头之后是一个空行，发送回车符和换行符，通知服务器以下不再有请求头
##### 1.2.1.4 请求包体
- 存不存在与方法的选择有关
- get方法中
  - 不存在请求包体

#### 1.2.2 请求方法与请求包体Content-type以及axios的config的关系
<table>
  <thead>
    <tr>
      <th>请求方法</th>
      <th>请求包体中的Content-type</th>
      <th>axios的config写法</th>
      <th>发送请求的显示方式</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>无</td>
      <td>axios的config写法</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>application/json</td>
      <td>axios的config写法</td>
      <td>请求体中的数据将会以json字符串的形式发送到后端</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>application/x-www-form-urlencoded</td>
      <td>axios的config写法</td>
      <td>请求体中的数据会以普通表单形式（键值对）发送到后端</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>multipart/form-data</td>
      <td>axios的config写法</td>
      <td>般用来上传文件，指定传输数据为二进制数据</td>
    </tr>
  </tbody>
</table>

### 1.3 http响应报文
- ![相应报文](./img/http_reponse.jpg)
#### 1.3.1 响应报文的组成
##### 1.3.1.1 状态行
- 状态行由 HTTP 协议版本字段、状态码和状态码的描述文本 3 个部分组成，他们之间使用空格隔开;
- 以以下格式在浏览器中显示
```
  http协议字段 状态码 状态描述文本
```
###### 1.3.1.1.1 http协议字段
###### 1.3.1.1.2 状态码
<table>
  <thead>
    <tr>
      <th>状态码</th>
      <th>含义</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1xx</td>
      <td>表示服务器已接收了客户端请求，客户端可继续发送请求</td>
    </tr>
    <tr>
      <td>2xx</td>
      <td>表示服务器已成功接收到请求并进行处理;</td>
    </tr>
    <tr>
      <td>3xx</td>
      <td>表示服务器要求客户端重定向;</td>
    </tr>
    <tr>
      <td>4xx</td>
      <td>表示客户端的请求有非法内容</td>
    </tr>
    <tr>
      <td>5xx</td>
      <td>表示服务器未能正常处理客户端的请求而出现意外错误;</td>
    </tr>
  </tbody>
</table>

###### 1.3.1.1.3 状态码描述文本
<table>
  <thead>
    <tr>
      <th>状态码</th>
      <th>含义</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>200 OK</td>
      <td>表示客户端请求成功;</td>
    </tr>
    <tr>
      <td>400 Bad Request</td>
      <td>表示客户端请求有语法错误，不能被服务器所理解;</td>
    </tr>
    <tr>
      <td>401 Unauthonzed</td>
      <td>表示请求未经授权，该状态代码必须与 WWW-Authenticate 报头域一起使用;</td>
    </tr>
    <tr>
      <td>403 Forbidden</td>
      <td>表示服务器收到请求，但是拒绝提供服务，通常会在响应正文中给出不提供服务的原因;</td>
    </tr>
    <tr>
      <td>404 Not Found</td>
      <td>请求的资源不存在，例如，输入了错误的URL;</td>
    </tr>
     <tr>
      <td>500 Internal Server Error</td>
      <td>表示服务器发生不可预期的错误，导致无法完成客户端的请求;</td>
    </tr>
    <tr>
      <td>503 Service Unavailable</td>
      <td>表示服务器当前不能够处理客户端的请求，在一段时间之后，服务器可能会恢复正常;</td>
    </tr>
  </tbody>
</table>

##### 1.3.1.2 响应头部(headers)
###### 1.3.1.2.1 Location
- 用于重定向接受者到一个新的位置。
  - 例如：客户端所请求的页面已不存在原先的位置，为了让客户端重定向到这个页面新的位置，服务器端可以发回Location响应报头后使用重定向语句，让客户端去访问新的域名所对应的服务器上的资源;
###### 1.3.1.2.1 Server
- 服务端的web服务器的信息
###### 1.3.1.2.3 Vary
- 指示不可缓存的请求头列表
###### 1.3.1.2.4 Connection
- 连接方式
 - close
 - keepalive
###### 1.3.1.2.5 Content-Type
- 响应包体的格式
###### 1.3.1.2.6 Content-Lenght
- 响应包体的长度
###### 1.3.1.2.5 Content-Encoding
- 响应包体的压缩格式
###### 1.3.1.2.6 Content-Language
- 响应包体的语言类型
###### 1.3.1.2.6 Content-Disopsition
- 服务器要求客户端以某种形式打开响应包体
  - attachment: 以下载文件的方式
###### 1.3.1.2.6 Last-Modified
- 服务器对资源最后的修改时间
###### 1.3.1.2.4 Transfer-Encoding
- 以什么形式传输响应包体
  - chunked
    - 以分块的形式
###### 1.3.1.2.4 Expires
- 服务器是否允许客户端缓存页面
  - -1：不允许
###### 1.3.1.2.4 Connection
- 服务器和客户端的连接关系
###### 1.3.1.3.5 Date
- 服务器响应客户端的时间
###### 1.3.1.2.4 Cache-Control
###### 1.3.1.2.4 Pragma
###### 1.3.1.2.4 Refresh
###### 1.3.1.2.4 Set-Cookies
##### 1.3.1.3 空行
- 用于确定相应头已经结束
##### 1.3.1.4 响应包体

### 1.4 基础知识补充
#### 1.4.1 Connection在不同报文中的作用
- 对于请求来说
  - close(告诉 WEB 服务器或者代理服务器，在完成本次请求的响应后，断开连接，不等待本次连接的后续请求了)
  - keepalive(告诉WEB服务器或者代理服务器，在完成本次请求的响应后，保持连接，等待本次连接的后续请求);
- 对于响应来说
  - close(连接已经关闭)
  - keepalive(连接保持着，在等待本次连接的后续请求);
  - Keep-Alive：如果浏览器请求保持连接，则该头部表明希望WEB 服务器保持连接多长时间(秒);例如：Keep-Alive：300;
## 2 服务器提供给客户端的API分类
### 2.1 分类依据
- 服务器提供的API端口允许客户端做CRUD操作的权限
  - 即对应的两端交互的接口不同类型请求的响应类型
### 2.2 类型
#### 2.2.1 REST API（restful）
- 发送请求运行CRUD哪个操作由请求方式决定
- 同一个请求路径可以同时进行多个操作
  - 同时进行get或post
- 请求方式可以有GET/POST/PUT/DELETE 
#### 2.2.2 非 REST API(restless)
- 请求方式不决定请求的CRUD操作
- 一个请求路径只能对应一个操作
- 一般只有GET/POST
## 3 搭建具有REST API的简单服务器用于测试
- <a href="https://github.com/typicode/json-serve">网址</a>
- 注意
  - db.json必须是在根目录下
    - db.json
      - posts: 发布文章
      - comments: 评论文章
      - profile: 我的信息
## 4 AJAX编程的基础--xmlhttprequest
### 4.1. XHR的基本定义
- XMLHttpRequest（XHR）对象用于与服务器交互。通过 XMLHttpRequest 可以在不刷新页面的情况下请求特定 URL，获取数据
- XMLHttpRequest 在 AJAX 编程中被大量使用。
  - AJAX技术：向服务器请求数据但不进行页面的跳转，而只是获取其中的数据
- 显然XMLHttpRequest是异步调用
### 4.2 XHR的基本使用
#### 4.2.1 XHR的构造函数
- 该构造函数用于初始化一个 XMLHttpRequest 实例对象。在调用下列任何其他方法之前，必须先调用该构造函数，或通过其他方式，得到一个实例对象。
```javascript
  const request = new XmlHttpRequest()
```
#### 4.2.2 XHR实例对象从建立到接收到数据状态以及变化
- ![状态](./img/axios_ex4.jpg)
- ![状态关系](./img/axios_ex8.jpg)
- 分界的操作
  - open, send
#### 4.2.3 XHR实例对象接收数据时事件
- 事件的基本模型
- ![模型](./img/axios_ex3.jpg)
<table>
  <tr>
    <td>loadstart</td>
    <td>接收到响应数据时触发。</td>
  </tr>
  <tr>
    <td>load</td>
    <td>XMLHttpRequest请求成功完成时触发。</td>
  </tr>
  <tr>
    <td>loadend</td>
    <td>当请求结束时触发, <font color="red">无论请求成功 ( load) 还是失败 (abort 或 error)。</font></td>
  </tr>
  <tr>
    <td>abort</td>
    <td>request被中止时触发（例如调用XHR.abort()）</td>
  </tr>
  <tr>
    <td>error</td>
    <td>当request遭遇错误时触发。</td>
  </tr>
  <tr>
    <td>progress</td>
    <td>当请求接收到更多数据时，周期性地触发。</td>
  </tr>
  <tr>
    <td>timeout</td>
    <td>在预设时间内没有接收到响应时触发。</td>
  </tr>
</table>

- 注意
  - load和loadend的区别：即使loadend只有在成功接收到了数据才会触发
  - progress: 由于接收响应的过程并不是连续的过程，每当再接收到一块数据时就会触发

#### 4.2.3 XHR的属性和方法
##### 4.2.3.1 与接收到响应结果相关的属性
###### 4.2.3.1.1 XmlHttpRequest#responseType(只读)
- 用于决定响应正文的格式
- responseType取值以及对应的类型
<table>
  <thead>
    <tr>
      <th>取值</th>
      <th>对应的类型</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>""(空字符串)</td>
      <td>response采用默认类型 DOMString，与设置为 text 相同。</td>
    </tr>
    <tr>
      <td>arraybuffer</td>
      <td>response 是一个包含二进制数据的 JavaScript ArrayBuffer。</td>
    </tr>
    <tr>
      <td>blob</td>
      <td>response 是一个包含二进制数据的 Blob 对象 。</td>
    </tr>
    <tr>
      <td>document</td>
      <td>response 是一个 HTML Document 或 XML XMLDocument，</td>
    </tr>
    <tr>
      <td>json</td>
      <td>response 是一个 JavaScript 对象。这个对象是通过将接收到的数据类型视为 JSON 解析得到的。</td>
    </tr>
    <tr>
      <td>text</td>
      <td>response 是一个以 DOMString 对象表示的文本。</td>
    </tr>
  </tbody>
</table>

###### 4.2.3.1.2 XmlHttpRequest#response(只读)
- 返回响应的正文，响应报文的类型由XmlHttpRequest#responseType决定
```javascript
  var url = 'somePage.html'; //一个本地页面

  function load(url, callback) {
    var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callback(xhr.response);
    }
  }

  xhr.open('GET', url, true);
  xhr.send('');
}
```


###### 4.2.3.1.3 XmlHttpRequest#status / statusText（只读）
- 返回响应的状态码 / 状态码的描述

###### 4.2.3.1.4 XmlHttpRequest#responseURL(只读)
- 返回响应的序列化URL
  - 如果URL为空则返回空字符串。
  - 如果URL有锚点，则位于URL # 后面的内容会被删除。
  - 如果URL有重定向， responseURL 的值会是经过多次重定向后的最终 URL 
###### 4.2.3.1.5 XmlHttpRequest#responseText(只读)
- DOMString 是XMLHttpRequest 返回的纯文本的值。当DOMString 为null时，表示请求失败了。当DOMString 为""时，表示这个请求还没有被send()
###### 4.2.3.1.6 XmlHttpRequest#responseXML(只读)
- 返回一个包含请求检索的HTML或XML的Document
  - responseXML 对于任何其他类型的数据以及 data: URLs 为 null。
###### 4.2.3.1.7 XmlHttpRequest#getAllResponseHeaders()
- 以字符串的形式返回所有用 , 分隔的响应头，如果没有收到响应，则返回 null。
###### 4.2.3.1.8 XmlHttpRequest#getResponseHeader(name)
- 返回包含指定响应头文本的字符串。
- 参数
  - 一个字符串，表示要返回的报文项名称
##### 4.2.3.2 与状态相关的属性
###### 4.2.3.2.1 XmlHttpRequest#readyState(只读)
- 返回一个XMLHttpRequest实例对象(client)当前所处的状态
###### 4.2.3.2.2 XmlHttpRequest#onreadystatechange = callback
- 只要 readyState 属性发生变化，就会调用相应的处理函数
- 注意
  - 当一个 XMLHttpRequest 请求被 abort() 方法取消时，其对应的 readystatechange 事件不会被触发。
  - 不能用于同步的requests对象之中
    - 因为产生阻塞所以无法探查得到
```javascript
var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.status);

xhr.open('GET', '/server', true);
console.log('OPENED', xhr.status);

xhr.onprogress = function () {
  console.log('LOADING', xhr.status);
};

xhr.onload = function () {
  console.log('DONE', xhr.status);
};

xhr.send(null);

/**
 * 输出如下：
 *
 * UNSENT（未发送） 0
 * OPENED（已打开） 0
 * LOADING（载入中） 200
 * DONE（完成） 200
 */
```
##### 4.2.3.3 与请求超时相关的属性和方法
###### 4.2.3.3.1 XmlHttpRequest#timeout
- 用于设置/读取该实例对象请求的超时时间
###### 4.2.3.3.2 XmlHttpRequest#ontimeout = callback
- 超时触发callback
##### 4.2.3.4 特殊的事件触发有关方法
###### 4.2.3.4.1 XmlHttpRequest#abort()
- 如果请求已被发出，则立刻中止请求。
##### 4.2.3.5 发送请求有关的属性和方法
###### 4.2.3.5.1 XmlHttpRequest#open(method, url[, async[, user[, password]]])
- 初始化一个请求，并没有发送
- 参数
  - method
    - 请求方式
  - url
    - 请求地址
  - async
    - true: 异步
    - false：同步
      - send()代码会发生阻塞
  - user
    - 用户名
  - password
    - 密码
###### 4.2.3.5.2 XmlHttpRequest#setRequestHeader(headerName, value)
- 设置HTTP请求头部的方法。
  - <font color="red">此方法必须在open() 方法和 send()之间调用</font>。如果多次对同一个请求头赋值，只会生成一个合并了多个值的请求头
- 键值对应
  - Content-Type 文本的格式
###### 4.2.3.5.3 XmlHttpRequest#send(body) 
- 向服务器发送已经初始好的ajax请求
- body
  - 若method为get，则为null，因为get没有请求体
  - 请求体
    - string 使用键值的方式：类似于foo=bar&lorem=ipsum
    - object 使用对象的方式
    - blob对象类型
    - Int8Array 对象类型
    - document (json等) 对象类型
```javascript
var xhr = new XMLHttpRequest();
xhr.open("POST", '/server', true);

//发送合适的请求头信息
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhr.onload = function () { 
    // 请求结束后,在此处写处理代码 
};
xhr.send("foo=bar&lorem=ipsum"); 
```




### 4.3 XHR的跨域问题
- XMLHttpRequestAPI遵循同源策略
  - 意味着使用这些API的Web应用程序只能从加载应用程序的同一个域请求HTTP资源
    - 有可能是浏览器限制了发起跨站请求，也可能是跨站请求可以正常发起，但是返回结果被浏览器拦截了
### 4.4 CORS实现XHR的跨域HTTP请求
- CORS机制允许 Web 应用服务器进行跨域访问控制，从而使跨域数据传输得以安全进行
#### 4.4.1 CORS通过给http的请求报文的

#### 4.4.2 CORS通过服务器端增加http的响应头属性来实现跨域
<table>
  <thead>
    <tr>
      <th>响应头名称</th>
      <th>作用</th>
    </tr>
  </thead> 
  <tbody>
    <tr>
      <td>Access-Control-Allow-Origin:[orign, *]</td>
      <td>指定了该响应的资源是否被允许与给定的origin共享。(orign指定一个可以访问资源的URI)</td>
    </tr>
    <tr>
      <td>Access-Control-Allow-Credentials: true</td>
      <td>表示是否可以将对请求的响应暴露给页面。返回true则可以，其他值均不可以。</td>
    </tr>
    <tr>
      <td>Access-Control-Allow-Methods: &lt;method&gt;, &lt;method&gt;, ... </td>
      <td>应答中明确了客户端所要访问的资源允许使用的方法或方法列表。</td>
    </tr>
  </tbody>
</table>

#### 4.4.1 实现方式
- 新增了一组 HTTP 首部字段
  - 允许服务器声明哪些源站通过浏览器有权限访问哪些资源
- 对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。服务器确认允许之后，才发起实际的 HTTP 请求。在预检请求的返回中，服务器端也可以通知客户端，是否需要携带身份凭证（包括 Cookies 和 HTTP 认证相关数据）。
## 5 利用XHR简单实现axios
```javascript
/**
 * axios的特点
 *  1. 函数的返回值是一个promise，成功的结果为response，异常的返回error
 *  2. 能处理多种类型的请求：GET/POST/PUT/DELETE
 *  3. 函数的参数为一个配置对象
 *       {
 *            url       请求地址
 *            method    请求方式    
 *            params    GET/DELETE请求的query参数
 *            data      POST或DELETE请求的请求体参数
 *        }
 *  4. 响应的数据专户为对象或数组：JSON.parse(request.response)
 */

// 由于传入的是一个对象，该形参运用的是对象的结构语法
function axios({
    url, 
    method="GET",
    params={},
    data={}
}) {
    return new Promise((resolve, reject) => {
        // 1. 执行异步的ajax请求
        method = method.toUpperCase();
        // 创建xhr请求
        const request = XMLHttpRequest();
        // 初始化xhr
        request.open(method, url)
        // 发送请求
        switch(method) {
            case "GET" || "PUT":
                // 处理query形式的参数，并拼接到url上面 id=1&...
                let queryString = '';
                Object.keys(params).forEach(key => {
                    queryString += `${key}=${params[key]}&`
                })
                if(queryString){
                    queryString = queryString.substr(0, queryString.length - 1);
                    url += '?' + ueryString;
                }
                request.send(null);
                break;
            case "POST" || "DELETE":
                // 告诉请求体是json格式
                request.setRequestHeader("Content-Type", "application/json;charset=utf-8")
                request.send(JSON.stringify(data))
                break;
        }
        // 绑定状态改变的监听来判断运行结果
        request.onreadystatechange = function() {
            if(request.readyState !== 4)
                return;
            //  如果状态码在200-300之间，代表成功，否则失败
            const {status, statusText} = request;
            // 2.1 如果请求成功，调用resolve()

            // 2.2 如果请求失败,调用reject()
            if(status >= 200 && status < 300) {
                const response = {
                    data: JSON.parse(request.response),
                    status,
                    statusText
                }
                resolve(response);
            }
                
            else{
                reject(new Error("request error status is" + status))
            }
        }
        
    })
}
```
## 6 axios的使用
### 6.1 axios的基本定义
- 是一个基于 promise 的ajax请求库，可以用在浏览器和node.js 中。
### 6.2 axios的特征 
- 从浏览器中创建XMLHttpRequests
- 从 node.js 创建 http 请求
- 支持 Promise API（基于promise的异步ajax请求库）
- 支持拦截请求和响应
- 转换请求数据和响应数据（就是json.parse)
- 支持取消请求
- 自动转换 JSON 数据
- 客户端支持防御 XSRF
#### 6.2.1 自动转换 JSON 数据的性质
- 在config中，get/put的查询的参数params是以对象的查询传入，而axios会自动将其进行转化
```javascript
  {key1: value1, key2: value2...} ==> ?key1=value&key2=value2...
```
- 在config中,post等的函数体是以参数data以对象的形式传入的，而axios会自动将其转化
  - 会自动转化为Content-type指定的类型
### 6.3 axios的基本使用
#### 6.3.0 ajax请求和普通的http请求的区别
- 对于服务端，ajax请求和普通的http请求没有区别，区别在于浏览器
- 浏览器发送请求时
  - ajax请求是由浏览器中的ajax引擎进行发送
  - ajax请求是一种特殊的http请求，只有XHR或fetch发出的才是ajax请求，其他都是非ajax请求
- 浏览器接收到响应报文时
  - 一般请求：浏览器一般会直接显示响应体的数据，也就是我们所说的刷新/跳转页面
  - ajax请求：浏览器不会对界面进行更新操作，只是调用监视的回调函数并传入响应的相关数据
#### 6.3.1 axios的config对应的参数和含义
```javascript
{
  // `method` is the request method to be used when making the request
  method: 'get', // default
  // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: 'https://some-domain.com/api/',

  // `url` is the server URL that will be used for the request
  url: '/user',

  // `params` are the URL parameters to be sent with the request
  // Must be a plain object or a URLSearchParams object
  params: {
    ID: 12345
  },

  // `headers` are custom headers to be sent
  // headers: {Content-Type: ...}
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  // `data` is the data to be sent as the request body
  // Only applicable for request methods 'PUT', 'POST', 'DELETE , and 'PATCH'
  // When no `transformRequest` is set, must be of one of the following types:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Browser only: FormData, File, Blob
  // - Node only: Stream, Buffer
  data: {
    firstName: 'Fred' //若在调用的时候就加入data，则不需要再传入
  },

  // `cancelToken` specifies a cancel token that can be used to cancel the request
  // (see Cancellation section below for details)
  cancelToken: new CancelToken(function (cancel) {
  }), 
  // `transformRequest` allows changes to the request data before it is sent to the server
  // This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
  // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
  // FormData or Stream
  // You may modify the headers object.
  transformRequest: [function (data, headers) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  transformResponse: [function (data) {
    // Do whatever you want to transform the data

    return data;
  }],

  // `paramsSerializer` is an optional function in charge of serializing `params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // syntax alternative to send data into the body
  // method post
  // only the value is sent, not the key
  data: 'Country=Brasil&City=Belo Horizonte',

  // `timeout` specifies the number of milliseconds before the request times out.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 1000, // default is `0` (no timeout)

  // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false, // default

  // `adapter` allows custom handling of requests which makes testing easier.
  // Return a promise and supply a valid response (see lib/adapters/README.md).
  adapter: function (config) {
    /* ... */
  },

  // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` custom headers you have set using `headers`.
  // Please note that only HTTP Basic auth is configurable through this parameter.
  // For Bearer tokens and such, use `Authorization` custom headers instead.
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType` indicates the type of data that the server will respond with
  // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
  //   browser only: 'blob'
  responseType: 'json', // default

  // `responseEncoding` indicates encoding to use for decoding responses (Node.js only)
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // default

  // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

  // `onUploadProgress` allows handling of progress events for uploads
  // browser only
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `onDownloadProgress` allows handling of progress events for downloads
  // browser only
  onDownloadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // `maxContentLength` defines the max size of the http response content in bytes allowed in node.js
  maxContentLength: 2000,

  // `maxBodyLength` (Node only option) defines the max size of the http request content in bytes allowed
  maxBodyLength: 2000,

  // `validateStatus` defines whether to resolve or reject the promise for a given
  // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
  // or `undefined`), the promise will be resolved; otherwise, the promise will be
  // rejected.
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },

  // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // If set to 0, no redirects will be followed.
  maxRedirects: 5, // default

  // `socketPath` defines a UNIX Socket to be used in node.js.
  // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
  // Only either `socketPath` or `proxy` can be specified.
  // If both are specified, `socketPath` is used.
  socketPath: null, // default

  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` that are not enabled by default.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` defines the hostname and port of the proxy server.
  // You can also define your proxy using the conventional `http_proxy` and
  // `https_proxy` environment variables. If you are using environment variables
  // for your proxy configuration, you can also define a `no_proxy` environment
  // variable as a comma-separated list of domains that should not be proxied.
  // Use `false` to disable proxies, ignoring environment variables.
  // `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
  // supplies credentials.
  // This will set an `Proxy-Authorization` header, overwriting any existing
  // `Proxy-Authorization` custom headers you have set using `headers`.
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `decompress` indicates whether or not the response body should be decompressed 
  // automatically. If set to `true` will also remove the 'content-encoding' header 
  // from the responses objects of all decompressed responses
  // - Node only (XHR cannot turn off decompression)
  decompress: true // default

}
```
#### 6.3.2 axios发送请求的三种不同方式
##### 6.3.2.1 将axios视为一个对象去向服务器端发送请求
- 缺点：只能设置一个baseURL或者其他默认配置
```javascript
    //发送get请求
  axios.get(url[, config])
  // 发送delete请求         
  axios.delete(url[, config])
  // 发送post请求
  axios.post(url[, data[, config]])
  // 发送put请求
  axios.put(url[, data[, config]])
```

###### 6.3.2.1 axios.get(url[,config])
- 向服务端查询数据，返回类型为Promise类型
- 参数
  - config
    - 是一个对象
- 由于get方式没有请求体，所以在进行查询时需要设置config的params
  - params是一个键值的对象
```javascript
// 为给定 ID 的 user 创建请求
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// 可选地，上面的请求可以这样做
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
###### 6.3.2.2 axios.post(url ,data)
- 向服务器端修改数据或者增加数据，返回一个Promise
- 由于post有请求体，所以可以直接传入data，而不需要设置config中的params
```javascript
  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

###### 6.3.2.3 axios.put(url ,data)
- 对服务器中相应的id数据进行修改或者更新，返回一个Promise类型
- 由于put有请求体，所以可以直接传入data，而不需要设置config中的params
```javascript
  axios.put('/user/1', {
    firstName: 'Fred',
    lastName: 'Flintstone'data
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
##### 6.3.2.2 将axios视为一个函数去向服务器端发送请求
- 缺点：只能设置一个baseURL或者其他默认配置
###### 6.3.3.1 axios(config)
- 返回一个promise对象
```javascript
  axios({
    method: "post",
    url: "xxx"
    // ...
  })
```
##### 6.3.2.3 将axios视为一个构造函数去向服务器端发送请求
- 当作为构造函数时，可以给不同的axios实例对象指定不同的BaseURL。
###### 6.3.2.3.1 axios.create(config)
- 返回一个axios的实例
```javascript
  // 一般用于首先配置默认请求
  const instance = axios.create({
    baseURL: 'https://...'
  })
  // 使用instance发送请求
  instance({
    url:'/xxx'
  })
```
###### 6.3.2.3.2 axios实例的方法
- 和全局的axios没有区别
```javascript
  axios#request(config)
  axios#get(url[, config])
  axios#delete(url[, config])
  axios#head(url[, config])
  axios#options(url[, config])
  axios#post(url[, data[, config]])
  axios#put(url[, data[, config]])
  axios#patch(url[, data[, config]])
  axios#getUri([config])
```
#### 6.3.3 axios的全局配置
##### 6.3.3.1 axios.defaults.configKey = value
- 设置全局axios的配置
```javascript
  axios.defaults.baseURL = 'https://api.example.com';
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```
#### 6.3.4 axios的拦截器
##### 6.3.4.1 axios.interceptors.request.use(func(config) {}, function(error) {})
- 在ajax请求发送之前对config做一些处理
```javascript
  axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
```
- 为什么需要返回config
  - 在axios中，拦截器和request请求是以promise链的形式串联起来的，即拦截器的回调函数的返回值为一个promise类型，而return config相当于给该promise的value赋值，从而实现将config往后面传递。若不返回，请求函数接收的config是一个undefined类型

##### 6.3.4.2 axios.interceptors.response.use(func(response) {}, function(error) {})
- 在axios获得response对response进行一些处理
```javascript
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
```
- 为什么需要返回response
  - 在axios中，拦截器和request请求是以promise链的形式串联起来的，即拦截器的回调函数的返回值为一个promise类型，而return response相当于给该promise的value赋值，从而实现将response往后面传递。若不返回，then收到的response为undefined类型

##### 6.3.4.3 拦截器的运行流程
```javascript
const axios = require("axios")
// 必须return config和reponse，否则报错
//请求拦截器
axios.interceptors.request.use(
    config => {
        console.log("request interceptor1 onResolved");
        return config;
    },
    error => {
        Promise.reject(error)
    }
)
axios.interceptors.request.use(
    config => {
        console.log("request interceptor2 onResolved");
        return config;
    },
    error => {
        Promise.reject(error)
    }
)
// 响应拦截器
axios.interceptors.response.use(
    response => {
        console.log("request interceptor3 onResolved");
        return response;
    },
    error => {
        Promise.reject(error)
    }
)
axios.interceptors.response.use(
    response => {
        console.log("request interceptor4 onResolved");
        return response;
    },
    error => {
        Promise.reject(error)
    }
)
axios.get("http://localhost:3000/posts").then(
    response => {
        console.log("取得的数据为" + response.data)
    }
)
/**
 *  结果
 * request interceptor2 onResolved
 * request interceptor1 onResolved
 * request interceptor3 onResolved
 * request interceptor4 onResolved
 * 取得的数据为[object Object],[object Object]
 */
```
- 一般的执行流程：
  - 请求拦截器 -> 异步request请求 -> 响应拦截器 -> then的回调函数
- 请求拦截器
  - 栈
- 响应拦截器
  - 队列
#### 6.3.5 axios的reponse
- 回调函数中的reponse参数的结构
```javascript
  {
  // `data` 由服务器提供的响应
  data: {},

  // `status` 来自服务器响应的 HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: 'OK',

  // `headers` 服务器响应的头
  headers: {},

  // `config` 是为请求提供的配置信息
  config: {}
}
```
#### 6.3.6 axios的取消
- 作用：取消未完成的请求
##### 6.3.6.1 方法1 使用内部的函数
```javascript
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // handle error
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// cancel the request (the message parameter is optional)
source.cancel('Operation canceled by the user.');
```
##### 6.3.6.2 方法2：创建一个对象
```javascript
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // An executor function receives a cancel function as a parameter
    cancel = c;
  })
});

// cancel the request
cancel();
```
##### 6.3.6.3 应用
###### 6.3.6.3.1 用于请求当前的请求
```javascript
  if(typeof cancel === 'function')
    cancel();
  // 之后在then的回调函数中
  // 将cancel设置为null，若已经执行好的，cancel为null,所以不会再执行
```
###### 6.3.6.3.2 用于请求上一个请求
```javascript
  let cancel = c;
  btn1.onclick = function() {
    if(typeof cancel === "function")
      cancel("取消上一个请求")
    axios({
      url:"url1",
      method: "get",
      cancelToken: new cancelToken(c => {
        cancel = c;
      })
    }).then((resolve, reject) => {
      response => {
        ...
        cancel = null;
      },
      error => {
        if(isCancel(error)) {
          ...
        }
        else{
          ...
          cancel = null;
        }
      }
    })
  }
  btn2.onclick = function() {
    if(typeof cancel === "function")
      cancel("取消上一个请求")
    axios({
      url:"url2",
      method: "get",
      cancelToken: new cancelToken(c => {
        cancel = c;
      })
    }).then((resolve, reject) => {
      response => {
        ...
        cancel = null;
      },
      error => {
        if(isCancel(error)) {
          ...
        }
        else{
          ...
          cancel = null;
        }
      }
    })
  }
```
- 为什么在reject的回调函数中要分情况，而isCancel不能赋值为null？
  - 异步函数的机制是浏览器将异步任务交给操作系统中的线程去执行，当达到触发条件时，在将其加入宏队列或者微队列中执行
  - 执行的步骤
    - 在执行完全部同步代码后，当用户点击btn1时，触发了点击事件，执行了axios的同步代码，将cancel赋值为函数之后发出请求
    - 当用户点击了btn2时，触发了btn2事件，于是将其回调函数加入了宏队列，此时执行了其回调函数中的同步代码，取消btn1中的请求，同时将cancel赋值为btn2请求的cancel函数。由于请求被取消，所以触发了axios取消的事件
      - 若此时部分情况将cancel赋值为null，则会将第二个请求的cancel函数赋值为null，进而使得后面的取消无效
    - 重点是理解同步任务和异步任务是如何执行的，执行的顺序是什么
## 7 axios源码分析
### 7.1 axios与Axios的关系
- 从语法上来说
  - axios不是Axios的实例
- 从功能上来说
   - axios是Axios的实例
   - axios既有Axios原型上的属性和方法，又有Axios实例对象的属性和方法
- axios是Axios.prototype.request函数bind()返回的函数
- axios作为对象有Axios原型对象上的所有方法，有Axios对象的所有属性
- 源码
```javascript
  /**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  // 1. 创建了一个Axios的实例
  var context = new Axios(defaultConfig);
  /*
  module.exports = function bind(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      return fn.apply(thisArg, args);
    };
  };
  */

    // 2.1 instance是一个函数
    // 2.2 当instance被调用的时候，Axios.prototype.request的this会指向context对象（即context拥有了其所有属性和方法)，并且由context来执行request
    // 2.3 该方法实现了axios(config)时执行了request
  var instance = bind(Axios.prototype.request, context);
  // Copy axios.prototype to instance
  // 3.1 Axios.prototype对象中的属性和方法绑定给instance, 可以发现get，post等实际上也是使用了request
  // 3.2 该方法实现了axios.get(),axios.request()等方法
  utils.extend(instance, Axios.prototype, context);

  // 4.1 Copy context to instance
  // 4.2 使得axios是Axios的一个实例，具有default和interceptor的特殊属性
  utils.extend(instance, context);

  return instance;
  // instance是Axios的一个实例，且有Axios原型对象的属性和方法，而且又是一个函数，可以直接调用原型对象中的request方法
}
```
- axios的指向
```javascript 
  var axios = createInstance(defaults);
```
### 7.2 axios与instance的区别
```javascript
  const instance = axios.create(config)
```
- 相同点
  - 都是一个能发送给任意请求的函数:request(config)
  - 都有发特定请求的各种方法get()/post()/put()/delete()
  - 都有默认配置和拦截器属性defaluts/interceptor
- 不同
  - 默认匹配值很可能不一样
  - instance后面没有添加一些方法
    - create()/CancelToken()/all
- 源码
```javascript
// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};
```
- axios特有的属性和方法
```javascript
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

```

### 7.3 axios执行的流程图
- ![流程图](./img/axios_ex6.png)
- request(config)
  - 将请求拦截器/dispatchRequest()/响应拦截器通过promise链串连起来, 返回promise
  - dispatchRequest()
    - 转换请求数据，调用xhrAdapter() => 请求返回后转换响应函数数据，返回promise
    - xhrAdapter()
      - 创建xhr对象，根据config进行相应的设置，发送特定的请求，并接收响应的数据，返回promise。

- request(config)源码了解
```javascript
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  // 1. 判断请求的类型
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // 2. 创建保存请求/响应拦截回调函数的数组
  /*
  数组的中间为发送请求的函数
  数组的左边为请求拦截器的回调函数（成功或失败）
  数组的右边为响应拦截器的回调函数
  */
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  // 3. 后添加的请求拦截器回调函数加入到数组的前面
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  // 4. 后添加的响应拦截器回调函数加入到数组的后面
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });
  // 5. 通过promise的then()串联起所有的请求拦截器/请求方法/响应拦截器
  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }
  // 返回用来指定我们的onResolved和onRejected的promise
  return promise;
};
```
- dispatchRequest()源码了解
```javascript
/*
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    // 如果是Params数据，则转化为urlencoded类型
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    //// 如果是对象，则转换为json类型的数据
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  // 1. 发请求前对设置，数据等进行处理
  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    // 1. 对请求头和类型进行转化
    config.transformRequest

  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;
  // 2. 发送请求
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    /*
    transformResponse: [function transformResponse(data) {
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { }
    }
      return data;
    }],
    */

    // 3. 对请求的数据的格式进行转换
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};
```
- xhrAdapter()源码了解
```javascript
module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    if (
      (utils.isBlob(requestData) || utils.isFile(requestData)) &&
      requestData.type
    ) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }
    // 1. 创建xml的对象
    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = unescape(encodeURIComponent(config.auth.password)) || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    // 2.配置xml的对象的参数
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    // 3. 设置状态监听器来监视党情的状态
    request.onreadystatechange = function handleLoad() {
      // 3.1 如果状态不为4
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      // 3.2 接收响应的数据
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      // 3.3 根据reponse的status来确定请求是成功还是失败
      settle(resolve, reject, response);

        /*
        validateStatus: function validateStatus(status) {
          return status >= 200 && status < 300;
        }
        // 若status位于200~300之间，则证明请求是成功的
        */
      /*
      function settle(resolve, reject, response) {
        var validateStatus = response.config.validateStatus;

        if (!response.status || !validateStatus || validateStatus(response.status)) {
          resolve(response);
        } else {
          reject(createError(
            'Request failed with status code ' + response.status,
            response.config,
            null,
            response.request,
            response
          ));
        }
      */
      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    // 3.4 绑定中断的事件
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };
  ................
  // 4. 发送请求
  request.send(requestData);
```
### 7.4 axios如何把interceptor和request串联起来
- 可以观察到请求拦截器后添加的在前面执行，而响应拦截器后添加的后在后面执行
- ![串连图](./img/axios_ex7.jpg)
```javascript
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  // 1. 判断请求的类型
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // 2. 创建保存请求/响应拦截回调函数的数组
  /*
  数组的中间为发送请求的函数
  数组的左边为请求拦截器的回调函数（成功或失败）
  数组的右边为响应拦截器的回调函数
  */
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  // 3. 后添加的请求拦截器回调函数加入到数组的前面
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  // 4. 后添加的响应拦截器回调函数加入到数组的后面
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });
  // 5. 通过promise的then()串联起所有的请求拦截器/请求方法/响应拦截器
  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }
  // 返回用来指定我们的onResolved和onRejected的promise
  return promise;
};
```

- 请求拦截器后添加先执行

### 7.5 axios是如何取消request的请求的
- 通过创建一个cancelToken的对象进行取消
- 源码
  - 在xml函数中有abort()方法来取消请求
```javascript
// 若配置中存在cancelToken则调用request.abort();
if (config.cancelToken) {

      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

```
```javascript
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  // 通过一个全局的resolve，使的可以在外部调用当前的promise
  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  //保存当前的对象为token
  var token = this;
  // 执行器：
  // 1. 为外面的形参定义成一个函数，以便于外面的函数进行调用
  // 2. 执行外面传入的函数体
  executor(function cancel(message) {
    // 即若是调用cancel则会将其变为resolve
    // 如果有reason，则证明已经取消完成了
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }
    // 将token的reason指定为一个Cancel对象
    token.reason = new Cancel(message);
    // 成功的回调，成功才调用cancel
    resolvePromise(token.reason);
  });
}
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};
```

- 当配置了cancelToken对象时，保存cancel函数
  - 创建一个用于将来中断请求的cancelPromise
  - 并定义了一个用于取消请求的cancel函数
  - 将cance函数传递出来
- 调用cancel()取消请求
  - 执行cancel函数，传入错误信息message
  - 内部会让cancelPromise变为成功，且成功的值为一个cancelPromise
  - 在cancelPromise的成功回调中断请求，并让发请求的promise失败，失败的reason为Cancel对象

# 十一 JS的模块化
## 1 模块化
### 1.1 定义
- 在js中，一个js就是一个模块
### 1.2 原因
- 避免命名冲突（减少命名空间污染）
- 更好的分离，按需加载
- 更好的复用性
- 高可维护性
### 1.3 用script引入多个js文件为什么效率不高
```html
    <script src = "main.js"><script>
    <script src = "stack.js"><script>
```
- 每次加载script标签就要发出一个请求，而且会有顺序的要求，所以不太好

## 2 HTML引入js模块的模块化的标准
### 2.1 在html中引入JS模块的方法
- <font color="red">通过script引入的js代码实际上只是将其拼接在html的代码之中</font>
#### 2.1.1 全局function模式（不能实现模块化）
- 将全局变量或者全局函数添加到window的属性之中
  - 缺点：并没有实现js的模块化，因为变量和函数实际上都还在全局作用域之中
```javascript
    let msg = "hello_world"
    function foo(){
        consolse("foo(): " + msg);
    }
```
- html
```html
    <script src="xxx.js"></script>
    <script>
        msg = "NBA"
        foo();
    </script>
    <!-- 
        foo(): NBA
     -->
```
#### 2.1.2 namespace模式（通过对象进行模块化）
- 用一个对象包裹所要用到的变量和函数，实质是将对象添加为window的属性
  - 变量虽然通过放入obj实现了模块化，但是并不符合常规的写法
```javascript
    let obj = {
        msg: "hello_world"
        foo() {
            consolse("foo(): " +  this.msg);
        }
    }
```
- html 
```html
    <script src="xxx.js"></script>
    <script>
        obj.msg = "NBA";
        obj.foo();
    </script>
<!-- 
        foo(): NBA
-->
```
- 以上两种模式都可以去更改对应msg的值，所以属于包装得不彻底
#### 2.1.3 IIFE模式(将要暴露的内容出入一个对象并变成window的一个属性值)
- 通过函数实现变量的局部化
  - 再通过window属性实现变量局部化的暴露，而且符合常规的写法
```javascript
(function(window){
    let msg = "hello_world"
    function foo(){
        consolse("foo(): " + msg);
    }
    window.module = {foo}; //常用
    // 匿名函数是有作用域的，而且由于没有名称，所以无法暴露给window，因此需要这种方式暴露给使用者调用
})(window)
```
- html
```html
    <script src="xxx.js"></script>
    <script>
        module.foo()
    </script>
    <!-- 
        foo(): hello_world
    -->
```
- 在没有暴露变量或函数时是无法对其进行修改的，因此已经实现了模块化
- 若想要暴露，需要用window将其暴露
#### 2.1.4 IIFE增强模式
- 通过函数实现变量的局部化
  - 并通过直接像window赋值实现变量的局部化 
```javascript
(function(window){
    let msg = "hello_world"
    function foo(){
        consolse("foo(): " + msg);
    }
    window.foo = foo; 
    // 匿名函数是有作用域的，而且由于没有名称，所以无法暴露给window，因此需要这种方式暴露给使用者调用
})(window)
```
- html
```html
    <script src="xxx.js"></script>
    <script>
       foo()
    </script>
    <!-- 
        foo(): hello_world
    -->
```
## 3 JS和JS文件之间实现js模块化标准
### 3.1 commonJS模块化的规范(node.js模块化的标准)
#### 3.1.1 commonJS模块化的规范的基本语法
##### 3.1.1.1 暴露语法(只能二选一,不能同时使用)
- 暴露的本质的是暴露exports对象
- 以下的两种方法只能取其其中一种，并不能全局使用
###### 3.1.1.1.1 module.exports = value
- value为任何类型(一般为obj)
- 实际上是将module.exports的内容进行覆盖
###### 3.1.1.1.2 exports.xxx = value
- 实际上是给exports增加属性
##### 3.1.1.2 引入语法
###### 3.1.1.2.1 const xxx = require(xxx)
- 第三方模块为模块名
- 自定义模块需要为模块的文件路径
#### 3.1.2 commonJS在服务器端和浏览器端的不同
##### 3.1.2.1 在服务器端（node.js)
- 由于服务器端运用的是node.js。所以可以直接调用
###### 3.1.2.1.1 基于服务器端的模块化过程
- 第一步：初始化,可以使用
```
    npm init
```
  - 注意文件名不能有大小写
- 第二步：定义modules模块，并暴露想要用的函数或者对象
- 第三步: 组织文件app.js中引入定义的模块
- 第四步：直接用node执行app.js
###### 3.1.2.1.2 基于服务器端的模块化的目录结构
```
    |- modules
        |- module1.js
        |- module2.js
        |- module3.js
    |- app.js
    | package
```
##### 3.1.2.2 在浏览器端
- 在浏览器: 模块需要提前打包进行处理
  - 浏览器无法认识require
  - 需要引入模块<font color="red">Browserify</font>
###### 3.1.2.2.1 基于浏览器端的模块化过程
- 第一步: 初始化
  - 引入打包的模块
```
    npm init
    npm install -g browserify
    npm install --save-dev browserify
```
- 第二步：定义modules模块，并暴露想要用的函数或者对象
- 第三步: 组织文件app.js中引入定义的模块
- 第四步: 打包处理js模块
```
    browserify ./js/src/app.js -o ./js/dist/bundle.js
```
- 第五步：index.html引入bundle.js
```html
 <script src="xxxx.js"></script>
```
###### 3.1.2.2.2 基于浏览器端的模块化的目录结构
- 目录结构
```
    |- js
        |- dist
        |-src
            |- module1.js
            |- module2.js
            |- module3.js
            |- app.js
    |- index
    |- package.json
```
### 3.2 commonJS标准的模块的加载过程
- 优先从缓存中加载
  - node对引入过的模块都会进行缓存，缓存的是编译和执行之后的对象
- 加载核心模块
  - 第一步：先寻找当前文件目录下的node_modules目录
  - 第二步：在寻找父目录下的node_modules目录
  - 若没找到，则循环执行第二步直至找到为止
- 加载自定义模块
  - 由路径找到相应的自定义模块
- 注意，若是文件没有声明文件类型，则nodejs会按照
  - .js、.json、.node文件名进行扩充
### 3.2 AMD模块化的规范
- <font color="red">专门用于浏览器端, 模块加载是异步的</font>
  - 模块的加载不影响它后面语句的执行，所有依赖这个模块的运行，都定义在一个回调函数中，只有模块加载完成后才会进行调用
#### 3.2.1 基本语法
##### 3.2.1.1 暴露用法
###### 3.2.1.1.1 定义没有依赖的模块
```javascript
    define(function() {
        ...
        return 模块
    })
```
###### 3.2.1.1.2 定义有依赖的模块
```javascript
    define(['module1', 'module2'], function(m1, m2) {
        ...
        return {} // 要暴露的变量或者函数
    })
    // m1, m2对应两个模块
```
##### 3.2.1.2 引入使用模块
###### 3.2.1.2.1 配置模块id与路径的对应
```javascript
  require.config({
    baseUrl: "xxx",
    paths: {
      module1: "path1",
      module2: "path2"
    }
  })
```
###### 3.2.1.2.2 引入使用模块
```javascript
    require(['module1', 'module2'], function(m1, m2) {
        // 使用m1, m2
    })
```
#### 3.2.2 AMD引入模块的基本过程
- 第一步: 下载对应的requirejs.js文件,并在script引入
```html
    <script src="./js/lib/requirejs.js"><script>
```
- 第二步：自定义模块,并在define函数中进行跑路
- 第三步： 在main.js中对id和路径进行配置
- 第四步： 引入模块并且执行
#### 3.2.3 AMD引入模块的目录结构
```
    |- js
        |- libs
            |- requirejs.js
        |- dist
        |- src
            |- modules
                |- module1
                |- module2
            |- main.js
    |- index.html    
```
#### 3.2.4 注意事项
- 使用AMD规范需要引入require.js——第三方编写的脚本根据data-main确认主模块
- 根据主模块中的require.config({ })函数确定各模块的位置，<font color="red">require.config({ })中各个模块的路径不能加后缀.js</font>
- 加载模块时里面的内容会运行
### 3.3 ES6的模块化
#### 3.3.1 基本语法
##### 3.3.1.1 暴露模块(export)
###### 3.3.1.1.1 单独导出变量或者函数
```javascript
  export var name = "xxxx"
  export function foo() {
    // ...
  }
```
###### 3.3.1.1.2 导出一个对象(推荐)
```javascript
  // person.js 
  const name = 'guo';
  const age = '18';
  const addr = '过青年';

  export { name, age, addr };
```
- 导出对象的元素进行重命名
  - 可以使变量暴露多次
```javascript
    // person.js 
  const name = 'guo';
  const age = '18';
  export {
    name as firstName,
    age as oneAge,
    age as twoAge
  }

```
###### 3.3.1.1.3 export default
- 默认暴露只能暴露一次，暴露多次，后面的默认暴露覆盖前面的默认暴露
```javascript
  // export default var name = 'guo'   错误
  export default name = 'guo';
```
##### 3.3.1.2 导入模块(import)
- import的导入具有提升效果，所以可以在任意位置导入
###### 3.3.1.2.1 普通的导入(使用对象字面量)
- 使用对象的字面量，且要与其变量或函数名意义对应
```javascript
  import {var1, var2} from "path/xxx/"
```
- 可以使用as来重命名变量名
```javascript
  import {var1 as temp1, var2 as temp2} from "path/xxx/"
```
###### 3.3.1.2.2 使用*导入整个模块对象
```javascript
  import * as [objName] from "path/xxxx"
```
###### 3.3.1.2.3 export default的导入
- 不需要以对象的形式进行导入
```javascript
  import aliasName from "path/xxxx"
```
#### 3.3.2 注意事项
- 使用export和export default向外暴露数据，使用import获取数据
- 使用as重命名，使用*符号整体加载
- import命令具有提升效果，会提升到整个模块的头部
- export default以最后一次暴露为准，且暴露的数据加载时，不需要加入{ }号
# 十二 ES6增加的内容总结
## 1. 类的新的定义方式
### 1.1. class
```javascript
  class Foo {
    constructor(a, b) {
      this.x = a;
      this.y = b;
    }

    gimmeXY() {
      return this.x * this.y;
    }
  }
```
- class Foo表明创建一个具名函数
- constructor为构造函数，在new的时候会执行
- 类的方法可以使用字面量的简洁语法，<font color='red'>类的方法默认是不可以枚举的</font>。
- <font color='red'>内部不需要逗号来分割成员</font>
#### 1.1.1. extends和super
##### 1.1.1.1 extends
- ES6类通过extends提供了一个语法糖，用来在两个函数原型之间建立[[ Prototype ]]委托链接，被误称为"继承"或表示为"原型继承"
```javascript
  class Father {
    // ...
  }
  class Son extends Father {
    // ...
  }
```
##### 1.1.1.2 super
- 功能与位置有关
  - 在构造器中，super表示父类的构造函数（new father())
    - 必须在前面进行调用
  - 在方法中，super表示父类的原型father.prototype
```javascript
  class Foo {
    constructor() {
      this.a = 1;
    }
  }

  class Bar extends Foo {
    constructor() {
      super();
      this.b = 2;
      // super(); 报错，必须放在第一行
    }
  }
```
#### 1.1.2 new.target 
- 指向new实际上直接调用的构造器, 与继承无关
  - 其他函数的new.target则为undefined
```javascript
  class Foo {
    constructor() {
      console.log("Func: ", new.target.name)
    }
  }

  class Bar extends Foo {
    constructor() {
      super();
      console.log("Func: ", new.target.name)
      // super(); 报错，必须放在第一行
    }
  }

  var a = new Foo();
  // Func:  Foo
  var b = new Bar();
  // Func:  Bar
  // Func:  Bar
```
#### 1.1.3 static
- 直接定义的函数是连接到函数的原型
- static定义的函数并不在类的原型链上，而是在函数构造器之间的双向/并行链上
  - 无法通过对象的实例来访问，但可以通过函数名来访问
```javascript
  class Foo {
    static cool() {
      console.log("cool");
    }
    wow() {
      console.log("wow")
    }
  };

  class Bar extends Foo {
    static awesome() {
      super.cool();
      console.log("awesome");
    }

    neat() {
      super.wow();
      console.log("neat");
    }
  }

  Foo.cool(); 
  // cool

  Bar.cool();
  // cool 访问到的是Foo.cool
  Bar.awesome();
  // cool awesome
  // 为什么能够访问到？
  /*
    static成员能用函数名称访问到，所以访问aewsome
    为什么可以访问super.cool()?
    cool()也是static，可以用函数名访问到
  */
  var b = new Bar();
  b.neat();
  // wow neat

  console.log(b.awesome);
  // undefined
  console.log(b.cool)
  // undefined
```
## 2 块级作用域
- {...}代表一个块级作用域
### 2.1 let
#### 2.1.1. let 关键字的特点
- 块级作用域
- 不存在变量提升
- TDZ错误（暂时性死区错误）
```javascript
  {
    console.log(a); // 1
    var a = 2;
  }
  console.log(a)    // 2
  // undefined
  // 2
  // 1 说明a已经被声明，所以var有变量提升
  // 2 说明var不存在块级作用域
  {
    console.log(b);
    let b = 2;    // 3
  }
    console.log(b)  // 4
    // Reference Error
    // Reference Error
    // 3 说明let不存在变量提升，此时为TDZ错误
    // 4 说明let为块级作用域，块外无法访问块内的变量定义
```
#### 2.1.2 let 关键字与for
- 在ES6的for循环中，计数变量一般使用let
```javascript
  var arr = [];
  for(var i = 0;i < 2;i ++){
    arr[i] = function() {
      console.log(i);
    }
  }
  arr[0]();
  arr[1]();
  // 2 2
  var arr = [];
  for(let i = 0;i < 2;i ++){
    arr[i] = function() {
      console.log(i);
    }
  }
  arr[0]();
  arr[1]();
  // 0 1
```
### 2.2 const
#### 2.2.1 特点
- 具有块级作用域
- 没有变量提升
- 声明常量时必须赋值
- 常量赋值后，值不能修改
  - 基本数据类型
    - 字面值不能修改
  - 复合数据类型
    - 对应的存储地址不能改，但结构内的内容是可以改的
    - 理解
      - const指的是不能修改内存中对应栈的值，而复杂数据类型中对应栈的值存储的是对应堆中的数据的地址，即数据实际上是存在内存的堆中，所以可以修改，但是复杂数据类型不能重新赋值
### 2.3 块级作用域函数(有待查证)
- 在ES6前，函数声明不存在块级作用域
- 在ES6后，函数的声明具有块级作用域，同时还有变量提升
```javascript
  {
    function foo() {
      console.log("A");
    }
    foo();
  }
  foo();
  // A
  // ReferenceError
```
## 3 函数的参数的默认值
- 在ES6前，函数的参数默认值需要通过||来使得参数取到默认值
- 使用参数值的注意事项
  - 当对应<font color="red">实参为空或者是undefined</font>时，使用默认的参数
  - 当对应的实参为null时，会强制转化为0
- 函数的参数可以看作一个作用域
```javascript
// ES6前
  function foo(x, y) {
    x = x != undefined ? x : 31;
    y = y != undefined ? y : 1;
    console.log(x + y); 
  }
  foo(undefined, 3);
  // 34
// ES6
  function foo(x = 31, y = 1) {
    console.log(x + y); 
  }
    foo(undefined, 3);
  // 34
```
## 4 对象字面量的扩展
- <font color="red">注意是用于对象中的属性和方法定义</font>
### 4.1 简洁属性(key值和value的变量名相同)
- 前提：key值和value的变量名相同
```javascript
  var x = 2, y = 3;
// 非简洁写法：
  var o = {
    x: x,
    y: y
  }
// 间接写法
  var o = {
    x, 
    y
  }

```
### 4.2 简洁方法
- 注意：
  - 简洁方法对应的是<font color="red">函数未命名的方法</font>，即x,y,z并不是它们函数的名称，而是它们的key值
    - 无法直接使用函数名称来进行调用，需要在前面增加对象名或者this进行调用
      - o.x()
      - this.x()
  - 如果要使用<font color="red">递归</font>的方法，最好采用有有名称函数的调用。
```javascript
// 老方法
  var o = {
    x: function() {
      // ...
    },
    y: function() {
      // ...
    }
    z: *function() {
      // ...
    }
  }
// ES6
  var o = {
    x() {
      // ...
    },
    y() {
      // ...
    }
    * z() {
      // ...
    }//生成器
  }
```
```javascript
  var o = {
    x: function x(val) {
      if(val < 0) 
        return 0;
      else {
        return val + x(val - 1)
      }
    } 
  }
  // 函数内的x函数指的就是本身
```
### 4.3 使用计算属性名
- 在ES6以前，若想要以一个计算属性名作为key，则需要单独累出
- ES6提供了可以在对象字面量内部使用定义计算属性名
  - []内部使用计算表达式作为属性值，也可以是计算属性值([ Symbol.iterator ])
```javascript
// ES6之前
  var prefix = "user_";
  var o = {
  baz: function(..){ .. }
  };
  o[ prefix + "foo" ] = function(..){ .. };
  o[ prefix + "bar" ] = function(..){ .. };
// ES6
  var prefix = "user_";
  var o = {
  baz: function(..){ .. },
    [ prefix + "foo" ]: function(..){ .. },
    [ prefix + "bar" ]: function(..){ .. }
  }; 
```
### 4.4 关联原型
- Object.setPrototypeOf(son, father)
  - 使得son的原型为father
  - <a href="#event-assignment">用于事件的委派 </a>
```javascript
  var o1 = {
    // ...
  }
  var o2 = {
    // ...
  }
  Object.setPrototypeOf(o2, o1);
  // o2.__proto__ = o1 类似于o1将事件委托给了o2
```
### 4.5 super对象
- super对象<font color="red">只允许在简洁方法中出现</font>，而不允许在普通函数表达式中出现
  - super代指原型链的对象，常用于调用原型链中的函数（同名或者非同名）
```javascript
  var o1 = {
    foo() {
      console.log("o1.foo");
    };
  }
  var o2 = {
    foo() {
      super.foo();
      console.log("o2.foo");
    }
  }
```
## 5 解构赋值
- 方便从数组，对象中提取值
- <font color="red">特征</font>
  - 数组或对象的字面量写在赋值函数的前面（左边）
  - 数组或对象的字面量作为形参
### 5.1 数组解构
- 变量的位置和数组值的位置一一对应
```javascript
  let arr = [1, 3, 4]
  let [a, b, c] = arr;
  // 1， 3，4
```
### 5.2 对象解构
- 从被解构对象中找到与key值相匹配的value值，并进行赋值
```javascript
// 简洁属性的方法
  let person = {name: "bulumrcai", age: 23, height: 175}
  let {age, name, height} = person;
  //age 23 name bulumrcai height 175

// 正常匹配的方法
  let person = {name: "bulumrcai", age: 23, height: 175}
  let {name: myname} = person;
  // myname: bulumrcai
  // myname实际上是类似于重新命名为。。。
```
### 5.3 解构赋值的两种写法
#### 5.3.1 用于解构的变量未声明变量未声明
```javascript
  let arr = [1, 3, 4]
  let [a, b, c] = arr;

  let person = {name: "bulumrcai", age: 23, height: 175}
  let {age, name, height} = person;
```
#### 5.3.2 用于解构的变量已经声明(前面无需加声明类型)
```javascript
  let a, b,c;
  let arr =[1, 3, 4];
  [a, b, c] = arr;

  let myName;
  let person = {name: "bulumrcai", age: 23, height: 175};
  {name: myName} = person;
```
### 5.4 用于解构变量的数量
- 太少
- 刚刚好
- 太多
  - 多出的变量会被赋值为undefined
### 5.5 重复赋值
- 当对象出现复数个相同的key值，会对用于解构的变量赋值
```javascript
  var a = {b: 4};
  var {b: c, b: d} = a;
  console.log(c, d);
  // 4 4
```
### 5.6 解构参数（当数组或对象的字面量作为形参）
```javascript
  function f3([ x, y, ...z], ...w) {
    console.log( x, y, z, w );
  }
  f3( [] ); // undefined undefined [] []
  f3( [1,2,3,4], 5, 6 ); // 1 2 [3,4] [5,6]
```
### 5.7 用于解构变量的默认值
当对应的参数的值为undefined时，会使用默认的参数
```javascript
  var arr1 = [1, 2, 3, 12];
  var arr2 = [4, 5, 6];
  var [a = 3, b = 6, c = 9, d = 12 ] = arr1;
  var [ x = 5, y = 10, z = 15, w = 20] = arr2;
  console.log(a, b, c, d);
  console.log(x, y, z, w);
  //  1 2 3 12 
  // 4 5 6 20
```
#### 5.7.1 解构的默认值和形参的默认值（难点）
- <font color="red">根据触发填充默认值的条件进行区分</font>
  - 解构的默认值：
    - 当被解构的数组/对象中没有相应值触发
  - 形参的默认值：
    - 当形参为空或者为undefined触发
```javascript
  function f6({ x = 10 } = {}, { y } = { y: 10 }) {
    console.log( x, y );
  }
  f6(); 
  /**
    * 没有传入参数，则使用形参的默认值即
    * {x = 10} = {}, {y} = {y: 10}
    * 从{}无法找到x对应的value值，所以使用解构的默认值即x = 10
    * {y: 10}找到y对应的值，所以y=10
  */
  f6( {}, {} ); 
  /**
    * 传入参数{}，{}
    * {x = 10} = {}, {y} = {}
    * 从{}无法找到x对应的value值，所以使用解构的默认值即x = 10
    * {}无法找到y对应的值，又没有解构的默认值，所以y=undefined
  */

```
### 5.8 与其他用法的结合应用
- 使用实现不使用临时变量使两个变量的值交换
```javascript
  var x = 10, y = 20;
  [y, x] = [x, y];
  // 解释
  // 赋值表达式右边先执行，则有新构建一个数组[10, 20];
  // 左边为数组的形式，显然使用了数组的解构，所以对应位置被赋予对对应的值，即
  // y = 10, x = 20;
```
- 与扩展运算符结合实现截取数组
```javascript
  var a = [1,3,4,6,7]
  var [,,...b] = a;
  console.log(b);
  // [4, 6, 7]
```
## 6 展开运算符（...)
- ...后面跟上的实际上不是一个数组，<font color>而是一个iterable类型的变量</font>
  - ...后面跟上array类型时，实际上数组要先做一步处理
    - arr\[Symbol.iterator\]()，利用生成器函数来生成对应的iterable变量
- rest/spread --> 展开/收集运算符
### 6.1 ... 用于iteratble前(展开运算符)
- 实际上是iterable类型,作用是将变量展开为各个独立的值
  - ...[1,2,4] => 1, 2, 4
- 作用
  - 用于实参的输入
  - 用于合并数组(基本代替了concat函数的作用)
```javascript
// 用于合并数组
  var a = [2, 3, 4];
  var b = [1, ...a, 5];
  console.log(b);
  // [1, 2, 3 ,4 ,5]
```
### 6.2 ...用于函数的形参中（剩余参数）
- 这种参数被称为剩余参数,对应变量的<font color="red">返回值是一个真正的数组</font>
  - 用于替代arguments（类数组），而...后面的形参为真正的数组
```javascript
// 作为剩余参数，且剩余参数为真正的数组
  function sum(...args) {
    let res = args.reduce((preValue, value) => {
      return preValue + value;
    }, 0)
    return res;
  }

// 用于实参的输入
  const a = [1, 2, 3, 4, 5];
  console.log(sum(...a));
  // 15
``` 
- 允许我们讲一个不定数量的参数以数组的形式传递给函数
``` javascript
  function sum(...argv) {
    return argv.reduce((preValue, curValue) => preValue + curValue, 0);
  }
  console.log(sum(1,3))
  console.log(sum(1,2,4))
  // 4, 7
```
- 剩余参数和解构赋值配合使用
```javascript
  const arr = [1, 3, 4, 5];
  const [arvg, ...list] = arr;
  console.log(arvg, list)
  // 1, [3, 4, 5]
```
## 7 模板字面量
- 返回值是一个字符串
- 利用``作为界定符声明字符串的字面量
- 优点
 - 可以分散在<font color="red">多行</font>进行字符串字面量的定义
 - 字面量中字符串的<font color="red">换行符会被保留</font>
### 7.1 插入字符串字面量
- 可以在字面量中增加${js表达式} --- 插入表达式
  - 会返回当中js表达式的返回值，并将对应的返回值加入到字符串之中
  - js表达式可以是函数的调用，在线函数表达式调用，设置插入字符串的字面量
- ${js表达式}的作用域
  - 对应的词法作用域
```javascript
  function upper(s) {
    return s.toUpperCase();
  }
  var who = "reader";
  var text = `
  A very ${upper("warm")} welcome 
  to all of you ${upper(`${who}s`)}!
  `
  console.log(text);
  /*

  A very WARM welcome 
  to all of you READERS!

  */
```


### 7.2. 标签模板字面量
- <span id="template-call">一种特殊的函数调用形式</a>
```javascript
  function funcName(strings, ...values) {
    // ...
  }
  // 函数调用
  funcName`...` 
```
- funcName`...` 
  - 一种特殊的函数调用
    - 不需要()，而是``进行函数的调用
- 参数
  - strings: 由普通的字符串组成的数组，得到的是<font color="red">以插入表达式分割</font>的字符
  - ...values: 由插入表达式结果组成的数组
```javascript
  function foo(strings, ...values) {
    console.log(strings);
    console.log(values);
  }

  var desc = "awesome";

  foo`Everything is ${desc}!`;

```
- 常用于对模板字面量所组成的字符串进行改造
- 用于将字符串中的数字改造成美元
```javascript
  function dollabillsyall(strings, ...values) {
    return strings.reduce(function(preValue, currentValue, index) {
      if(index > 0) {
        if(typeof values[index - 1] === "number") {
          preValue += `$${values[index-1].toFixed(2)}`;
        }
        else {
          preValue += values[index];
        }
      }
      return preValue + currentValue;
    }, "")
  }

  var amt1 = 11.99, amt2 = amt1 * 1.08, name = "Kyle";
  var text = dollabillsyall
  `Thanks for you purchase, ${name}! your
  product cost was ${amt1}, which with tax 
  comes out ${amt2}
  `
  console.log(text)
  /*
  Thanks for you purchase, 11.99! your
  product cost was $11.99, which with tax 
  comes out $12.95
  */
```
### 7.3. raw字符串
- 在参数strings返回的数组中，该数组有一个属性raw
  - 原始数据，即其中的换行符等是以转义的形式表示出来，而不是被视为一个换行符
- String.raw(strings, ...values)
  - js提供了一个模板字符串函数
  - 返回一个转义字符没有被变成相应格式的原始字符串
```javascript
  String.raw`...`
```
```javascript
  console.log(String.raw`hello\nworld`)
  console.log(`hello\nworld`)
  /*
    hello\nworld
    hello
    world
  */
  
```
## 8  箭头函数
``` javascript
  (argv1, argv2...) => {};
  // 相当于
  function(argv1, argv2...) {};
```
- 通常会把箭头函数赋值给一个变量，然后再进行调用
- 特点
  - 当函数没有返回值的时候，会默认返回undefined
- 目的
  - 简化匿名函数定义的语法
### 8.1 箭头函数的特殊规则
#### 8.1.1 只有一个变量
- 括号可以省略
```javascript
  let fn = value => {console.log(value)}
```
#### 8.1.2. 只有一行代码
- 大括号可以省略
- 并默认返回对应表达式的执行结果：如布尔表达式则返回true或false
```javascript
  let = value => value > 100;
```
### 8.2 箭头this指向
- 箭头函数不绑定this，this关键字将指向定义位置中的this
  - 能产生局部作用域的函数中定义
```javascript
  obj = {name: "bulumrcai"};
  function fn() {
    console.log(this);
    return () => console.log(this)
  }

  const fun = fn.call(obj);
  fun();
  // obj obj

```
  - 在不能产生局部作用域的对象定义(this并不是指向对象的this)
```javascript
  obj = {
          name: "bulumrcai"
          sayhello: () => console(this.age)
        };
  // undefined this指向的是window
```
### 8.3 箭头函数的应用注意事项
- 用于使代码更短，对于长的代码，不要考虑使用箭头函数
## 9 for...of...循环
- of后面的参数是iterable
- 默认具有iterable的内置对象
 - Array, String, Generator, collection, typedArray
### 9.1 for...of和for...in...的区别
- for...of...为变量赋的值是value
- for...in...为变量赋的值是index
```javascript
  var a = ['a', 'b', 'c', 'd', 'e'];

  for(let val of a) {
    console.log(val);
  }
  // a b c d e
  for(let index in a) {
    console.log(index);
  }
  // 0 1 2 3 4
```
```javascript
// for...of... 等价代码
  var a = ['a', 'b', 'c', 'd', 'e'];

  for(var val, ret, it = a[Symbol.iterator]();(ret = it.next()) && !ret.done;) {
    val = ret.value;
    console.log( val )
  }
```
## 10 数字字面量的拓展
- 0b  二进制
- 0o  八进制
- 0x  十六进制
- .toString(radix)
  - 转化为对应进制的字符串
## 11 Unicode编码（后面再补充）
## 12 符号（symbol）
### 12.1 symbol的创建(自定义)
- <font color="red">不需要使用new符号</font>。不是一个构造器，也不会创建一个对象
- 与string，number等方法类似
### 12.2 symbol常用的方法
#### 12.2.1 typeof
- 返回值为symbol
#### 12.2.2 instanceof
- 与string，number的字面量不是对应String, Number的实例一样，symbol也不是Symbol的实例
- 返回值为false
#### 12.2.3 valueOf
- 返回symbol字面量
#### 12.2.4 Symbol#toString
- 返回相应的symbol的字符串格式
#### 12.2.5 Symbol.for(desc)
- 在全局符号注册表中搜索，如果有描述文字相同的符号，则返回该symbol
- 若没有，则新建一个该desc的符号，并且返回
#### 12.2.6 Symbol.keyFor(symbol)
- 提取符号的注册文本的描述(desc)
### 12.3 符号的应用
#### 12.2.3.1 符号的注册
- 符号一般是进行全局注册
  - 可以通过Symbol.for的方法确定唯一性desc
```javascript
  const evet = Symbol.for("event");
  // 在全局符号注册表中搜索，如果有描述文字相同的符号，则返回该symbol
  // 若没有，则新建一个该desc的符号，并且返回
```
#### 12.2.3.2 作为对象属性的符号
- 会用一种特殊的方式存储，使得这个属性<font color="red">不出现在这个对象的一般枚举属性之中</font>
- 需要使用Object.getPropertySymbols(obj)才能取得对应的符号属性
```javascript
  var o = {
    foo: 42,
    [ Symbol("bar") ]: "hello world",
    baz: true
  }

  console.log(Object.getOwnPropertyNames( o ));
  console.log(Object.getOwnPropertySymbols( o ));
```
#### 12.2.3.3 内置符号
- iterator
  - Array 
  - 在表示时@@iterator来指代内置的符号
## 13 Map数据结构
- 为什么要使用Map数据结构
  - 对象只能使用字符串作为键，而Map实现了可以使用任意的变量作为键
    - 无法用[]的形式进行访问
### 13.1 Map的构造
```javascript
  var map = new Map(obj);
```
- obj
  - 为空
  - 为一个iterable,正好是entries的返回值，格式和下面的数组一样
  - 为一个数组  [ [key, value], [ key,value ]]
  - 为一个Map
### 13.2 Map的方法
#### 13.2.1 增删改查
##### 13.2.1.1 Map#set(key, value)
  - 给Map对象添加/修改相应的键值
##### 13.2.1.2 Map#delete(key)
  - 删除Map对象中对应的键
##### 13.2.1.3 Map#clear(key)
  - 清空Map对象中的键
##### 13.2.1.4 Map#has(key)
  - 返回boolean，判断是否有给定的键
##### 13.2.1.5 Map#get(key)
  - 返回key对应的value值
#### 13.2.2 Map#size()
- 返回Map对象的大小
#### 13.2.3 Map#entries()
- 返回一个iterator
  - 经过展开后:[ ...Map#entries() ]为数组后的格式为 [ [key, value], [ key,value ]]
#### 13.2.4 Map#values()
- 返回一个iterator  
  - 经过展开后:[ ...Map#entries() ]为数组后的格式为 [ value1, value2...]
#### 13.2.5 Map#keys()
- 返回一个iterator  
  - 经过展开后:[ ...Map#entries() ]为数组后的格式为 [ key1, key2...]

### 13.3 WeakMap方法
- 用法类似于Map
- 区别
  - 只有增改查和大小的操作，不能机型删除，暴露key，value等操作
- 优势
## 14 Set数据结构
- Set的唯一性使得内部元素不能进行类型转化来判断是否相等。（即===）
### 14.1. Set的构造
```javascript
  var set = new Set(obj)
```
- obj
  - obj可以为空
  - 可以是一个iterator
  - 可以是一个数组
  - 可以是一个set对象实例
### 14.2. Set的方法
#### 14.2.1 增删改查
##### 14.2.1.1 Set#add(value)
  - 给Set对象添加相应的值
##### 14.2.1.2 Set#delete(key)
  - 删除Map对象中对应的键
##### 14.2.1.3 Set#clear(key)
  - 清空Map对象中的键
##### 14.2.1.4 Set#has(key)
  - 返回boolean，判断是否有给定的键
#### 14.2.2 Set#size()
- 返回Set的大小
#### 14.2.3 Set#entries()
- 返回一个iterator
  - 经过展开后:[ ...Set#entries() ]为数组后的格式为 [ [value1, value1], [ value2,value2] ]
#### 14.2.4 Set#keys()
- 返回一个iterator
  - 经过展开后:[ ...Set#keys() ]为数组后的格式为 [value1, value2...]
#### 14.2.5 Set#values()
- 返回一个iterator
  - 经过展开后:[ ...Set#values() ]为数组后的格式为 [value1, value2...]
## 15 Array的扩展方法
### 15.1. Array.of()
- 成为数组推荐的函数形式构造器
  - 解决了单个参数导致只有长度而没有赋值的情况
```javascript
  var arr = Array.of(obj)
```
- obj
   - ...val: 任意数量的参数
   - array
### 15.2. Array.from(arraylike,func?)
- 将iterable或者是类数组转化为数组
  - 返回一个数组
- func可以对数组中的元素进行处理
  - 类似于map的用法
- 优点
  - 避免空槽
    - 空白的地方会自动填充undefined
```javascript
  let arraylike = {
    '0': 'a',
    '1': 'b',
    length: 2
  }

  // ES6以前，调用数组的赋值操作
  const arr = Array.prototype.slice.call(arraylike);
  const arr = [].slice.call(arraylike)
  // ES6
  let arr = Array.from(arrayLike);
  console.log(arr);
// [a, b]
```
### 15.3. Array.from和Array.of对于子类的影响
- 可以通过extends来继承Array
- from, of都是用访问它的构造器来构造数组
```javascript
  class MyArray extends Array {
    // ...
  }

  MyArray.of(1, 3) instanceof MyArray; // true
  MyArray.of(1, 3) instanceof Array;  // true

  Array.of(MyArray.of(1, 3)) instanceof MyArray // false
```
### 15.4. Array#copyWithin(target, start[, end])
- 不会增加数组的长度，到达数组结尾复制就会停止
- 当target > start时，赋值算法会反向进行
- 当为负数的时候，相当于倒序(最后一个的下标为-1)
- 返回一个被自身数据替换的数组
- 参数
  - target 要复制到的索引
  - start 开始复制的索引（包括）
  - end 赋值结束的索引（不包括）
```javascript
  console.log([1, 2, 3, 4, 5].copyWithin(3, 0, 1));
  // [1, 2, 3, 1, 5]
  console.log([1, 2, 3, 4, 5].copyWithin(3, -3, -2));
  // [1, 2, 3, 3, 5]
  console.log([1, 2, 3, 4, 5].copyWithin(2, 1));
  // [1, 2, 2, 3, 4]
  // 反向赋值，保证不是[1, 2, 2, 2, 2]
```
### 15.5. Array#fill(value[, start, end])
- 返回一个被填充了相应val的数组
- 若只有参数value，则默认全部填充为value
- 参数
  - val 要填充的值
    - 若只有一个参数，则默认填充全部
  - start 填充的开始索引（包括）
  - end 填充的结束索引（不包括）
- 常用于初始化
```javascript
  const arr = Array(26).fill(0);
  console.log(arr)
  // 全部被填充为0
```
### 15.6. Array#find(func)
- 返回一个自定义是否匹配的值
- func
  - 返回值是布尔值，当为true时，find会返回相应的value
### 15.7. Array#findIndex(func)
- 为什么不适用Array#indexOf(val)
  - Array#indexOf(val)是不改变类型的进行比较
  - findIndex由于func的缘故可以自定义的进行比较
- 返回一个自定义的匹配索引
- func
  - 返回值是布尔值，当为true时，find会返回相应的index
- Array#indexOf(value)
  - 若找到对应的值，则返回相应的索引
  - 没有找到则返回-1
  - <font color="red">采用的是严格匹配===</font>
- 需要严格匹配则使用Array#indexOf
### 15.8. Array#entries()
- 返回一个iterator
  - 经过展开后:[ ...Set#values() ]为数组后的格式为 [[index , value], [index , value]...]
### 15.9. Array#keys()
- 返回一个iterator
  - 经过展开后:[ ...Set#values() ]为数组后的格式为 [value1, value2...]
### 15.10. Array#values()
- 返回一个iterator
  - 经过展开后:[ ...Set#values() ]为数组后的格式为 [0, 1...]
## 16. Object的扩展方法
### 16.1. Object.is()
- 执行比===更严格的值比较
- 常用于区分
  - NaN
  - +/- 0
### 16.2. Object.getPropertySymbols(obj)
- 获得obj中的不可枚举的symbol的数组
### 16.3. Object.setPrototypeOf(son, father)
- 一般用于行为委托
### 16.4. Object.assign(target, ...source)
- 返回一个浅复制的对象
- target对象创建source相应的键，然后赋值为source中对应的值
## 17. Number的扩展方法
### 17.1 Number.EPSILON
- 任意两个值之间的最小差2^-52，常用于极小值的判断
### 17.2 Number.MAX_SAFE_INTEGER
- 安全的无歧义的最大整数:2^53 - 1
### 17.3 Number.MIN_SAFE_INTEGER
- 安全的无歧义的最小整数:-(2^-53 - 1)
### 17.4 Number.isNaN(val)
- 用于判断是不是为NaN值
### 17.5 Number.isFinite(val)
- 判断是不是有限的数字
 - <font color="red">没有进行类型转化</font>
### 17.6 Number.isInteger(val)
- 判断val是否是整数
```javascript
  function isFloat(x) {
    return Number.isFinite(x) && !Number.isInteger(x)
  }
```
### 17.7 Number.isSafeInteger(val)
- 判断整数是否在安全范围内
## 18. String的扩展方法
### 18.1 针对Unicode的函数（之后补充）
#### 18.1.1 String.fromCodePoint()
#### 18.1.2 String#codePointAt()
#### 18.1.3 String.nomalize()
### 18.2 String.raw()
- 与模板字符串字面量一起使用
### 18.3 String#repeat(n)
- 返回重复了n次的字符
```javascript
  console.log("foo".repeat(3));
  // foofoofoo
```
### 18.4 新的String判断内部字符的方法
##### 18.4.1 String#startsWith(str[, index])
- 查看第index位是否是以str为开始，index默认值为0
##### 18.4.2 String#endsWith(str[, index])
- 查看第index位是否是以str为结束，index默认值为0
##### 18.4.3 String#includes(str[, index])
- 查看第index位开始是否包含str，index默认值为0
```javascript
  var palindrome = "step on no pets";
  palindrome.startsWith( "step on" ); // true
  palindrome.startsWith( "on", 5 ); // true

  palindrome.endsWith( "no pets" ); // true
  palindrome.endsWith( "no", 10 ); // true

  palindrome.includes( "on" ); // true
  palindrome.includes( "on", 6 ); // false
```

# 十三 JS常用的涉及模式
## 1 工厂设计模式
### 1.1 设计的目的
- 简化具有相同接口的类的构造
### 1.2 设计的方法
- 组成
  - 接口协议
   - 生产说明书
  - 实现类
    - 针对同一个写协议的不同实现
  - 工厂函数
    - 直接提供开始者调用的方法，用来进行对象实例的组装和创建
- 将对象的组装过程封装在工厂内部，对外使用统一的接口
  - 即只向用户暴露的工厂函数和接口对象
### 1.3 设计的实例
```javascript
  // 统一的接口协议
  var shapeInterface = {
    draw() {
      throw "must be implementation"
    }
  }
  // 根据不同的型号实现类（实现不同的接口函数）
  function Circle() {
    this.draw = function() {
      console.log("Circle");
    }
  }
  Circle.prototype = shapeInterface;
  
  function Rect() {
    this.draw = function() {
      console.log("Rect");
    }
  }
  Rect.prototype = shapeInterface;
  // 实现工厂函数根据不同的类型返回不同的类的实例
  function Shape(type) {
    if(type === "Circle")
      return new Circle();
    else if(type === "Rect")
      return new Rect();
  }

  var shape = Shape("Circle");
  var shape2 = Shape("Rect");

  shape.draw();     // Circle
  shape2.draw();    // Rect
```
## 2 单例设计模式
### 2.1 设计的目的
- 有登录功能的软件，用户信息的管理类， 文件和操作的管理类
- 
### 2.2 设计的方法
- 单例只能有一个实例
  - 定义一个全局对象，作为可以全局访问的单例的接口
- 单例必须为其他所有调用方提供这一实例
  - 定义一个单例方法，用来获取单例实例
- 单例一旦创建，就不会轻易销毁
  - 在使用单例时，若单例实例不存在，则进行创建；若存在，则直接返回
### 2.3 设计的实例
```javascript
// 1. 定义一个全局对象，作为可以全局访问的单例的接口
  var Singleton = {
    // 2. 定义一个单例方法，用来获取单例实例
    // 3. 在使用单例时，若单例实例不存在，则进行创建；若存在，则直接返回
    instance() {
      if(Singleton.__instance === undefined) {
        Singleton._instance.__instance = {
          name: "bulumrcai",
          weapon: "gun"
        }
        return Singleton.__instance;
      }
    }
  }

  var user = Singletion.instance();

```

## 3 建造者设计模式
### 3.1 设计的目的
- 优点
  - 建造者只是独立完成拼装过程，易维护，易扩展
  - 将复杂对象进行拆分，隐藏对象构建的内部细节，符合单一功能原则
### 3.2 设计的方法
- 使用多个简单的对象构建一个复杂的对象
- 多个生产者
  - 分别实现类的构建
- 建造者
  - 建造这将复杂对象的创建过程拆分成一个个简单对象并交给相应的生产者完成创建
  - 再将生产者创建出的简单对象进行组合，以提供复杂对象使用者使用
- 步骤
  - 指定协议
  - 拆分生产者
  - 建造者进行组合
```javascript
// 构建统一的接口 
  var mealInterface = {
    getName() {
      throw "必须有套餐名";
    },
    getStaple() {
      throw "必须有主食";
    },
    getDrink() {
      throw "必须有饮料";
    }
  }
// 生产者用来确定具体的对象
  function Drink(type) {
    switch(type) {
      case 1: {return "可口可乐"} 
      case 2: {return "热牛奶"}
    }
  }

  function Staple(type) {
    switch(type){
      case 1: {return "汉堡包"}
      case 2: {return "鸡肉卷"}
    }
  }

  // 以餐厅作为建造者进行套餐的组合
  function restaurant(type) {
    switch(type) {
      case 1: {
        var food = Object.create(mealInterface);
        food.getName = function() {
          return "可乐汉堡套餐";
        }
        food.getDrink = function() {
          return Drink(1);
        }
        food.getStaple = function() {
          return Staple(1);
        }
        return food;
      }
      case 2: {
        var food = Object.create(mealInterface);
        food.getName = function() {
          return "鸡肉牛奶套餐";
        }
        food.getDrink = function() {
          return Drink(2);
        }
        food.getStaple = function() {
          return Staple(2);
        }
        return food;
      }  
    }
  }

  var f = restaurant(2);
  console.log(f.getName(), f.getStaple(), f.getDrink());
  // 鸡肉牛奶套餐 鸡肉卷 热牛奶
```
### 3.3 设计的实例
## 4 设配器设计模式
### 4.1 设计的目的
- 为两个互不兼容的系统提供可以调用的接口
### 4.2 设计的方法
- 某个对象的适配器
  - 属性和方法和原来的对象基本保持一致，只是适应了不同的使用方法
### 4.3 设计的实例
```javascript
  var sort = {
    type: "DESC",
    data: [],
    run() {
      if(this.type === "DESC") {
        return this.data.sort((a, b) => b - a);
      }
      else if(this.type === "ASC") {
        return this.data.sort((a, b) => a - b);
      }
    }
  }

  sort.type = "ASC";
  sort.data = [2, 3, 1, 5, 3, 2, 6];
  console.log(sort.run());

  // 加入有一个用户输入系统，只能接受如下格式的排序命令
  // "D 2, 3, 1, 5, 3, 2, 6"
  // 利用适配器对格式进行转化
  var d1 = "D 2,3,1,5,3,2,6";
  var sortAdapt = {
    data: "",
    run() {
      let array = this.data.split(" "); 
      sort.type = array[0] === "D" ? "DESC" : "ASC";
      sort.data = array[1].split(",").map(value => Number(value));
      return sort.run();
    }
  }

  sortAdapt.data = d1;
  console.log(sortAdapt.run());
  // 6, 5, 3, 3, 2, 2, 1
```
## 5 装饰器设计模式
### 5.1 设计的目的
- 扩展已有类的新的功能
  - 对已有类的一种包装，在保持原类结构不变的前提下扩展类的功能
### 5.2 设计的方法
- 创建一个传入要扩展对象作为参数的扩展的类
  - 保持装饰后的对象和原对象具有相同的接口
- 将要扩展的对象作用参数传入构造一个新的实例对象
### 5.3 设计的实例
```javascript
  var general = {
    name: "bulumrcai",
    weap: "gun",
    skill() {
      console.log(this.name + " " + this.weap + "发射");
    }
  }

  var GeneralPack = function(general) {
    this.name = general.name;
    this.weap = general.weap;
    this.height = 1.78;
  }
  generalPack.prototype.skill = function() {
    console.log(this.height + " " this.name + " " + this.weap + "发射");
  }

  general.skill();
  // bulumrcai gun发射
  general = new GeneralPack(general);
  general.skill();
  // 1.78 bulumrcai gun发射
```
## 6 外观（门面模式）设计模式
### 6.1 设计的目的
- 将复杂的子系统进行组合，对外提供统一的访问接口，隐藏系统内的复杂结构
- 开发者需要调用多个对象的多个方法，并且需要进行参数的来回传递
### 6.2 设计的方法
- 多个方法组合调用，并且参数的传递只在这些方法内部使用
### 6.3 设计的实例
```javascript
  var register = {
      wait() {
          console.log("排队等待取号");
      },
      regist() {
          console.log("拿到挂号");
      }
  }
  var doctor = {
      diagnose() {
          console.log("进行问诊");
      },
      watchCheck(check) {
          console.log("查看检查结果: " + check);
      },
      medication() {
          console.log("开发药方");
          return "药方A"
      }
  }
  var check = {
      makeCheck() {
          console.log("做检查");
          return "检查结果";
      }
  }

  var medication = {
      cost(medication) {
          console.log("付费: " + medication);
      },
      take() {
          console.log("取药回家");
      }
  }
  var hospital = {
      watch() {
          register.wait();
          register.regist();
          doctor.diagnose();
          var res = check.makeCheck();
          doctor.watchCheck(res);
          var me = doctor.medication();
          medication.cost(me);
          medication.take();
      }
  }
  hospital.watch();
  // 排队等待取号
  // 拿到挂号
  // 进行问诊
  // 做检查
  // 查看检查结果: 检查结果
  // 开发药方
  // 付费: 药方A
  // 取药回家
```
## 7 享元设计模式
### 7.1 设计的目的
- 对于存在大量对象的系统，使用享元模式可以显著减轻内存的负担
- 图书管理系统
### 7.2 设计的方法
- 将对象通用且静态的部分与独立且动态的部分分离，使其内部状态和外部状态隔离开，将内部状态进行共享复用
- 将代码中的通用属性提取成享元，放入一个共享池中。
- 再像系统增加对象时，会从共享池中取数据，没有的话才进行享元的创建
### 7.3 设计的实例
- 模拟一个图书类，没当有图书录入系统时，都要构建出这样一个类对象
```javascript
  function Book(sn, name, content, author, reader, initTime, expriseTime) {
        this.sn = sn;
        this.name = name;
        this.content = content;
        this.author = author;
        this.reader = reader;
        this.initTime = initTime;
        this.expriseTime = expriseTime;
    }
    Book.prototype.show = function() {
        console.log(this.sn, this.name, this.content, this.author, this.reader, this.initTime, this.expriseTime)
    };

    var book = new Book(10011, "老人与海", "在逆境中坚持", "海明威", "Jaki", "2017.11.11", "2017.12.12");
    book.show();
    // 10011 "老人与海" "在逆境中坚持" "海明威" "Jaki" "2017.11.11" "2017.12.12"
```
- 使用享元设计模式
```javascript
  function BookIn(sn, name, content, author) {
    this.sn = sn;
    this.name = name;
    this.content = content;
    this.author = author;
  }
  var bookPool = new Set();
  function Book(sn, name, content, author, reader, initTime, expriseTime) {
    for(var b of bookPool) {
            if(b.sn === sn ) {
                this.in = b;
            }
        }
        if(this.in === undefined) {
            this.in = new BookIn(sn, name, content, author);
            bookPool.add(this.in);
        }
        this.reader = reader;
        this.initTime = initTime;
        this.expriseTime = expriseTime;
    }
    Book.prototype.show = function() {
        console.log(this.in.sn, this.in.name, this.in.content, this.in.author, this.reader, this.initTime, this.expriseTime)
    };
    // 书本的作者等是静态数据
    var book1 = new Book(10011, "老人与海", "在逆境中坚持", "海明威", "Jaki", "2017.11.11", "2017.12.12");
    var book2 = new Book(10011, "老人与海", "在逆境中坚持", "海明威", "Lucy", "2017.12.20", "2018.01.12");

    book1.show();
    book2.show();
```

## 8 代理设计模式
### 8.1 设计的目的(补充)
### 8.2 设计的方法（补充）
### 8.3 设计的实例
- 网购中买家和卖家之间的物流公司就可以理解为一个代理
- 房产中介也可以理解为代理
```javascript
    var me = {
        shop: undefined,
        buy() {
            console.log("网购 " + this.shop.delever());
        }
    }

    var computerShop = {
        delegate: undefined,
        delever() {
            return this.delegate.delever();
        }
    }

    var logistics = {
        delever() {
            return "顺丰物流正在送货";
        }
    }
    // 我选择了这家店购买商品
    me.shop = computerShop;
    // 这家店选择了下面的快递公司快递物品
    computerShop.delegate = logistics;
    me.buy();
```
## 9 责任链设计模式
### 9.1 设计的目的
- 用来连接处理任务的一连串节点，使用责任链设计模式可以将复杂的处理过程拆分成多个负责方，并且可以灵活替换和修改
### 9.2 设计的方法
- 通过nextHandler来串联不同的节点，为了实现某个功能而使得代码连续调用
### 9.3 设计的实例
- 很多单位都采用这样的设计模式来阻止结构
- 使用责任链设计来实现校验网址功能
```javascript
    var typeCheck = {
        nextHandler: undefined,
        handle(obj) {
            if(typeof obj !== "string") {
                console.log("必须为字符串");
                return false;
            }
            if(this.nextHandler != undefined) {
                this.nextHandler.handle(obj);
            }
            else{
                console.log("校验成功");
                return true;
            }
        }
    }
    var emptyCheck = {
        nextHandler: undefined,
        handle(obj) {
            if(obj.length === 0) {
                console.log("字符串不能为为空");
                return false;
            }
            if(this.nextHandler != undefined) {
                this.nextHandler.handle(obj);
            }
            else{
                console.log("校验成功");
                return true;
            }
        }
    }
    var validCheck = {
        nextHandler: undefined,
        handle(obj) {
            if(!/^(www\.).+(\.com)$/.test(obj)) {
                console.log("字符串不符合规范");
                return false;
            }
            if(this.nextHandler != undefined) {
                this.nextHandler.handle(obj);
            }
            else{
                console.log("校验成功");
                return true;
            }
        }
    }

    typeCheck.nextHandler = emptyCheck;
    emptyCheck.nextHandler = validCheck;
    typeCheck.handle("www.ws.com");
```
## 10 命令设计模式
## 11 迭代器设计模式
### 11.1 设计的目的
- 对于开发者：实现了统一遍历集合对象的方式，并且十分易于扩展
- 对于使用方：统一的接口便于进行代码的组织和管理
### 11.2 设计的方法
- 设计一个遍历函数用来传对象和callback，并在其中使用next
- 对于每一个对象只需构造一个next函数便可以实现遍历
### 11.3 设计实例
- 实现一个简单的迭代器
```javascript
      var MyIterator = {
          next: function() {
              throw "必须实现next";
          }
      }
      function tool(obj, callback) {
          var item = obj.next();
          while(item != undefined) {
              callback(item);
              item = obj.next();
          }
      }

      var myObj = {
          name: "bulumrcai",
          age: 23,
          subject: "javascript",
          teaching() {
              console.log("teaching");
          },
          __keys: ["name", "age", "subject"],
          __tip: 0,
          next() {
              return this.__keys[this.__tip ++]
          }
      }
      myObj.prototype = MyIterator;
      tool(myObj, item => console.log(item));
```
## 12 备忘录设计模式
## 13 观察者设计模式
### 13.1 设计的目的
- 观察者模式常常用来实现订阅逻辑
- 当对象件出现一对多的交互关系，可以使用观察者来处理
### 13.2 设计的方法
- 由服务端和客户端两方组成
- 客户端通过订阅来监听服务器端的信息  
  - 向服务器端添加自己
- 由服务器端发送信息给已经订阅的客户端
  - 通过在内部建立的观察者对象，可以用来确定订阅的用户并向相应的用户发布同样的消息
### 13.3 设计的实例
```javascript
  var Service = {
    _customer: new Set(),
    addObserver(obj, func) {
      this._customer.add({obj, func}); 
    },
    deleteObserver(obj)  {
      var has;
      this._customer.forEach(object => {
        if(object.obj === obj) {
          has = object;
        }
      });
      if(has != undefined) {
        this._customer.delete(has);
      }
    },
    publish(msg) {
      console.log("发布了消息");
      this._customer.forEach(object => {
          object.func.call(object.obj, msg);
      });
    }
  }

  var teacher1 = {
    name: "bulumrcai",
    teach(msg) {
      console.log(this.name + "开始教学" + msg);
    }
  }
  var teacher2 = {
    name: "lucy",
    teach(msg) {
      console.log(this.name + "开始教学" + msg);
    }
  }

  Service.addObserver(teacher1, teacher1.teach);
  Service.addObserver(teacher2, teacher2.teach);

  Service.publish("Javascript");
  // 发布了消息
  // bulumrcai开始教学Javascript
  // lucy开始教学Javascript
  Service.deleteObserver(teacher1);

  Service.publish("C++");
  // 发布了消息
  // lucy开始教学C++
```
# 十四 JQuery
## 1 了解jQuery
- 是一个javascrpt库
  - 对原生的javascript的封装，内部是用JavaScript实现的
- 是一个快速简洁的JavaScript库
  - 优化了DOM操作，事件处理，动画设计和Ajax交互
- 优点
  - 轻量级，核心文件才几十kb，不hi影响加载速度
  - 跨浏览器兼容，基本兼容了现在主流的浏览器
  - 链式编程。隐式迭代
  - 对事件，样式，动画支持，大大简化了DOM操作
  - 支持插件扩展开放，有着丰富的第三方的插件
  - 免费，开源
- <a href="https://jquery.com/">官方网站</a>
  - ![版本问题](./img/jquery_ex1.jpg)
- jQuery对象是一个伪数组
- <font color="red">获取的方法一般只能获取第一个匹配的，设置可以设置所有匹配的</font>
## 2 jQuery的基本方法
- 注意
  - 回调函数函数中的this指的是dom对象而不是jquery，所以，若是想要取得jQuery，得加上$(this)
### 2.1 jQuery的顶级对象$
- 是一个函数
- $是jQuery的语法糖
- $是jQuery的顶级对象，相当于原生javsScript中的window，把元素利用$包装称jQuery对象，就可以调用jQuery方法了
### 2.2 jQuery的核心函数
- $()
  - 代表调用jQuery的核心函数
  - 返回一个jQuery元素对象
- 括号里面的选择
  - 接收一个函数对象
    - 入口函数
  - 接收一个字符串
    - 接收字符串选择器
      - 选择器
    - 接收一个代码片段
      - 动态创建对应的dom元素
  - 接收一个DOM元素
    - 类似于将dom元素包装成jQuery元素
#### 2.2.1 入口函数
```javascript
    // 1. 等待页面加载完毕再调用js代码
    $(document).ready(function() {
        $('div').hide()
    })
    // 2. 等待页面加载完毕再调用js代码（推荐使用）
    $(function() {
        $('div').hide();
    })
```
##### 2.2.1.1 和原生函数的区别
- window.onload = function () {}
  - 等页面文档，外部的js文件，css，图片加载完毕才执行内部代码
  - 后写的会覆盖先写的
- $(document).ready(function() {})
  - 等DOM结构渲染完毕即可以执行内部代码，不必等到所有外部资源加载完成
  - 后写的不会覆盖先写的
- 不同于原生js中的load事件是
#### 2.2.2 选择器函数
- $(cssSelector)
#### 2.2.3 创建元素的函数
- $(html[, ownerDocument])
  - 返回一个由html决定内容的jquery元素
  - 你可以传递一个手写的 HTML 字符串，或者由某些模板引擎或插件创建的字符串，也可以是通过 AJAX 加载过来的字符串。但是在你创建 input 元素的时会有限制，可以参考第二个示例。当然这个字符串可以包含斜杠 (比如一个图像地址)，还有反斜杠。当你创建单个元素时，请使用闭合标签或 XHTML 格式。例如，创建一个 span ，可以用$("&lt;span/&gt;") 或 $("&lt;span&gt;&lt;/span&gt;") ，但不推荐 $("<span>")。在jQuery 中，这个语法等同于$(document.createElement("span")) 。
```javascript
$("<div>", {
  "class": "test",
  text: "Click me!",
  click: function(){
    $(this).toggleClass("test");
  }
}).appendTo("body");

// 动态创建一个 div 元素（以及其中的所有内容），并将它追加到 body 元素中。在这个函数的内部，是通过临时创建一个元素，并将这个元素的 innerHTML 属性设置为给定的标记字符串，来实现标记到 DOM 元素转换的。所以，这个函数既有灵活性，也有局限性。
```
#### 2.2.4 DOM对象和jQuery对象的区别
##### 2.2.4.1 DOM对象和jQuery的关系
- DOM对象
  - 用原生js获取的元素对象
  - 只能使用DOM对象的属性和方法
- jQuery对象
  - 用jQuery方法获取的对象
  - 利用$对DOM对象包装后产生的对象(伪数组形式存储)
  - 只能使用jQuery方法
##### 2.2.4.2 DOM对象和jQuery对象的相互转化
###### 2.2.4.2.1 DOM对象转化为jQuery对象
```javascript
    $(DOM对象)
```
###### 2.2.4.2.2 jQuery转化为DOM对象
```javascript
    $(selector)[index] //index是索引号，

    $(selector).get(index) //index是索引号
```
#### 2.2.5 jquery多库共存
- jQuery使用$作为标志符号,和其他js库的$符号产生冲突。
##### 2.2.4.1 方法一
- 统一将$符号改为jQuery
##### 2.2.4.2 方法二
- 使用noConflict()函数
- 注意
  - 释放的操作必须在编写其他jQuery之前编写
  - 释放之后就不能再使用$,该为使用jQuery
  - 若前面alias有名称，可以使用自定义的符号
```javascript
    let alias = $.noConflict()
```
## 3 jQuery常用API
### 3.1 jQuery中选择器(获取元素对象)
##### 3.1.1 使用cssSelector选择器来进行选择
```javascript
    $(selector) //里面选择器直接写CSS选择器即可，要记得加引号
// 特殊选择器
    $(selector1,selector2,selectorN) // 逗号起到了或的作用
// parent > child 当前元素的子元素 
    $(parent > child)
// prev + next  当前元素的下一个xx元素
    $(prev + next)
// prev ~ siblings 当前元素的后面所有xx的兄弟元素
    $(prev ~ siblings)
// 这个方法通常被用在类选择器或者ID选择器中包含一些CSS特殊字符的时候
    $.escapeSelector(selector)
```
##### 3.1.2 伪选择器
###### 3.1.2.1 :first
- 当前元素的第一个
###### 3.1.2.2 :lt(index)
- 当前元素小于第index的所有元素
###### 3.1.2.3 :eq(index)
- 当前元素的第index个
###### 3.1.2.4 :gt(index)
- 当前元素大于第index的所有元素 
###### 3.1.2.5 :last
- 当前元素的最后一个
###### 3.1.2.6 :even
- 当前的元素的偶数所有元素
###### 3.1.2.7 :odd
- 当前元素的奇数的所有元素
###### 3.1.2.8 :not(selector)
- 去除所有与给定选择器匹配的元素
###### 3.1.2.9 :root
- 选择该文档的根元素。
###### 3.1.2.10 :header
- 匹配如 h1, h2, h3之类的标题元素
###### 3.1.2.11 :focus
- <font>匹配当前获取焦点的元素。</font>
###### 3.1.2.12 :target
- 选择由文档URI的格式化识别码表示的目标元素。
- 如果文档的URI包含一个格式化的标识符，或hash（哈希）， 然后:target选择器将匹配ID和标识符相匹配的元素。  例如，给定的URI https://example.com/#foo， $( "p:target" )，将选择<p id="foo">元素。
###### 3.1.2.13 :animated
- 匹配所有正在执行动画效果的元素
- 应用
```html
<!-- 只有对不在执行动画效果的元素执行一个动画特效 -->
<button id="run">Run</button><div></div>
<script>
  $("#run").click(function(){
  $("div:not(:animated)").animate({ left: "+=20" }, 1000);
});
</script>
```
###### 3.1.2.14 :lang
- 选择指定语言的所有元素。








##### 3.1.3 与内容匹配（css中没有的）
###### 3.1.3.1 :contains(text)
- 匹配包含给定文本的元素
```html
<div>John Resig</div>
<div>George Martin</div>
<div>Malcom John Sinclair</div>

[ <div>John Resig</div>, <div>Malcom John Sinclair</div> ]
```
```javascript
$("div:contains('John')")
```
###### 3.1.3.2 :empty
- 匹配所有不包含子元素或者文本的空元素
###### 3.1.3.3 :has(selector)
- 匹配含有选择器所匹配的元素的元素
###### 3.1.3.4 :parent
- <font>匹配含有子元素或者文本的元素</font>
##### 3.1.4 可见性
###### 3.1.4.1 :hidden
- 匹配所有不可见元素，或者type为hidden的元素
###### 3.1.4.2 :visible
- 匹配所有的可见元素
##### 3.1.5 与对应的属性匹配的元素
###### 3.1.5.1 [attribute]
- 匹配包含给定属性的元素
###### 3.1.5.2 [attribute=value]
- 匹配给定的属性是某个特定值的元素
###### 3.1.5.3 [attribute!=value]
- 匹配所有不含有指定的属性，或者属性不等于特定值的元素。
```javascript
此选择器等价于 :not([attr=value]) 要匹配含有特定属性但不等于特定值的元素，请使用[attr]:not([attr=value])
```
###### 3.1.5.4 [attribute^=value]
- 匹配给定的属性是以某些值开始的元素
###### 3.1.5.5 [attribute$=value]
- 匹配给定的属性是以某些值结尾的元素
###### 3.1.5.6 [attribute*=value]
- 匹配给定的属性是以包含某些值的元素
###### 3.1.5.7 [attrSel1][attrSel2][attrSelN]
- 复合属性选择器，需要同时满足多个条件时使用。
```html 
<input id="man-news" name="man-news" />
<input name="milkman" />
<input id="letterman" name="new-letterman" />
<input name="newmilk" />

[ <input id="letterman" name="new-letterman" /> ]
```
```javascript
$("input[id][name$='man']")
```
##### 3.1.6 子元素
###### 3.1.6.1 :first-child
- 第一个子元素
###### 3.1.6.2 :first-of-type
- 第一个具有xx类型的子元素（前面需要绑定对应的类型）
###### 3.1.6.3 :last-child
- 最后一个子元素
###### 3.1.6.4 :last-of-type
- 最后一个具有xx类型的子元素（前面需要绑定对应的类型）
###### 3.1.6.5 :nth-child()
- 第n个子元素
- 具有某些规律的子元素
- <font>:nth-child从1开始的，而:eq()是从0算起的！</font>
###### 3.1.6.6 :nth-last-child()
- 倒数第n个子元素
- 具有某些规律的倒数第n个子元素
###### 3.1.6.7 :nth-of-type()
- 第n个xx类型的子元素
- 具有某些规律的xx类型的子元素
###### 3.1.6.8 :nth-last-of-type()
- 倒数第n个子元素
- 具有某些规律的倒数第n个子元素
###### 3.1.6.9 :only-child
- 如果某个元素是父元素中唯一的子元素，那将会被匹配
###### 3.1.6.10 :only-of-type
- 选择所有没有兄弟元素，且具有相同的元素名称的元素。
##### 3.1.7 与表单元素有关的匹配方法
###### 3.1.7.1 :input
- 匹配所有 input, textarea, select 和 button 元素
###### 3.1.7.2 :text
- 匹配类型为text的input元素
###### 3.1.7.3 :password
- 匹配类型为password的input元素
###### 3.1.7.4 :radio
- 匹配类型为radio的input元素
###### 3.1.7.5 :checkbox
- 匹配类型为checkbox的input元素
###### 3.1.7.6 :submit
- 匹配类型为submit的input元素和button元素
  - button元素默认为submit类型
###### 3.1.7.7 :image
- 匹配类型为image的input元素
###### 3.1.7.8 :reset
- 匹配类型为reset的input元素
###### 3.1.7.9 :button
- 匹配类型为button的input元素或者button元素
###### 3.1.7.10 :file
- 匹配类型为file的input元素
###### 3.1.7.11 :enabled
- 匹配所有可用元素
###### 3.1.7.10 :disabled
- 匹配所有不可用元素
###### 3.1.7.11 :checked
- 匹配所有被选中的元素
###### 3.1.7.12 :selected
- 匹配select中被选中的元素



#### 3.1.2 jQuery对象的的隐式迭代
- 当jQuery对象不是单个对象且此时针对该对象有函数被调用
  - jQuery会默认把匹配的所有元素内部及逆行遍历循环，给每一个元素做相同的操作
#### 3.2.1 利用以上的元素对象的获取实现上下拉功能
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        ul, li {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .warp {
            width: 1000px;
            margin: 0 auto;
            text-align: center;
        }
        .warp>li {
            float: left;
            width: 100px;
        }
        .warp>li ul{
            display: none;
        }
    </style>
    <script src="../jquery/jquery.js"></script>
</head>
<body>
    <ul class="warp">
        <li>
            <a href="javascipt:;">新浪</a>
            <ul>
                <li>文本1</li>
                <li>文本2</li>
                <li>文本3</li>
            </ul>
        </li>
        <li>
            <a href="javascipt:;">博客</a>
            <ul>
                <li>文本1</li>
                <li>文本2</li>
                <li>文本3</li>
            </ul>
        </li>
    </ul>
    <script>
        $('.warp>li').mouseover(function() {
            // $(this) jQuery的当前元素，不需要加引号
            // show()显示元素，hide()隐藏元素
            $(this).children('ul').show();
        })
        $('.warp>li').mouseout(function() {
            $(this).children('ul').hide();
        })
    </script>
</body>
</html>
```
### 3.2 jQuery中对选中的jQuery对象的基本属性和方法
#### 3.2.1  jQueryEle.each(callback)
- 对于每个匹配的元素所要执行的函数
#### 3.2.2  jQueryEle.length
- 相当于jQueryEle.size()
- 返回选中的元素的个数
#### 3.2.3  jQueryEle.selector
- 以字符串的形式返回选择器内容
#### 3.2.4 jQueryEle.context
- 返回该元素的DOM节点
#### 3.2.5 jQueryEle.get(index)
- 相当于jQueryEle[ index ]，eq(index)
- 返回第index个元素
#### 3.2.6 jQueryEle.index([selector|element])
- 搜索匹配的元素，并返回相应元素的索引值，从0开始计数。返回第一个匹配到的元素的下标
- 参数
  - selector 一个选择器，代表一个jQuery对象，将会从这个对象中查找元素。
  - element 获得 index 位置的元素。<font color="red">可以是 DOM 元素或 jQuery 选择器。</font>
### 3.3 jQuery操作属性节点以及属性
- 属性和属性节点
  - 属性
    - 对象身上保存的变量就是属性
    - 在dom中指的是disabled, checked等属性
  - 属性节点
    - <font color="red">在html代码时，在html的标签中添加的属性</font>
- 任何对象都有属性，但是只有dom对象有属性节点
#### 3.3.1 jQueryEle.attr(name|properties|key,value|fn)
- 设置或返回被选元素的属性值。
- 参数
  - name  String
    - 属性名称
  - properties object
    - 作为属性的“名/值对”对象
  - key,valueString,Object
    - 属性名称，属性值
  - key,function(index, attr)   String,Function
    - 属性名称。
    - 返回属性值的函数,第一个参数为当前元素的索引值，第二个参数为原先的属性值。
- 注意点
   - 当只采用获取时，只会返回第一个元素指定的属性节点的值
   - 如果是设置值，则会将所有找到的元素的属性节点的值进行设置
    - 设置的属性节点不存在，则系统会新增
#### 3.3.2 jQueryEle.removeAttr(name:string)
- 从每一个匹配的元素中删除一个属性
- 若想要删除多份，只需要在两个属性中间增加一个空格即可
#### 3.3.3 jQueryEle.prop((name|properties|key,value|fn)
- 获取在匹配的元素集中的第一个元素的属性值
- 用法和上面的方法类似
#### 3.3.4 jQueryEle.removeProp(name:string)
- 用来删除由.prop()方法设置的属性集
- 注意
  - prop不仅可以用来操作属性，也可以用来操作属性节点
  - 返回值为true和false的属性，使用prop
    - checked, disabled, selected
#### 3.3.5 jQueryEle.addClass(class|fn)
- 为每个匹配的元素添加指定的类名
- 参数
  - class   String
    - 一个或多个要添加到元素中的CSS类名，请用空格分开
  - function(index, class)  Function
    - 此函数必须返回一个或多个空格分隔的class名。接受两个参数，index参数为对象在这个集合中的索引值，class参数为这个对象原先的class属性值。
- 给li加上不同的class(应用)
```html
<ul>
      <li>Hello</li>
      <li>Hello</li>
      <li>Hello</li>
</ul>
```
```javascript
$('ul li:last').addClass(function() {
  return 'item-' + $(this).index();
});
```
#### 3.3.6 jQueryEle.removeClass([class|fn])
- 从所有匹配的元素中删除全部或者指定的类。
- 参数
  - class   String
    - 一个或多个要添加到元素中的CSS类名，请用空格分开
  - function(index, class)  Function
    - 此函数必须返回一个或多个空格分隔的class名。接受两个参数，index参数为对象在这个集合中的索引值，class参数为这个对象原先的class属性值。
#### 3.3.7 jQueryEle.toggleClass(class|fn[,sw])
- 如果存在（不存在）就删除（添加）一个类。
- class String
  - CSS类名
- class,switch  String,Boolean
  - 要切换的CSS类名.
  - 用于决定元素是否包含class的布尔值。
- function(index, class,switch)[, switch]) Function,Boolean
  - 用来返回在匹配的元素集合中的每个元素上用来切换的样式类名的一个函数。接收元素的索引位置和元素旧的样式类作为参数。
  - 一个用来判断样式类添加还是移除的 boolean 值。
- 根据counter来决定切换为true或者false
```javascript
 var count = 0;
  $("p").click(function(){
      $(this).toggleClass("highlight", count++ % 3 == 0);
  });
```
- 根据父元素来设置class属性
```javascript
$('div.foo').toggleClass(function() {
  if ($(this).parent().is('.bar') {
    return 'happy';
  } else {
    return 'sad';
  }
});
```
### 3.4 jQuery是设置css样式
#### 3.4.1 jQueryEle.css(attr)
- 参数只写属性名，则是返回属性值
```javascript
    jQueryEle.css(attr) 
    // 属性必须加上引号
```
#### 3.4.2 jQueryEle.css(attr, style)
- 设置一组样式
```javascript
    jQueryEle.css(attr,style) 
    // 属性必须加上引号
```
##### 3.3.3 .css({attr: style...})
- 参数可以是对象形式，用于设置样式
- 如果是复合属性，必须使用驼峰的方法
```javascript
    $(selector).css({attr1: style1, attr2: style2}) 
    // 属性可以不用加上引号
```
#### 3.4.3 jQueryEle.css({attr: style...})
```javascript
   jQueryEle.css({attr1: style1, attr2: style2}) 
```
#### 3.4.4 实现多选一的功能
- 利用了jQuery对象的隐式迭代
- 给当前元素设置样式，其他的兄弟元素清除样式
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="../jquery/jquery.js"></script>
</head>
<body>
    <button>按钮</button>
    <button>按钮</button>
    <button>按钮</button>
    <button>按钮</button>
    <button>按钮</button>
    <button>按钮</button>
    <button>按钮</button>
    <button>按钮</button>
    <script>
        // 实现点击的按钮为背景变红，其他不变
        // 隐式迭代 该所有按钮都绑定了click事件
        $('button').click(function() {
            $(this).css("background-color", "red");
            // 其余兄弟去掉背景颜色，隐式迭代
            $(this).siblings('button').css("background-color", "");
        })
    </script>
</body>

</html>
```
#### 3.4.5 可以直接用参数获得的特殊的css值
- 返回值都是纯数字
- 位置
##### 3.4.5.1 jQueryEle.offset([coordinates])
- 获取匹配元素在当前窗口的相对偏移  - 返回一个对象{left:~, top:~}。
- 若使用coordinates则可以用于设置
```javascript
// 获取当前元素相对于窗口的偏移量
var p = $("p:last");
var offset = p.offset();
p.html( "left: " + offset.left + ", top: " + offset.top );

// 设置当前元素相对于窗口的偏移量
$("p:last").offset({ top: 10, left: 30 });
```
##### 3.4.5.2 jQueryEle.position()
- 获取匹配元素相对父元素的偏移。（返回一个包含left，top的属性的对象）
  - 注意是没有单位的且不能设置
```javascript
var p = $("p:first");
var position = p.position();
$("p:last").html( "left: " + position.left + ", top: " + position.top );
```

##### 3.4.5.3 jQueryEle.scrollTop([val])
- 获取或设置匹配元素相对于滚动条顶部的偏移

##### 3.4.5.4 jQueryEle.scrollLeft([val])
- 获取或设置匹配元素相对于滚动条左侧的偏移

- 位置
##### 3.5.5.1 jQueryEle.height|width(val|fn)
- 设置或者获取当前元素的内容的宽度
- fn参数的方法和上面的类似
##### 3.5.5.2 jQueryEle.innerHeight|innerWidth
- 获取当前元素的内容+padding的宽度或高度
##### 3.5.5.3 jQueryEle.outerHeight|outerHeight([options])
- 获取当前元素的内容+padding[ +border ]的宽度或高度
- option 
  - 设置为 true 时，计算边距在内。
### 3.5 jQuery与内部元素相关的函数和方法
#### 3.5.1 jQueryEle.html([val|fn])
- 取得或者设置第一个匹配元素的html内容
- 参数
  - val String
    - 用于设定HTML内容的值
  - function(index, html) Function
    - 此函数返回一个HTML字符串。接受两个参数，index为元素在集合中的索引位置，html为原先的HTML值。
#### 3.5.2 jQueryEle.text([val|fn])
- 取得匹配元素的第一个的文本内容。
- 参数用法和前面的相同
#### 3.5.3 jQueryEle.val([val|fn|arr])
- 获得第一个匹配元素的value属性的值
  - 可以返回任意元素的值了。包括select。如果多选，将返回一个数组，其包含所选的值。。
- 特殊参数
  - array
    - 用于设定要被选中的值
### 3.4 jQuery的动画效果
- 问题1：快速点击会造成多个动画执行
  - 原因：多次点击会造成动画排队的现象
  - 解决方法：在执行动画前使用stop()函数
    - 结束上一次动画
```javascript
    $(this).stop().动画效果
```
- 实际上是改变display属性
- jQuery中如果需要执行动画，建议在执行动画之前先调用stop方法，然后再执行动画
- 使用链式调用动画函数来实现执行完的调用
#### 3.4.1 实现元素的显示和隐藏的动画效果
##### 3.4.1.1 实现元素的显示和隐藏
###### 3.4.1.1.1 jQueryEle.show([speed], [easing], [fn]])
- 参数省略时，无动画直接显示
- 参数
  - speed
    - 三种预定速度之一的字符串('slow', 'normal', 'fast')
    - 数字（默认单位ms）
  - easing：用来指定切换效果，默认是"swing", 
  - 回调函数，在动画执行的函数，每个元素执行一次
###### 3.4.1.1.2 jQueryEle.hide([speed], [easing], [fn])
- 参数省略时，无动画直接显示
- 参数
  - speed
    - 三种预定速度之一的字符串('slow', 'normal', 'fast')
    - 数字（默认单位ms）
  - easing：用来指定切换效果，默认是"swing", 
  - 回调函数，在动画执行的函数，每个元素执行一次
###### 3.4.1.1.3 jQueryEle.toggle([speed], [easing], [fn])
- 参数省略时，无则显示，有则隐藏
- 参数
  - speed
    - 三种预定速度之一的字符串('slow', 'normal', 'fast')
    - 数字（默认单位ms）
  - easing：用来指定切换效果，默认是"swing", 
  - 回调函数，在动画执行的函数，每个元素执行一次
##### 3.4.1.2 实现滑动效果
###### 3.4.1.2.1 jQueryEle.slideDown([speed],[easing],[fn])
- 向下滑动
- 参数省略时，无动画直接显示
- 参数
  - speed
    - 三种预定速度之一的字符串('slow', 'normal', 'fast')
    - 数字（默认单位ms）
  - easing：用来指定切换效果，默认是"swing", 
  - 回调函数，在动画执行的函数，每个元素执行一次
###### 3.4.1.2.2 jQueryEle.slideUp([speed],[easing],[fn])
- 向上滑动
- 参数省略时，无动画直接显示
- 参数
  - speed
    - 三种预定速度之一的字符串('slow', 'normal', 'fast')
    - 数字（默认单位ms）
  - easing：用来指定切换效果，默认是"swing", 
  - 回调函数，在动画执行的函数，每个元素执行一次
###### 3.4.1.2.3 jQueryEle.slideToggle([speed],[easing],[fn])
- 滑动切换
- 参数省略时，无动画直接显示
- 参数
  - speed
    - 三种预定速度之一的字符串('slow', 'normal', 'fast')
    - 数字（默认单位ms）
  - easing：用来指定切换效果，默认是"swing", 
  - 回调函数，在动画执行的函数，每个元素执行一次
##### 3.4.1.3 淡入淡出效果
###### 3.4.1.3.1 jQueryEle.fadeIn([speed],[easing],[fn])
- 透明度慢慢改变最后显示（0-1）
- 参数省略时，无动画直接显示
- 参数
  - speed
    - 三种预定速度之一的字符串('slow', 'normal', 'fast')
    - 数字（默认单位ms）
  - easing：用来指定切换效果，默认是"swing", 
  - 回调函数，在动画执行的函数，每个元素执行一次
###### 3.4.1.3.2 jQueryEle.fadeOut([speed],[easing],[fn])
- 透明度慢慢改变最后消失fade
- 参数省略时，无动画直接显示
- 参数
  - speed
    - 三种预定速度之一的字符串('slow', 'normal', 'fast')
    - 数字（默认单位ms）
  - easing：用来指定切换效果，默认是"swing", 
  - 回调函数，在动画执行的函数，每个元素执行一次
###### 3.4.1.3.3 jQueryEle.fadeToggle([speed],[easing],[fn])
- 淡入淡出进行切换
- 参数省略时，无动画直接显示
- 参数
  - speed
    - 三种预定速度之一的字符串('slow', 'normal', 'fast')
    - 数字（默认单位ms）
  - easing：用来指定切换效果，默认是"swing", 
  - 回调函数，在动画执行的函数，每个元素执行一次
###### 3.4.1.3.4 jQueryEle.fadeTo([speed], opacity, [easing],[fn])
- 渐进到指定的透明度
- opacity：取值为0-1，必须写
- 经常用于设置蒙版
 
#### 3.4.2 自定义元素的动画行为animate
- 若是放在同一个对象之中，则会同时进行动画的效果
- 若是编写的顺序不同，则会按照代码的位置来进行执行
- 支持链式编程
##### 3.4.2.1 jQueryEle.animate(params, [speed], [easing], [fn])
- 参数  
  - params
    - 想要更改的属性，以对象的形式传递
    - 必须写
    - 属性值为更改的值
    - 累加属性
    - 关键字属性
      - hide
      - toggle
  - speed
    - 三种预定速度之一的字符串('slow', 'normal', 'fast')
    - 数字（默认单位ms）
  - easing：用来指定切换效果，默认是"swing", 
    - linear  
      - 匀速的效果
    - swing
      - 缓动的效果（开始慢，中间块，结果慢）
  - 回调函数，在动画执行的函数，每个元素执行一次 
##### 3.4.2.2 手风琴效果的实现
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="../jquery/jquery.js"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
        } 
        ul, li {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        img {
            vertical-align: center;
        }
        .nav {
            width: 732px;
            height: 98px;
            background-color: #eaeaea;
            padding: 8px 20px 0px 20px;
            margin: 0 auto;
        }
        .nav li {
            float: left;
            padding-top: 20px;
            margin-right: 10px;
            position: relative;
            height: 69px;
            width: 69px;
        }
        .nav li .small {
            position: absolute;
            left: 0;
        }
        .nav li .large {
            display: none;
        }
        .nav li.active .small {
            display: none;
        }
        .nav li.active .large {
            display: block;
        }
    </style>
</head>
<body>
    <ul class="nav">
        <!-- 
            解决当large图片不显示，small图片使用相对定位脱离标准流导致li的宽度高度变为0的方法
                    - 方法1：固定li的宽度和高度，给第一个即的宽度赋值为224px，由于动画效果会给width赋值所以不需要给其他赋值
                    - 方法2：触发
         -->
        <li class="active" style="width: 224px;">
            <a href="javascript:;" class="active">
                <img src="../img/1.jpg" width="69px" height = '69px' alt="" class="small">
                <img src="../img/1_large.png" alt="" class="large">
            </a>
        </li>
        <li>
            <a href="javascript:;" class="active">
                <img src="../img/1.jpg" width="69px" height = '69px' alt="" class="small">
                <img src="../img/1_large.png" alt="" class="large">
            </a>
        </li>
        <li>
            <a href="javascript:;" class="active">
                <img src="../img/1.jpg" width="69px" height = '69px' alt="" class="small">
                <img src="../img/1_large.png" alt="" class="large">
            </a>
        </li>
        <li>
            <a href="javascript:;" class="active">
                <img src="../img/1.jpg" width="69px" height = '69px' alt="" class="small">
                <img src="../img/1_large.png" alt="" class="large">
            </a>
        </li>
        <li>
            <a href="javascript:;" class="active">
                <img src="../img/1.jpg" width="69px" height = '69px' alt="" class="small">
                <img src="../img/1_large.png" alt="" class="large">
            </a>
        </li>
        <li>
            <a href="javascript:;" class="active">
                <img src="../img/1.jpg" width="69px" height = '69px' alt="" class="small">
                <img src="../img/1_large.png" alt="" class="large">
            </a>
        </li>
    </ul>
    <script>
        $(function() {
            // 鼠标位于li上，有两步操作：
            $('.nav li').mouseover(function() {
                // 1. 当前li的宽度变为224px，同时里面的小图片淡出，大图片淡入
                $(this).stop().animate({
                    width: '224px'
                }, 200).find('.small').stop().fadeOut().siblings('.large').stop().fadeIn();
                // 2. 其余的兄弟li宽度变为69px，小图片淡入，大图片淡出
                $(this).siblings('li').stop().animate({
                    width: '69px'
                }, 200).find('.small').stop().fadeIn().siblings('.large').stop().fadeOut();
            })
        })
    </script>
</body>
</html>
```
- 解决当large图片不显示，small图片使用相对定位脱离标准流导致li的宽度高度变为0的方法
  -  方法1：固定li的宽度和高度，给第一个即的宽度赋值为224px，由于动画效果会给width赋值所以不需要给其他赋值

#### 3.4.3 一些控制动画行为的函数
##### 3.4.3.1 jQueryEle.stop([clearQueue][, jumpToEnd])
- 停止所有在指定元素上正在运行的动画。
- 不传参(stop())或者(stop(false))
  - 立即停止当前的动画，继续执行后面的动画
- stop(true)
  - 立即停止当前的动画和后续所有的动画
- stop(false, true)
  - 立即完成当前的动画，继续执行后续的动画
- stop(true, true)
  - 立即完成当前的动画，并且停止执行后续的动画
- 参数
  - clearQueue:如果设置成true，则清空队列。可以立即结束动画。
  - gotoEnd:让当前正在执行的动画立即完成，并且重设show和hide的原始样式，调用回调函数等。
```javascript
// 开始动画
$("#go").click(function(){
  $(".block").animate({left: '+200px'}, 5000);
});

// 当点击按钮后停止动画
$("#stop").click(function(){
  $(".block").stop();
});
```
##### 3.4.4.2 jQueryEle.delay(duration[, queueName])
- 设置一个延时来推迟执行队列中之后的项目
- 参数
  - duration:延时时间，单位：毫秒
  - queueName:队列名词，默认是Fx，动画队列。
```javascript
$('#foo').slideUp(300).delay(800).fadeIn(400);
```
##### 3.4.4.3 jQueryEle.finish([queue])
- 停止当前正在运行的动画，删除所有排队的动画，并完成匹配元素所有的动画。
```javascript
$("#complete").click(function(){
  $("div").finish();
});
```
#### 3.5 jQuery的元素固有属性的操作
##### 3.5.1 获取元素的固有属性
```javascript
    jQueryEle.prop(attr)
```
##### 3.5.2 设置元素的固有属性
```javascript
    jQueryEle.prop(attr, style)
```
##### 3.5.3 获取自定义属性
- 无法通过上面的函数获取通过
```javascript
    jQueryEle.attr(attr);
```
##### 3.5.4 添加自定义属性
```javascript
    jQueryEle.attr(attr, style);
```
##### 3.5.5 获取元素内存的属性
- 无法在dom中看到对应的属性
- 可以获取在h5中对应的属性data-，无需加上data-，返回的是数字型
```javascript
    jQueryEle.data(attr);
```
##### 3.5.6 在元素内存中添加属性
```javascript
    jQueryEle.data(attr, style);
```
##### 3.5.6 全选框的实现
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="../jquery/jquery.js"></script>
</head>
<body>
    <!-- 
        1. 点击全选的时候，所有的选项都被选到，当再一次点击全选是，变为全不选
        2. 当所有的选项都被选到时，全选也被选到
     -->
    <div class="nav">
        <input type="checkbox" name="" id="selectAll1" class="selectAll"><label for="selectAll">全选</label>
    </div>
    <div class="items">
        <input type="checkbox" name="" id="good1"><label for="good1">商品一</label>
        <input type="checkbox" name="" id="good2"><label for="good2">商品二</label>
        <input type="checkbox" name="" id="good3"><label for="good3">商品三</label>
    </div>
    <div class="footer">
        <!-- 选择器选择id的时候，由于id是唯一的，所以只会得到一个 -->
        <input type="checkbox" name="" id="selectAll2" class="selectAll"><label for="selectAll">全选</label>
    </div>
    <script>
        /*
        $('.nav #selectAll').click(function(){
            // if($(this).prop('checked')) {
            //     $('.items input').prop("checked", true);
            //     $('.footer #selectAll').prop("checked", true);
            // }
            // else {
            //     $('.items input').prop("checked", false);
            //     $('.footer #selectAll').prop("checked", false);
            // }
            // 按钮的值是跟随选定按钮的值的
            $('.items input').prop("checked", $(this).prop('checked'));
            $('.footer #selectAll').prop("checked", $(this).prop('checked'));
        })
        $('.footer #selectAll').click(function(){
            $('.items input').prop("checked", $(this).prop('checked'));
            $('.nav #selectAll').prop("checked", $(this).prop('checked'));
        })
        */
        //法2: 其他同样的按钮也状态相同
        
        $('.selectAll').change(function() {
            $(".items input, .selectAll").prop("checked", $(this).prop("checked"))
        })
        $('.items input').change(function() {
            // :checked可以查看被选中的元素
            if($(".items input:checked").length === $(".items input").length)
                $(".selectAll").prop("checked", true);
            else
                $(".selectAll").prop("checked", false);
        })
    </script>
</body>
</html>
```
#### 3.6 jQuery的对象元素的内容
- 参数必须是string类型，返回的也是string类型
##### 3.6.1 获取对象元素的内容
- 会输出全部的内容包括标签
```javascript
    jQueryEle.html();
```
##### 3.6.2 修改对象元素的内容
```javascript
    jQueryEle.html(content);
```
##### 3.6.3 获取对象元素的文本
```javascript
    jQueryEle.text();
```
##### 3.6.4 修改对象元素的文本
```javascript
    jQueryEle.text(content);
```
##### 3.6.5 获取对象元素的value值
```javascript
    jQueryEle.val();
```
##### 3.6.6 修改对象元素的value值
```javascript
    jQueryEle.val(content);
```
#### 3.7 jQuery的对象元素的操作
##### 3.7.1 元素的遍历
- 虽然有隐式迭代，但是有时后需要对每一个元素做不同的操作
###### 3.7.1.1 each(function(index, domEle) {})
```javascript
    jQueryEle.each(function(index, domEle) {})
```
- 注意里面的每一对象是domELe，要是用jquery方法必须先进行转化

###### 3.7.1.2 $.each(jQueryEle, function(index, domEle) {})
```javascript
    $.each(jQueryEle, function(index, domEle) {})
```
- 拓展：
  - jQueryEle不仅仅可以是jquery的对象，普通的对象以及数组都是可以进行操作的
##### 3.7.2 元素的创建
###### 3.7.2.1 $(content)
- 创建一个新的元素
```javascript
    let jQueryEle = $(content);
```
##### 3.7.3 元素的添加
###### 3.7.3.1 fatherObject.append(sonObject)
- 内部添加,添加到fatherObject元素的最后位置
```javascript
    fatherObject.append(sonObject)
```
###### 3.7.3.2 fatherObject.prepend(sonObject)
- 内部添加,添加到fatherObject元素的最前位置
```javascript
    fatherObject.prepend(sonObject)
```
###### 3.7.3.3 brotherObject.before(jQueryEle)
- 外部添加, 添加到当前brotherObject元素的前面一位
```javascript
    brotherObject.before(jQueryEle)
```
##### 3.7.4 元素的删除
###### 3.7.4.1 juqueryObject.remove()
- 自杀
```javascript
    juqueryObject.remove()
```
###### 3.7.4.2 fatherObject.empty()
- 删除元素内部的所有子节点
- 相当于fatherObject.html("");
```javascript
    fatherObject.empty()
```
###### 3.7.4.3 brotherObject.after(jQueryEle)
- 外部添加, 添加到当前brotherObject元素的后面一位
```javascript
    brotherObject.after(jQueryEle)
```

#### 3.8 jQuery的对象方法总结
##### 3.8.0 length
- 被选择器选中元素的个数
##### 3.8.1 $(this)
##### 3.8.2 index() 
- 获得当前元素的序列
```javascript
    $(selector).event(function() {
        let index = $(this).index();
    })
```
##### 3.8.3 show()
- 显示该元素对象，并返回当前对象
##### 3.8.4 hide()
- 隐藏元素对象，并返回当前对象
##### 3.8.5 addClass(className)
- 给对象元素添加类名，并返回当前对象
  - 注意类名是字符串，所以不用加.
##### 3.8.6 removeClass(className)
- 给对象元素删除类名，并返回当前对象
##### 3.8.6 toggleClass(className) 
- 切换类，有则加，没有则去掉，并返回当前对象
##### 3.8.7 hover(inFunc,[outFunc])
- 1. 切换事件
- 2. 当有两个参数时
  - inFunc对应mouseenter事件的触发函数
  - outFunc对应mouseleave事件的触发函数
- 3. 当只有一个参数
  - mouseenter和mouseleave事件触发同一个函数
#### 3.10 jQuery的常见触发事件
#### change(func)
- 当元素对象发生改变是触发func

### 3.5 jQuery的元素数据缓存(增删改查)
#### 3.5.1 jQueryEle.data(key[, value])
- 在元素上存放或读取数据,返回jQuery对象。
- 当参数只有一个key 
  - 则读取对于key中的数据
- 当参数有两个，则对于key进行设置
  - value可以是任何合法类型
- <font color="red">与html对应的是"data-"</font>
```html
<div data-test="this is test" ></div>

$("div").data("test"); //this is test!;
```
#### 3.5.2 jQueryEle.removeData([name|list])
- 在元素上移除存放的数据
- 参数
  - name
    - 存储的数据名
  - list
    - 移除数组或以空格分开的字符串
## 4 jquery的事件相关的操作
- 和js拥有类似的事件以及相应的事件属性
### 4.1 jquery事件绑定
#### 4.1.1 单个事件的绑定
##### 4.1.1.1 jQueryEle.eventName(function() {})
```javascript
    jQueryEle.eventName(function() {})
```
#### 4.1.2 多个事件的绑定
##### 4.1.2.1 jQueryEle.once(events, [selector], fn)
- 用法和on类似,但是只是触发一次响应函数
- 参数
  - events:一个或多个用空格分割的事件类型(以对象形式)
  - selector: 元素的子元素选择器
  - fn: 回调函数
##### 4.1.2.2 jQueryEle.on(events[, selector][, data],fn)
- 参数
  - events:一个或多个用空格分割的事件类型(以对象形式)
  - selector: <font color="red">元素的子元素选择器(用于实现事件的委派)</font>
  - fn: 回调函数
- 使用方法
  - 写法1: events以对象的形式传入
    - {event1: func1, event2: func2 ...}
```javascript
    $('div').on({
        click: function() {
            $(this).css("backgroundColor", "purple");
        },
        mouseover: function() {
            $(this).css("backgroundColor", "skyblue");
        }
    })
```
  - 写法二: 若触发的函数相同时, 可以直接使用字符串加空格的写法
    - on("event1, event2...", func)
```javascript
    $('div').on("mouseover mouseleave", function() {
        $(this).toggleClass("active");
    })
```
  - 写法三: 利用on实现事件的委派
    - on("eventName", selector, func)
      - selector为this对象的触发元素,func的this是指向元素对象的
```javascript
    $("ul").on("click", "li", function() {
        alert(11);
    })
```
- click绑定的是ul元素, 但是触发的对象是ul中的li(由于事件冒泡)
  - 写法四: 为动态创建的元素绑定动态事件
    - 利用事件的委派实现对新创建的动态元素绑定响应的事件
##### 4.1.2.3 微博发布页(重点关注事件委派的作用)
- 注意this指针的指向
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        ul, li {
            list-style: none;
        }
        a, textarea {
            outline: none;
        }
        .wrap {
            width: 600px;
            margin: 0 auto;
            background-color: #eaeaea;
            text-align: center;
            padding: 30px 0;
        }
        .wrap .content li a{
            float: right;
        }
        .wrap .content li {
            display: none;
        }
    </style>
    <script src="../jquery/jquery.js"></script>
</head>
<body>
    <div class="wrap">
        <strong>发布微博</strong>
        <textarea name="" id="input-content" cols="60" rows="20" style ="resize: none"></textarea>
        <button class="submit">发布</button>
        <ul class="content"></ul>
    </div>
    <script>
        $(function() {
            $(".wrap button.submit").click(function() {
                let content = $(this).siblings("#input-content").val();
                let liEle = $("<li></li>");
                liEle.html(content + "<a href='javascript:;'>删除</a>")
                // 如何实现缓缓下拉显示,可以先把他设置为display: none
                $(".wrap .content").append(liEle);
                liEle.stop().slideDown();
            })
            // 利用事件委派实现对新加入的元素绑定事件
            // 若没有使用回调函数,则对应的li并没有真正地被移除
            $(".wrap .content").on("click", "li a", function() {
                $(this).parent().slideUp(function() {
                    $(this).remove();
                })
            })
        })
    </script>
</body>
</html>
```
### 4.2 jquery事件的解绑
#### 4.2.1 jQueryEle.off()
- 解绑jQueryEle元素的所有事件
```javascript
    jQueryEle.off()
```
#### 4.2.2 jQueryEle.off(eventName[, selector])
- 解绑jQueryEle元素的eventName事件或事件委托
```javascript
    jQueryEle.off(eventName, [selector])
```
### 4.3 jquery自动触发事件
#### 4.3.1 jQueryEle.eventName()
- 自动触发eventName的事件
```javascript
    $("div").click();
```
#### 4.3.2 jQueryEle.trigger(eventName)
- 自动触发eventName的事件
- 特点：会触发冒泡事件，也会触发默认的事件
```javascript
    $("div").trigger("click");
```
- <font color="red">a元素使用trigger触发的特殊情况</font>

```javascript
  $("a").trigger("click")
// 由于trigger的机制的原因，并没有办法触发其默认的行为

// 解决方法：包裹一个子元素，并且用子元素进行触发
  $("span").trigger("click")
```
#### 4.3.3 jQueryEle.triggerHandler(eventName)
- 自动触发eventName的事件
- <font color="red">不会触发元素的冒泡行为和默认行为</font>
```javascript
    $("div").triggerHandler("click");
```
### 4.4 event事件的属性
#### 4.4.1 与触发的元素有关的
##### 4.4.1.1 eve.target
- 最初触发事件的DOM元素
##### 4.4.1.2 eve.currentTarget
- 冒泡阶段触发的DOM元素
##### 4.4.1.3 eve.delegateTarget
- 委派的DOM元素
##### 4.4.1.4 eve.relatedTarget
- 在事件中涉及的其它任何DOM元素。
对于 mouseout 事件，它指向被进入的元素；对于 mousein 事件，它指向被离开的元素。
##### 4.4.1.5 eve.data
#### 4.4.2 与冒泡事件的取消相关的
##### 4.4.2.1 eve.stopPropagation()
- 用于阻止事件的冒泡
  - 对于非使用on绑定的事件的函数，可以使用return false来阻止事件的冒泡
##### 4.4.2.2 eve.stopImmediateProgation()
- 阻止剩余的事件处理函数执行并且防止事件冒泡到DOM树上。
  - 即阻止所有事件的执行
##### 4.4.2.3 eve.isImmediatePropagation()
- 根据事件对象中是否调用过 event.stopImmediateProgation() 方法来返回一个布尔值。
##### 4.4.2.4 eve.isPropagationStopped()
- 根据事件对象中是否调用过 event.stopPropagation() 方法来返回一个布尔值。
#### 4.4.3 与默认事件的取消相关的
##### 4.4.3.1 eve.preventDefault()
- 阻止事件的默认行为
  - 对于非使用on绑定的事件的函数，可以使用return false来阻止事件的冒泡
##### 4.4.3.2 eve.isDefaultPrevented()
- 根据事件对象中是否调用过 event.preventDefault() 方法来返回一个布尔值。
#### 4.4.4 与鼠标的位置与键盘相关的
##### 4.4.4.1 eve.pageX
- 鼠标的位置相当于窗口的左边的位置
##### 4.4.4.2 eve.pageY
- 鼠标的位置相当于窗口的右边的位置
##### 4.4.4.3 eve.which
- 针对键盘和鼠标事件，这个属性能确定你到底按的是哪个键或按钮。
#### 4.4.5 与事件的属性有关
##### 4.4.5.1 eve.type
- 返回触发事件的名称
##### 4.4.5.2 eve.timeStamp
- 这个属性返回事件触发时距离1970年1月1日的毫秒数。
##### 4.4.5.3 eve.result
- 这个属性包含了当前事件事件最后触发的那个处理函数的返回值，除非值是 undefined 。
##### 4.4.5.4 eve.namespace
- 返回当前触发事件的命名空间
### 4.5 自定义事件
- 前提
  - 必须使用on的形式绑定触发的函数
  - 必须使用trigger来进行触发
```javascript
  $("div").on("myEventName", func(){});

  $("div").trigger("myEventName")
```
### 4.6 事件的委派
- 如果想要通过动态的形式来创建新的元素，且要为该元素绑定特定的事件，此时我们可以使用事件委派的方式为该元素绑定事件
- 前提
  - 绑定的元素必须在进入到入口函数前已经被创建的元素
- 在最新的jQuery中，已经可以直接使用on实现事件的委派
- 例子
```html

```
### 4.7 事件的命名空间
- 在绑定事件的时候，可以在事件名称的后面添加.userName来是该事件具有命名空间
- 若有命名空间的冒泡事件被触发
  - 有相同命名空间的父元素的冒泡事件会被触发，其他（包括没有命名空间）的父元素事件都不会被触发
- 若没有命名空间的冒泡事件被触发
  - 所以的父元素的冒泡事件都会被触发
## 5 jquery动态添加/删除/替换节点的方法
### 5.1 创建节点
- 使用jQuery的核心函数
### 5.2 内部插入
#### 5.2.1 append(content|fn)
- 向每个匹配的元素内部的最后面追加元素。
- 参数
  - content: 要追加到目标中的内容
  - function(index, html)
    - <font>返回一个HTML字符串</font>，用于追加到每一个匹配元素的里边。接受两个参数，index参数为对象在这个集合中的索引值，html参数为这个对象原先的html值。 
- 与后面的区别
  - content不相同，to的content是目标位置
#### 5.2.2 appendTo(content)
- 把所有匹配的元素追加到另一个指定的元素的内部的后面。
- 参数
  - content: 要追加的目标
#### 5.2.3 prepend(content|fn)
- - 向每个匹配的元素内部的最前面追加元素。
#### 5.2.4 prependTo(content)
- 把所有匹配的元素追加到另一个指定的元素的内部的前面
- 参数
  - content: 要追加的目标
### 5.3 外部插入
#### 5.3.1 after(content|fn)
- 在每个匹配的元素外部之后插入内容。
- 参数和前面的类似的效果
#### 5.3.2 insertAfter(content)
- 把所有匹配的元素插入到另一个指定的元素外部的后面。
#### 5.3.3 before(content|fn)
- 在每个匹配的元素外部之前插入内容。
- 参数和前面的类似的效果
#### 5.3.4 insertBefore(content)
- 把所有匹配的元素插入到另一个指定的元素外部的前面。
### 5.4 动态删除节点
#### 5.4.1 empty()
- <font color="red">删除匹配的元素集合中所有的子节点和内容，本身不会被删除</font>
#### 5.4.2 remove([expr])
- 从DOM中<font color="red">删除所有匹配的元素</font>。
  - 这个方法不会把匹配的元素从jQuery对象中删除，因而可以在将来再使用这些匹配的元素。但<font color="red">除了这个元素本身得以保留之外，其他的比如绑定的事件，附加的数据等都会被移除</font>
- expr
  - 用于指定特殊的某个当前对象
#### 5.4.3 detach([expr])
- 从DOM中<font color="red">删除所有匹配的元素</font>。
  - 这个方法不会把匹配的元素从jQuery对象中删除，因而可以在将来再使用这些匹配的元素。与remove()不同的是，所有绑定的事件、附加的数据等都会保留下来。
- expr
  - 用于指定特殊的某个当前对象
### 5.5 动态替换节点
#### 5.5.1 replaceWith(content|fn)
- 将所有匹配的元素替换成指定的HTML或DOM元素。
- 参数
  - content
    - 用于将匹配元素替换掉的内容
#### 5.5.2 replaceAll(selector)
- 用匹配的元素替换掉所有 selector匹配到的元素。
- 和前面的content方法相反
### 5.6 动态复制节点
#### 5.6.1 clone([Even[,deepEven]])
- 克隆匹配的DOM元素并且选中这些克隆的副本。
- 浅复制(false)
  - 浅复制只会复制元素，但是不会复制元素的事件
- 深复制(true)
  - 深复制会复制元素，也会复制元素的事件

## 5 jquery中的工具
### 5.1 浏览器及特性检测
#### 5.1.1 $.browser.version
- 浏览器渲染引擎版本号。
### 5.2 数组和对象操作
#### 5.2.1 $.each(object[, callback])（还能遍历对象）
- 会返回遍历的数组
- 用于遍历当前的数组或者对象（包含为数组）
  - 对于数组类似于forEach
    - 但forEach返回值为一个空数组
- 参数
  - object  需要遍历的对象或数组
  - callback  每个成员/元素执行的回调函数。
#### 5.2.2 $.map(arr|obj,callback)
- 将一个数组/对象（伪数组）中的元素转换到另一个数组/对象中。
- 类似于map函数，但是可以用于对象
#### 5.2.3 $.grep(array, callback[, invert])
- 返回一个经过过滤的新的数组
- 类似于filter函数
- 参数
  - array:待过滤数组。
  - callback:此函数将处理数组每个元素。第一个参数为当前元素，第二个参数而元素索引值。此函数应必须返回一个布尔值。
  - invert:如果 "invert" 为 false 或为设置，则函数返回数组中由过滤函数返回 true 的元素，当"invert" 为 true，则返回过滤函数中返回 false 的元素集。
#### 5.2.4 $.merge(first, second)
- 合并两个数组
#### 5.2.5 $.uniqueSort(array)
- $.uniqueSort()函数通过搜索的数组对象，排序数组，并移除任何重复的节点
  - 如果一个节点和已经在数组中的节点完全相同，那么它被认为是重复的; 两个不同的节点具有相同的属性是被认为不重复的。
- 注意
  - 此功能只适用于普通的JavaScript DOM元素的数组，主要是jQuery内部使用。
#### 5.2.6 $.extend([deep, ]target, object1[, objectN]
- 用一个或多个其他对象来扩展一个对象，返回被扩展的对象。
- 参数
  - deep:如果设为true，则递归合并。
  - target:待修改对象。
  - object1:待合并到第一个对象的对象。
  - objectN:待合并到第一个对象的对象。
- 应用
  - 深复制/浅复制
#### 5.2.7 $.inArray(value,array[, fromIndex])
- 判断某个value是否在array中
- 参数
  - value: 要判断的元素值
  - array: 要查询的数组
  - fromIndex: 开始的下标
#### 5.2.8 jQueryEle.toArray()
- 将DOM元素转化为一个数组
#### 5.2.9 $.makeArray(obj)
- 将类数组转化为数组
#### 5.2.10 $.when(deferreds)
- 参数
  - deferreds
    - 异步函数
#### 5.2.11 $.proxy()
- 返回改变了作用域的函数
```javascript
// 用法1
  $.proxy(func, context)
```
- 参数
  - func: 将要改变作用域的函数
  - context：一个object，那个函数的作用域会被设置到这个context上来。
```javascript
// 用法2
  $.proxy(context, name)
```
- 参数
  - context: 一个object，那个函数的作用域会被设置到这个object上来。
  - name: 改变上下文中的函数名(这个函数必须是前一个参数 'context' 对象的属性)
```javascript
var obj = {
  name: "John",
  test: function() {
    alert( this.name );
    $("#test").unbind("click", obj.test);
  }
};

$("#test").click( jQuery.proxy( obj, "test" ) );

// 以下代码跟上面那句是等价的:
$("#test").click( jQuery.proxy( obj.test, obj ) );

// 可以与单独执行下面这句做个比较。对象是window
$("#test").click( obj.test );
```
### 5.3 一些基本函数
#### 5.3.1 $.contains(container, contained)
- 一个DOM节点是否包含另一个DOM节点
```javascript
$.contains(document.documentElement, document.body); // true
$.contains(document.body, document.documentElement); // false
```
#### 5.3.2 $.isEmptyObject(obj)
- 判断是不是一个空对象
```javascript
$.isEmptyObject({}) // true
$.isEmptyObject({ foo: "bar" }) // false
```
#### 5.3.3 $.isNumeric(value)
- 确定是不是一个数字
```javascript
$.isNumeric("-10");  // true
$.isNumeric(16);     // true
$.isNumeric(0xFF);   // true
$.isNumeric("0xFF"); // true
$.isNumeric("8e5");  // true (exponential notation string)
$.isNumeric(3.1415); // true
$.isNumeric(+10);    // true
$.isNumeric(0144);   // true (octal integer literal)
$.isNumeric("");     // false
$.isNumeric({});     // false (empty object)
$.isNumeric(NaN);    // false
$.isNumeric(null);   // false
$.isNumeric(true);   // false
$.isNumeric(Infinity); // false
$.isNumeric(undefined); // false
    
```
#### 5.3.4 $.isPlainObject(obj)
- 测试对象是否是纯粹的对象（通过 "{}" 或者 "new Object" 创建的）。
#### 5.3.5 $.trim(str)
- 返回一个去掉字符串起始和结尾的空格的字符串
#### 5.3.6 $.param(obj[, traditional])
- 将表单元素数组或者对象序列化
```javascript
var myObject = {
  a: {
    one: 1, 
    two: 2, 
    three: 3
  }, 
  b: [1,2,3]
};
var recursiveEncoded = $.param(myObject);
var recursiveDecoded = decodeURIComponent($.param(myObject));

alert(recursiveEncoded);
alert(recursiveDecoded);
//a%5Bone%5D=1&a%5Btwo%5D=2&a%5Bthree%5D=3&b%5B%5D=1&b%5B%5D=2&b%5B%5D=3
//a[one]=1&a[two]=2&a[three]=3&b[]=1&b[]=2&b[]=3

var shallowEncoded = $.param(myObject, true);
var shallowDecoded = decodeURIComponent(shallowEncoded);

alert(shallowEncoded);
alert(shallowDecoded);
//a=%5Bobject+Object%5D&b=1&b=2&b=3
//a=[object+Object]&b=1&b=2&b=3
```
## 6 jquery的ajax请求
### 6.0 $.ajaxSetup([options])
- 设置全局 AJAX 默认选项。
```javascript
$.ajaxSetup({
  url: "/xmlhttp/",
  global: false,
  type: "POST"
});
$.ajax({ data: myData });
```
### 6.1 $.ajax(url[, settings])
### 6.2 $.get(url[, data][, callback][, type])
- 参数
  - url:待载入页面的URL地址
  - data:待发送 Key/value 参数。
  - callback:载入成功时回调函数。
  - type:返回内容格式，xml, html, script, json, text, _default。
```javascript
$.get("test.cgi", { name: "John", time: "2pm" },
          function(data){
          alert("Data Loaded: " + data);
});
```
#### 6.2.1 $.getJSON(url[, data][, callback])
- 参数
  - url:发送请求地址。
  - data:待发送 Key/value 参数。
  - callback:载入成功时回调函数。
```javascript
$.getJSON("test.js", { name: "John", time: "2pm" }, function(json){
  alert("JSON Data: " + json.users[3].name);
});
```
#### 6.2.2 $.getScript(url[, callback])
- 参数
  - url:待载入 JS 文件地址。
  - callback:成功载入后回调函数。
### 6.3 $.post(url[, data][, callback][, type])
- 参数
  - url:发送请求地址。
  - data:待发送 Key/value 参数。
  - callback:发送成功时回调函数。
  - type:返回内容格式，xml, html, script, json, text, _default。
```javascript
$.post("test.php", { "func": "getNameAndTime" },
          function(data){
          alert(data.name); // John
          console.log(data.time); //  2pm
          }, "json");
```
### 6.4 jQueryEle.load(url[, data][, callback])
- 载入远程 HTML 文件代码并插入至 DOM 中
- 参数
  - url:待装入 HTML 网页网址。
  - data:发送至服务器的 key/value 数据。在jQuery 1.3中也可以接受一个字符串了。
  - callback:载入成功时回调函数。
### 6.4 ajax的事件触发
#### 6.4.1 jQueryEle.ajaxComplete(callback)
- AJAX 请求完成时执行函数。
#### 6.4.2 jQueryEle.ajaxError(callback)
- AJAX 请求发生错误时执行函数。
#### 6.4.3 jQueryEle.ajaxSend(callback)
- AJAX 请求发送前执行函数。
#### 6.4.4 jQueryEle.ajaxStart(callback)
- AJAX 请求开始时执行函数。
#### 6.4.5 jQueryEle.ajaxStop(callback)
- AJAX 请求结束时执行函数(即包含成功或者失败)。
#### 6.4.6 jQueryEle.ajaxSuccess(callback)
- AJAX 请求成功时执行函数。

## 7 jQuery的原理（源码分析）
### 7.1 jQuery的基本结构
```javascript
(function(window, undefined) {
    var myjQuery = function() {
        return new myjQuery.prototype.init();
    }
    // 1. 创建一个原型对象
    myjQuery.prototype = {
        constructor: myjQuery
    }
    // 2. 利用init()来创建对象
    // 3. 为了init()的方法可以调用myjQuery中的方法,需要讲其原型指向myjQuery的原型
    myjQuery.prototype.init.prototype = myjQuery.prototype;
    // 将myjQuery绑定到window上
    window.myjQuery = window.$ = myjQuery
})(window)
```
- jQuery的本质是一个立即使用函数
- 为什么使用立即使用函数
  - 可以避免多个框架的冲突（实际上类似于立即执行函数有自己的一个作用域）
- jQuery如何让外界访问内部定义的变量
  - 通过window.jQuery.xxx进行暴露
#### 7.1.1 通过哪个函数来返回一个jQuery实例
```javascript
return new myjQuery.prototype.init()
```
- 由于该函数需要用到jQuery内部的函数来进行初始化,所以需要有
```javascript
myjQuery.prototype.init.prototype = myjQuery.prototype;
```
### 7.2 jQuery的核心函数(init函数)
- 返回一个类数组
#### 7.2.1 jQuery核心函数的分类
- 传入""(空字符串), null, undefined, NaN, 0, false  -- 返回空的jQuery对象
- 传入字符串
  - 代码片段
    - 创建好的DOM元素存储到jQuery对象中返回
    - 选择器：会将找到的所有元素存储到jQuery对象中返回
- 传入数组
  - 数组
  - 伪数组
    - 将数组中的元素一次存储到jQuery对象中返回
- 除上述类型
  - 将传入的数据存储到jQuery对象中返回
#### 7.2.2 jQuery的工具函数extend如何进行构建？
- 目的
  - 为了让代码容易解读，从而构建一个工具函数来存储只在构建其他函数过程中用到的函数
- 第一步：声明一个jQuery的函数extend，将传入的工具类的函数赋值给jQuery的对象
```javascript
 myjQuery.extend = function(obj) {
        // 将extend传入的对象里面的函数定义到myjQuery中
        for(let key in obj) {
            myjQuery[key] = obj[key];
        }
    }
```
- 第二步：执行该jQuery函数，传入工具类
  - 在后面增加工具类的函数时，会进行说明
```javascript
    // 工具函数的抽取--封装到extend({}),在myjQuery中同样可以调用，但是封装起来容易进行管理
    // 没有出现指向该实例的this
    myjQuery.extend({
        isString: function(selector) {
            return typeof selector === "string"
        },
        isHTML: function(selector) {
            return selector.charAt(0 )=== '<' && selector.charAt(selector.length - 1) === '>' 
            && selector.length >= 3
        },
        // 去除两端的空格即可
        trim: function(str) {
            // 1. 判断是否拥有trim方法
            if(str.trim) {
                return str.trim();
            }
            else {
                // 若没有，则采用正则表达式进行判断
                return str.replace(/^\s+|\s$/, "")
            }
        }
    })
```
#### 7.2.3 传入的selector是string类型
- 第一步：判断是不是代码片段，采取处理代码片段的方法
  - 通过观察，得到jQuery返回的是一个伪数组，且每个节点是代码片段中的一级DOM元素
- 判断是不是代码片段
- 根据代码片段创建所有的元素
```javascript
    var temp = document.createElement("div");
    temp.innerHTML = myjQuery.trim(selector);
```
- 在jQuery返回的是一级的DOM元素(实现了伪数组之间的互换)
```javascript
  [].push.apply(this, temp.children);
```
- 需要为当前的jQuery对象添加一个length属性
- 返回this
```javascript
  jQuery.prototype = {
    contructor: jQuery,
    init: function(selector) {
        // 1. 若为空，则返回空的对象
        if(!selector) {
            console.log(this)
            return this;
        }
        // 对字符串的处理
        else if(myjQuery.isString(selector)) {
            // 1. 传入代码片段
                // 1.1 判断是不是代码片段
            if(myjQuery.isHTML(selector)) {
                // 1.2 根据代码片段创建所有的元素
                var temp = document.createElement("div");
                temp.innerHTML = myjQuery.trim(selector);
                // 1.3 在jQuery返回的是一级的DOM元素
                // for(let i = 0;i < temp.children.length;i ++) {
                //     this[i] = temp.children[i];
                // }
                [].push.apply(this, temp.children);
                // 1.4 需要为当前的jQuery对象添加一个length属性
                this.length = temp.children.length;
                // 1.5 返回this
                return this;
            }
        }
    }
  }
```
- 第二步：判断是不是选择器，执行类选择器获得节点，并且放回jQuery对象
- 返回选择器找到的节点
- 将该节点赋值到jQuery返回的对象
- 需要为当前的jQuery对象添加一个length属性
- 返回this
```javascript
  jQuery.prototype = {
    contructor: jQuery,
    init: function(selector) {
      // .....
      // 2. 传入选择器
        else {
          // 2.1 返回选择器找到的节点
            var res = document.querySelectorAll(selector);
            // for(let i = 0;i < res.length;i ++) {
            //     this[i] = res[i];
            // }
          // 2.2 将该节点赋值到jQuery返回的对象
            [].push.apply(this, res);
          // 2.3 需要为当前的jQuery对象添加一个length属性
            this.length = res.length;
          // 2.4 返回this
            return this;
        }
    }
  }          
```
#### 7.2.4 传入的selector是Array或这类数组类型
- 工具类函数的编写
  - 判断是不是数组或者非数组
```javascript
  {
    // ...
    isArray: function(selector) {
      // 1. 是对象类型
      // 2. 有length属性
      // 3. 不是window对象
      return typeof selector === "object" && "length" in selector && selector != window
    }
  }
```
- 第一步：判断传入的是不是数组类型，都可以使用将数组转化类数组的形式，返回jQuery对象
```javascript
  jQuery.prototype = {
    contructor: jQuery;
    init: function(selector) {
      // ...
        else if(myjQuery.isArrayLike(selector)) {
            // 为什么要判断是不是数组
            // 原因是为了适应低级的浏览器
            if(myjQuery.isArray(selector)) {
                [].push.apply(this, selector);
                this.length = selector.length;
                return this;
            }
            else {
                // 为了使用于低级的浏览器，先将其转化为真数组
                let temp = [].slice.call(selector);
                [].push.apply(this, temp);
                this.length = temp.length;
                return this;
            }   
        }
    }
  }
```
#### 7.2.5 传入其他类型
- 第一步：将传入的数组存储到第一位上面
```javascript
  jQuery.prototype = {
    contructor: jQuery;
    init: function(selector) {
      // ...
      else {
          this[0] = selector;
          this.length = 1;
          return this;
      }
    }
  }
```
### 7.3 jQuery的核心函数的补充
- 当传入的是是一个函数的类型时，则相当于监听加载完成
- 第一步：在jQuery的工具类中添加ready的方法作为监听加载完成的方法
```javascript
  {
    // ...
    isFunction: function(selector) {
      return typeof selector === "function";
    }
    ready: function(wait) {
      if(document.readyState === "complete") {
          wait();
      }
      else if(document.addEventListener) {
          document.addEventListener("DOMContentLoaded", function() {
              wait();
          })
      }
      else {
          document.attachEvent("onreadystatechange", function(readyState) {
              if(readyState === "complete") {
                  wait();
              }
          })
      }
    }
  }
```
- 第二步：补充若是函数时，则调用ready方法
```javascript
  jQuery.prototype = {
    contructor: jQuery;
    init: function(selector) {
      // ...
      else if(myjQuery.isFunction(selector)) {
        myjQuery.ready(selector);
      }
      else {
          this[0] = selector;
          this.length = 1;
          return this;
      }
    }
  }
```
#### 7.3.1 构造适用于全部浏览器的ready函数
- 注意工具类中ready的特殊性
  - window.onload = function() {}
    - 该事件的触发是在所有dom元素加载完毕和相关的资源加载完毕才执行
  - DOMContentLoaded事件
    - 该事件是在所有dom元素加载完毕就会触发执行，但是该事件在ie8以下无法监听
      - 使用addEventListener()
      - 使用attachEvent()
  - 利用documnet.readyState属性来触发
    - readystatechange事件可以检测到documnet.readyState的改变
```javascript
// DOM元素加载的过程中触发的事件
loading：document 仍在加载。
interactive（可交互）： 文档已被解析，"正在加载"状态结束，但是诸如图像，样式表和框架之类的子资源仍在加载。
complete（完成）： 文档和所有子资源已完成加载。表示 load 状态的事件即将被触发。
```
```javascript
{
    ready: function(wait) {
      if(document.readyState === "complete") {
          wait();
      }
      else if(document.addEventListener) {
          document.addEventListener("DOMContentLoaded", function() {
              wait();
          })
      }
      else {
          document.attachEvent("onreadystatechange", function(readyState) {
              if(readyState === "complete") {
                  wait();
              }
          })
      }
  }
}
```
### 7.4 添加jQuery原型对象的属性和方法
#### 7.4.1 jQuery.prototype的属性
- jquery    -- 获取jQ的版本号
- length  -- 原型实例的默认长度
- selector  -- 实例默认的选择器取值
- push    -- 使用数组中的push
- sort    -- 使用数组中的sort
- init    -- 返回对应的实例对象
```javascript
    myjQuery.prototype = {
        constructor: myjQuery,
        jquery: "myjQuery",
        length: 0,
        selector: "",
        // 相当于[].push.apply(this)
        push: [].push,
        sort: [].sort,
        splice: [].splice,
        init: function(selector) {...
        }
    }
```
#### 7.4.2 jQuery.prototype的方法
##### 7.4.2.1 toArray()
- 返回当前jQuery实例对象的数组形式
```javascript
    myjQuery.prototype = {
      // ...
      toArray: function() {
        return [].slice.call(this);
      }
    }
```
##### 7.4.2.2 get(index)
- 返回该jQuery实例对象对应下标的dom对象
  - 若不传递参数 -- 返回对应的数组形式的DOM元素
  - 若index为正数 -- index
  - 若index为辅助 -- length + index
```javascript
    myjQuery.prototype = {
      // ...
      get: function(index) {
          if(arguments.length === 0) {
              return this.toArray();
          }
          else {
              if(index >= 0) {
                  return this[index];
              }
              else {
                  return this[this.length + index]
              }
          }
      },
    }
```
##### 7.4.2.3 eq(index), first(), last()
- 返回一个包装好的对象
  - 若index为空，则返回一个空的对象
```javascript
    myjQuery.prototype = {
      // ...
      eq: function(index) {
          if(arguments.length === 0) {
              return new myjQuery();
          }
          else {
              return new myjQuery(this.get(index))
          }
      },
      first: function() {
          return this.eq(0);
      },
      last: function() {
          return this.eq(-1);
      }
    }
```
##### 7.4.2.4 each()
- 既可以遍历为数组，也可以遍历数组，可以遍历对象
- 有工具方法和对象的方法
###### 7.4.2.4.1 工具的方法each(obj, fn)
- 注意1：
  - 要先判断是不是数组（包含类数组）或者对象并做单独的处理
- 注意2：
  - 实现当fn返回值为false时，终止循环
  - 实现当fn返回值为true时，继续循环
  - 其他情况，正常循环
  - <font>index在value之前</font>
- 注意3：
  - 函数中的this指向的是当前的value
- 注意4：
  - 遍历谁返回谁
```javascript
{
  // ...
    each: function(obj, fn) {
        // 1. 判断是不是数组或者类数组（包括jQuery对象）
        if(myjQuery.isArrayLike(obj)) {
            for(let i = 0;i < obj.length;i ++) {
                // 若传入过多的参数，则那些参数无法访问，但可以通过arguments进行访问
                // 1.1 调用call使得原本函数中this指向window转向指向value
                let flag = fn.call(obj[i] ,obj[i], i, obj);
                // 1.2 实现返回true继续执行，返回false停止执行
                if(flag === true) 
                    continue;
                else if(flag === false)
                    break;
            }
        }
        // 2. 若是对象
        else {
            for(let key in obj) {
                flag = fn.call(obj[key] ,obj[key], key, obj);
                if(flag === true) 
                    continue;
                else if(flag === false)
                    break;
            }
        }
        return obj;
    }
}
```
###### 7.4.2.4.2 jQuery实例对象的方法each(fn)
- 即遍历自己，只需要传入fn  
```javascript
    myjQuery.prototype = {
      // ...
        each: function(fn) {
            return myjQuery.each(this, fn);
        }
    }
```
##### 7.4.2.5 map()
###### 7.4.2.5.1 工具类中的map(obj, fn, arg)
- 注意1：
  - 要先判断是不是数组（包含类数组）或者对象并做单独的处理
- 注意2：
  - 比each多了一位参数
  - <font>value在index之前</font>
- 注意3
  - 当钩子函数没有返回时，并不需要进行添加到里面去
    - temp != null
- 注意4：
  - <font color="red">返回结果是一个被修改的数组</font>
```javascript
{
  // ...
    map: function(obj, fn, arg) {
      let arr = [];
      if(myjQuery.isArrayLike(obj)) {
          for(let i = 0;i < obj.length;i ++) {
              let temp = fn(obj[i], i, arg);
              if(temp != null)
                  arr.push(temp)
          }
      }
      else if(myjQuery.isObject(obj)){
          for(let key in obj) {
              let temp = fn(obj[key], key, arg);
          // 注意：当没有返回值时，不需要添加
              if(temp != null)
                  arr.push(temp);
          }
      }
      return arr;
  }
}
```
###### 7.4.2.5.2 jQuery实例对象的方法each(fn)
- 返回结果为包装好的jQuery对象
```javascript
    myjQuery.prototype = {
      // ...
      map: function(fn) {
          return new myjQuery(myjQuery.map(this, fn, this))
      }
    }
```
### 7.5 jQuery的DOM操作方法
- 放入实例对象的extend方法中
#### 7.5.1 jQueryELe.empty()
- 清空dom节点一级元素的内容
  - 注意：为了链式的调用，返回值都是本身
```javascript
myjQuery.prototype.extend({
    empty: function() {
        this.each(function(key, value) {
            value.innerHTML = "";
        })
        returnt this;
    }
})
```


#### 7.5.2 jQueryELe.remove（后面再补充）
- 肯定需要用到递归
- 如何确定节点被删除，导致不会重复删除？
#### 7.5.3 jQueryELe.html([text]) 
- 获取或设置innerHTML
  - 获取只会返回第一个节点的innerHTML
```javascript
myjQuery.prototype.extend({
    html: function(text) {
        if(arguments.length === 0)  {
            return this[0].innerHTML;
        }
        else {
            this.each(function(key, value) {
                value.innerHTML = text;
            })
        }
        return this;
    }
})
```
#### 7.5.4 jQueryELe.text([content])
- 获取或者设置内部的text内容
  - 获取的是所有节点的text内容
    - innerText
      - 可以获取本身的文本以及其子代的文本内容
```javascript
myjQuery.prototype.extend({
  text: function(content) {
      if(arguments.length === 0) {
          let res = "";
          this.each(function(key, value) {
              res += value.innerText;
          })
          return res;
      }
      else {
          this.each(function(key, value) {
              value.innerText = content;
          })
          return this;
      }
  }
})
```
#### 7.5.5 source.appendTo(target)
- 使用parent.appendChild(child)
  - 注意：child不一定是新建的节点，也可以是外部的节点
- 在jQuery中的插入，要插入到多个节点，所以需要对节点进行拷贝
  - 使用node.cloneNode(true)对节点进行克隆
  - 由于传入的是jQuery有可能有多个节点，所以需要以遍历的方式
- 返回值为
  - 添加的元素的对象,为jQuery类型
- 里面有bug,没有检查是否具有id的属性
  - 因为id属性只能有一个
```javascript
// 没有使用工具类的函数
myjQuery.prototype.extend({
  appendTo(selector) {
      // 1. 统一将传入的数据转化为jQuery对象
      let $target = $(selector);
      let res = []
      // 2. 遍历所有要目标的节点
      for(let i = 0;i < this.length;i ++) {
          // 2.1 遍历所有要插入的节点
          for(let j = 0;j < $target.length; j ++) {
                  // 2.1.1 若是要插入的目标是第一个,则直接插入
              if(i === 0) {
                  $target[i].appendChild(this[j]);
                  res.push(this[j])
              }
              else {
                    // 2.1.2 若是要插入的目标不是第一个,则进行复制后插入
                  let sourceEle = this[j].cloneNode(true);
                  $target[i].appendChild(sourceEle);
                  res.push(sourceEle)
              }
          }
      }
      return $(res);
  }
})
```
```javascript
// 使用工具类的函数
myjQuery.prototype.extend({
  appendTo(selector) {
      // 1. 统一将传入的数据转化为jQuery对象
      var $target = $(selector);
      let res = [];
      // 2. 遍历所有要目标的节点
      $.each($target, function(key, value) {
          this.each(function(k, v) {
              if(key === 0) {
                  value.appendChild(v);
                  res.push(v)
              }
              else {
                  let v_clone = v.cloneNode(true);
                  value.appendChild(v_clone);
                  res.push(v_clone);
              }
          })
      })
      return $(res)
  }
})
```
##### 7.5.5.1 接收的对象的类型，可以转化为jQuery对象
- 字符串
  - 放入到核心函数，从而将其转化为jQuery对象
- jQuery对象
  - 放入到核心函数，从而将其转化为jQuery对象
- DOM元素
  - 放入到核心函数，从而将其转化为jQuery对象
#### 7.5.6 source.prependTo(target)
- 用原生DOM将节点插入到元素内部的前面
  - target.insertBefore(source, target.firstChild)
    - <font color="red">注意DOM的insertBefore方法调用是谁就会插入到谁的里面</font>
- 其他的过程类似于appendTo
```javascript
myjQuery.prototype.extend({
  // ...
    prependTo(selector) {
        let $target = $(selector);
        let res = [];
        let $this = this;
        // 注意函数中的this指向
          // 与箭头函数相关
        $.each($target, function(key, value) {
            let firstChild = value.firstChild;
            $this.each(function(k, v) {
                if(key === 0) {
                    value.insertBefore(v, firstChild);
                    res.push(v);
                }
                else {
                    let temp = v.cloneNode(true);
                    value.insertBefore(temp, firstChild);
                    res.push(temp)
                }
            })
        })
        return $(res);
    }
})
```
#### 7.5.7 target.append(source)
- 参数和调用者与前面的不同
- 传入的字符串不会被当成选择器来进行处理
  - 选择器只会被当成普通的字符串
  - 代码片段则会返回对应的DOM形式
  - 使用value.innerHTML += source会自动将代码片段转化为DOM的类型，所以不需要其他的操作
- 返回调用者this
```javascript
myjQuery.prototype.extend({
  // ...
  append(source) {
      // 1. 当source为字符串时，不将其判断为选择器
      if(myjQuery.isString(source)) {
          this.each(function(key, value) {
              value.innerHTML += source;
          })
      }
      // 2. 其他的情况可以调用已实现的函数即可
      else {
          $(source).appendTo(this);
      }
      return this;
  }
})
```
#### 7.5.8 target.prepend(source) 
- 与append方法类似
```javascript
myjQuery.prototype.extend({
  // ...
  prepend(source) {
      if(myjQuery.isString(source)) {
          this.each(function(key, value) {
              value.innerHTML = source + value.innerHTML;
          })
      }
      else {
          $(source).prependTo(this);
      }
      return this;
  }
})
```
#### 7.5.9 source.insertBefore(target)
- 将元素插入到某元素外部之前
- 返回值同样是返回加入的元素的jQuery对象
```javascript
myjQuery.prototype.extend({
  // ...
  insertBefore(target) {
      // 可以调用prepend,通过找到target元素的父元素即可
      let $this = this;
      let $target = $(target)
      let res = [];
      $.each($target, function(key, value) {
          // 1. 利用指定元素的父元素来调用原生的insertBefore函数
          let parentNode = value.parentNode;
          $this.each(function(k, v) {
              if(key === 0) {
                  parentNode.insertBefore(v, value);
                  res.push(v)
              }
              else {
                  let temp = v.cloneNode(true);
                  parentNode.insertBefore(temp, value);
                  res.push(temp)
              }
          })
      })
      return $(res);
  }
})
```
#### 7.5.10 source.insertAfter(target)
#### 7.5.11 target.before(source)
#### 7.5.12 target.after(source)
- nextSibling
#### 7.5.13 jQueryELe.next([expr])
- nextSibling
#### 7.5.14 jQueryELe.prev([expr])
- prevSibling
#### 7.5.15 source.replaceAll(target)
- 用source来替代target
```javascript
myjQuery.prototype.extend({
  // ...
  replaceAll(target) {
      // 1. 将相应的元素添加到target的前面
      let $target = $(target)
      let res = this.insertBefore($target);
      // 2. 删除target元素即可
      $target.remove();
      return res;
  }
})
```
#### 7.5.16 target.replaceWith(source)
#### 7.5.17 jQueryELe.clone(boo)
- 浅复制：只会复制对应的属性，但是不会复制事件
- 深复制：两个都会赋值
- 原生的cloneNode(true)的注意事项
  - 无法复制自己添加的属性
  - 克隆一个元素节点会拷贝它所有的属性以及属性值,当然也就包括了属性上绑定的事件(比如onclick="alert(1)"),但不会拷贝那些使用addEventListener()方法或者node.onclick = fn这种用JavaScript动态绑定的事件.
  - 在使用Node.appendChild()或其他类似的方法将拷贝的节点添加到文档中之前,那个拷贝节点并不属于当前文档树的一部分,也就是说,它没有父节点.
  - 如果deep参数设为false,则不克隆它的任何子节点.该节点所包含的所有文本也不会被克隆,因为文本本身也是一个或多个的Text节点.
```javascript
myjQuery.prototype.extend({
  // ...
  clone: function(deep) {
      let res = [];
      let $this = this;
      if(deep) {
          // 1. 深复制
          // 还要赋值对象的触发事件，显然正好是在dom.eventsCache中，所以可以进行添加
          this.each(function(key, dom) {
              // 原生的cloneNode(true)不能复制事件的触发
              var temp = dom.cloneNode(true);
              // cloneNode(true);没有将增添的属性eventsCache复制进去
              if(dom.eventsCache) {
                  $.each(dom.eventsCache, function(eventName, array) {
                      $.each(array, function(key, value) {
                          myjQuery.addEvent(temp, eventName, value);
                      })
                  })
              }
              res.push(temp);
          })
      }
      else {
          // 2. 浅复制
          this.each(function(key, dom) {
              // 原生的cloneNode(true)不能复制事件的触发
              var temp = dom.cloneNode(true);
              res.push(temp);
          })
      }
      return $(res);
  }
})
```
### 7.6 jQuery与属性操作相关的方法
- 注意：以下的代码都没有考虑到id的特殊性
#### 7.6.1 jQueryELe.attr(attr[, value])
- 只传递一个参数且为字符串 -- 默认返回第0个节点对应的属性值 
- 传递两个参数，设置所有节点对应属性的值
- 传递一个参数且为对象，设置所有节点对应对象中的内容
- 返回值为本身
```javascript
myjQuery.prototype.extend({
    attr: function(attr, value) {
        let $this = this;
        // 1. 判断是否是字符串
        if(myjQuery.isString(attr)) {
            // 1.1 判断是一个参数或者是两个参数
            if(arguments.length === 1) {
                return this[0].getAttribute(attr);
            }
            else {
                this.each(function(key, elem) {
                    elem.setAttribute(attr, value);
                })
            }
        }
        // 2. 判断是不是对象
        else if(myjQuery.isObject(attr)) {
            // 2.1 遍历对象中所有的键值
            $.each(attr, function(key, attr_value) {
            // 2.2 将对应的键值设置给每一个dom节点
                $this.each(function(k, elem) {
                    elem.setAttribute(key, attr_value);
                })
            })
        }
        return this;
    }
})
```
#### 7.6.2 jQueryEle.prop()
- 和上面的操纵类似
- <font color="red">操作的是属性而不是属性节点</font>
  - 属性不仅仅属性节点，还包括checked, disabled等属性
  - 属性节点存储在attributes中，而属性直接存储在这个对象之中
- 一定要理解attr，prop的区别
```javascript
myjQuery.prototype.extend({
  // ...
    prop: function(attr, value) {
        let $this = this;
        // 1. 判断是否是字符串
        if(myjQuery.isString(attr)) {
            // 1.1 判断是一个参数或者是两个参数
            if(arguments.length === 1) {
                return this[0][attr];
            }
            else {
                this.each(function(key, elem) {
                    elem[attr] = value;
                })
            }
        }
        // 2. 判断是不是对象
        else if(myjQuery.isObject(attr)) {
            // 2.1 遍历对象中所有的键值
            $.each(attr, function(key, attr_value) {
            // 2.2 将对应的键值设置给每一个dom节点
                $this.each(function(k, elem) {
                    elem[key] = attr_value;
                })
            })
        }
        return this;  
    }
})
```
#### 7.6.3 jQueryEle.css()
- 用于获取或者设置style属性节点的值
  - 或者称为css的值
```javascript
myjQuery.prototype.extend({
  // ...
  css: function(styleName, value) {
      let $this = this;
      if(myjQuery.isString(styleName)) {
          if(arguments.length === 1) {
              return myjQuery.getStyle(this[0], styleName);
          }
          else {
              this.each(function(key, dom) {
                  dom.style[styleName] = value;
              })
          }
      }
      else if(myjQuery.isObject(styleName)) {
          $.each(styleName, function(key, styleValue) {
              $this.each(function(k, dom) {
                  dom.style[key] = styleValue;
              })
          })
      }
      return this;
  }
})
```
##### 7.6.3.1 获取css的通用方法
- window.getComputedStyle(elem)[ attr ]
  - 获取到指定元素的对应的样式
  - ie8及ie8以下并不能支持
- elem.currentStyle[ attr ]
- 在jQuery的extend工具方法中添加对应的函数
```javascript
myjQuery.extend({
  getStyle: function(dom, styleName) {
      if(window.getComputedStyle) {
          return window.getComputedStyle(dom)[styleName];
      }
      else {
          return dom.currentStyle[styleName];
      }
  }
})
```
##### 7.6.3.2 设置css的样式
- 没有兼容性的问题
```javascript
  dom.style[styleName] = value;
```
#### 7.6.4 jQueryEle.val([str])
- 用于获取或者设置value属性的值
```javascript
myjQuery.prototype.extend({
  // ...
  val: function(str) {
      if(arguments.length === 0) {
          // return this[0].getAttribute("value");
          return this[0].value;
      }
      else {
          this.each(function(key, dom) {
              dom.value = str;
          })
      }   
      return this;
  }
})
```
##### 7.6.4.1 如何获取value节点的值
- 可以使用getAttribute和setAttribute来获取和设置
- 在DOM元素中，同样有一个value的属性
  - 很显然就是用get/set的方法来获取和修改的，和vue类似的方法
#### 7.6.5 jQueryEle.hasClass([classValue]) 
- 判断某个元素中是否包含对应的类
- 不传参 -- 返回false
- jQueryELe有多个dom时，只要有一个有对应的类， -- 返回true
```javascript
myjQuery.prototype.extend({
  // ...
  hasClass(classValue) {
      if(arguments.length === 0) {
          return false;
      }
      else {
          let flag = false;
          // 1. 遍历该jQuery对象
          this.each(function(key, dom) {
              // 1.1 获取对应dom节点的类值,并将其转化为数组
              let classArray = dom.className.split(" ");
              // 1.2 通过indexOf来判断是不是包含该类值
              flag ||= Boolean(~classArray.indexOf(classValue));
          })
          return flag;
      }
  }
})
```
- 可以改进
  - 当出现true，直接返回
  - 再在最后面返回false即可
##### 7.6.5.2 如何获取对应的类值
```javascript
// 方法一
  dom.getAttribute("class")
// 方法二 利用className属性，实质上get/set的获取
  dom.className
```
##### 7.6.5.2 如何判断是否包含对应的类
- 方法一
  - 将字符串形式存在的类值转化为数组，并判断对应的类有没有在数组中即可（indexOf）
```javascript
// 转化为数组
    let classArray = dom.className.split(" ");
    Boolean(~classArray.indexOf(classValue));
```
- 方法二
  - 使用string的indexOf的方法
    - 给获取到的类值字符串前后加上空格
      - 为了使前后的类值也满足相关的性质
    - 给想要判断的类值前后加上两个空格
    - 使用indexOf进行判断
```javascript
  let classString = " " + dom.className + " ";
  Boolean(~classString.indexOf(" " + classValue + " "));
```
- 方法三
  - 使用正则表达式进行判断
    - 方法类似于string的方法
#### 7.6.6 jQueryEle.addClass(classValue)
- 不传递参数，没有进行执行
- 添加一个类名，直接加入
- 添加多个类名，中间只要使用空格隔开即可
- 返回值为本身
- 不会重复添加类值，但是会对每个节点进行检查，只要不包含对应的类，就会添加进去
```javascript
myjQuery.prototype.extend({
  // ...
  addClass(classValue) {
      let $this = this;
      if(arguments.length === 0) {
          return this;
      }
      else {
          // 1 由于可能插入多个类，所有转化为数组来判断每个类是否存在
          let classArray = classValue.split(" ");
          classArray.forEach(function(value) {
          // 2 由于hasClass只要有一个为true就会返回true，所以只能一个个使用hasClass
              $this.each(function(key, dom) {
                  if(!$(dom).hasClass(value)) {
                      dom.className += " " + value;
                  }
              })
          })
      }
      return this;
  }
})
```
#### 7.6.7 jQueryEle.removeClass(classValue)
- 不传参：会将所有的类删除
- 可以同时删除多个类
- 返回本身
```javascript
myjQuery.prototype.extend({
  // ...
  removeClass(classValue) {
      if(arguments.length === 0) {
          this.each(function(key, dom) {
              dom.className = "";
          }) 
      }
      else {
          let $this = this;
          let classArray = classValue.split(" ");
          classArray.forEach(function(value) {
              $this.each(function(key, dom) {
                  if($(dom).hasClass(value)) {
                      dom.className = (" " + dom.className + " ")
                                      .replace(" " + value + " ", " ")
                                      .trim()
                  }
              })
          })
      }
      return this;
  }
})
```
##### 7.6.7.1 如何删除所有的类
- 只要将className的值设置为""即可
##### 7.6.7.2 如何删除某一个类值
- 方法一
  - 转化为数组进行删除
- 方法二
  - 使用String#replace来进行删除
  - 同样的用前后加空格来进行之后来调用该函数，替换为" "（空格）
  - 最后调用trim来去除前后的空格即可
```javascript
   dom.className = (" " + dom.className + " ").replace(" " + className + " ", " ").trim();
```
#### 7.6.8 jQueryEle.toggleClass(classValue)
- 利用前面的三个方法的配合即可以实现
- 要注意的是同样要进行分开讨论
```javascript
myjQuery.prototype.extend({
  // ...
  toggleClass(classValue) {
      let $this = this;
      if(arguments.length === 0) {
          return this;
      }
      else {
          let classArray = classValue.split(" ");
          classArray.forEach(function(value) {
              $this.each(function(key, dom) {
                  let $dom = $(dom)
                  if($dom.hasClass(value)) {
                      $dom.removeClass(value);
                  }
                  else {
                      $dom.addClass(value);
                  }
              })
          })
          return this;
      }
  }
})
```
### 7.7 jQuery与事件相关的方法
#### 7.7.1 jQueryEle.on(evnetName, callback)
- 注册多个相同类型的事件，后注册的不会覆盖先注册的
- 注册多个不同的事件，后注册的不会覆盖先注册的
##### 7.7.1.1 如何进行事件的绑定（使用于所有的浏览器）
- dom.addEventListen(eventName, callback)
  - 不适用于ie8以下的浏览器
- dom.attachEvent("on" + eventName, callback)
  - 注意：callback中的this是指向window，所以需要一点点修改的操作
- 在低版本的ie浏览器中，后面注册的事件反而会先触发，不符合总体的规律
  - 对于该问题，可以通过一个cache来使得回调函数的执行顺序是按照对应的结果的。
- 在jQuery的工具类中添加
```javascript
myjQuery.extend({
  // ...
  addEvent: function(dom, eventName, callback) {
      if(!dom.eventsCache) {
          dom.eventsCache = {}
      }
      if(!dom.eventsCache[eventName]) {
          dom.eventsCache[eventName] = [];
          dom.eventsCache[eventName].push(callback);
          if(dom.addEventListener) {
              dom.addEventListener(eventName, function() {
                  // 注意当全部被移除时，该对象为空，所以不需要进行遍历
                  if(dom.eventsCache[eventName]) {
                      for(let i = 0;i < dom.eventsCache[eventName].length;i ++) {
                          // 注意将函数中的this指向对应的dom
                        dom.eventsCache[eventName][i].call(dom);
                      }
                  }  
              });
          }
          else {
              dom.attachEvent("on" + eventName, function() {
                  if(dom.eventsCache[eventName]) {
                      for(let i = 0;i < dom.eventsCache[eventName].length;i ++) {
                          // 注意将函数中的this指向对应的dom
                      dom.eventsCache[eventName][i].call(dom);
                      }
                  }
              })
          }
      }
      else {
          dom.eventsCache[eventName].push(callback);
      }
  }
})
```
#### 7.7.2 jQueryEle.off([evnetName[, callback]])
- 当不传入参数时，移除所有dom的事件
- 当传入一个参数时，移除该事件中绑定的方法
- 当传入两个参数时，移除一个该函数的方法
- 由于前面的事件触发是通过dom.eventsCache来来进行触发的，所以只需要对dom.eventsCache进行操作即可
```javascript
myjQuery.extend({
  // ...
  off: function(eventName, callback) {
      if(arguments.length === 0) {
          this.each(function(key, dom) {
              dom.eventsCache = {};
          })
      }
      else if(arguments.length === 1) {
          this.each(function(key, dom) {
              dom.eventsCache[eventName] = [];
          })
      }
      else {
          this.each(function(key, dom) {
              let index = dom.eventsCache[eventName].indexOf(callback);
              if(~index) {
                  dom.eventsCache[eventName].splice(index, 1);
              }
          })
      }
      return this;
  }
})
```
# 十五 内置类的属性和方法总结
## 1 Math
### 1.1 Math.round(x)
- 返回一个整数（最接近）
  - 小数部分大于0.5，取绝对值大的整数
  - 小数部分小于0.5，取绝对值小的整数
  - 小数部分等于0.5
    - 正数 -- 取决定值大的
    - 负数 -- 取绝对值小的
```javascript
  var result = Math.round(11.5) + Math.round(-11.5);
  // 1
```
### 1.2 Math.ceil(x)
- 返回大于或等于一个给定数字的最小整数。
### 1.3 Math.floor(x)
- 返回小于或等于一个给定数字的最小整数。
### 1.2 Math.random()
- 函数返回一个浮点,  伪随机数在范围从0到小于1

## 2 Array
### 2.1 Array内部元素的增删改 -- 会改变原数组
- 除了该部分，其他方法都不会改变原数组原本的值
#### 2.1.1 Array#push(...value)
- 返回该数组的length
- 向数组的最后一位插入value参数
  - <font color="red">将value看成整体插入数组的前面</font>
#### 2.1.2 Array#pop()
- 返回从数组的最后一位删除的值
  - 若数组为空，则返回undefined
#### 2.1.3 Array#unshift(...value)
- 返回该数组的length
- 向数组的首位插入value参数
  - <font color="red">将value看成整体插入数组的前面</font>
#### 2.1.4 Array#shift()
- 返回从数组的首位删除的值
 - 若数组为空，则返回undefined
#### 2.1.5 Array#splice(start[, deleteCount[, item1[, item2[, ...]]]])
- 返回修改后的数组
- 通过删除或替换现有元素或者原地添加新的元素来修改数组
- 参数 
  - start: 开始的坐标
  - deleteCount: 删除内部元素的数量
  - item[ 1-n ]: 替换的元素
- splice的用法
```javascript
  // 1. 用于替换数组中的第index元素
  // Array#splice(index, 1, replacement)
  let arr = [1, 2, 4];
  console.log("arr: ", arr);
  arr.splice(1, 1, 3);
  console.log("arr: ", arr);
// [1, 2, 4]  [1, 3, 4]

  // 2. 用于向index插入元素
  // Array#splice(index, 0, addition)
  let arr1 = [1, 2, 4];
  console.log("arr1: ", arr1);
  arr1.splice(1, 0, 3);
  console.log("arr1: ", arr1);
// [1, 2, 4]  [1, 5]

  // 3. 删除index之后(包含index）的元素
  // Array#splice(index, Array.lenght - index)
  let arr2 = [1, 2, 4];
  console.log("arr2: ", arr2);
  arr2.splice(1, arr2.lenght - 1);
  console.log("arr2: ", arr2);
// [1, 2, 4]  [1]

```
#### 2.1.6 Array#sort([func(a, b)])
- 返回按照func规则排列的数组（会改变原数组）
  - - 没有参数，默认从小到大排列
- 将sort按照func的规则进行排序
- 参数
  - func(a, b)
    - a,b为相邻的参数
      - 当返回值>0时，则a, b的位置需要交换
      - 当返回值<0时，则a，b的位置不需要交换
    - 通常用减法来表示返回值
### 2.2 Array#slice(begin[, end])
- 返回[begin, end)的部分数组 
  - 当没有参数时，返回值为当前数组的复制
  - 当只有begin，则返回从begin到数组末尾的部分数组
- 参数
  - begin: 截取部分的开始序列（包含）
  - end: 截取部分的结束序列(不包含)
```javascript
  // 用于将类数组转化为数组
  var arr = Array.prototype.slice.call(arrayLike);

  var arr = [].slice.call(arrayLike);
```
### 2.3 Array#concat(value1[, value2[, ...[, valueN]]])
- 返回将value[ 1-n ]合并到数组后面的数组
- 参数：
  - value[ 1-n ]: 数组或值
```javascript
  var arr1 = [1, 2, 3, 4];
  var arr2 = [5, 6, 7];

  var totalArray = arr1.concat(arr2);
  // 在es6中可以用以下方法代替
  var totalArray = [...arr1, ...arr2];
```
### 2.4 Array#toString()
- 返回一个用逗号分隔的字符串
  - <font color="red">其中，空白或者null或者undefined数组元素会被当成空位</font>
  - 当length为0时，则返回一个空字符串
```javascript
  var arr = [1,,null,undefined];
  console.log(arr.toString());
  // 1,,,
```
### 2.5 Array#join([separator])
- 返回一个用separator分隔的字符串
  - <font color="red">其中，空白或者null或者undefined数组元素会被当成空位</font>
  - 当length为0时，则返回一个空字符串
### 2.4 Array的高阶函数
- ES5以前，函数中的空白元素会被跳过
- ES6中，函数中的空白元素会被视为undefined
#### 2.4.1 Array#map(function callback(currentValue[, index[, array]])
- 返回一个由callback返回值构成的函数
 - 可以利用原本数组的元素构建一个新的数组
- 参数
  - callback：回调函数
    - currentValue：当前遍历到的数组的值
    - index：当前遍历到的数组的坐标
    - array：调用map的数组
#### 2.4.2 Array#forEach(callback(currentValue [, index [, array]])[, thisArg])
- 返回值为undefined
- 用于函数的遍历
- 参数
  - callback：回调函数
    - currentValue：当前遍历到的数组的值
    - index：当前遍历到的数组的坐标
    - array：调用map的数组
  - thisArg: 执行 callback 时使用的 this 值。
#### 2.4.3 Array#filter(callback(element[, index[, array]])[, thisArg])
- 返回一个回调函数返回为true的元素组成的数组
- 根据callback函数返回筛选后的数组
- 参数
  - callback：回调函数 <font color="red">--返回值必须是布尔值</font>
    - element: 数组中正在处理的元素。
    - index 数组中正在处理的元素的索引值。
    - array: some()被调用的数组。
  - thisArg: 执行 callback 时使用的 this 值。
#### 2.4.4 Array#some(callback(element[, index[, array]])[, thisArg])
- 返回一个布尔值
- 测试数组中是不是至少有1个元素通过了被提供的函数测试
- 参数
  - callback：回调函数 <font color="red">--返回值必须是布尔值</font>
    - element: 数组中正在处理的元素。
    - index 数组中正在处理的元素的索引值。
    - array: some()被调用的数组。
  - thisArg: 执行 callback 时使用的 this 值。
#### 2.4.5 Array#every(callback(element[, index[, array]])[, thisArg])
- 返回一个布尔值
- 测试数组中是不是所有的元素通过了被提供的函数测试
- 参数
  - callback：回调函数 <font color="red">--返回值必须是布尔值</font>
    - element: 数组中正在处理的元素。
    - index 数组中正在处理的元素的索引值。
    - array: some()被调用的数组。
  - thisArg: 执行 callback 时使用的 this 值。
#### 2.4.6 Array#reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
- 返回一个归约的值
- 参数
  - callback: 回调函数
    - accumulator：累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（见于下方）。
    - currentValue：数组中正在处理的元素。
    - index 数组中正在处理的当前元素的索引。 
    - array：调用reduce()的数组
    - initialValue可选： 作为第一次调用 callback函数时的第一个参数的值。 <font color="red">如果没有提供初始值，则将使用数组中的第一个元素,且index将从1开始。</font>

## 3 Date
### 3.1 构造Date实例
```javascript
  new Date();
  new Date(value);
  new Date(dataString)
  new Date(year, monIndex, [, day [, hour[, minutes[, sencond[, milliseconds]]]]])
```
- 只能用new来构建Date实例
- 参数
  - 没有赋值 -- 默认为当前本地时间
  - value
    - <font color="red">Unix事件戳 -- 表示自1970年1月1日00:00:00 UTC（the Unix epoch）以来的毫秒数</font>
  - dataString
    - 表示日期的字符串
  - year 年 0-99默认为1900，其他还是用数字表示 - 1999 monthIndex 1 - 12 其他没有什么特别的
### 3.2 取得事件戳
#### 3.2.1 Date.UTC(year,month[,date[,hrs[,min[,sec[,ms]]]]])
- 返回从1970-1-1 00:00:00 UTC到指定日期的的毫秒数。
- 参数和构造函数的含义相同
#### 3.2.2 Date.now()
- 返回自 1970 年 1 月 1 日 00:00:00 (UTC) 到当前时间的毫秒数。
#### 3.2.3 Date.parse(dateString)
- 返回方法解析一个表示某个日期的字符串，并返回从1970-1-1 00:00:00 UTC 到该日期对象（该日期对象的UTC时间）的毫秒数
  - 如果该字符串无法识别，或者一些情况下，包含了不合法的日期数值（如：2015-02-31），则返回值为NaN
- 参数
  - dataString 时间字符串
    - 格式："year-month-day hour:minute:second:milliscecond"
### 3.2.4 查询当前时间对象的年月日时分秒
#### 3.2.4.1 Date#get[Fullyear|Month|Date|Hours|Minutes|Seconds|Milliseconds]()
- 根据当地时间，返回当前时间对象相应的内容的数字形式。
#### 3.2.4.2 Date#getDay()
- 根据本地时间，返回一个具体日期中<font color="red">一周的第几天</font>，
  - 0 表示星期天。对于某个月中的第几天
#### 3.2.4.3 Date#getTime()
- 返回一个时间的格林威治时间数值
#### 3.2.4.4 Date#get[UTCFullyear|UTCMonth|UTCDate|UTCHours|UTCMinutes|UTCSeconds|UTCMilliseconds]()
- 根据世界时间，返回当前时间对象相应的内容的数字形式。
#### 3.2.4.5 Date#getUTCDay()
- 根据世界时间，返回一个具体日期中<font color="red">一周的第几天</font>，
  - 0 表示星期天。对于某个月中的第几天
### 3.2.5 设置当前时间对象的年月日时分秒
#### 3.2.5.1 Date#set[Fullyear|Month|Date|Hours|Minutes|Seconds|Milliseconds](...value)
- 根据本地时间为一个日期对象设置相应的内容
- 参数
  - Fullyear: ...value --> yearValue[, monthValue[, dateValue]
  - Month: ...value --> monthValue[, dateValue]
  - Date: ...value --> dateValue
  - Hours: ...value --> hoursValue[, minutesValue[, secondsValue[, msValue]]]
  - Minutes: ...value --> minutesValue[, secondsValue[, msValue]]
  - Seconds: ...value --> secondsValue[, msValue]
  - Millisecond: ...value --> msValue
- 若赋值超过了限制，则会自动向前或向后
#### 3.2.5.2 Date#set[UTCFullyear|UTCMonth|UTCDate|UTCHours|UTCMinutes|UTCSeconds|UTCMilliseconds](...value)
- 根据全球时间设置相应的内容
- 参数
  - Fullyear: ...value --> yearValue[, monthValue[, dateValue]
  - Month: ...value --> monthValue[, dateValue]
  - Date: ...value --> dateValue
  - Hours: ...value --> hoursValue[, minutesValue[, secondsValue[, msValue]]]
  - Minutes: ...value --> minutesValue[, secondsValue[, msValue]]
  - Seconds: ...value --> secondsValue[, msValue]
  - Millisecond: ...value --> msValue
- 若赋值超过了限制，则会自动向前或向后 
#### 3.2.5.3 Date#setTime(millisecondValue)
- 一个表示从1970-1-1 00:00:00 UTC计时的毫秒数为来为 Date 对象设置时间。
### 3.2.5 与区域时差相关的方法
- 世界时间是以哪个区域为基准？ -- UTC 0
#### 3.2.5.1 Date#getTimezoneOffset()
- 返回协调世界时（UTC）相对于当前时区的时间差值，单位为分钟。
```javascript
  var x = new Date();
  var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;
```
### 3.2.6 转化为字符串
#### 3.2.6.1 Date#toString()
- 返回一个美式英语日期格式的字符串。  
    - 覆盖了Object的toString
    - 如果不是Date实例，则 返回"Invalid Date"。
```javascript
  var x = new Date();
  myVar = x.toString(); // 把类似于下面格式的值赋给 myVar，
  // Fri Apr 26 2019 11:46:17 GMT+0800 (中国标准时间)
```
#### 3.2.6.2 Date#tolocal[""|Date|Time]([locales [, options]])
- 返回该日期对象日期部分的字符串，该字符串格式因不同语言而不同
#### 3.2.6.2 Date#toDateString()
- 以美式英语和人类易读的形式返回一个日期对象日期部分的字符串。
### 3.2.7 Date.toISOString()
- 返回一个 ISO（ISO 8601 Extended Format）格式的字符串： YYYY-MM-DDTHH:mm:ss.sssZ。时区总是UTC（协调世界时），加一个后缀“Z”标识。
# 十六 nodejs的网络编程
## 1 nodejs TCP连接
- 半关闭的套接字（套接字的半关闭状态）:可以传输但不可接收或可接收但不可传输
### 1.0 socket（套接字)的实质
- 一个类似于管道的对象，客户端和服务器端位于两端。
- ![socket](./img/prototypeSocket.jpg)
- 使用的net的对象
    - net.Server, net.Socket
### 1.1 TCP的服务器端
#### 1.1.1 net.createServer([options][, connectionListener(socket)])
- 返回响应的服务器对象
- 创建一个TCP或者IPC服务器
```
参数
    options: 
    connectionListener: 当新的TCP连接建立时触发该函数
        - socket：一个套接字对象
```
#### 1.1.2 服务器端的连接事件
##### 1.1.2.1 net.Server类的连接事件
###### 1.1.2.1.1 listening事件
- 在调用server.listen()绑定端口或者Domain Socket后触发
###### 1.1.2.1.2 connection事件
- 每个客户端的套接字连接到服务器端时触发
###### 1.1.2.1.3 error事件
- 当服务器端发生异常时发生该事件
##### 1.1.2.2 net.Socket类的连接事件
- 服务器可以同时与多个客户端保持连接。
###### 1.1.2.2.1 data事件
- 当一段调用write()发送数据时，<font color="red">另一端</font>会触发data事件
- 传递的参数：data
    - 传递的信息
###### 1.1.2.2.2 drain事件
- 当任意一端调用write()发送数据，<font color="red">当前这端</font>就会触发该事件
###### 1.1.2.2.3 end事件
- 当连接中的任意一端发送了FIN数据时，将会触发该事件
###### 1.1.2.2.4 close事件
- 当套接字完全关闭时，触发该事件
###### 1.1.2.2.5 error事件
- 当异常发生时，触发该事件
- 参数：error
#### 1.1.3 socket.on(eventName, callback)
- 绑定socket事件和其回调函数
#### 1.1.4 socket.write(data[, encoding][, callback])
- 将数据data从套接字的当前端传递给另一端
- 返回: &lt;boolean&gt;
    - 如果全部数据都成功刷新到内核的缓冲则返回 true。如果全部或部分数据在用户内中排队，则返回 false。当缓冲再次空闲的时候将触发 'drain' 事件。
- 参数
    data &lt;string&gt; | &lt;Buffer&gt; | &lt;Uint8Array&gt;
    encoding &lt;string&gt; 仅在数据为 string 时使用。默认值: utf8。
    callback &lt;Function&gt;
        - 当数据全部被写出的时候触发该函数

### 1.2 TCP的客户端
#### 1.2.1 net.createConnection(options[, connectListener])
- 发起tcp连接并且返回，若连接成功，则返回相应的套接字对象
#### 1.2.2 客户端的连接事件
- 只有net.Socket类的事件
##### 1.2.2.1 net.Socket类事件(连接事件)
- 服务器可以同时与多个客户端保持连接。
###### 1.2.2.1.1 data事件
- 当一段调用write()发送数据时，<font color="red">另一端</font>会触发data事件
- 传递的参数：data
    - 传递的信息
###### 1.2.2.1.2 drain事件
- 当任意一端调用write()发送数据，<font color="red">当前这端</font>就会触发该事件
###### 1.2.2.1.3 end事件
- 当连接中的任意一端发送了FIN数据时，将会触发该事件
###### 1.2.2.1.4 close事件
- 当套接字完全关闭时，触发该事件
###### 1.2.2.1.5 error事件
- 当异常发生时，触发该事件
- 参数：error
#### 1.2.3 socket.on(eventName, callback)
- 绑定socket事件和其回调函数
#### 1.2.4 socket.write(data[, encoding][, callback])
- 将数据data从套接字的当前端传递给另一端
- 返回: &lt;boolean&gt;
    - 如果全部数据都成功刷新到内核的缓冲则返回 true。如果全部或部分数据在用户内中排队，则返回 false。当缓冲再次空闲的时候将触发 'drain' 事件。
- 参数
    data &lt;string&gt; | &lt;Buffer&gt; | &lt;Uint8Array&gt;
    encoding &lt;string&gt; 仅在数据为 string 时使用。默认值: utf8。
    callback &lt;Function&gt;
        - 当数据全部被写出的时候触发该函数

### 1.3 net.Socket 类的具体讲解
- 创建服务器回调事件的参数(net.createServer)
- 创建连接服务得到的返回值(net.connect/createConnection)
#### 1.3.1 自定义构建一个套接字对象
```javascript
    const socket = new net.Socket([options])
```
- 参数option(一个对象)
    - fd <number> 如果指定了该参数，则使用一个给定的文件描述符包装一个已存在的 socket，否则将创建一个新的 socket。
    - allowHalfOpen <boolean> 指示是否允许半打开的 TCP 连接。详情查看 net.createServer() 和 'end' 事件。默认值: false。
    - readable <boolean> 当传递了 fd 时允许读取 socket，否则忽略。默认值: false。
    - writable <boolean> 当传递了 fd 时允许写入 socket，否则忽略。默认值: false。
#### 1.3.2 net.Socket类的事件
##### 1.3.2.1 套接字连接及之前的事件
###### 1.3.2.1.1 lookup事件
- 在找到主机之后创建连接之前触发
- 触发后传递的参数
    - err &lt;Error&gt; | &lt;null&gt; 错误对象。查看 dns.lookup()。
    - address &lt;string&gt; IP 地址。
    - family &lt;string&gt; | &lt;null&gt; 地址类型。查看 dns.lookup()。
    - host &lt;string&gt; 主机。
###### 1.3.2.1.2 connect事件
- 当一个 socket 连接成功建立的时候触发该事件
###### 1.3.2.1.3 ready事件
- 'connect' 后立即触发。
###### 1.3.2.1.4 timeout事件
- 当 socket 超时的时候触发。该事件只是用来通知 socket 已经闲置。用户必须手动关闭。
##### 1.3.2.2 套接字连接后事件
###### 1.3.2.2.1 data事件
- 当一段调用write()发送数据时，<font color="red">另一端</font>会触发data事件
- 传递的参数：data
    - 传递的信息
###### 1.3.2.2.2 drain事件
- 当任意一端调用write()发送数据，<font color="red">当前这端</font>就会触发该事件
###### 1.3.2.2.3 end事件
- 当连接中的任意一端发送了FIN数据时，将会触发该事件
###### 1.3.2.2.4 close事件
- 当套接字完全关闭时，触发该事件
###### 1.3.2.2.5 error事件
- 当异常发生时，触发该事件
- 参数：error

#### 1.3.3 net.Socket类实例对象的方法和属性
- socket实例对象的状态

##### 1.3.3.0 socket.on(eventName, callback)
- 绑定socket事件和其回调函数
##### 1.3.3.1 socket.write(data[, encoding][, callback])
- 将数据data从套接字的当前端传递给另一端
- 返回: &lt;boolean&gt;
    - 如果全部数据都成功刷新到内核的缓冲则返回 true。如果全部或部分数据在用户内中排队，则返回 false。当缓冲再次空闲的时候将触发 'drain' 事件。
- 参数
    data &lt;string&gt; | &lt;Buffer&gt; | &lt;Uint8Array&gt;
    encoding &lt;string&gt; 仅在数据为 string 时使用。默认值: utf8。
    callback &lt;Function&gt;
        - 当数据全部被写出的时候触发该函数
##### 1.3.3.2 与data相关的方法和属性
###### 1.3.3.2.1 socket.bytesRead
- 返回接收的字节数量。
###### 1.3.3.2.2 socket.bytesWritten
- 返回发送的字节数量。
###### 1.3.3.2.3 socket.setEncoding([encoding])
- 设置作为可读流的编码
- 返回为本身
##### 1.3.3.3 与当前socket对象状态有关的方法和属性
###### 1.3.3.3.1 socket.connecting/pending
- 返回&lt;boolean&gt;
    - 如果为 true 则 socket.connect(options[, connectListener]) 被调用但还未结束。 
    - 它将保持为真，直到 socket 连接，然后设置为 false 并触发 'connect' 事件
- 注意
     - socket.connect(options[, connectListener]) 的回调是 'connect' 事件的监听器。
###### 1.3.3.3.2 socket.destroyed
- 返回&lt;boolean&gt;
    - 连接是否已经被销毁
        - 一旦连接被销毁就不能再使用它传输任何数据。
###### 1.3.3.3.3 socket.destroy([error])
- 确保socket对象上不再有I/O活动
###### 1.3.3.3.4 socket.end([data[, encoding]][, callback])
- 若当前端发送调用了该函数，则向另一端发送一个FIN包，且将当前端变成半关闭状态
    - 可以接收消息但不能发送消息
    - 此时另一端仍然可以发送和接收消息
##### 1.3.3.4 返回端口号和IP地址
###### 1.3.3.4.1 socket.localAddress
- 返回当前端的host地址(IP地址)
###### 1.3.3.4.2 socket.localPort
- 返回当前端的端口号
###### 1.3.3.4.3 socket.remoteAddress
- 返回另一端的端口号
###### 1.3.3.4.4 socket.remotePort
- 返回另一端的端口号
##### 1.3.3.5 对当前socket对象的操作
###### 1.3.3.5.1 socket.unref()
- 将 socket 重新添加到维持 Node.js 进程的引用列表中，并恢复其默认行为。
###### 1.3.3.5.2 socket.ref()
- 用于将 socket 从维持 Node.js 进程的引用列表中解除。

### 1.4 net.Server 类的具体讲解
- 创建服务器的返回值(net.createServer)
- options对象的属性
    - port &lt;number&gt; 端口号
    - host &lt;string&gt; 主机名
    - path &lt;string&gt; 如果指定了 port 参数则会被忽略。查看识别 IPC 连 接的路径。。
    - backlog &lt;number&gt; server.listen() 函数的通用参数。
    - exclusive &lt;boolean&gt; 默认值: false。
    - readableAll &lt;boolean&gt; 对于 IPC 服务器，使管道对所有用户都可读。默认值: false。
    - writableAll &lt;boolean&gt; 对于 IPC 服务器，使管道对所有用户都可写。默认值: false。
    - ipv6Only &lt;boolean&gt; 对于 TCP 服务器，将 ipv6Only 设置为 true 将会禁用双栈支持，即绑定到主机 :: 不会使 0.0.0.0 绑定。默认值: false。
#### 1.4.1 自定义构建一个服务器对象
```javascript
    new net.Server([options][, connectionListener])
```
- 返回一个事件触发器对象
- 参数
    - options &lt;Object&gt; 见上 
    - connectionListener &lt;Function&gt; 自动设置为 'connection' 事件的监听器。
#### 1.4.2 net.Server类的事件
##### 1.4.2.1 服务器创建之后的事件
###### 1.4.2.1.1 connection事件
- 当一个新的连接建立的时候触发
###### 1.4.2.1.2 listening事件
- 当调用server.listen()绑定服务器之后触发
###### 1.4.2.1.3 close事件
- 当server关闭时触发
###### 1.4.2.1.4 error事件
- 当错误出现时触发
- 'close' 事件不会在这个事件触发后继续触发，除非 server.close(
#### 1.4.3 net.Socket类实例对象的方法和属性
##### 1.4.3.1 server.address()
- 如果在 IP socket 上监听，则返回操作系统报告的绑定的 address、地址 family 名称、以及服务器 port（用于查找在获取操作系统分配的地址时分配的端口）：{ port: 12346, family: 'IPv4', address: '127.0.0.1' }。
    - 在 'listening' 事件被触发之前、或在调用 server.close() 之后， server.address() 返回 null。
##### 1.4.3.2 与当前sever对象态相关的方法和属性
###### 1.4.3.2.1 server.listen()
```javascript
// 可能的参数
server.listen(handle[, backlog][, callback])
server.listen(options[, callback])
server.listen(path[, backlog][, callback]) //用于 IPC 服务器。
server.listen([port[, host[, backlog]]][, callback]) //用于 TCP 服务器。
```
- 异步函数，当服务器开始监听时，会触发 'listening' 事件。最后一个参数 callback 将被添加为 'listening' 事件的监听器
- 监听时最常见的错误之一是 EADDRINUSE。 这是因为另一个服务器已正在监听请求的 port/path/handle。
```javascript
server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log('地址正被使用，重试中...');
    setTimeout(() => {
      server.close();
      server.listen(PORT, HOST);
    }, 1000);
  }
});
```
###### 1.4.3.2.2 server.close([callback])
- 阻止 server 接受新的连接并保持现有的连接。返回一个net.Server对象
- 参数
    - callback &lt;Function&gt; 当 server 被关闭时调用。
- 注意
    - 与close事件的区别
        - close事件是所有的连接被阻止才会触发
        - close操作只是阻止新的连接并保持现有的连接，而其对应的c回调函数是在close事件被触发时回调
###### 1.4.3.2.3 server.listening
- 表明 server 是否正在监听连接。
##### 1.4.3.3 对当前server对象的操作
###### 1.4.3.3.1 server.unref()
- 将 server 重新添加到这个引用列表中，并恢复其默认行为。
###### 1.4.3.3.2 server.ref()
- 用于将 socket 从维持 Node.js 进程的引用列表中解除。
##### 1.4.3.4 与server的并发连接相关
###### 1.4.3.4.1 server.getConnections(callback)
- 异步获取服务器的当前并发连接数。
- 参数
    - callback
        - 传递参数为error或者count 
###### 1.4.3.4.2 server.maxConnections
- 设置当前server对象的最大并发连接

### 1.5 net的其他函数
#### 1.5.1 net.isIP(input)
- 测试输入的字符串是否是 IP 地址。无效的字符串则返回 0，IPv4 地址则返回 4，IPv6 的地址则返回 6。
#### 1.5.2 net.isIPv4(input)
- 如果输入的字符串是 IPv4 地址则返回 true，否则返回 false。
#### 1.5.3 net.isIPv4(input) 
- 如果输入的字符串是 IPv4 地址则返回 true，否则返回 false。
### 1.6 实现简单的TCP连接服务
```javascript
    // server.js文件中
const net = require("net");
const { Socket } = require("dgram");

const tcpServer = net.createServer(socket => {
    socket.on("data", data => {
        // 向客户端的socket传递信息
        console.log("客户端发送信息：", data.toString());
    })

    socket.on("end",() => {
        console.log("tcp连接断开");
        tcpServer.close();
    })

    socket.write("你好客户端");
})
// 启动tcpServer并且监听端口为3000的tcp连接
tcpServer.listen({port: 3000}, function() {
    console.log("tcp服务器打开成功")
})


// client.js文件中
const net = require("net");
const { clearScreenDown } = require("readline");

const clientSocket = net.createConnection({
    port: 3000
}, () => {
    console.log("客户端连接成功");
    clientSocket.write("你好，服务器端");
})

clientSocket.on("data", data => {
    console.log("服务器端发送信息：", data.toString());
    clientSocket.end();
})

clientSocket.on("end", () =>{
    console.log("客户端断开tcp连接")
})
```
## 3 nodejs http连接
- 为了支持所有可能的 HTTP 应用程序，Node.js 的 HTTP API 都是非常底层的。 它仅进行流处理和消息解析。 它将消息解析为消息头和消息主体，但不会解析具体的消息头或消息主体。
### 3.1 http连接的服务器端
- http.Server类 http.SeverResponse
#### 3.1.1 http.createServer([options][, requestListener])
- 返回一个sever对象
- 参数
    - options
        - IncomingMessage &lt;http.IncomingMessage&gt; 指定要使用的 IncomingMessage 类。 对于扩展原始的 IncomingMessage 很有用。 默认值: IncomingMessage。
        - ServerResponse &lt;http.ServerResponse&gt; 指定要使用的 ServerResponse 类。 对于扩展原始的 ServerResponse 很有用。 默认值: ServerResponse。
        - insecureHTTPParser &lt;boolean&gt; 使用不安全的 HTTP 解析器，当为 true 时可以接受无效的 HTTP 请求头。 应避免使用不安全的解析器。 详见 --insecure-http-parser。 默认值: false。
        - maxHeaderSize &lt;number&gt; 可选地重写 --max-http-header-size（用于服务器接收的请求）的值，即请求头的最大长度（以字节为单位）。 默认值: 16384（16KB）
    - requestListener：当request事件触发
#### 3.1.2 http服务器的连接事件
##### 3.1.2.1 connection事件
- 在开始http请求和相应之前，客户端与服务器端需要建立底层的TCP连接。当这个连接建立时，服务器端触发一次connection事件
##### 3.1.2.2 request事件
- 建立TCP连接后，http模块底层将在数据流中抽象出http请求，当请求数据发送到服务器端，并解析出http请求头后，服务器就会触发该事件
- 传递参数：request，reponse
##### 3.1.2.3 close事件
- 调用server.close()方法停止接收新的连接，当已有的连接都断开时，触发该事件。
##### 3.1.2.4 checkContinue事件
- 某些客户在发送较大使得数据时，并不会将数据直接发送，而是先发送一个头部带有Expect: 100-continue的请求到服务器，服务器就会触发该事件。
    - 如果没有为服务器监听这个事件，服务器就会自动相应客户端100 Continue的状态，表示接收数据的上传，如果不接受数据的较多是，相应客户端400 Bad Request拒绝客户端继续发送数据即可
##### 3.1.2.5 connect事件
- 当客户端发起CONNECT请求时触发，而发起CONNECT请求通常在HTTP代理时出现。
    - 如果服务器不监听该事件，发起该请求的连接将会关闭。
##### 3.1.2.6 upgrade
- 当客户端要求升级连接的协议时，需要和服务器端协商，客户端会在请求头中带上Upgrade字段，服务器端会在接收到这样的请求时触发该事件
    - 如果不监听该事件件，则发起该请求的连接将会关闭
##### 3.1.2.7 clientError
- 连接的客户端触发error事件时，这个错误会传递到服务器，此时触发该事件
### 3.2 http连接的客户端
### 3.3 http连接的代理
### 3.4 http.Server 类
#### 3.4.1 服务器创建之后的事件
###### 3.4.1.1 connection事件
- 在开始http请求和响应之前，客户端与服务器端需要建立底层的TCP连接。当这个连接建立时，服务器端触发一次connection事件
- 传递参数：socket
###### 3.4.1.2 request事件
- 建立TCP连接后，http模块底层将在数据流中抽象出http请求，当请求数据发送到服务器端，并解析出http请求头后，服务器就会触发该事件
- 传递参数：request，reponse
###### 3.4.1.3 close事件
- 调用server.close()方法停止接收新的连接，当已有的连接都断开时，触发该事件。
###### 3.4.1.4 checkContinue事件
- 某些客户在发送较大使得数据时，并不会将数据直接发送，而是先发送一个头部带有Expect: 100-continue的请求到服务器，服务器就会触发该事件。
    - 如果没有为服务器监听这个事件，服务器就会自动相应客户端100 Continue的状态，表示接收数据的上传，如果不接受数据的较多是，相应客户端400 Bad Request拒绝客户端继续发送数据即可
###### 3.4.1.5 connect事件
- 当客户端发起CONNECT请求时触发，而发起CONNECT请求通常在HTTP代理时出现。
    - 如果服务器不监听该事件，发起该请求的连接将会关闭。
- 传递参数 request socket head(第一个数据包)
- 触发此事件后，请求的套接字将没有 'data' 事件监听器，这意味着它需要绑定才能处理发送到该套接字上的服务器的数据。
###### 3.4.1.6 upgrade
- 当客户端要求升级连接的协议时，需要和服务器端协商，客户端会在请求头中带上Upgrade字段，服务器端会在接收到这样的请求时触发该事件
    - 如果不监听该事件件，则发起该请求的连接将会关闭
- 传递参数：request, socket, head(升级后的第一个请求包)
###### 3.4.1.7 clientError
- 连接的客户端触发error事件时，这个错误会传递到服务器，此时触发该事件
- 传递参数 error，socket
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.end();
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(8000);
```
#### 3.4.2 与当前sever对象状态相关的方法和属性
##### 3.4.2.1 server.close([callback])
- 停止服务器接收新连接。
- 参数
    - callback 当close事件触发时回调
##### 3.4.2.2 server.listen()
- 与net.Server.listen()相同
    - callback -- 当
##### 3.4.2.3 server.listening
- 表明服务器是否在监听连接
#### 3.4.3 与超时连接相关
##### 3.4.3.1 server.maxHeadersCount
- 限制最大传入请求头数。 如果设置为 0，则不会应用任何限制。
##### 3.4.3.2 server.setTimeout([msecs][, callback])
- 设置套接字的超时值，并在服务器对象上触发 'timeout' 事件，如果发生超时，则将套接字作为参数传入。如果服务器对象上有 'timeout' 事件监听器，则将使用超时的套接字作为参数调用它。
- 参数
    - msecs &lt;number&gt; 默认值: 120000（2 分钟）。
    - callback &lt;Function&gt; 超时时触发
##### 3.4.3.3 server.timeout
- 设置套接字超时的不活动毫秒数。
##### 3.4.3.3 server.keepAliveTimeout
- 服务器在完成写入最后一个响应之后，在销毁套接字之前需要等待其他传入数据的非活动毫秒数。 如果服务器在保持活动超时被触发之前接收到新数据，它将重置常规非活动超时
### 3.5 http.ServerResponse 类
- 本质上是一个写流
- 在服务器端作为request的回调函数中作为第2个参数
- 在客户端作为request作为返回值
#### 3.5.1 http.ServerResponse相关的事件
##### 3.5.1.2 finish事件
- 当响应头和主体的最后一段已经切换到操作系统以通过网络传输时，触发该事件。
#### 3.5.2 与http.ServerResponse对象的headers相关的属性和方法
##### 3.5.3.1 response.setHeader(name, value)
- 为隐式响应头设置单个响应头的值。 如果此响应头已存在于待发送的响应头中，则其值将被替换。（没有发送）
    - writeHead优先
##### 3.5.3.2 response.removeHeader(name)
- 移除排队等待中的隐式发送的响应头。
##### 3.5.3.3 response.hasHeader(name)
- 如果当前在传出的响应头中设置了由 name 标识的响应头，则返回 true。 响应头名称匹配不区分大小写。
##### 3.5.3.4 response.getHeaders([name])
- 若参数为空：返回当前传出的响应头的浅拷贝。 由于使用浅拷贝，因此可以更改数组的值而无需额外调用各种与响应头相关的 http 模块方法。 返回对象的键是响应头名称，值是各自的响应头值。 所有响应头名称都是小写的。
- 若参数不为空，读出已排队但未发送到客户端的响应头的值。 该名称不区分大小写。 返回值的类型取决于提供给 response.setHeader() 的参数。
##### 3.5.3.5 response.getHeaderNames()
- 返回当前响应头组成的数组
##### 3.5.3.1 response.writeHead(statusCode[, statusMessage][, headers])
- 向客户端发送请求头
- 参数
    - statusCode    状态的数字
    - statusMessage 状态信息
    - headers   &lt;object&gt; 响应报文头
##### 3.5.3.2 response.writeContinue()
- 向客户端发送HTTP/1.1 100 Continue 消息，表示应发送请求主体。
    - 与Server 上的 'checkContinue' 事件有关。
#### 3.5.3 与http.ServerResponse对象的body相关的属性和方法
##### 3.5.4.1 response.write(data[, encoding][, callback])
##### 3.5.4.2 response.end([data[, encoding]][, callback])
- 若没有参数或只有回调函数作为参数：此方法向服务器发出信号，表明已发送所有响应头和主体，该服务器应该视为此消息已完成。 必须在每个响应上调用此 response.end() 方法。
- 若有参数，则相当于reponse.write(data,[ enconding])之后再调用repose.end([ callback ])
- 参数 
    - data
        - 响应体的数据
    - 
### 3.6 http.IncomingMessage 类
- 实质上继承了读流的属性
- 当客户端发送请求即调用http.request时，作为回调函数中的respose参数传递
- 在服务器端作为requst事件的第一个参数request
#### 3.6.1 http.IncomingMessage对象的相关事件
- 继承了可读流的事件
##### 3.6.1.1 data事件
- 当另一端的数据包体传输完成的时候触发
- 传递参数：data
##### 3.6.1.2 abort事件
- 当请求中止时触发。
##### 3.6.1.3 close事件
- 表明底层连接已关闭
##### 3.6.1.4 message.aborted
- 如果请求已中止，则 message.aborted 属性为 true。
##### 3.6.1.5 message.compelte
- 如果已收到并成功解析完整的 HTTP 消息，则 message.complete 属性将为 true。
##### 3.6.1.6 message.destory([callback])
- 调用其对应套接字上的destroy()
#### 3.6.2 与http.IncomingMessage对象的headers相关的属性和方法
##### 3.6.2.1 message.headers
- 返回请求/响应的消息头对象
##### 3.6.2.2 message.rawHeaders
- 返回请求/响应的消息头，以数组的形式[key, value, ...]
##### 3.6.2.3 message.httpVersion
- 返回另一端的http的版本
##### 3.6.2.4 message.method
- 返回客户端传输使用的方法

#### 3.6.3 与http.IncomingMessage对象的body相关的属性和方法
- 获取http.IncomingMessage对象的主体，应该利用可读流的data数据来获取
    - data事件的data参数是Buffer类型
```javascript
// 服务器端
    http.createServer(function(request, response) {
        // 该函数是由request事件触发，即当服务器端接收到header的时候触发
        request.on("data", data => console.log(data.toString()))
    })
// 客户端
    http.request(opt, function(response) {
        response.on('data', data => console.log(data.toString()))
    })
```
 