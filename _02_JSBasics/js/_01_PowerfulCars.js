var kiloWatts;

function getKiloWatts(input) {
    var result = (1 / 0.745699872) * input.value;
    console.log(result);
    document.getElementById("result1").innerHTML = result;
}