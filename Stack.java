package com.gl.week4.day2;

public class Stack {
    public static void main(String[] args) {
        Stack st = new Stack(10);
        int[] arr = {1,2,3,4,5,6,7};
        /*System.out.println(st.isEmpty());
        st.push(1);
        st.push(2);
        st.push(3);
        System.out.println(st.top);
        st.push(4);
        st.show();
        System.out.println(st.pop());
        st.show();
        System.out.println(st.isEmpty());
        System.out.println(st.isFull());
        System.out.println(st.peek());
        st.show();*/
        /*int[] res = new int[arr.length];
        int index = -1;
        for (int i = 0; i < arr.length; i++) {
            st.push(arr[i]);
        }
        while (!st.isEmpty()){
            res[++index] = st.pop();
        }
        for (int i = 0; i < res.length; i++) {
            System.out.print(res[i] + " ");
        }*/

        System.out.println(evaluate("34*5+62/-"));
    }
    int[] arr;
    int top;
    int size;

    public Stack(int size) {
        this.size = size;
        this.arr = new int[size];
        top = -1;
    }

    // isEmpty

    public boolean isEmpty(){
        return top == -1;
    }

    // isFull

    public boolean isFull(){
        return top == size-1;
    }

    // push
    public void push(int val){
        if (isFull()){
            System.out.println("can't push more: overflow");
            return;
        }
        arr[++top] = val;
        System.out.println("added "+val+" in the stack");
    }

    // pop

    public int pop(){
        if (isEmpty()){
            System.out.println("can't remove, no element in the stack");
            return -1;
        }
        System.out.println("popping from the stack");
        return arr[top--];
    }

    // peek
    public int peek(){
        if (isEmpty()){
            System.out.println("no element in the stack");
            return -1;
        }
        return arr[top];
    }

    // print stack
    public void show(){
        if (isEmpty()){
            System.out.println("nothing to show");
            return;
        }
        for (int i = 0; i <= top; i++) {
            System.out.println(arr[i]);
        }
    }

    // top
    public int top(){
        return top;
    }

    public static int evaluate(String exp){
        Stack stack = new Stack(10);
        for (int i = 0; i < exp.length(); i++) {
            char c = exp.charAt(i);
            if (Character.isDigit(c))
                stack.push(c - '0');
            else {
                int val1 = stack.pop();
                int val2 = stack.pop();

                switch (c) {
                    case '+':
                        stack.push(val2 + val1);
                        break;
                    case '-':
                        stack.push(val2 - val1);
                        break;
                    case '/':
                        stack.push(val2 / val1);
                        break;
                    case '*':
                        stack.push(val2 * val1);
                        break;
                }
            }
        }
        return stack.pop();
    }

}
