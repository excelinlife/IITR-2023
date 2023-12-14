let fruits = ["apple", "banana", "orange", "kiwi"];
let arr = new Array()
arr.push(5);
arr.push("Raj");
arr.push(6)
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift("apple", 12)
console.log(arr)
console.log(fruits[3]);
let portion = arr.slice(1,3)
console.log(portion)
console.log(arr)
arr.splice(1,1, "orange","banana")
console.log(arr)
let newArr= arr.concat(portion)
let arr2 = [ "orange","banana","apple"]
let result =  arr2.join(', ')
console.log(result)

arr2.reverse()
console.log(arr2)
arr2.sort();
console.log(arr2)
console.log(arr.includes("mango"))
let values = [1,2,3,4,5,6,7,8,9]
let even = values.filter(function(a){
    return a%2==1
});
console.log(even)
let doub = values.map(function(a){
    return a*2
});
console.log(doub)
let sum = values.reduce(function(a,b){
    return a*b;
})
console.log(sum)
//for (let index = 0; index < fruits.length; index++) {
//    console.log(fruits[index])
//}

// let seats = [[1 ,3,4],[3,4,5],[7,6,5],[8,5,7],[3,6,8]];
// console.log(seats[4][0])

// for (let index = 0; index < seats.length; index++) {
//     for (let j = 0; j < seats[index].length; j++) {
//         console.log(seats[index][j]);      
//     }
// }

let seats = [[1 ,3,[4,9]],[3,4,5],[7,6,[5,5]],[8,5,7],[3,6,8]];
console.log(seats)
let flattened = seats.flat(2)
console.log(flattened)

// String

let s = "ashish";
let emp = "";
let s2 = `hi, ${s}!`; // String extrapolation
console.log(s);
console.log(s2);

let concatenated = s+s2;
console.log(concatenated)
console.log(concatenated.length)
console.log(concatenated[7])
console.log(concatenated.search('ashe'))
console.log(concatenated.replace('ashish', 'amit'))
console.log(concatenated)
console.log(concatenated.indexOf('hh'))


//Remove spaces from the string
let str ="ashih kumar kumar ashish is your faculty";
console.log(removeSpaces(str))
function removeSpaces(str){
    let res = "";
for (let index = 0; index < str.length; index++) {
    if(str[index]!=" "){
        res+=str[index];
    }
}
return res;
}

let value = [1,2,3,4,5,6,7,8,9,0]
console.log(search(value, 60))

function search(arr, val){
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] == val){
            return index;
        }
    }
    return -1;
}

// best case : O(1)
// worst case : O(n)
// avg case : O(n/2) = O(n)

function isPrime(num){
    for (let index = 2; index <= Math.sqrt(num); index++) {
        if(num%index == 0){
            return false;
        }
    }
    return true;
}

// factorial
console.log(fact(6)) 
function fact(n){
    let ans = 1;
    for (let index = 2; index <=n; index++) {
        ans*=index
    }
    return ans;
}
console.log(min(value))
function min(arr){
    let min = arr[0];
    for (let index = 1; index < arr.length; index++){
       if(arr[index]<min){
        min = arr[index]
       }
    }
    return min
}

// double all the numbers in an array
console.log(dob(value))
function dob(arr){
    for (let index = 0; index < arr.length; index++) {
        value[index] = value[index]*2;
    }
    return value;
}
// space O(n) time: O(n)