"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Date: 10/10/24  

      Filename: project05-03.js
*/



//declare variables used
let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;
// constant for heading
const heading = "H2";

//for loop to alter document and append each item + ref link in sidebar
for(let n = sourceDoc.firstElementChild; n != null; n = n.nextElementSibling) {
      if(n.nodeName === heading) {
            let anchor = document.createElement("a");
            anchor.name = "doclink" + headingCount;
            n.insertBefore(anchor, n.firstElementChild);

            //build link item and add doclink
            let listItem = document.createElement("li");
            let link = document.createElement("a");
            link.href = "#doclink" +headingCount
            link.textContent = n.textContent;
            listItem.appendChild(link);
            // Append to toc
            toc.appendChild(listItem);
            //Counter that increases with each loop
            headingCount++
      }
}


