function cardsPercentages(input) {
	document.getElementById("result16").innerHTML = null;
	var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var percentages = [];
	var pushed = 0;
	var inp = input.value.split(" ");
	for (var i = 0; i < cards.length; i++) {
		percentages.push(0);
	}
	for (var i = 0; i < inp.length; i++) {
		for (var j = 0; j < cards.length; j++) {
			if (inp[i].substr(0, cards[j].length) == cards[j]) {
				percentages[j] += 1;
			}
		}
	}
	var multi = 100/inp.length;
	for (var i = 0; i < percentages.length; i++) {
		if(percentages[i] > 0){
			document.getElementById("result16").innerHTML = document.getElementById("result16").innerHTML + cards[i] + " : "+  parseFloat(percentages[i]*multi).toFixed(2) +"%<br>";
		}
	}
}
function compare(a, b){
	if (a.number >  b.number){
		return 1;
	}
	if (a.number < b.number) {
		return -1;
	}
	return 0;
} 
