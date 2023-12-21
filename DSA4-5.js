class Node{
    constructor(d){
        this.data = d;
        this.next = null
    }
}

class LinkedList{
    constructor(h){
        this.head = h;
    }

    addAtBeg(val){
        let node = new Node(val);
        node.next = this.head;
        this.head = node;
    }

    addAtEnd(val){
        let temp = this.head;
        while(temp.next != null){
            temp = temp.next;
        }
        let node = new Node(val);
        temp.next = node;
    }

    addAtPos(pos, val){
        let temp  = this .head;
        let c =1;
        while(c<pos-1){
            temp = temp.next;
            c++;
        }
        let node = new Node(val);
        node.next = temp.next;
        temp.next = node;
    }

    delFromBeg(){
        this.head= this.head.next;
    }

    delFromEnd(){
        let temp = this.head;
        while(temp.next.next != null){
            temp= temp.next;
        }
        temp.next=null;
    }

    delFromPos(pos){
        let temp = this.head;
        let c =1;
        while(c<pos-1){
            temp= temp.next;
            c++;
        }
        temp.next= temp.next.next;
    }

    printIthPos(pos){
        let temp = this.head;
        let c =1;
        while(c<pos){
            temp= temp.next;
            c++;
        }
        console.log(temp.data)
    }

    printLL(){
        let temp  = this.head;
        while(temp != null){
            console.log(temp.data)
            temp = temp.next;
        }
    }

    reverse(){
        let curr = this.head;
        let prev = null;
        let next;
        while(curr!= null){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    midElement(){
        let slow = this.head;
        let fast = this.head;
        while(slow.next != null && fast.next != null){
            slow=slow.next;
            fast=fast.next.next;
        }
        console.log(slow.data)
    }
}

let first = new Node(1);
let second = new Node(2);
let third = new Node(3);
let fourth = new Node(4);
let fifth = new Node(5);

let ll = new LinkedList(first)
ll.head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
// ll.addAtBeg(100)
// ll.printLL()
// ll.addAtEnd(12)
// ll.printLL();
// ll.addAtPos(4, 40)
// ll.printLL()
ll.printLL()
// ll.delFromBeg()
 ll.printIthPos(3)
 ll.printLL()
 ll.reverse()
 ll.printLL()
 ll.midElement()

// print nth node from right
// check if there is a cycle in a ll. remove the cycle
// print a circular linked list