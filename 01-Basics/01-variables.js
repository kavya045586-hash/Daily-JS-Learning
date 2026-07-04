let a = "10";
console.table([a, a]);        // Prints a table with two entries: "10", "10"
console.log(typeof(a));       // "string" → because a is declared as a string

const b = 10;
console.log(typeof(b));       // "number" → b is a numeric constant

const c = Number(a);
console.log(typeof(c));       // "number" → converted string "10" to number 10
console.log(c);               // 10

var d = Boolean(a);
console.log(typeof(d));       // "boolean"
console.log(d);               // true → because non‑empty string is truthy

var d = String(a);
console.log(typeof(d));       // "string"
console.log(d);               // "10" → explicitly converted back to string

if (false) {
  var e = 10;
  let f = 20;
}
console.log(e); // ✅ Works → "undefined". 
                // Reason: var is hoisted, so e exists but no value assigned.
console.log(f); // ❌ Error → ReferenceError. 
                // Reason: let is block‑scoped, not hoisted outside the if block.
