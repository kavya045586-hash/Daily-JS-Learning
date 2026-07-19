// ===============================
// Inheritance in JavaScript
// ===============================

// Parent class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Child class extends User
class Admin extends User {
  constructor(adminName, adminAge, role) {
    // super() calls the parent constructor
    super(adminName, adminAge);
    this.role = role; // new property specific to Admin
  }

  showRole() {
    console.log(`I am an ${this.role}`);
  }

  // Method overriding: redefine greet()
  greet() {
    console.log(`Hello, I am ${this.name}, my role is ${this.role}.`);
  }
}

// Multi-level inheritance: SuperAdmin extends Admin
class SuperAdmin extends Admin {
  constructor(name, age, role, permissions) {
    super(name, age, role); // call Admin constructor
    this.permissions = permissions; // new property specific to SuperAdmin
  }

  showPermissions() {
    console.log(`Permissions: ${this.permissions.join(", ")}`);
  }

  // Override showRole() to add more detail
  showRole() {
    console.log(`I am a ${this.role} with special powers!`);
  }
}

// ===============================
// Usage Examples
// ===============================

// Basic User
const user1 = new User("Kavya", 20);
user1.greet(); // "Hello, my name is Kavya, I am 20 years old."

// Admin inherits from User
const admin1 = new Admin("Arjun", 25, "Moderator");
admin1.greet();     // "Hello, I am Arjun, my role is Moderator."
admin1.showRole();  // "I am an Moderator"

// SuperAdmin inherits from Admin (multi-level)
const superAdmin1 = new SuperAdmin("Meera", 30, "SuperAdmin", ["create", "delete", "update"]);
superAdmin1.greet();          // overridden greet from Admin
superAdmin1.showRole();       // overridden showRole from SuperAdmin
superAdmin1.showPermissions(); // "Permissions: create, delete, update"
