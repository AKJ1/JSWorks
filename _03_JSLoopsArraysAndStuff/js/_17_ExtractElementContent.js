function extractContent(input) {
	var inp = input.value.toString();

	while(inp.indexOf(">") != -1 && inp.indexOf("<") != -1){

		var idx = inp.indexOf("<");
		var idxSecond = inp.indexOf(">");
		var replacestr;
		if (idx > idxSecond) {
			replacestr = inp.slice(idxSecond, idxSecond+1);
		}else{
			replacestr = inp.slice(idx, idxSecond+1);
		}
		inp = inp.replace(replacestr, "");
	}
	document.getElementById("result17").innerHTML = inp;
}