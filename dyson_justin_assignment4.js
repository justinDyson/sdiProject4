/*
By Justin Dyson
SDI Term 1401
Assignment 4
Completed 01/30/14
*/

// GLOBAL VARIABLES
var userInput = ""; 
var isValidEntry; // boolean
var url = ""; 
var isUrlReturn; 


// FUNCTION 1: Does a string follow a 123-456-7890 pattern like a phone number?
// TO SOLVE: Recieve a phone number. validate that the first 3 characters have a charCodeAt of 0-9, a hyphen, the next 3 characters have a charCodeAt of 0-9, a hyphen, the next 4 characters have a charCodeAt of 0-9. A hyphen has a character code of 45. Numbers are from 48(0) to 57(9).

var validatePhoneNumber = function (userInput) {
	
};



// FUNCTION 2: Is the string a URL (Does it start with http:// or https://)?

var isUrl = function (url) {	// accepts a string
	var returnValue = false;
	
	if ((url.substr(0,7) === "http://") || (url.substr(0,8) === "https://")) {
		returnValue = true;
	};
	
	return returnValue;		// returns a boolean value
};

// FUNCTION 3

// FUNCTION 4

// FUNCTION 5

// FUNCTION 6

// MAIN CODE

//main code for function 1
//userInput = prompt("Type in a phone number.", "xxx-xxx-xxxx");
//isValidEntry = validatePhoneNumber(userInput);
//console.log("Is this a valid phone number? " + isValidEntry);

//main code for function 2
url = "http://www.fullsail.edu";
isUrlReturn = isUrl(url);
console.log(isUrlReturn);
