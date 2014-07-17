var words = [
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nein"
];

function wordify(input) {
	if (input.value < 10) {
		console.log(words[input.value - 1]);
		document.getElementById("result11").innerHTML = words[input.value-1].toUpperCase() + "!";
    }
    else{
    	document.getElementById("result11").innerHTML = "TOO BIG" + "!";	
    }
}