// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

function consume(a, b, cb) {
  return cb(a, b);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(num1, num2) {
  return num1 + num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function greeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: When the JS engine executes nestedFunction, it will first look in nestedFunction lexical enviroment for the variable "internal", if it cannot find it, it will then check closure, closure will have both the "internal" variable since even though it's left the myFunction execution context, that context are still in scope for nestedFunction. (As is global.) If you look in the debugger you will see that "internal" is held in closure and "external" is held in the next lexical enviroment up, the script, as well as again in global. So even though external is not called, it is also available to nestedFunction. Since "internal" was called, nestedFunction will pull the value of "internal" from closure and console.log it. If "internal" was nested deeper inside of another lexical exectuion context, it would be inaccessible to the JS engine as that is out of scope. If "internal" was stored further "out" in the global context, it would check each context going further and furth out until it found it in the global. 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
debugger;
myFunction();
