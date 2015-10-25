// javascript file that holds game objects

// window.myNameSpace is my global object that I can add all of my functions too.
// Setting it up, equals window(the open browser window).myNameSpace to itself if it's there or an empty object if it isn't
window.myNameSpace = window.myNameSpace || { };

// add startPage to the namespace
window.myNameSpace.gameObjects = { };


////////////////////////////// Rectangle Object //////////////////////////////

// Constructor for blue rectangle
myNameSpace.gameObjects.Rectangle = function Rectangle(){

	////////////////////////////// Variables //////////////////////////////
	
	this.position = {x: 50, y: 50};
	this.width = 40;
	this.height = 20;
	this.colour = "rgb(0, 0, 0)";
	this.tag = "default";

	
	////////////////////////////// draw() //////////////////////////////
	
	// draws the object to the canvas
	this.draw = function draw(){

		// set colour for square
		myNameSpace.ctx.fillStyle = this.colour;

		// draw
		myNameSpace.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	
	}; // draw()

	
	////////////////////////////// rectCircleColliding() //////////////////////////////
	
	// return true if the rectangle and circle are colliding
	this.rectCircleColliding = function rectCircleColliding(circle){

		var distX = Math.abs(circle.position.x - this.position.x - this.width / 2);
		var distY = Math.abs(circle.position.y - this.position.y - this.height / 2);

		if (distX > (this.width / 2 + circle.radius)) { return -1; }
		if (distY > (this.height / 2 + circle.radius)) { return -1; }

		if (distX <= (this.width / 2)) { return true; } 
		if (distY <= (this.height / 2)) { return true; }

		var dx = distX - this.width / 2;
		var dy = distY - this.height / 2;
		return (dx * dx + dy * dy <= (circle.radius * circle.radius));
		
	}; // rectCircleColliding()

}; // Rectanle Object


////////////////////////////// Circle Object //////////////////////////////

myNameSpace.gameObjects.Circle = function Circle(){
		
	////////////////////////////// Variables //////////////////////////////
	
	this.radius =  5;
	this.position = { x: 0, y: 0 };
	this.velocity = { x: 0, y: 0 };
	this.acceleration = 0;
	this.colour = "rgb(255, 0, 0)";
	this.tag = "default";
	
	
	////////////////////////////// draw() //////////////////////////////
	
	// function to draw ball
	this.draw = function draw() {
			 
		// Make the fill style red.
		myNameSpace.ctx.fillStyle = this.colour;
			 
		myNameSpace.ctx.beginPath();
				
		// draws circle 
		myNameSpace.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI); 
			 
		// fill circles colour
		myNameSpace.ctx.fill();
			 
	} // draw()
		 
}; // Circle object