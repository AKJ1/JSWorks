function countDIVs(input) {
	document.getElementById('result6').innerHTML = null;
	var inp = input.value.toString();
	var check = false;
	var countLast = 0;
	var count = 0;
	for (var i = 0; i < inp.length; i++) {
		if (inp[i] == "<") {
			check = true;
		}
		if (check) {
			if (inp.slice(i, i+3) == "div") {
				count++;
			}
		}
		if (inp[i] == ">") {
			check = false;
		}
		if (check) {
			if (inp.slice(i, i+4) == "/div") {
				countLast++;
			}
		}
	}
	var v = count - countLast;
	var result = count - v;
	document.getElementById('result6').innerHTML = result;
}