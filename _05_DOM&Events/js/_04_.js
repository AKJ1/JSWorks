
function doCheck(inp) {
	var checker = new RegExp(/[a-zA-Z\W]/);
	var backup = inp.value.toString().slice(0,-1);
	var input = inp.value;
	if (checker.test(input)) {
		inp.value = backup;
		input = backup;
		inp.style.background = "#F99";
	}else{
		inp.style.background = "#333340";
	}
}