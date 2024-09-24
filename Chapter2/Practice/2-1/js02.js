/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: 
      Date:   

      Filename: js02.js
 */

//Global constants for the app

const EMP_COST = 100;
const BOOK_COST = 350;
const REPRO_COST = 1250;
const TRAVEL_COST = 2;

// Setup the form on page load
window.addEventListener("load", setupForm);


// Set the initial values for the form

function setupForm() {
      document.getElementById("photoNum").value = 1;
      document.getElementById("photoHrs").value = 2;
      document.getElementById("makeBook").checked = false;
      document.getElementById("photoRights").checked = false;
      document.getElementById("photoDist").value = 0;

      getEstimate();

      // Event handlers for each user input
      document.getElementById("photoNum").onchange = getEstimate;
      document.getElementById("photoHrs").onchange = getEstimate;
      document.getElementById("photoDist").onchange = getEstimate;
      document.getElementById("makeBook").onchange = getEstimate;
      document.getElementById("photoRights").onchange = getEstimate;
}

//estimate the total service cost

function getEstimate() {
      let totalCost = 0;
      let photographers = document.getElementById("photoNum").value;
      let hours = document.getElementById("photoHrs").value;
      let distance = document.getElementById("photoDist").value;
      let buyBook = document.getElementById("makeBook").checked;
      let buyRights = document.getElementById("photoRights").checked;

      // Add cost of photographers for the hours covered
      totalCost += photographers * hours * EMP_COST;

      // Add the cost for distance of photographer per mile
      totalCost += photographers * distance * TRAVEL_COST;

      // Checks to see if users wants to include photobook
      totalCost += buyBook ? BOOK_COST : 0;

      // Checks to see if user wants to include reproduction rights for photos
      totalCost += buyRights ? REPRO_COST : 0;

      // Display total cost
      document.getElementById("estimate").innerHTML = "$" + totalCost;
}
