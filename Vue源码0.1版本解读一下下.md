### Vue源码0.1版本解读一下下

​	读了一下Vue的源码，总体来说读源码还是需要按照主方向来进行把握，不能掉进细节里面。这样就会陷进去。我对这部分代码做了一些注释，保证主线的正常即可。

1. 看了一下index.html里面的调用，首先先创建一个MiniVue的实例，看代码，传入了对象里面，里面有一些参数的，el || data|| methods等等

   ```javascript
    new MiniVue({
           el: '#app',
           data: {
               age: 18,
               name: '小明',
               obj: {
                   a:1
               }
           },
           methods: {
               increase() {
                   this.age++
               },
               sayHi() {
                   alert('hi')
               }
           }
       })
   ```
   
   
   
2. 然后我们到main.js 里面有一个MiniVue构造函数，这个构造函数就是进行一些初始化的操作，对参数的赋值，调用init()的基本实现
   ```javascript
   function MiniVue(options) {
    // 存放观察者实例
    this._watchers = []
    // 存放文本节点 在compile上会用到
    this._textNodes = []
    //对参数放入构造函数中，后面可以更方便的取
    this.$options = options
    // 执行初始化函数
    this.init()
   }
   
  3. 整个init函数是挂在函数的原型上（js继承的方式），这个init做了啥？ 都在下面的代码里

     ```javascript
     MiniVue.prototype = {
         // 初始化数据和方法
          init() {
             this.initData()
             this.initMethods()
             // 监听数据
             new Observer(this._data)
             // 解析指令
             new Compile(this)
             // this.initWatch()
         },
        // 对数据进行挂载，挂载到vm._data上，并且做了一下代理，可通过vm.msg来访问vm._data.msg
         initData() {
             const vm = this
             vm.$el = document.querySelector(vm.$options.el)
             let data = vm.$options.data
             data = vm._data = typeof data === 'function'? data() : data || {}
             const keys = Object.keys(data)
             // 对每一个key实现代理 即可通过vm.msg来访问vm._data.msg
             keys.forEach(e => {
                 vm.proxy(vm, '_data', e)
             })
         },
        // 对方法进行挂载到vm上，我们可以查看一下下面的输出
         initMethods() {
             const vm = this
             const methods = vm.$options.methods? vm.$options.methods : {}
             const keys = Object.keys(methods)
             // 将methods上的方法赋值到vm实例上
             keys.forEach(e => {
                 vm[e] = methods[e]
             })
         },
         // 读取vm.data 是vm._data上的数据
         proxy(target, sourceKey, key) {
             const sharedPropertyDefinition = {
                 enumerable: true,
                 configurable: true
             }
             // 实际上读取和返回的是vm._data上的数据
             sharedPropertyDefinition.get = function proxyGetter () {
                 return this[sourceKey][key]
             }
             sharedPropertyDefinition.set = function proxySetter (val) {
                 this[sourceKey][key] = val
             }
             Object.defineProperty(target, key, sharedPropertyDefinition)
         },
         // 暂时先不考虑，这是对数据进行的跟踪。
         $watch(variable, callback) {
             // new Watcher(this, variable, callback)
         }
     }
     ```
      **打印了vm的实例数据，可以看出方法已经挂到，_data赋值了**
     ![image-20210506132146413](C:\Users\Dell\AppData\Roaming\Typora\typora-user-images\image-20210506132146413.png)

  4. 现在我们已经对this.initData()、 this.initMethods()进行分析，后面两个就是下面这两个。

     ```javascript
      // 监听数据
      new Observer(this._data)
      // 解析指令
      new Compile(this)
     ```

  5. new Observer干了啥？看完下面基本就了解了observer做了啥，对_data里面每个属性都进行了监听，分别通过get来拦截、set进行更新。可以试一下？在get处打一个断点？然后控制台访问一下数据，就会到这个断点。究竟什么时候页面上使用的数据会被收集进来呢？继续往下看

     ```javascript
     // 根据导出的函数，知道了调用了walk方法？为什么叫walk？ 这个obj就是上面赋值的vm._data
     export default function Observer(obj) {
         this.walk(obj)
     }
     // 继续往下看 walk干了啥？对传入的对象进行分别的执行了defineReactive() 
     Observer.prototype = {
         walk(obj) {
             const keys = Object.keys(obj)
             for (let i = 0, len = keys.length; i < len; i++) {
                 defineReactive(obj, keys[i], obj[keys[i]])
             }
         }
     }
     // defineReactive干了啥？ 首先创建了一个dep这是啥？简单来讲就是进行依赖收集的一个容器。 Dep：扮演观察目标的角色，每一个数据都会有Dep类实例，它内部有个subs队列，subs就是subscribers的意思，保存着依赖本数据的观察者，当本数据变更时，调用dep.notify()通知观察者
     function defineReactive(obj, key, val) {
         // 一个闭包 保存在里面
         const dep = new Dep()
         // 如果值是一个对象 递归监听
         if (typeof val === 'object') {
             new Observer(val)
         }
         // 核心，get时候进行了依赖收集？但是究竟什么时候页面上使用的数据会被收集进来呢？后面再细说
         Object.defineProperty(obj, key, {
             enumerable: true,
             configurable: true,
             get() {
                 console.log('defineReactive')
                 // 收集对应的观察者对象
                 if (Dep.target) {
                     dep.depend()
                 }
                 return val
             },
         // set时候进行一下判断，数据有无变化，变化时候进行依赖更新
             set(newVal) {
                 if (val === newVal) {
                     return
                 }
                 val = newVal
                 // 如果新值是对象 递归监听
                 if (typeof val === 'object') {
                     new Observer(val)
                 }
                 // 触发更新
                 dep.notify()
             }
         })
     }
     ```

  6. new Complie干了啥？解析页面上一些数据和指令。Vue版本里面template被编译后，会形成AST，在执行render函数过程中就会触发data.a的getter,实现依赖收集，这里我们继续往下看？

      原型方法 init执行了parse函数render函数，那我们直接就看parse函数和render函数，抛出细节，我们可以看到的就是在render里面进行了new Watcher() 那么watcher干嘛的，就是我们说的观察者，或者暂且理解为订阅者。这个时候我们去看一下watcher怎么实现的？

     ```javascript
     // 其实我们并不需要很关心细节，直接可以看他创建实例时候干了啥？ 直接看init()做了啥
     export default function Compile(vm) {
         this.el = vm.$el
         this.vm = vm
         // 这里都是一些正则，进行对字符串的匹配
         this.onRe = /^(v-on:|@)/
         this.modelRe = /^v-model/
         this.bindRe = /^(v-bind:|:)/
         this.braceRe1 = /{{\w+}}/g
         this.braceRe2 = /[{}]/g
         this.dirs = []
         this.handles = handles
         this.init()
     }
     
     Compile.prototype = {
         init() {
             this.parse(this.el)
             this.render()
         },
     
         parse(el) {
             const attrs = el.attributes
             let name
             [...attrs].forEach(e => {
                 if (this.onRe.test(e.name)) {
                     name = e.name.replace(this.onRe, '')
                     this.addDir(this.handles.on, name, e.name, e.value, el)
                 } else if (this.bindRe.test(e.name)) {
                     // 类似:bind="name" 解析完后将原本的值删掉
                     el.removeAttribute(e.name.split('=')[0])
                     name = e.name.replace(this.bindRe, '')
                     this.addDir(this.handles.bind, name, e.name, e.value, el)
                 } else if (this.modelRe.test(e.name)) {
                     name = e.name.replace(this.modelRe, '')
                     this.addDir(this.handles.model, name, e.name, e.value, el)
                 }
             })
     
             const children = el.childNodes
             if (children.length > 0) {
                 children.forEach(ele => {
                     switch (ele.nodeType) {
                         // 元素节点
                         case 1:
                             this.parse(ele)
                             break
                         // 文本节点
                         case 3:
                             if (this.braceRe1.test(ele.nodeValue)) {
                                 this.vm._textNodes.push(ele)
                             }
                             break
                     }
                 })
             }
         },
         render() {
             const vm = this.vm
             const that = this
             this.dirs.forEach(e => {
                 const handle = e.handle
                 if (handle.implement) {
                     handle.implement(e.vm, e.el, e.dirName, e.expOrFn)
                 }
                 const update = function (newVal, oldVal) {
                     handle.update(e.vm, e.el, e.expOrFn, newVal, oldVal)
                 }
                 // 在这里开始创建观察者实例 将监听的值变化时 触发update回调函数
                 new Watcher(this.vm, e.expOrFn, update)
             })
             const handles = this.handles.textNode
     
             vm._textNodes.forEach(e => {
                 let arry = e.nodeValue.match(this.braceRe1)
                 let rawValue = e.nodeValue
                 arry.forEach(str => {
                     let variable = str.replace(this.braceRe2, '')
                     handles.implement(vm, e, variable)
                     const update = function (newVal, oldVal) {
                         handles.update(vm, newVal, oldVal, e, variable, rawValue, that.braceRe1, that.braceRe2)
                     }
                     // 监听文本节点 在这里开始创建观察者实例 将监听的值变化时 触发update回调函数
                     new Watcher(vm, variable, update)
                 })
             })
         }
     }
     ```

  7. Watcher就是订阅者啦，就是我们get时候被搜集的依赖了。不用慌，我们继续看看。初始化之后我们最关键的点在于？this.value = this.get()。**在创建watcher实例时先取一次值这个有什么用？非常的有用！！因为我们之前在obsever里面知道了,对数据已经做了一层拦截嘛**，而且get时候做了啥？在读取值时先将观察者对象赋值给Dep.target 否则Dep.target为空 不会触发收集依赖，我们是不是已经进行了依赖收集了？当然后面还有啊？如何notify()?

     ```javascript
     // expOrFn为表达式或一个变量名
     export default function Watcher(vm, expOrFn, callback) {
         vm._watchers.push(this)
         this.id = uid++
         this.vm = vm
         // 存放dep实例
         this.deps = []
         // 存放dep的ID
         this.depIds = new Set()
         // 更新触发回调函数
         this.cb = callback
     
         this.getter = () => vm[expOrFn]
         this.setter = (val) => {
             vm[expOrFn] = val
         }
         // 在创建watcher实例时先取一次值
         this.value = this.get()
     }
     Watcher.prototype = {
         get() {
             console.log('watcher')
             // 在读取值时先将观察者对象赋值给Dep.target 否则Dep.target为空 不会触发收集依赖
             Dep.target = this
             const value = this.getter()
             // 触发依赖后置为空
             Dep.target = null
             return value
         },
     }
     ```
     下面就是我们observer里面get进行的
     ![image-20210506135601236](C:\Users\Dell\AppData\Roaming\Typora\typora-user-images\image-20210506135601236.png)

  8. 

###   总结：上面基本过程就是响应式原理的基本过程了，后面还有很多？像如何模板怎么替换的？之前的正则是不是要用上了？这里并没有使用VNode。怎么进行数据和页面的更新？

​     