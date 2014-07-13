function Division(input) {
    var result = false;
    if (input / 3 instanceof Integer) {
        result = true;
    };
    if (result) {
        console.log("The number is divided by three without remainder.");

    } else {
        console.log("The number is not divided by three without remainder.")
    }
}