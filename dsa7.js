function bubbleSort(arr){
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-1-i; j++) {
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function selectionSort(arr){
    for (let i = 0; i < arr.length-1; i++) {
        let small = i;
        for (let j = i+1; j < arr.length; j++) {
        if(arr[j]<arr[small]){
            small = j;
        }
        }
        let temp = arr[small];
        arr[small] = arr[i];
        arr[i] = temp;
    }
    return arr
}

function insertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
        let val = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>val){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = val
    }
    return arr;
}

function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let m = parseInt(arr.length/2);
    let lArr = arr.slice(0,m)
    let rArr = arr.slice(m)
    return merge(mergeSort(lArr), mergeSort(rArr));

}

function merge(lArr, rArr){
    let sorted =[];
    while(lArr.length && rArr.length){
        if(lArr[0]<=rArr[0]){
            sorted.push(lArr.shift())
        } else{
            sorted.push(rArr.shift())
        }
    }
    return [...sorted, ...lArr, ...rArr];
}

function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let p =arr[arr.length-1];
    let left = [];
    let right = [];
    for (let index = 0; index < arr.length-1; index++) {
        if(arr[index] < p){
            left.push(arr[index])
        } else{
            right.push(arr[index]);
        }
    }
    return [...quickSort(left),p,...quickSort(right)]
}

let arr = [5,7,1,3,9,10,2]
console.log(quickSort(arr))