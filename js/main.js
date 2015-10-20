// javascript file that holds the main function for the game

// window.myNameSpace is my global object that I can add all of my functions too.
// Setting it up, equals window(the open browser window).myNameSpace to itself if it's there or an empty object if it isn't
window.myNameSpace = window.myNameSpace || { };

// Adds the MainObject object to myNameSpace
myNameSpace.MainObject = function(){

   // main function that runs the game
   this.main = function() {
   
	  var gameObject = new myNameSpace.GameObject();
   
	  console.log("This is main!");
	  
	  gameObject.printStuff();
	  
   }; // main()
   
}; // MainObject()
