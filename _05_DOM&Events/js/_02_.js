var reverse;
function HideRows(){
	var sheet = document.styleSheets[0];
	if (reverse == undefined) {
		sheet.insertRule("tr:nth-child(odd){display:none;}");
		reverse = true;
	}
	if (reverse) {
		sheet.insertRule("tr:nth-child(odd){display:block;}");
		reverse = false;
	}else{
		sheet.insertRule("tr:nth-child(odd){display:none;}");
		reverse = true;
	}
}