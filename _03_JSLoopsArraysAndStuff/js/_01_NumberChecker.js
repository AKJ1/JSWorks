function numberChecker(input) {
    document.getElementById("result1").innerHTML = null;
    for (var i = 0; i <= input.value; i++) {
        if (i % 4 != 0 && i % 5 != 0) {
            document.getElementById("result1").innerHTML = document.getElementById("result1").innerHTML + " " + i;
            if (i < input.value) {
                document.getElementById("result1").innerHTML = document.getElementById("result1").innerHTML + ",";
            }
        }
    }
    if (input.value == 1 || input.value instanceof String) {
        document.getElementById("result1").innerHTML = "No";
    }
}