//SDIProject3
//Author: ChuckSchotborgh

//declaring arrays
var SurfBoardNames = ["Longboard", "Twin Finn", "Thruster", "Boogie"],
	secondsPerWave = [30, 15, 60, 60];
    var surfOneWave  = function(SurfBoardName , secondsThisWave ) {
	console.log("Caught a big wave on the" + " " + SurfBoardName  + " for " 
		+ secondsThisWave  + " seconds ." );
    for(var seconds  = 0; seconds  < secondsThisWave; seconds  += 5) {
		var secondsRemain = secondsThisWave  - seconds;
		console.log(seconds  + " surfed, " +  secondsRemain + " to go!");
	}
	console.log("I fell of the " + SurfBoardName +","+" "+"I can't believe it!");
};
var surfAllWaves = function () {
	for (var SurfBoardNum = 0; SurfBoardNum < SurfBoardNames.length; SurfBoardNum++) {
		var SurfBoardName  = SurfBoardNames [SurfBoardNum],
			minutesThisDeck = secondsPerWave[SurfBoardNum];
		surfOneWave(SurfBoardName , minutesThisDeck);
	} //for SurfBoardNum
}; //surfAllWaves
//encapsulation
surfAllWaves()