/*
*
* instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
*
* 函数进行模拟
* */

let myInstanceof = function (L, R) {
    //L 表示左表达式，R 表示右表达式
    var O = R.prototype; // 取 R 的显示原型
    L = L.__proto__; // 取 L 的隐式原型
    while (true) {
        if (L === null) return false;
        if (O === L)
            // 这里重点：当 O 严格等于 L 时，返回 true
            return true;
        L = L.__proto__;
    }

}

/**/

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);


console.log(myInstanceof(auto,Car));
// expected output: true


