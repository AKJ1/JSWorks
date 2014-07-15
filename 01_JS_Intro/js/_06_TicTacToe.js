var isCircle = true;
var gameOver = true;
var objArray;

function reset() {
    objArray = [
    	{
        id: "box1",
        value: 0
    }, {
        id: "box2",
        value: 0
    }, {
        id: "box3",
        value: 0
    }, {
	    id: "box4",
        value: 0
    }, {
        id: "box5",
        value: 0
    }, {
        id: "box6",
        value: 0
    }, {
        id: "box7",
        value: 0
    }, {
        id: "box8",
        value: 0
    }, {
        id: "box9",
        value: 0
    }];
    gameOver = false;
    isCircle = true;
    document.getElementById("result").innerHTML = "";
    for (var i = objArray.length - 1; i >= 0; i--) {
        document.getElementById(objArray[i].id).style.background = "";
        document.getElementById(objArray[i].id).style.opacity = "";
    };
}

function drawPlayerHover(obj) {
    if (!gameOver) {
        var check = true;
        for (var i = objArray.length - 1; i >= 0; i--) {
            if (objArray[i].id == obj.id && objArray[i].value != 0) {
                check = false;
            }
        };
        if (check) {
            document.addEventListener('onmouseleave', restoreBox(obj))
            if (isCircle) {
                obj.style.background = "url('images/Circle.png') no-repeat center";
                obj.style.opacity = "0.5";
            } else {
                obj.style.background = "url('images/cross.png') no-repeat center";
                obj.style.opacity = "0.5";
            }
        }
    };
}

function changeVal(obj) {
    if (!gameOver) {
        for (var i = objArray.length - 1; i >= 0; i--) {
            if (objArray[i].id == obj.id && objArray[i].value == 0) {
                if (isCircle) {
                    obj.style.background = "url('images/Circle.png') no-repeat center";
                    obj.style.opacity = "1"
                    objArray[i].value = 1;
                    isCircle = !isCircle;
                } else {
                    obj.style.background = "url('images/cross.png') no-repeat center";
                    objArray[i].value = 2;
                    obj.style.opacity = "1"
                    isCircle = !isCircle;
                }
                evaluate();
            };
        };
    };
}

function restoreBox(obj) {
    if (!gameOver) {
        for (var i = objArray.length - 1; i >= 0; i--) {
            if (objArray[i].id == obj.id && objArray[i].value == 0) {
                obj.style.background = "";
                obj.style.opacity = "";
            }
        }
    };
}

function evaluate() {
    for (var i = 0; i <= 2; i++) {
        if (objArray[i].value == objArray[i + 3].value && objArray[i].value == objArray[i + 6].value && objArray[i].value != 0) {
            document.getElementById("result").innerHTML = "WINRAR"
            gameOver = true;
            var winrar = [objArray[i], objArray[i+3], objArray[i+6]];
        	winify(winrar);
        };
    };
    for (var i = 0; i <= 8; i += 3) {
        if (objArray[i].value == objArray[i + 1].value && objArray[i].value == objArray[i + 2].value && objArray[i].value != 0) {
            document.getElementById("result").innerHTML = "WINRAR"
            gameOver = true;
            var winrar = [objArray[i], objArray[i+1], objArray[i+2]];
        	winify(winrar);
        };
    };
    if (objArray[4].value == objArray[0].value && objArray[4].value == objArray[8].value && objArray[4].value != 0) {
        document.getElementById("result").innerHTML = "WINRAR!"
        gameOver = true;
        var winrar = [objArray[4], objArray[0], objArray[8]];
        winify(winrar);
    };
    if (objArray[4].value == objArray[2].value && objArray[4].value == objArray[6].value  && objArray[4].value != 0) {
        document.getElementById("result").innerHTML = "WINRAR"
        gameOver = true;
        var winrar = [objArray[4], objArray[2], objArray[6]];
        winify(winrar);
    };

    var isFull = true;
    for (var i = 0; i <= objArray.length-1; i++) {
    	if (objArray[i].value == 0){
    		isFull = false;
    	};
    	if (i == objArray.length-1 && isFull && !gameOver) {
    		document.getElementById("result").innerHTML = "TIE!!!";
    		gameOver = true;
    	};
    };
}

function winify(winArray){
	for (var i = winArray.length - 1; i >= 0; i--) {
		if (winArray[i].value == 1) {
			document.getElementById(winArray[i].id).style.background = "url('images/winCircle.png') no-repeat center";
		}
		else{
			document.getElementById(winArray[i].id).style.background = "url('images/winCross.png') no-repeat center";
		};
	};
}