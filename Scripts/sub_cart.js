"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Joshua Butrum
   Date: 3/18/2024

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/

window.addEventListener("load", setupCart);

function setupCart() {
   const addButtons = document.getElementsByClassName("addButton");

   for (var i = 0; i < addButtons.length; i++) {
      addButtons[i].onclick = addItem;
   }
}

function addItem(e) {
   const foodItem = e.target.nextElementSibling;
   const foodID = foodItem.getAttribute("id");
   const foodDescription = foodItem.cloneNode(true);
   const cartBox = document.getElementById("cart");
   let duplicateOrder = false;
   for (var i = cartBox.firstElementChild; i = i.nextElementSibling; i !== null) {
      if (i.id === foodID) {
         duplicateOrder = true;
         i.firstElementChild.textContent++;
         break;
      }
   }

   if (duplicateOrder === false) {
      const orderCount = document.createElement("span");
      orderCount.textContent = "1";
      foodDescription.insertBefore(orderCount, foodDescription.firstChild);
      cartBox.appendChild(foodDescription);
   }
}
