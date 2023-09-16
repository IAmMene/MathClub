/* File name: add2nums.js
Author: Julian Menegon
Program: Software Development and Network Engineering
Date: 06/26/2
Version: 	1.0
Description: This file provides the actual logic behind converting from C to F. 
*/

// Creating a function to convert celcius to fahrenheit, doing this by defining a function named celsiusToFahrenheit that takes a parameter celsius and passes it through the function. 
//The mathematical conversion of C to F is done within this function. 
//Citations: https://www.w3schools.com/js/js_functions.asp
https://www.uptodate.com/contents/calculator-temperature-unit-conversions#:~:text=Temperature%20conversions%20use%20the%20following,*%209%2F5
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Function to convert Fahrenheit to Celsius, this is done by declaring a function and followed a similar naming scheme as before, passing a fahrenheit parameter through the function in order for it to be invoked and used for actual conversion. 
  //Citations: https://www.w3schools.com/js/js_functions.asp
  https://www.uptodate.com/contents/calculator-temperature-unit-conversions#:~:text=Temperature%20conversions%20use%20the%20following,*%209%2F5
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  // Function to update the temperature conversion result on the webpage, it does so by calling on various elements from the DOM using their IDs in the HTML file and assigning them a variable for use later. 
  //This function will be called upon later to update the temprature conversion result on the page.
  function updateResult() {
    var celsiusInput = document.getElementById("cdegree");
    var fahrenheitInput = document.getElementById("fdegree");
    var celsiusOutput = document.getElementById("cels");
    var fahrenheitOutput = document.getElementById("fahren");
  
    // Convert Celsius to Fahrenheit if Celsius input is provided using an if else statment. 
    //if the celsius input has a value then it will retrieve this value, it is then convereted into a floating point number using the parseFloat and I assign it to celcius.
    //parseFloat is used in the case where decimal numbers are used such as this. 
    //Then, celciusToFahrenheit function is called and the correct parameter is passed though it to make the conversion. 
    //The fahrenheitOutput.textContent prints the converted value onto the HTML webpage. 
    //The else statment represents the case where there is nothing placed in the Celsius input. 
    /*Citation: https://www.w3schools.com/js/js_if_else.asp
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
    */
    if (celsiusInput.value) {
      var celsius = parseFloat(celsiusInput.value);
      var fahrenheit = celsiusToFahrenheit(celsius);
      fahrenheitOutput.textContent = fahrenheit;
    } else {
      fahrenheitOutput.textContent = "-";
    }
  
    // Convert Fahrenheit to Celsius if Fahrenheit input is provided, this is done using the same logic as above. 
    if (fahrenheitInput.value) {
      var fahrenheit = parseFloat(fahrenheitInput.value);
      var celsius = fahrenheitToCelsius(fahrenheit);
      celsiusOutput.textContent = celsius;
    } else {
      celsiusOutput.textContent = "-";
    }
  }
  
  /* Attach event listeners to the when the document is loaded and an anonymous function defines the action to be performed when the page is loaded.
  Inside this function, variables for input are declared calling on those elements that are set up with the ids of cdegree and fdegree and are used to store references to C and F input elements in the HTML. 
  Another event listener is attached to the two input variables declared before and set the action to work when a user enters input in those areas. 
  When input occurs on those reference variabels, the updateResult function earlier in the document is called on. 
  */
  document.addEventListener("DOMContentLoaded", function() {
    var celsiusInput = document.getElementById("cdegree");
    var fahrenheitInput = document.getElementById("fdegree");
  
    celsiusInput.addEventListener("input", updateResult);
    fahrenheitInput.addEventListener("input", updateResult);
  });
  