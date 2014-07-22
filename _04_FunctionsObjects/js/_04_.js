function reversal(input) {

		document.getElementById("result5").innerHTML = null;
	var arr = input.value.split(" ");
	var finArr = [];

	for (var i = 0; i < arr.length; i++) {
		finArr.push("");
	}
	for (var i = 0; i < arr.length; i++) {
		var backwards = "";
		for (var j = 0; j < arr[i].length; j++) {
			backwards += arr[i][arr[i].length-j-1];
		}
		finArr[i] = backwards;
	}
	for (var i = 0; i < finArr.length; i++) {
		document.getElementById("result5").innerHTML = document.getElementById("result5").innerHTML + " " + finArr[i];
	}
}