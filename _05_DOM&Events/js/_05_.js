document.onmousemove = function(e){
	var Y = e.pageY;
	var X = e.pageX;
	var d = new Date();

	document.getElementById("mouse").innerHTML = "X : " + X + "<br>" + "Y : " + Y + "<br>" + "Date : " + d.toString();
};