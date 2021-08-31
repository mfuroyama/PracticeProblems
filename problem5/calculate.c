#include <stdio.h>
#include <stdbool.h>
#include <string.h>

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

/* Here, "numbers" is the array of numbers, "length" is the length of the array */
int total(int numbers[], int length) {

    int sum = 0; 
    int i = 0;

    for(i = 0; i < length; i+=1) {
        sum = sum + numbers[i];
    }

    return sum;
}



bool areStringsEqual(const char* first, const char* second) {

char string1;
char string2;


int result = strcmp(first, second);

if(result == 0) {
    return true;
}

else false;

return 0;

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

    int numbers[7] = { 5, 4, 1, 0, 9, 10, 11 };
    int grandTotal = total(numbers, sizeof(numbers) / sizeof(numbers[0]));
    printf("total of numbers is %d (should be 40)", grandTotal);


    bool result;
    char *foo;

    result = areStringsEqual("add", "subtract");
    foo = (result == true ? "yes" : "no");
    printf("Is \"add\" equal to \"subtract\"? %s (should be no)\n", foo);

    result = areStringsEqual("add", "add");
    foo = (result == true ? "yes" : "no");
    printf("Is \"add\" equal to \"add\"? %s (should be yes)\n", foo);

    result = areStringsEqual("subtract", "sub");
    foo = (result == true ? "yes" : "no");
    printf("Is \"subtract\" equal to \"sub\"? %s (should be no)\n", foo);

    return 0;
}
