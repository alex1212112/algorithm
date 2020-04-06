#include<stdio.h>
#include<stdlib.h>

void swap(int *a, int *b);
void selection_sort(int array[], int len);
void selection_once(int array[], int start, int len);
int find_current_min_index(int array[], int start, int len);

int main(int argc, char *argv[]) {
    int *arr = malloc(sizeof(int) * (argc - 1));
    for(int i = 0; i < argc - 1; i++) {
        arr[i] = atoi(argv[i+1]);
    }
    selection_sort(arr, argc - 1);
    for(int i = 0; i < argc - 1; i++) {
        printf("%d\n",arr[i]);
    }
    return 0;
}


void selection_sort(int array[], int len) {
    for(int i = 0; i < len; i++) {
        selection_once(array, i, len);
    } 
}

void selection_once(int array[], int start, int len) {
    int current_min_idex = find_current_min_index(array, start, len);
    swap(&array[start], &array[current_min_idex]);
}

int find_current_min_index(int array[], int start, int len) {
    int current_min_num = array[start];
    int current_min_idex = start;
    for(int i = start; i < len; i++) {
        if(array[i] < current_min_num) {
            current_min_num = array[i];
            current_min_idex = i;
        }
    }
    return current_min_idex; 
}

void swap(int *a, int *b) {
    int c = *a;
    *a = *b;
    *b = c;
}
