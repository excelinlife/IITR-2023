package com.gl.ashish.day2;

import com.gl.ashish.day3.Student;

import java.util.Scanner;

public class Day2 {
    public static void main(String[] args) {
        Student student = new Student("ashish", "kumar", 22);
       /* Scanner sc = new Scanner(System.in);
        System.out.println("give me your name: ");
        String name = sc.nextLine();
        System.out.println(name);
        System.out.println("give me your location: ");
        String location = sc.next();
        System.out.println(location);
        System.out.println("give me your age: ");
        int age = sc.nextInt();
        System.out.println(age);*/
        Scanner sc = new Scanner(System.in);
        int[] age = new int[5];
        for (int j = 0; j <age.length; j++) {
            System.out.println("give me "+(j+1)+"th"+" age: ");
            age[j] = sc.nextInt();
        }
        for (int i = 0; i < age.length; i++) {
            System.out.println(age[i]);
        }
    }
}
