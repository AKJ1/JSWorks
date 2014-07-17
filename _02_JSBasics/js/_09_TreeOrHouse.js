function treeHouseCompare(tree,house) {
    var houseArea = (house.value * house.value) * 1.5;
    var treeArea = tree.value * 1 + Math.pow(((tree.value / 3) * 2), 2) * Math.PI;
    var result;
    if (houseArea > treeArea) {
        console.log("house/" + houseArea);
        document.getElementById("result9").innerHTML = "house/ " + houseArea;
    } else if (houseArea < treeArea) {
        console.log("tree/" + treeArea);
        document.getElementById("result9").innerHTML = "tree/ " + treeArea;
    } else {
        console.log("equal!");
        document.getElementById("result9").innerHTML = "(is this even possible?) equal/ " + houseArea + "/" + treeArea; 
    }
}

function treeHouseCompareConsoleVersion(value) {
    var houseArea = (value.house * value.house) * 1.5;
    var treeArea = value.tree * 1 + Math.pow(((value.tree / 3) * 2), 2) * Math.PI;
    var result;
    if (houseArea > treeArea) {
        console.log("house/" + houseArea);
        document.getElementById("result9").innerHTML = "house/ " + houseArea;
    } else if (houseArea < treeArea) {
        console.log("tree/" + treeArea);
        document.getElementById("result9").innerHTML = "tree/ " + houseArea;
    } else {
        console.log("equal!");
        document.getElementById("result9").innerHTML = "(is this even possible?) equal/ " + houseArea;
    }
}