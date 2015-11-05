// javascript file that holds the code for the first game level

// javascript file that holds game objects

// window.myNameSpace is my global object that I can add all of my functions too.
// Setting it up, equals window(the open browser window).myNameSpace to itself if it's there or an empty object if it isn't
window.myNameSpace = window.myNameSpace || { };

// add levelOne to the namespace
window.myNameSpace.levelOne = { };

////////////////////////////// Variables //////////////////////////////

// array of floor objects
myNameSpace.levelOne.floorObjects = [];

// the y axis of the groundLevel
myNameSpace.levelOne.groundLevelYAxis = 0;


////////////////////////////// Objects //////////////////////////////

// Some Objects that need to be kept track of

// game coin
myNameSpace.levelOne.coin = {};

// game key
myNameSpace.levelOne.key = {};

// moving wall 1
myNameSpace.levelOne.movingWall1 = {};

// moving wall 2
myNameSpace.levelOne.movingWall2 = {};


////////////////////////////// setUpLevel() //////////////////////////////

// setup function that sets up the level
myNameSpace.levelOne.setUpLevel = function setUpLevel(){
	
	// add the level to the level array
	myNameSpace.levels.push(myNameSpace.levelOne);
	
	// creates the first floor layout for the level
	this.createFloorLayout();
	
	// creates the second level of floor layout for level
	this.createSecondFloorLevel();
	
	// creates the third level of floor layout
	this.createThirdFloorLevel();
	
	// creates the fourth level of floor layout
	this.createFourthFloorLevel();
	
	// creates important objects
	this.placeImportantObjects();
	
}; // setUpLevel()


////////////////////////////// drawLevel() //////////////////////////////

// this function is called every frame to draw the level
myNameSpace.levelOne.drawLevel = function drawLevel(){
	
	// draw floor objects
	for(var i = 0; i < this.floorObjects.length; ++i){
		
		// draw all floor objects
		this.floorObjects[i].draw();
		
	} // for
	
	// draw the coin
	this.coin.draw();
	
	// draw the key
	this.key.draw();
	
	// draw movingWall1
	this.movingWall1.draw();
	
	// draw movingWall2
	this.movingWall2.draw();
	
}; // drawLevel()


////////////////////////////// update() //////////////////////////////

// updates the state of the level
myNameSpace.levelOne.update = function update(){
	
	// update the state of the coin
	this.coin.update();
	
	// update the state of the key
	this.key.update();
	
	// update movingWall1
	this.movingWall1.update();
	
	// update moving wall 2
	this.movingWall2.update();
	
	// if the key is collected
	if(this.key.isCollected){
		
		// activate the first wall to shrink it
		this.movingWall1.wallIsGrowing = false;
		
		// start the walls animation
		this.movingWall1.isAnimated = true;
		
		// activate the second wall to block the player
		this.movingWall2.wallIsGrowing = true;
		
		// start the walls animation
		this.movingWall2.isAnimated = true;
		
	} // if
	
}; // update()


////////////////////////////// placeImportantObjects() //////////////////////////////

