// A constructor function that inherits its prototype object from a supertype constructor function
// Can still have its own methods in addition to inherited methods.

// For example, Bird is a constructor that inherits its prototype from Animal:

function Animal(){ }

Animal.prototype.eat = function(){
	console.log("Om nom nom");
}

function Bird(){ }

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

// In addition to what is inherited from Animal, you want to add behaviour that is unique to
// Bird object
// Bird will get fly() function
// Functions added to Bird's prototype the same way as any constructor functions

Bird.prototype.fly = function(){
	console.log("I'm flying!!!");
}

// Now instances of Bird will have both eat() and fly() methods:

let duck = new Bird();

duck.eat();	// Om nom nom
duck.fly();	// Im flying


Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.sound = function() { console.log("Meow."); };

let tihon = new Cat();

tihon.sound()		// Meow




















