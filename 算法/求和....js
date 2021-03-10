/*
*
* 算法实现，给定的无序、不重复的数据data中，取出n个数，使其相加和为sum 并给出算法的时间/空间复杂度
*
* */

/**
 *
 * 解题思路：从array中取出n个数全排列，在取的同时判断是否符合条件，
 * 为了不影响后续排列，每次递归完成，将当前的数组添加到正在排序的array中
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 * @param {Array} array 需要判断的数组
 * @param {number} n 取出n个数
 * @param {number} sum 和为sum的值
 * @param {array} temp 输出和为sum的数组
 */

function getAllCombin(array, n, sum, temp) {
    if (temp.length === n) {
        if (temp.reduce((t, c) => t + c) === sum) {
            return temp;
        }
        return false;
    }
    for (let i = 0; i < array.length; i++) {
        const current = array.shift();
        temp.push(current);
        const result = getAllCombin(array, n, sum, temp);
        if (result) {
            return result;
        }
        temp.pop();
        array.push(current);
    }
}

const arr = [1, 6, 5, 2, 4, 3];
console.log(getAllCombin(arr, 4, 13, []));
