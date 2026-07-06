// Example: Call Stack demonstration in JavaScript

function first() {
    console.log("First start");   // Step 1: pushed onto stack
    second();                     // Step 2: calls second()
    console.log("First end");     // Step 6: resumes after second() finishes
}

function second() {
    console.log("Second start");  // Step 2: pushed onto stack
    third();                      // Step 3: calls third()
    console.log("Second end");    // Step 5: resumes after third() finishes
}

function third() {
    console.log("Third");         // Step 3: pushed onto stack, then popped
}

// Start execution
first();

/*
===========================
📚 Call Stack Trace (LIFO)
===========================

1. Call first()
   Stack: [first]
   Output: "First start"

2. first() calls second()
   Stack: [first, second]
   Output: "Second start"

3. second() calls third()
   Stack: [first, second, third]
   Output: "Third"

4. third() finishes → popped
   Stack: [first, second]

5. Back in second(), after third()
   Output: "Second end"
   second() finishes → popped
   Stack: [first]

6. Back in first(), after second()
   Output: "First end"
   first() finishes → popped
   Stack: []

===========================
✅ Final Output in Console:
===========================
First start
Second start
Third
Second end
First end
*/
