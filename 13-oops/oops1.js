/ ===============================
// Basic OOP Concepts in JavaScript
// ===============================

// 1. Object literal (basic object)
const user = {
  name: "Kavya",
  age: 20,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

user.greet(); // "Hello, my name is Kavya"


// 2. Class (blueprint for objects)
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const user1 = new User("Kavya", 20);
user1.greet(); // "Hello, my name is Kavya"