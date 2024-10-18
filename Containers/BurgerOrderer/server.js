const express = require('express'); //import express
const app = express(); //skapa instans av express
const PORT = 8080;
const path = require('path');
const axios = require('axios');
const cors = require('cors');

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:8080', 
    methods: ['GET', 'POST'],         
    allowedHeaders: ['Content-Type'], 
    credentials: true
};

// replace with database
const burgers = [
    ["Cheeseburgare", "Bröd", "Kött", "Ost", "Sallad", "Ketchup"],
    ["Kycklingburgare", "Bröd", "Kyckling", "Ost", "Sallad", "Ketchup"]
]

app.use(cors(corsOptions)); 
app.use(express.static(path.join(__dirname)));
app.use(express.json());

// Route for homepage
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'homepage.html');
    res.sendFile(filePath);
    console.log('User has entered BurgerOrderer');
});

app.get('/burgers', (req, res) =>{
    res.json(burgers);
})

// Route for items
app.get('/items', (req, res) => {
    const filePath = path.join(__dirname, 'frontend_objects.html');
    console.log('User entered items');
    console.log('Sending file: ', filePath);
    res.sendFile(filePath);
});

// Route for checkout
app.get('/checkout/', (req, res) => {
    const filePath = path.join(__dirname, 'checkout.html');
    console.log('User entered checkout');
    res.sendFile(filePath);
});

app.get('/checkout/ingredients/:name', (req, res) => {
    const burgerName = req.params.name
    const ingredients = [];

    for(let i = 0; i < burgers.length; i++){
        if(burgers[i][0] === burgerName){
            for(let j = 1; j < burgers[i].length; j++){
                ingredients.push(burgers[i][j]);
            }
            return res.json({ingredients});
        }
    }
    
})

// Route for order confirmation and sending to kitchen view
app.post('/checkout/confirm', (req, res) => {
    const order = req.body;
    console.log('Order confirmed, sending to kitchen view:', order);

    // Include orderId when forwarding the order
    const orderData = {
        orderId: order.orderId,
        items: order.items
    };

    // Forward the order to the kitchen view
    axios.post('http://kitchenview:8078/order', orderData)
        .then(response => {
            console.log('Order forwarded to kitchen view:', response.data);
            res.json({ message: 'Order confirmed and sent to the kitchen view' });
        });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`); //startar webserver och lyssnar på anslutningar
});
