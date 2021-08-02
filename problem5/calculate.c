#include <stdio.h>

/* Create your add and subtract functions here */

int add(int a, int b){
    return a+b;
}

int subtract(int a, int b){
    return a-b;
}

int main() {

    int sum = add(2, 4);
    printf("add: 2 + 4 = %d\n", sum);

   int diff = subtract(4, 2);
    printf("subtract: 4 - 2 = %d\n", diff);

    return 0;
}
