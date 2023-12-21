class Stack{
    constructor(){
        this.item = [];
    }

    //push
    push(val){
        this.item.push(val)
    }

    //pop
    pop(){
        if(this.item.length == 0){
            console.log("stack is empty")
            return;
        }
        return this.item.pop()
    }

    //isEmpty
    isEmpty(){
        return this.item.length == 0;
    }

    // peek
    peek(){
        if(this.isEmpty()){
            console.log("empty stack")
            return;
        }
        return this.item[this.item.length-1];
    }
    printSt(){
        if(this.isEmpty()){
            console.log("empty stack")
            return;
        }
        let str = "";
        for (let index = 0; index < this.item.length; index++) {  
            str+= this.item[index]    ;
            str+=" ";      
        }
        console.log(str);
    }
}


let s = new Stack();
console.log(s.isEmpty());
console.log(s.peek());
s.push(12);
s.push(15);
s.push(17);
s.printSt()
s.push(109);
s.push(13);
s.printSt()
console.log(s.pop());
s.printSt()
console.log(s.isEmpty())
s.printSt();
console.log(s.pop())
s.printSt();
console.log(s.peek())

let str = "ashish";
console.log(reverse(str))

class Queue{
    constructor(){
        this.item = [];
    }

    isEmpty(){
        return this.item.length == 0;
    }

    //enque
    enqueue(val){
        this.item.push(val)
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("queue is empty")
            return;
        }
        return this.item.shift()
    }


    printQueue(){
        if(this.isEmpty()){
            console.log("empty")
            return;
        }
        console.log(this.item);
    }
    
    frontElement(){
        if(this.isEmpty()){
            return "empty";
        }
        return this.item[0]
    }

    rearElement(){
        if(this.isEmpty()){
            return "empty";
        }
        return this.item[this.item.length-1]
    }


}

function reverse(str){
    let s = new Stack();
    for (let index = 0; index < str.length; index++) {
        s.push(str[index]);        
    }
    let res = "";
    while(!s.isEmpty()){
        res+=s.pop();
    }
    return res;
}

console.log("testing queue")

let q = new Queue();
console.log(q.isEmpty())
console.log(q.frontElement())
console.log(q.rearElement())
q.enqueue(1);
q.enqueue(10);
q.enqueue(30)
q.printQueue()
console.log(q.dequeue())
q.printQueue()
console.log(q.frontElement())
console.log(q.rearElement())
console.log(q.isEmpty())

// {}()[{()}]
function balaced(str){
    let st = new Stack();
    for (let index = 0; index < str.length; index++) {
        let temp = str[index];
        if(temp == '(' || temp == '{' || temp == '['){
            st.push(temp)
        } else{
            if(st.isEmpty()){
                return false;
            }
            let popped = st.pop();
            if(temp == ')' && popped != '('){
                return false;
            }
            if(temp == '}' && popped != '{'){
                return false;
            }
            if(temp == ']' && popped != '['){
                return false;
            }
        }
    }
    return st.isEmpty()
}

console.log(balaced("{}()[()}]"))