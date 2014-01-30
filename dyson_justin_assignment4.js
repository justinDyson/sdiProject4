/*
By Justin Dyson
SDI Term 1401
Assignment 4
Completed 01/30/14
*/

// GLOBAL VARIABLES
//var for function 1
var lowerCaseString; 
var titleCaseString;

//var for function 2
var url = ""; 
var isUrlReturn; 

//var for function 3
var phoneNumber;
var isValid; 



// FUNCTION 1: Title-case a string (split into words, then uppercase the first letter of each word).
var toTitleCase = function (lowerCaseString) {
	var titleCaseString;
	var lowerCaseStringArray = lowerCaseString.split(" ");
	var firstLetter;
	var upperCaseStringArray = [];
	var upperCaseWord;
			
	for (var i = 0; i < lowerCaseStringArray.length; i++) {
			console.log(lowerCaseStringArray[i]);

			firstLetter = lowerCaseStringArray[i].charAt(0).toUpperCase();
			upperCaseWord = firstLetter + lowerCaseStringArray[i].slice(1);
			upperCaseStringArray.push(upperCaseWord);
	};
	
	titleCaseString = upperCaseStringArray.join(" ");
			
	return titleCaseString;
};

// FUNCTION 2: Is the string a URL (Does it start with http:// or https://)?
var isUrl = function (url) {	// accepts a string
	var isUrlValue = false;
	
	if ((url.substr(0,7) === "http://") || (url.substr(0,8) === "https://")) {
		isUrlValue = true;
	};
	
	return isUrlValue;		// returns a boolean value
};

// FUNCTION 3: Does a string follow a 123-456-7890 pattern like a phone number?
var validPhoneNumber = function (phoneNumber) {
	var hasHyphen = false;
	var isNumbers = false;
	var isValid = false; 
	var isTwelveChar = false; 
	
	if (phoneNumber.charCodeAt(3) === 45 && phoneNumber.charCodeAt(7) === 45) {
		hasHyphen = true;
	};
	if (!isNaN(phoneNumber.substr(0,3)) && !isNaN(phoneNumber.substr(4,3)) && !isNaN(phoneNumber.substr(8,4))) {
		isNumbers = true;
	};
	if (phoneNumber.length === 12) {
		isTwelveChar = true;
	};
	if (hasHyphen && isNumbers && isTwelveChar) {
		isValid = true;
	};
	
	return isValid;
};

// FUNCTION 4
// FUNCTION 5
// FUNCTION 6
// MAIN CODE

//main code for function 1
lowerCaseString = "hello world";
titleCaseString = toTitleCase(lowerCaseString);
console.log(lowerCaseString + " vs. " + titleCaseString);

//main code for function 2
url = "http://www.fullsail.edu";
isUrlReturn = isUrl(url);
console.log(isUrlReturn);

//main code for function 3
phoneNumber = "407-695-0100";
isValid = validPhoneNumber(phoneNumber);
console.log(isValid);

