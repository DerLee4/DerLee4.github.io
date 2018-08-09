/* To test connection initially
alert("CONNECTED!");
*/

var numSquares = 6;
var colors = [];
var pickedColor; // Target color
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons(); // mode button event listeners
	setupSquares(); 	// square event listeners
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			// figure out how many squares to show
			if(this.textContent === "Easy"){
				numSquares = 3;
			}
			else{
				numSquares = 6;
			}

			// pick new colors
			// pick a new pickedColor
			// update page to reflect changes 
			reset();
		});
	}
}

function setupSquares(){
	// use style.backgroundColor rather than style.background
	// because more compatible with more browsers
	for(var i = 0; i < squares.length; i++){
		// add click listeners to squares
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
			var clickedColor = this.style.background; // this refers to squares[i]
			// compare color to pickedColor
		
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct" // don't need ;
				resetButton.textContent = "Play Again?" // don't need ;
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			}
			else{
				this.style.background = "#232323"; // fades wrongly chosen square to background color
				messageDisplay.textContent = "Try Again" // don't need ;
			}
		});
	}

}

function reset(){
	//alert("Clicked"); // didn't work
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	// change "Play Again?" message to "New Colors"
	resetButton.textContent = "New Colors" // don't need ;
	// resets win message to blank
	messageDisplay.textContent = "";
	// change colors of squares
	for(var i = 0; i < squares.length; i++){
		// correct color -> all squares changed to that color
		if(colors[i]){
			squares[i].style.display = "block"; // brings all 6 squares back
			squares[i].style.background = colors[i]; 	// add initial colors to squares
		}
		else {
			squares[i].style.display = "none";
		}
	}
	// change color of h1 background from winning color to default black
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})

// when correct square chosen, all squares changed to that color
function changeColors(color){
	// loop through all squares
	for(var i = 0; i < squares.length; i++){
		// change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	// repeat num times
	for(var i = 0; i < num; i++){
		// get random color and push into arr
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	// pick a "red" from 0-255 
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0-255 
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; // need spaces to fix the extra added spaces by the DOM when comparing
}