"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Date:   10/10/24

      Filename: project05-02.js
*/
//delare variables used
let images = document.getElementsByTagName("img");
let photoBucket = document.getElementById("photo_bucket");
let photoList = document.getElementById("photo_list");

//for loop to cycle through clicked images and determine where they should be listed
for (let i = 0; i < images.length; i++) {
      images[i].onclick = function() {
            if(this.parentElement.id === "photo_bucket") {
                  let newItem = document.createElement("li");
                  photoList.appendChild(newItem);
                  newItem.appendChild(this);
            } else {
                  let oldItem = this.parentElement;
                  photoBucket.appendChild(this);
                  oldItem.parentElement.removeChild(oldItem);
            }
      }
}

