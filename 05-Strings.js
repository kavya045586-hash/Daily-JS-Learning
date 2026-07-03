// ===============================
// 🔹 JavaScript String Operations
// ===============================

// Basic declaration
const a = "hEllo";
const b = "world";

// Template literals
console.log(`a value is ${a} and b value is ${b}`); // ``````
console.log(a);
console.log(b);

// Concatenation
console.log(a.concat(b));
console.log(a + " " + b); //hello world

// Accessing characters & length
console.log(a[0]);        // h
console.log(a.length);    // 5

// Case conversion (immutable)
let c = a.toUpperCase();
console.log(c);           // HELLO
console.log(a);           // hEllo (unchanged)

// Character access & index
console.log(a.charAt(2));        // l
console.log(a.indexOf('l'));     // 2 (first occurrence)
console.log(a.lastIndexOf('l')); // 3 (last occurrence)

// String object
const d = new String("hello world");
console.log(d);

// Substring & slice
const e = d.substring(0, 3);
console.log(e);           // hel

const f = d.slice(-5, -3);
console.log(f);           // wo

// Trimming & replacing
const y = "       hello world     ";
console.log(y);           // with spaces
console.log(y.trim());    // "hello world"

const g = y.replace("hello", "what");
console.log(g);           // "       what world     "
console.log(y);           // original unchanged

// Checking substring
console.log(y.includes("hello")); // true

// Splitting
const h = "a-b-c-d-e-f";
console.log(h.split("-")); // ["a","b","c","d","e","f"]

// ===============================
// 🔹 Extra Useful String Methods
// ===============================

// startsWith / endsWith
console.log(a.startsWith("h")); // true
console.log(b.endsWith("d"));   // true

// repeat
console.log("ha".repeat(3));    // hahaha

// padStart / padEnd
const num = "5";
console.log(num.padStart(3, "0")); // "005"
console.log(num.padEnd(3, "0"));   // "500"

// match (regex)
const text = "The rain in Spain";
console.log(text.match(/ain/g));   // ["ain","ain"]

// search (regex)
console.log(text.search(/Spain/)); // 12 (index)

// ===============================
// 🔹 Key Takeaways
// ===============================
// 1. Strings are immutable → methods return new strings.
// 2. substring(start,end) excludes end.
// 3. slice() supports negative indices.
// 4. trim() removes spaces only at start & end.
// 5. split() converts string → array.

