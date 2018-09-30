// Overriding an inherited method

// Its done the same way - by adding a method to childObj.prototype
// Using the same method as override

// Bird overriding eat() from Animal:

function Animal(){ }

Animal.prototype.eat = function(){
	return "nom nom nom";
}

function Bird(){ }

// Inherit all methods from Animal:

Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() overrides Animal.eat():

Bird.prototype.eat = function(){
	return "YA ya YA ya!";
}


Penguin.prototype = Object.create(Bird.prototype);

Penguin.prototype.eat = function(){ return "I don't eat mosquitos!"; };