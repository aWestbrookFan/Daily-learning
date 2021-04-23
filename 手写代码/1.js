/**
 @desc:
 @author:sww
 @date 2021-04-13
 @time 12:46
 */

function FZ_String() {
    let i = "i am a student"
    var s = i.split(" ")
    var s1 = [];
    for (let j = 0; j < s.length; j++) {
        s1[j] = s[j].split("").reverse().join("")
    }

    console.log(s1.join(" "));

}

console.log(FZ_String())


const reverse = (x) => {
    // 非空判断
    if (typeof x !== 'number') {
        return;
    }
    // 极值
    const MAX = 2147483647;
    const MIN = -2147483648;
    // 识别数字剩余部分并翻转
    const rest = x > 0
            ? String(x).split('').reverse().join('')
            :
            String(x).slice(1).split('').reverse().join('');

    // 转换为正常值，区分正负数
    const result = x > 0 ? parseInt(rest, 10) : 0 - parseInt(rest, 10);

    // 边界情况
    if (result >= MIN && result <= MAX) {
        return result;
    }
    return 0;
};
