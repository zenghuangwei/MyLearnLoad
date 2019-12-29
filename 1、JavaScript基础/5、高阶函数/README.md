**高阶函数** ：在编写函数时，将某些特定的操作预留出来，并在真正的函数调用中将具体的操作作为函数传递进来，实现完整的计算过程。

forEach()----用于遍历数组，实现特定功能
```js
function MyforEach(ary,action){
    for (var i =0;i<ary.length;i++){
        action(ary[i],i,ary)
    }
}
```

filter()----过滤一些元素，构造一个新的数组
```js
function MyFilter(ary,test){
    var newAry=[]
    for(var i=0;i<ary.length;i++){
        if(test(ary[i],i,ary)){
            newAry.push(ary[i])
        }
    }
    return newAry
}
```

map()----构建一个新的数组，并通过函数处理每一个元素，将将处理结果放入新的数组
```js
function MyMap(ary,mapper){
    var NewAry
    for (var i=0;i<ary.length;i++){
        NewAry.push(mapper(ary[i],i,ary))
    }
    return NewAry
}
```
reduce()----将数组元素归纳成一个值
```js
    function MyReduce(ary,combine,start){
        var current=start
        if(arguments.length==2){
            current=ary[0]
            start=1
        }
        for (var i=start;i<ary.length;i++){
            current=combine(current,ary[i],i,ary)
        }
        return current
    }
```

数组还有一个apply方法，我们可以通过该方法调用函数，并使用数组来指定函数参数；另外还有一个bind方法，它用于创建一个新的函数，并预先确定其中一部分参数。

```js
    function Mybind(f,omit,...fixedArgs){
        return function(...args){
           return f(...fixedArgs,...args)
        }
    }
```


使用reduce实现filter，map，foreach
```js
[1,2,3,4,5,6,7].reduce((result,item)=>{
    if(item%2==1){
        result.push(item)
    }
    return result
},[])
function Mymap(ary,mapper){
    return ary.reduce((result,item,index,ary)=>{
        result.push(mapper(item,index,ary))
        return result
    },[])
}
function MyForEach(ary,action){
    ary.reduce((result,item,index,ary)=>{
        action(item,index,ary)
    },null)//reduce不设初始值会从数组第二项开始循环
}
```