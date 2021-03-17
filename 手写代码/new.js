/*
*
* 实现new
*
* */

function Test(name,age) {
    this.name = name;
    this.age = age ;
}




function newObject() {
    // 创建一个空的对象
    let obj = {}
    // 获得构造函数
    let Con = [].shift.call(arguments)
    // 链接到原型 （不推荐使用）
    obj.__proto__ = Con.prototype
    // 绑定 this，执行构造函数
    let result = Con.apply(obj, arguments)
    // 确保 new 出来的是个对象
    return typeof result === 'object' ? result : obj
}

let a = newObject(Test,'name','11');
console.log(a);
console.log(a.__proto__ == Test.prototype)
