// The bird's name here is a public property:

let bird = {
	name: "Peter",
	age: 21
}

// It can be modified externally

bird.name = "John";

// The easiest way to make properties private
// Is to define them to a variable within the constructor function
// It changes the scope of the property to be within that function

function Bird(){
	let color = "blue";
	this.returnColor = function(){
		return color;
	}
}

// In JavaScript a function always has access to the context where it was created
// This is called closure


function Robot(){
	let weight = 190;
	this.accessWeight = function(){
		return weight;
	}
}
