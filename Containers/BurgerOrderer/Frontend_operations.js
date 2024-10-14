// temp array
const burgers = [
    ["Cheeseburgare", "Bröd", "Kött", "Ost", "Sallad", "Ketchup"],
    ["Kycklingburgare", "Bröd", "Kyckling", "Ost", "Sallad", "Ketchup"]
]

function onStart(){
    for(let i = 0; i < burgers.length; i++ ){
        for(let j = 0; j < burgers[i].length; j++ ){
            console.log(burgers[i][j])
        }
    }
}
