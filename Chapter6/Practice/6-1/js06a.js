"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code

      Date:   10/15/24

      Filename: js06a.js
 */

window.addEventListener("load", function() {
      let orderForm = document.forms.orderForm;
      let model = orderForm.elements.model;

      // Select model selection list when form opens
      model.focus();

      // Event handler for form elements
      for (let i = 0; i < orderForm.elements.length; i++) {
            orderForm.elements[i].addEventListener("change", calcOrder);
      }

      // Calculate the code of the order 
      calcOrder();

      function calcOrder() {
            // Determine the selected model
            let mIndex = model.selectedIndex;
            let mValue = model.options[mIndex].value;

            //Determine selected quantity
            let qIndex = orderForm.elements.qty.selectedIndex;
            let quantity = orderForm.elements.qty[qIndex].value;

            // modelCost = model cost * quantity
            let modelCost = mValue*quantity;
            orderForm.elements.modelCost.value = modelCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

            //retrieve the cost of protection plan
            let planValue = document.querySelector('input[name="plan"]:checked').value;

            //Charge the plan cost to each item ordered
            let planCost = planValue * quantity;
            orderForm.elements.planCost.value = planCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

            // Calculate the order subtotal
            let subtotal = modelCost + planCost;
            orderForm.elements.subtotal.value = subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"});

            // calculate the 5% sales tax
            let salesTax = subtotal * 0.05;
            orderForm.elements.salesTax.value = salesTax.toLocaleString("en-US", {style: "currency", currency: "USD"});

            //Calculate total order cost
            let totalCost = subtotal + salesTax;
            orderForm.elements.totalCost.value = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

            orderForm.elements.modelName.value = model.options[mIndex].text;
            let selectedPlan = document.querySelector('input[name="plan"]:checked');
            orderForm.elements.planName.value = selectedPlan.labels[0].textContent;

      }
});





