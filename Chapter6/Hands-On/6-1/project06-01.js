"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account

      Date:   10/17/24

      Filename: project06-01.js
*/

let submitButton = document.getElementById("submitButton"); //submit btn
let pwd = document.getElementById("pwd"); // pwd field
let pwd2 = document.getElementById("pwd2"); // pwd confirmation field

// Event listener to check validation
submitButton.addEventListener("click", function() {
      if (pwd.validity.patternMismatch) {
            pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number")

      } else if ((pwd === pwd2)) {
            pwd.setCustomValidity("Your passwords must match")
      } else {
            pwd.setCustomValidity("")
      }
});
