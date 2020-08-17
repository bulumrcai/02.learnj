window.onload = function() {
    const titles = document.querySelectorAll('#nav .title');
    titles.forEach(title => title.onclick = function() {
        let content = title.parentElement.querySelector('ul');
        let begin =  content.offsetHeight;
        console.log(begin)
        toggleClass(title.parentElement, 'active');
        let end = content.offsetHeight;
        console.log(end)
        content.style.height = begin + 'px';
        autoMove(content, 10, end, 'height', function() {
            content.style.height = '';
            // 注意将内联样式取消
        })
        // 实现点击当前的title，其他title关闭
        // 法1：直接关闭其他元素的title在添加
        // 法2：用一个临时变量来存储当前的标签，将点击的元素改为active
        
    })

    function addClass(obj ,cn) {
        // 需要判断包不包括
        if(!hasClass(obj, cn))
            obj.className += " " + cn;
    }
    // 法一
    // 判断一个元素中是否含有指定的类值
    function hasClass(obj, cn){
        // 字符串作为正则表达式时，需要用构造函数
        // \b单词的分隔符
        const reg = new RegExp('\\b' + cn + '\\b');
        return reg.test(obj.className);
    }
    // 法2：可以使用split()函数分割成数组后，在判断有没有对应的值在数组中
    // 删除ige元素中指定的类值
    function removeClass(obj, cn){
        // 直接替换成空串
        const reg = new RegExp('\\b' + cn + '\\b');
        obj.className = obj.className.replace(reg, '');
    }
    // toggle:切换类，元素中有该类，则删除，没有则加上
    // 相当于在类进行切换
    function toggleClass(obj, cn) {
        if(hasClass(obj, cn))
            removeClass(obj, cn);
        else    
            addClass(obj, cn);
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