// Split a String into an array using split method

// It takes a delimiter, which can be a character to use to break up the string

// or a regular expression.

var str = "Hello World";
var bySpace = str.split(" ");
// Sets bySpace to ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/);
// Sets byDigits to ["How", "are", "you", "today"]

// Strings are immutable


function splitify(str) {
  return let arr = str.split(/\W/)
}
splitify("Hello World,I-am code");


