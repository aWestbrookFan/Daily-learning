```javascript

let testCase = [1, 2, 3, 5, 6, 1, 8, 2, 3, 56, 2, 345, '3'];

// concat不修改原数组
console.log(testCase.concat([1, 2]));


// copywithin不修改原数组 在元素组target进行分别替换。
console.log(testCase.copyWithin(0, 2, 4));


//  entries  方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
console.log(testCase.entries());

// every 方法测试一个数组里面所有元素能否通过测试
console.log(testCase.every((value, index, obj) => {
    return value < 10;
}));

// some 方法测试一个数组里面有一个元素就能通过测试
console.log(testCase.some((value, index, obj) => {
    return value < 10
}));

// fill在数组申明的数组长度空间下 进行填充
let arr = new Array(100);
console.log(arr.fill(1, 0, 2));

// filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。
// 通过回调函数里面的条件将过滤一部分数组
console.log(testCase.filter((value, index, obj) => {
    return value < 5;
}));

// find 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
console.log(testCase.find((value, index, obj) => {
    return value > 10;
}));

// findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。 否则返回-1
console.log(testCase.findIndex((value, index, obj) => {
    return value > 10;
}));

// flat() /扁平 方法按照一个指定的深度递归遍历整个数组，将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
// console.log(testCase.flat());
// [1,2,3,4,[1,2,[1,2,3],3]].flat(2)
// (10) [1, 2, 3, 4, 1, 2, 1, 2, 3, 3]

// forEach() 方法对数组的每个元素执行一次给定的函数。
console.log(testCase.forEach((value, index, array) => {
    // testCase[index] = 1;
    // console.log(testCase);
}));

// includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false
console.log(testCase.includes('3'));

// indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
console.log(testCase.indexOf('3'));

// join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符
console.log(testCase.join(''));

// keys() 方法返回一个包含数组中每个索引键的Array Iterator对象。
// console.log();
// for (const key of testCase.keys()) {
//     console.log(key);
// }

// lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，
// 如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始
console.log(testCase.lastIndexOf('3'));

// map() 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
console.log(testCase.map((value, index, array) => {
    return value + 1;
}));

// pop() push()
console.log(testCase.push(1), testCase.pop());
console.log(testCase);

// 重要 reduce 很重要  方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
// 是这样的 reduce 每一个回调函数的返回值 将被作为下一次的accumulator的值
console.log(testCase.reduce(function (accumulator, currentValue) {
    return accumulator + (+currentValue);
}));

// reduceRight() 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。
// reduceRight() 除了回调参数之外 还有一个 initialValue 参数 指定previousValue的初始值。
//
console.log(testCase.reduceRight((previousValue, currentValue) => {
    return previousValue + currentValue;
}, ''));

// reverse() 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。
// 该方法会改变原数组

console.log(testCase.reverse().reverse());

//shift() 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
// console.log(testCase.shift());
// console.log(testCase)

//slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（
// 包括 begin，不包括end）。原始数组不会被改变。

let testCase1 = [1, 1, 1, {a: 1}];
console.log(testCase1.slice(2)[1].a = 2);
console.log(testCase1);

// sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
console.log(testCase.sort(function (a, b) {
    return a - b;
}));

// splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
console.log(testCase.splice(1, 0, 123456));

// toLocaleString() 返回一个字符串表示数组中的元素。
// 数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开
console.log(testCase.toLocaleString());


// unshift() 方法将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)
console.log(testCase.unshift([1, 2]));
```

