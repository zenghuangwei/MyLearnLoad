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