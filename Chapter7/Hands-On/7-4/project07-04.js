"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue

      Date:   11/05/24

      Filename: project07-04.js
*/

let customers = ["Alisha Jordan","Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
                 "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
                 "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
                 "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
                 "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
                 "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
                 "Wesley Cho"];

let customerName = document.getElementById("customerName");

let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

let status = document.getElementById("status");

generateCustomerList();

// Function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
   customerList.innerHTML = "";
   for (let i = 0; i < customers.length; i++) {
      let customerItem = document.createElement("li");      
      customerItem.textContent = customers[i];     
      customerList.appendChild(customerItem);
   }
}

addButton.onclick = function() {
   customers.push(customerName.value);
   generateCustomerList();
   status.textContent = customerName.value + " added to the end of the queue."
}
//Event Handler for the Search button and the logic that follows
searchButton.onclick = function() {
   let place = customers.indexOf(customerName.value) + 1;
   if(place === 0) {
      status.textContent = customerName.value + " is not found in the queue."
   } else {
      status.textContent = customerName.value + " found in postion " + place + " of the queue."
   }
}

//Event Handler for the remove button and the logic that follows
removeButton.onclick = function() {
   let index = customers.indexOf(customerName.value);

   if(!(index === -1)) {
      customers.splice(index, 1);
      status.textContent = "Customer removed from the queue.";
      generateCustomerList();
   } else {
      status.textContent = "Customer is not found in the queue.";
   }
}
//Event Handler for the TopCustomer button and the logic that follows
topButton.onclick = function() {
   let topCustomer = customers.shift();
   status.textContent = topCustomer + " from the queue.";
   generateCustomerList();
}
