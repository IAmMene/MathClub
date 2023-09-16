/* File name: calcAreaCirlce.js
Author: Julian Menegon
Program: Software Development and Network Engineering
Date: 06/26/2
Version: 	1.0
Description: The logic behind calculating the area of cirlce.  
*/

/* In order to access any element in an HTML page, one needs to always start wtih accessing the document object which is done using document. 
document.getElementById(id) Finds an element by element id, in this case, I have set the form to circleForm so this DOM document object reference is calling on the information from that section of the HTML page. 
The addEventListener is looking for the submission event to take place (someone clicks the add button I created in the HTML doc), once that is done an "anonymous function" is used to pass parameter event 
so that the event object is automatically passed to the event handler when the event is triggered. 
Citation: https://www.w3schools.com/js/js_htmldom_document.asp
https://www.w3schools.com/jsref/met_element_addeventlistener.asp 
*/
document.getElementById("circleForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission Citation: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    
    // Get the radius input value from the HTML document using the getElementById
    //Citation: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById 
    var radius = document.getElementById("radius").value;
    
    // Calculate the area of a ricle using the resource below for logic as well as the Math.PI static data property.
    //Citation: https://www.omnicalculator.com/math/area-of-a-circle 
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI 
    var area = Math.PI * radius * radius;
    
    // Update the result on the page, this actually prints the result of the calculation above. 
    document.getElementById("area").textContent = "The area of the circle is: " + area;
  });