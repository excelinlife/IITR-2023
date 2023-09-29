let arr  = [1,2,3,4,5,6,7]
// let arr2d= [[1,2,3],[4,5,6],[7,8,9]]
// let sum = 0;
// for (let index = 0; index < arr2d.length; index++) {
//     for (let index2 = 0; index2 < arr2d[index].length; index2++) {
//         sum+=arr2d[index][index2]
//     }
// }



// console.log(sum)
// let s = "ashish"
// console.log(s[3])


let array = new Array("apple","banana", "orange")
// let array2 = new Array();

// console.log(array)
// array.push("mango")
// console.log(array)
// array.pop()
// console.log(array)
// array.shift()
// console.log(array)
// array.unshift("pear")
// console.log(array)
// let newArr= array.slice(2,3)
// console.log(newArr)
// array.splice(1,4,"mango", "kiwi", "fdddf","ffddfdd")
// console.log(array)

// let newArr = array.concat(arr)
// console.log(newArr)

// let str = array.join("-")
// console.log(str)

// console.log(array.reverse())
// console.log(array.sort())

// let res = arr.filter(ashish => ashish%2!=0)
// console.log(res)

// let double = arr.map(a=>a*2)
// console.log(double)

// let sum = arr.reduce(function(a,c){
//     return a+c;
// })

// console.log(sum)

// console.log(array.includes("banaa"))

// let arr2  = [1,2,[3,4,[10,20,30],5],6,7]
// let flated = arr2.flat(2)
// console.log(flated)

// let str = "ashish"
// let str2 = "kumar"
// let str3 = str +str2
// console.log(str)
// console.log(str2)
// console.log(str3)
// console.log(str3.substring(0,6))

// console.log(str3.search('ashi'))
// console.log(str3.replace('ashi','fdfdfdfdd'))

// console.log(str3.indexOf('r'))

function removeSpaces(str){
    let ans = "";
    for (let index = 0; index < str.length; index++) {
        if(str[index] != ' '){
            ans+=str[index];
        }
    }
    return ans;
}

function reverse(str){
    let res ="";
    for (let index = str.length-1; index >=0 ; index--){
        res+=str[index]
    }
    return res;
}

function reverse2(str){
    let str2 = str.split('');
    let l =0;
    let r =str2.length-1
    while(l<r){
        let temp = str2[l];
        str2[l] = str2[r];
        str2[r] = temp;
        l++;r--
    }
    console.log(str2)
    return str2.join('')
}

function anagram(str1, str2){
    if(str1.length != str2.length){
        return false;
    }
    let first = str1.split('').sort().join('')
    let second = str2.split('').sort().join('')
    if(first===second){
        return true
    } else{
        return false
    }
}

console.log(anagram("mango","oman"))

// let input ="as   hish kum    ar  is an ins tru    ctor"
// console.log(removeSpaces(input))
// console.log(input.split(" ").join(""))