## 数组



## 对象

**可变性**：基本数据类型的值一旦创建，就无法进行修改，但是对象是可以通过修改其属性来改变对象的内容。

变量的赋值都是指向关系。

```js
    function movezero(num){
        num={a:1,b:2}
        console.log(num)
    }
    var a={a:2,b:3}
    movezero(a)//a?????此时应该认为此a非彼a，此时的a指的就是函数中定义的形参，外面的a并不能访问到函数中的a
    console.log(a)
```

