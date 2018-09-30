// Functional programming is an approach based around the evaluation of functions
// Functions map input to output to produce a result
// You can combine basic functions to produce more complex programs

// Follows a few Core Principles: 
//		1. Functions are independent from the state of the program or global variables. 
//		   They only depend on the arguments passed into them to make calculation
//		2. Functions try to limit any changes to the state of the program and avoid changes
//		   to the global objects holding data
//		3. Functions have minimal side effects in the program

// -----------------------------------------------------------------------------------
// INPUT --> PROCESS --> OUTPUT
// Functional programming is about:
// 		1. Isolated functions - there is no dependence on the state of the program which includes
//		   global variables that are subject to change
//		2. Pure functions - the same input always gives the same output
//		3. Functions with limited side effects - any changes, or mutations, to the state of the
//		   program outside the function are carefully controlled

const tea4TeamFCC = getTea(40);
