// javascript file to hold all the player code

// window.myNameSpace is my global object that I can add all of my functions too.
// Setting it up, equals window(the open browser window).myNameSpace to itself if it's there or an empty object if it isn't
window.myNameSpace = window.myNameSpace || { };

// player object constructor
window.myNameSpace.player = function player(){
	
	////////////////////////////// Variables //////////////////////////////
	
	this.width = 30;
	this.height = 60;
	this.position = { x: 0, y: 0 };
	this.isAlive = true;
	this.playerColour = { hat: "rgb(0, 0, 0)", head: "rgb(255, 255, 255)", body: "rgb(70, 0, 0)" };
	this.score = 0;
	this.lives = 0;
	this.health = 4;
	
	// players hit box will be a rectangle so body parts are split 
	// between alocated height and height

	// player hat and head get 25% of size each
	// player body gets 50% of size

	this.hatSizePercent = .25;
	this.headSizePercent = .25;
	this.bodySizePercent = .5;
	
	
	////////////////////////////// Functions //////////////////////////////
	
	
	////////////////////////////// init() //////////////////////////////
	
	this.init = function init(){
		
		
	}; // init()
	
	
	////////////////////////////// draw() //////////////////////////////
	
	this.draw = function draw(){
		
		// draw player if alive
		if(this.isAlive){
			
			// draw players hat
			this.drawHat();
			
			// draw players head
			this.drawHead();
			
			// draw players body
			this.drawBody();
		} // if
		
	}; // draw()
	
	
	////////////////////////////// drawHat() //////////////////////////////
	
	// function that draws the players hat
	this.drawHat = function drawHat(){
		
		// reference
		// fillRect(posX, posY, width, height)
		
		var hatWidth = this.width;
		var hatHeight = this.height * this.hatSizePercent;
		var hatBodyIndent = this.width * .26; // hat body indent is how much smaller body is compared to rim of hat
		var hatRimHeight = hatHeight * .18; // height of the hat rim
		
		// set colour for hat
		myNameSpace.ctx.fillStyle = this.playerColour.hat;

		// draw hat part1 - hat body
		myNameSpace.ctx.fillRect(this.position.x + (hatBodyIndent / 2), this.position.y, hatWidth - hatBodyIndent, hatHeight - hatRimHeight);
		
		// draw hat part2 - hat rim
		myNameSpace.ctx.fillRect(this.position.x, this.position.y + hatHeight - hatRimHeight, this.width, hatRimHeight);
		
	}; // drawHat()
	
	
	////////////////////////////// drawHead() //////////////////////////////
	
	// function that draws the players head
	this.drawHead = function drawHead(){
		
		
	}; // drawHead()
	
	
	////////////////////////////// drawBody() //////////////////////////////
	
	// function that draws the players body
	this.drawBody = function drawBody(){
		
		
	}; // drawBody()
	
	
	////////////////////////////// move() //////////////////////////////
	
	this.move = function move(){
		
	}; // move()
	
	
	////////////////////////////// jump() //////////////////////////////
	
	this.jump = function jump(){
		
		
	}; // jump()
	
	
	////////////////////////////// attack() //////////////////////////////
	
	this.attack = function attack(){
		
		
	}; // attack()
	
}; // Player Object

