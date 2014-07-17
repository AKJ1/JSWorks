function calcSupply(maxAge, currentAge, amount, food) {

    var total = ((maxAge.value - currentAge.value) * amount.value) * 365;
    console.log(total + "kg of " + food.value + " would be enough until i am " + maxAge.value + " years old.");
    document.getElementById("result7").innerHTML = total + "kg";
    
}

function calcSupplyConsoleVersion(input) {
	
    var total = ((input.maxAge - input.currentAge) * input.amount) * 365;
    console.log(total + "kg of " + input.food + " would be enough until i am " + input.maxAge + " years old.");
}