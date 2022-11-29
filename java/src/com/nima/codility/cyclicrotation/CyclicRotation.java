package com.nima.codility.cyclicrotation;

public class CyclicRotation {

    public int[] cyclicRotation (int[] A, int K) {
        int[] rotatedA = new int[A.length];
        for(int i = 0; i < A.length; i++) {
            int rotatedIndex = (i + K) % A.length;
            rotatedA[rotatedIndex] = A[i];
        }
        return rotatedA;
    }

    public static void main(String[] args) {
        int[] A = new int[] {3, 8, 9, 7, 6};
        int K = 3;
        int[] output = new CyclicRotation().cyclicRotation(A, K);
        System.out.println(output);
    }
}
