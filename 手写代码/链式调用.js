/*
* 链式调用计师调用完方法之后返回自身实例
* */

// function Class1() {
//     console.log('初始化');
//
// }
//
// Class1.prototype.method = function (param) {
//
// }

function sleep(callback,time) {
    if(typeof callback === 'function'){
        setTimeout(callback,time)
    }
}

function output(){
    console.log(1);
}
sleep(output,1000);
