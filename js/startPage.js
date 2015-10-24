// javascript file to hold the code that is going to create the start page of the game

// window.myNameSpace is my global object that I can add all of my functions too.
// Setting it up, equals window(the open browser window).myNameSpace to itself if it's there or an empty object if it isn't
window.myNameSpace = window.myNameSpace || { };

// add startPage to the namespace
window.myNameSpace.startPage = { };

////////////////////////////// Variables //////////////////////////////

myNameSpace.startPage.headingText = "Gambler's Gambit";

myNameSpace.startPage.gameHeading = null;


////////////////////////////// Functions //////////////////////////////

// initialises the start page
// takes the div that the page is going to be put in as a param
myNameSpace.startPage.init = function init(startingDiv){
	
	myNameSpace.startPage.gameHeading = myNameSpace.pageCreationTools.createHTMLElement("h1", myNameSpace.startPage.headingText);
	
	// center the heading
	myNameSpace.startPage.gameHeading.style.textAlign = "center";
	
	// add the page heading to the div
	startingDiv.appendChild(myNameSpace.startPage.gameHeading);
	
};