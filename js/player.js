// javascript file to hold all the player code

// window.myNameSpace is my global object that I can add all of my functions too.
// Setting it up, equals window(the open browser window).myNameSpace to itself if it's there or an empty object if it isn't
window.myNameSpace = window.myNameSpace || { };


////////////////////////////// Constructor //////////////////////////////

// player object constructor
myNameSpace.player = function player(){
	
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
	this.canJumpOnLadder = false;
	this.isMoving = false;
	this.isOnLadder = false;
	this.isMovingOnLadder = false;
	this.isGravity = true;
	
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
	
	// draws the player to the screen
	this.draw = function draw(){
		
		// draw player if alive
		if(this.isAlive){
	
			// draw players head
			this.drawHead();
			
			// draw players hat
			this.drawHat();
			
			// draw players body
			this.drawBody();
			
		} // if
		
	}; // draw()
	
	
	////////////////////////////// update() //////////////////////////////
	
	// function that updates the state of the player
	this.update = function update(){
		
		// variable to decide how fast player runs out of jump power
		var jumpDecaySpeed = 164;
		
		// holder for the value of gravity
		var gravity = myNameSpace.gravity;
		
		// check if the player is on a ladder
		if(this.isOnLadder){
			
			// turn off gravity if player is on a ladder
			this.isGravity = false;
			
			if(!this.canJumpOnLadder){
				
				// end jump
				this.isJumping = false;
			}
			
		} else { // if not on ladder
			
			// cannot move on ladder if not on the ladder
			// set to false
			this.isMovingOnLadder = false;
			
		} // if
		
		// if there isn't meant to be gravity
		if(!this.isGravity){
			
			// turn off gravity
			gravity = 0;
		
		} // if
		
		// check if the player is jumping
		if(this.isJumping){
			
			// increase velocity using delta time and the decay speed
			// jumpDecaySpeed decides how fast a players jump runs out of power
			this.velocity.y += jumpDecaySpeed * myNameSpace.deltaTime;
			
		} else { // if not jumping
			
			// only stop player if not jumping
			// if the player is not moving on a ladder
			if(!this.isMovingOnLadder){
				
				// set y velocity to 0
				this.velocity.y = 0;
				
			} // if
			
		} // if	
		
		// moves the player based on players velocity
		
		this.position.x += this.velocity.x * myNameSpace.deltaTime;
		this.position.y += (this.velocity.y + gravity) * myNameSpace.deltaTime;	
		
		// reset values back to default
		
		// set gravity to on by default (will turn off if standing on floor)
		this.isGravity = true;
		
		// sets isOnLadder to false by default (will be set to true after this if on a ladder)
		this.isOnLadder = false;
		this.canJumpOnLadder = false;
		
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
		myNameSpace.ctx.fillRect(this.position.x + hatWidthOffSet + (hatBodyIndent / 2), 
								 this.position.y, hatWidth - hatBodyIndent, hatHeight - hatRimHeight);
		
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
	
	// moves the player
	this.move = function move(key){
		
		// key is a string passed into the function
		switch(key){
			case "right": // to move player right
				
				// set isMoving to true
				this.isMoving = true;
				
				// increase the player's velocity on the x axis
				// to move them
				this.velocity.x = 160;
				
				break;
				
			case "left": // to move the player left
				
				// set isMoving to true
				this.isMoving = true;
				
				// increase the player's velocity on the x axis
				// to move them (- velocity to move them left)
				this.velocity.x = -160;
		
				break;
				
			case "up": // to move the player up a ladder
				
				// set isMovingOnLadder to true
				this.isMovingOnLadder = true;
				
				// change players Y velocity to move them up
				this.velocity.y = -160;
				
				break;
				
			case "down": // to move a player down a ladder
				
				// set isMoving to true
				this.isMovingOnLadder = true;
				
				// change players Y velocity to move them down
				this.velocity.y = 160;
				
				break;
				
			case "stop": // to stop the player
				
				// set isMoving to false
				this.isMoving = false;
				
				// set the players velocity on the X axis to 0
				this.velocity.x = 0;
				
				break;
		} // switch
		
	}; // move()
	
	
	////////////////////////////// jump() //////////////////////////////
	
	// makes the player jump
	this.jump = function jump(){
		
		// make sure the player isn't already jumping
		if(!this.isJumping){
			
			// set player to jumping
			this.isJumping = true;
		
			// set y velcoity to jump velocity
			this.velocity.y = -330;
			
			// turn on gravity
			this.isGravity = true;
			
		} // if
		
	}; // jump()

	
	////////////////////////////// attack() //////////////////////////////
	
	this.attack = function attack(){
		
		
	}; // attack()
	
	
	////////////////////////////// collidingWithFloor() //////////////////////////////
	
	
	// checks to see if the player is colliding with the floor
	this.collidingWithFloor = function collidingWithFloor(floorObject){
		
		// get the center X and Y coords for the player (posX and posY are the top right corner)
		var playerCenterX = this.position.x + (this.width / 2);
		var playerCenterY = this.position.y + (this.height / 2);
		
		// get the center X and Y coords for the floor object
		var objectCenterX = floorObject.position.x + (floorObject.width / 2);
		var objectCenterY = floorObject.position.y + (floorObject.height / 2);
		
		// calculate the Minkowski sum to detect if a collision is happening
		// found calculation on Game Development Stack Exchange
		// ref: http://gamedev.stackexchange.com/questions/29786/a-simple-2d-rectangle-collision-algorithm-that-also-determines-which-sides-that
	
		var w = 0.5 * (this.width + floorObject.width);
		var h = 0.5 * (this.height + floorObject.height);
		var dx = playerCenterX - objectCenterX;
		var dy = playerCenterY - objectCenterY;
		
		// if a collision is detected
		if (Math.abs(dx) <= w && Math.abs(dy) <= h){
	
			// Check to see if the player is on a ladder
			if(floorObject.tag == "ladder"){
				
				// if yes, set isOnLadder to true
				this.isOnLadder = true;
				
				// if the player is on the ladder but the top half of the player is above if
				if(this.position.y <= floorObject.position.y - (this.height / 2)){
					
					// let the player jump
					this.canJumpOnLadder = true;
					
				} else { // if not
					
					// the player cannot jump on the ladder
					this.canJumpOnLadder = false;
					
					// end any jump that might be happening
					this.isJumping = false;
					
				} // if
				
			} // if
			
			// check to see if the player collided with a floor object
			if(floorObject.tag == "floor"){
				var wy = w * dy;
				var hx = h * dx;

				// find out which side of the rectangle that is the player
				// was collided with
				if (wy > hx){

					if (wy > -hx){ // collision at the top
						
						// Hit roof, turn on gravity
						this.isGravity = true;

						// make them bounce off something above the player
						this.velocity.y += 50;

					} else { // on the right

						// hitting wall, turn on gravity
						this.isGravity = true;
						
						// if player is moving towards the wall or directly against it
						if(this.velocity.x >= 0){

							// stop the player from entering the wall
							this.position.x = floorObject.position.x - this.width;

						} // if
					} // if

				} else {

					if (wy > -hx) { // on the left side

						// hitting wall, turn on gravity
						this.isGravity = true;
						
						// if player is moving towards the wall or directly against it
						if(this.velocity.x <= 0){
							
							// stop the player from entering the wall
							this.position.x = floorObject.position.x + floorObject.width;

						} // if

					} else { // at the bottom

						// on floor, turn off gravity
						this.isGravity = false;
						
						// if jumping, stop
						if(this.isJumping){
							
							this.isJumping = false;
							this.velocity.y = 0;
							
						} // if
						
						// stop the player from falling through floor
						this.position.y = floorObject.position.y - this.height;

					} // if
				} // if	

			} // if
			
		} // if
		
	}; // collidingWithFloor()
	
}; // Player Object

