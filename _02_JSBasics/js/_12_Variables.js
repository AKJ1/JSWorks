function variablez(input) {
    console.log("My name is" + input[0] + "//type is: " + typeof(input[0]));
    console.log("My age is" + input[1] + "//type is: " + typeof(input[1]));
    console.log("I am male is" + input[2] + "//type is: " + typeof(input[2]));
    console.log("My favourite foods are" + input[3].toString() + "//type is: " + typeof(input[3]));
}

function variables(name, age, foods){
	var foodsArray = foods.value.split(" ");
    var ismale = document.getElementById("isMale").checked;
	document.getElementById("result12").innerHTML = "My Name is " + name.value + "<br> My Age is " + age.value + "<br> I am Male is: " + ismale +  "<br>My favourite foods are: " + foodsArray.toString();
}