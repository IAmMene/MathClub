/* File name: guessNum.js
Author: Julian Menegon
Program: Software Development and Network Engineering
Date: 06/26/2
Version: 	1.0
Description: The actual logic behind create a random number generator game. 
*/

/* The first line adds an event listener to the "DOMContentLoader" event of the guessNum.html. 
The second line in the below script declares targetNumber as a variable and this is where the random number between 1 and 10 is generated. 
It takes the Math.floor method to round down and return the largest integer and therefore will return a rounded number as opposed to a decimal number. 
The Math.random method is called in order to generate a random number between 0 and less than 1 and this is multiplied by 10 in order to ensure that the number range is from 1 -10, and +1 is added to make sure that the result is never 0. 
guesses variable is set in order to track the number of times the uesrs guesses the number. 
set guessed to false as this will be called later in the if else statement to confirm what happens depending on scenerio. 
Citation: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
document.addEventListener("DOMContentLoaded", function() {
    var targetNumber = Math.floor(Math.random() * 10) + 1;
    var guesses = 0;
    var guessed = false;

    //The below variables are set to the values that are determined by the HTML input by the user so that they can be called in the logic of the JS. 
    //Citation: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById 
    var guessInput = document.getElementById("guess");
    var submitButton = document.getElementById("submit");
    var answerText = document.getElementById("message");
    var resetButton = document.getElementById("reset");

    /* This adds an event listener to the click event that happens when a user clicks on the submit button on the HTML page.
    This was called in as a variable earlier and it is referenced here to be used by JS.
    When the submit button is clicked, we set a variable to store the user's input.
    Element with guess id is assigned to the variable that is passed through the partInt in order to return this string as an integer. 
    Citation: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt 
    */
    submitButton.addEventListener("click", function() {
      var userGuess = parseInt(guessInput.value);

      //This increases the guesses counter variable I set earlier each time the submit button is called so that the user knows how many guesses it took them.
      guesses++;

      /* if else if and else statement called in order to determine if the guesses that the user is inputing is actaully working.
      It is a conditional statement that is used to perform different actions based on different conditions.
      In this case, if the user's guess is equal in both type and value (equality operator) then a line of code will be displayed saying congradulations for guessing right and showing the user the number of guesses it took the user.
      This also sets the guessed variabled I declared earlier to true to show that the target number has been guessed and the reset button is now no longer hidden becaues the game is over and the game can be reset.
      Citation: https://www.w3schools.com/js/js_if_else.asp
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality 
      */ 
      if (userGuess === targetNumber) {
        answerText.textContent = "Congratulations! You guessed the number in " + guesses + " tries.";
        guessed = true;
        resetButton.hidden = false;
      /* This will not be the only true case, therefore, I have set an else if statement (if the first condition is false) in the event that the user guess is greater than the target number. 
      If the user input is greater than the target a warning message is displayed. 
      else statement happens in the final case where the user input is less than the target number and the warning statement will print.
      Citation: https://www.w3schools.com/js/js_if_else.asp
      */ 
      } else if (userGuess > targetNumber) {
        answerText.textContent = "Too high! Guess again.";
      } else {
        answerText.textContent = "Too low! Guess again.";
      }
    });

    /* This section is used to add another event handler for when the reset button is clicked by the user. 
    It will regenerate a random number between 1 and 10 as done before, and will set the guesses back to 0, the guessed back to false, and the input value in the textbox to 0.
    The reset button hidden is set to true so hide that option from the user. 
    The answerText.textContent resets the outputed statement to nothing as an empty string is set to the variable. 
    Citation: 
    */
    resetButton.addEventListener("click", function() {
      targetNumber = Math.floor(Math.random() * 10) + 1;
      guesses = 0;
      guessed = false;
      guessInput.value = "0";
      answerText.textContent = "";
      resetButton.hidden = true;
    });
  });