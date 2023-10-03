class Stack {
    constructor(){
        this.items = []
    }
    // push
    push(element){
        this.items.push(element)
    }
    // pop
    pop(){
        if(this.items.length == 0){
            return "empty stack"
        } else{
           return this.items.pop()
        }
    }
    // isEmpty
    isEmpty(){
        return this.items.length==0;
    }
    // peek
    peek(){
        return this.items[this.items.length-1]
    }

    // show stack
    showStack(){
        if(this.items.length==0){
            return "empty"
        }
        let str ="";
        for (let index = 0; index < this.items.length; index++) {
            str+=this.items[index]+" "
        }
        return str;
    }
}

function reverse(str){
    let st = new Stack()
    for (let index = 0; index < str.length; index++) {
       st.push(str[index])
    }
    let result = "";
    while(!st.isEmpty()){
        result+=st.pop()
    }
    return result;
}


// let st = new Stack();
// console.log(st.isEmpty())
// st.push(10)
// console.log(st.showStack())
// st.push(20)
// console.log(st.showStack())
// st.push(30)
// console.log(st.showStack())
// st.pop()
// console.log(st.showStack())
// console.log(st.peek())
// console.log(reverse("ashish"))

class Queue{
    constructor(){
        this.items= []
        this.front = 0 
        this.rear = -1
    }

    // is empty
    isEmpty(){
        if(this.front>this.rear){
            return true
        } else{
            return false
        }
    }

    // enqueue
    enqueue(element){
        this.items.push(element)
        this.rear++;
    }
    // dequeue

    dequeue(){
        if(this.isEmpty()){
            return "empty queue"
        }
        this.items.shift();
        this.front++;
    }
    
    // front

    frontElement(){
        if(this.isEmpty()){
            return "empty queue"
        }
        return this.items[0]
    }


    // rear

    rearElement(){
        if(this.isEmpty()){
            return "empty queue"
        }
        return this.items[this.items.length-1]
    }

    //show element

    showQueue(){
        if(this.isEmpty()){
            return "queue is empty"
        } else{
            return this.items;
        }
    }
}

let queue = new Queue();
console.log(queue.isEmpty())
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.showQueue())
queue.dequeue()
console.log(queue.showQueue())
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.frontElement())
console.log(queue.rearElement())

function balancedBracket(str){
    let st = new Stack();
    for (let index = 0; index < str.length; index++) {
        let temp = str[index];
        if(temp =='(' || temp == '{' || temp == '['){
            st.push(temp);
        } else{
            if(st.isEmpty()){
                return false;
            }
            let popped = st.pop();
            if(temp == '(' && popped != ')'){
                return false
            } else if(temp == '{' && popped != '}'){
                return false;
            } else if(temp == '[' && popped != ']'){
                return false;
            }
        }
    }
    return st.isEmpty()
}

console.log(balancedBracket("()()[{}]"))
console.log(balancedBracket("()([{}]"))