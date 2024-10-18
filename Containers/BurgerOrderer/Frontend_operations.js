//import mysql from 'mysql'

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "burger",
    database: "MenuStoreDB"
});
const temp_burgers = []
con.connect(function(err) {
    if(err) throw err;
    con.query("SELCT * FROM burgers", function(err, result, fields) {
        if(err) throw err;
        temp_burgers = result;
    });
});



// temp array (kept incase shit hits the fan)
//const burgers = [
//    ["Cheeseburgare", "Bröd", "Kött", "Ost", "Sallad", "Ketchup"],
//    ["Kycklingburgare", "Bröd", "Kyckling", "Ost", "Sallad", "Ketchup"]
//]
const optionsContainer = document.getElementById("options");
const ingredientsContainer = document.getElementById("ingredients");
const orderButtonContainer = document.getElementById("orderButton");

selectedBurger = "";
order = [];

function onStart(){
    for(let i = 0; i < burgers.length; i++ ){
        var button = document.createElement("button");
        button.textContent = burgers[i][0];
        button.addEventListener("click", onItemButtonClick);
        optionsContainer.appendChild(button);
    }
    var orderButton = document.createElement("button");
    orderButton.textContent = "Add To Order";
    orderButton.addEventListener("click", onOrderButtonClick);
    orderButtonContainer.appendChild(orderButton);
    
    // Add checkout button to navigate to checkout page
    var checkoutButton = document.createElement("button");
    checkoutButton.textContent = "Checkout";
    checkoutButton.addEventListener("click", onCheckout);
    orderButtonContainer.appendChild(checkoutButton);
}

function onItemButtonClick(e){
    console.log(e.target.textContent + " has been clicked!");
    var ingredientsText = document.createElement("p");
    let existingParagraph = ingredientsContainer.querySelector("p");
    if(existingParagraph){
        existingParagraph.remove();
    }
    for (let i = 0; i < burgers.length; i++) {
        if (burgers[i][0] === e.target.textContent){
            selectedBurger = burgers[i][0];
            for (let j = 1; j < burgers[i].length; j++) {
                ingredientsText.innerHTML += `${burgers[i][j]}\n`;
            }
            break;
        }
    }
    ingredientsContainer.appendChild(ingredientsText);
}

function onOrderButtonClick(){
    if(selectedBurger != ""){
        order.push(selectedBurger);
    }
    for(let i = 0; i < order.length; i++){
        console.log(order[i]);
    }
}

// Add function to handle checkout navigation
function onCheckout() {
    // Save the current order to localStorage for use in the checkout page
    localStorage.setItem('currentOrder', JSON.stringify(order));  // Fixed the key name
    // Navigate to the checkout page
    window.location.href = '/checkout.html';
}
