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
        resolve({ username: "kavya", age: "20" }); // passing data to .then
    }, 1000);
});

C.then(function (user) {
    console.log(user.age); // prints "20"
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
            resolve({ username: "kavya", age: "20" });
        } else {
            reject("Rejected"); // reject should pass a message or error
        }
    }, 1000);
});

D.then(function (user) {
    console.log(user);
}).catch(function (error) {
    console.log(error); // prints "Rejected"
});


// ===============================
// Example 5: Async/Await consumption
// ===============================
// Async/await makes code look synchronous.
// Execution pauses at 'await' until the promise settles.
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let success = true; // change to false to test rejection
    if (success) {
      resolve("✅ Promise resolved successfully!");
    } else {
      reject("❌ ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    console.log("Waiting for promise to settle...");
    const response = await promiseFive; // pauses until promise settles
    console.log("Result:", response);
  } catch (error) {
    console.log("Caught error:", error);
  }
}

consumePromiseFive();
console.log("This line runs immediately after calling the function.");


// ===============================
// Example 6: Fetch with async/await
// ===============================
// fetch() sends an HTTP request and returns a Response object.
// response.json() parses the body into usable JSON.
async function getAllUsersAsync() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log("Response object:", response);

    const data = await response.json(); // must await here
    console.log("Parsed JSON data:", data);
  } catch (error) {
    console.log("E:", error);
  }
}

getAllUsersAsync();


// ===============================
// Example 7: Fetch with normal function (.then/.catch)
// ===============================
// Same as above but using standard function syntax instead of async/await.
function getAllUsersThen() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
      console.log("Response object:", response);
      return response.json();
    })
    .then(function(data) {
      console.log("Parsed JSON data:", data);
    })
    .catch(function(error) {
      console.log("E:", error);
    });
}

getAllUsersThen();
