// javascript file that holds game code

// window.myNameSpace is my global object that I can add all of my functions too.
// Setting it up, equals window(the open browser window).myNameSpace to itself if it's there or an empty object if it isn't
window.myNameSpace = window.myNameSpace || { };

// Adds GameObject object to myNameSpace, this lets me use it in main.js
myNameSpace.GameObject = function(){
   
	// function to print stuff
	this.printStuff = function(){

	  console.log("This is Game!");

   }; // printStuff()
   
}; // GameObject()
