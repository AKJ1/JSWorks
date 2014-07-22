function sumHuge(inpOne, inpTwo) {
	var strOne = inpOne.value.toString();
	var strTwo = inpTwo.value.toString();
	var largerSize = strTwo.length > strOne.length ? strTwo.length : strOne.length;
	var finalArray = [];
	var saveArray = [];

	for (var i = 0; i <= largerSize; i++) {
		saveArray.push(0);
		finalArray.push(0);
	}
	for (var i = largerSize; i > 0; i--) {
		var added = 0;
		if (strOne.length > 0) {
			added += parseInt(strOne.slice(-1));
			strOne = strOne.slice(0, -1);
		}
		if (strTwo.length > 0) {
			added += parseInt(strTwo.slice(-1));
			strTwo = strTwo.slice(0, -1);
		}
		if (added.toString().length > 1) {
			saveArray[i-1] += added.toString()[0];
			finalArray[i] += parseInt(added.toString()[1]);
		}else{
			finalArray[i] += parseInt(added.toString()[0]);
		}
		finalArray[i] += parseInt(saveArray[i]);
	}
	if (parseInt(finalArray[0]) === 0) {
		finalArray.splice(0, 1);
	}
	var finalString = finalArray.toString();
	finalString = finalString.replace(/,/g, "");
	document.getElementById("result8").innerHTML = finalString;
}