// places important objects such as the coin, key
myNameSpace.levelOne.placeImportantObjects = function placeImportantObjects(){
	
	////////////////////////////// Coin Object //////////////////////////////
	
	// create the coin
	this.coin = new myNameSpace.gameObjects.Coin();
	
	// set width and height
	
	this.coin.width = 40;
	this.coin.height = 40;
	
	// set X and Y position for coin
	
	// X position is = to the width of the canvas - 5% of the width of the canvas
	this.coin.position.x = myNameSpace.canvas.width - (myNameSpace.canvas.width * .08);
	
	// Y position
	this.coin.position.y = this.groundLevelYAxis - this.coin.height - 10;
	
	// set the coins center Y Pos
	this.coin.centerYPos = this.coin.position.y;
	
	// set the coins float radius to 1% the height of the canvas
	this.coin.floatRadius = myNameSpace.canvas.height * .01;
	
	// set the coins y velocity
	this.coin.velocity.y = 8;
	
	
	////////////////////////////// Key Object //////////////////////////////
	
	// create the key
	this.key = new myNameSpace.gameObjects.Key();
	
	// set the width and height
	this.key.width = 40;
	this.key.height = 20;
	
	// set the x and y position of key
	
	// width set to 90% the width of the canvas
	this.key.position.x = myNameSpace.canvas.width - (myNameSpace.canvas.width * .08);
	
	this.key.position.y = myNameSpace.canvas.height * .08;
	
	// set the keys center Y Pos
	this.key.centerYPos = this.key.position.y;
	
	// set the keys float radius to 1% the height of the canvas
	this.key.floatRadius = myNameSpace.canvas.height * .01;
	
	// set the key y velocity
	this.key.velocity.y = 8;
	
	
	////////////////////////////// MovableWall1 //////////////////////////////
	
	// create moving wall 1
	this.movingWall1 = new myNameSpace.gameObjects.MoveableWall();
	
	// set width and height
	
	this.movingWall1.height = 0;
	this.movingWall1.width = 30;
	
	// set position X and Y
	
	// set pos X to 85% of the width of the canvas
	this.movingWall1.position.x = myNameSpace.canvas.width * .85;
	
	// set pos Y to groundLevel, groundLevelYAxis - its own height
	this.movingWall1.position.y = this.groundLevelYAxis - this.movingWall1.height;
	
	// set the maxHeight the wall will move to, to 18% the height of the canvas
	this.movingWall1.maxHeight = myNameSpace.canvas.height * .18;
	
	// set the starting Y pos
	this.movingWall1.startingYPoint = this.movingWall1.position.y;
	
	// set the moving speed of the wall
	this.movingWall1.growthSpeed = 42;
	
	// set the colour
	this.movingWall1.colour = "rgb(70, 70, 70)";
	
	// set tag
	this.movingWall1.tag = "wall";
	
	// add the wall to the array of objects that the player can collide with
	this.floorObjects.push(this.movingWall1);
	
	
	////////////////////////////// MoveableWall2 //////////////////////////////
	
	// create moving wall 2
	this.movingWall2 = new myNameSpace.gameObjects.MoveableWall();
	
	// set width and height
	
	this.movingWall2.height = 0;
	this.movingWall2.width = 30;
	
	// set position X and Y
	
	// set pos X to 20% the width of the canvas
	this.movingWall2.position.x = myNameSpace.canvas.width * .2;
	
	// set pos Y to 55% of the canvas height above ground level
	this.movingWall2.position.y = this.groundLevelYAxis - (myNameSpace.canvas.height * .55)
	
	// set the maxHeight the wall will move to, to 21% the height of the canvas
	this.movingWall2.maxHeight = myNameSpace.canvas.height * .21;
	
	// set the starting Y pos
	this.movingWall2.startingYPoint = this.movingWall2.position.y;
	
	// set the moving speed of the wall
	this.movingWall2.growthSpeed = 42;
	
	// set the colour
	this.movingWall2.colour = "rgb(70, 70, 70)";
	
	// set the tag
	this.movingWall2.tag = "wall";
	
	// add the wall to the array of objects that the player can collide with
	this.floorObjects.push(this.movingWall2);
	
}; // placeImportantObjects()


////////////////////////////// createFloorLayout() //////////////////////////////

