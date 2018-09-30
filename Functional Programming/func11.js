// Join method to combine an array into a string

var arr = ["Hello", "World"];
var str = arr.join(" ");

// Sets str to "Hello World"

function sentensify(str) {
  // Add your code below this line
  let arr = str.split(/\W/);
  return arr.join(" ");
  // Add your code above this line
}
console.log(sentensify("May-the-force-be-with-you"));