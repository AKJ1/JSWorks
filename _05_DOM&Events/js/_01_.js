function displayDivContent() {
    var result = document.getElementById("result2");
    var divarr = document.getElementsByTagName("div");
    for (var i = 0; i < divarr.length; i++) {
    	var out = divarr[i].parentNode;
        if (out.id == "container") {
            if (out != "div") {
                result.innerHTML = result.innerHTML + "<br>• " + divarr[i].innerHTML;
            } else {
                result.innerHTML = result.innerHTML + "LEL" + divarr[i].innerHTML;
            }
        }
    }
}