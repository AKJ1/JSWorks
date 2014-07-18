function spaceReplacer(input, repstring) {
	var	inp = input.value;
	var sub = "";
	inp = inp.replace(/ /g, sub);
	document.getElementById("result13").innerHTML = inp;
	console.log("result");
}