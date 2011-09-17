var surfDude = {
	lunchSpot: "Robertos",
	rating: "novice",
	amateur: true,
	//destination: "Ocean Beach"
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
	
//var energy = surfDude.select(surfSpot); // function method

var surfDude = {
	id: "001", 
	name: "Chuck",
	interests: [
		"Sunshine",
		"Surfing",
		"Skateboarding",
		"Music"
	],
	age: 41, 
	sayHi: function (){
		console. log("Let's catch a big wave!"); 
	},
	//Nested object
	address: {
		Street: 10010,
		City: "Reno"
	},
	skill:{
		Novice: true,
		Pro: false,
	}
	
};

var key = "name";

surfDude.name = "Manny";

console.log (surfDude[key]);
console.log (surfDude["interests"]);
console.log (surfDude.sayHi);

surfDude.sayHi(); 

	surfDude.sayHi = function (){
		console. log("Kowabunga!");
	}; 
surfDude["sayHi"](); 

	for (var key in surfDude) {;
		console. log("key: " + key + ", value: ", surfDude[key]);
	}; 

var SurfBoardNames = [
		"Longboard", 
		"Twin Finn", 
		"Thruster", 
		"Boogie"
	],
	secondsPerWave = [
			15, 
			12, 
			15, 
			77
	];
var surfOneWave = function( SurfBoardName , secondsThisWave ) {
	console.log("Catching the wave on" + SurfBoardName  + " for " 
		+ secondsThisWave  + " seconds ." );
		var seconds = 0;
	for(seconds  = 0; seconds  < secondsThisWave; seconds  += 5) {
		var secondsRemain = secondsThisWave  - seconds;
		console.log(seconds  + " done, " +  secondsRemain + " to go!");
	
	}
	console.log("I'm done with the " + " done, " + SurfBoardName  + ".");
	
};
var surfAllWaves = function() {
	for (var SurfBoardNum = 0; SurfBoardNum < SurfBoardNames.length; SurfBoardNum+=1) {
		var SurfBoardName  = SurfBoardNames [SurfBoardNum],
			secondsThisWave = secondsPerWave[SurfBoardNum];
		surfOneWave(SurfBoardName, secondsThisWave);
	} //for SurfBoardNum
}; //surfAllWaves
//encapsulation

surfAllWaves();

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
	console.log("Perfect surfing conditions! I don't care if there are sharks, I'm surfing here today!");

