function createArray(input) {
    var inval = input.value;
    var outArray = [];
    for (var i = 1; i <= inval; i++) {
        outArray.push(i * 5);
        console.log(i * 5);
    }
    document.getElementById("result4").innerHTML = outArray;
}