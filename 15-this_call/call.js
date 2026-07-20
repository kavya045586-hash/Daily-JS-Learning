
/*
 The .call() Method
.call() lets you manually set the value of "this" when calling a function.
First argument of .call() = the object you want this to point to.

*/

function outer() {
    this.name = "Kavya"

    function inner() {
        console.log(this.name)
    }

    inner.call(this) // force inner to use outer’s context
}
outer() // Kavya
