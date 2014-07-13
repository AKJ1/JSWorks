function soothsayer(input) {
    var years = input[0][Math.floor(Math.random() * input[0].length) + 1];
    var language = input[1][Math.floor(Math.random() * input[1].length) + 1];
    var location = input[2][Math.floor(Math.random() * input[2].length) + 1];
    var car = input[3][Math.floor(Math.random() * input[3].length) + 1];

    console.log("You will work " + years + " years on " + language + ".");
    console.log("You will live in " + location + " and drive " + car + ".");
}