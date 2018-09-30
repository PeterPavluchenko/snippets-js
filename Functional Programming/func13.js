// Use every() method to check that every element in an Array meets a criteria.

// Returns true when all values meet the criteria, false if not

var numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});

// Returns false


function checkPositive(arr) {
  return arr.every(val => val > 0);
}

checkPositive([1, 2, 3, -4, 5]);

