//Admin overrides the greet() method of User
class User {
  greet() {
    console.log("Hello from User class");
  }
}

class Admin extends User {
  // Overriding greet() method
  greet() {
    console.log("Hello from Admin class");
  }
}

const user1 = new User();
user1.greet(); // "Hello from User class"

const admin1 = new Admin();
admin1.greet(); // "Hello from Admin class"

//Method Overloading
//Having multiple methods with the same name but different parameter lists.
class Calculator {
  add(a, b, c) {
    // If c is provided, add three numbers
    if (c !== undefined) {
      return a + b + c;
    }
    // Otherwise, add two numbers
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(2, 3));       // 5
console.log(calc.add(2, 3, 4));    // 9
