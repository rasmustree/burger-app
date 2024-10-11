const express = require('express'); //import express
const app = express(); //skapa instans av express
const PORT = 3000;
const path = require('path')

app.get('/', (req, res) => {
    res.send('Hello World!'); //lyssna på request som görs till URL(localhost:3000)
    console.log('User has entered BurgerOrderer')
})

app.get('/items', (req, res) => {
    const filePath = path.join(__dirname, '/Containers/BurgerOrderer/Frontend_ordering/', 'frontend_objects.html')
    console.log('User entered items')
    res.sendFile(filePath)
})

app.get('/checkout/', (req, res) => {
    res.send('Here is a list of items user selected');
    console.log('User entered checkout');
})

app.get('/checkout/confirm/', (req, res) => {
    // WIP, should send the order to kitchenview
})

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`); //startar webserver och lyssnar på anslutningar
})