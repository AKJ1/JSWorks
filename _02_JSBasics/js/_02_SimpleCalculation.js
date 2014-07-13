function simpleMath(input) {
    var result1 = Math.floor(input.value);
    var result2 = Math.round(input.value);
    console.log(result1);
    console.log(result2);
    document.getElementById("result2").innerHTML = result1 + " and " + result2;
}