function changeLike(obj) {
	if (obj.innerHTML == "Like!") {
		obj.innerHTML = "Unlike!";
	}else if(obj.innerHTML =="Unlike!"){
		obj.innerHTML = "Like!";
	}
}