/**
 @desc:
 @author:sww
 @date 2021-03-23
 @time 22:24

 */

function bubbleSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 4, 3, 2, 1]))
