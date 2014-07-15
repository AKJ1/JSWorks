function FindMinMax(input) {
    var str = input.value;
    var strArray = str.split(" ");
    var min;
    var max;
    min = strArray[0];
    max = strArray[0];
    for (var i = 0; i < strArray.length; i++) {

        if (parseFloat(strArray[i]) < parseFloat(min)) {
            min = strArray[i];
        }
        if (parseFloat(strArray[i]) > parseFloat(max)) {
            max = strArray[i];
        }
        document.getElementById("result2").innerHTML = "Max: " + max + " ,  Min: " + min;
    }
}