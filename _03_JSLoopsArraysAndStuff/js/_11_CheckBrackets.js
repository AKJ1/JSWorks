function CheckBrackets(input) {
    var inp = input.value.toString();
    var checkLeft = inp.match(/\(/g);
    var checkRight = inp.match(/\)/g);
    var result;
    if (checkLeft.length != checkRight.length) {
        result = false;
    } else {
        result = true;
    }
    if (result) {
        document.getElementById("result11").innerHTML = "Correct!";

    } else {
        document.getElementById("result11").innerHTML = "Incorrect!";
    }

}