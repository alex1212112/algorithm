#include<stdio.h>
#include<stdlib.h>


void shell_sort(int arr[], int len) {
    for(int gap = len >> 1; gap > 0; gap = gap >> 1 ){
        for(int i = gap; i < len; i++) {
            int temp = arr[i];
            int j;
            for(j = i; j > 0 && arr[j-gap] > temp; j -= gap) {
                arr[j] = arr[j-gap];    
            }
            arr[j] = temp;
        }    
    }        
}

int main(int argc, char *argv[]) {

    int *array = malloc(sizeof(int) * (argc - 1));
    for(int n = 0; n < argc - 1; n++ ) {
        array[n] = atoi(argv[n+1]);
        printf("%d\n",array[n]);
    }
    printf("------------\n");
    shell_sort(array, argc - 1);

    for(int n = 0; n < argc - 1; n++ ) {
        printf("%d\n",array[n]);
    }
}
