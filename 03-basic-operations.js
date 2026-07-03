// 🔹 String Concatenation
var a = "hello";
var b = "world";
console.log(a + b); // "helloworld"

// 🔹 Type Coercion with +
console.log("1" + 2);       // "12" → string + number → number becomes string
console.log("1" + 2 + 2);   // "122" → left to right: "1"+2="12", "12"+2="122"
console.log(2 + 2 + "1");   // "41" → 2+2=4, then 4+"1"="41"
console.log(2 + 2 + "2" + 1 + 1); // "42211"

// 🔹 Arithmetic Operators
console.log(10 + 5);   // 15
console.log(10 - 5);   // 5
console.log(10 * 5);   // 50
console.log(10 / 2);   // 5
console.log(10 % 3);   // 1 (remainder)

// 🔹 Comparison Operators
console.log(5 == "5");   // true → loose equality (type coercion)
console.log(5 === "5");  // false → strict equality (no coercion)
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(5 <= 10);    // true

// 🔹 Logical Operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false

// 🔹 Assignment Operators
let x = 10;
x += 5;  // x = x + 5 → 15
x -= 3;  // x = x - 3 → 12
x *= 2;  // x = x * 2 → 24
x /= 4;  // x = x / 4 → 6
console.log(x);

// 🔹 Type Conversion
console.log(Number("10"));   // 10 → string to number
console.log(Boolean(""));    // false → empty string is falsy
console.log(Boolean("hi"));  // true → non-empty string is truthy
console.log(String(123));    // "123" → number to string

// 🔹 Special Cases
console.log(null + 1);       // 1 → null coerced to 0
console.log(undefined + 1);  // NaN → undefined cannot convert
console.log(true + 1);       // 2 → true coerced to 1
console.log(false + 10);     // 10 → false coerced to 0


