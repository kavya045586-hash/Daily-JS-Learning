
// 1. Dot notation
const a = { name: 'John', age: 30, city: 'New York' };
console.log(a.name); // Output: John

// 2. Bracket notation with string keys
console.log(a['age']); // Output: 30
// Note: property name must be in quotes, otherwise JS treats it as a variable

// 3. Quoted keys in object definition
const g = { "name": "kavya" };
console.log(g["name"]); // Output: kavya
// Dot notation works too here: console.log(g.name);

// 4. Using Symbols as property keys
const sym = Symbol('id'); // Create a unique symbol
const b = {
    name: 'kavya',
    [sym]: 123   // Use [] to assign symbol as key
};

// Accessing symbol property
console.log(b[sym]); // Output: 123

// 5. Demonstrating uniqueness of Symbols
const sym1 = Symbol('id');
const sym2 = Symbol('id');
console.log(sym1 === sym2); // false (each Symbol is unique)




//symbols
//we created object user using symbol we are chainging property 
// of user id so each id is unique not affecting each other
const user = { name: "Kavya" };
// Library A
const idSymA = Symbol("id");
user[idSymA] = 123;

// Library B
const idSymB = Symbol("id");
user[idSymB] = "ABC123";

// Check values
console.log(user[idSymA]); // 123
console.log(user[idSymB]); // ABC123





//below example is oppsite of it 1 changes everything changes
// Library A
const user1 = { id: 123, name: "Kavya" };
// Later, Library B also wants to store something in "id"
user1.id = "ABC123";  
console.log(user1.id); // Output: ABC123

//object.freeze()
// Create an object
const user2 = {
  name: "Kavya",
  age: 25
};

// Freeze the object
Object.freeze(user2);

// Try modifying properties
user2.age = 30;          // ❌ ignored
user2.city = "Bengaluru"; // ❌ ignored
delete user2.name;        // ❌ ignored

console.log(user2);
// Output: { name: "Kavya", age: 25 }


//important
const person = {
  name: "Kavya",
  address: { city: "Bengaluru" }
};

Object.freeze(person);
person.address.city = "Mysuru"; // ✅ allowed (nested object not frozen)

console.log(person.address.city); // Mysuru



//function
function greet() {
  return "Hello!";
}

// Example usage
console.log(greet()); // Output: Hello!


//object function
// Define an object
const JsUser = {
  name: "Kavya",
  age: 25
};

// Add a function as a property
JsUser.greeting = function() {
  console.log("Hello JS user  :"+this.name);
    console.log(`Hello JS user  :${this.name}`);   //````
};

// Call the function
JsUser.greeting(); // Output: Hello JS user