// creates the objects that will act as the floors of the level
myNameSpace.levelOne.createFloorLayout = function createFloorLayout(){

	// create rectangle object
	var groundLevelFloor = new myNameSpace.gameObjects.Rectangle();
	
	// set width to the width of the canvas
	groundLevelFloor.width = myNameSpace.canvas.width;
	groundLevelFloor.height = 30;
	
	// set position y to the bottom of canvas - the height of object so it's on the bottom of canvas
	groundLevelFloor.position.y = myNameSpace.canvas.height - groundLevelFloor.height;
	groundLevelFloor.position.x = 0;
	groundLevelFloor.colour = "rgb(70, 70, 70)";
	groundLevelFloor.tag = "floor";
	
	// save the games groundLevelYAxis
	this.groundLevelYAxis = groundLevelFloor.position.y;
	
	// add groundFloor to array of floor objects
	this.floorObjects.push(groundLevelFloor);
	
	
	// create level part 1
	var floorPart = new myNameSpace.gameObjects.Rectangle();
	
	floorPart.height = 30;
	floorPart.width = myNameSpace.canvas.width * .25; // 25% the width of the canvas
	
	floorPart.position.x = (myNameSpace.canvas.width * .6); // start drawing object 60% the length of the canvas from left side
	floorPart.position.y = this.groundLevelYAxis - floorPart.height;
	floorPart.colour = "rgb(70, 70, 70)";
	floorPart.tag = "floor";
	
	// add floor part to array of floor parts
	this.floorObjects.push(floorPart);
	
	// create floor part 2
	var floorPart1 = new myNameSpace.gameObjects.Rectangle();
	
	floorPart1.height = 30;
	floorPart1.width = myNameSpace.canvas.width * .15;
	
	floorPart1.position.x = floorPart.position.x + 30;
	floorPart1.position.y = floorPart.position.y - floorPart1.height;
	floorPart1.colour = "rgb(70, 70, 70)";
	floorPart1.tag = "floor";
	
	// add floorPart1 to array of floor Objects
	this.floorObjects.push(floorPart1);
	
}; // createFloorLayout()


////////////////////////////// createSecondFloorLevel() //////////////////////////////

myNameSpace.levelOne.createSecondFloorLevel = function createSecondFloorLevel(){
	
	// get current ground level
	var curGroundLevel = this.groundLevelYAxis;
	
	// create floor part
	var secondFloorPart = new myNameSpace.gameObjects.Rectangle();
	
	// set up floor part
	secondFloorPart.height = 30;
	secondFloorPart. width = myNameSpace.canvas.width * .64;
	
	// set properties
	secondFloorPart.position.x = 0;
	
	// position y is equal to 26% above ground level - the height of floor
	secondFloorPart.position.y = curGroundLevel - (myNameSpace.canvas.height * .26) - secondFloorPart.height;
	secondFloorPart.colour = "rgb(70, 70, 70)";
	secondFloorPart.tag = "floor";
	
	// add floor part to the array of floor objects
	this.floorObjects.push(secondFloorPart);
	
	
	// create another floor part
	var secondFloorPart1 = new myNameSpace.gameObjects.Rectangle();
	
	secondFloorPart1.height = 30;
	
	// width is whatever is left of the canvas width after secondFloorPart and the space between it and secondFloorPart1
	secondFloorPart1.width = myNameSpace.canvas.width - secondFloorPart.width - (myNameSpace.canvas.width * .14);
	
	// set properties
	
	// start where secondFoorPart ends + a space of 14% the width of canvas
	secondFloorPart1.position.x = secondFloorPart.width + (myNameSpace.canvas.width * .14);
	
	// position y is equal to 18% above ground level - the height of floor
	secondFloorPart1.position.y = curGroundLevel - (myNameSpace.canvas.height * .18) - secondFloorPart1.height;
	secondFloorPart1.colour = "rgb(70, 70, 70)";
	secondFloorPart1.tag = "floor";
	
	// add floor part to the array of floor objects
	this.floorObjects.push(secondFloorPart1);
	

	// create a ladder using a loop
	// loop 8 times to make 8 ladder steps
	for(var i = 0; i < 8; ++i){
		
		// create a ladder
		var secondFloorPart2 = new myNameSpace.gameObjects.Rectangle();

		// set height and width
		secondFloorPart2.height = 12;
		secondFloorPart2.width = 40;

		// set properties

		// start where secondFoorPart1 ends + a space of 6% the width of canvas
		secondFloorPart2.position.x = secondFloorPart1.position.x + (myNameSpace.canvas.width * .06);

		// position y is equal to 24% above ground level - the height of floor + an increase of i * .4 for each step
		secondFloorPart2.position.y = curGroundLevel - (myNameSpace.canvas.height * (.292 + (i * .04)) - secondFloorPart2.height);
		secondFloorPart2.colour = "rgb(140, 70, 20)";
		secondFloorPart2.tag = "ladder";

		// add floor part to the array of floor objects
		this.floorObjects.push(secondFloorPart2);
		
	} // for
	
}; // createSecondFloorLevel()


