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
//1.两数之和
var twoSum=function (nums,target){
    var map={}
    var result=[]
    for(var i=0;i<nums.length;i++){//一边找一边记录
        var otherNums=target-nums[i]
        if(otherNums in map){
            result.push(i,map[otherNums])
            return result
        }
        map[nums[i]]=i
    }
}
//26. 删除排序数组中的重复项
var removeDuplicates = function(nums) {
    if(!nums) return null
    if(nums.length===1) return nums
    for (var i=1;i<nums.length;){
        if(nums[i]===nums[i-1]){
            nums.splice(i,1)
        }else{
            i++
        }
    }
    return nums.length
};

//15. 三数之和
var threeSum = function(nums) {
    nums.sort(function(a,b){//从小到大排序
        return a-b
    })
    var result=[]
    if (nums[0] <= 0 && nums[nums.length - 1] >= 0) {//确保数组中有正数与负数
        for(var i=0;i<nums.length-2;){
            var left=i+1
            var right=nums.length-1//设置双指针
            while(left<right){
                if(nums[i]*nums[right]>0) break//三数不同号，立即打断
                if(nums[i]+nums[left]+nums[right]===0){
                    result.push([nums[i],nums[left],nums[right]])
                }
                if(nums[i]+nums[left]+nums[right]<=0){//此处等号不能省略，而且不能使用else if
                    while(nums[left]===nums[++left]){}//跳过重复值
                }else{
                    while(nums[right]===nums[--right]){}
                }

            }
            while(nums[i]===nums[++i]){}
        }
    }
    return result
};

//66 加一

var plusOne = function(digits) {
    
    for(var i=digits.length-1;i>=0;i--){
        digits[i]++
        digits[i]%=10//一位数%上10仍等于本身
        if(digits[i]!=0){
            return digits
        }
    }
    digits.unshift(1)
    return digits
};

//283 移动0
var moveZeroes = function(nums) {
    var count=0
    for(var i=0;i<nums.length;i++){
        if(nums[i]!=0){
            nums[count]=nums[i]
            count++
        }
    }
    nums.fill(0,count)
    
    return nums
}