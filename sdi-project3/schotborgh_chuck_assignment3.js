//SDIProject3
//Author: ChuckSchotborgh

//declaring arrays
var SurfBoardNames = ["Longboard",
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

    // p: Shark Sighting at Del Mar;
    // q: Shark Attack at San Ofere;
    // r: There pumping waves on all shores
    
    // Given: (p ∧ q) ∨ r
    // Given: p ∧ (q ∨ r)
    // Given: (p ∧¬ q) ∨ (q ∧ r)
    // Given: ¬(p ∨ r)

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
