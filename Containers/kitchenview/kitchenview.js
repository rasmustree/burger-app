const express = require('express');
const path = require('path');
const app = express();

// Serve the static HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'kitchen_view.html'));  // Adjust path as needed
});

// Set the port from environment variable or default to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Kitchenview server running on port ${PORT}`);
});
