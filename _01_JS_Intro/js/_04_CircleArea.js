function calculateArea(){
	var inp = parseFloat(document.getElementById("inputCircle").value);
	console.log(Math.PI*(Math.pow(inp, 2)));
	document.getElementById("inputCircle").value = null;
}