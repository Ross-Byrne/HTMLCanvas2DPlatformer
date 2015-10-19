// javascript file that holds the main function for the game

window.myNameSpace = window.myNameSpace || { };

myNameSpace.MainObject = function(){

   // main function that runs the game
   this.main = function() {
   
	  var gameObject = new myNameSpace.GameObject();
   
	  console.log("This is main!");
	  
	  gameObject.printStuff();
	  
   }; // main()
   
}; // MainObject()