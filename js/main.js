// javascript file that holds the main function for the game
// the game is run from this file

// window.myNameSpace is my global object that I can add all of my functions too.
// Setting it up, equals window(the open browser window).myNameSpace to itself if it's there or an empty object if it isn't
window.myNameSpace = window.myNameSpace || { };


////////////////////////////// Variables //////////////////////////////

myNameSpace.gravity = 120;

myNameSpace.currentTime = 0;
myNameSpace.lastTime = 0;
myNameSpace.deltaTime = 0;

myNameSpace.time = performance || Date;


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
	
	// create the player object
	var thePlayer = new myNameSpace.player();
	myNameSpace.thePlayer = thePlayer;
	
	//set the players x and y position
	thePlayer.position.x = 50;
	thePlayer.position.y = 50;
	
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
	
	////////////////////////////// Clear Canvas //////////////////////////////
	
	// clear the canvas so the object can be redrawn
	myNameSpace.ctx.clearRect(0, 0, myNameSpace.canvas.width, myNameSpace.canvas.height);
	
	
	////////////////////////////// Check Input //////////////////////////////
	
	// checks for user input
	
	      // Add an event listener to the keypress event.
	window.addEventListener("keydown", function(event) { 
		// Just log the event to the console.
		//console.log(event);
			
		// if space 
		if(event.keyCode == '32'){
			
			// make player jump
			myNameSpace.thePlayer.jump();
		}
			
		// if ArrowRight
		if(event.keyCode == '39') {
			
			// move player right
				
		} // if
		
		// if ArrowLeft
		if(event.keyCode == '37'){
				
				
		} // if
			
		// if ArrowDown
		if(event.keyCode == '40'){
	
			// climb down ladder if over one
				
		} // if
		
		// if ArrowUp
		if(event.keyCode == '38'){ 
			
			// climb ladder if under one
			
		} // if
										
	}); // addEventListener()
	
	
	////////////////////////////// Update State //////////////////////////////
	
	// updates the positions and state of objects
	
	// update the players state
	myNameSpace.thePlayer.update();
	
	
	////////////////////////////// Check Collisions //////////////////////////////
	
	// checks collisions and runs required code
	
	// check if player is colliding with the floor
	var len = myNameSpace.levelOne.floorObjects.length;
	
	for(var i = 0; i < len; ++i){
		
		// check collisions with floor objects
		myNameSpace.thePlayer.collidingWithFloor(myNameSpace.levelOne.floorObjects[i]);
		
	} // for
	
	
	////////////////////////////// Render Objects //////////////////////////////
	
	// draws the objects to the screen
	
	// draw the level
	myNameSpace.levelOne.drawLevel();
	
	// draw the player 
	myNameSpace.thePlayer.draw();
	
}; // gameOperations()


////////////////////////////// gameLoop() //////////////////////////////

// this is the main game loop that runs every frame.
myNameSpace.gameLoop = function gameLoop(timeStamp){

	// save the current time	
	myNameSpace.currentTime = timeStamp || myNameSpace.time.now();
	
	// Calculate delta time
	myNameSpace.deltaTime = myNameSpace.tools.getDeltaTime(myNameSpace.currentTime, myNameSpace.lastTime);

	// Run game code
	myNameSpace.gameOperations();

	// save the last time
	myNameSpace.lastTime = timeStamp || myNameSpace.time.now();

	// Runs function every frame
	window.requestAnimationFrame(gameLoop);
	
}; // gameLoop()
