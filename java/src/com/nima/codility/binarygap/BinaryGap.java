package com.nima.codility.binarygap;

import java.util.ArrayList;
import java.util.List;

public class BinaryGap {

    public int binaryGap(int N) {
        int longestBinaryGap = 0;
        List onesList = new ArrayList();
        String str = Integer.toBinaryString(N);

        for(int i=0; i<str.length(); i++) {
            if (str.charAt(i) == '0') continue;
            onesList.add(i);
        }

        for(int i=0; i<onesList.size() - 1; i++) {
            int indicesDiff = (int) onesList.get(i+1) - (int) onesList.get(i) - 1;
            longestBinaryGap = Math.max(longestBinaryGap, indicesDiff);
        }
        return longestBinaryGap;
    }

    public static void main(String[] args) {
        System.out.println(new BinaryGap().binaryGap(10045));
    }

}
