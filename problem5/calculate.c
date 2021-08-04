#include <stdio.h>

/* Create your add and subtract functions here */

int add(int a, int b){
    return a+b;
}

int subtract(int a, int b){
    return a-b;
}

float multiply(float a, float b) {
    return a*b;
}

float divide(float a, float b) {
    return a/b;
}

int main() {

    int sum = add(2, 4);
    printf("add: 2 + 4 = %d\n", sum);

    int diff = subtract(4, 2);
    printf("subtract: 4 - 2 = %d\n", diff);

    float product = multiply(12.0, 0.25);
    printf("multiply: 12.0 * 0.25 = %0.1f (should be 3.0)\n", product);

    float quotient = divide(5.0, 0.1);
    printf("divide: 5.0 / 0.1 = %0.1f (should be 50.0)\n", quotient);

    return 0;
}
