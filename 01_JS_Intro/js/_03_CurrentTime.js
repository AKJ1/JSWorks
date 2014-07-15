function printHours(){
	var currentDate = new Date();
	var hours = currentDate.getHours();
	var minutes = currentDate.getMinutes();
	console.log(hours + ":" + minutes);
	alert('Check Console.');
}