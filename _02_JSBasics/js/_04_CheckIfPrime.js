function checkPrime(input) {
    var result = true;
    for (var i = 2; i < input.value; i++) {
        if ((input.value / i % 1) == 0) {
            result = false;
        }
    }
    document.getElementById("result4").innerHTML = result.toString().toUpperCase();
    console.log(result);
}