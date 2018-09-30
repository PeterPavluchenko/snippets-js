// Mixins for adding common behaviour between unrelated objects

let eatMixin = function(obj){
	obj.eat = function(){
		console.log("I wanna eat you!");
	}
}

let bird = {
	name: "Peter",
	age: 21
}

let tree = {
	name: "Josh",
	age: 99
}

// Here both objects are assigned the eat function

eatMixin(bird);
eatMixin(tree);


// Mixin allows for the same method eat to be reused by unrelated objects



let glideMixin = function(obj){
	obj.glide = function(){
		console.log("Hey, sup!");
	}
}

glideMixin(tree);
glideMixin(bird);











