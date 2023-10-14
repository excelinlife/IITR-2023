// 1->2->3->4->5->null
function sum(arr,i){
    if(i>=arr.length){
        return 0;
    }
    return arr[i]+sum(arr,i+1)
}
// console.log(sum([1,2,3,4,5,6,7],0))

function fact(n){
    if(n<=2){
        return n;
    }
    return n*fact(n-1);
}
// console.log(fact(6))

function show(arr, i){
    if(i>=arr.length){
        return;
    }
    console.log(arr[i]);
    show(arr,i+1)
}
// show([1,2,3,4,5,6,7],0)

function rev(s,i=s.length-1)
{
if(i>=0)
{
return s[i]+rev(s,--i)
}
else return ""
}


function palindrome(str,st,end){
    if((end - st<=1)){
        return true
    } else if(str[st] == str[end]){
        return palindrome(str, st+1, end-1);
    } else{
        return false;
    }
}


function recBinary(arr, st, end, val){
    if(st>end){
        return -1;
    } else{
        let m = st + parseInt((end-st)/2);
        if(arr[m] == val){
            return m;
        } else if(arr[m]> val){
            return recBinary(arr, st, m-1,val);
        } else{
            return recBinary(arr, m+1, end,val)
        }
    }
}

//console.log(recBinary([1,2,3,5,7,8,9,10],0,7,9))


function printLL(head){
    if(head == null){
        return;
    }
    console.log(head.data);
    printLL(head.next);
}

function fib(n){
    if(n == 1){
        return 0;
    } else if(n==2){
        return 1;
    } else{
        return fib(n-1)+fib(n-2);
    }
}

console.log(fib(7))
// palindrome
// binary search
// printing a linkedlist 