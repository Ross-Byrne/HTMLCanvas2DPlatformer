// javascript file to hold all the coin code

// window.myNameSpace is my global object that I can add all of my functions too.
// Setting it up, equals window(the open browser window).myNameSpace to itself if it's there or an empty object if it isn't
window.myNameSpace = window.myNameSpace || { };


////////////////////////////// Constructor //////////////////////////////

// coin object constructor
myNameSpace.Coin = function Coin(){
	
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
			if(this.position.y < this.centerYPos - this.floatRadius ||
			   this.position.y > this.centerYPos + this.floatRadius){

				// reverse the coins velocity to bring it back
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