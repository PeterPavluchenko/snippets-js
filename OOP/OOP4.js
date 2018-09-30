// When an object inherits it's prototype from another object
// It also inherits the supertype's constructor function

function Animal(){ }

Animal.prototype = {
	constructor: Animal,
	eat: function(){
		console.log("Om-nom-nom");
	}
}

// An example

function Bird(){ }

Bird.prototype = Object.create(Animal.prototype);

let duck = new Bird();

console.log(duck.constructor);		// function Animal(){...}

// But duck and all instances of bird should show that they we created by Bird and not Animal
// To do this you can manually set the Bird's constructor property to Bird object:

Bird.prototype.constructor = Bird;

console.log(duck.constructor);		// function Bird(){...}