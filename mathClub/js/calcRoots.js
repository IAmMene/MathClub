/* File name: calcRoots.js
Author: Julian Menegon
Program: Software Development and Network Engineering
Date: 06/26/2
Version: 	1.0
Description: This file is used to calculate the roots for a quadratic function.  
*/

// Function to calculate the roots of a quadratic equation, first, the variables a, b, and c are declared and assigned to the input that would be recieved from the HTML document. 
/* Because I am working with decimals, the parseFloat like the other files is being used to convert the string to a decimal point number. 
Citation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
*/
function calculateRoots() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);
    
    /* The discriminant variable determines the discriminant of the quadratic equation.
    In order to store the roots an empty array is initialized to store the roots that are calculated later. 
    Citation: https://www.calculatorsoup.com/calculators/algebra/quadratic-formula-calculator.php
    https://www.w3schools.com/js/js_arrays.asp
    */
    var discriminant = b * b - 4 * a * c;
    var roots = [];
    
    /* An if else statement is used to determine the type of roots, for example, if the discriminant is greater than 0, that means that there are 2 distinct real roots. 
    Those roots are then calculated based on the values provided by the user, the logic for the quadratic equation is linked below. 
    if the discriminant is equal to 0 in both type and value, then there is only one root and that is calcuated accordingly. 
    Citation: https://www.w3schools.com/js/js_if_else.asp
    https://www.calculatorsoup.com/calculators/algebra/quadratic-formula-calculator.php 
    */
    if (discriminant > 0) {
      var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      roots.push(root1, root2);
    } else if (discriminant === 0) {
      var root = -b / (2 * a);
      roots.push(root);
    }
    //Reutns the roots array containing the calculated roots. 
    return roots;
  }
  
  // Form submit event handler, when the form that is labelled quadraticForm is submitted by the user. 
  /*
  Citation: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
  https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault 
  */
  document.getElementById("quadraticForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from being submitted after refreshing the page. 
    
    //A variable roots is set to the stored results from the array so that it can be used in the following if else statement. 
    var roots = calculateRoots();
    //Used to store the DOM element with the ID "roots" which will display the roots of the quadratic equation. 
    var resultElement = document.getElementById("roots");
    
    /*If the array length is equal to 2 in both value and type, then the roots are displayed. 
    if the root length is equal to 1 then only the one root is displayed 
    Everything else will warrant the scruipt to print "no real roots" 
    */
    if (roots.length === 2) {
      resultElement.textContent = "Roots: " + roots[0] + ", " + roots[1];
    } else if (roots.length === 1) {
      resultElement.textContent = "Root: " + roots[0];
    } else {
      resultElement.textContent = "No real roots";
    }
  });
  