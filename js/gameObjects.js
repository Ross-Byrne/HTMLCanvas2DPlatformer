// javascript file that holds game objects

// window.myNameSpace is my global object that I can add all of my functions too.
// Setting it up, equals window(the open browser window).myNameSpace to itself if it's there or an empty object if it isn't
window.myNameSpace = window.myNameSpace || { };

// add startPage to the namespace
window.myNameSpace.gameObjects = { };


////////////////////////////// Coin //////////////////////////////

// coin object constructor
myNameSpace.gameObjects.Coin = function Coin(){
	
	////////////////////////////// Variables //////////////////////////////
	
	this.radius = 0;
	this.position = { x: 0, y: 0 };
	this.velocity = { x: 0, y: 0 };
	this.colour = "rgb(255, 230, 50)";
	this.tag = "coin";
	
	this.isCollected = false;
	this.isAnimated = false;
	this.centerYPos = 0;
	this.floatRadius = 0;
	
	
	////////////////////////////// init() //////////////////////////////
	
	// initialises objects variables
	this.init = function init(r, posx, posy, velx, vely, colour, tag){
		
		this.radius = r;
		this.position = { x: posx, y: posy };
		this.velocity = { x: velx, y: vely };
		this.colour = colour;
		this.tag = tag;
		
		this.centerYPos = posy;
		
	}; // init()
	
	
	////////////////////////////// update() //////////////////////////////
	
	// updates the state of the coin
	this.update = function update(){
		
		// if the coin is to be animated, animate it
		if(this.isAnimated){
			
			// if the coin floats above the height it's allowed
			if(this.position.y < this.centerYPos - this.floatRadius){
				
				// set it to limit
				this.position.y = this.centerYPos - this.floatRadius;
			
				// reverse the coins velocity to bring it back
				this.velocity.y = - this.velocity.y;

			} // if
		
			// if the coin floats below the height it's allowed
			if(this.position.y > this.centerYPos + this.floatRadius){
				
				// set it to limit
				this.position.y = this.centerYPos + this.floatRadius;
			
				// reverse the coin velocity to bring it back
				this.velocity.y = - this.velocity.y;
				
			} // if

			// moves the coin based on coins velocity

			this.position.x += this.velocity.x * myNameSpace.deltaTime;
			this.position.y += this.velocity.y * myNameSpace.deltaTime;

		} // if
		
	}; // update()
	
	
	////////////////////////////// draw() //////////////////////////////
	
	// function to draw coin
	this.draw = function draw() {
			 
		// sets colour for coin
		myNameSpace.ctx.fillStyle = this.colour;
			 
		myNameSpace.ctx.beginPath();
				
		// draws circle 
		myNameSpace.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI); 
			 
		// fill circles colour
		myNameSpace.ctx.fill();
			 
	}; // draw()
	
}; // coin Object


////////////////////////////// Key //////////////////////////////

// key object constructor
myNameSpace.gameObjects.Key = function Key(){
	
	////////////////////////////// Variables //////////////////////////////
	
	this.position = {x: 0, y: 0};
	this.velocity = { x: 0, y: 0 };
	this.width = 40;
	this.height = 20;
	this.colour = "rgb(0, 0, 0)";
	this.tag = "key";
	
	this.isCollected = false;
	this.isAnimated = false;
	this.centerYPos = 0;
	this.floatRadius = 0;
	
	this.img = new Image();
	this.img.src = "resources/key/key.png";
	
	
	////////////////////////////// update() //////////////////////////////
	
	// updates the state of the key
	this.update = function update(){
		
		// if the key is to be animated, animate it
		if(this.isAnimated){
			
			// if the key floats above the height it's allowed
			if(this.position.y < this.centerYPos - this.floatRadius){
				
				// set it to limit
				this.position.y = this.centerYPos - this.floatRadius;
			
				// reverse the keys velocity to bring it back
				this.velocity.y = - this.velocity.y;

			} // if
		
			// if the key floats below the height it's allowed
			if(this.position.y > this.centerYPos + this.floatRadius){
				
				// set it to limit
				this.position.y = this.centerYPos + this.floatRadius;
			
				// reverse the keys velocity to bring it back
				this.velocity.y = - this.velocity.y;
				
			} // if

			// moves the key based on its velocity

			this.position.x += this.velocity.x * myNameSpace.deltaTime;
			this.position.y += this.velocity.y * myNameSpace.deltaTime;
				

		} // if
		
	}; // update()
	
	
	////////////////////////////// draw() //////////////////////////////
	
	// function to draw key
	this.draw = function draw() {
		
		// draw the key image
		myNameSpace.ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
			 
	}; // draw()
	
}; // key Object


////////////////////////////// Rectangle Object //////////////////////////////

// Constructor for blue rectangle
myNameSpace.gameObjects.Rectangle = function Rectangle(){

	////////////////////////////// Variables //////////////////////////////
	
	this.position = {x: 50, y: 50};
	this.width = 40;
	this.height = 20;
	this.colour = "rgb(0, 0, 0)";
	this.tag = "default";
	
	
	////////////////////////////// init() //////////////////////////////
	
	// initialises objects variables
	this.init = function init(posx, posy, width, height, colour, tag){
		
		this.position = {x: posx, y: posy};
		this.width = width;
		this.height = height;
		this.colour = colour;
		this.tag = tag;
		
	}; // init()

	
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
	
	
	////////////////////////////// init() //////////////////////////////
	
	// initialises objects variables
	this.init = function init(r, posx, posy, velx, vely, a, colour, tag){
		
		this.radius =  r;
		this.position = { x: posx, y: posy };
		this.velocity = { x: velx, y: vely };
		this.acceleration = a;
		this.colour = colour;
		this.tag = tag;
		
	}; // init()
	
	
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