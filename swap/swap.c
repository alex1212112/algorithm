#include <stdio.h>



void swap(int a, int b);

void swap(int a, int b) {
    int c = a;
    *(&a) = b;
    *(&b) = c;

    printf("in-a-address = %p\n", &a);
    printf("in-b-adrress = %p\n", &b);
}


int main(int argc, char* argv[]) {

    int a = 2;
    int b = 3;
    printf("out-a-address = %p\n", &a);
    printf("out-b-adrress = %p\n", &b);
    printf("a = %d\nb = %d\n",a, b);
    swap(a, b);
    printf("\n-----------------\n");
    printf("a = %d\nb = %d\n",a, b);

}
