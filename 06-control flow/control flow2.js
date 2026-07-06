// ============================================
// SETUP DATA
// ============================================
let numbers = [10, 20, 30, 40, 50];
let students = [
    { name: "Kavya", marks: 85, pass: true },
    { name: "Ravi", marks: 40, pass: false },
    { name: "Anu", marks: 92, pass: true },
    { name: "Deepak", marks: 55, pass: true }
];

// ============================================
// 1. forEach() — just LOOPS, returns undefined
// ============================================
/*    array.forEach(function (element, index, array) {
     element = the current item
     index   = the current position (0, 1, 2, ...)
     array   = the whole array being looped over
      });       
 */
// Use when you want to "do something" for each item, no new array needed
numbers.forEach(
    function (num, index) {
    console.log(`Index ${index}: ${num}`);
}
);

// Arrow function version
numbers.forEach((num, index) => console.log(num * 2));


// ============================================
// 2. map() — TRANSFORMS each item, returns a NEW array (same length)
// ============================================
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // [20, 40, 60, 80, 100]

let studentNames = students.map((student) => student.name);
console.log(studentNames); // ["Kavya", "Ravi", "Anu", "Deepak"]

// map with index
let indexed = numbers.map((num, i) => `${i}: ${num}`);
console.log(indexed);


// ============================================
// 3. filter() — SELECTS items matching a condition, returns NEW array (shorter/equal length)
// ============================================
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [10, 20, 30, 40, 50] (all even here)

let passedStudents = students.filter((student) => student.pass === true);
console.log(passedStudents);
// [{name: "Kavya", ...}, {name: "Anu", ...}, {name: "Deepak", ...}]

let highScorers = students.filter((student) => student.marks > 80);
console.log(highScorers.map(s => s.name)); // ["Kavya", "Anu"]


// ============================================
// 4. reduce() — REDUCES array to a SINGLE value (accumulator pattern)
// ============================================
// syntax: array.reduce((accumulator, currentValue) => {...}, initialValue)


let total = 
numbers.reduce(
    function(acc, num) {                //sum of number
    return acc + num;
}, 
0);

console.log(total); // 150



                                                          //max number
let maxNumber = numbers.reduce(function(acc, num) {
    return num > acc ? num : acc;
}, numbers[0]);

console.log(maxNumber); // 50



// ALL CONCEPTS TOGETHER 


// filter, map, reduce chain
let passed = students.filter(function(student) {
    return student.marks >= 50;
});

let marks = passed.map(function(student) {
    return student.marks;
});

let average = marks.reduce(function(acc, num, i, arr) {
    acc += num;
    if (i === arr.length - 1) return acc / arr.length;
    return acc;
}, 0);

console.log("Average:", average); 
console.log("Original students:", students);


//Mutating methods: sort(), splice(), push(), pop(), shift(), unshift() → change the original array.

//Non-mutating methods: map(), filter(), reduce(), slice(), concat() → return new arrays/values, original stays safe.