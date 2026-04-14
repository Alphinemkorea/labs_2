// index.js

// Import datejs (as instructed in the lab)
const datejs = require('datejs');

// Task: combineUsers function
function combineUsers(...args) {
    // Step 2: Initialize the return object
    const combinedObject = {
        users: []
    };

    // Step 3 & 4: Loop through all arrays and merge using spread operator
    for (let arr of args) {
        combinedObject.users = [...combinedObject.users, ...arr];
    }

    // Step 5: Add today's date in M/d/yyyy format
    combinedObject.merge_date = new Date().toString("M/d/yyyy");

    // Step 6: Return the object
    return combinedObject;
}

// Export the function (important for Jest tests)
module.exports = { combineUsers };