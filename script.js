var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById('gradient');
var button = document.querySelector("button");

console.log(css);
console.log(color1);
console.log(color2);
console.log(button);

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	console.log(color1.value);
	console.log(color2.value);
	css.textContent = body.style.background + ";";
}

function randomColor(){
	return Math.floor(Math.random()*16777215).toString(16)
}


function setRandomGradient(){
	color1.value = '#' + randomColor();
	color2.value = '#' + randomColor();
	console.log(randomColor());
	console.log(color1.value);
	console.log(color2.value);
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

button.addEventListener("click", setRandomGradient)

addEventListener("load", setGradient)

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)