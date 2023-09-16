/* File name: callFibonacci.js
Author: Julian Menegon
Program: Software Development and Network Engineering
Date: 06/26/2
Version: 	1.0
Description: The logic for calculating the Fibonacci sequence webpage. 
*/

/* Delcaring a function to calculate the sequence, the parameter of the number of terms in the Fibonacci sequence is passed through this if else sequence. 
if n is less than or equal to 0, an empty array is returned as the sequence cannot be conducted.
if the sequence number is equal in value and type to 1, then an array containing only one index is returned. 
Again, if it is equal to 2, then only an array holding 0 and 1 will be used.
This is because the sequence is calculated by adding the two preceding terms, in which case those situations where not enough sequences that are presented must be accounted for. 
Citation: https://www.calculatorsoup.com/calculators/discretemathematics/fibonacci-calculator.php
https://www.w3schools.com/js/js_if_else.asp 
*/
function fibonacci(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      /*Initialize an array that holds the first two values of the sequence.
      A for loop is used so that an action can be conducted over and over again over a set number of iterations.
      In this case, the variable is set to 2 to show that there are 2 terms present in the sequence. 
      This loop will iterate as many times as is inputed by the user, and each time an iteration occurs, I am setting the nextFib to the index of one less than the current index being iterated through the loop and adding 
      it to 2 less than the index of the current iteration. These values are added to an array using the push method. 
      This for loop is doing the actual calcluation of the Fibonacci sequence.
      Citation: https://www.w3schools.com/js/js_loop_for.asp
      https://www.w3schools.com/jsref/jsref_push.asp
      */
      var fibSeries = [0, 1];
      for (var i = 2; i < n; i++) {
        var nextFib = fibSeries[i - 1] + fibSeries[i - 2];
        fibSeries.push(nextFib);
      }
      return fibSeries;
    }
  }
  
/* This section calls on the form element from the HTML document to provide the information from the fibonacciForm and every time a submit button is clicked an anonymous function is run using the event that just occured.

Citation: https://www.w3schools.com/js/js_htmldom_document.asp
https://www.w3schools.com/jsref/met_element_addeventlistener.asp 
*/
  document.getElementById("fibonacciForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Variable called to get the number of sequences being calcuated for. 
    var num = document.getElementById("num").value;
    
    // This calles on the fibonacci function to calculate the sequence. 
    var fibSequence = fibonacci(num);
    
    // The page is then updated and displayed the answer the user is looking for. 
    document.getElementById("fibSequence").textContent = "Fibonacci Sequence: " + fibSequence.join(", ");
  });
  