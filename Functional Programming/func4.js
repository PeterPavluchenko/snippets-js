// Refactor global variables out of functions
// 	1. Don't alter a variable or object - create new variables and objects and return them
//		from be from a function.
//	2. Declare function arguments - any computation inside a function depends only on the arguments
//		and not on any global object or variable

const bookList = ["Man's search for meaning", "A Brief history of thought", "Darkness"];

function add(list, bookName){
	let arr = [...list];
	arr.push(bookName);
	return arr;
}

function remove(list, bookName){
	let arr = [...list];
	if(arr.indexOf(bookName) >= 0){
		arr.splice(arr.indexOf(bookName), 1);
		return arr;
	}
}

// -----------------------------------------------

function divide(list, num){
	let arr = [...list];
	let newArr = [];
	while(arr.length){
		newArr.push(arr.slice(num));
	}
	return newArr;
}