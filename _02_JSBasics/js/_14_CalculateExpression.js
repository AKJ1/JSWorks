function calculate (input) {
	var scaryThings = [ "}", ",", "{", "\\", "`", "/*", "'", '"'];
	var safeinput = input.value.toString();

	if (safeinput.indexOf("}","{", "'", '"', ",") != -1) {
		for (var i = 0; i < scaryThings.length; i++) {
			while (safeinput.indexOf(scaryThings[i]) > -1)	{
				var spliceloc = safeinput.indexOf(scaryThings[i]);
				safeinput = safeinput.replace(scaryThings[i], "" );
			
			}
		}

	}
	document.getElementById("result14").innerHTML = eval(safeinput);
}