// Number declarations
const a = 100.9887655;
const b = new Number(200);

console.log(a); // prints 100.9887655
console.log(b); // prints [Number: 200]

// Converting number to string so that we can use string methods on it
const c = b.toString();
console.log(c); // prints "200"

// Fixed method - rounds to specified decimal places
console.log(a.toFixed(3)); // prints "100.989"

// Precision method - formats number with specified precision
console.log(a.toPrecision(3)); // prints "101"
console.log(a.toPrecision(5)); // prints "100.99"

// Math methods demonstration
console.log(Math.max(1, 2, 3, 4, 5)); // returns 5
console.log(Math.min(1, 2, 3, 4, 5)); // returns 1
console.log(Math.trunc(10.9));        // returns 10 (truncates decimal part)
console.log(Math.round(10.5));        // returns 11 (rounds to nearest integer)
console.log(Math.ceil(10.1));         // returns 11 (rounds up)
console.log(Math.floor(10.9));        // returns 10 (rounds down)
console.log(Math.random());           // returns random number between 0 and 1
console.log(Math.abs(-10));           // returns 10 (absolute value)
console.log(Math.pow(2, 3));          // returns 8 (2^3)
console.log(Math.sqrt(16));           // returns 4 (square root)
console.log(Math.sin(Math.PI / 2));   // returns 1 (sine of 90°)
console.log(Math.cos(0));             // returns 1 (cosine of 0°)
console.log(Math.tan(Math.PI / 4));   // returns 1 (tangent of 45°)
console.log(Math.log(Math.E));        // returns 1 (natural log of e)
console.log(Math.exp(1));             // returns 2.718... (e^1)
