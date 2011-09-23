//SDI Project 4 Mylib
//Author Chuck Schotborgh

/*	
	String Lib SDI 2011
	Does a string follow a 123-456-7890 pattern like a phone number?
*/
var phNum = function (digitsToTest){
	console.log (digitsToTest);
	    var firstDigits = digitsToTest.search (/\W/);
        
        if (firstDigits === 3){
	    var seeString = digitsToTest.substring (firstDigits+1, digitsToTest.length);
	    var secondDigits = seeString.search (/\W/);

	if (secondDigits === 3){
			var lastDigits = seeString.substring (4, digitsToTest.length);
		
	if (lastDigits.length === 4){
        return true;
		}
		}
		}
}
if (phNum ("123-456-7890")){
//if (phNum ("+0 123-456-7890")){ //this is not a local number no message
console.log ("Is a local phone number!");
}

/*
	String Lib SDI 2011
	Is the string a URL? (Does it start with http: or https:?)
*/

var verifyUrl = function (strUrl) {
		var matchHttp = strUrl.match("http:");
		var matchHttps = strUrl.match("https:");
    if (matchHttp == "http:") {
		console.log ("Yes! It tastes like http:!");
    }
    else if (matchHttps == "https:") {
		console.log ("Yup! It smells like https:!");
    }
    else {
		console.log ("Nope! Please try another type of Url address.");
    }
};
verifyUrl("ftp://www.igt.com");
verifyUrl("http://www.igt.com");
verifyUrl("https://www.igt.com");

/*
	String Lib SDI 2011
	Title-case a string (split into words, then uppercase the first letter of each word)
*/
var capsCaseTitle = function (tCase) {
		var wordVal = tCase.value;
		var tCaseVal = '';
		var wordVal = wordVal.split(' ');
/*
    String 		

    [x]Does a string follow a 123-456-7890 pattern like a phone number?
    [x]Does a string follow an aaa@bbb.ccc pattern like an email address?
    [x]Is the string a URL? (Does it start with http: or https:?)
    [x]Title-case a string (split into words, then uppercase the first letter of each word)
    * Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" ? "a/b/c".

    Number
    
    [x]Format a number to use a specific number of decimal places, as for money: 2.1 ? 2.10
    * Fuzzy-match a number: is the number above or below a number within a certain percent?
    [x]Find the number of hours or days difference between two dates.
    [x]Given a string version of a number such as "42", return the value as an actual Number, such as 42.

    Array

    [x]Find the smallest value in an array that is greater than a given number
    * Find the total value of just the numbers in an array, even if some of the items are not numbers.
    * Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] ? [{a:1},{a:2},{a:3}].

 */