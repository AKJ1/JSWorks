function CalcCyl(radius, height) {
    var result = Math.pow(radius.value, 2) * Math.PI * height.value;
    document.getElementById("result8").innerHTML = result + " Units";
    console.log(result);
}
function consoleVersion(input) {
    var result = Math.pow(input.radius, 2) * Math.PI * input.height;
    console.log(result);
}