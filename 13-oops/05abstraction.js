/*
Abstraction means hiding the complex implementation details 
and showing only the essential features to the user. 
It’s about focusing on what an object does, not how it does it.

Reduces complexity by exposing only necessary methods.

Makes code easier to use and maintain.

Encourages modular design.
*/ 


//JavaScript doesn’t have true abstract classes like Java, 
//but we can simulate them by throwing errors if a method isn’t implemented.
//👉 Here, Vehicle defines the idea of start(), but subclasses decide how to implement it.
class Vehicle {
  start() {
    throw new Error("Method 'start()' must be implemented.");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car engine started");
  }
}

class Bike extends Vehicle {
  start() {
    console.log("Bike engine started");
  }
}

const v1 = new Car();
v1.start(); // Car engine started

const v2 = new Bike();
v2.start(); // Bike engine started
