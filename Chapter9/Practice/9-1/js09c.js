"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Chapter case
      
      Eating Well in Season Retrieving Data from Local Storage


      Date:   11/14/24
      
      Filename: js09c.js
 */

      //Eating Well Preference Keys
      let keys = ["name", "email", "phone", "address", "city", "state", 
            "zip", "allergies", "frequency", "size"]
      

      for (let item of keys) {
            let newRow = document.createElement("tr");

            //Display the storage Key
            let keyCell = document.createElement("td")
            keyCell.textContent = item;
            newRow.appendChild(keyCell)
            
            //Display key value
            let keyValue = document.createElement("td");
            keyValue.textContent = localStorage.getItem(item);
            newRow.appendChild(keyValue);

            //Append each key=name pair as a table row
            document.getElementById("prefTable").appendChild(newRow);
      }

      //Remove Eating Well Keys when the remove preference button is clicked
      document.getElementById("removePrefBtn").onclick = function() {
            for (let item of keys) {
                  localStorage.removeItem(item);
            }
      }

