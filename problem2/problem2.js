

// ==== Implement your code here! ====
function max(array) {
    return Math.max.apply(null, array);
}


// This will test the results of your function to make sure it's working as expected
const assert = require('assert');

assert.deepStrictEqual(max([10, 100, -1, 12, 1024]), 1024);
assert.deepStrictEqual(max([5]), 5);
assert.deepStrictEqual(max([-1, -2, -3, -1000, 0]), 0);
