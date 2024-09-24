/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
  
      Date:   09/21/24

      Filename: project02-04.js
 */
 
const CHICKEN_PRICE = 10.95, HALIBUT_PRICE = 13.95, BURGER_PRICE = 9.95, SALMON_PRICE = 18.95, 
SALAD_PRICE = 7.95, SALES_TAX = 0.07;

// Event handlers to update page with user interaction

document.getElementById("chicken").onchange = calcTotal;
document.getElementById("halibut").onchange = calcTotal;
document.getElementById("burger").onchange = calcTotal;
document.getElementById("salmon").onchange = calcTotal;
document.getElementById("salad").onchange = calcTotal;

 function calcTotal() {
   var cost = 0;
   var buyChicken = document.getElementById("chicken").checked, buyHalibut = document.getElementById("halibut").checked,
   buyBurger = document.getElementById("burger").checked, buySalmon = document.getElementById("salmon").checked,
   buySalad = document.getElementById("salad").checked;

   cost += buyChicken ? CHICKEN_PRICE : 0;
   cost += buyHalibut ? HALIBUT_PRICE : 0;
   cost += buyBurger ? BURGER_PRICE : 0;
   cost += buySalmon ? SALMON_PRICE : 0;
   cost += buySalad ? SALAD_PRICE : 0;

   document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

   var tax = cost * SALES_TAX;

   document.getElementById("foodTax").innerHTML = formatCurrency(tax);

   var totalCost = cost + tax;

   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);

   return totalCost;

 }


// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
