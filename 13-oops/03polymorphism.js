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


// ===============================
// Ways to Avoid Overriding in JavaScript
// ===============================

// Parent class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello from User: ${this.name}, Age: ${this.age}`);
  }
}

// 1. Use Different Method Names
class Admin1 extends User {
  showRole() {
    console.log("I am an Admin");
  }
}

const admin1 = new Admin1("Kavya", 20);
admin1.greet();    // still calls User's greet()
admin1.showRole(); // new method in Admin1


// 2. Call Parent Method Explicitly with super
class Admin2 extends User {
  greet() {
    super.greet(); // call User's greet()
    console.log("Extra message from Admin2");
  }
}

const admin2 = new Admin2("Arjun", 25);
admin2.greet();
// Output:
// Hello from User: Arjun, Age: 25
// Extra message from Admin2