/* 排序算法
比较相邻的元素。如果第一个比第二个大，就交换它们两个；
对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
针对所有的元素重复以上的步骤，除了最后一个；
重复步骤1~3，直到排序完成。 */

// 冒泡排序
function BubbleSort(arr) {
  for (let i = 0; index < arr.length-1; index++) {
    for (let index1 = 0; index1 < arr.length-1-index; index1++) {
        if(arr[j] > arr[j+1]) {       // 相邻元素两两对比
            let temp = arr[j+1];       // 元素交换
            arr[j+1] = arr[j];
            arr[j] = temp;
        }
    }
  }
}

const data = [1, 3, 5, 22, 3, 4, 777, 33];
console.log(BubbleSort(arr));
