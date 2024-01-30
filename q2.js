/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/


// Task 1: Add code here
const store = [];

function addPatient(patientName){
    // Task 2: Add code here
	store.push(patientName);		
}

// Task 3: Add code here

function listPatient(){
	let text = "[\"";
	let slen = store.length;
	for (let i = 0; i < slen - 1; i++) {
		text += store[i] + "\", ";
	}
	text += "\"" + store[slen-1] + "\"]";
	console.log(text);
}

addPatient("John");
addPatient("Mary");
addPatient("Mark");

listPatient(); // This should list ["John", "Mary", "Mark"]