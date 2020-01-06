## 相关函数的实现

```js
    function traverse(node,action){//不带根节点遍历函数
        if(node.nodeType==document.ELEMENT_NODE){
            for(var i=0;i<node.children.length;i++){
                action(node.children[i])
                traverse(node.children[i],action)
            }
        }
    }
    
    function traverse1(node,action){//带根节点遍历函数
        if(node.nodeType==document.ELEMENT_NODE){
            var r=action(node)
            if(r===false){//注意这里的条件判断，必须拿到action的返回false的结果，而且必须使用===
                return 
            }
            for(var i=0;i<node.children.length;i++){
                traverse1(node.children[i],action)
            }
        }
    }

    function getElementsByTagName (node,tagName){
        var result=[]
        tagName=tagName.toUpperCase()
        traverse(node,n=>{
            if(n.tagName==tagName){
                result.push(n)
            }
        })
        return result
    }
    //利用traverse1实现
    function getElementById(id){
        var result=null
        traverse1(document.documentElement,node=>{//从html节点开始查找
            if(node.id==id){
                result=node
                return false
            }
        })
        return result
    }
    //利用递归实现
    function getElementById(id,node=docunment.documentElement){
        if(node.id==id){
            return node
        }else{
            for (var i=0;i<node.children.length;i++){
                var ret=getElementById(node.children[i])
                if(ret){
                    return ret
                }
            }
            return null
        }
    }
```