function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    const mid = parseInt(arr.length/2);
    const lArr = arr.slice(0, mid);
    const rArr = arr.slice(mid);
    return merge(mergeSort(lArr), mergeSort(rArr));
}

function merge(lArr, rArr){
    const sorted = []
    while(lArr.length && rArr.length){
        if(lArr[0]<=rArr[0]){
            sorted.push(lArr.shift())
        } else{
            sorted.push(rArr.shift())
        }
    }
    return[...sorted, ...lArr, ...rArr]
}

function print(arr){
    if(arr.length==0){
        return
    }
    else{
        let temp = arr.pop();
        console.log(temp) 
        print(arr) 
    } 
}

function fact(n){
    if(n==1){
        return 1;
    }
    return n*fact(n-1);
}

function fib(n){
    if(n<=2){
        return n;
    }
    return fib(n-1)+ fib(n-2)
}


function reverse(str){
    if(str.length==0){
        return "";
    } else{
        return reverse(str.slice(1))+str[0]
    }
}


function reverse2(str){
    if(str.length==0){
        return "";
    } else{
        return str[str.length-1]+reverse(str.slice(0, str.length-1))
    }
}

function isPalindrome(str, st, end){
    if(end-st<=1){
        return true;
    } else if(str[st] == str[end]){
        return isPalindrome(str, st+1, end-1);
    } else{
        return false;
    }
}

function recBinSearch(arr, st, end, target){
    if(st>end){
        return -1;
    } else{
        let mid = st+Math.floor((end-st)/2)
        if(target == arr[mid]){
            return mid;
        } else if (arr[mid]<target){
            return recBinSearch(arr, mid+1, end, target)
        } else{
            return recBinSearch(arr, st, mid-1, target)
        }
    }
}



const arr = mergeSort([8,30,40, 2 ,1, 5])
 console.log(recBinSearch(arr,0,arr.length-1, 5))
// reversing