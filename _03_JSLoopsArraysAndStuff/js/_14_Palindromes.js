function palinDromes(input) {
	var inpArray = input.value.split(" ");
	var result = true;
	var finArray = [];
	var punctuation = [ '"', "'", ",", ";", ".", "+"];
	for (var i = 0; i < inpArray.length; i++) {
		var result = true;
		for (var j = 0; j < punctuation.length; j++) {
			if (inpArray[i].indexOf(punctuation[j]) != -1) {
				inpArray[i] = inpArray[i].replace(punctuation[j], "");
			};	
		};
		for (var j = 0; j < inpArray[i].length; j++) {
			if (inpArray[i].toLowerCase().charAt(j) != inpArray[i].toLowerCase().charAt(inpArray[i].length-j-1)) {
				result = false;
				break;
			};
		};
		if (result) {
			finArray.push(inpArray[i]);
		};

	};

	var finResult;
	if (finArray.length > 0) {
		finResult = finArray.toString();
	}else{
		finResult = "No palindromes.";
	}
	document.getElementById("result14").innerHTML = finResult;
}; 