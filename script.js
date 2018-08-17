//declaring an array of 6 colors
var dificulty = 6;
var colors = generateRandomColors(dificulty);
//making a nodelist of squares to iterate through and apply colors
var square = document.querySelectorAll(".square");
var pickedColor = pickColor(); //pickColor Function picks random color from the array
var colorDisplay = document.getElementById("displayColorRGB");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var	resetButton = document.querySelector("#reset");

function resetSquare(){ 
	for(var i = 0; i<square.length; i++){
		//setting up each color to each box
		square[i].style.backgroundColor = colors[i];
	}
}

resetSquare();

//for setting up the colors to the boxes
for(var i = 0; i<square.length; i++){
	//setting up each color to each box
	// square[i].style.backgroundColor = colors[i];
	
	//setting up eventlistener on click to match
		square[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor
			if (clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!"
				changeColors(clickedColor);
				resetButton.textContent = "Play Again?"
		}
		else{
			this.style.backgroundColor = "#232323"
			messageDisplay.textContent = "Try Again"
			}
		}	
	)
}


function changeColors(color){
	for(var i = 0; i<square.length; i++){
		square[i].style.backgroundColor = color;
	}
	h1.style.backgroundColor = color;
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function pickRandom(){
	var randomNumber = Math.floor(Math.random() * 256);
	return randomNumber;
}


function generateRandomColors(num){
	//create an arr of given number
	var arr = []
	//add colors
	for(var i = 0; i<num; i++){
		arr.push("rgb("+pickRandom()+", "+pickRandom()+", "+pickRandom()+")")
	}
	//return arr
	return arr;
}

resetButton.addEventListener("click", reset);
 
function reset(){
	colors = generateRandomColors(dificulty);
	pickedColor = pickColor();
	resetSquare();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = ""
	h1.style.removeProperty("background-color")
	resetButton.textContent = "New Colors"
};

function removeBottomRow(){
	for (var i = 3; i < square.length; i++) {
		square[i].style.display = "none";
	}
}

function restoreBottomRow(){
	for (var i = 3; i < square.length; i++) {
		square[i].style.display = "block";
	}
}

var easyButton = document.querySelector("#easy");
easyButton.addEventListener("click",function(){
	dificulty = 3;
	reset();
	removeBottomRow();
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
})

var hardButton = document.querySelector("#hard");
hardButton.addEventListener("click", function(){
	dificulty = 6;
	reset();
	restoreBottomRow();
	easyButton.classList.remove("selected");
	hardButton.classList.add("selected");
});

// [
// 	"rgb("+pickRandom()+", "+pickRandom()+", "+pickRandom()+")",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)",
// ]