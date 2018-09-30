// Apply Functional Programming to convert strings to URL slugs

// the global variable
var globalTitle = "Winter Is Coming";

function urlSlug(title) {
  return title.split(/\W/).filter(a => a !== "").join("-").toLowerCase();
}

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"


// Second solution

// Using trim method accepts a string object and removes any starting or ending 
// whitespaces

function urlSlug(title){
	return title.toLowerCase().trim().split(/\s+/).join("-");
}
