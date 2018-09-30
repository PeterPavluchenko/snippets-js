// Use the map() method to extract data from an array
// Functional Programming is centered around a theory of functions
// It would make sense to use them as arguments in other function 
// And return a function from another function
// Functions are considered First Class Objects in JavaScript
// They can be used as any other object
// They can be saved as variables, stored in an object, or passed as function arguments

// Let's look at some simple array functions. Which are stored in Array.prototype
// Here we are looking at Array.prototype.map()

const rating = watchList.map(film => ({"title":film.["Title"], "rating":film.["imdbRating"]}));


// Implement map() on a prototype
// map() is a pure function and its output depends solely on its inputs 
// plus it takes another function as its arguments

Array.prototype.myMap = function(callback){
	let newArr = [];
	this.forEach(item => newArr.push(callback(item)));
	return newArr;
}

