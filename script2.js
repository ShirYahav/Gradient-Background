var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var defaultt= "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0));"
var getNew = document.getElementById("getNew");

css.textContent = body.style.background + defaultt;

function changecolor(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	document.body.style.background= "#" + randomColor;
	color.innerHTML="#" + randomColor;
}

getNew.addEventListener("click", changecolor);

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

