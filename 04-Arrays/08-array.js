// ===============================
// Array Concepts in JavaScript
// ===============================

// 1. Creating arrays
const a = [1, 2, 3, 4, 5];              // Array literal
const b = new Array(6, 7, 8, 9, 10);    // Array constructor

console.log(a); // [1, 2, 3, 4, 5]
console.log(b); // [6, 7, 8, 9, 10]

// 2. Accessing elements
console.log(a[0]); // 1 (first element of a)
console.log(b[0]); // 6 (first element of b)

// 3. Push (add at end) and Pop (remove from end)
a.push(6);
console.log(a); // [1, 2, 3, 4, 5, 6]

a.pop();
console.log(a); // [1, 2, 3, 4, 5]

// 4. Unshift (add at start) and Shift (remove from start)
a.unshift(100);
console.log(a); // [100, 1, 2, 3, 4, 5]

a.shift();
console.log(a); // [1, 2, 3, 4, 5]

// 5. Join method (convert array to string)
const F = ["apple", "banana", "cherry"];
const G = F.join();   // "apple,banana,cherry"
console.log(G);       // prints the whole string
console.log(G[0]);    // "a" (first character of the string)

// 6. Slice method (copy part of array into new array)
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const sliced = fruits.slice(1, 3); 
console.log(sliced);  // ["banana", "cherry"]
console.log(fruits);  // ["apple", "banana", "cherry", "date", "elderberry"] (unchanged)

// 7. Splice method (modify array by adding/removing elements)
const colors = ["red", "green", "yellow"];

// Insert new elements at index 1
colors.splice(1, 0, "purple", "orange"); 
// Go to index 1, remove 0 elements, add "purple" and "orange"

console.log(colors);  
// ["red", "purple", "orange", "green", "yellow"]
