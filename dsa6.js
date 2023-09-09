class Stack {
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.items.length==0){
            return "empty stack"
        } 
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length===0;
    }
    showStack(){
        if(this.items.length === 0){
            return "its empty";
        }
        let str="";
        for (let index = 0; index < this.items.length; index++) {
            str+=this.items[index]+" "
    }
    return str;
    }
}

function reverse(str){
    let st = new Stack();
    for (let index = 0; index < str.length; index++) {
        st.push(str[index]);
    }
    let result ="";
    while(!st.isEmpty()){
        result+=st.pop();
    }
    return result;
}


class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class NodeStack{
    constructor(){
        this.top=null;
    }

    push(val){
        let n = new Node(val);
        Node.next=this.top;
        this.top=n;
    }
    pop(){
        if(this.top == null){
            return "empty"
        } else{
            return this.top().data;
        }
    }
    isEmpty(){
        return this.top == null;
    }
}



class NodeQueue{
    constructor(){
        this.front=null;
        this.rear=null
    }

    push(val){
        let n = new Node(val);
        if(this.front== null && this.rear == null){
            this.front = n;
            this.rear =n;
        }else{
            n.next = this.rear;;
            this.rear=n;
        }
    }
    pop(){
        if(this.front == null && this.rear==null){
            return "empty"
        } else{
            let val = this.front.data;
            this.front=this.front.next;
            return val;
        }
    }
    isEmpty(){
        if(this.front == null && this.rear==null){
            return "empty"
        }
    }

    showQueue(){
        // traverse.
    }
}

function nextGreater(arr){
    let st = new Stack()
    st.push(arr[0]);
    st.showStack()
    let element;
    let val;
    for (let index = 1; index < arr.length; index++){
        val = arr[index];
        if(!st.isEmpty()){
            element = st.pop();
            while(element<val){
                console.log("next greater element for "+element+" is "+val);
                if(st.isEmpty()){
                    break;
                }
                element=st.pop();
            }
            if(element>val)
            st.push(val)
        }

        console.log(st.showStack())
    }
    console.log(st.showStack())
    while(!st.isEmpty()){
        let temp = st.pop();
        console.log("next greater element for "+temp+" is -1");
    }
}

let arr = [5,4,3,6,1,9,25,16,14]
nextGreater(arr)


function intersection(head1, head2){
    while(head1!=null){
        while(head2!=null){
            if(head1 == head2){
                return true
            } else{
                head2= head2.next;
            }
        }
        head1=head1.next;
    }
    // O(n2) o(1): O(n) O(n) 
}

function findLoop(head){
    let slow = head;
    let fast = head;
    while(slow != null && fast!=null){
        slow=slow.next;
        fast=fast.next.next;
        if(slow==fast){
            let temp = head;
            while(temp != slow){
                temp=temp.next;
                slow=slow.next;
            }
            slow = null;
        }
    }
    return false;
}

function reverseWords(str){
    let st = new Stack();
    let result = "";
    // console.log(result)
    for (let index = 0; index < str.length; index++) {
        if(str[index] == " "){
            while(!st.isEmpty()){
                result = result.concat(st.pop());
                // console.log(result)
            }
            result = result.concat(" ");
        } else{
            st.push(str[index])
        }
    }
    while(!st.isEmpty()){
        result = result.concat(st.pop());
        // console.log(result)
    }
    return result;
}

console.log(reverseWords("this is a beautiful saturday evening"))