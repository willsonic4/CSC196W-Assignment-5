function makeHuge() {
    document.getElementById("inputText-1").style.fontSize = "24pt";
    alert("Hello, world!");
}

function fancyText() {
    alert("Alert!");
    document.getElementById("inputText-1").style.fontWeight = "bold";
    document.getElementById("inputText-1").style.color = "blue";
    document.getElementById("inputText-1").style.textDecoration = "underline";
}

function boringText() {
    document.getElementById("inputText-1").style.fontWeight = "normal";
    document.getElementById("inputText-1").style.color = "black";
    document.getElementById("inputText-1").style.textDecoration = "none";
}

function makeMoo() {
    const text = document.getElementById("inputText-1").value;
    const words = text.split(" ");
    for (var i = 0; i < words.length; i++) {
        let word = words[i].trim();
        word += "🐄";
        words[i] = word;
    }
    document.getElementById("inputText-1").value = words.join("");
    value = document.getElementById("inputText-1").style.textTransform = "uppercase";
}