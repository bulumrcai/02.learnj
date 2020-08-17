window.onload = function() {
    function checkReg(reg, inputElement) {
        inputElement.onfocus = function() {
            this.value="";
            this.nextElementSibling.innerHTML="";
        }
        inputElement.onblur = function() {
            if(reg.test(this.value)){
                this.nextElementSibling.innerHTML = "恭喜输入正确";
                this.nextElementSibling.className = "success";
            }
            else{
                this.nextElementSibling.innerHTML = "格式不正确,请重新输入";
                this.nextElementSibling.className = "error";
            }
        }
    }
    let regs = [
        /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
        /^[1-9]\d{4,}$/,
        /^[\u4e00-\u9fa5]{4,8}/,
        /^\d{6}$/,
        /^[a-zA-Z]\w{5,17}$/,
    ];
    (function(regs) {
        const inputElements = document.querySelectorAll('.nav .user li input');
        let i = 0;
        for(;i < regs.length;i ++) {
            checkReg(regs[i], inputElements[i]);
        }
        inputElements[i].onfocus = function() {
            this.value="";
            this.nextElementSibling.innerHTML="";
        }
        inputElements[i].onblur = function() {
            const value = inputElements[i - 1].value;
            if(this.value === value) {
                this.nextElementSibling.innerHTML = "恭喜输入正确";
                this.nextElementSibling.className = "success";
            }
            else{
                this.nextElementSibling.innerHTML = "格式不正确,请重新输入";
                this.nextElementSibling.className = "error";
            }
        }
    })(regs);
}
