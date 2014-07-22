function LargestSumNumber(input) {
	var inp = input.value.split(" ");
	var resArray = [];
	for (var i = 0; i < inp.length; i++) {
		resArray.push(0);
		inp[i].replace("-", "");
		inp[i].replace(".", "");
		inp[i].replace(",", "");
	}
	for (var i = 0; i < inp.length; i++) {
		for (var j = 0; j < inp[i].length; j++) {
			resArray[i] += parseInt(inp[i][j]);
		}
	}

	var largestIndex;
	var max = 0;
	for (var i = 0; i < resArray.length; i++) {
		if (resArray[i]>max) {
			max = resArray[i];
			largestIndex = i;
		}
	}

	document.getElementById('result3').innerHTML = inp[largestIndex];
	
}