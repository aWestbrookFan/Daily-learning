
// function createCounter() {
//     // your code here
//     let count = 0;
//
//     return {
//         get count(){
//             return count+=1;
//         }
//     }
// }
//
// const counter = createCounter()
// console.log(counter.count)
// console.log(counter.count)


// 给一个可能含有重复字符的字符串，请找出第一个重复的字符。
function firstDuplicate(str) {
    var obj = {}
    for (let i = 0; i < str.length; i++) {
        const objResult = str[i]
        if (obj[objResult]){
            obj[objResult] =  ++obj[objResult]
            if (obj[objResult]>1){
                return str[i]
            }

        }else {
            obj[objResult] = 1
        }
    }
    return null
}

console.log(firstDuplicate('sww'))



/*  手写 instanceof*/

class A {}
class B extends A {}

const b = new B()

function myInstanceOf(obj,target) {
    console.log(obj.__proto__)
    console.log(target.prototype)
    console.log(obj.__proto__ == target.prototype)
}

myInstanceOf(b,B)









