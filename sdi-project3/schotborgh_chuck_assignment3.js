//SDIProject3
//Author: ChuckSchotborgh
var surfDude = {
		lunchSpot: "Robertos",
	rating: "novice",
		amateur: true,
	location: "San Deigo",
    surfboard: [ 
		"Twin Finn", 
		"Thruster" 
	],
    driveTo: function (destination) {
		this.surfDestination = destination;
	},
    getLocation: function () {
		return this.location;
	},
	announce: function (input) {
		console.log (input);
	},
	getlunchSpot: function () {
		return this.lunchSpot;
	},
	select: function (surfSpot) {
		return 5;
	}
};
surfDude.driveTo("Del Mar");

var surfSpot = "Del Mar";
	surfDude.announce("Our surfSpot today is " + surfSpot + ".");
	
var burritoStand = surfDude.getlunchSpot();// accessor method
	surfDude.announce("We'll surf all day long, when we get hungry lets's eat at " + burritoStand + "!");
	surfDude.driveTo(surfSpot);// mutator + procedure method
	
var energy = surfDude.select(surfSpot); // function method

var SurfBoardNames = [
                      "Longboard",
                      "Twin Finn",
                      "Thruster",
                      "Boogie"
    ],
	secondsPerWave = [
                          30,
                          15,
                          60,
                          60
        ];
    var surfOneWave  = function(SurfBoardName , secondsThisWave ) {
	console.log("Caught a big wave on the" + " " + SurfBoardName  + " for " 
		+ secondsThisWave  + " seconds ." );
    for(var seconds  = 0; seconds  < secondsThisWave; seconds  += 5) {
		var secondsRemain = secondsThisWave  - seconds; // function method
		console.log(seconds  + " surfed, " +  secondsRemain + " to go!");
	}
	console.log("I fell of the " + SurfBoardName +","+" "+"I can't believe it!");
};
var surfAllWaves = function () {
	for (var SurfBoardNum = 0; SurfBoardNum < SurfBoardNames.length; SurfBoardNum++) {
		var SurfBoardName  = SurfBoardNames [SurfBoardNum],
			secondsThisWave = secondsPerWave[SurfBoardNum];
		surfOneWave(SurfBoardName , secondsThisWave);
	} //for SurfBoardNum
}; //surfAllWaves
//encapsulation
surfAllWaves()



//Procedure

var p = true;
    q = false;
    r = false;

if ((p && q) || r) {
// if (p && (q || r)) {
// if ((p && !q) || (q && r)) {
//if (!(p || r)) {
    console.log("Surf day is true");}
    else
{
    console.log("Surf day is false");
}
    
    console.log("Surf day is out of the question"+" "+ ((p && q) || r));
    //console.log("The expression is " + (p && (q || r)));
    //console.log("The expression is " + (p && !q) || (q && r));
    //console.log("The expression is " + (!(p || r)));
    

// Number Function with While Loop

var pi = 3.14159;
var radius = 5;

var getSize = function (r) {
	var size = r * r * pi;
	while (size > 8){
		r = r-1;
		console.log ("Wave Size Avg: " + size + " ft. Danger! Too big, Riptide & Black ball flags in effect!");
		size = r * r * pi;
		}
	return size;
	//return size;// variable
	//return 5;  //literals
	//return {}; //objects
	//return []; //arrays
	//return function(){}; //function
};

var reportSize = function(name, size, message){
	console.log (name + " with a Northward swell! Waves measuring around " + size + " on average. High tide is from noon to 3pm" + message);


};

var size = getSize(5);
    reportSize("Waves are huge today", size * 2, " perfect conditions, 4 to 6 feet and glassy!" );


//Boolean Function

var choseBeach = function(surfSpot) {
	var sharkSightings = 3,
		sharkAttacks;
	if(surfSpot < sharkSightings) {
		console.log("there is no way I'm surfing here today because of the Sharks!");
		sharkAttacks = 0;
	}
	else{
		sharkAttacks = Math.floor(surfSpot / sharkSightings);
		
	}
		return sharkAttacks;
};

		
var sharkAttacks = choseBeach(4);
	console.log("Perfect surfing condtions! I don't care if there are sharks, I'm surfing here today!");


//String Function

var numMatch = function (numToTest){
    console.log (numToTest);
    var firstPos = numToTest.search (/\W/);
    if (firstPos === 3){
        var tempString = numToTest.substring (firstPos+1, numToTest.length);
        var secondPos = tempString.search (/\W/);
        if (secondPos === 3){
            var lastString = tempString.substring (4, numToTest.length);
            if (lastString.length === 4){
                return true;
            }
        }
    }
}
if (numMatch ("858-272-7433")){
//if (numMatch ("+1 858-272-7433")){ //this is not a free number
     console.log ("This is a free local surf report phone number!");
}

