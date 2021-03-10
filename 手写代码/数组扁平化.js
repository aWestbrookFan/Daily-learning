/*
* 扁平化数组
*
* 将多维数组变成一个一维数组
* */

let testArr = [1, 2, 3, [4, 5, 6], [1, 2, 3, [1, 2, 3, [1, 2, 3]]]]

function flatten(arr) {
    var result = [];
    arr.forEach((value) => {
        if (Array.isArray(value)) {
            result = result.concat(flatten(value))
        } else {
            result.push(value)
        }
    })
    return result
}



console.log(flatten(testArr).sort((a, b) => {
    return b-a;
}));

