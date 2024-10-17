const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8078;

// Endpoint to receive orders
app.post('/order', (req, res) => {
    console.log('Order received:', req.body);
    res.status(200).send('Order received');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Kitchen view running on port ${PORT}`);
});
