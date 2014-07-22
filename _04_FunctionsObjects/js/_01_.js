function NthNumber(digit, number) {
	var num =  number.value.toString();
	num = num.replace(".", "");
	var inp = num.length-parseInt(digit.value);
	if(inp <= num.length && num[inp] !== undefined){
		console.log(num[inp]);
		document.getElementById("result2").innerHTML = num[inp];
	}else{
		document.getElementById("result2").innerHTML = "It isnt that long!";
	}
}