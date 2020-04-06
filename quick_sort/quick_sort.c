#include <stdio.h>
#include <stdlib.h>

void quick_sort(int count, int array[]);
void swap(int *a, int *b);
void sort(int start, int end, int array[]);
int find_pivot_index(int start, int end, int array[]); 

int main(int argc, char* argv[]) {
    
    int *m = malloc(sizeof(int) * (argc - 1));
    for(int i = 0; i < argc - 1; i++) {
        m[i] = atoi(argv[i + 1]);
    }
    
    quick_sort(argc - 1,m);
    for(int i = 0; i < argc - 1; i++) {
        printf("%d\n",m[i]);
    }
    return 0;
}

void quick_sort(int count, int array[]) {
    int start = 0;
    int end = count - 1;
    sort(start, end, array);
}

void sort(int start, int end, int array[]) {
    if(start >= end) {
        return;
    }
    int store_index = find_pivot_index(start, end, array);
    sort(start, store_index - 1, array);
    sort(store_index + 1, end, array);
}

int find_pivot_index(int start, int end, int array[]) {
    int store_index = start;
    int pivot = array[end];
    for(int i = start; i < end; i++) {
        if(array[i] <= pivot) {
            swap(&array[i], &array[store_index]);
            store_index++;
        }
    }
    swap(&array[store_index], &array[end]);

    return store_index;
}

void swap(int *a, int *b) {
    int c = *a;
    *a = *b;
    *b = c;
}
