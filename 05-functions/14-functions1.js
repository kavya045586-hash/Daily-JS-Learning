
//1)
const obj={
    name:"kavya"
}

function greet(object)
{
    return `hi ${object.name}`

}

console.log(greet(obj))

//we can pass parameters also


//2)
function numbers(n)
{
    return n                               //it will return only 10

}
console.log(numbers(10,20,30))


//3)
function num(...n)
{
    return n                               //it will return only 10 20 30   use spread operator

}
console.log(num(10,20,30))



//4)
// Global Scope: Variables declared outside any function.

// Function Scope: Variables declared inside a function are accessible only within that function.

// Block Scope: Variables declared with let or const inside {} are limited to that block.

function outerFunction() {
  let outerVar = "I'm from outer";

  function innerFunction() {
    let innerVar = "I'm from inner";
    console.log(outerVar); // ✅ Can access outerVar
    console.log(innerVar); // ✅ Can access innerVar
  }

  innerFunction();
  // console.log(innerVar); ❌ Error: innerVar not defined
}

outerFunction();


// innerFunction can access outerVar because of lexical scope.

// But outerFunction cannot access innerVar because it’s defined inside innerFunction.
//Inner functions can access outer variables → lexical scope.
//var ignores block scope, while let and const respect it.


//5)
const person = {
  name: "Kavya",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};
person.greet(); // Hello, Kavya


//6   ARROW FUNCTION
//regular function
function heloo()
{
    return 0;
}

//arrow function
const greet = () => "Hello!";    //no parameter
console.log(greet()); // Hello!


const func=(a,b)=>a+b   //multiple parameter
console.log(func(1,2))

const square = n => n * n;   //one parameter
console.log(square(4)); // 16

const multiply = (a, b) => 
    {
  console.log("Multiplying...");
  return a * b;
};
console.log(multiply(2, 3)); // 6

//important point is in arrow function does not point the object 
// instead it should be globally declared
//👉 An arrow function doesn’t inherit this from its immediate parent object (like person in your example).
//  Instead, it looks outward to the lexical environment where the function was created — you can think of that as the “grandparent” scope.


//example 1
const person = {
  name: "Kavya",
  greet: () => {
    console.log("Hello, " + this.name);
  }
};
person.greet();                                         // Hello, undefined


//example 2
this.name = "GlobalName";                     // attaches to window in browsers

const person = {
  name: "Kavya",
  greet: () => {
    console.log("Hello, " + this.name);
  }
};

person.greet();                         `// Hello, GlobalName

//example 3

const person = {
  name: "Kavya",
  greet: function() {
    const inner = () => {
      console.log("Hello, " + this.name);
    };
    inner();
  }
};

person.greet(); // Hello, Kavya
