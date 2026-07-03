// 1. Create arrays
var a = [1,2,3,4,5,6,7,8,9,10]
var b = [11,12,13,14,15,16,17,18,19,20]

// 2. Push one array into another (nested array at index 10)
a.push(b)
console.log(a)
/*
[
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
]
*/

// 3. Concat arrays (merges but still can nest if pushed)
var c = [1,2,3]
var d = [11,12]
c.push(d)   // nested
console.log(c) // [1, 2, 3, [11, 12]]

// 4. Flatten nested arrays
const j = c.flat()
console.log(j) // [1, 2, 3, 11, 12]

// 5. Spread operator (perfect merge without nesting)
var merged = [...a, ...b]
console.log(merged)

// 6. Convert string to array using Array.from()
var str = "hello"
var arr = Array.from(str)
console.log(arr) // ['h', 'e', 'l', 'l', 'o']

// 7. Check if variable is an array using Array.isArray()
var x = [1,2,3]
var y = "hello"
console.log(Array.isArray(x)) // true
console.log(Array.isArray(y)) // false

// 8. Create array from arguments using Array.of()
var arr2 = Array.of(1,2,3,4,5)
console.log(arr2) // [1, 2, 3, 4, 5]
