function GetMaxIncSeq(input) {
    document.getElementById("result7").innerHTML = null;
    var Arr = input.value.toString().split(" ");
    var ResultArray = [];
    var CurrentArray = [];
    for (var i = 0; i <= Arr.length; i++) {
        var previous;
        if (i - 1 >= 0) {
            previous = Arr[i - 1];
            if (parseInt(Arr[i]) > parseInt(previous)) {
                CurrentArray.push(Arr[i]);
            } else {
                CurrentArray.push(previous);
                ResultArray.push(CurrentArray);
                CurrentArray = [Arr[i]];
            }
        } else {
            CurrentArray.push(Arr[i]);
        }
    }
    var highestIdx;
    var maxLength = 0;
    for (var i = 0; i < ResultArray.length; i++) {
        if (ResultArray[i].length >= maxLength) {
            maxLength = ResultArray[i].length;
            highestIdx = i;
        }
    }
    for (var i = 0; i < maxLength - 1; i++) {
        console.log(ResultArray[highestIdx][i]);
        document.getElementById("result7").innerHTML = document.getElementById("result7").innerHTML + ResultArray[highestIdx][i] + " ";
    }
}