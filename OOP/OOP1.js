// ----------------------------------------------

let dog = {
	name: "Peter",
	numLegs: 2
}



// ----------------------------------------------

let car = {
	name: "Toyota",
	numWheels: 4
}

console.log(car.name);
console.log(car.numWheels);



// ----------------------------------------------
//Methods are properties in objects that are functions.

let duck = {
	name: "Kate",
	age: 18,
	sayName: function {
		return "The name of this duck is " + this.name + ".";
	}
}




// ----------------------------------------------
// this inside of constructor always refers to the object being created

function Dog(){
	this.name = "Peter";
	this.color = "Black";
	this.numLegs = 2;
}



// ----------------------------------------------

function Bird(){
	this.gender = "Male";
	this.name = "Peter";
	this.age = 21;
}

let peter = new Bird();

//Can be modified:

peter.age = 22;



// ----------------------------------------------
// What if you want birds with different values for name and color?

function Bird(name, color){
	this.name = name;
	this.color = color;
	this.numLegs = 2;
}

// Then pass in arguments to define each unique bird into the Bird constructor

let cardinal = new Bird("Peter", "green");


// ----------------------------------------------
// Verify an obect's constructor with instanceof
// instanceof allows you to compare an object to a constructor
// returning true or false depending if that object was created with the constructor

let crow = new Bird("Jake", "black");

crow instanceof Bird; // returns true


// ----------------------------------------------

let ownProps = [];

for(let property in crow){
	if(crow.hasOwnProperty(property)){
		ownProps.push(property);
	}
}

console.log(ownProps);		// prints ["name", "color", "numLegs"]


// ----------------------------------------------
// Use prototype properties to reduce Duplicate Code
// Prototype is like recipe for creating objects

function Dog(name){
	this.name = name;
}

Dog.prototype.numLegs = 4;


// ----------------------------------------------
// Own properties are defined directly on the object instance itself
// Prototype properties are defined on the prototype

function Cat(name, age){
	this.name = name;	// Own property
	this.age = age;
}

let kitten = new Cat("Tihon", 17);
Cat.prototype.numLegs = 4; 	// Prototype property

// How to add  own properties to the ownProps 
// And prototype properties to the prototypeProps

let ownProps = [];
let prototypeProps = [];

for(let property in kitten){
	if(kitten.hasOwnProperty(property)){
		ownProps.push(property);
	} else {
		prototypeProps.push(property);
	}
}


// ----------------------------------------------
// The Constructor Property 
// It's reference to the constructor function that created the instance

let duck = new Bird;
let beagle = new Dog;

console.log(duck.constructor === Bird); // true
console.log(beagle.constructor === Dog); // true



// ----------------------------------------------

function checkBirdFrat(candidate){
	if(candidate.constructor === Bird){
		return true;
	} else {
		return false;
	}
}



// ----------------------------------------------
// Change the prototype to a new object
// Adding properties to the prototype individually becomes tedious

Bird.prototype.numLegs = 2;
Bird.prototype.eat = function(){
	console.log("Om-nom-nom..");
}
Bird.prototype.describe = function(){
	console.log("My name is " + this.name);
}

// A more sufficient way is to set the prototype to a new object
// That already contains the properties
// That way all properties are added all at once

Bird.prototype = {
	numLegs: 2,
	eat: function(){
		console.log("Om-nom-nom..");
	},
	describe: function(){
		console.log("My name is " + this.name);
	}
}


// ----------------------------------------------
// Remember to set the constructor property when changing the prototype
// Define it at the beginning:

console.log(duck.constructor); // undefined

Dog.prototype = {
	constructor: Dog,
	// ...
}


// ----------------------------------------------
// Understand Where An Object's Prototype Comes From
// Just like people inherit genes from their parents
// Objects inherit their prototype from the constructor function that created it

function Snake(name){
	this.name = name;
}

let peter = new Snake("Peter");

Snake.prototype.isPrototypeOf(peter);



// ----------------------------------------------
// Prototype Chain?
// All objects in JS have it's own prototypes (with a few exceptions)
// An objects prototype itself is an object

function Doggy(name){
	this.name = name;
}

typeof Doggy.prototype; // => object

// Because of that, prototype can have it's own prototype!
// Object is the supertype for all objects in JS
// Because of that every object can use .hasOwnProperty() method

Object.prototype.isPrototypeOf(Doggy.prototype);










