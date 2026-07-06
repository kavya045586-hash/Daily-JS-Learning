//immediately invoked function expressions(IIFE)


 //The () at the end calls the function immediately as soon as it’s define
(function hello() {
    console.log("wow");
})() 



 // you can’t call an IIFE again, because it doesn’t leave behind a callable function. If you want both behaviors (run immediately and be callable later), 
 // you’d need to declare the function separately and then invoke it once inside an IIFE.
 // Step 1: Define the function normally
function hello11() {
    console.log("hello world");
}

// Step 2: Call it immediately inside an IIFE
(function() {
    hello11(); // runs once right away
})();

// Step 3: Call it again later if you want
hello11(); // reusable



//passing parameter
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh');


(function hello(name) {
    console.log(`${name}`);
})('hitesh') 

