// Immidiately Invoked Function (IIF)
// A common patter in JavaScript to execute a function as soon as it's being declared
// It is not stored in a variable, has opening and closing parantheses at the end of it
// And it doesn't even have a name!

(function(){
	console.log("Hey, Jude!");
})();


// -------------------------------------
// Use an IIFE (Immidiately Invoked Function Expression) to create a module
// Such function is often used to group related functionality into a single object or module
// For example two mixins:

function sleepMixin(obj){
	obj.sleep = function(){
		console.log("Sleepin");
	}
}

function jokeMixin(obj){
	obj.joke = function(){
		console.log("Jokin");
	}
}

// We can group the mixins into a module as follows:

let motionModule = (function () {
	return {
		sleepMixin: function(obj) {
			obj.sleep = function() {
				console.log("Sleepin");
			};
		},
		jokeMixin: function(obj) {
			obj.joke = function() {
				console.log("Jokin");
			};
		}
	}
}) ();	// The two parantheses cause the function to be immidiately invoked

// If you have an IIFE that returns an object module, this object module contains all of the 
// mixin behaviors as properties of the object.

// The advantage of the module pattern is that all of the motion behaviors can be packaged into
// a single object that can be used by other parts of your code.
// An example using it:

motionModule.sleepMixin(duck);
duck.sleep();


// One more example

let funModule = (function(){
	return {
		isCuteMixin: function(obj){
			obj.isCute = function(){
				return true;
			};
		},
		singMixin: function(obj){
			obj.singMixin = function(){
				console.log("Singing like a baby tonight");
			};
		}
	}
})();













