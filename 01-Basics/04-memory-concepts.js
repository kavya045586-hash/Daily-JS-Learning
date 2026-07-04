// 🧠 Memory Management in JavaScript
// ----------------------------------
// JavaScript stores values in two main places:
// 1. Stack → for primitive types (number, string, boolean, null, undefined, symbol, bigint)
// 2. Heap  → for non-primitive types (objects, arrays, functions)

// 🔹 Example 1: Stack (Primitive Types)
let x = 42;
let y = x;   // y gets a copy of x
y = 100;

console.log(x); // 42
console.log(y); // 100
// ✅ Each variable gets its own copy on the stack.
// Changing y does not affect x because they are independent values.

// 🔹 Example 2: Heap (Non-Primitive Types)
let objA = { name: 'Alice' };
let objB = objA;   // objB points to the same object in heap
objB.name = 'Bob';

console.log(objA.name); // "Bob"
console.log(objB.name); // "Bob"
// ❌ Both variables reference the same object in the heap.
// Mutating objB also changes objA because they share the same memory location.

// 🔹 Example 3: Arrays (also heap-allocated)
let arr1 = [1, 2, 3];
let arr2 = arr1;   // arr2 references the same array
arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
// ✅ Both arr1 and arr2 point to the same heap object.

// 🔹 Example 4: Functions (heap-allocated)
function greet() {
  console.log("Hello!");
}
let fnA = greet;
let fnB = fnA;

fnB(); // "Hello!"
// ✅ Functions are objects in JavaScript, stored in the heap.
// fnA and fnB reference the same function object.
