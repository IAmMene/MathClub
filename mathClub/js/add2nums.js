/* File name: add2nums.js
Author: Julian Menegon
Program: Software Development and Network Engineering
Date: 06/26/2
Version: 	1.0
Description: The explanation and the logic for the Adding 2 Numbers webpage. 
*/

/* In order to access any element in an HTML page, one needs to always start wtih accessing the document object which is done using document. 
document.getElementById(id) Finds an element by element id, in this case, I have set the form to addNumbersForm so this DOM document object reference is calling on the information from that section of the HTML page. 
The addEventListener is looking for the submission event to take place (someone clicks the add button I created in the HTML doc), once that is done an "anonymous function" is used to pass parameter values that were attained from the form from the HTML. 
Citation: https://www.w3schools.com/js/js_htmldom_document.asp
https://www.w3schools.com/jsref/met_element_addeventlistener.asp 
*/
document.getElementById("addNumbersForm").addEventListener("submit", function(event) {
  /* This warns the user agent that if the event does not get explicitly handled, the default action should not take place as it normally would. 
  This prevent the page from being reloaded after the form is submitted. 
  Citation: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  */
  event.preventDefault(); 
  
  /* Variables for the two inputs are created as required by JS.
  For variable number1, this is taking the input from the form on the add2num html page as it was labelled "number1". 
  The .value property gets the current value of the input field and finally the parseInt is used to conver the input from a string to an integer so that the two Strings turned integers from the variabels can be added in JS later in the code. 
  Citation: https://www.w3schools.com/js/js_variables.asp
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt 
  https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
  */
  var number1 = parseInt(document.getElementById("number1").value);
  var number2 = parseInt(document.getElementById("number2").value);
  
  /* Values from variables number1 and number2 are added together and assigned to result. 
  Citation: 
  */
  var result = number1 + number2;
  
  /* Setting a variable so that the paragraph element from the html can be called on and updated. 
  Get the resultElement innerHTML property (which is used to return the HTML content of an element) which is used to display the results of the addition. 
  It is printed in HTML format. 
  Citation: https://www.w3schools.com/jsref/prop_html_innerhtml.asp
  */
  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "<h2>Result</h2><p>" + result + "</p>";
});
