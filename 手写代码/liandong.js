/*对比
*
*
*  返回值：合格  true
*  不合格  false
*  技术指标 jszb
* */
const gzObj = {
    '±': function (val, jszb) {
        let qj = jszb.split("±");
        if (qj[0]) {
            qj[0] = +qj[0] - (+qj[1]);
            qj[1] = +qj[0] + (+qj[1]);
            return val >= qj[0] && val <= qj[1];
        }
        return val >= (+qj[1]) * -1 && val <= qj[1];
    },
    '~': function (val, jszb) {
        let qj = jszb.split("~");
        return val >= +qj[0] && val <= +qj[1];

    },
    '-': function (val, jszb) {
        let qj = jszb.split("-");
        return val >= +qj[0] && val <= +qj[1];
    },
    '≥': function (val, jszb) {
        return val >= jszb.split("≥")[1]
    },
    '>': function (val, jszb) {
        return val > jszb.split(">")[1]
    },
    '≤': function (val, jszb) {
        return val <= jszb.split("≤")[1]
    },
    '<': function (val, jszb) {
        return val >= jszb.split("<")[1]
    },
}
function compare(arr, jszb) {
    const gzArray = Object.keys(gzObj);
    let gz = '';
    for (const gzKey of gzArray) {
        if (jszb.includes(gzKey)) {
            gz = gzKey
            break;
        }
    }
    /* 如果没有匹配到对应的字符串的话*/
    if (!gz) {
        return false;
    }
    return arr.every((current) => {
        return gzObj[gz](+current, jszb)
    });
}

console.log(compare([6, 5], '3(4,5)'))


