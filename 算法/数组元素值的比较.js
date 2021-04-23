/**
 @desc: [6,2,3,1] 在这个数组里面比该数组 num[i] 小的元素分别为 [3,1,2,0]
 @author:sww
 @date 2021-04-20
 @time 10:08

 */
let arr = [6,6,6,6];

function foo(num) {
    let result = [];
    let translateResult = num.map((value, index) => {
        return {value: value, index: index}
    }).sort((a, b) => {
        return a.value - b.value;
    }).map((value, index) => {
        value['num'] = index
        return value
    }).sort((a, b) => {
        return a.index - b.index;
    }).forEach((value, index) => {
        console.log(value)
        result.push(value["num"])
    })
    return result;
}
console.log(foo(arr))
