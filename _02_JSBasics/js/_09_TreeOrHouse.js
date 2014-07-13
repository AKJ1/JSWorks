function treeHouseCompare(value) {
    var houseArea = (value.house * value.house) * 1.5;
    var treeArea = b * 1 + Math.pow(((b / 3) * 2), 2) * Math.PI;
    if (houseArea > treeArea) {
        console.log("house/" + houseArea);
    } else if (houseArea < treeArea) {
        console.log("tree/" + treeArea);
    } else {
        console.log("equal!");
    }
}