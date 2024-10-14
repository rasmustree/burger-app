// temp array
const burgers = [
    ["Cheeseburgare", "Bröd", "Kött", "Ost", "Sallad", "Ketchup"],
    ["Kycklingburgare", "Bröd", "Kyckling", "Ost", "Sallad", "Ketchup"]
]
const optionsContainer = document.getElementById("options");

function onStart(){
    for(let i = 0; i < burgers.length; i++ ){
        var button = document.createElement("button");
        button.textContent = burgers[i][0];
        button.addEventListener("click", onButtonClick);
        optionsContainer.appendChild(button);
    }
}
function onButtonClick(e){
    console.log(e.target.textContent + " has been clicked!");
    var ingredientsText = document.createElement("p");
    ingredientsText.textContent = "";
    for (let i = 0; i < burgers.length; i++) {
        if (burgers[i][0] === e.target.textContent){
            for (let j = 1; j < burgers[i].length; j++) {
                ingredientsText.textContent += `${burgers[i][j]}\n`
            }
            break;
        }
    }
    optionsContainer.appendChild(ingredientsText)
}
