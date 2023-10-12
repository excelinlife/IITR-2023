package com.gl.ashish.day2;

import java.util.Scanner;

public class TwoD {
    public static void main(String[] args) {
        int[][] arr =  new int[3][4];
        Scanner sc = new Scanner(System.in);
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 4; j++) {
                int num = sc.nextInt();
                arr[i][j] = num;
            }
        }
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[i].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println();
        }
    }
}
