// simple javascript file to store some functions for creating html elements 
// for when I'm creating the start page and the settings page.

// window.myNameSpace is my global object that I can add all of my functions too.
// Setting it up, equals window(the open browser window).myNameSpace to itself if it's there or an empty object if it isn't
window.myNameSpace = window.myNameSpace || { };

// add pageCreationsTools to namespace
window.myNameSpace.tools = { };


////////////////////////////// createHTMLElement() //////////////////////////////

// creates a HTML element that is specified eg "p" = paragraph, "button" = button and text adds the text
// returns the created element
myNameSpace.tools.createHTMLElement = function createHTMLElement(elementType, text){
	
	var element;
	
	// create the type of element
	element = document.createElement(elementType);
	
	// create text node with passed in text
	var textNode = document.createTextNode(text);
	
	// add text to element
	element.appendChild(textNode);
	
	// return the element
	return element;
	
}; // createHTMLElement()


////////////////////////////// addAttribute() //////////////////////////////

// Adds an attribute to a HTML element
myNameSpace.tools.addAttribute = function addAttribute(element, attribute, attributeValue){
	
	// adds an attribute to a HTML element
	element.setAttribute(attribute, attributeValue);
	
}; // addAttribute()