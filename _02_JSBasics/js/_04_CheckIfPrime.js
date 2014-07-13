function checkPrime(input) {
    var result = true;
    for (var i = 2; i < input; i++) {
        if (input / i instanceof Integer) {
            result = false;
        }
    };
    console.log(result);
}