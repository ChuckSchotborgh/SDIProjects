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
		
	for(var i=0; i < wordVal.length; i++) {
		tCaseVal += wordVal
			[i].substring
		(0,1).toUpperCase() + wordVal[i].substring (1,wordVal[i].length) + ' ';
    }
    tCase.value = tCaseVal;// SampleBox can be tested in my Html
}
/*
	Number Lib SDI 2011
	Find the number of hours or days difference between two dates
*/
var today = new Date()
	var yr = new Date("November 24, 2011");// change the date here
        yr.setYear = today.getYear;        
		daysLeft = (yr.getTime() - today.getTime()) / (1000*60*60*24);
		daysLeft = Math.round(daysLeft);
                
document.write("There are only "+daysLeft+" days left until Thanksgiving Day!");	
console.log(daysLeft +" "+ "days left until Thanksgiving");
/*
	Number Lib SDI 2011
	Format a number to use a specific number of decimal places, as for money: 2.1 ? 2.10
*/

var formatNum = function (num$Format, precision){
    return num$Format.toPrecision(precision);
};
console.log (formatNum(5.2, 3) + " USD");
