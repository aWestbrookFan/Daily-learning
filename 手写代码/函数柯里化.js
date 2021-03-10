/*
* 函数柯里化
* 概念：柯里化是把接收多个参数的函数转换成单一函数的参数
*  并且返回接收余下的参数且返回结果的新函数的技术
* */
//
// function currying(fn) {
//     let args = [];
//     return function temp(...newArgs) {
//         if (newArgs.length) {
//             args = [...args, ...newArgs]
//             return temp
//         } else {
//             let val = fn.apply(this, args)
//             arg = []
//             return val
//         }
//     }
// }
//
//
// function add (...args) {
//     //求和
//     return args.reduce((a, b) => a + b)
// }
//
// let addCurry = currying(add)
// console.log(addCurry(1)(2)(3)(4, 5))  //15

// function curry(fn) {
//     return function curried(...args) {
//         // 需要判断条件
//         if (args.length >= fn.length) {
//             return fn.apply(this, args)
//         } else {
//             return function (...args2) {
//                 return curried.apply(this, args.concat(args2));
//             }
//         }
//
//     }
// }

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2))
            }
        }
    }

}

function curry1() {
    return function curried(...args) {

    }
}

function add(a, b, c) {
    return a + b + c
}

let curriedSum = curry(add);

console.log(curriedSum(1)(2,3));






