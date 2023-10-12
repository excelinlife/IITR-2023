package com.gl.ashish.day3;

public class Demo {
    public static void main(String[] args) {
        Student student = new Student("John","Mathew", 23 );
        student.setRollNo(123);
        System.out.println(Student.sum(12,15));
        String[] names = { "rohit","soni","kumar", "prasad","amit"};
        Student.sort(names);
        for (int i = 0; i < names.length; i++) {
            System.out.println(names[i]);
        }
    }
}
