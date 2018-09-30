// One of the core principle of Functional Programming is to not change things
// Changes lead to bugs
// It's easier to prevent bugs knowing that your functions don't change anything
// including the function arguments or any global variable

// In functional programming changing things is called mutation.
// And the outcome is called side effect
// A function should be a pure function, meaning that it does not cause any side effects

let fixedValue = 4;

function incrementer(){
  let myValue = fixedValue + 1;
  return myValue;
}

// Always declare your dependencies explicitly
// Means if a function depends on a variable or object being present, then pass that variable
// or object directly into the function as an argument.

// Good consequences from this principle:
// The function is easier to test
// You know exactly what input it takes, and it won't depend on anything else in your program.
// This can give you more confidence when you alter, remove or add new code.
// You would know what you can or cannot change, and you can see where the potential traps are

// The function would always produce the same output for the same set of inputs
// No matter what part of the code executes it

let fixedValue = 4;

function incrementer(num){
  return num + 1;
}