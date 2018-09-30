// Return part of an array using slice()

// It returns a copy of certain elements of an array

function sliceArray(anim, beginSlice, endSlice){
	return anim.slice(beginSlice, endSlice);
}


// Remove elements from an array using slice instead of splice

// Splice method mutates the original array, when slice() doesnt

// Using slice instead of splice helps to avoid any array-mutating side effects

function nonMutatingSplice(cities){
	return cities.splice(0, 3);
}


// Combine Two Arrays using concat() method

// JS offers the concat method for both strings and arrays

// Does not mutate either of the original arrays

[1, 2, 3, 4].concat([5, 6, 7, 8]);

// Add elements to the end of an Array using concat() instead of push()

// Push adds an item to the end of the same array and mutates it 
// In functional programming we don't want to mutate 



















