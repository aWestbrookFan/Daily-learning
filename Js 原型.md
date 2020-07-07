## JavaScript 原型

- ### 什么是原型？

  [[Prototype]] 机制就是指对象中的一个内部链接引用 另一个对象。对象之间通过内部的[[Prototype]] 链关联的。

  ```javascript
  JavaScript 中这个机制的本质就是对象之间的关联关系
  对象之间的关系不是复制而是委托。 
  {
          let AnotherObj = {
              a:2
          };
          let obj = Object.create(AnotherObj);
          console.log(obj);
   }

  ```
  
  ![image-20200701113652063](C:\Users\Dell\AppData\Roaming\Typora\typora-user-images\image-20200701113652063.png)
  
  
  
 - ### 原型的设计模式 ---> 委托行为

   ```javascript
   委托行为意味着某些对象（XYZ）在找不到属性或者方法引用时会把这个请求委托给另一 个对象（Task）。
   这是一种极其强大的设计模式，和父类、子类、继承、多态等概念完全不同。
   在你的脑海中 对象并不是按照父类到子类的关系垂直组织的，而是通过任意方向的委托关联并排组织的 
   {
           let Task = {
               setID: function (ID) {
                   this.id = ID;
               }, outputID: function () {
                   console.log(this.id);
               }
           };
   
           // 让 XYZ 委托 Task
           let XYZ = Object.create(Task);
   
           XYZ.prepareTask = function (ID, Label) {
               this.setID(ID);
               this.label = Label;
           };
   
           XYZ.outputTaskDetails = function () {
               this.outputID();
               console.log(this.label);
           };
   
       }
   ```

   

  - ### 有什么优势？

    简化代码，易维护。