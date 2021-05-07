### flexible.js源码解析及移动端的适配开发

1. #### 	前期知识点准备

   - ##### devicePixelRatio

     ```java
     Window 接口的devicePixelRatio返回当前显示设备的物理像素分辨率与CSS像素分辨率之比。 此值也可以解释为像素大小的比率：一个CSS像素的大小与一个物理像素的大小。 简单来说，它告诉浏览器应使用多少屏幕实际像素来绘制单个CSS像素。     
     ```

   - #####  viewport
     
        ```javascript
        视口是用户在网页上的可见区域。
        视口随设备而异，并且在移动电话上的视口会比在计算机屏幕上的视口小。
        在平板电脑和手机之前，网页仅设计用于计算机屏幕，并且网页具有静态设计和固定大小是很常见的。
        然后，当我们开始使用平板电脑和手机上网时，固定大小的网页太大了，无法容纳视口。要解决此问题，这些设备上的浏览器会按比例缩小整个网页以适合屏幕大小。
        ```
     
        

2. #### 代码分析

   ````javascript
   // 主要代码，设置html根节点的大小，rem根据根节点fontsizize的大小来进行动态变化。
        var docEl = document.documentElement
        var dpr = window.devicePixelRatio || 1
     
      // set 1rem = viewWidth / 10
   // 为什么要 viewWidth / 10，主要是进行划分比例，后面根据设计图编写的时候可以进行按照这个来进行缩放，那么 viewWidth / 20 可不可以 当然可以。
           function setRemUnit() {
               var rem = docEl.clientWidth / 10
               docEl.style.fontSize = rem + 'px'
           }
   
           setRemUnit()
   
   // 主要检测浏览器是否支持hairline
         if (dpr >= 2) {
               var fakeBody = document.createElement('body')
               var testElement = document.createElement('div')
               testElement.style.border = '.5px solid transparent'
               fakeBody.appendChild(testElement)
               docEl.appendChild(fakeBody)
               if (testElement.offsetHeight === 1) {
                   docEl.classList.add('hairlines')
               }
               docEl.removeChild(fakeBody)
           }
   
   ````

   3. #### 如何使用
   
      安装的话移步[这边文章](https://www.jianshu.com/p/910c63b22247)
   
      1. 可以在sass里面编写一步到位的sass函数（公共），这样会在编写时候直接粘贴设计图上面的像素
   
      ```css
      /*
      * 根据1080p分辨率来设置比率
      **/
      $base-design-font-size:108px;
      
      /*
      * @Functions
      * @description 去掉数值后的单位
      * @param 含单位字符的数值
      * @return pure number 纯数字
      */
      @function __strip-units($number){
        @if type-of($number) == 'number'{
          @return $number/($number*0 +1);
        }
        @warn 'Exception in method __stip-unit : Not a number value: #{$number}';
        @return $number;
      }
      
      /*
      * @description Convert the px to rem (将实际的设计尺寸px转为相对的rem)
      * @param $origLen 设计图上的实际尺寸
      * @return rem
      */
      @function px2rem($origLen){
        $origLen : __strip-units($origLen);
        $base-design-font-size: __strip-units($base-design-font-size);
        @return #{$origLen/$base-design-font-size}rem;
      }
      
      ```
      
      2. vue里面在style直接使用就可以，当然需要提前引入上面的函数
      
      ```css
           .example {
                 padding-top: 0;
                 padding-left: px2rem(20);
                 padding-right: px2rem(20);
               }
      ```
      
         
      
      