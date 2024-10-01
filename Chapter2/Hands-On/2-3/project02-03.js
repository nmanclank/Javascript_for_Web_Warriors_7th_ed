/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object

      Date:   09/30/24

      Filename: project02-03.js
 */


// Square hover event handler logic // Mouse in and out
document.getElementById("square").onmouseover = function(){
      document.getElementById("feedback").innerHTML = "You're hovering over the square"
}

document.getElementById("square").onmouseout = function(){
      document.getElementById("feedback").innerHTML = ""
}


// Triangle hover event handler logic // Mouse in and out
document.getElementById("triangle").onmouseover = function(){
      document.getElementById("feedback").innerHTML = "You're hovering over the triangle"
}

document.getElementById("triangle").onmouseout = function(){
      document.getElementById("feedback").innerHTML = ""
}

//Cirlce hover event handler logic // Mouse in and out
document.getElementById("circle").onmouseover = function(){
      document.getElementById("feedback").innerHTML = "You're hovering over the circle"
}

document.getElementById("circle").onmouseout = function(){
      document.getElementById("feedback").innerHTML = ""
}
