// javascript file that holds the main function for the game
// the game is run from this file
// the games loop using animation frame is here

// window.myNameSpace is my global object that I can add all of my functions too.
// Setting it up, equals window(the open browser window).myNameSpace to itself if it's there or an empty object if it isn't
window.myNameSpace = window.myNameSpace || { };


////////////////////////////// Variables //////////////////////////////

myNameSpace.gravity = 160;

myNameSpace.currentTime = 0;
myNameSpace.lastTime = 0;
myNameSpace.deltaTime = 0;

myNameSpace.time = performance || Date;

// array to store game levels
myNameSpace.levels = [];

// var to keep track of the current level being played
myNameSpace.currentLevel = 0;

// store the number of levels
myNameSpace.numberOfLevels = 0;

// keeps track of if the game is over or not
myNameSpace.isGameOver = false;


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
	
	// Initalise Variables

	// hide canvas by default
	canvas.style.display = "none";
	
	// show div by default
	theDiv.style.display = "block";
	
	// center the divs contents
	theDiv.style.textAlign = "Center";
	
	// load levels and get the number of levels
	this.numberOfLevels = this.levels.length;
	
	// Running Setup Functions
	
	// initialise the games start page
	myNameSpace.startPage.init();
	
}; // main()


////////////////////////////// gameOperations() //////////////////////////////

// gameOperations runs the actual game code that needs to run every frame
// such as animations, collisions etc.

// it is clearer to keep the game code separate from the function
// that controls the game loop

// Order of code execution
// 
// 1. Checks player input
// 2. Updates the state of objects
// 3. Checks Collisions
// 4. Draws Objects to the screen
myNameSpace.gameOperations = function gameOperations(){
	
	
	////////////////////////////// Check Input //////////////////////////////
	
	// checks for user input
	
	// Add an event listener to the keypress event.
	window.addEventListener("keydown", function(event) { 
		// Just log the event to the console.
		//console.log(event);
			
		// check player input
		if(event.keyCode == '32') {
			
			// check if the player is on a ladder and if they can jump on it
			if(myNameSpace.thePlayer.isOnLadder && !myNameSpace.thePlayer.canJumpOnLadder){

				// if the player is on a ladder and cannot jump
				// do nothing
				
			} else { // if not on a ladder or is allowed junp on one
				
				// make player jump
				myNameSpace.thePlayer.jump();
				
			} // if
	
		} // if
		
		if (event.keyCode == '39'){ // if ArrowRight
			
			// move player to the left
			myNameSpace.thePlayer.move("right");
			
		} // if
		
		if(event.keyCode == '37') { // if LeftArrow
			
			// move player to the left
			myNameSpace.thePlayer.move("left");
			
		}  // if
		
		// check to see if the player is on a ladder
		if(myNameSpace.thePlayer.isOnLadder){
			
			if(event.keyCode == '38'){ // if UpArrow

				// move player up a ladder
				myNameSpace.thePlayer.move("up");

			} // if

			if(event.keyCode == '40'){ // if DownArrow

				// move player down a ladder
				myNameSpace.thePlayer.move("down");

			} // if
			
		} // if
								
	}); // addEventListener()
	
	// check if a key isn't being pressed
	window.addEventListener("keyup", function(event) { 
		// Just log the event to the console.
		//console.log(event);
			
		// check player input
		
		if (event.keyCode == '39'){ // if ArrowRight
			
			// stop player
			myNameSpace.thePlayer.move("stop");
			
		} // if
		
		if(event.keyCode == '37') { // if LeftArrow
			
			// stop player
			myNameSpace.thePlayer.move("stop");
			
		}  // if
		
		// check to see if the player is on a ladder
		if(myNameSpace.thePlayer.isOnLadder){
			
			if(event.keyCode == '38'){ // if UpArrow

				// to stop player, set isMovingOnLadder to false
				myNameSpace.thePlayer.isMovingOnLadder = false;

			} // if

			if(event.keyCode == '40'){ // if DownArrow

				// to stop player, set isMovingOnLadder to false
				myNameSpace.thePlayer.isMovingOnLadder = false;

			} // if
			
		} // if
								
	}); // addEventListener()
	
	
	////////////////////////////// Update State //////////////////////////////
	
	// updates the positions and state of objects
	
	// update the players state
	myNameSpace.thePlayer.update();
	
	// update the state of the level
	myNameSpace.levels[myNameSpace.currentLevel].update();
	
	
	////////////////////////////// Check Collisions //////////////////////////////
	
	// checks collisions and runs required code
	
	// check if player is leaving the canvas on left side
	if(myNameSpace.thePlayer.position.x <= 0){
			
		// stop player from falling off canvas
		myNameSpace.thePlayer.position.x = 0;
			
	} // if
		
	// check if player is leaving canvas on right side
	if(myNameSpace.thePlayer.position.x + myNameSpace.thePlayer.width >= myNameSpace.canvas.width){

		// stop player from falling off canvas
		myNameSpace.thePlayer.position.x = myNameSpace.canvas.width - myNameSpace.thePlayer.width;

	} // if
		
	// check if the player is leaving top of canvas
	if(myNameSpace.thePlayer.position.y <= 0){

		// Hit roof, turn on gravity
		myNameSpace.thePlayer.isGravity = true;

		// make the player bounce off the roof of canvas
		myNameSpace.thePlayer.velocity.y += 50;

	} // if
	
	// check if player is colliding with the floor
	var len = myNameSpace.levels[myNameSpace.currentLevel].floorObjects.length;
	
	for(var i = 0; i < len; ++i){
		
		// check collisions with floor objects
		myNameSpace.thePlayer.collidingWithFloor(myNameSpace.levels[myNameSpace.currentLevel].floorObjects[i]);
		
	} // for
	
	
	// check if the player is colliding with a collectable
	
	// check if colliding with coin
	myNameSpace.thePlayer.collidingWithCollectable(myNameSpace.levels[this.currentLevel].coin);
	
	// check if colliding with key
	myNameSpace.thePlayer.collidingWithCollectable(myNameSpace.levels[this.currentLevel].key);
	
	
	////////////////////////////// Render Objects //////////////////////////////
	
	// clear the canvas so the object can be redrawn
	myNameSpace.ctx.clearRect(0, 0, myNameSpace.canvas.width, myNameSpace.canvas.height);
	
	// draws the objects to the screen
	
	if(!myNameSpace.isGameOver){
		// draw the level
		myNameSpace.levels[myNameSpace.currentLevel].drawLevel();

		// draw the player 
		myNameSpace.thePlayer.draw();
		
	} else {
		
		myNameSpace.gameOverMessage();
	}
	
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


////////////////////////////// gameOverMessage() //////////////////////////////

// function that prints the game over message to the canvas
myNameSpace.gameOverMessage = function gameOverMessage(){

	// set the font type and size
	myNameSpace.ctx.font="30px Verdana";

	// center the text
	myNameSpace.ctx.textAlign = "center";
	
	// print first message at center of the canvas
	myNameSpace.ctx.fillText("Game Over! Press F5 to play again!",
							 myNameSpace.canvas.width / 2, myNameSpace.canvas.height / 2);
	
	// place second message 10% under the first messsage
	myNameSpace.ctx.fillText("More Levels coming soon!",
							 (myNameSpace.canvas.width / 2), (myNameSpace.canvas.height / 2) + myNameSpace.canvas.height * .1);

	
}; // gameOverMessage()
