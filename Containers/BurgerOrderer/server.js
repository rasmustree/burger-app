const express = require('express'); //import express
const app = express(); //skapa instans av express
const PORT = 3000;
const path = require('path')

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'homepage.html')
    res.sendFile(filePath)
    console.log('User has entered BurgerOrderer')
})

app.get('/items', (req, res) => {
    const filePath = path.join(__dirname, 'frontend_objects.html');
    console.log('User entered items')
    console.log('Sending file: ', filePath)
    res.sendFile(filePath)
})

app.get('/checkout/', (req, res) => {
    res.send('Here is a list of items user selected');
    console.log('User entered checkout');
})

app.get('/checkout/confirm/', (req, res) => {
    const kitchenFilePath = path.join(__dirname, 'kitchenview', 'kitchen_view.html');
    console.log('User confirmed order, displaying kitchen view');
    res.sendFile(kitchenFilePath);
});

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`); //startar webserver och lyssnar på anslutningar
})