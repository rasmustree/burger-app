// temp array
const burgers = [
    ["Cheeseburgare", "Bröd", "Kött", "Ost", "Sallad", "Ketchup"],
    ["Kycklingburgare", "Bröd", "Kyckling", "Ost", "Sallad", "Ketchup"]
]

function onStart(){
    for(let i = 0; i < burgers.length; i++ ){
        var button = document.createElement("button")
        button.textContent = burgers[i][0]
    }
}

