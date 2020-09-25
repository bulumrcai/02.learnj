(function(window, undefined) {
    var myjQuery = function(selector) {
        return new myjQuery.fn.init(selector);
    }
    // 创建一个原型对象
    myjQuery.prototype = {
        constructor: myjQuery,
        jquery: "myjQuery",
        length: 0,
        selector: "",
        // 相当于[].push.apply(this)
        push: [].push,
        sort: [].sort,
        splice: [].splice,
        init: function(selector) {
            // 1. 若为空，则返回空的对象
            if(!selector) {
                this.length = 0;
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
                // 2. 传入选择器
                else {
                    var res = document.querySelectorAll(selector);
                    // for(let i = 0;i < res.length;i ++) {
                    //     this[i] = res[i];
                    // }
                    [].push.apply(this, res);
                    this.length = res.length;
                    return this;
                }
            }
            // 对类数组和数组的处理
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
            else if(myjQuery.isFunction(selector)) {
                myjQuery.ready(selector);
            }
            else {
                // 将传入的数组存储到第一位上面
                this[0] = selector;
                this.length = 1;
                return this;
            }
        },
        // 返回当前jQuery对象的数组形式
        toArray: function() {
            return [].slice.call(this);
        },
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
        },
        each: function(fn) {
            myjQuery.each(this, fn);
        },
        map: function(fn) {
            return new myjQuery(myjQuery.map(this, fn, this))
        },
    }
    // 给myjQuery调用为静态方法
    // 给对应的实例同样也可以使用其对应的方法
    myjQuery.prototype.extend = myjQuery.extend = function(obj) {
        // 将extend传入的对象里面的函数定义到myjQuery中
        for(let key in obj) {
            this[key] = obj[key];
        }
    }
    // 工具函数的抽取--封装到extend({}),在myjQuery中同样可以调用，但是封装起来容易进行管理
    // 没有出现指向该实例的this
    myjQuery.extend({
        // 1. 判断是不是string类型
        isString: function(selector) {
            return typeof selector === "string"
        },
        // 2. 判断满不满足html
        isHTML: function(selector) {
            return selector.charAt(0 )=== '<' && selector.charAt(selector.length - 1) === '>' 
            && selector.length >= 3
        },
        // 3. 适应所有的浏览器的去除两端的空格
        trim: function(str) {
            // 1. 判断是否拥有trim方法
            if(str.trim) {
                return str.trim();
            }
            else {
                // 若没有，则采用正则表达式进行判断
                return str.replace(/^\s+|\s$/, "")
            }
        },
        // 4. 判断是不是数组和类数组
        isArrayLike: function(selector) {
            return typeof selector === "object" && "length" in selector 
                    && selector != window;
        },
        isArray: function(selector) {
            return Object.prototype.toString.call(selector) === "[object Array]"
        },
        isFunction: function(selector) {
            return typeof selector === "function"
        },
        isObject: function(selector) {
            return typeof selector === "object"
        },
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
        },
        each: function(obj, fn) {
            // 1. 判断是不是数组或者类数组（包括jQuery对象）
            if(myjQuery.isArrayLike(obj)) {
                for(let i = 0;i < obj.length;i ++) {
                    // 若传入过多的参数，则那些参数无法访问，但可以通过arguments进行访问
                    // 1.1 调用call使得原本函数中this指向window转向指向value
                    let flag = fn.call(obj[i] ,i, obj[i]);
                    // 1.2 实现返回true继续执行，返回false停止执行
                    if(flag === true) 
                        continue;
                    else if(flag === false)
                        break;
                }
            }
            // 2. 若是对象
            else if(myjQuery.isObject(obj)){
                for(let key in obj) {
                    flag = fn.call(obj[key] ,key, obj[key]);
                    if(flag === true) 
                        continue;
                    else if(flag === false)
                        break;
                }
            }
        },
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
        },
        // 用于获取对应dom的对应的css属性
        getStyle: function(dom, styleName) {
            if(window.getComputedStyle) {
                return window.getComputedStyle(dom)[styleName];
            }
            else {
                return dom.currentStyle[styleName];
            }
        },
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
    // 实例对象中的DOM相关的方法的工具类
    myjQuery.prototype.extend({
        empty: function() {
            // 1. 遍历所有的元素
            this.each(function(key, value) {
                // 1.1 删除第一级元素节点内部的内容
                value.innerHTML = "";
            })
            return this;
        },
        remove: function(selector) {
            if(arguments.length === 0) {
                this.each(function(key, value) {
                    let parent = value.parentNode;
                    parent.removeChild(value);
                })
            }
            else {
                this.each(function(key, value) {
                    // 1. 找到当前dom元素的父节点
                    let parentNode = value.parentNode;
                    // 2. 查找当前的父节点中有多少满足选择器的子节点
                    let nodes = parentNode.querySelectorAll(selector);
                    $.each(nodes, function(k, v) {
                        // 若该子节点与当前的节点有相同的，则进行删除
                        if(v === value) {
                            parentNode.removeChild(value);
                        }
                    } )
                })
            }
            
            return this;
        },
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
        },
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
        },
        appendTo(selector) {
            // 1. 统一将传入的数据转化为jQuery对象
            var $target = $(selector);
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
            // 使用工具的方法
            // let $this = this;
            // $.each($target, function(key, value) {
            //     $this.each(function(k, v) {
            //         if(key === 0) {
            //             value.appendChild(v);
            //             res.push(v)
            //         }
            //         else {
            //             let v_clone = v.cloneNode(true);
            //             value.appendChild(v_clone);
            //             res.push(v_clone)
            //         }
            //     })
            // })
            return $(res);
        },
        prependTo(selector) {
            let $this = this;
            let $target = $(selector);
            let res = [];
            $.each($target, function(key, value) {
                // 每一次插入的是当前父元素的第一元素，而不是已经插入后的父元素的第一个元素
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
        },
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
        },
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
        },
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
        },
        before(source) {
            let $source = $(source);
            $source.insertBefore(this);
            return this;
        },
        replaceAll(target) {
            // 1. 将相应的元素添加到target的前面
            let $target = $(target)
            let res = this.insertBefore($target);
            // 2. 删除target元素即可
            $target.remove();
            return res;
        },
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
    // 属性操作相关的方法
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
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
    // 与事件的绑定相关的方法
    myjQuery.prototype.extend({
        on: function(eventName, callback) {
            this.each(function(key, dom) {
                myjQuery.addEvent(dom, eventName, callback);
            })
            return this;
        },
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
    myjQuery.fn = myjQuery.prototype;
    // 利用init()来创建对象
    // 为了init()的方法可以调用myjQuery中的方法,需要讲其原型指向myjQuery的原型
    myjQuery.prototype.init.prototype = myjQuery.prototype;
    // 将myjQuery绑定到window上
    window.myjQuery = window.$ = myjQuery
})(window)