// javascript file that holds the main function for the game

// window.myNameSpace is my global object that I can add all of my functions too.
// Setting it up, equals window(the open browser window).myNameSpace to itself if it's there or an empty object if it isn't
window.myNameSpace = window.myNameSpace || { };


////////////////////////////// main() //////////////////////////////

// the games main function. This is the first function to run
myNameSpace.main = function main() {
	
	// Gets a handle to the element with id gameCanvas.
	myNameSpace.canvas = document.getElementById("gameCanvas");
	var canvas = myNameSpace.canvas;

	// Get a 2D context for the canvas.
	myNameSpace.ctx = canvas.getContext("2d");
	var ctx = myNameSpace.ctx;
	
	// get a reference to div
	myNameSpace.theDiv = document.getElementById("theDiv");
	
	var theDiv = myNameSpace.theDiv;
	
	// set the width and height of the canvas
	canvas.width = 800;
	canvas.height = 600;

	// initialise a new game engine object
	var gameEngine = new myNameSpace.Engine();
	myNameSpace.gameEngine = gameEngine;
	
	myNameSpace.rec = new myNameSpace.gameObjects.Rectangle();
	
	// Initalise Variables

	// hide canvas by default
	canvas.style.display = "none";
	
	// show div by default
	theDiv.style.display = "block";
	
	// center the divs contents
	theDiv.style.textAlign = "Center";
	
	
	// Running Setup Functions
	
	// initialise the games start page
	myNameSpace.startPage.init(theDiv);

}; // main()


////////////////////////////// gameOperations() //////////////////////////////

// gameOperations runs the actual game code that needs to run every frame
// such as animations, collisions etc.

// it is clearer to keep the game code separate from the function
// that controls the game loop
myNameSpace.gameOperations = function gameOperations(){
	
	// clear the canvas so the object can be redrawn
	myNameSpace.ctx.clearRect(0, 0, myNameSpace.canvas.width, myNameSpace.canvas.height);
	
	// draw rect
	myNameSpace.rec.draw();
	
}; // gameOperations()
