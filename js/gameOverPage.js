// javascript file to hold the code that is going to create and manage the start page of the game

// window.myNameSpace is my global object that I can add all of my functions too.
// Setting it up, equals window(the open browser window).myNameSpace to itself if it's there or an empty object if it isn't
window.myNameSpace = window.myNameSpace || { };

// add startPage to the namespace
window.myNameSpace.gameOverPage = { };

////////////////////////////// Variables //////////////////////////////

// html elements

// h1 game heading html element
myNameSpace.gameOverPage.gameHeading = {};

// h1 game heading html element
myNameSpace.gameOverPage.secondGameHeading = {};

// heading paragraph html element
myNameSpace.gameOverPage.para = {};

// restart game button
myNameSpace.gameOverPage.restartButton = {};

// quit button
myNameSpace.gameOverPage.quitButton = {};

// Text

// games heading text
myNameSpace.gameOverPage.headingText = "Gambler's Gambit";

// second heading
myNameSpace.gameOverPage.secondHeadingText = "Game Over";

// paragraph text
myNameSpace.gameOverPage.paraText = "Welcome to Gambler's Gambit. This is currently a work in progress!";

// restart button's text
myNameSpace.gameOverPage.restartButtonText = "Restart Game";

// quit buttons text
myNameSpace.gameOverPage.quitButtonText = "Quit Game";


////////////////////////////// Functions //////////////////////////////

// initialises the game over page
myNameSpace.gameOverPage.init = function init(){
	
	// get reference to the main div
	var theDiv = myNameSpace.theDiv;
	
	// create game heading element
	this.gameHeading = myNameSpace.tools.createHTMLElement("h1", this.headingText);
	
	// center the heading
	this.gameHeading.style.textAlign = "center";
	
	// add the page heading to the div
	theDiv.appendChild(this.gameHeading);
	
	// create paragraph element
	this.para = myNameSpace.tools.createHTMLElement("p", this.paraText);
	
	// center paragraph
	this.para.style.textAlign = "center";
	
	// add paragraph to the main div
	theDiv.appendChild(this.para);
	
	// create game restart button
	this.restartButton = myNameSpace.tools.createHTMLElement("button", this.restartButtonText);
	
	// center the button
	this.restartButton.style.textAlign = "center";
	
	// add attributes to button
	
	// add id to button
	myNameSpace.tools.addAttribute(this.restartButton, "id", "restartButton");
	
	// add an onclick function to button
	myNameSpace.tools.addAttribute(this.restartButton, "onclick", "this.restartButtonClicked()");
	
	// add button to main div
	theDiv.appendChild(this.restartButton);
	
}; // init()


////////////////////////////// restartButtonClicked() //////////////////////////////

// function that is called when the restartButton is clicked
myNameSpace.gameOverPage.restartButtonClicked = function restartButtonClicked(){
	
	
	
}; // restartButtonClicked()


