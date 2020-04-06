#include <stdio.h>

#define MAKE(A, B) 0X ## A ## B

int main(int argc, char *argv[]) {

    printf("%d\n", MAKE(a,d));
//    for (int n = 0; n < 128; n++) {
//       printf("%d===%c\n",n,(char)n);
//    }
}
