

// ==== Implement your code here! ====
function greetUser(object) {

}


// This will test the results of your function to make sure it's working as expected
const assert = require('assert');

assert.deepStrictEqual(greetUser({
    user: 'Andrea',
    id: 12345,
}), 'Hello Andrea');

assert.deepStrictEqual(greetUser({
    id: 45678,
    firstName: 'Joseph',
    lastName: 'Smith',
    user: 'Joe',
}), 'Hello Joe');

assert.deepStrictEqual(greetUser({
    id: 00000,
    error: 'Unknown user',
}), 'No user found');
