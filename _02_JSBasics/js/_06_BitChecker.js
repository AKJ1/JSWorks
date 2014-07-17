function bitChecker(input) {
    var bin = Number(input.value).toString(2);
    var result = false;
    console.log(bin);
    if (bin[bin.length-3] == '1') {
        result = true;
        document.getElementById("result6").innerHTML = "Yes, it does.";
    
    }
    else{
    	document.getElementById("result6").innerHTML = "Nope.";
    }
    console.log(result);
}