// Memory management in JavaScript

//stack for primitive tyoes 
// heap non primitive type


let x = 42;
let y = x; 
y = 100;
console.log(x); // 42
//Each variable gets its own copy on the stack. Changing y does not affect x.
let objA = { name: 'Alice' };
let objB = objA;
objB.name = 'Bob';
console.log(objA.name); // 'Bob'
//Both variables point to the same heap object. Mutating one affects the other.