function compareChars(Arr1, Arr2) {
    var firstVal = Arr1.value;
    var secondVal = Arr2.value;
    var firstArr = firstVal.toString().split(" ");
    var secondArr = secondVal.toString().split(" ");
    var result = true;
    if (firstArr.length == secondArr.length) {
        document.getElementById("result5").innerHTML = "Not True";
        for (var i = 0; i < firstArr.length; i++) {
            if (firstArr[i] != secondArr[i]) {
                result = false;
            }
        }
    } else {
        result = false;
    }
    if (result) {
        document.getElementById("result5").innerHTML = "True";
    } else {
        document.getElementById("result5").innerHTML = "Not True";
    }
}