/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter

      Date:   09/27/24

      Filename: project02-01.js
 */

//Event Handler with anon function to handle and fill values on user input. (Celsius To Fahrenheit)

document.getElementById("cValue").onchange = function () {
      var cDegree = document.getElementById("cValue").value;
      document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
//Event Handler with anon function to handle and fill values on user input. (Fahrenheit To Celsius)
};
document.getElementById("fValue").onchange = function () {
      var fDegree = document.getElementById("fValue").value;
      document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);

};


// Named function to calculate Fahrenheit To Celsius with supplied value
function FahrenheitToCelsius(degree) {
      var cnnumbr = (degree - 32) / 1.8;

      return cnnumbr;

}
// Named function to calculate Celsius To Fahrenheit with supplied value 
function CelsiusToFahrenheit(degree) {
      var fnnumbr = degree * 1.8 + 32;

      return fnnumbr;

}
