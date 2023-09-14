function linearSearch(arr, val){
    for(let i =0;i<arr.length;i++){
        if(arr[i] == val){
            return i;
        }
    }
    return "not found"
}  // best case: O(1), avg O(n), worst O(n) 

function lastOccurance(arr, val){
    let ans = -1;
    for(let i =0;i<arr.length;i++){
        if(arr[i] == val){
            ans = i;
        }
    }
    return ans;
}

function recSearch(arr,val, index){
    if(index==arr.length){
        return -1;
    }
    if(arr[index] == val){
        return index;
    } else
    return recSearch(arr, val, index+1)
}

// whenever a sorted array use binary search.
function binarySearch(arr,val){
    let beg =0;
    let end = arr.length-1;
    while(beg <=end){
        let mid = beg+parseInt((end-beg)/2);
        if(val == arr[mid]){
            return mid;
        }else if(val>arr[mid]){
            beg = mid +1;
        } else
        end = mid -1;
    }
    return -1;
}

function firstOccurance(arr, val){
    let ans =-1;
    let st =0;
    let end = arr.length;
    while(st<end){
        let mid = st+parseInt((end-st)/2);
        if(val>arr[mid]){
            st=mid+1;
        } else if(val<arr[mid]){
            end =mid-1;
        } else{
            ans = mid;
            end = mid - 1;
        }
    }
}

function lastOccurance(arr, val){
    let ans =-1;
    let st =0;
    let end = arr.length;
    while(st<end){
        let mid = st+parseInt((end-st)/2);
        if(val>arr[mid]){
            st=mid+1;
        } else if(val<arr[mid]){
            end =mid-1;
        } else{
            ans = mid;
            beg = mid + 1;
        }
    }
}

function duplicates(arr){
    let ans = new Array();
    let set = new Set();
    for (let index = 0; index < arr.length; index++) {
       if(set.has(arr[index])){
        ans.push(arr[index])
       } else{
        set.add(arr[index])
       }
    }
    return ans
}



function remDuplicates(arr){
    let ans = new Array();
    let set = new Set();
    for (let index = 0; index < arr.length; index++) {
       if(!set.has(arr[index])){
        ans.push(arr[index])
        set.add(arr[index])
       }
    }
    return ans
}

let arr = [6,5,4,7,8,9,9,7,3,3];
console.log(remDuplicates(arr))
//console.log(binarySearch(arr,7))

// first occurance and second occurance

