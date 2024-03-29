//SDI Project 4 Mylib
//Author Chuck Schotborgh

/*	
String Lib SDI 2011                                          
Does a string follow a 123-456-7890 pattern like a phone number?
[1] 	
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
};

//if (phNum ("+0 123-456-7890")){ //this is not a local number no message
if (phNum ("123-456-7890")){
console.log ("Is a local phone number!");
}


/*	
String Lib SDI 2011
Does a string follow an aaa@bbb.ccc pattern like an email address?
[2]
*/
var emailMatch = function (emailToVerify){
	console.log (emailToVerify);
        var charPos1 = emailToVerify.search (/\W/);
    if (charPos1 < 32){
            var typString = emailToVerify.substring (charPos1++, emailToVerify.length);
            var charPos2 = typString.search (/\W/);
    if (charPos2 < 32){
            var endString = typString.substring (3, emailToVerify.length);
    if (endString.length > 0){
    return true;
    }
    }
    }
};

if (emailMatch ("chuck@chuckschotborgh.com")){
    console.log ("is an email!");
}


/*
String Lib SDI 2011                                   
Is the string a URL? (Does it start with http: or https:?)
[3]	
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
[4]  
*/
var capsCaseTitle = function (tCase) {
    var wordVal = tCase.value;
    var tCaseVal = '';
    var wordVal = wordVal.split(' ');
		
	for(var i=0; i < wordVal.length; i++) {
            tCaseVal += wordVal[i].substring
            (0,1).toUpperCase() + wordVal[i].substring
            (1,wordVal[i].length) + ' ';
    }
        tCase.value = tCaseVal;// SampleBox can be tested in my Html
}


/*
Number Lib SDI 2011                                      
Find the number of hours or days difference between two dates
[5] 
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
[6] 
*/
var formatNum = function (num$Format, precision){
    return num$Format.toPrecision(precision);
};
console.log (formatNum(5.2, 3) + " USD");


/*
Number Lib SDI 2011
Find the total value of just the numbers in an array, even if some of the items are not numbers.
[7] 
*/
var surfBoard1 = "Thruster",
    surfBoard2 = "Twin finn",
    surfBoard3 = "Long Board"
;
var surfBoards = [
		"Thruster",
		"Twin finn",
		"Long Board"
];
var styles = [
		"fast on big waves",
		"great for ariel jumps",
		"cool, mellow wave rides"
];
    for (var i=0, w=surfBoards.length; i < w; i++) {
    console.log( surfBoards[i] +" "+  "surfboards" +" "+ "are " + styles[i] +"!" );
};


/*
Number Lib SDI 2011
Find the smallest value in an array (this one is a random array) that is greater than a given number.
[8] 
*/
var test = [
        15,
        12,
        35,
        14,
        22,
        77
];
var smNum = function(array, givenNum) {
    var savedNum = Number.MAX_VALUE;
    var i = 0;
    var testNum;
        while (i < array.length){
            testNum = array[i];
        if ((testNum > givenNum) && (testNum < savedNum)){
            savedNum = testNum;
        }
        i+=1;
        }
        if (savedNum < givenNum){
            console.log (givenNum +
            " a greater number than the given number doesn't exist within the sequenced array");
            return givenNum;
        }
        else {
            console.log (givenNum +
            " the number is not in the array, but the number greater with in the array is " + savedNum);
            return savedNum;
        
	}
};

(smNum(test, 4));// input numbers here. Test against the existing sequenced array.


/*
Number Lib SDI 2011
Given a string version of a number such as "42", return the value as an actual Number, such as 42
[9] 
*/

var strSwap = "Forty Two"
console.log(strSwap.replace(/Forty Two/i,42));



/*	
String Lib SDI 2011
Does a string follow a 123-456-7890 pattern like a phone number?
[extra 2a]
*/
var regExp = /\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/;
      function verifyPhNum(phoneInput){
        var OK = regExp.exec(phoneInput.value);
        if (!OK)
          console.log(RegExp.input + " isn't a phone number with area code!");
        else
          console.log("Thanks, your phone number is " + OK[0]);
      }
/*
Given a string that is a list of things separated by a given string, as well as another string separator, 
return a string with the first separator changed to the second: "a,b,c" + "," + "/" ? "a/b/c".

/*
Number Lib SDI 2011- almost finished this one
[x]Fuzzy-match a number: is the number above or below a number within a certain percent?
*/

/*
var min = 1;
var max = 10;
var ittr = 1000;

    function embedMrks(embed,min,max,ittr) {
            for (var i=min; i <= max; i++) {
              console.log(i + ': ');
              for (var j=0; j < embed[i]; j=j+(ittr/500)) console.log('|');
              console.log(' ' + math.round (embed[i]*1000/ittr)/10 + '%');
}
//function useFloor(min,max) {
//  return math.floor(math.random()*(max-min+1)+min);
//}
//function useCeil(min,max) {
//  return math.ceil(math.random()*(max-min+1)+min-1);
//}
function useround(min,max) {
  return math.round(math.random()*(max-min)+min);
}
//math.round(math.random() * (max - min) + min)
var embed = Array ();
for (var k=min; k <= max; k++) {
  embed[k] = 0;
}
for (var i=0; i < ittr; i++) {
  embed[useround(min,max)]++;
}
embedMrks(embed,min,max,ittr);
*/
/*
-Given an array of objects and the name of a key, 
return the array sorted by the value of that key in each of the 
objects: "a" + [{a:2},{a:3},{a:1}] ? [{a:1},{a:2},{a:3}].

*/