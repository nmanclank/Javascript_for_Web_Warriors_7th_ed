/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form

      Date:   09/30/24

      Filename: project02-02.js
 */

// Function to verify form value

function verifyForm() {
      var name = document.getElementById("name").value
      var email = document.getElementById("email").value
      var phone = document.getElementById("phone").value

      if (name !== "" && email !== "" && phone !== "") {
            window.alert("Thank you!");
      } else {
            window.alert("Please fill in all fields");
      };
};

//Event listener for submit button
document.getElementById("submit").onclick =verifyForm;
