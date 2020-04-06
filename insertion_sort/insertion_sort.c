#include<stdio.h>
#include<stdlib.h>

void insertion_sort(int array[], int len) {
    for(int n = 1; n <= len - 1; n++) {
        int temp = array[n];
        int j;
        for(j = n; j > 0 && array[j-1] > temp; j--){
            array[j] = array[j-1];
        }
        array[j] = temp;
    }
}

int main(int argc, char *argv[]) {
    int *array = malloc(sizeof(int) * (argc - 1));
    for (int n = 0 ; n <= argc - 2; n++) {
        array[n] = atoi(argv[n + 1]);
    } 
    for (int m = 0; m <= argc - 2; m++) {
        printf("%d\n",array[m]);
    }
    printf("-------------\n");
    insertion_sort(array, argc - 1);    
    for (int m = 0; m <= argc - 2; m++) {
        printf("%d\n",array[m]);
    }
}
