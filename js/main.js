// javascript file that holds the main function for the game

// window.myNameSpace is my global object that I can add all of my functions too.
// Setting it up, equals window(the open browser window).myNameSpace to itself if it's there or an empty object if it isn't
window.myNameSpace = window.myNameSpace || { };

// the games main function. This is the first function to run
myNameSpace.main = function main() {
	
	// Gets a handle to the element with id gameCanvas.
	var canvas = document.getElementById("gameCanvas");

	// Get a 2D context for the canvas.
	var ctx = canvas.getContext("2d");
	
	// set the width and height of the canvas
	canvas.width = 800;
	canvas.height = 600;

	// initialise a new game engine object
	var gameEngine = new myNameSpace.Engine();
	
	// Initalise Variables

	//var gravity = 0.1;



	console.log("This is main!");

	// Start the game loop
	gameEngine.update();

}; // main()
