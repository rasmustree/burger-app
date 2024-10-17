const express = require('express'); //import express
const app = express(); //skapa instans av express
const PORT = 3000;
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'homepage.html')
    res.sendFile(filePath)
    console.log('User has entered BurgerOrderer')
})

app.get('/items', (req, res) => {
    const filePath = path.join(__dirname, 'frontend_objects.html');
    console.log('User entered items');
    console.log('Sending file: ', filePath);
    res.sendFile(filePath);
})

app.get('/checkout', (req, res) => {
    const filePath = path.join(__dirname, 'checkout.html');
    
    res.sendFile(filePath);
})

app.post('/checkout', (req, res) => {
    const order = req.body.order;

    res.json({ message: "Order received", order: order });
})

app.post('/checkout/confirm', (req, res) => {
    const order = req.body; 
    console.log('Order confirmed, sending to kitchen view:', order);
    res.json({ message: 'Order confirmed and sent to the kitchen view' });
});


app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`); //startar webserver och lyssnar på anslutningar
})