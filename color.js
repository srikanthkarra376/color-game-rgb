var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector ("#hardBtn");
var numberOfSquares = 6;





easyBtn.addEventListener("click",function(){
hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
numberOfSquares= 3;
colors = generateRandomColors(numberOfSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for(var i = 0;i<squares.length; i++){
	if(colors[i]){
		squares[i].style.background = colors[i];
	} else {
		squares[i].style.display ="none";
	}

}
});

hardBtn.addEventListener("click",function(){
easyBtn.classList.remove("selected");
hardBtn.classList.add("selected");
numberOfSquares = 6;
colors = generateRandomColors(numberOfSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for(var i = 0;i<squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].style.display = "block";
	
}
});

 resetButton.addEventListener("click", function(){
	//generate all new colors 
	colors = generateRandomColors(numberOfSquares);
	//pick new colors from aray
	pickedColor = pickColor();

	//change the dispplay colors
	colorDisplay.textContent = pickedColor;
	this.textContent ="NEW COLORS"
	messageDisplay.textContent = ""
	// change the colors of the squares 
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
});

for (var i = 0; i <squares.length ; i++){
	//add initial coclors to sauares 
	squares[i].style.backgroundColor = colors[i];
	// gran the color of the cliked color 
	squares[i].addEventListener("click" , function () {
	  var clikedColor = this.style.backgroundColor;
	  // compare color of picked color 
	  if(clikedColor === pickedColor){
	  	messageDisplay.textContent ="Correct!";
	  	changeColors(clikedColor);

	  	h1.style.background = clikedColor;

	  	resetButton.textContent ="Play Again?"
	  } else {
	  	this.style.backgroundColor = "#232323";
	  	messageDisplay.textContent ="Try Again";
	  }
	});
	
}

function changeColors(color){
	//loop through all the squares 
	for( var i=0; i<squares.length; i++){
		//change each color to match given color 
		squares[i].style.background = color;
	}
}
function pickColor(){
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}
function generateRandomColors(num) {
	//make an array 
	var arr = [];
	//add num random colors to arrray
	for(var i =0; i<num; i++){

		arr.push(randomColor());
	}
	return  arr;
}
function randomColor(){
	//pick a "red"  from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue "from 0-255;
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}