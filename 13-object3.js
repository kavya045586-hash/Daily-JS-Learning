const person = {
    name: "Kavya",
    id: 101,
    city: "Bengaluru"
};

// ✅ Destructure properties into variables
const {name,id}=person
console.log(name); // → "Kavya"
console.log(id);   // → 101


// ✅ Rename while destructuring
const { city: location } = person;
console.log(location); // → "Bengaluru"

// ✅ Default values
const { age = 22 } = person;
console.log(age); // → 22 (since age was not in object)


// JavaScript object
//👉 Notice: Functions (greet) and unquoted keys are allowed.

const user = {
  name: "Kavya",
  id: 101,
  isLoggedIn: true,
  greet: function() {
    return "Hello!";
  }
};

console.log(user.name);       // → "Kavya"
console.log(user.greet());    // → "Hello!"


//json
//👉 JSON is just text. No functions, no undefined, 
// and keys must be in double quotes.
const g=
{
  "name": "Kavya",
  "id": 101,
  "isLoggedIn": true
}


//conversion of object to javascript
// JavaScript object
const user = { name: "Kavya", id: 101 };

// Convert object → JSON string
const jsonString = JSON.stringify(user);
console.log(jsonString);
// → '{"name":"Kavya","id":101}'

// Convert JSON string → object
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj.name); // → "Kavya"

