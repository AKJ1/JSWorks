var getKeys = function() {

    var keys = [];
    for (var key in document) {
        keys.push(key);
    }
    return keys;
};

function getProperties() {
    var keys = getKeys();
    for (var i = 0; i < keys.length; i++) {
        document.getElementById("result3").innerHTML = document.getElementById("result3").innerHTML + keys[i] + "<br>";
    }

}