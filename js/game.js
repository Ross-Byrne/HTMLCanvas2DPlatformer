// javascript file that holds game code

// window.myNameSpace is my global object that I can add all of my functions too.
// Setting it up, equals window(the open browser window).myNameSpace to itself if it's there or an empty object if it isn't
window.myNameSpace = window.myNameSpace || { };
	
	
////////////////////////////// Engine Object //////////////////////////////

// This is the main game engine object that has the main functions
// that run the game, such as update(), which is the main game loop

myNameSpace.Engine = function Engine(){

	////////////////////////////// Variables //////////////////////////////

	this.gravity = 0.1;
	
	// Time related variables
	
	this.currentTime = 0;
	this.lastTime = 0;
	this.deltaTime = 0;
	
	
	////////////////////////////// Functions //////////////////////////////
	
	
	////////////////////////////// Update() //////////////////////////////

	this.update = function update(timeStamp){
		
		// save the current time	
		this.currentTime = this.timeStamp || 0;

		// Calculate delta time
		this.deltaTime = (this.currentTime - this.lastTime) / 1000;

		// Run game code
		myNameSpace.gameOperations();

		// save the last time
		this.lastTime = this.timeStamp || 0;

		// Runs function every frame
		window.requestAnimationFrame(update);

	}; // update()
	
}; // Engine Object








   

