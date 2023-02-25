var cityRent1 = 1200;
var cityRent2 = 940;

var isMoreExpensive = cityRent1 > cityRent2;
var comprisonLable = "Paris is more expensive: " + isMoreExpensive;
console.log(comprisonLable);

var difference = cityRent1 - cityRent2;
var differenceLabel = "Rent difference: " + difference + " Euros";
console.log(differenceLabel);

document.getElementById("city1").innerHTML = "Paris Rent: " + cityRent1;
document.getElementById("city2").innerHTML = "Barcelona Rent: " + cityRent2;
document.getElementById("comparison").innerHTML = comprisonLable;
document.getElementById("difference").innerHTML = differenceLabel;