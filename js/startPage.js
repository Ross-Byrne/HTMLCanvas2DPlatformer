// javascript file to hold the code that is going to create and manage the start page of the game

// window.myNameSpace is my global object that I can add all of my functions too.
// Setting it up, equals window(the open browser window).myNameSpace to itself if it's there or an empty object if it isn't
window.myNameSpace = window.myNameSpace || { };

// add startPage to the namespace
window.myNameSpace.startPage = { };

////////////////////////////// Variables //////////////////////////////

// html elements

// h1 game heading html element
myNameSpace.startPage.gameHeading = null;

// heading paragraph html element
myNameSpace.startPage.para = null;

// start game button
myNameSpace.startPage.startButton = null;

// Text

// games heading text
myNameSpace.startPage.headingText = "Gambler's Gambit";

// paragraph text
myNameSpace.startPage.paraText = "Welcome to Gambler's Gambit. This is currently a work in progress!";

// start button's text
myNameSpace.startPage.startButtonText = "Play Game";


////////////////////////////// Functions //////////////////////////////

// initialises the start page
// takes the div that the page is going to be put in as a param
myNameSpace.startPage.init = function init(startingDiv){
	
	// create game heading element
	myNameSpace.startPage.gameHeading = myNameSpace.tools.createHTMLElement("h1", myNameSpace.startPage.headingText);
	
	// center the heading
	myNameSpace.startPage.gameHeading.style.textAlign = "center";
	
	// add the page heading to the div
	startingDiv.appendChild(myNameSpace.startPage.gameHeading);
	
	// create paragraph element
	myNameSpace.startPage.para = myNameSpace.tools.createHTMLElement("p", myNameSpace.startPage.paraText);
	
	// center paragraph
	myNameSpace.startPage.para.style.textAlign = "center";
	
	// add paragraph to the main div
	myNameSpace.theDiv.appendChild(myNameSpace.startPage.para);
	
	// create game start button
	myNameSpace.startPage.startButton = myNameSpace.tools.createHTMLElement("button", myNameSpace.startPage.startButtonText);
	
	// center the button
	myNameSpace.startPage.startButton.style.textAlign = "center";
	
	// add attributes to button
	
	// add id to button
	//myNameSpace.tools.addAttribute(myNameSpace.startPage.startButton, "id", "startButton");
	
	// add an onclick function to button
	myNameSpace.tools.addAttribute(myNameSpace.startPage.startButton, "onclick", "myNameSpace.startPage.startButtonClicked()");
	
	// add button to main div
	theDiv.appendChild(myNameSpace.startPage.startButton);
	
}; // init()


////////////////////////////// startButtonClicked() //////////////////////////////

// function that is called when the playButton is clicked
myNameSpace.startPage.startButtonClicked = function startButtonClicked(){
	
	var parentEl;
	
	// hide paragraph
	myNameSpace.startPage.para.style.display = "none";
	
	// hide startButton
	myNameSpace.startPage.startButton.style.display = "none";
	
	// show Canvas
	myNameSpace.canvas.style.display = "block";
	
	// get the parent of theDiv
	parentEl = myNameSpace.theDiv.parentElement;
	
	// insert theDiv before the canvas element
	parentEl.insertBefore(myNameSpace.theDiv, myNameSpace.canvas);
	
	// setup first level
	myNameSpace.levelOne.setUpLevel();
	
	// Start the game loop
	myNameSpace.gameLoop();
	
	// place players y axis at starting point, the levelOne groundLevelYAxis
	myNameSpace.thePlayer.position.y = myNameSpace.levelOne.groundLevelYAxis - myNameSpace.thePlayer.height;
	
	// place the players x axis at 5% of the canvas width into the game
	myNameSpace.thePlayer.position.x = myNameSpace.canvas.width * .05;
	
	// start animating the levels coin
	myNameSpace.levelOne.coin.isAnimated = true;
	
	// start animating the levels key
	myNameSpace.levelOne.key.isAnimated = true;
	
	myNameSpace.levelOne.movingWall1.isAnimated = true;
	
}; // startButtonClicked()
