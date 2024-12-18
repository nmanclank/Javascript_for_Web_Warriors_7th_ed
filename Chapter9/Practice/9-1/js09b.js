"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Chapter case
      
      Eating Well in Season 


      Date:   11/14/24
      
      Filename: js09b.js
 */

// Retrieve the text of the query string 
let qString = location.search.slice(1);
// Replace encoded characters in string
qString = qString.replace(/\+/g, " ");
qString = decodeURIComponent(qString);

//Split the fieldname pairs into seperate array items
let formData = qString.split(/&/g);

for (let items of formData) {
      //Extract field names & Values
      let fieldValuePair = items.split(/=/);
      let fieldName = fieldValuePair[0];
      let fieldValue = fieldValuePair[1];

      //Create a label containing the field name
      let fieldLabel = document.createElement("label");
      fieldLabel.textContent = fieldName;
      document.getElementById("contactInfo").appendChild(fieldLabel);

      //Create disabled input box with field value
      let inputBox = document.createElement("input");
      inputBox.id = fieldName;
      inputBox.name = fieldName;
      inputBox.value = fieldValue;
      inputBox.disabled = true;
      document.getElementById("contactInfo").appendChild(inputBox);
}

// Store Data in local storage
document.getElementById("signupBtn").onclick = function() {
      // Data fields to be saved to local storage
      let formFields =  document.querySelectorAll("#contactInfo input, input[type=radio], textarea");

      //Write each field name and value to local storage
      for (let fields of formFields) {
            localStorage.setItem(fields.name, fields.value);
      }
      console.log(localStorage);
}
