var persons = [
  { firstname : 'George', lastname: 'Kolev', age: 32}, 
  { firstname : 'Bay', lastname: 'Ivan', age: 81},
  { firstname : 'Baba', lastname: 'Ginka', age: 40}];

function callMain() {
	youngestPerson(persons);
}
function youngestPerson(input) {
	var list = [];
	var currentMax = 0;
	var sameage = false;
	var maxidx = 0;
	var scondidx;

	for (var i = 0; i < input.length; i++) {
		if (input[i].age < currentMax) {
			currentMax = input[i].age;
			maxidx = i;
		}else if (input[i].age == currentMax){
			secondidx = i;
		}
	}
	document.getElementById("result7").innerHTML = "The youngest person is " + input[maxidx].firstname + " " + input[maxidx].lastname;
}