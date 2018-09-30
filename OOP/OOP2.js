// Use Inheritance so you Don't Repeat Yourself (DRY).

// Why is it important?
// Because any change requires fixing code in multiple places.
// Which means more work for programmers and more room for errors.

// Instead of putting the function describe into every prototype
// We put it into Animal's prototype only

// Now you can remove it from the Cat.prototype and Dog.prototype

function Cat(name){
	this.name = name;
}

Cat.prototype = {
	constructor: Cat
};

function Dog(name){
	this.name = name;
}

Dog.prototype = {
	constructor: Dog
};

function Animal(){}

Animal.prototype = {
	constructor: Animal,
	eat: function(){
		console.log("Om nom nom..");
	};
}