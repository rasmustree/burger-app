const express = require('express'); //import express
const app = express(); //skapa instans av express
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!'); //lyssna på request som görs till URL(localhost:3000)
})

app.get('/burgers/', (req, res) => {
    res.send('Here are the burgers');
})

app.get('/combos/', (req, res) => {
    res.send('Here are the combos');
})

app.get('/drinks/', (req, res) => {
    res.send('Here are the drinks');
})

app.get('/sides/', (req, res) => {
    res.send('Here are the sides');
})

app.get('/checkout/', (req, res) => {
    res.send('Here is a list of items user selected');
})

app.get('/checkout/send/', (req, res) => {
    // WIP, should send the order to kitchenview
})

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`); //startar webserver och lyssnar på anslutningar
})