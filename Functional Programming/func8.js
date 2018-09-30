// Use the reduce() to Analyze Data

Array.prototype.reduce()

// The most general array method
// You can solve almost any array processing problem with reduce

let avgRaiting = watchList
					.filter(item => item.Director === "Christopher Nolan")
					.map(item => Number(item.imdbRating))
					.reduce((a, b) => 
						a + b
					) / watchList.filter(item => item.Director === "Christopher Nolan").length;