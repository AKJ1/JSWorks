function reverseString(input) {
    var inp = input.value;
    var reverese = "";
    for (var i = 1; i <= inp.length; i++) {
        var s = inp[inp.length - i];
        reverese = reverese.concat(s);
    }
    document.getElementById("result10").innerHTML = reverese;
}