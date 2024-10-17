const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.post('/receive-order', (req, res) => {
    const order = req.body;
    console.log('Kitchen received order:', order);
    res.json({ message: 'Order received by kitchen view' });
});

app.listen(port, () => {
    console.log(`Kitchen view running at http://localhost:${port}`);
});
