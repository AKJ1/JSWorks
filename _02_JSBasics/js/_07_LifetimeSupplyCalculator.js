function calcSupply(input) {
    var total = ((input.maxAge - input.currentAge) * input.amount) * 365;
    console.log(total + "kg of " + input.food + " would be enough until i am " + input.maxAge + " years old.")
}