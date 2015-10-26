// javascript file that holds the code for the first game level

// javascript file that holds game objects

// window.myNameSpace is my global object that I can add all of my functions too.
// Setting it up, equals window(the open browser window).myNameSpace to itself if it's there or an empty object if it isn't
window.myNameSpace = window.myNameSpace || { };

// add levelOne to the namespace
window.myNameSpace.levelOne = { };

////////////////////////////// Variables //////////////////////////////

myNameSpace.levelOne.floorObjects = [];


////////////////////////////// setUpLevel() //////////////////////////////

// setup function that sets up the level
myNameSpace.levelOne.setUpLevel = function setUpLevel(){
	
	// creates the first floor layout for the level
	myNameSpace.levelOne.createFloorLayout();
	
	// creates the second level of floor layout for level
	myNameSpace.levelOne.createSecondFloorLevel();
	
}; // setUpLevel()


////////////////////////////// drawLevel() //////////////////////////////

// this function is called every frame to draw the level
myNameSpace.levelOne.drawLevel = function drawLevel(){
	
	// draws the object
	//myNameSpace.levelOne.groundLevel.draw();
	
	// draw floor objects
	for(var i = 0; i < myNameSpace.levelOne.floorObjects.length; ++i){
		
		// draw all floor objects
		myNameSpace.levelOne.floorObjects[i].draw();
		
	} // for
	
}; // drawLevel()


////////////////////////////// createFloorLayout() //////////////////////////////

// creates the objects that will act as the floors of the level
myNameSpace.levelOne.createFloorLayout = function createFloorLayout(){

	// create rectangle object
	myNameSpace.levelOne.groundLevelFloor = new myNameSpace.gameObjects.Rectangle();
	var groundLevelFloor = myNameSpace.levelOne.groundLevelFloor;
	
	// set width to the width of the canvas
	groundLevelFloor.width = myNameSpace.canvas.width;
	groundLevelFloor.height = 30;
	
	// set position y to the bottom of canvas - the height of object so it's on the bottom of canvas
	groundLevelFloor.position.y = myNameSpace.canvas.height - groundLevelFloor.height;
	groundLevelFloor.position.x = 0;
	groundLevelFloor.colour = "rgb(70, 70, 70)";
	groundLevelFloor.tag = "floor";
	
	// add groundFloor to array of floor objects
	myNameSpace.levelOne.floorObjects.push(groundLevelFloor);
	
	
	// create level part 1
	var floorPart = new myNameSpace.gameObjects.Rectangle();
	
	floorPart.height = 30;
	floorPart.width = myNameSpace.canvas.width * .25; // 25% the width of the canvas
	
	floorPart.position.x = (myNameSpace.canvas.width * .6); // start drawing object 60% the length of the canvas from left side
	floorPart.position.y = (myNameSpace.canvas.height - myNameSpace.levelOne.groundLevelFloor.height) - floorPart.height;
	floorPart.colour = "rgb(70, 70, 70)";
	floorPart.tag = "floor";
	
	// add floor part to array of floor parts
	myNameSpace.levelOne.floorObjects.push(floorPart);
	
	// create floor part 2
	var floorPart1 = new myNameSpace.gameObjects.Rectangle();
	
	floorPart1.height = 30;
	floorPart1.width = myNameSpace.canvas.width * .15;
	
	floorPart1.position.x = floorPart.position.x + 30;
	floorPart1.position.y = floorPart.position.y - floorPart1.height;
	floorPart1.colour = "rgb(70, 70, 70)";
	floorPart1.tag = "floor";
	
	// add floorPart1 to array of floor Objects
	myNameSpace.levelOne.floorObjects.push(floorPart1);
	
}; // createFloorLayout()


////////////////////////////// createSecondFloorLevel() //////////////////////////////

myNameSpace.levelOne.createSecondFloorLevel = function createSecondFloorLevel(){
	
	// get current ground level
	var curGroundLevel = myNameSpace.canvas.height - myNameSpace.levelOne.groundLevelFloor.height;
	
	// create floor part
	var secondFloorPart = new myNameSpace.gameObjects.Rectangle();
	
	// set up floor part
	secondFloorPart.height = 30;
	secondFloorPart. width = myNameSpace.canvas.width * .65;
	
	// set properties
	secondFloorPart.position.x = 0;
	secondFloorPart.position.y = curGroundLevel - (myNameSpace.canvas.height * .2) - secondFloorPart.height;
	secondFloorPart.colour = "rgb(70, 70, 70)";
	secondFloorPart.tag = "floor";
	
	// add floor part to the array of floor objects
	myNameSpace.levelOne.floorObjects.push(secondFloorPart);
	
	// create another floor part
	var secondFloorPart1 = new myNameSpace.gameObjects.Rectangle();
	
	secondFloorPart1.height = 30;
	// width is whatever is left of the canvas width after secondFloorPart and the space between it asnd secondFloorPart1
	secondFloorPart1. width = myNameSpace.canvas.width - secondFloorPart.width - (myNameSpace.canvas.width * .13);
	
	// set properties
	
	// start where secondFoorPart ends + a space of 13% the width of canvas
	secondFloorPart1.position.x = secondFloorPart.width + (myNameSpace.canvas.width * .13);
	// position y is equal to 20% above ground level - the height of floor
	secondFloorPart1.position.y = curGroundLevel - (myNameSpace.canvas.height * .2) - secondFloorPart1.height;
	secondFloorPart1.colour = "rgb(70, 70, 70)";
	secondFloorPart1.tag = "floor";
	
	// add floor part to the array of floor objects
	myNameSpace.levelOne.floorObjects.push(secondFloorPart1);
	
}; // createSecondFloorLevel()
