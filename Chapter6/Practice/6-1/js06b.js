"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Date: 10/15/24   

      Filename: js06b.js
 */

let subButton = document.getElementById("subButton");

// Validate payment on submit
subButton.addEventListener("click", validateName);

// Validate card number on submit
subButton.addEventListener("click", validateNumber);

// Validate the month and year
window.addEventListener("click", validateMonth);
window.addEventListener("click", validateYear);

// Listener for CVC
subButton.addEventListener("click", validateCVC);

// Check if owner name is entered on cardfunction
function validateName() {
   let cardName = document.getElementById("cardName");
   if (cardName.validity.valueMissing) {
      cardName.setCustomValidity("Enter your name as it appears on card");
   } else {
      cardName.setCustomValidity("");
   }
}

// Check if card number is valid
function validateNumber() {
   
   let cNum = document.getElementById("cardNumber");
   
   if (cNum.validity.valueMissing) {
      cNum.setCustomValidity("Enter your card number");
   } else if (cNum.validity.patternMismatch) {
      cNum.setCustomValidity("Enter a valid card number");
   } else if (luhn(cNum.value) === false) {
      cNum.setCustomValidity("Enter a legitimate card number");      
   } else {
      cNum.setCustomValidity("");
   }
}

//Function to validate the year field
function validateYear() {
   let year = document.getElementById("expYear");
   if (year.selectedIndex === 0) {
      year.setCustomValidity("Select the year of expiration");
   } else {
      year.setCustomValidity("");
   }
}

//Function to validate month field
function validateMonth() {
   let month = document.getElementById("expMonth");
   if (month.selectedIndex === 0) {
      month.setCustomValidity("Select the month of expiration");
   } else {
      month.setCustomValidity("");
   }
}

//Function to validateCVC
function validateCVC() {
   //Determine which card was selected
   let card = document.querySelector('input[name="credit"]:checked').value;
   let cvc = document.getElementById("cvc");

   // validate cvc value
   if (cvc.validity.valueMissing) {
      cvc.setCustomValidity("Enter CVC number");
   } else if ((card === "amex") && !(/^\d{4}$/.test(cvc.value))) {
      cvc.setCustomValidity("Enter a 4-digit number");
   } else if ((card !== "amex") && !(/^\d{3}$/.test(cvc.value))) {
      cvc.setCustomValidity("Enter a 3-digit number");
   } else {
      cvc.setCustomValidity("");
   }
}




















/* ------- Luhn Algorithm used for Validating Credit Card Numbers   ----- */

function luhn(idNum) {
   let string1 = "";
   let string2 = "";
   
   // Retrieve the odd-numbered digits starting from the back
   for (let i = idNum.length - 1; i >= 0; i-= 2) {
      string1 += idNum.charAt(i);
   }
   // Retrieve the even-numbered digits starting from the back and double them
   for (let i = idNum.length - 2; i >= 0; i-= 2) {
      string2 += 2*idNum.charAt(i);
   }
   
   // Return whether the sum of the digits is divisible by 10
   return sumDigits(string1 + string2) % 10 === 0;
   
   function sumDigits(numStr) {
      let digitTotal = 0;
      for (let i = 0; i < numStr.length; i++) {
         digitTotal += parseInt(numStr.charAt(i));
      }
      return digitTotal;
   }
}
   

