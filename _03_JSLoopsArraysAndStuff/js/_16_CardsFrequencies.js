function cardsPercentages(input) {
	document.getElementById("result16").innerHTML = null;
	var cards = ["A", "2", "3" , "4", "5", "6", "7", "8", "9", "10","J","Q", "K"];
	var percentages = [];

	var inp = input.value.split(" ");
	for (var i = 0; i < cards.length; i++) {
		percentages.push({card: cards[i], number: 0});
	};
	for (var i = 0; i < cards.length; i++) {
		while (inp.toString().indexOf(cards[i]) != -1) {
			inp.splice(inp.toString().indexOf(cards[i]),1);
			percentages[i].number += 1;
		};
	}

	percentages.sort(compare);
	var multi = 100/inp.length;
	for (var i = 0; i < percentages.length; i++) {
		if(percentages[i].number > 0){
			document.getElementById("result16").innerHTML = document.getElementById("result16").innerHTML + percentages[i].card + " : "+  percentages[i].number*multi +"<br>";
		}
		else{
			document.getElementById("result16").innerHTML = document.getElementById("result16").innerHTML + "kek";	
		}
	};

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