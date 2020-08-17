const goodsData = [
    {
        id: 1,
        pname: "小米",
        pprice: 3999
    },
    {
        id: 2,
        pname: "oppo",
        pprice: 999
    },
    {
        id: 3,
        pname: "荣耀",
        pprice: 1299
    },
    {
        id: 4,
        pname: "华为",
        pprice: 1999
    }
]

class Table {
    constructor(id) {
        this.table = document.querySelector(id);
        this.tableAdd(goodsData);
    }
    tableDelete() {
        // this.trElements = this.table.querySelectorAll('tr');
        // for(let i = 1;i < this.trElements.length;i ++){
        //     this.trElements[i].remove();
        // }
        // 法2:
        this.table.innerHTML = `
        <tr>
            <td>id</td>
            <td>产品名称</td>
            <td>价格</td>
        </tr>
        `
    }
    // 清空原来的数据的方法
    // 直接对该元素的innerHTML赋值一个空字符或者赋予必要的值
    // 使用remove方法移动空对应的元素
    tableAdd(data) {
        this.tableDelete();
        data.forEach(value => {
            let tr = document.createElement("tr");
            tr.innerHTML = "<td>" + value.id + "</td>" 
                         +  "<td>" + value.pname + "</td>"
                         + "<td>" + value.pprice + "</td>";
            this.table.appendChild(tr)
            // 要给table添加对应的子元素
            //  - appendChild(元素名)
            //  - 创建对应的元素
            //  - 将元素innerHTML补充完整
            
        })
        // console.log(this.table.innerHTML)
    }
}
const table = new Table('.good-table');

function btn1Click() {
    let start = parseFloat(document.querySelector(".search-box .nav .start").value);
    let end = parseFloat(document.querySelector(".search-box .nav .end").value);
    if(start > end)
        alert("start > end")
    let data = goodsData.filter(value => value.pprice >= start && value.pprice <= end);
    table.tableAdd(data);
}

function btn2Click() {
    let query = document.querySelector(".search-box .nav .query").value;
    let data = goodsData.filter(value => query === value.pname);
    table.tableAdd(data);
}

// 找到对应的按钮并且
