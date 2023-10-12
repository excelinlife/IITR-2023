package com.gl.ashish.day4;

import java.util.Random;

public class Demo2 {
    public static void main(String[] args) {
        Circle c = new Circle();
        Square s = new Square();
        Rectangle r = new Rectangle();
        Drawing drawing = new Drawing();
        drawing.drawWhatISay(r);
        Triangle redTriangle = new RedTriangle();
        Random random = new Random();
        String pass = "";
        char[] chars = {'a','b','c','d','e', '1','2','3'};
        for (int i = 0; i < 4; i++) {
            char aChar = chars[random.nextInt(8)];
            pass+=aChar;
        }
        System.out.println(pass);
        //System.out.println(random.nextInt(10));
        // redTriangle.draw();
    }
}

class Drawing{
    void drawWhatISay(Shape shape){
        shape.draw();
    }
}

abstract class Triangle{
    void m1(){
        System.out.println("just checking");
    }
    abstract void draw();
}

class RedTriangle extends Triangle{

    void draw() {
        System.out.println("drawing a red triangle");
    }
}

class BlueTriangle extends Triangle{

    void draw() {
        System.out.println("drawing a blue triangle");
    }
}
 interface Shape{
    void draw();
 }

 class Circle implements Shape{


     public void draw() {
         System.out.println("drawing a Circle");
     }
 }

 class Square implements Shape{

     public void draw() {
         System.out.println("drawing a red Square");
     }
 }

class Rectangle implements Shape{

    public void draw() {
        System.out.println("drawing a red rectangle");
    }
}

