//412 FizzBuzz
var fizzBuzz = function(n) {
    var result=[]
    for (var i=1;i<=n;i++){
        if(i%3==0&&i%5==0){//注意条件判断的顺序
            result.push("FizzBuzz")
        }else if(i%5==0){
            result.push('Buzz')
        }else if(i%3==0){
            result.push('Fizz')
        }else {
            result.push(String(i))
        }
    }
    return result
};

//优化解法
var fizzBuzz = function(n) {
    const result = []
    for(let i = 1; i < n + 1; i++){
        let ans = ''
        ans += i % 3 ? '' : 'Fizz'
        ans += i % 5 ? '' : 'Buzz'
        if (!ans) {
            ans += i
        }
        result.push(ans)
    }
    return result
};


//485 最大连续1的个数
var findMaxConsecutiveOnes = function(nums) {
    var count=0,temp=0
    for (var i=0;i<nums.length;i++){
        if(nums[i]===1){
            count++
        }else{
            if(temp<count){
                temp=count
            }
            count=0
        }

    }
    if(temp<count){
        temp=count
    }
    return temp
}//感觉好挫。。。。。