////////////////////////////// createThirdFloorLevel() //////////////////////////////

myNameSpace.levelOne.createThirdFloorLevel = function createThirdFloorLevel(){
	
	// create a floor object
	var thirdFloorPart = new myNameSpace.gameObjects.Rectangle();
	
	// set height and width
	
	thirdFloorPart.height = 30;
	
	// width of the object is 56% of the width of the canvas
	thirdFloorPart.width = myNameSpace.canvas.width * .56;
	
	// set properties
	
	// start 20% of the way across the width of the canvas
	thirdFloorPart.position.x = (myNameSpace.canvas.width * .20);

	// position y is equal to 50% above ground level
	thirdFloorPart.position.y = this.groundLevelYAxis - (myNameSpace.canvas.height * .5) - thirdFloorPart.height;
	thirdFloorPart.colour = "rgb(70, 70, 70)";
	thirdFloorPart.tag = "floor";

	// add floor part to the array of floor objects
	this.floorObjects.push(thirdFloorPart);
	
	// create a ladder using a loop
	// loop 6 times to make 6 ladder steps
	for(var i = 0; i < 6; ++i){
		
		// create a ladder
		var thirdFloorPart1 = new myNameSpace.gameObjects.Rectangle();

		// set height and width
		thirdFloorPart1.height = 12;
		thirdFloorPart1.width = 40;

		// set properties

		// start where secondFoorPart1 ends + a space of 6% the width of canvas
		thirdFloorPart1.position.x = (myNameSpace.canvas.width * .06);

		// position y is equal to 10% above thirdFloorPart - the height of floor + an increase of i * .4 for each step
		thirdFloorPart1.position.y = thirdFloorPart.position.y - (myNameSpace.canvas.height * (.1 + (i * .04)) - thirdFloorPart.height);
		thirdFloorPart1.colour = "rgb(140, 70, 20)";
		thirdFloorPart1.tag = "ladder";

		// add floor part to the array of floor objects
		this.floorObjects.push(thirdFloorPart1);
		
	} // for
	
}; // createThirdFloorLevel()


////////////////////////////// createFourthFloorLevel() //////////////////////////////

myNameSpace.levelOne.createFourthFloorLevel = function createFourthFloorLevel(){
	
	// create a floor object
	var fourthFloorPart = new myNameSpace.gameObjects.Rectangle();
	
	// set height and width
	
	fourthFloorPart.height = 30;
	
	// width of the object is 80% of the width of the canvas
	fourthFloorPart.width = myNameSpace.canvas.width * .80;
	
	// set properties
	
	// start 20% of the way across the width of the canvas
	fourthFloorPart.position.x = (myNameSpace.canvas.width * .20);

	// position y is equal to 76% above ground level - height of floorPart
	fourthFloorPart.position.y = this.groundLevelYAxis - (myNameSpace.canvas.height * .76) - fourthFloorPart.height;
	fourthFloorPart.colour = "rgb(70, 70, 70)";
	fourthFloorPart.tag = "floor";

	// add floor part to the array of floor objects
	this.floorObjects.push(fourthFloorPart);
	
}; // createFourthFloorLevel()

