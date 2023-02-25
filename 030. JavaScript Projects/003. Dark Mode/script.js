function selectMode(mode) {

    var color = "ghostWhite";
    var label = "Light Mode";

    if (mode === "dark") {
        color = "darkSlateBlue";
        label = "Dark Mode";
    } else if (mode === "light") {
        color = "ghostWhite";
        label = "Light Mode";
    } else {
        color = "dimGray";
        label = "Ninja Mode";
    }

    console.log(label);

    document.getElementById("theme").style.backgroundColor = color;
    document.getElementById("label").innerHTML = label;
}
