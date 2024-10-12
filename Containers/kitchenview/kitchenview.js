const readline = require('readline');
const express = require('express');
const app = express();
const PORT = 5000;


const orders = [
  { id: 1, items: ['Bacon Burger', 'Fries'] },
];

// Function to display orders
const displayOrders = () => {
  console.log("\n Kitchen Orders");
  orders.forEach(order => {
    console.log(`Order #${order.id}: ${order.items.join(', ')}`);
  });
};

// Display the orders
displayOrders();

// If you need to keep express running for API purposes:
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`); //startar webserver och lyssnar på anslutningar
})