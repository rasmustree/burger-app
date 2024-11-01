
const optionsContainer = document.getElementById("options");
const ingredientsContainer = document.getElementById("ingredients");
const orderButtonContainer = document.getElementById("orderButton");

selectedBurger = "";
order = [];

fetch('/burgers').then(
    respone => respone.json()
).then(
    data => {
        burgers = data;
        onStart(burgers);
});

function onStart(burgers){ //Create buttons per burger
    for(let i = 0; i < burgers.length; i++ ){
        var button = document.createElement("button");
        button.textContent = burgers[i][0];
        button.addEventListener("click", onItemButtonClick);
        optionsContainer.appendChild(button);
    }
    var orderButton = document.createElement("button"); //Create button that adds to order (no funct yet)
    orderButton.textContent = "Add To Order";
    orderButton.addEventListener("click", onOrderButtonClick);
    orderButtonContainer.appendChild(orderButton);
    
    var checkoutButton = document.createElement("button"); //Create checkout button
    checkoutButton.textContent = "Checkout";
    checkoutButton.addEventListener("click", onCheckout);
    orderButtonContainer.appendChild(checkoutButton);
}

function onItemButtonClick(e){
    var ingredientsText = document.createElement("p");
    let existingParagraph = ingredientsContainer.querySelector("p");

    if(existingParagraph){
        existingParagraph.remove();
    }

    //add selected burgers ingredients to ingredientsText
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

function onOrderButtonClick(){ //Functionality to add to order button, pushes order to kitchenview
    if(selectedBurger != ""){
        order.push(selectedBurger);
    }
    for(let i = 0; i < order.length; i++){ //Logs what you ordered
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
