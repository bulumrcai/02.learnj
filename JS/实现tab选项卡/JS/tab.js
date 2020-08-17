var that;
class Tab {
    constructor(id) {
        that = this;
        // 必须放在首行
        this.main = document.querySelector(id);
        this.lists = this.main.querySelectorAll("li");
        this.sections = this.main.querySelectorAll("section");
        this.tabAdd = this.main.querySelector('.tab-add')
        this.buttons = this.main.querySelectorAll(".firstnav ul li img")
        // li的父元素
        this.liParent = this.main.querySelector(".firstnav ul:first-child")
        this.sectionParent = this.main.querySelector(".tabsbox .tabscon")
        this.init();
    }
    // 重新获取标签
    update() {
        this.lists = this.main.querySelectorAll("li");
        this.sections = this.main.querySelectorAll("section");
        this.buttons = this.main.querySelectorAll(".firstnav ul li img");
        this.text = this.main.querySelectorAll(".firstnav ul li span");
    }
    // 初始化操作让相应的元素绑定事件
    init() {
        this.update();
        for(let i = 0;i < this.lists.length;i ++){
            this.lists[i].index = i;
            this.lists[i].onclick = this.toggleTab;
            // 只能使用函数名或者函数定义，不能加上()而表示调用
                // console.log(this.index)
                // 函数的this：指向调用者 
            this.buttons[i].index = i;
            this.buttons[i].onclick = this.deleteTab;
            this.text[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editSelection;
        }
        this.tabAdd.onclick = this.addTab;

    }
    // 清除其他标签中的类,this指的是该对象
    clearClass() {
        for(let i = 0;i < this.lists.length;i ++){
            this.lists[i].className = "";
            this.sections[i].className = "";
        }
    }
    // 实现tab的切换 tab
    // this指的是lists[i]对象，所以不能修改sectionstion，使用全局变量来解决这个问题
    toggleTab() {
        that.clearClass();
        this.className = "liactive";
        // console.log(this.index)
        that.sections[this.index].className = "conactive";
        // console.log(this.index);
    }

    addTab() {
        // console.log("+");
        // 1. 创建li元素和section元素
        // 以前做法：动态创建元素createElement，但是元素内容较多，需要innerHTML赋值在appendChild追加到父元素里面
        // appendChild不支持追加字符串的子元素
        // 高级的做法：利用insertAdjacentHTML()可以直接把字符串格式元素添加到父元素中
        that.clearClass();
        const liInnerHtml = `<li class="liactive"><span>新选项卡</span><img src="./img/叉.svg" alt=""></li>`
        that.liParent.insertAdjacentHTML("beforeend", liInnerHtml);
        const sectionInnerHtml = `<section class="conactive">new content</section>`;
        that.sectionParent.insertAdjacentHTML("beforeend",sectionInnerHtml );
        // 构造函数在建立对象的时候绑定事件，新增选项卡并没有绑定对应的事件，所以需要再绑定
        // 需要重新读取li，section并重新绑定
        
        that.init();
    }

    deleteTab(event) {
        // li也有绑定事件
        //冒泡的理解：点击叉之后，会先触发叉的事件，然后会触发其父元素的事件，所以需要取消对应的冒泡效果
        // stopPropagation()：阻止冒泡，防止触发父元素的事件
        // console.log(this.index)
        // remove()可以直接删除对应的元素
        event.stopPropagation();
        let isActive = that.lists[this.index].className === "liactive";
        that.lists[this.index].remove();
        that.sections[this.index].remove();
        that.init();
        // 要求：删除最后一个时，选定在倒数第一个
        // that.lists[index - 1].className = "liactive";
        // that.sections[index - 1].className = "conactive";
        // 可以自动的使用一个点击事件: click()
        // 若选项小于0，应该如何处理，可以使用&&的短路来执行，因为undefined为false
        // 当我们删除的不是选中状态则保持不变
        // 法1：若删除后仍然存在liactive
        // if(!that.main.querySelector(".liactive"))
        //     that.lists[this.index - 1]  && that.lists[this.index - 1].click()  
        // 法2：在删除之前判断选项卡的状态并用一个变量标记出来（删除前，删除后 ）
        if(isActive)
            that.lists[this.index - 1]  && that.lists[this.index - 1].click()
    }
    // ondblclick: 双击事件
    // 双击禁止选定文字：window.getSelection?window.getSelection().removeAllRanges():ducument.selection.empty();
    // 实质上是双击之后添加文本框，失去焦点或者按下回车，则把文本框中的值赋给原先的值即可
    editTab() {
        // event.stopPropagation();
        const str = this.innerHTML;
        window.getSelection?window.getSelection().removeAllRanges():ducument.selection.empty();
        this.innerHTML = `<input type="text" style="width: 50px" />`;
        const input = this.children[0];
        input.value = str;
        // 使文本框的文字处于选定状态
        input.select();
        // 当我们离开文本框时，将对应的值赋给span
        input.onblur = function() {
            this.parentNode.innerHTML = this.value;
            // this.remove();不需要进行remove
        }
        input.onkeyup = function(event) {
            if(event.keyCode === 13)
                this.blur();
                // 手动调用表单失去焦点事件，不需要鼠标离开
        }
    }
    editSelection() {
        const str = this.innerHTML;
        window.getSelection?window.getSelection().removeAllRanges():ducument.selection.empty();
        this.innerHTML = `<textarea style="width: 780px"/>`;
        const textarea = this.children[0];
        textarea.value = str;
        textarea.select();
        textarea.onblur = function() {
            this.parentNode.innerHTML = this.value;
            // this.remove();不需要进行remove
        }
        textarea.onkeyup = function(event) {
            if(event.keyCode === 13)
                this.blur();
                // 手动调用表单失去焦点事件，不需要鼠标离开
        }
    }
}

const tab = new Tab("#tab")