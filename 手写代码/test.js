// var a = 1;
// console.log('a:', a)
// var b = 2;
// console.log('b:', b)
// setTimeout(function task1() {
//     console.log('task1:', 5)
//     Promise.resolve(6).then(function microtask2(res) {
//         console.log('microtask2:', res)
//     })
// }, 0)
// Promise.resolve(4).then(function microtask1(res) {
//     console.log('microtask1:', res)
// })
// var c = 3;
// console.log('c:', c)


setTimeout(()=>{
    console.log(1)
},0)
Promise.resolve(6).then(()=>{
    console.log(6)
})
