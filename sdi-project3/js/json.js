// JS Data Structures Project 3
// Author: ChuckSchotborgh
// Data File

var json = {
        "surfers": {
		"023": {
			"name": "Manny ",
			"age": 23
		},
		"026": {
			"name": "Travis",
			"age": 26
		},
		"046": {
			"name": "Paul",
			"age": 46
		}
	}
};

for (var key in json.surfers) {
	var surfers = json.surfers[key]; // surfers.age
};


var json2 ={
	"surfers": [
		{
			"surfid": 023,
			"name": "Manny",
			"age": 23
		},
		{
			"surfid": 026,
			"name": "Travis",
			"age": 26
		},
		{
			"surfid": 046,
			"name": "Paul",
			"age": 46
		}
	]	
};
