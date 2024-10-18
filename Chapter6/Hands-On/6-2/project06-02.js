"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-02

      Project to turn a selection list into a selection of hypertext links
      
      Date:   10/17/24

      Filename: project06-02.js
*/

//Event listener to open user selection in new tab
window.addEventListener("load", function() {
      let allSelect = document.querySelectorAll("form#govLinks");
      for (let i = 0; i < allSelect.length; i++) {
            allSelect[i].onchange = function(evt) {
                  let linkURL = evt.target.value;
                  let newWin = window.open(linkURL);
            }
      }
})


