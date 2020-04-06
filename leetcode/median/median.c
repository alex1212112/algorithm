
#include<stdio.h>


double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    int index1 = 0;
    int index2 = 0;
    int preNum = 0;
    int current = 0;
    int middleIndex = (nums1Size + nums2Size) / 2;
    char keyIndex = 0;
    while (index1 + index2 < middleIndex) {
        if(index1 == nums1Size) {
            keyIndex = 2;
            index2++;
        } else if(index2 == nums2Size){
            keyIndex = 1;
            index1++;
        } else {
            if(nums1[index1] < nums2[index2]) {
                keyIndex = 1;
                index1++;
            } else {
                keyIndex = 2;
                index2++;
            }  
        }
        if(index1 + index2 == middleIndex) {
            preNum = keyIndex == 1 ? nums1[index1 - 1] : nums2[index2 - 1]; 
        }
    }
    if(index1 == nums1Size) {
        keyIndex = 2;
    } else if(index2 == nums2Size){
        keyIndex = 1;
    } else {
        if(nums1[index1] < nums2[index2]) {
            keyIndex = 1;
        } else {
            keyIndex = 2;
        }  
    }

    current = keyIndex == 1 ? nums1[index1] : nums2[index2]; 
    if ((nums1Size + nums2Size)&1) {
        return current; 
    } 
    return ((double)preNum + (double)current) / 2;
}


int main(int argc, char *argv[]) {
    int a[] = {};
    int b[] = { 2 };
    double result = findMedianSortedArrays(a,0, b, 1);
    printf("%f\n",result);
}





