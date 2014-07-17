function checkDigit(input) {
	var result = false;
	if (input.value > Math.abs(1000)){
		if (input.value.toString()[input.value.toString().length - 3] == 3) {
			result = true;
		}
	}else{
		console.log("n < 1000 :(");
	}
	if (result) {
		document.getElementById("result10").innerHTML = "It's true, it's 3.";
	}else{
		document.getElementById("result10").innerHTML = "It's not true, it's not 3.";
	}
}