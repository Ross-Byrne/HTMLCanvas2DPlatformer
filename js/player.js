// javascript file to hold all the player code

// window.myNameSpace is my global object that I can add all of my functions too.
// Setting it up, equals window(the open browser window).myNameSpace to itself if it's there or an empty object if it isn't
window.myNameSpace = window.myNameSpace || { };

// player object constructor
window.myNameSpace.player = function player(){
	
	////////////////////////////// Variables //////////////////////////////
	
	// the player seems to look best when there is a 2:1 ratio for height : width
	
	this.width = 25;
	this.height = 45;
	this.position = { x: 0, y: 0 };
	this.velocity = { x: 0, y: 0 };
	
	this.isAlive = true;
	this.playerColour = { hat: "rgb(0, 0, 0)", head: "rgb(160, 200, 100)", body: "rgb(70, 0, 0)" };
	this.score = 0;
	this.lives = 0;
	this.health = 4;
	
	this.isJumping = false;
	
	// players hit box will be a rectangle so body parts are split 
	// between allocated height
	
	// player hat  gets 20% of height allocated
	// player head gets 28% of height allocated
	// player body gets 52% of height allocated

	this.hatSizePercent = .20;
	this.headSizePercent = .28;
	this.bodySizePercent = .52;
	
	
	// Player body parts
	
	this.playerHead = new myNameSpace.gameObjects.Circle();
	this.playerBody = new myNameSpace.gameObjects.Circle();
	
	
	////////////////////////////// Functions //////////////////////////////
	
	
	////////////////////////////// init() //////////////////////////////
	
	this.init = function init(){
		
		
	}; // init()
	
	
	////////////////////////////// draw() //////////////////////////////
	
	this.draw = function draw(){
		
		// draw player if alive
		if(this.isAlive){
	
			// draw players head
			this.drawHead();
			
			// draw players hat
			this.drawHat();
			
			// draw players body
			this.drawBody();
			
			// draw refrence rectangle 
			myNameSpace.ctx.fillRect(100, this.position.y, this.width, this.height);
			
		} // if
		
	}; // draw()
	
	
	////////////////////////////// update() //////////////////////////////
	
	// function that updates the state of the player
	this.update = function update(){
		
		var jumpDecaySpeed = 140;
		
		if(this.isJumping && this.velocity.y <= 0){
			
			this.velocity.y += jumpDecaySpeed * myNameSpace.deltaTime;
			
		} else {
			
			this.velocity.y = 0;
			
			this.isJumping = false;
		} // if
		
		
		// moves the player based on players velocity
		
		this.position.x += this.velocity.x * myNameSpace.deltaTime;
		this.position.y += (this.velocity.y + myNameSpace.gravity) * myNameSpace.deltaTime;
		
		
		
		
	}; // update()
	
	
	////////////////////////////// drawHat() //////////////////////////////
	
	// function that draws the players hat
	this.drawHat = function drawHat(){
		
		// reference
		// fillRect(posX, posY, width, height)
		
		var hatWidth = this.width * .8;
		var hatHeight = this.height * this.hatSizePercent; // get height allocated for hat
		var hatWidthOffSet = (this.width - hatWidth) / 2; // hat isn't as wide as allocated width, so this is the offset to be added to x axis
		var hatBodyIndent = hatWidth * .36; // hat body indent is how much smaller body is compared to rim of hat
		var hatRimHeight = hatHeight * .18; // height of the hat rim
		
		// set colour for hat
		myNameSpace.ctx.fillStyle = this.playerColour.hat;

		// draw hat part1 - hat body
		myNameSpace.ctx.fillRect(this.position.x + hatWidthOffSet + (hatBodyIndent / 2), this.position.y, hatWidth - hatBodyIndent, hatHeight - hatRimHeight);
		
		// draw hat part2 - hat rim
		myNameSpace.ctx.fillRect(this.position.x + hatWidthOffSet, this.position.y + hatHeight - hatRimHeight, hatWidth, hatRimHeight);
		
	}; // drawHat()
	
	
	////////////////////////////// drawHead() //////////////////////////////
	
	// function that draws the players head
	this.drawHead = function drawHead(){
		
		var headWidth = this.width;
		var headHeight = this.height * this.headSizePercent; // get allocated height for head
		var headRadius = headHeight / 2; // radius is based on the amount of height allocated
		var headYStartingPoint = this.position.y + (this.height * this.hatSizePercent); // because head is drawn under hat
		var headExtraSize = Math.min(headRadius * .2, headWidth / 2); // increase head size by 20% but not bigger then the max width given
		
		// add extra size onto the radius of the head
		headRadius += headExtraSize;
		
		// set colour for head
		myNameSpace.ctx.fillStyle = this.playerColour.head;
			 
		// start drawing circle
		myNameSpace.ctx.beginPath();
				
		// draws circle 
		myNameSpace.ctx.arc(this.position.x + (headWidth / 2), headYStartingPoint + headRadius - headExtraSize, headRadius, 0, 2 * Math.PI); 
			 
		// fill circles colour
		myNameSpace.ctx.fill();
		
	}; // drawHead()
	
	
	////////////////////////////// drawBody() //////////////////////////////
	
	// function that draws the players body
	this.drawBody = function drawBody(){
		
		var bodyWidth = this.width;
		var bodyHeight = this.height * this.bodySizePercent; // get allocated height for head
		var bodyRadius = bodyHeight / 2; // radius is based on amount of height allocated
		var bodyYStartingPoint = this.position.y + (this.height * this.hatSizePercent) + (this.height * this.headSizePercent); // because body is drawn under head
		
		// set colour for head
		/*myNameSpace.ctx.fillStyle = this.playerColour.body;
			 
		// start drawing circle
		myNameSpace.ctx.beginPath();
				
		// draws circle 
		myNameSpace.ctx.arc(this.position.x + (bodyWidth / 2), bodyYStartingPoint + bodyRadius, bodyRadius, 0, 2 * Math.PI); 
			 
		// fill circles colour
		myNameSpace.ctx.fill();*/
		
		// initialise the players body
		// function ref: init(r, posx, posy, velx, vely, a, colour, tag)
		this.playerBody.init(bodyRadius, this.position.x + (bodyWidth / 2), bodyYStartingPoint + bodyRadius,
							 0, 0, 0, this.playerColour.body, "playerBody");
		
		// draw the body
		this.playerBody.draw();
		
	}; // drawBody()
	
	
	////////////////////////////// move() //////////////////////////////
	
	this.move = function move(key){
		
		switch(key){
			case "right":
				
				this.velocity.x = 100;
				
				break;
				
			case "left":
				
				this.velocity.x = - 100;
				break;
				
			default:
				this.velocity.x = 0;
				break;
		} // switch
		
	}; // move()
	
	
	////////////////////////////// jump() //////////////////////////////
	
	this.jump = function jump(){
		
		// set player to jumping
		this.isJumping = true;
		
		// set y velcoity to jump velocity
		this.velocity.y = -300;
		
	}; // jump()

	
	////////////////////////////// attack() //////////////////////////////
	
	this.attack = function attack(){
		
		
	}; // attack()
	
	
	////////////////////////////// collidingWithFloor() //////////////////////////////
	
	// checks to see if the player is colliding with the floor
	this.collidingWithFloor = function collidingWithFloor(floorObject){
		
		// check to see if the player is colliding with the floor
		if(this.playerBody.position.y >= floorObject.position.y - this.playerBody.radius && !this.isJumping){
			
			this.position.y = floorObject.position.y - this.height;
		} // if
		
	}; // collidingWithFloor()
	
}; // Player Object

