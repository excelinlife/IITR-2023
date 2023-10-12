package com.gl.ashish.day3;

public class Student {
    private int rollNo;
    private String fName;
    private String lName;
    private int age;
    private String batch;

    public Student(int rollNo, String fName, String lName, int age, String batch) {
        this.rollNo = rollNo;
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.batch = batch;
    }

    public Student(String fName, String lName, int age) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }

    public int getRollNo() {
        return rollNo;
    }

    void setRollNo(int rollNo) {
        this.rollNo = rollNo;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getBatch() {
        return batch;
    }

    public void setBatch(String batch) {
        this.batch = batch;
    }

    public static int sum(int a, int b){
        int sum = a+b;
        return sum;
    }

    public static void sort(String[] names){
        for (int i = 0; i < names.length-1; i++) {
            for (int j = 0; j < names.length-i-1; j++) {
                char f = names[j].charAt(0);
                char s = names[j+1].charAt(0);
                if (f>s){
                    String temp=names[j];
                    names[j] = names[j+1];
                    names[j+1] = temp;
                }
            }
        }
    }
}
