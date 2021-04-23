let arr = [1,2,3,4]



Array.prototype.myMap = function(callback, thisObj) {
    const result = [];
    this.forEach((...args) => {
        const index = args[1];
        result[index] = callback.apply(thisObj, args);
    })
    return result;
}

let a = arr.myMap((value, index)=>{
    return value+1
})

console.log(a)
