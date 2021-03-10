/*

Find Maximum and Minimum Values of a List

Your task is to make a function called `max` that takes an array of numbers as an input and outputs the largest
number in that array.

You can assume that there will not be any empty arrays.

*== Examples ==*
max([4,6,2,1,9,63,-134,566]) returns 566
max([5]) returns 5

Once you have your function coded up, we'll use NodeJS to run your code. If you haven't installed NodeJS, take a look
at the README.md file. To test your code, just run the following command from a terminal:

  > node problem1.js

If you don't see any errors, that means your function worked!

Good luck!
*/


// ==== Implement your code here! ====
function max(array) {

}


// This will test the results of your function to make sure it's working as expected
const assert = require('assert');

assert.deepStrictEqual(max([10, 100, -1, 12, 1024]), 1024);
assert.deepStrictEqual(max([5]), 5);
assert.deepStrictEqual(max([-1, -2, -3, -1000, 0]), 0);
