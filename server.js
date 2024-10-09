const express = require('express'); //import express
const app = express(); //skapa instans av express
const PORT = 3000;

const Burgers = [
    {name: "Bacon burgare"},
    {name: "Cheese burgare"}
]

const Sides = [
    {name: "Pommes"},
    {name: "20x Nuggets"}
]

const Combos = [
    {name: "Bacon burgare meny"},
    {name: "Cheese burgare meny"},
    {name: "20x Nuggets meny"}
]

const drinks = [
    {name: "Cola"},
    {name: "Fanta"}
]


app.get('/', (req, res) => {
    res.send('Hello World!'); //lyssna på request som görs till URL(localhost:3000)
    console.log('User has entered BurgerOrderer')
})

app.get('/burgers/', (req, res) => {
    res.send('Here are the burgers');
    console.log('User entered burgers')
    console.log(Burgers)
})

app.get('/combos/', (req, res) => {
    res.send('Here are the combos');
    console.log('User entered combos');
    console.log(Combos)
})

app.get('/drinks/', (req, res) => {
    res.send('Here are the drinks');
    console.log('User entered drinks');
    console.log(drinks)
})

app.get('/sides/', (req, res) => {
    res.send('Here are the sides');
    console.log('User entered sides');
    console.log(Sides)
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