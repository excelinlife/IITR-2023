function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}


function selectionSort(arr){
    for(let i =0;i<arr.length-1;i++){
        let small = i;
        for(let j =i+1;j<arr.length;j++){
            if(arr[small]>arr[j]){
                small=j
            }
        }
        let temp = arr[small];
        arr[small] = arr[i];
        arr[i] = temp;
    }
    return arr
}

function insertionSort(arr){
    for(let i = 1; i<arr.length ; i++){
        let val = arr[i];
        let j =i-1;
        while(j>=0 && arr[j] > val){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = val
    }
    return arr;
}

function mergeSort(arr, l,r){
    if(l>=r){
        return;
    }
    let m = l+ parseInt((r-l)/2)
    console.log(m)
    mergeSort(arr, l, m);
    mergeSort(arr, m+1,r);
    merge(arr, l,m,r)
    return arr;
}

function merge(arr, l, m ,r){
    let lSize = m-l+1;
    let rSize = r-m;
    let larr = new Array(lSize);
    let rarr = new Array(rSize);
    for (let index = 0; index <lSize; index++) {
       larr[index] = arr[l+index];
    }
    for (let index = 0; index <rSize; index++) {
        rarr[index] = arr[m+index+1];
     }
     let i=0;let j=0; let k=0;
     while(i<lSize && j<rSize){
        if(larr[i] < rarr[j]){
            arr[k] = larr[i];
            i++;
            k++;
        } else{
            arr[k]=rarr[j];
            j++;
            k++;
        }
     }
     while(i<lSize){
        arr[k] = larr[i]
        k++;i++;
     }
     while(j<rSize){
        arr[k] = larr[j]
        k++;j++;
     }
}

function quickSort(arr){
 if(arr.length<=1){
    return arr
 }
 let p = arr[arr.length-1];
 let left =[];
 let right = [];
 for(let i =0;i<arr.length-1;i++){
    if(arr[i]<p){
        left.push(arr[i]);
    } else{
        right.push(arr[i])
    }
 }
 return [...quickSort(left), p, ...quickSort(right)]
}

function nextGreater(arr){
    let st = []
    st.push(arr[0]);
    for (let index = 1; index < arr.length; index++){
        if(st.length==0){
            st.push(arr[index])
            continue
        }
        while(st.length!=0 && st[st.length-1]<arr[index]){
                    console.log("next greater element for "+st[st.length-1]+" is "+arr[index]);
                    element=st.pop();
            }
            st.push(arr[index])
    }
    while(st.length!=0){
        let temp = st.pop();
        console.log("next greater element for "+temp+" is -1");
    }
}

// let arr = [5,4,3,6,25,16,14]
// nextGreater(arr)


 let  arr = [4,5,6,7,8,3,2,1];
// console.log(quickSort(arr))
 console.log(mergeSort(arr,0,arr.length-1)) 