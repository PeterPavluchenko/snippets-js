// Intro to Currying and Partial Application

// The arity of a function is the number of arguments it requires

// Currying of a function means to convert a function of N arity into
// N functions of arity 1

// In other words, it restructures a function so it takes one argument
// Then returns another function that takes the next argument and so on

// An example:

// Un-curried function:

function unCurried(x, y){
	return x + y;
}

// Curried function:

function curried(x){
	return function(y){
		return x + y;
	}
}

curried(1)(2)	// Returns 3