function Division(input) {
    var result = false;
    if (((input.value / 3) % 1) === 0) {
        result = true;
    }
    if (result) {
        console.log("The number is divided by three without remainder.");
        document.getElementById("result5").innerHTML = "No remainder.";


    } else {
        console.log("The number is not divided by three without remainder.");
        document.getElementById("result5").innerHTML = "Remainder.";
    }
}