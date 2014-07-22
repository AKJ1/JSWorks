function biggerThanNeighbours(number, numArray) {
	var arr = numArray.value.split(" ");
	var num = parseInt(number.value);
	var result = false;
	if (num < arr.length-1 && num >= 1) {
		if (parseInt(arr[num]) > parseInt(arr[num-1]) && parseInt(arr[num]) > parseInt(arr[num+1])) {
			result = true;
		}
		if(result){
		document.getElementById("result4").innerHTML = "bigger";
		}else{
		document.getElementById("result4").innerHTML = "not bigger";
		}
	}else if(num == 0 || num == arr.length-1){
		document.getElementById("result4").innerHTML = "Only one neighbour";
	}else{
		document.getElementById("result4").innerHTML = "Invalid Index";
	}

	
}