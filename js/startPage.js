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
myNameSpace.startPage.paraText = "Welcome to Gambler's Gambit." +
									" You play as a gambler who has sold his soul to the devil for just a few more coins to play in the slot machines!" + 
									" Your goal is to collect all of the coins." +
									" Controls: Spacebar is to jump, the left and right Arrow keys are to move left and right, and the up and down Arrow keys are" +
									" for climbing up and down ladders! Remember, you can only jump on a ladder when you're at the top! Good luck!";

// start button's text
myNameSpace.startPage.startButtonText = "Play Game";


////////////////////////////// Functions //////////////////////////////

// initialises the start page
myNameSpace.startPage.init = function init(){
	
	// create game heading element
	myNameSpace.startPage.gameHeading = myNameSpace.tools.createHTMLElement("h1", myNameSpace.startPage.headingText);
	
	// center the heading
	myNameSpace.startPage.gameHeading.style.textAlign = "center";
	
	// add the page heading to the div
	myNameSpace.theDiv.appendChild(myNameSpace.startPage.gameHeading);
	
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
	
	// add an onclick function to button
	myNameSpace.tools.addAttribute(myNameSpace.startPage.startButton, "onclick", "myNameSpace.startPage.startButtonClicked()");
	
	// add button to main div
	myNameSpace.theDiv.appendChild(myNameSpace.startPage.startButton);
		
}; // init()


////////////////////////////// pageIsVisable() //////////////////////////////

// function that either shows or hides the startPage
// pass in a boolean to decide to show page or not
myNameSpace.startPage.pageIsVisable = function pageIsVisable(isVisable){
	
	// if page is meant to be shown
	if(isVisable){
		
		// show game heading
		//myNameSpace.startPage.gameHeading.style.display = "block";

		// show game paragraph
		myNameSpace.startPage.para.style.display = "block";

		// show start game button
		myNameSpace.startPage.startButton.style.display = "block";
		
	} else {
		
		// hide game paragraph
		myNameSpace.startPage.para.style.display = "none";

		// hide start game button
		myNameSpace.startPage.startButton.style.display = "none";
		
	} // if

}; // pageIsVisable()


////////////////////////////// startButtonClicked() //////////////////////////////

// function that is called when the playButton is clicked
myNameSpace.startPage.startButtonClicked = function startButtonClicked(){
	
	// hide startPage
	this.pageIsVisable(false);
	
	// show Canvas
	myNameSpace.canvas.style.display = "block";
	
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
	
	// start animating movingWall1
	myNameSpace.levelOne.movingWall1.isAnimated = true;	
	
}; // startButtonClicked()
