window.onload = function() {
    
    function deleteBtn() {
        // 法1
                // this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
                // 删除之前弹出提示框
                // 删除必须提示对应的名称 firstChild会是空格
        let trElement = this.parentNode.parentNode;
        // let name = trElement.getElementByTagName('td')[0].innerHTML;
        let name = trElement.children[0].innerHTML;
        let flag = confirm(`确认删除${name}?`)
        if(flag)
            trElement.remove();
    }
    const btnsDelete = document.querySelectorAll('#container .employee-table .delete-btn');
    btnsDelete.forEach(btnDelete => btnDelete.onclick = deleteBtn)
        
    const tbody = document.querySelector('#container .employee-table table tbody');
    const btnAdd = document.querySelector('#container .employee .add-btn');
    const inputsElement = document.querySelectorAll('#container .employee ul li input');
    btnAdd.onclick = function() {
        const name = inputsElement[0].value;
        const email = inputsElement[1].value;
        const salary = inputsElement[2].value;
        let trElement = document.createElement('tr');
        trElement.innerHTML = ` 
                                <td>${name}</td>
                                <td>${email}</td>
                                <td>${salary}</td>
                                <td><button class='delete-btn'>删除</button></td>             
                            `
        tbody.appendChild(trElement);
        // 添加子元素时，要元素中已经绑定了的事件要重新更新绑定。(一般只是将onclick后面的函数提出来)
        trElement.querySelector('.delete-btn').onclick = deleteBtn;
    }
}