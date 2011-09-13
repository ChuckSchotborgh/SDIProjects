// JS Data Structures
// Author: ChuckSchotborgh
// Control File

var handleData = function (json) {
 	for (var i = 0; i < json.surfers.length; i++) {
 		var pets = json.surfers[i];
 		console.log ("Age ID: " + surfers.tagid + ", Name: " + surfers.name + ", Age: " + surfers.age);
	};
};

handleData(json)


var jsonstring = JSON.stringify(json);
console.log (jsonstring);

var receivedjson = JSON.parse(jsonstring);
console.log (receivedjson);