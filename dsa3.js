// majoritiy: number occuring more than n/2 times.
function majoritiy(nums){
    nums.sort(); // O(nlogn)  
    if(nums.length == 1){
        return nums[0]
    }
    let c=0;
    for (let index = 0; index < nums.length-1; index++) {
        if(nums[index] !==nums[index+1]){
            c=0;
        } else{
           c++; 
        }
        if(c>=Math.floor(nums.length/2)){
            return nums[index];
        }
    }
}

function find(str, c){
    for (let index = 0; index < str.length; index++) {
        if(str[index]===c){
            return index
        }
    }
    return -1;
}
let arr = [2, 2, 2, 3, 2, 1, 1, 2]
console.log(majoritiy(arr))

function anagram(s1,s2){
    if(s1.length !=s2.length){
        return false;
    }
    let map = new Map();
    for(let char of s1){
        map.set(char, map.get(char)+1 || 0)
    }
    for(let char of s2){
        map.set(char, map.get(char)-1 || 0)
    }
   // if map has any element not equal to 0 then no anagram
   // when all 0 then anagram
}

function palindrome(s){
    let pal="";
    for (let index = s.length-1; index >=0; index--) {
        pal+=s[index];
    }
    console.log(pal)
    if(s===pal){
        return true;
    } else{
        return false
    }
}

function palindrome2(s){
    let st =0;
    let end = s.length-1;
    while(st<end){
        if(s[st] !=s[end]){
            return false;
        } else{
            st++;
            end--;
        }
    }
    return true;
}

console.log(palindrome2("abcba"))


function fib(n){
    if(n==1){
        return 0;
    } else if (n==2){
        return 1;
    } else{
        let first =0;
        let second = 1;
        let temp;
        for (let index = 3; index <= n; index++) {
            temp = first+second;
            first=second;
            second=temp;
        }
        return temp;
    }
}

console.log(fib(8))