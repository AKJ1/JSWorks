function Check(input) {
    var output;
    if (input.value % 2 == 0) {
        output = true;
    } else {
        output = false;
    }
    document.getElementById("result3").innerHTML = output.toString().toUpperCase();
    console.log(output);
}