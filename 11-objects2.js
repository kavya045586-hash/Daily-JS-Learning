// Object creation
const p = new Object();   // singleton object
const t = {};             // non-singleton object (same as above, just shorthand)

// Nested object
const pp = {
    name: "kavya",
    id: {
        first: 2,
        second: 3
    }
};
console.log(pp.id.first); // → 2


// Combine two objects
const a = { name: "kavya" };
const b = { name: "shashu" };

// Here a, b become keys and values are stored as objects
const c = { a, b };
console.log(c); // → { a: { name: "kavya" }, b: { name: "shashu" } }


// Merge properties of a and b into one object
// ⚠️ If both have same keys, later one overwrites earlier
const d = Object.assign({}, a, b); // safe way (doesn't mutate a)
const e = { ...a, ...b };          // spread operator (same effect)

console.log(d); // → { name: "shashu" }
console.log(a); // → { name: "kavya" } (unchanged)


// Array of objects
const aa = [
    { first: 1, second: 2 },   // name object
    { first: 4, second: 8 }    // id object
];
console.log(aa[1].first); // → 4


// Object introspection
console.log(Object.keys(a));    // → ["name"]
console.log(Object.values(a));  // → ["kavya"]
console.log(Object.entries(a)); // → [["name", "kavya"]]



// Simulating a user object
const user = {
    name: "Kavya",
    isLoggedIn: true   // custom flag to track login status
};

// Check login status
if (user.hasOwnProperty("isLoggedIn") && user.isLoggedIn) {
    console.log("User is logged in ✅");
} else {
    console.log("User is not logged in ❌");
}
