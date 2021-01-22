const p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve();
    }, 3000)
});

const p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(p1);
    }, 10)
});

p2.then(function () {
   console.log(111)
});
