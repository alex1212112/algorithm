#include<stdio.h>
#include<stdlib.h>

void swap(int* a, int* b) {
	int temp = *b;
	*b = *a;
	*a = temp;
}

void max_heapify(int arr[], int start, int end) {
	//建立父節點指標和子節點指標
	int dad = start;
	int son = dad * 2 + 1;
	while (son <= end) { //若子節點指標在範圍內才做比較
		if (son + 1 <= end && arr[son] < arr[son + 1]) //先比較兩個子節點大小，選擇最大的
			son++;
		if (arr[dad] > arr[son]) //如果父節點大於子節點代表調整完畢，直接跳出函數
			return;
		else { //否則交換父子內容再繼續子節點和孫節點比較
			swap(&arr[dad], &arr[son]);
			dad = son;
			son = dad * 2 + 1;
		}
	}
}

void heap_sort(int arr[], int len) {
	int i;
	//初始化，i從最後一個父節點開始調整
	for (i = len / 2 - 1; i >= 0; i--)
		max_heapify(arr, i, len - 1);
	//先將第一個元素和已排好元素前一位做交換，再重新調整，直到排序完畢
	for (i = len - 1; i > 0; i--) {
		swap(&arr[0], &arr[i]);
		max_heapify(arr, 0, i - 1);
	}
}

int main(int argc, char *argv[]) {
    int *array = malloc(sizeof(int) * (argc - 1));
    for(int n = 0; n <= argc - 2; n++){
        array[n] = atoi(argv[n+1]);
        printf("%d\n",array[n]);
    }
    printf("-------------------\n");
    heap_sort(array, argc - 1);    
    for(int n = 0; n <= argc - 2; n++){
        printf("%d\n",array[n]);
    }  

    
}
