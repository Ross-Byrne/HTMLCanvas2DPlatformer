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
	
	myNameSpace.rec = new myNameSpace.gameObjects.Rectangle();
	
	// Initalise Variables

	// hide canvas by default
	canvas.style.display = "none";
	
	// show div by default
	theDiv.style.display = "block";
	
	theDiv.style.textAlign = "Center";
	
	// initialise the games start page
	myNameSpace.startPage.init(theDiv);
	
	// add a paragraph
	
	// create paragraph element
	/*myNameSpace.para = document.createElement("p");
	var para = myNameSpace.para;
	
	// create text node
	var textNode = document.createTextNode("Welcome to Gambler's Gambit. This is currently a work in progress!");
	
	// add text to paragraph
	para.appendChild(textNode);*/
	
	myNameSpace.para = myNameSpace.tools.createHTMLElement("p", "Welcome to Gambler's Gambit. This is currently a work in progress!");

	var para = myNameSpace.para;
	
	para.style.textAlign = "center";
	
	// add paragraph to div
 	theDiv.appendChild(para);
	
	myNameSpace.button = document.createElement("button");
	
	var button = myNameSpace.button;
	
	var t = document.createTextNode("Play Game!"); 
	button.appendChild(t); 
	button.style.textAlign = "center";
	
	// add attributes to button
	
	// add id to button
	myNameSpace.tools.addAttribute(button, "id", "playButton");
	//button.setAttribute("id", "playButton");
	
	// add an onclick function to button
	myNameSpace.tools.addAttribute(button, "onclick", "myNameSpace.playButtonClicked()");
	//button.setAttribute("onclick", "myNameSpace.playButtonClicked()");
	
	theDiv.appendChild(button);

	// Start the game loop
	gameEngine.update();

}; // main()


////////////////////////////// playButtonClicked() //////////////////////////////

// function that is called when the playButton is clicked
myNameSpace.playButtonClicked = function playButtonClicked(){
	
	// hide paragraph
	myNameSpace.para.style.display = "none";
	myNameSpace.button.style.display = "none";
	myNameSpace.canvas.style.display = "block";
};


////////////////////////////// gameOperations() //////////////////////////////

// gameOperations runs the actual game code that needs to run every frame
// such as animations, collisions etc.

// it is clearer to keep the game code separate from the function
// that controls the game loop
myNameSpace.gameOperations = function gameOperations(){
	
	// clear the canvas so the object can be redrawn
	myNameSpace.ctx.clearRect(0, 0, myNameSpace.canvas.width, myNameSpace.canvas.height);
	
	myNameSpace.rec.draw();
	
	var parentEl;
	
	// get the parent of theDiv
	parentEl = myNameSpace.theDiv.parentElement;
	
	// insert theDiv before the canvas element
	parentEl.insertBefore(myNameSpace.theDiv, myNameSpace.canvas);
	
}; // gameOperations()
