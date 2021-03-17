/*
* js  代理
* */


const target = {
    foo:'bar'
}
const handler = {
    get(){
        return 'handler override'
    }
}
const proxy = new Proxy(target,handler)
console.log(proxy.foo)

