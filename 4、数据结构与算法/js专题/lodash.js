//chunk:
function chunk(array,size=1){
    var newAry=[]
    if(size=0) return array //当size==0，返回原数组
    for (var i=0;i< array.length;i+=size){
        newAry.push(array.slice(i,i+size))
    }
    return newAry
}
//compact:
array=> array.filter(item=>item) //循环数组的每一项，返回满足条件的值，使用filter

//difference
function difference(array,...value){
    var ArgsAry=[].concat(...value)
    return array.filter(item=>!ArgsAry.includes(item))
    
    /* for (var i=0;i<array.length;i++){
        if(!ArgsAry.includes(array[i])){
            result.push(array[i])
        }
    } */
}
//differenceBy
//differenceWith
//drop
function drop(array,n=1){
   for (var i=0;i<n;i++){
       array.shift()
   }
   return array
}

//dropRight
function dropRight(array,n=1){
    for (var i=0;i<n;i++){
        array.pop()
    }
    return array
 }
//dropRightWhile
function dropRightWhile(array,func){

}
//dropWhile
//fill
function fill(array,value,start=0,end=array.length){
    if(!array) return []
    for (var i=start;i<end;i++){
        array[i]=value
    }
    return array 
}
//findIndex
function findIndex(array,predicate=identity,fromIndex=0){
    for (var i=0;i> )
}
//findLastIndex
//first -> head
//flatten
function flatten(array){
    var newAry=[]
    for (var i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
            newAry.push(...array[i])
        }else{
            newAry.push(array[i])
        }
    }
    return newAry
    //return [].concat(...array)
}
//flattenDeep
function flattenDeep(array){
    var newAry=[]
    for (var i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
            newAry.push(...flattenDeep(array[i]))
        }else{
            newAry.push(array[i])
        }
    }
    return newAry
}
//flattenDepth
function flattenDepth(array,depth=1){
    var newAry=[]
    if(depth===0){
        return array.slice()
    }
    for (var i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
            newAry.push(...flattenDepth(array[i],--depth))
        }else{
            newAry.push(array[i])
        }
    }
    return newAry
}
//fromPairs
//head
//indexOf
//initial
//intersection
//intersectionBy
//intersectionWith
//join
//last
//lastIndexOf
//nth
//pull
//pullAll
//pullAllBy
//pullAllWith
//pullAt
//remove
//reverse
//slice
//sortedIndex
//sortedIndexBy
//sortedIndexOf
//sortedLastIndex
//sortedLastIndexBy
//sortedLastIndexOf
//sortedUniq
//sortedUniqBy
//tail
//take
//takeRight
//takeRightWhile
//takeWhile
//union
//unionBy
//unionWith
//uniq
//uniqBy
//uniqWith
//unzip
//unzipWith
//without
//xor
//xorBy
//xorWith
//zip
//zipObject
//zipObjectDeep
//zipWith
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------
//--------------------------------------------------
//-----------------------------------------------
//lodash中的predicate函数模式。
function identity(value){
    return value
}

function iteratee(func=identity){
    var type=typeof func
    if(type==="string"){//如果是字符串就调用property函数
        return property(func)
    }else if(type==="function"){//如果是函数就把函数返回
        return func
    }else if(Array.isArray(func)){//如果是数组就调用matchesProperty函数
        return matchesProperty(func[0], func[1])
    }else{//
        return matches(func)//如果是数组就调用matches函数
    }
}//WHY-----HWO-----WAHT------DO
function property(name){
    return function(obj){
        return obj[name]
    }
}

function matches(target){
    
    return function(obj){
        for(var val in target){
            if(obj[val]!=target[val]){//
                return false
            }
        }
        return true 
    }
}
function isMatch(object, source){
    for(var prop in source){
        if(object[prop]!==source[prop]){//对象比较：两个不同对象，即使内容相同，也会返回false；
            //而这里是要每一层都进行比较，只有当最里面的那一层也不同时才返回发false
            if(!isMatch(object[prop],source[prop]))return false
        }
    }
    return true 
}
