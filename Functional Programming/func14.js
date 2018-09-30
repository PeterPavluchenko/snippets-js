// Use the some method to check if any elements in an array meet criteria

// Returns a Boolean value true if any of the values meet criteria, false if not

var numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function(currentValue) {
  return currentValue < 10;
});

// Returns true


function checkPositive(arr) {
  return arr.some(value => value > 0);
}
checkPositive([1, 2, 3, -4, 5]);