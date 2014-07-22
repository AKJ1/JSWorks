Array.prototype.remitem = function(value) {
	while(this.indexOf(value) !== -1){
		this.splice(this.indexOf(value), 1);
	}
};

function tryout(input, remove) {
	var inp = input.value.split(" ");
	var rmv = remove.value;
	inp.remitem(rmv);

	document.getElementById("result9").innerHTML = inp.toString();
}