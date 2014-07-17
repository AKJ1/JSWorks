function SortArray(input) {
    var inp = input.value.toString();
    var inputArr = inp.split(" ");
    inputArr.sort();
    document.getElementById("result8").innerHTML = inputArr.toString();
}