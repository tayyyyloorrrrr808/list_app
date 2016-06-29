var colors = [
	"red",		//0
	"orange",	//1
	"yellow",	//2
	"green",	//3
	"blue",		//4
	"indigo",	//5
	"violet"	//6
	];

// colors.length == 7
var count = 0;

var cycle = function(array) {
	console.log(array[count]);
	// console.log(array[count]);
	if (count == array.length-1) {
		count = 0;
	}else{
		count++;
	};
};

var display = function(){
	document.body.style.backgroundColor = colors[count];
	cycle(colors);
};

var listAll = function(array) {
	for (var i = 0; i < array.length; i++) {
		document.getElementById('colorSpace').innerHTML +=
		"<li>" + array[i] + "</li>"; // <li>green</li>

	}
}
listAll(colors);