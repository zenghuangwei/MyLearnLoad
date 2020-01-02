
var MySet=(function(){//这种做法还会暴露一个value属性，有待改进。
    function MySet(init=[]){
        //若没有使用new调用MySet时
        //es6写法
        if(new.target!==MySet){
            return new MySet(init)
        }
        //以前写法
        /* if(!this instanceof MySet){
            return new MySet(init)
        } */
        this.value=[]
        for(var val of init){//处理初始化
            this.add(val)
        }
    }
     //把findIndex写在原型属性中会有多一个属性的问题
    function findIndex(val){
        if(val!=val){//判断这个数是不是NaN
            for(var i=0;i<this.value.length;i++){
                if(this.value[i]!=this.value[i]){//说明数组里已有NaN
                    return i
                }
            }
            return -1
        }else{//若这个数不是NaN，返回下标即可
            return this.value.indexOf(val)
        }
    }
    MySet.prototype={
        add:function(val){
            if(!this.has(val)){
                this.value.push(val)
            }
            return this//返回this，使函数能够链式调用
        },
        clear:function(){
            this.value.length=0
            return this
        },
        has:function(val){
            return findIndex.call(this,val)>=0
        },
        delete:function(val){
            var pos=findIndex.call(this,val)
            if(pos>=0){//考虑pos为-1
                this.value.splice(pos,1)
            }
        },
        forEach:function(iterator){
            this.value.forEach((val)=>{//这句话其实就等于for循环语句
                iterator(val,val,this)
            })
            return this
        },
        get size(){
            return this.value.length
        }
    }
    return MySet
})()
