// javascript file that holds the main function for the game

// window.myNameSpace is my global object that I can add all of my functions too.
// Setting it up, equals window(the open browser window).myNameSpace to itself if it's there or an empty object if it isn't
window.myNameSpace = window.myNameSpace || { };

// the games main function. This is the first function to run
myNameSpace.main = function main() {
	
	// Gets a handle to the element with id gameCanvas.
	myNameSpace.canvas = document.getElementById("gameCanvas");
	
	var canvas = myNameSpace.canvas;

	// Get a 2D context for the canvas.
	var ctx = canvas.getContext("2d");
	
	// get a reference to div
	var theDiv = document.getElementById("theDiv");
	
	// set the width and height of the canvas
	canvas.width = 800;
	canvas.height = 600;

	// initialise a new game engine object
	var gameEngine = new myNameSpace.Engine();
	
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
	
	myNameSpace.para = myNameSpace.pageCreationTools.createHTMLElement("p", "Welcome to Gambler's Gambit. This is currently a work in progress!");

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
	button.setAttribute("id", "playButton");
	button.setAttribute("onclick", "myNameSpace.playButtonClicked()");
	
	theDiv.appendChild(button);

	// Start the game loop
	gameEngine.update();


}; // main()

// function that is called when the playButton is clicked
myNameSpace.playButtonClicked = function playButtonClicked(){
   alert("Lets play the game!");
	
	// hide paragraph
	myNameSpace.para.style.display = "none";
	myNameSpace.button.style.display = "none";
	myNameSpace.canvas.style.display = "block";
};
