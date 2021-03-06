**前端如何学习数据结构与算法**：https://juejin.im/post/5d5b307b5188253da24d3cd1#heading-15

**时间复杂度**：一个算法的时间复杂度反映了程序运行从开始到结束所需要的时间。把算法中基本操作重复执行的次数（频度）作为算法的时间复杂度。

使用 O 记号法（Big O Notation）在数学中表示无限逼近，在算法中用来表示算法的最坏情况。

没有循环语句，记作O(1)，也称为常数阶。只有一重循环，则算法的基本操作的数量与输入数据规模n呈线性增大关系，记作O（n），也叫线性阶。

常见的时间复杂度有：

- O(1): Constant Complexity: Constant 常数复杂度
- O(log n): Logarithmic Complexity: 对数复杂度
- O(n): Linear Complexity: 线性时间复杂度
- O(n^2): N square Complexity 平⽅方
- O(n^3): N square Complexity ⽴立⽅方
- O(2^n): Exponential Growth 指数
- O(n!): Factorial 阶乘

**空间复杂度**：一个程序的空间复杂度是指运行完一个程序所需内存的大小。利用程序的空间复杂度，可以对程序的运行所需要的内存多少有个预先估计。

**递归简论**：
1. 基准情形：必须总要有某些基准的情况，不需要递归就能求解
2. 不断推进：对于需要递归求解的情形，递归调用总是能够朝着产生基准情形的方向推进
3. 设计法则：假设所有的递归都能正确运行。
4. 合成效益法则：在求解同一问题的同一实例时，切勿在不同的递归调用中做重复性的工作


**参考**：https://segmentfault.com/a/1190000019847727