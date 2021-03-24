/*
* 防抖节流
* 1. 防抖
*    基本原理：在事件被触发n秒后在执行回调，如果在这个n秒内又被触发，则重新计时
*    一些使用的场景：按钮提交 防止按钮在n秒内多次执行 只执行最后提交的那次
*                 搜索框联想场景：防止联想发送请求 只发送最后一次输入
*
*
* 2. 节流
*     节流 规定在一个单位时间内 只能触发一次函数。如果这个单位时间内触发多次函数，则有一次生效
*      使用场景 拖拽场景：固定时间内只执行一次
*              监控浏览器 resize
* */


// 防抖的实现

function debounce(func, wait) {
    // 采用闭包来 保正变量访问
    let timeout = null
    return function () {
        const context = this
        const args = arguments
        clearTimeout(timeout)
        timeout = setTimeout(function () {
            func.apply(context, args)
        }, wait)
    }
}

//节流的实现
//   1.使用时间戳实现

function throttle(func, wait) {
    let previous = 0;
    return function () {
        let now = +new Date();
        let context = this;
        let args = arguments;
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }

}


function sendStatistic() {
    // 固定的统计域名地址
    let url =
        'https://data.game.xiaomi.com/1px.gif?ac=xm_client&client=sales_pic';

    const img = new Image();
    // eslint-disable-next-line no-multi-assign
    img.error = img.onload = function _next() {
     console.log(11)
    };
    img.src = url;

}



