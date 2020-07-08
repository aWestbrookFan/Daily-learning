// 认识迭代器
// 为什么要提供？通用模式来组织和复用代码显著提高了代码的可读性和可理解性。
// 什么是迭代器：迭代器是一种有序的、连续的、基于拉取的用于消耗数据的组织方式

// 认识一下 for...of语句
// for...of语句在可迭代对象（
// 包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，
// ，并为每个不同属性的值执行语句
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of

//iterable  可迭代对象
//iterator  迭代器

(function () {
    let iterable = "boo";

    for (let value of iterable) {
        console.log(value);
    }
//     还未成为标准
})();

//认识生成器
// 生成器可以在执行当中暂停自身，可以立即恢 复执行也可以过一段时间之后恢复执行。
// 所以显然它并不像普通函数那样保证运行到完毕。




