// temp array
const burgers = [
    ["Cheeseburgare", "Bröd", "Kött", "Ost", "Sallad", "Ketchup"],
    ["Kycklingburgare", "Bröd", "Kyckling", "Ost", "Sallad", "Ketchup"]
]
const optionsContainer = document.getElementById("options");
const ingredientsContainer = document.getElementById("ingredients")

function onStart(){
    for(let i = 0; i < burgers.length; i++ ){
        var button = document.createElement("button");
        button.textContent = burgers[i][0];
        button.addEventListener("click", onItemButtonClick);
        optionsContainer.appendChild(button);
    }
}
function onItemButtonClick(e){
    console.log(e.target.textContent + " has been clicked!");
    var ingredientsText = document.createElement("p");
    let existingParagraph = ingredientsContainer.querySelector("p")
    if(existingParagraph){
        existingParagraph.remove()
    }
    for (let i = 0; i < burgers.length; i++) {
        if (burgers[i][0] === e.target.textContent){
            for (let j = 1; j < burgers[i].length; j++) {
                ingredientsText.innerHTML += `${burgers[i][j]}\n`
            }
            var button = document.createElement("button")
            button.textContent = "Add To Order"
            button.addEventListener("click", onOrderButtonClick)
            break;
        }
    }
    ingredientsContainer.appendChild(ingredientsText)
    ingredientsContainer.appendChild(button)
}
function onOrderButtonClick(e){
    console.log("Order Button Clicked!")
}