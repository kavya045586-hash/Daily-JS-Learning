// ===============================
// Example 1: Promise without resolve
// ===============================
// A promise must call resolve() or reject() to change its state.
// Without resolve, .then() will never run.
const B = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("TASK 2");
        // resolve() is missing here, so .then will not execute
    }, 1000);
});

B.then(function () {
    console.log("Promise 2"); // This will NOT run
});

// ===============================
// Example 2: Promise with resolve
// ===============================
// Here resolve() is called, so the promise is fulfilled and .then() runs.
const a = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("TASK 1");
        resolve(); // triggers .then
    }, 1000);
});

a.then(function () {
    console.log("Promise 1"); // This WILL run
});

// ===============================
// Example 3: Promise resolving with data
// ===============================
// Promises can resolve with values (objects, strings, etc.).
// That value is passed into .then().
const C = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("TASK 3");
        resolve({ username: "kavya" }); // passing data to .then
    }, 1000);
});

C.then(function (user) {
    console.log(user); // { username: "kavya" }
});

// ===============================
// Example 4: Promise with reject
// ===============================
// reject() is used when the promise fails.
// If reject() is called, .then() is skipped and .catch() runs.
const D = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("TASK 4");
        const a = true;
        if (!a) {
            resolve({ username: "kavya" });
        } else {
            reject("Rejected"); // reject should pass a message or error
        }
    }, 1000);
});

D.then(function (user) {
    console.log(user);
}).catch(function (error) {
    console.log(error); // "Rejected"
});
