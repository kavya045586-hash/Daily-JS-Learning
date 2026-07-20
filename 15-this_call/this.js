/*
The Problem with this
In JavaScript, this refers to the current execution context (who is calling the function).
But when you have a function inside another function, the inner one often loses the outer context.



In non‑strict mode, both outer and inner are sharing the global object as this.

In strict mode, inner loses the context and this becomes undefined.
*/


'use strict'   //without this both outer and inner will share the name 

function outer() {
    this.name = "Kavya"

    function inner() {
        console.log(this.name) // ❌ undefined
    }

    inner()
}
outer()

//here we are facing a problem using this inner cant share the name 





