function soothsayer(input) {
    var years = input[0][Math.floor(Math.random() * input[0].length) + 1];
    var language = input[1][Math.floor(Math.random() * input[1].length) + 1];
    var location = input[2][Math.floor(Math.random() * input[2].length) + 1];
    var car = input[3][Math.floor(Math.random() * input[3].length) + 1];

    console.log("You will work " + years + " years on " + language + ".");
    console.log("You will live in " + location + " and drive " + car + ".");
}
function soothsayerHTML(years, languages, places, carbrands){
	var carbrandsArray = carbrands.value.split(" ");
	var placesArray = places.value.split(" ");
	var langArray = languages.value.split(" ");
	var yearArray = years.value.split(" ");

	var year = yearArray[Math.floor(Math.random() * yearArray.length) ];
    var language = langArray[Math.floor(Math.random() * langArray.length) ];
    var location = placesArray[Math.floor(Math.random() * placesArray.length) ];
    var car = carbrandsArray[Math.floor(Math.random() * carbrandsArray.length)];

    document.getElementById("result13").innerHTML = "You will work " + year + " years on " + language + "<br>You will live in " + location + " and drive an " + car;
}