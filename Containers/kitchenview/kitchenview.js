const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/checkout/confirm/', (req, res) => {
    const kitchenFilePath = path.join(__dirname, 'kitchenview', 'kitchen_view.html');
    console.log('User confirmed order, displaying kitchen view');
    res.sendFile(kitchenFilePath);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
