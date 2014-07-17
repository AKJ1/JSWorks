function FreqUsedNumber(input) {
    var inp = input.value.toString();
    var inputArr = inp.split(" ");
    var inputCount = [];
    for (var i = 0; i < inputArr.length; i++) {
        inputCount.push(0);
    }
    for (var i = 0; i < inputArr.length; i++) {
        for (var j = 0; j < inputArr.length; j++) {
            if (inputArr[i] == inputArr[j]) {
                inputCount[i] += 1;
            }
        }
    }
    var highestIdx;
    var maxLength = 0;
    for (var i = 0; i < inputCount.length; i++) {
        if (parseInt(inputCount[i]) >= maxLength) {
            maxLength = inputCount[i];
            highestIdx = i;
        }
    }
    document.getElementById("result9").innerHTML = "Most frequenty used number is : " + inputArr[highestIdx];
}