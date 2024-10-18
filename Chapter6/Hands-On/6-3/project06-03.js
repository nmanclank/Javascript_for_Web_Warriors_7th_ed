"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Date:   10/17/24

      Filename: project06-03.js
*/

let useShip = document.getElementById("useShip");

//Event handler for useShip button
useShip.addEventListener("click", copyShippingToBilling);

//function for useShip btn to copy info from  Shipping to Billing fields
function copyShippingToBilling() {
      let shipFName = document.getElementById("firstnameShip"), shipLName = document.getElementById("lastnameShip"),
      shipAdr1 = document.getElementById("address1Ship"), shipAdr2 = document.getElementById("address2Ship"), shipCity = document.getElementById("cityShip"),
      shipState = document.getElementById("stateShip"), shipCountry = document.getElementById("countryShip"), shipZipCode = document.getElementById("codeShip");


      if (useShip.checked) {
            document.getElementById("firstnameBill").value = shipFName.value;
            document.getElementById("lastnameBill").value = shipLName.value;
            document.getElementById("address1Bill").value = shipAdr1.value;
            document.getElementById("address2Bill").value = shipAdr2.value;
            document.getElementById("cityBill").value = shipCity.value;
            document.getElementById("stateBill").value = shipState.value;
            document.getElementById("codeBill").value = shipZipCode.value;
            document.getElementById("countryBill").value = shipCountry.value;
      }
}

//Declaring element for formElements, field count, and error box

let formElements = document.querySelectorAll("input[type='text']"), fieldCount = formElements.length,
      errorBox = document.getElementById("errorBox");

// for loop to iterate elements and listen for validation errors
for (let i = 0; i < formElements.length; i++) {
      formElements[i].addEventListener("invalid", showValidationError);
}

function showValidationError(evt) {
      evt.preventDefault();
      errorBox.innerText = "Complete all highlighted fields"
}

