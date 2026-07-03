/*
🔹 Primitive Data Types
String     → "Hello"
Number     → 42, 3.14
Boolean    → true, false
null       → null
undefined  → undefined
Symbol     → Symbol("id")
BigInt     → 123456789012345678901234567890n

🔹 Non-Primitive (Reference) Data Types
Object     → { name: "Kavya", age: 25 }
Array      → [1, 2, 3, 4]
Function   → function greet() { return "Hi"; }
Date       → new Date()
RegExp     → /abc/
Map        → new Map()
Set        → new Set([1, 2, 3])
*/

// -------------------- Primitive Examples --------------------

// Number examples
let age = 25;        // integer
let pi = 3.14159;    // floating-point
let hex = 0xFF;      // hexadecimal (255)

// Undefined example
let x;
console.log(x); // Output: undefined

// Symbol example
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // Output: false (always unique)

// BigInt example
let big = 1234567890123456789012345678901234567890n;
console.log(big + 10n); // Output: BigInt addition

// -------------------- Non-Primitive Examples --------------------

// Array example
const arr = ['a', 'b', 'c'];
console.log(arr); // Output: [ 'a', 'b', 'c' ]

// Object example
let person = {
  name: "Kavya",
  age: 25,
  city: "Bengaluru"
};
console.log(person.name); // Output: Kavya
console.log(person.age);  // Output: 25
console.log(person.city); // Output: Bengaluru

// -------------------- Function Example --------------------

// A simple function that adds two numbers
function addNumbers(a, b) {
  return a + b;
}

// Calling the function
let result = addNumbers(5, 3);
console.log(result); // Output: 8
