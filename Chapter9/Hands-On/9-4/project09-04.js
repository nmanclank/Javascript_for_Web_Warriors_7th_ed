"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-04

      Project to store high scores from a game in a cookie
      Author: 
      Date:   

      Filename: project09-04.js
*/

/* Page Objects */
let bestText = document.getElementById("best");
let clockTimer = document.getElementById("timer");

// Custom event that runs when the puzzle is solved
window.addEventListener("puzzleSolved", updateRecord);

// Event listener that is run when the page loads
window.addEventListener("load", function() {
      if (document.cookie) {
            bestText.textContent = getBestTime() + " seconds"
      }
});

function getBestTime() {
      if (document.cookie) {

      let cookieArray = document.cookie;
      cookieArray = cookieArray.split("=");
      return parseInt(cookieArray[1]);
      }
      else {
            return 9999;
      }
}

function updateRecord() {
      let solutionTime = parseInt(document.getElementById("timer").value);
      let bestTime = getBestTime();

      if (solutionTime < bestTime) {
            bestTime = solutionTime
            bestText.textContent = bestTime + " seconds";


      }
      let maxAge = 7776000;
      document.cookie = "puzzle8Best" +  bestTime + "maxage =" + 60*60*24*90;
}
