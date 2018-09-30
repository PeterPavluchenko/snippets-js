// Use the filter() to extract data from an array

var filteredList = watchList
	.filter(item => Number(item["imdbRating"]) >= 8.0)
	.map(item => ({"title":item["Title"], "rating":item["imdbRating"]}));


// Implementing filter() on a prototype

// With forEach

Array.prototype.myfilter = function(callback){
	let newArr = [];
	this.forEach(function(item){
		if(callback(item)){
			newArr.push(item);
		}
	});
	return newArr;
}

// With for loop

Array.prototype.myFilter = function(callback){
	let newArr = [];
	for(let i = 0; i < this.length; i++){
		if(callback(this.[i]) === true){
			newArr.push(this[i]);
		}
	}
	return newArr;
}