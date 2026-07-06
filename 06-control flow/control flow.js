// ============================================
// 1. IF / ELSE IF / ELSE
// ============================================
let age = 20;

if (age < 13) {
    console.log("Child");
} else if (age < 18) {
    console.log("Teenager");
} else {
    console.log("Adult");
}

// ============================================
// 2. TERNARY OPERATOR (shorthand if-else)
// ============================================
let isRaining = true;
let message = isRaining ? "Take an umbrella" : "Enjoy the sun";
console.log(message);

// ============================================
// 3. SWITCH STATEMENT
// ============================================
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

// ============================================
// 4. FOR LOOP
// ============================================
for (let i = 1; i <= 5; i++) {
    console.log("For loop:", i);
}

// ============================================
// 5. WHILE LOOP
// ============================================
let i = 1;
while (i <= 5) {
    console.log("While loop:", i);
    i++;
}

// ============================================
// 6. DO-WHILE LOOP (runs at least once)
// ============================================
let j = 1;
do {
    console.log("Do-while loop:", j);
    j++;
} while (j <= 5);

// ============================================
// 7. FOR...OF (iterate over arrays/iterables)
// ============================================
let fruits = ["apple", "banana", "mango"];
for (let a of fruits) {
    console.log("Fruit:", a);              //of for individual  elements
}

// ============================================
// 8. FOR...IN (iterate over object keys)
// ============================================
let person = { name: "Kavya", age: 22, city: "Bengaluru" };
for (let key in person) {                      //in for accessing a key value
    console.log(key, ":", person[key]);
}

// ============================================
// 9. BREAK (exit loop early)
// ============================================
for (let k = 1; k <= 10; k++) {
    if (k === 5) break;
    console.log("Break example:", k);
}

// ============================================
// 10. CONTINUE (skip current iteration)
// ============================================
for (let m = 1; m <= 5; m++) {
    if (m === 3) continue;
    console.log("Continue example:", m);
}

// ============================================
// 11. NESTED LOOPS with labeled break
// ============================================
outerLoop:
 for (let a = 1; a <= 3; a++) 
    {
    for (let b = 1; b <= 3; b++) 
        {
        if (b === 2) continue outerLoop;
        console.log(`a=${a}, b=${b}`);
    }
}

// ============================================
// 12. LOGICAL OPERATORS IN CONDITIONS
// ============================================
let hasLicense = true;
let hasHelmet = true;

if (hasLicense && hasHelmet) {
    console.log("Allowed to ride");
} else {
    console.log("Not allowed");
}

// ============================================
// 13. TRY / CATCH / FINALLY (error control flow)
// ============================================
try {
    let result = 10 / 0; // won't throw, but let's force an error
    if (!isFinite(result)) throw new Error("Cannot divide by zero properly");
    console.log(result);
} catch (error) {
    console.log("Error caught:", error.message);
} finally {
    console.log("This always runs");
}