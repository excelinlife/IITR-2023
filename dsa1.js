function search(arr, val){
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] == val){
            return index;
        }
    }
    return -1;
}


function isPrime(n){
    for (let index = 2 ; index < n/2; index++){
        if(n%index == 0){
            return false
        }
    }
    return true;
}


console.log(isPrime(16))

function factorial(n){
    let fact =1;
    for (let index = 1; index <=n; index++){
        fact=fact*index;
    }
    return fact
}

console.log(factorial(6))

function min(nums){
    let ans = nums[0];
    for (let index = 1; index < nums.length; index++) {
        if(ans>nums[index]){
            ans = nums[index];
        }
    }
    return ans;
}

function max(nums){
    let ans = nums[0];
    for (let index = 1; index < nums.length; index++) {
        if(ans<nums[index]){
            ans = nums[index];
        }
    }
    return ans;
}

function sum(nums){
    let res = 0;
    for (let index = 0; index < nums.length; index++) {
        res+=nums[index];
    }
    return res;
}

function double(nums){
    let res = [];
    for (let index = 0; index < nums.length; index++) {
        res.push(nums[index]*2);
    }
    return res;
}

function double2(nums){
    for (let index = 0; index < nums.length; index++) {
        nums[index]*=2;
    }
    return nums;
}

let arr = [2,3,4,5,6,7,8]
console.log(double(arr))