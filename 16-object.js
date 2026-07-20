// Inspecting Math.PI
const descriptorPI = Object.getOwnPropertyDescriptor(Math, "PI");
console.log("Math.PI descriptor:", descriptorPI);

// Trying to overwrite Math.PI
Math.PI = 89; // This will NOT work because writable is false
console.log("Math.PI after overwrite attempt:", Math.PI);

// Creating a custom object
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
};

// Changing chai.price (allowed by default)
chai.price = 70;
console.log("chai.price after change:", chai.price);

// Inspecting chai.price descriptor
const descriptorPrice = Object.getOwnPropertyDescriptor(chai, "price");
console.log("chai.price descriptor:", descriptorPrice);

// Making chai.price read-only (like Math.PI)
Object.defineProperty(chai, "price", {
    writable: false,
    configurable: false
});

// Trying to overwrite chai.price now
chai.price = 100; // This will NOT change the value
console.log("chai.price after overwrite attempt:", chai.price);

// Inspecting descriptor again
const descriptorPriceLocked = Object.getOwnPropertyDescriptor(chai, "price");
console.log("chai.price descriptor after locking:", descriptorPriceLocked);
