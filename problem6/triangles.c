#include <stdio.h>

/*
    This function will take three `int` angle values (in degrees), then do the following:

    1) Determine if the three angles can compose a valid triangle (sum = 180)
    2) If the three angles are not a valid triangle, just print "not a triangle" and return
    3) If it is a triangle, determine whether the triangle is one of the following:
       - scalene: All three angles are different
       - isosceles: Two of the three angles are equal
       - equilateral: All three angles are equal

       Then print the type of triangle out.
*/
void makeTriangle(firstAngle, secondAngle, thirdAngle) {
}

int main() {
    int firstAngle, secondAngle, thirdAngle;

    while (1) {
        printf("Triangle Maker! Enter three angle values (or Control+C to quit)\n");

        scanf("%d %d %d", &firstAngle, &secondAngle, &thirdAngle);
        makeTriangle(firstAngle, secondAngle, thirdAngle);

        printf("\n");
    }
}