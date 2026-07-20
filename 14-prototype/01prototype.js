/* 2. What is a Prototype?
Think of a prototype as a backup plan for objects.

If you ask an object for a property and it doesn’t have it, JavaScript looks at its prototype.

This chain continues until it reaches null.
👉 This is called the prototype chain. */


//1
//Here, sayHello isn’t inside user1 directly — it’s found via the prototype chain.
function createUser(name) {
    this.name = name   //this refers to the new object being created.
}
createUser.prototype.sayHello = function() {
    console.log(`Hello, I am ${this.name}`)
}

const user1 = new createUser("Kavya") //new is the glue that connects objects to prototypes.
user1.sayHello() // Hello, I am Kavya

//2
String.prototype.trueLength = function() {
    console.log(this.trim().length)
}

"  hello  ".trueLength() // 5

//3
//ES6 class syntax looks cleaner, but under the hood it’s still using prototypes.
class User {
    constructor(name) {
        this.name = name
    }
    sayHello() {
        console.log(`Hello, I am ${this.name}`)
    }
}

/*Prototypes are the foundation of inheritance in JavaScript.

They let objects share behavior without copying code.

Understanding them makes you better at debugging, writing efficient code, and grasping how class really works. */