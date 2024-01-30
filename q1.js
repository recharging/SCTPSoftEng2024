/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
    // Task 1: Add code here
	if(typeof x != "number" || typeof y != "number"){
		return -1
	}
	console.log("x: ", x, ", y:", y);
	var z = y;
	y = x;
	x = z;
	console.log("swapped!");
	console.log("x: ", x, ", y:", y);
}

// Task 2: Add code here
swap(1, 2);
module.exports = swap;