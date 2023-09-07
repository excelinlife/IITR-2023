class Node{
    constructor(d){
        this.data = d;
        this.next = null;
    }
}

class LinkedList{
    constructor(h){
        this.head=h;
    }
    addAtBeg(val){
        let node = new Node(val);
        node.next = this.head;
        this.head = node;
    }
    addAtEnd(val){
        let temp = this.head
        while(temp.next!=null){
            temp=temp.next;
        }
        let node = new Node(val);
        temp.next= node;
    }
    addAtPos(val, pos){
        let c = 1
        let temp = this.head
        while(c<pos-1){
            temp=temp.next;
            c++;
        }
        let node = new Node(val);
        node.next = temp.next;
        temp.next= node;
    }

    show(){
        let temp = this.head;
        while(temp!=null){
            console.log(temp.data)
            temp=temp.next;
        }
    }
    delAtBeg(){
        this.head= this.head.next;
    }
    delAtEnd(){
        let temp = this.head;
        while(temp.next.next!=null){
            temp=temp.next;
        }
        temp.next=null;
    }
    delAtPos(pos){
        let c=1;
        let temp = this.head;
        while(c<pos){
            temp=temp.next;
            c++;
        }
        temp.next=temp.next.next;
    }
    reverse(){
        let curr = this.head;
        let next;
        let pre = null;
        while(curr!=null){
            next = curr.next;
            curr.next=pre;
            pre=curr;
            curr=next;
        }
        this.head=pre;
    }

    nthFromRight(n){
        let first = this.head;
        let c=1;
        while(c<n){
            first=first.next;
            c++;
        }
        let second = this.head;
        while(first!=null){
            first=first.next;
            second=second.next
        }
        console.log(second.data)
    }

    printMiddle(){
        let slow = this.head;
        let fast = this.head;
        while(fast.next!= null && fast.next.next !=null){
            slow=slow.next;
            fast=fast.next.next
        }
        console.log(slow.data)
    }
    
}
let head = new Node(1)
let ll = new LinkedList(head);
let second = new Node(2)
head.next=second
let third = new Node(3)
second.next=third
let fourth = new Node(4)
third.next = fourth;
let fifth = new Node(5)
fourth.next=fifth

// ll.show()
//ll.addAtBeg(8)
// ll.show()
ll.addAtEnd(100)
// ll.show()
ll.addAtPos(45,3)
ll.show()

//ll.reverse()
//ll.show()
ll.printMiddle()

// reverse
// nth print
// nth from right

// singli linked 
// doubly linked
// circlular

