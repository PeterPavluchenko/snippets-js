function Animal(){}

Animal.prototype = {
	constructor: Animal
}

// Inherit Behaviours From Supertype

// Inheritance Technique

// Instead of:

let animal = new Animal();

// We do it this way:

let animal = Object.create(Animal.prototype);

// We are giving "animal" the same "recipe" as any other instance of Animal

duck.eat(); // prints om nom nom
cat instanceof Animal; // => true


// Set the child's prototype to an instance of parent

// Set the prototype of the subtype (or child) - in this case, Bird - to be an instance of Animal

Bird.prototype = Object.create(Animal.prototype);

// The recipe for Bird now includes all the key "ingredients" from Animal, in a way

let duck = new Bird("Peter");

duck.eat(); // prints om nom nom

// duck inherits all Animal's properties, including eat method


Dog.prototype = Object.create(Animal.prototype);

let johnny = new Dog("Boi");

johnny.eat();		//prints "om nom nom"










