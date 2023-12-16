// fibbonaci number
function fib(n){
    let f = 0;
    let s = 1;
    let num;
    if(n==1){
        return f;
    }
    if(n==2){
        return s;
    }
    for (let index = 3; index <= n; index++) {
        num = f+s;
        f =s;
        s = num;
    }
    return num;
}
console.log(fib(8))

// majority element
let arr = [1 ,2, 3, 4, 5 ,1, 1 ,1 ,1, 5 ,1, 1 ];
// 1 1 1 2 5 5 5 5 5 5 
console.log(maj(arr))
function maj(arr){
// arr.sort();
// return arr[arr.length/2]
arr.sort(); // nlogn
if(arr.length == 1){
    return arr[0];
}
let c =0;

for (let index = 0; index < arr.length-1; index++) {
    if(arr[index] != arr[index+1]){
        c =0;
    } else{
        c++;
    }
    if(c>=Math.floor(arr.length/2)){
        return arr[index]
    }
}
}
//  [1, 1, 2 ,2 ,3,3,3 ] c=4 a=3
//O(n)
function maj2(arr){
    let count =0;
    let ans;
    for (let index = 0; index < arr.length; index++) {
       if(count==0 ){
        count++;
        ans = arr[index];
       } else{
        if( arr[index] == ans){
            count++;
        } else{
            count--;
        }
       }
    }  
    let c=0;
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] == ans){
            c++;
        }
    } 
    return c>=arr.length/2;
}
// time and space both will be O(n)
console.log(pal2("abcba"))
function pal(str){
    let p="";
    for (let index = str.length-1; index >= 0 ; index--){
        p+=str[index];    
    }
    return p==str;
}

function pal2(str){
    let st =0;
    let end = str.length-1;
    while(st<end){
        if(str[st] != str[end]){
            return false;
        } else{
            st++;
            end--;
        }
    }
    return true;
}
console.log(anagram2("abcde","dacbt"))
function anagram(str1, str2){
    str1 = str1.split('').sort();
    str2 = str2.split('').sort();
console.log(str1);
console.log(str2)
    return str1.join('')==str2.join('')
}

function anagram2(str1, str2){
    if(str1.length != str2.length){
        return false;
    }
    let frequecny = new Array(26).fill(0);
    for (let index = 0; index < str1.length; index++) {
        frequecny[str1.charAt(index).charCodeAt(0)- 'a'.charCodeAt(0)]++;
        frequecny[str2.charAt(index).charCodeAt(0)- 'a'.charCodeAt(0)]--;
    }
    for (let index = 0; index < 26; index++) {
        if(frequecny[index]!=0)
        return false;
    }
    return true;
}

// move zeros [ 0 3  0 12 0 1] = [1 3 12 0 0 ] 
let arr2 = [ 0 ,3 , 0 ,12 ,0 ,1];
console.log(moveZeros(arr2))
function moveZeros(arr){
    let i =0;
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] != 0){
            arr[i] = arr[index];
            i++;
        }
    }
    for (let index = i; index < arr.length; index++){
       arr[index] =0;
    }
    return arr;
}
// ashishkumar : ashushkimar
console.log(revVowels("ashishkumar"))
function revVowels(str){
    str = str.split('');
    let vol = ['a','e','i','o','u'];
    let st =0;
    let end = str.length-1;
    while(st<end){
        if(vol.includes(str[st]) && vol.includes(str[end])){
            let t = str[st];
            str[st] =str[end];
            str[end] = t;
            st++;end--
        }
        else if(!vol.includes(str[st])){
            st++;
        }
        else if(!vol.includes(str[end])){
            end--;
        }
        else{
            st++;end--;
        }
    }
    return str.join('');
}