// sort() method

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);

// Returns [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
  return arr.sort((a, b) => a < b);
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']

function alphabeticalOrder(arr){
	return arr.sort((a, b) => a > b);
}

// A side effect of sort method is that it changes the order of elements in the original array
// A way to avoid it is to concatenate an empty array to the one being sorted,
// then run the sort method

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return arr.concat([]).sort((a, b) => a - b);
}
nonMutatingSort(globalArray);





















