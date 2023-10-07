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

function reverse(){
    let curr= this.head;
    let next;
    let prev = null;
    while(curr!=null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    this.head=prev
}

function middleNode(){
    let slow = this.head;
    let fast =this.head;
    while(fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow.data
}

function nthFromRight(n){
    let st = this.head;
    let c =0;
    while(c<n){
        st = st.next;
        c++;
    }
    let temp  = this.head;
    while(st!=null){
        temp=temp.next;
        st=st.next;
    }
    console.log(temp.data)
}
