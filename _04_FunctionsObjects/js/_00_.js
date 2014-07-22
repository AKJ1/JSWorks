var number = [  "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine" ];

function LastDigit(input) {
	var idx = input.value.toString();
	console.log(number[idx[idx.length-1]]);
	document.getElementById('result1').innerHTML = number[idx[idx.length-1]];
}