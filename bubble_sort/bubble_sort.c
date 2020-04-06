#include <stdio.h>
#include <stdlib.h>

int* bubble_sort(int count, int array[]); 
void bubble_once(int count, int array[]); 
void swap(int *a, int *b); 

int main(int argc,char *argv[]) {
    int *a = malloc(sizeof(int) * (argc - 1));
    for(int n = 1; n < argc; n++) {
        int number = atoi(argv[n]);
        a[n-1] = number;
    }
    int *result = bubble_sort(argc - 1,a);
    for(int i = 0; i < argc - 1; i++) {
        printf("%d\n",a[i]);
    }
    return 0;
}

int* bubble_sort(int count, int array[]) {
    for(int i = count; i > 0; i--) {
        bubble_once(i,array);
    }
    return array;
}

void bubble_once(int count, int array[]) {
    for(int i = 0; i < count - 1; i++) {
       if(array[i] > array[i+1]) {
            swap(&(array[i]), &(array[i+1]));
       }
    }
}

void swap(int *a, int *b) {
    int c = *a;
    *a = *b;
    *b = c;
}
