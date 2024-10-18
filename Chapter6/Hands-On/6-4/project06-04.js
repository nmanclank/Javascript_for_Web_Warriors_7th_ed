"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-04

      Project to turn a selection list into a selection of hypertext links
      Date:   10/17/24  

      Filename: project06-04.js
*/

// Selection lists in the web form
let make = document.getElementById("make");
let model = document.getElementById("model");
let trim = document.getElementById("trim");

// Option elements within the selection lists
let makeOptions = document.querySelectorAll("select#make option");
let modelOptions = document.querySelectorAll("select#model option");
let trimOptions = document.querySelectorAll("select#trim option");

// The number of options within each selection list
let makes = makeOptions.length;
let models = modelOptions.length;
let trims = trimOptions.length;

// Form button to generate the complete text of the selected vehicle
let selectVehicle = document.getElementById("selectVehicle");

// Paragraph containing the text of the selected vehicle
let vehicle = document.getElementById("vehicle");


// Event handler to modify the content of the Model selection list
// when the Make selection list changes

make.onchange = function() {
   let makeIndex = make.selectedIndex;
   let makeCategory = make.options[makeIndex].text;
   
   if (makeIndex === 0) {
      showAll(model);
   } else {
      filterSelect(model, makeCategory);
   }  
}

// Event handler to modify the content of the Trim selection list
// when the Model selection list changes

model.onchange = function() {
   let modelIndex = model.selectedIndex;
   let modelCategory = model.options[modelIndex].text;
   
   if (modelIndex === 0) {
      showAll(trim);
   } else {
      filterSelect(trim, modelCategory);
   }     
}

//Show all function

function showAll(selectList) {
   let options = selectList.options;
   let optionsLength = options.length;

   for (let i = 0; i < optionsLength; i++) {
      options[i].style.display = "block";
   }
}

// function to filter out options not related to user selection
function filterSelect(selectList, category) {
   let options = selectList.options;
   let optionsLength = options.length;

   for (let i = 0; i < optionsLength; i++) {
      if (options[i].className === category) {
         options[i].style.display = "block";
      } else {
         options[i].style.display = "none";
      }
   }
}

// Display selected vehicle information below the selection
selectVehicle.addEventListener("click", function() {
   let makeInfor = make.options[make.selectedIndex].textContent;
   let modelInfor = model.options[model.selectedIndex].textContent;
   let trimInfor = trim.options[trim.selectedIndex].textContent;
   vehicle.innerText = makeInfor + " " + modelInfor + " " + trimInfor;
})