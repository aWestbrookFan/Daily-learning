// console.log(global);

// 整理一些面试题或者一些笔试题

//给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

var lengthOfLongestSubstring = function (s) {
    if (!s) {
        return 0;
    }
    if (s.length === 1) {
        return 1;
    }
    s = s.split("");
    let max_length = 0;
    for (let i = 0; i < s.length - 1; i++) {
        let start = s[i];
        for (let j = i + 1; j < s.length; j++) {
            if (start.indexOf(s[j]) !== -1) {
                if (start.length > max_length) {
                    max_length = start.length;
                }
                break;
            }
            start += s[j];
            if (start.length > max_length) {
                max_length = start.length;
            }
        }
        if (start.length > s.length - i) {
            return start.length;
        }
    }
    return max_length;
};

// let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" +
bcdefghijklmnopqrstuvwxyzABCD"
//

// console.log(lengthOfLongestSubstring(str));


// Map 和 forEach 的区别
/*
*  map会返回一个新数组，不对原数组产生影响,foreach不会产生新数组，foreach返回undefined
   map因为返回数组所以可以链式操作，foreach不能
   map里可以用return ,而foreach里用return不起作用，foreach不能用break，会直接报错
* */

// 比较一下主要用数组来看一下
(function () {
    const arr = [1, 2, 3, 4, 5, 6];
    let map_arr = arr.map((item, index) => {
        return item * 2;
    });
    console.log(map_arr, arr);


    // 方法对数组的每个元素执行一次给定的函数。不会改变原数组
    arr.forEach((item, index, value) => {
        console.log(item);
    });
    console.log(arr);
})();

