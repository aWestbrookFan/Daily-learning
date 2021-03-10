// 深拷贝

//判断数据data 是数组还是对象
//对象的话

function deepClone(data) {
    if (typeof data === 'object') {
        const result = Array.isArray(data) ? [] : {}
        for (let key in data) {
            if (typeof data[key] === "object") {
                result[key] = deepClone(data[key])
            } else {
                result[key] = data[key]
            }
        }
        return result
    } else {
        return data
    }
}

var test = {
    name: 'test',
    fn() {
        console.log(this.name)
    },
    arr: [1, 2],
    obj: {
        foo() {

        }
    }

}

var test1 = console.log(deepClone(test));
