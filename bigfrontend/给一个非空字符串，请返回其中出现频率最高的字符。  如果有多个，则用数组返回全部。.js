/**
 @desc:给一个非空字符串，请返回其中出现频率最高的字符。
 如果有多个，则用数组返回全部。
 @author:sww
 @date 2021-04-21
 @time 11:17
 @code
 */

/*
* 给一个非空字符串，请返回其中出现频率最高的字符。如果有多个，则用数组返回全部。
* */

function count(str) {
    let obj = {};
    /* 定义一下最大值和最大值数组 */
    let maxes = [],
        maxVal = 0;
    for (let strKey in str) {
        const strKeyPre = str[strKey];
        if (!obj[strKeyPre]) {
            obj[strKeyPre] = 1
        } else {
            obj[strKeyPre]++;
        }
        if (obj[strKeyPre] > maxVal) {
            maxVal = obj[strKeyPre]
        }
    }
    for (let objKey in obj) {
        if (obj[objKey] === maxVal) {
            maxes.push(objKey)
        }
    }
    return maxes.length > 1 ? maxes : maxes[0]
}

console.log(count('a'))



