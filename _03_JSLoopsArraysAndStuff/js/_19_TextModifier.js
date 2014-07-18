var inp = "mixcase";

function textModifier(input){
	inp = input.value;
	while(inp.indexOf(">") != -1 || inp.indexOf("<") != -1){
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
}

function toMixcase (input) {
	var finalArray = "";
	for (var i = 0; i < input.length; i++) {
		if (Math.floor(Math.random()*100) > 50) {
			finalArray = finalArray.concat(input[i].toUpperCase());
		}else{
			finalArray = finalArray.concat(input[i]);
		}
	}
	return finalArray;
}