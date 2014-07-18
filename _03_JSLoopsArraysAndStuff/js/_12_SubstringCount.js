function SubstringCount(input, substr){
	var	inp = input.value;
	var sub = substr.value;
	var result = 0;
	for (var i = 0; i < inp.length; i++) {
		if (inp.substr(i, sub.length).toLowerCase() == sub) {
			result++;
		};
	};
	document.getElementById("result12").innerHTML = result;
	console.log("result");
}