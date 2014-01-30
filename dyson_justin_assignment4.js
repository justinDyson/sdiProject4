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

//var for function 4
var myArray = [1, "pickles" , 3 , "onions" , 5 , "10" , 6 , "SDI"];
var result;

//var for function 5
var amount = 10.015;
var decimalPlaces = 2;
var amtInDollars = 0;

//var for function 6
var numberAsString = "21"
var numberAsNumber;


// FUNCTION 1: Title-case a string (split into words, then uppercase the first letter of each word).
var toTitleCase = function (lowerCaseString) {
	var titleCaseString;
	var lowerCaseStringArray = lowerCaseString.split(" ");
	var firstLetter;
	var upperCaseStringArray = [];
	var upperCaseWord;
			
	for (var i = 0; i < lowerCaseStringArray.length; i++) {

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

// FUNCTION 4: Find the total value of just the numbers in an array, even if some of the items are not numbers.

var addNumbers = function (myArray) {
	var total = 0;
	
	
	for(var i in myArray) { 
		if (!isNaN(myArray[i]) && typeof(myArray[i]) != "string") {
			total += myArray[i]; 
		};
	};
	
	return total; 

};

// FUNCTION 5: Format a number to use a specific number of decimal places

var asMoney = function (amount, decimalPlaces) {
	var dollarAmt;
	
	dollarAmt = amount.toFixed(decimalPlaces);
	
	return dollarAmt;
};

// FUNCTION 6: Given a string version of a number, such as “42”, return the value as an actual Number data type, such as 42.

var convertToNumber = function (numberAsString) {
	var convertedString; 
	
	if (!isNaN(numberAsString)) {
		convertedString = parseFloat(numberAsString);
	} else {
		convertedString = "Oops! You didn't type in a number as a string.";
	};
	
	return convertedString; 
};

// MAIN CODE

//main code for function 1
lowerCaseString = "hello world";
titleCaseString = toTitleCase(lowerCaseString);
console.log(lowerCaseString + " vs. " + titleCaseString);

//main code for function 2
url = "http://www.fullsail.edu";
isUrlReturn = isUrl(url);
console.log("Is " + url + " a valid URL? " + isUrlReturn);

//main code for function 3
phoneNumber = "407-695-0100";
isValid = validPhoneNumber(phoneNumber);
console.log("Is " + phoneNumber + " a valid telephone number? " + isValid);

//main code for function 4
result = addNumbers(myArray);
console.log("The numbers total: " + result);

//main code for function 5
amtInDollars = asMoney(amount,decimalPlaces);
console.log("10.015 expressed in a dollar amount is $" + amtInDollars);

//main code for function 6
numberAsNumber = convertToNumber(numberAsString)
console.log(numberAsString + " converts to a number as: " + numberAsNumber +  ". " + numberAsString + " is a " + typeof(numberAsString) + " but " + numberAsNumber +" is a " + typeof(numberAsNumber));
